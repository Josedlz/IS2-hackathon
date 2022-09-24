import { databaseServiceFactory } from "../../services/databaseService";
import { authServiceFactory } from "../../services/authService";
import { withSessionRoute } from "../../lib/session";

const dbService = databaseServiceFactory();
const authService = authServiceFactory();

export default withSessionRoute(async (req, res) => {
	const ERROR_CREDENTIALS = "Invalid email and/or password";

	const method = req.method.toLowerCase();
	const { email, password } = req.body;

	if (method !== "post") {
		return res.status(405).end(`Method ${req.method} Not allowed`);
	}

	try {
		const userCredentials = await dbService.getUser(email);
		console.log("gotten");

		console.log(userCredentials);
		const isAdmin = userCredentials.is_admin;
		if (
			(await authService.validate(password, userCredentials.password)) ===
			true
		) {
			await saveSession(email, isAdmin, req);
			res.status(200).json({ msg: "login sucess", email, isAdmin });
			return;
		}
	} catch (error) {
		const DatabaseError = error.message;
		console.log(DatabaseError);
		res.status(403).json({ error: ERROR_CREDENTIALS, DatabaseError });
		// res.status(403).json({ DatabaseError });
	}
});

async function saveSession(email, isAdmin, request) {
	request.session.email = email;
	request.session.isAdmin = isAdmin;
	console.log(request.session);
	await request.session.save();
}
