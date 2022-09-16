export default async (req, res) => {
	const method = req.method.toLowerCase();

	if (method !== "get") {
		return res.status(405).end(`Method ${req.method} Not allowed`);
	}
	try {
		res.status(200).json({ msg: "server is currently online" });
		console.log("server online");
		// return res.end()
	} catch (error) {
		res.status(403).json({ error: "there has been an unknown error" });
	}
	// return res.end()
};
