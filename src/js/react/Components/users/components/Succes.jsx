import React from "react";

export const Success = ({ count, setSendInvite }) => {
	return (
		<div className="success-block">
			<img src="img/success.svg" alt="Success" />
			<h3>Успешно!</h3>
			<p>Всем {count} пользователям отправлено приглашение.</p>
			<button onClick={() => setSendInvite(false)} className="send-invite-btn">Назад</button>
		</div>
	);
};
