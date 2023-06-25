import Link from 'next/link';
import Navbar from '../../components/nav';

export default () => (
	<>
		<div className="no-underline">
			<Navbar />
		</div>
		<h3 className="text-center text-4xl p-4">
            API Reference
		</h3>
		<div className="p-4 text-2xl">
            To make a request to our free API, use the following steps:
			<ol>
				<li>
                    Choose either <Link href="/api/getShareableId"><code>/api/getShareableId</code></Link> or <Link href="/api/getShareableLink"><code>/api/getShareableLink</code></Link>
				</li>
				<li>
                    Choose your query paramaters
					<div className="pr-4">
						<li>
                            name = <code>name</code>
						</li>
						<li>
                            description = <code>description</code>
						</li>
						<li>
                            Photo URL = <code>purl</code>
						</li>
						<li>
                            Facebook = <code>fb</code>
						</li>
						<li>
                            Instagram = <code>ig</code>
						</li>
						<li>
                            Twitter = <code>tw</code>
						</li>
						<li>
                            YouTube = <code>yt</code>
						</li>
						<li>
                            TikTok = <code>tt</code>
						</li>
						<li>
                            Discord = <code>dc</code>
						</li>
						<li>
                            Pinterest = <code>pin</code>
						</li>
						<li>
                            Spotify = <code>sp</code>
						</li>
						<li>
                            Snapchat = <code>sc</code>
						</li>
						<li>
                            Reddit = <code>reddit</code>
						</li>
						<li>
                            Twitch = <code>twitch</code>
						</li>
						<li>
                            Messenger = <code>messenger</code>
						</li>
						<li>
                            Phone = <code>p</code>
						</li>
						<li>
                            Email = <code>em</code>
						</li>
						<li>
                            Magic Link = <code>ml</code>
						</li>
					</div>
				</li>
				<li>
                    Make a <code>PUT</code> request!
				</li>

			</ol>
		</div>
	</>
);
