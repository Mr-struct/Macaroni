import { faCheck, faEnvelope, faLink, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

const SignUp: React.FC = () => {
	const [imageLink, setImageLink] = useState("");
	return (
		<div className="section" style={{ marginBottom: 10 }}>
			<div className="column  is-half-desktop is-offset-3-desktop">
				<form className="box">
          
					<div className="field">
						<nav className="level">
							<div className="level-item">
								<figure className="image is-128x128">
									<img className="is-rounded image is-128x128" src={imageLink.length > 0 ? imageLink : defaultImage} width={128} height={128}/>
								</figure>
							</div>
						</nav>
						<label className="label">Profil pic link</label>
						<div className="control has-icons-left has-icons-right">
							<input className="input" type="text" placeholder="Text input" value={imageLink} onChange={({target})=>setImageLink(target.value)}/>
							<span className="icon is-small is-left">
								<FontAwesomeIcon icon={faLink} />
							</span>
						</div>
					</div>

					<div className="field">
						<label className="label">Username</label>
						<div className="control has-icons-left has-icons-right">
							<input className="input is-success" type="text" placeholder="Text input" />
							<span className="icon is-small is-left">
								<FontAwesomeIcon icon={faUser} />
							</span>
							<span className="icon is-small is-right">
								<FontAwesomeIcon icon={faCheck} />
							</span>
						</div>
						<p className="help is-success">This username is available</p>
					</div>


					<div className="field">
						<label className="label">Email</label>
						<div className="control has-icons-left has-icons-right">
							<input className="input is-danger" type="email" placeholder="Email input" />
							<span className="icon is-small is-left">
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							<span className="icon is-small is-right">
								<i className="fas fa-exclamation-triangle"></i>
							</span>
						</div>
						<p className="help is-danger">This email is invalid</p>
					</div>


					<div className="field">
						<label className="label">Password</label>
						<div className="control has-icons-left has-icons-right">
							<input className="input is-danger" type="password" placeholder="Email input" />
							<span className="icon is-small is-left">
								<FontAwesomeIcon icon={faLock} />
							</span>
							<span className="icon is-small is-right">
								<i className="fas fa-exclamation-triangle"></i>
							</span>
						</div>
						<p className="help is-danger">This email is invalid</p>
					</div>

					<div className="field">
						<div className="control">
							<label className="checkbox">
								<input type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
							</label>
						</div>
					</div>
				</form>
				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-link is-light">back</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;