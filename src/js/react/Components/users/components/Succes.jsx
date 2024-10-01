import React from "react";

export const Success = ({ count, items }) => {
	return (
		<div className="success-block">
			<img src="img/success.svg" alt="Success" />
			<h3>Успешно!</h3>
			{
				count === items ?
				<p>Всем пользователям отправлено приглашение.</p> :
				<p>{count} пользователям отправлено приглашение.</p>
			}
			
			<button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
		</div>
	);
};
