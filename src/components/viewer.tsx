import { Data } from '@typescript/types';
import Link from 'next/link';
import SocialLink from './socialLink';
import Facebook from '../../public/Facebook.png'
import Instagram from '../../public/Instagram_Glyph_Gradient.png'
import Twitter from '../../public/x-twitter.svg'
import YouTube from '../../public/yt_icon_rgb.png'
import TikTok from '../../public/LogosTiktokIcon.svg'
import Spotify from '../../public/logos-spotify-icon.svg';
import Discord from '../../public/logos-discord-icon.svg'
import Pinterest from '../../public/logos-pinterest.svg'
import Snapchat from '../../public/Snapchat_2019.png';
import Twitch from '../../public/TwitchGlitchPurple.svg'
import Reddit from '../../public/logos-reddit-icon.svg'
import Messenger from '../../public/messenger.png'
import LinkedIn from '../../public/linkedin.svg'

export default (data: Data) => (
	<div>
		<div className="m-auto">
			<div className="flex content-center justify-center p-4" style={{ fontSize: '20rem' }}>
				{data.photoURL ? <img src={data.photoURL} alt="" className='rounded-full w-32' />
					: <i className="bi bi-person-circle"></i>
				}
			</div>
			<h1 className="text-center font-bold">
				{data.name}
			</h1>
			<h4 className='text-center text-ellipsis'>
				{data.description}
			</h4>
			<div className="flex content-center justify-center">
				<Link href={`mailto:${data.email}` || '#'}>{data.email || ''}</Link>
                    &nbsp;{data.email && data.phone ? ' | ' : ''}&nbsp;
				<Link href={`tel:${data.phone}` || '#'}>{data.phone || ''}</Link>
			</div>
			<hr />
			<div className="flex content-center justify-evenly">
				{data.facebook ? <SocialLink name='Facebook' link={data.facebook} image={{
					src: Facebook,
					alt: 'facebook',
				}} /> : <></>}
				{data.instagram ? <SocialLink name='Instagram' link={data.instagram} image={{
					src: Instagram,
					alt: 'instagram',
				}} /> : <></>}
				{data.twitter ? <SocialLink name='Twitter' link={data.twitter} image={{
					src: Twitter,
					alt: 'twitter',
				}} /> : <></>}
				{data.youtube ? <SocialLink name='YouTube' link={data.youtube} image={{
					src: YouTube,
					alt: 'youtube',
				}} /> : <></>}
				{data.tiktok ? <SocialLink name='TikTok' link={data.tiktok} image={{
					src: TikTok,
					alt: 'tiktok',
				}} /> : <></>}
				{data.discord ? <SocialLink name='Discord' link={data.discord} image={{
					src: Discord,
					alt: 'discord',
				}} /> : <></>}
				{data.pinterest ? <SocialLink name='Pinterest' link={data.pinterest} image={{
					src: Pinterest,
					alt: 'pinterest',
				}} /> : <></>}
				{data.spotify ? <SocialLink name='Spotify' link={data.spotify} image={{
					src: Spotify,
					alt: 'spotify',
				}} /> : <></>}
				{data.snapchat ? <SocialLink name='Snapchat' link={data.snapchat} image={{
					src: Snapchat,
					alt: 'snapchat',
				}} /> : <></>}
				{data.reddit ? <SocialLink name='Reddit' link={data.reddit} image={{
					src: Reddit,
					alt: 'reddit',
				}} /> : <></>}
				{data.twitch ? <SocialLink name='Twitch' link={data.twitch} image={{
					src: Twitch,
					alt: 'twitch glitch',
				}} /> : <></>}
				{data.messenger ? <SocialLink name='Messenger' link={data.messenger} image={{
					src: Messenger,
					alt: 'messenger',
				}} /> : <></>}
				{data.linkedIn ? <SocialLink name='LinkedIn' link={data.linkedIn} image={{
					src: LinkedIn,
					alt: 'LinkedIn',
				}} /> : <></>}
			</div>
			<hr />
			{data.magicLink ? <div className='flex content-center justify-center'>
				<iframe src={data.magicLink} className='w-full h-96' style={{
					height: '52rem',
				}} title='Magic Link' ></iframe>
			</div> : <></>}
		</div>
	</div>
);
