import {AttendanceEvents} from './helpers/attendanceEvents.ts';

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
	const ATTENDANCE_TABLE = "attendance";

	const getUser = async (email) => {
		const user = await knex(TABLE).select().where("email", email);
		if (user.length === 0) {
			throw new Error("User not found");
		}
		return user[0];
	};

	// get all users, should need to auth as admin xd
	const getAllUsers = async () => {
		const user = await knex(TABLE).select();
		if (user.length === 0) {
			throw new Error("User not found");
		}

		return user;
	};

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
	

	const checkInUser = async (user_id) => {
		const checkIn = await knex(ATTENDANCE_TABLE).insert({
			user_id: user_id,
			datetime: new Date(),
			event: AttendanceEvents.CHECKIN,

		}).returning('datetime');

		if (checkIn.length === 0) throw new Error ("Check in failed");

		return checkIn;
	};

	const checkIfUserCheckedIn = async (user_id) => {
		const checkIn = await knex(ATTENDANCE_TABLE).select().where("user_id", user_id).orderBy("datetime", "desc").limit(1);
		if (checkIn.length === 0) return false;
		return checkIn[0].event === AttendanceEvents.CHECKIN;
	};

	/* si quieren hacer cualquier cosa con la database la pueden armar como una funcion
	parecida a las de arriba, usando knex para seleccionar o insertar*/

	return { getUser, getAllUsers, enrollUser, checkInUser, checkIfUserCheckedIn/*, resto de funciones */ };
};

module.exports = {
	databaseServiceFactory,
};
