'use client';

import TypeIt from 'typeit-react';

export default (props: {
	waitTime: number;
}) => (
	<div className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
		<TypeIt
			getBeforeInit={(instance) => {
				instance
					.type('email')
					.pause(props.waitTime)
					.delete(5)
					.type('social media')
					.pause(props.waitTime)
					.delete(12)
					.type('website')
					.pause(props.waitTime)
					.delete(7)
					.type('landing page')
					.pause(props.waitTime)
					.delete(12)
					.type('e-commerce')
					.pause(props.waitTime)
					.delete(10)
					.type('app')
					.pause(props.waitTime)
					.delete(3)
					.type('marketing');
				return instance;
			}}
		/>
	</div>
);
