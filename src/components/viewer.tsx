import { Data } from "@typescript/types"
import SocialLink from "./socialLink"
export default function Viewer(data: Data) {
    return (
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
                <h4 className='text-center text-ellipsis'>
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
                    {data.twitter ? <SocialLink name='Twitter' link={data.twitter} image={{
                        src: "/TwitterLogoBlue.svg",
                        alt: 'twitter'
                    }} /> : <></>}
                    {data.youtube ? <SocialLink name='YouTube' link={data.youtube} image={{
                        src: "/yt_icon_rgb.png",
                        alt: 'youtube'
                    }} /> : <></>}
                    {data.tiktok ? <SocialLink name='TikTok' link={data.tiktok} image={{
                        src: "/LogosTiktokIcon.svg",
                        alt: 'tiktok'
                    }} /> : <></>}
                    {data.discord ? <SocialLink name='Discord' link={data.discord} image={{
                        src: "/logos-discord-icon.svg",
                        alt: 'discord'
                    }} /> : <></>}
                    {data.pinterest ? <SocialLink name='Pinterest' link={data.pinterest} image={{
                        src: "logos-pinterest.svg",
                        alt: 'pinterest'
                    }} /> : <></>}
                    {data.spotify ? <SocialLink name='Spotify' link={data.spotify} image={{
                        src: "/logos-spotify-icon.svg",
                        alt: 'spotify'
                    }} /> : <></>}
                    {data.snapchat ? <SocialLink name='Snapchat' link={data.snapchat} image={{
                        src: "/Snapchat_2019.png",
                        alt: 'snapchat'
                    }} /> : <></>}
                    {data.reddit ? <SocialLink name='Reddit' link={data.reddit} image={{
                        src: "/logos-reddit-icon.svg",
                        alt: 'reddit'
                    }} /> : <></>}
                    {data.twitch ? <SocialLink name='Twitch' link={data.twitch} image={{
                        src: "/TwitchGlitchPurple.svg",
                        alt: 'twitch glitch'
                    }} /> : <></>}
                    {data.messenger ? <SocialLink name='Messenger' link={data.messenger} image={{
                        src: "/messenger.png",
                        alt: 'messenger'
                    }} /> : <></>}
                </div>
                <hr />
                {data.magicLink ? <div className='flex content-center justify-center'>
                    <iframe src={data.magicLink} className='w-full h-96' style={{
                        height: "52rem"
                    }} title='Magic Link' ></iframe>
                </div> : <></>}
            </div>
        </div>
    )
}