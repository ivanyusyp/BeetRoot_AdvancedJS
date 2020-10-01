import React, { useState, useEffect } from "react";
import PrintScrollToBottom from "./PrintScrollToBottom";
import { data, subscribeToMessages } from "../data";

const Messages = props => {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		console.log(data)
		setMessages(data)
		const fn = subscribeToMessages(message => {
			setMessages(prev => [...prev, message]);
		});
		return () => fn();
	}, []);

	return (
		<div className="container pt-5">
			<PrintScrollToBottom>
				<ul className="grid">
					{messages.map(message => (
						<li className="box" key={message.id}>
							<div
								className="box__avatar"
								style={{ backgroundImage: `url(${message.img})` }}
							/>
							<p className="box__content">{message.text}</p>
						</li>
					))}
				</ul>
			</PrintScrollToBottom>
		</div>
	);
}




export default Messages;
