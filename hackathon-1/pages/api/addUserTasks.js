import { databaseServiceFactory } from "../../services/databaseService";
import { withSessionRoute } from "../../lib/session";

// import bcrypt

const dbService = databaseServiceFactory();

export default // should be logged in
withSessionRoute
(async (req, res) => {
	// const ERROR_CREDENTIALS = "Invalid email and/or password";

	const method = req.method.toLowerCase();
	const { email, title, description, start_date, end_date } = req.body;

	if (method !== "post") {
		return res.status(405).end(`Method ${req.method} Not allowed`);
	}
    
	try {
        // const user = req.session.email;

		// check if current user is admin

		// const userCredentials = await dbService.getUser(req.session.email);
		// if (userCredentials.is_admin === true) {

        // check if checking for own 
		// if (user === email) {
        // if (user) {
        if(true){

			// const hashedpassword = bcrypt.hash(
			// 	password,
			// 	process.env.SALT_ROUNDS
			// );

			// console.log(password,saltRounds);

			// bcrypt.hash(password, saltRounds, function (error, hash) {
			// 	console.log(first_name,last_name,email,hash,is_admin)
			// 	dbService.enrollUser(
			// 		first_name,
			// 		last_name,
			// 		email,
			// 		hash,
			// 		is_admin
			// 	);

			// 	if (error)
			// 		throw Error("bad insert")
			// });

            const newtask = dbService.addUserTasks(email, title, description, start_date, end_date)
			res.status(200).json({ msg: "gotten tasks", newtask });
			return;
		}
	} catch (error) {
        const DatabaseError = error.message
		console.log(DatabaseError);
        res.status(403).json({ DatabaseError });
	}
	res.status(403).json({ error: "there has been an unknown error", error});
});

// async function saveSession(user, request) {
// 	request.session.email = user;
// 	await request.session.save();
// }
