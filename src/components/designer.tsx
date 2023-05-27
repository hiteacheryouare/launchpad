'use client';
import { setClipboardText } from 'uadetect/dist/clipboard'
import { useState } from 'react';
import '../styles/iframe.module.scss';
import '../styles/form.scss';
import { url as appURL } from '@typescript/constants';
import encodeData from '@typescript/encode';
import type { Data } from '@typescript/types';
import Viewer from './viewer';
import Icon from './icon';

const Designer = () => {
	const [data, setData] = useState<Data>({
		name: '',
		photoURL: '',
		description: '',
		instagram: '',
		facebook: '',
		twitter: '',
		youtube: '',
		tiktok: '',
		discord: '',
		pinterest: '',
		spotify: '',
		snapchat: '',
		reddit: '',
		twitch: '',
		messenger: '',
		phone: '',
		email: '',
		magicLink: '',
	});
	let readyToSubmit = false;
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		readyToSubmit = true;
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const url = `${appURL}/view/${encodeData(data)}`;
		window.navigator.clipboard.writeText(url).then(() => alert('Copied to clipboard!'));
	};
	const createEmbed = () => {
		const url = `${appURL}/view/${encodeData(data)}`;
		const embed = `<iframe src="${url}" width="100%" height="100%" style="border: none;"></iframe>`;
		window.navigator.clipboard.writeText(embed).then(() => alert('Copied to clipboard! Now paste the code into any place that supports embedding (including email!'));
	};

	const prefillData = () => setData({
		name: 'John Doe',
		photoURL: 'https://i.pravatar.cc/300',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
		instagram: 'https://www.instagram.com/ianhecox/',
		facebook: 'https://www.facebook.com/Meta/',
		twitter: 'https://twitter.com/mkbhd',
		youtube: 'https://www.youtube.com/channel/UCNIuvl7V8zACPpTmmNIqP2A',
		tiktok: 'https://www.tiktok.com/@joerauth_',
		discord: 'https://discord.com/invite/zsE9rwM',
		pinterest: 'https://www.pinterest.com/ideas/',
		spotify: 'https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi',
		snapchat: 'https://www.snapchat.com/',
		reddit: 'https://www.reddit.com/r/memes/',
		twitch: 'https://www.twitch.tv/chocotaco',
		messenger: 'https://www.messenger.com/',
		phone: '+1 (555) 555-5555',
		email: 'john.dover@joemail.com',
		magicLink: 'https://demotivator.web.app/',
	});
	const clearData = () => setData({name: "",description: ""})

	return (
		<>
			<div className="grid grid-cols-2 portrait:grid-cols-1">
				<div>
					<form className="p-4" onSubmit={handleSubmit}>
						<label className="form-label" htmlFor="name">
							<Icon name='person' />Name
						</label>
						<div className='input-group'>
							<input
								type="text"
								name="name"
								id="name"
								className="border-2 h-full form-control"
								onChange={handleInputChange}
								value={data.name}
								required
							/>
						</div>

						<label className="form-label" htmlFor="photoURL">
                        <Icon name='file-image' />Photo URL
						</label>
						<input
							type="text"
							name="photoURL"
							id="photoURL"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.photoURL || ''}
						/>

						<label className="form-label" htmlFor="description">
                        <Icon name='text-paragraph' />Description
						</label>
						<input
							name="description"
							id="description"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.description}
							required
						/>

						<label className="form-label" htmlFor="instagram">
                        <Icon name='instagram' />Instagram
						</label>
						<input
							type="text"
							name="instagram"
							id="instagram"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.instagram || ''}
						/>

						<label className="form-label" htmlFor="facebook">
                        <Icon name='facebook' />Facebook
						</label>
						<input
							type="text"
							name="facebook"
							id="facebook"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.facebook || ''}
						/>

						<label className="form-label" htmlFor="twitter">
                        <Icon name='twitter' />Twitter
						</label>
						<input
							type="text"
							name="twitter"
							id="twitter"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.twitter || ''}
						/>

						<label className="form-label" htmlFor="youtube">
                        <Icon name='youtube' />YouTube
						</label>
						<input
							type="text"
							name="youtube"
							id="youtube"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.youtube || ''}
						/>

						<label className="form-label" htmlFor="tiktok">
                        <Icon name='tiktok' />TikTok
						</label>
						<input
							type="text"
							name="tiktok"
							id="tiktok"
							className="border-2 form-control"
							onChange={handleInputChange}

							value={data.tiktok || ''}
						/>

						<label className="form-label" htmlFor="discord">
                        <Icon name='discord' />Discord
						</label>
						<input
							type="text"
							name="discord"
							id="discord"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.discord || ''}
						/>

						<label className="form-label" htmlFor="pinterest">
                        <Icon name='pinterest' />Pinterest
						</label>
						<input
							type="text"
							name="pinterest"
							id="pinterest"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.pinterest || ''}
						/>

						<label className="form-label" htmlFor="spotify">
                        <Icon name='spotify' />Spotify
						</label>
						<input
							type="text"
							name="spotify"
							id="spotify"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.spotify || ''}
						/>

						<label className="form-label" htmlFor="snapchat">
                        <Icon name='snapchat' />Snapchat
						</label>
						<input
							type="text"
							name="snapchat"
							id="snapchat"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.snapchat || ''}
						/>

						<label className="form-label" htmlFor="reddit">
                        <Icon name='reddit' />Reddit
						</label>
						<input
							type="text"
							name="reddit"
							id="reddit"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.reddit || ''}
						/>

						<label className="form-label" htmlFor="twitch">
                        <Icon name='twitch' />Twitch
						</label>
						<input
							type="text"
							name="twitch"
							id="twitch"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.twitch || ''}
						/>

						<label className="form-label" htmlFor="messenger">
                        <Icon name='messenger' />Messenger
						</label>
						<input
							type="text"
							name="messenger"
							id="messenger"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.messenger || ''}
						/>

						<label className="form-label" htmlFor="phone">
                        <Icon name='telephone' />Phone
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.phone || ''}
						/>
						<label className="form-label" htmlFor="email">
                        <Icon name='envelope' />Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="border-2 form-control"
							onChange={handleInputChange}
							value={data.email || ''}
						/>
						<label className="form-label" htmlFor="magicLink">
                        <Icon name='magic' />Magic Link
						</label>
						<input
							type='text'
							name='magicLink'
							id='magicLink'
							className='border-2 form-control'
							value={data.magicLink || ''}
							onChange={handleInputChange}
						/>
						<div className="pt-4">
							<button type="submit" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#copied"><Icon name='clipboard'/>Submit & Copy Link</button>
                        &nbsp;
						</div>
					</form>
					<div className="p-4">
						<button onClick={prefillData} onKeyDown={prefillData} className="btn btn-secondary">
                            <Icon name='lightning'/>Prefill Data
						</button>
                        &nbsp;
						<button onClick={clearData} onKeyDown={clearData} className="btn btn-warning">
							<Icon name='trash'/>Clear Data
						</button>
						&nbsp;
						<button onClick={createEmbed} onKeyDown={createEmbed} className='btn btn-info'><Icon name='code'/>Embed Card</button>
					</div>
				</div>
				<div>
					<Viewer
						name={data.name}
						photoURL={data.photoURL}
						description={data.description}
						instagram={data.instagram}
						facebook={data.facebook}
						twitter={data.twitter}
						youtube={data.youtube}
						tiktok={data.tiktok}
						discord={data.discord}
						pinterest={data.pinterest}
						spotify={data.spotify}
						snapchat={data.snapchat}
						reddit={data.reddit}
						twitch={data.twitch}
						messenger={data.messenger}
						phone={data.phone}
						email={data.email}
						magicLink={data.magicLink}
					/>
				</div>
			</div>
		</>
	);
};
export default Designer;
