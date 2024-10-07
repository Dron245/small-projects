import React from 'react';

const User = ({ data }) => {
	const { login, avatar_url, public_repos, followers, following, created_at, name } = data;
	return (
		<div className='github-user'>
			<div className='github-user__top'>
				<a target='_blank' href={`https://github.com/${login}`} className='github-user__text'>Логин: {name || login}</a>
				<p className='github-user__text'>{`${new Date(created_at).getDate()} 
				${new Date(created_at).toLocaleString("ru-RU", {month: 'short'})} ${new Date(created_at).getFullYear()}`}</p>
			</div>
			<div className="github-user__content">
			<img className='github-user__img' src={avatar_url} alt='image' />
				<p className="github-user__text">Публичных репозиториев: {public_repos}</p>
				<p className="github-user__text">Подписчкиков: {followers}</p>
				<p className="github-user__text">Подписок: {following}</p>
			</div>
		</div>
	);
};

export default User;
