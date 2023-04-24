'use client';
import { useState } from 'react';

import type { Data } from '@typescript/types';
import encodeData from '@typescript/encode';
import SocialLink from './socialLink';

const Designer = () => {
    const [data, setData] = useState<Data>({
        name: '',
        photoURL: undefined,
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
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = `${window.location.origin}/view/${encodeData(data)}`;
        window.navigator.clipboard.writeText(url);
    }
    const prefillData = () => {
        setData({
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
            email: 'XXXXXXXXXXXXXXXXXX',
        });
    
    }

    return (
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
                Youtube
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
            <div className="pt-4">
                <button onClick={prefillData} onKeyDown={prefillData} className="btn btn-primary">
                    Prefill Data
                </button>
                &nbsp;
                <button type="submit" className='btn btn-primary'>Submit & Copy Link</button>
            </div>
        </form>
        <div>
            <div className="m-auto">
                <div className="flex content-center justify-center p-4 bg-white">
                    {data.photoURL ? <img src={data.photoURL} alt="" className='rounded-full w-32' /> : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                    }
                </div>
                <h1 className="text-center font-bold">
                    {data.name}
                </h1>
                <h4 className='text-center'>
                    {data.description}
                </h4>
                <div className="flex content-center justify-center">
                    <a href={`mailto:${data.email}` || "#"}>{data.email || ""}</a>
                    &nbsp;{data.email && data.phone ? " | " : ""}&nbsp;
                    <a href={`tel:${data.phone}` || "#"}>{data.phone || ""}</a>
                </div>
                <hr />
                <div className="flex content-center justify-evenly">
                    {data.instagram ? <SocialLink name='Instagram' link={data.instagram} image={{
                        src: '/Instagram_Glyph_Gradient.png',
                        alt: 'instagram'
                    }} /> : <></>}
                    {data.facebook ? <SocialLink name='Facebook' link={data.facebook} image={{
                        src: "/Facebook.png",
                        alt: 'facebook'
                    }} /> : <></>}
                </div>
            </div>
        </div>
      </div>
    );
};
export default Designer;