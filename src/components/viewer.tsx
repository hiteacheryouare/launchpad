import { Data } from "@typescript/types"
import SocialLink from "./socialLink"
import Link from "next/link"
export default function Viewer(data: Data) {
    return (
        <div>
            <div className="m-auto">
                <div className="flex content-center justify-center p-4" style={{fontSize: '20rem'}}>
                    {data.photoURL ? <img src={data.photoURL} alt="" className='rounded-full w-32' /> :
                        <i className="bi bi-person-circle"></i>
                    }
                </div>
                <h1 className="text-center font-bold">
                    {data.name}
                </h1>
                <h4 className='text-center text-ellipsis'>
                    {data.description}
                </h4>
                <div className="flex content-center justify-center">
                    <Link href={`mailto:${data.email}` || "#"}>{data.email || ""}</Link>
                    &nbsp;{data.email && data.phone ? " | " : ""}&nbsp;
                    <Link href={`tel:${data.phone}` || "#"}>{data.phone || ""}</Link>
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