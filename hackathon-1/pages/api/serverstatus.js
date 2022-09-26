// import { useRouter  } from 'next/router'
// import { GetServerSideProps, NextPage } from "next";

export default async (req, res) => {
	const method = req.method.toLowerCase();
	// const { asPath, pathname } = useRouter();
	// console.log(asPath); // '/blog/xyz'
	// console.log(pathname); // '/blog/[slug]'
	if (method !== "get") {
		return res.status(405).end(`Method ${req.method} Not allowed`);
	}
	try {
		res.status(200).json({ msg: "server is currently online" });
		console.log("server online");
	} catch (error) {
		res.status(403).json({ error: "there has been an unknown error" });
	}
};
