import React from "react";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
	const history = useHistory();
	return (
		<div className="section" style={{ marginBottom:10 }}>
			<div className="column  is-half-desktop is-offset-3-desktop">
				<nav className="level is-half-desktop">
					<div className="level-item has-text-centered">
						<div>
							<figure className="image is-64x64">
								<img src={`${process.env.PUBLIC_URL}/logo192.png`} />
							</figure>
						</div>
						<p className="title">Macaroni</p>
					</div>
				</nav>
				<form className="box">
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input className="input" type="email" placeholder="e.g. alex@example.com"/>
						</div>
					</div>
					<div className="field">
						<label className="label">Password</label>
						<div className="control">
							<input className="input" type="password" placeholder="********"/>
						</div>
					</div>
					<button className="button is-primary">Login</button>
				</form>
				<button className="button is-link is-light is-fullwidth" onClick={()=> history.push("/sign-up")}>Sign up</button>
			</div>
		</div>);
};
export default Login;