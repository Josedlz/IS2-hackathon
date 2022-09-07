const knex = require("knex")({
	client: "pg",
	connection: {
		host: process.env.PGSQL_HOST,
		port: process.env.PGSQL_PORT,
		user: process.env.PGSQL_USER,
		password: process.env.PGSQL_PASSWORD,
		database: process.env.PGSQL_DATABASE,
	},
});

const databaseServiceFactory = () => {
	const TABLE = "users";

	const getUser = async (email) => {
		const user = await knex(TABLE).select().where("email", email);
		if (user.length === 0) {
			throw new Error("User not found");
		}
		return user[0];
	};

	const getAllUsers = async () => {
		const user = await knex(TABLE).select();
		if (user.length === 0) {
			throw new Error("User not found");
		}

		return user;
	};

	// get all users

    // add to tabele new register
    const enrollUser = async (first_name, last_name, email, password,is_admin) => {
		const newuser = await knex(TABLE).insert({
            first_name: first_name, 
            last_name: last_name, 
            email: email,
            password: password,
            is_admin: is_admin
        })

		if (newuser.length === 0) {
			throw new Error("User not found");
		}

		return newuser;
	};


	return { getUser, getAllUsers, enrollUser };
};

module.exports = {
	databaseServiceFactory,
};
