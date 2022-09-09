import { databaseServiceFactory } from "../../services/databaseService";
import { withSessionRoute } from "../../lib/session";
import * as bcrypt from "bcryptjs";

// import bcrypt

const dbService = databaseServiceFactory();
const saltRounds = 11;
// const saltRounds = process.env.SALT_ROUNDS;

export default // should be logged in
// withSessionRoute
(async (req, res) => {
	// const ERROR_CREDENTIALS = "Invalid email and/or password";

	const method = req.method.toLowerCase();
	const { first_name, last_name, email, password, is_admin } = req.body;

	if (method !== "post") {
		return res.status(405).end(`Method ${req.method} Not allowed`);
	}

	try {
		// const user = req.session.email;

		// check if current user is admin

		// const userCredentials = await dbService.getUser(req.session.email);
		// if (userCredentials.is_admin === true) {
		if (true) {

			// const hashedpassword = bcrypt.hash(
			// 	password,
			// 	process.env.SALT_ROUNDS
			// );

			console.log(password,saltRounds);

			bcrypt.hash(password, saltRounds, function (error, hash) {
				console.log(first_name,last_name,email,hash,is_admin)
				dbService.enrollUser(
					first_name,
					last_name,
					email,
					hash,
					is_admin
				);

				if (error)
					throw Error("bad insert")
			});

			res.status(200).json({ msg: "sucessfully added user" });
			return;
		}
	} catch (error) {
		// if (error instanceof DatabaseError) {
		// 	console.log("pgerror:", error);


		// 	// handle pg error by checking error.code or something else
		// 	// then send an custom error message to the client
		// }
		console.log(error);
		// handle another error here which is not caused by the postgres server
	}
	res.status(403).json({ error: "there has been an error" });
});

// async function saveSession(user, request) {
// 	request.session.email = user;
// 	await request.session.save();
// }
