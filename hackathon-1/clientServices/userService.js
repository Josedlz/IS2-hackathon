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
	
	function getTasks(email) {
		return axios.get(`/api/getUserTasks`, {
			email
		});
	}

	function markTaskDone(task_id) {
		console.log(task_id);
		return axios.post(`/api/markTaskComplete`, {
			task_id
		});
	}

	return { login, register, getTasks, markTaskDone };
};

module.exports = {
	userServiceFactory,
};
