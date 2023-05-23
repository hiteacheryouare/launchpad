'use client';

import TypeIt from 'typeit-react';

const waitTime = 1500;
export default () => (
	<div className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
		<TypeIt
			getBeforeInit={(instance) => {
				instance
					.type('email')
					.pause(waitTime)
					.delete(5)
					.type('social media')
					.pause(waitTime)
					.delete(12)
					.type('website')
					.pause(waitTime)
					.delete(7)
					.type('landing page')
					.pause(waitTime)
					.delete(12)
					.type('e-commerce')
					.pause(waitTime)
					.delete(10)
					.type('app')
					.pause(waitTime)
					.delete(3)
					.type('marketing');
				return instance;
			}}
		/>
	</div>
);
