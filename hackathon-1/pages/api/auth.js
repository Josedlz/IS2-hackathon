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
		if ((await authService.validate(password, userCredentials.password)) === true) {
			await saveSession({ email, user_id: userCredentials.id }, req);
			// res.status(200).json({ admin:userCredentials.is_admin });
			res.status(200).json({ email, user_id: userCredentials.id });

			return;
		}
	} catch (error) {
		console.log(error);
	}
	res.status(403).json({ error: ERROR_CREDENTIALS });
});

async function saveSession(email, request) {
	request.session.email = email;
	await request.session.save();
}
