import axios from "axios";

// sends the login post request

const userServiceFactory = () => {
	function login(email, password) {
		return axios.post(`/api/auth`, { email, password });
	}
	function register(first_name, last_name, email, password, is_admin) {
		return axios.post(`/api/enroll`, {
			first_name,
			last_name,
			email,
			password,
			is_admin
		});
		// probs more stuff to add, also have to be authed as admin
	}
	return { login, register };
};

module.exports = {
	userServiceFactory,
};
