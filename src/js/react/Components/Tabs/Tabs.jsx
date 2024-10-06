import React from "react";
import "./index.scss";

const Tabs = () => {

	const content = [
		{
			title: "1qwe",
			text: "1kjdfd fgdfgkjdnfgkdjfngkjdfng",
		},
		{
			title: "2qwe",
			text: "2kjdfgkjddfg dfgnfgkdjfngkjdfng",
		},
		{
			title: "3qwe",
			text: "3kjdsfdfg dfgdfgkjdnfgkdjfngkjdfng",
		},
	];
	
	const [tabs, settabs] = React.useState(0);

	console.log(tabs);
	
	return (
		<>
			<div className="tabs">
				<div className="tabs__container">
					<div className="tabs__body">
						<div className="tabs__titles">
							{content.map((item, index) => (
								<div onClick={() => settabs(index)}
									className = {index === tabs ? 'tabs__title active-tabs' : 'tabs__title'}
									key={item.title}>
									{item.title}
								</div>
							))}
						</div>
						<div className="tabs__content">
							{content.map((item, index)=>(
								<div
								key={item.title}>
									{tabs === index && item.text}
								</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tabs;
