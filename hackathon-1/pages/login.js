import { useState } from "react";
import { userServiceFactory } from "../clientServices/userService";
import useUser from "../lib/useUser";

const userService = userServiceFactory();

export default function Login() {
	const { user, mutateUser } = useUser({
		redirectTo: "/",
		redirectIfFound: true,
	});

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			mutateUser(await userService.login(email, password));
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div>
			{!user ? (
				<h1>Loading....</h1>
			) : (
				<>
					{!user.isLoggedIn && (
						
						<form onSubmit={handleSubmit}>
							<div>
								<h1>LOGIN TO FISCALIZADOR</h1>
								<div className="imgcontainer">
									<img
										src="https://i.imgur.com/H0AuOna.png"
										alt="Avatar"
										className="avatar"
										style={{
										height: "200px",
										width: "200px",
										borderRadius: 150,
										overflow: "hidden",
										borderWidth: 3,
										borderColor: "red"
									}}
									/>
									
								</div>

								<div className="container">
									<label htmlFor="email">
										<b>Email</b>
									</label>
									<input
										type="email"
										placeholder="Enter Email"
										name="email"
										required
										onChange={emailHandler}
									/>

									<label htmlFor="psw">
										<b>Password</b>
									</label>
									<input
										type="password"
										placeholder="Enter Password"
										name="psw"
										required
										onChange={passwordHandler}
									/>

									<button type="submit">Login</button>
								</div>
								
							</div>
						</form>
						
					)}
				</>
			)}
		</div>
	);
}
