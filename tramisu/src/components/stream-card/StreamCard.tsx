import { faAssistiveListeningSystems, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const StreamCard = () => {
	return (
		<div className="column is-half-desktop is-offset-3-desktop is-12-mobile">
			<div className="card box">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src="https://bulma.io/images/placeholders/640x360.png" alt="Placeholder image" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4">John Smith</p>
							<p className="subtitle is-6">@johnsmith</p>
						</div>
					</div>

					<div className="content">
						<p>Description: </p>
					</div>
				</div>
				<nav className="level is-mobile">
					<div className="level-item has-text-centered">
						<div>
							<FontAwesomeIcon icon={faAssistiveListeningSystems} size={"2x"} />
							<p className="title">3,456</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<FontAwesomeIcon icon={faUsers} size={"2x"} />
							<p className="title">123</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<FontAwesomeIcon icon={faHeart} size={"2x"} />
							<p className="title">456K</p>
						</div>
					</div>
				</nav>
			</div>
		</div>);
};

export default StreamCard;