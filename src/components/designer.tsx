'use client';
import { useState } from 'react';
import '../styles/iframe.module.scss';
import '../styles/form.scss'
import { url as appURL } from '@typescript/constants';
import encodeData from '@typescript/encode';
import type { Data } from '@typescript/types';
import Viewer from './viewer';

const Designer = () => {
    const [data, setData] = useState<Data>({
        name: '',
        photoURL: "",
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
        magicLink: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = `${appURL}/view/${encodeData(data)}`;
        window.navigator.clipboard.writeText(url).then(() => alert('Copied to clipboard!'));
    }
    const prefillData = () => setData({
            name: 'John Doe',
            photoURL: 'https://i.pravatar.cc/300',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            instagram: 'john.doe',
            facebook: 'john.doe',
            twitter: 'john.doe',
            youtube: 'john.doe',
            tiktok: 'john.doe',
            discord: 'john.doe',
            pinterest: 'john.doe',
            spotify: 'john.doe',
            snapchat: 'john.doe',
            reddit: 'john.doe',
            twitch: 'john.doe',
            messenger: 'john.doe',
            phone: '+1 (555) 555-5555',
            email: 'john.dover@joemail.com',
            magicLink: "https://demotivator.web.app/"
        });

    return (
        <>
            <div className="grid grid-cols-2 portrait:grid-cols-1">
                <form className="p-4" onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="border-2 form-control"
                        onChange={handleInputChange}
                        value={data.name}
                    />

                    <label className="form-label" htmlFor="photoURL">
                        Photo URL
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
                        Description
                    </label>
                    <input
                        name="description"
                        id="description"
                        className="border-2 form-control"
                        onChange={handleInputChange}
                        value={data.description}
                    />

                    <label className="form-label" htmlFor="instagram">
                        Instagram
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
                        Facebook
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
                        Twitter
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
                        YouTube
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
                        TikTok
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
                        Discord
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
                        Pinterest
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
                        Spotify
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
                        Snapchat
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
                        Reddit
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
                        Twitch
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
                        Messenger
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
                        Phone
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
                        Email
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
                        Magic Link
                    </label>
                    <input 
                        type='text'
                        name='magicLink'
                        id='magicLink'
                        className='border-2 form-control'
                        value={data.magicLink}
                        onChange={handleInputChange}
                    />
                    <div className="pt-4">
                        <button onClick={prefillData} onKeyDown={prefillData} className="btn btn-secondary">
                            Prefill Data
                        </button>
                        &nbsp;
                        <button type="submit" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#copied">Submit & Copy Link</button>
                    </div>
                </form>
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