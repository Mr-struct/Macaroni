import StreamCard from "components/streamCard/StreamCard";
import React from "react";
const Streams = () => (
	<div className="section">
		<div className="columns is-multiline is-mobile" style={{marginBottom:30}}>
			{Array.from(Array(10).keys()).map(itemMok => <StreamCard key={itemMok}/>)}
		</div>
	</div>);

export default Streams;