import React from "react";
import { User } from "./User.jsx";
import { Skeleton } from "./Sceleton.jsx";

export const Users = ({ items, isLoading, searchValue, inputSearch, buttonSendInvite, addInvite, invite, invited }) => {
	const filteredItems = items.filter( item => {
		const name = item.first_name + item.last_name
		return name.toLowerCase().includes(searchValue.toLowerCase()) || 
				item.email.toLowerCase().includes(searchValue.toLowerCase())
		}
	)
		

	return (
		<>
			<div className="search">
				<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
				</svg>
				<input value={searchValue} onChange={(e) => inputSearch(e)} type="text" placeholder="Найти пользователя..." />
			</div>
			{isLoading ? (
				<div className="skeleton-list">
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			) : (
				<ul className="users-list">
					{filteredItems.map((item) => (
						<User 
						key={item.id} 
						{...item} 
						addInvite ={addInvite}
						invited= {invited}
						/>
					))}
				</ul>
			)}
			{invite.length > 0 && 
				<button onClick={buttonSendInvite} className="send-invite-btn">Отправить приглашение</button>
			}
		</>
	);
};
