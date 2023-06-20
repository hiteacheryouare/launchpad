import Link from 'next/link';
import Typer from '../components/typer';
import HeroIframe from '../components/heroIframe';
import Icon from '../components/icon';

export default () => (
	<div className="bg-gradient-to-br from-theme-secondary via-theme-blue to-theme-primary p-10" style={{ height: '100%' }}>
		<div className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl grid grid-cols-2 portrait:grid-cols-1 pb-96" >
			<div className="text-white p-10 dark:leading-relaxed">
        Take your <Typer waitTime={1500} /> <span className="underline">to the moon</span>
				<div>
					<Link href="/design" className="btn btn-light"> <i className="bi bi-layers-half"></i> Launch the Generator</Link> &nbsp;
					<Link href="/view" className="btn btn-dark"> <i className="bi bi-eye"></i> View a Creation</Link> &nbsp;
					<Link href="/api" className="btn btn-info"> <i className="bi bi-code"></i> API Reference</Link>
				</div>
			</div>
			<div>
				<HeroIframe />
			</div>
			<div className="flex content-center justify-center">
				<Link href="/#ydps" className="rounded-full flex content-center justify-center bg-theme-accent animate-bounce" scroll={false}>
					<Icon name="arrow-down" />
				</Link>
			</div>
		</div>
		<div id="ydps">
			<div className="text-white text-center font-semibold p-10 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        Your Digital Presence <span className="underline">sucks.</span>
			</div>
			<div className="text-white text-center font-normal text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        Are you tired of being <span className="underline hover:bg-white hover:text-red-500 hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="eye-slash" /> ignored</span> by your target audience?
        Do you wish you had a <span className="underline hover:bg-white hover:text-theme-secondary hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="magic" /> magic</span> tool that could make your content stand out from the crowd?
        Well, look no further than <span className="underline hover:bg-white hover:text-theme-primary hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="rocket-takeoff" /> Launchpad</span>, the ultimate personal marketing platform.
        Launchpad helps you create <span className="underline hover:bg-white hover:text-theme-orange hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="fire" /> stunning</span> landing pages, <span className="underline hover:bg-white hover:text-pink-500 hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="heart-pulse" /> captivating</span> digital buisness cards, and <span className="underline hover:bg-white hover:text-fuchsia-600 hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="hypnotize" /> irresistable</span> visuals that will make your prospects <span className="underline hover:bg-white hover:text-green-500 hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="piggy-bank" /> beg to pay you</span> for more.
        Launchpad is not for the faint of heart. It's for the <span className="underline hover:bg-white hover:text-theme-orange hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="speedometer" /> bold</span>, the <span className="underline hover:bg-white hover:text-zinc-500 hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="activity" /> brave</span>, and the <span className="underline hover:bg-white hover:text-red-500 hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="suit-spade" /> badass</span>.
        If you're ready to <span className="underline hover:bg-white hover:text-theme-accent hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="arrow-up-square-fill" /> level up</span> your personal marketing game and leave your competitors in the <span className="underline hover:bg-white hover:text-yellow-700 hover:font-bold hover:p-4 hover:rounded-md transition-all hover:no-underline"> <Icon name="cloud-haze2" /> dust</span>, then you need Launchpad.
        Don't settle for mediocrity. Launch your success with Launchpad today.
			</div>
		</div>
	</div>
);
