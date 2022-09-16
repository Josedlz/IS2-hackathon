import { databaseServiceFactory } from "../../services/databaseService";
const dbService = databaseServiceFactory();

export default async (req, res) => {
	const method = req.method.toLowerCase();

	if (method !== "get") {
		return res.status(405).end(`Method ${req.method} Not allowed`);
	}
	try {
		await dbService.testConnection();

		res.status(200).json({ msg: "DB is currently online" });
		console.log("DB online");
	} catch (error) {
		res.status(403).json({ error });
	}
	// res.status(403).json({ error: "there has been an unknown error" });
};
