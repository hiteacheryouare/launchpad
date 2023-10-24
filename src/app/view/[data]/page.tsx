import { decodeData } from '@typescript/decode';
import Viewer from '../../../components/viewer';
import type { Metadata } from 'next';
import { name as appName, url } from '@typescript/constants';

interface Props {
	params: { data: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { data } = params
	const dData = decodeData(data);
	return {
		title: `${dData.name} | ${appName}`,
		description: dData.description,
		applicationName: appName,
		generator: `${appName} & Next.js`,
		keywords: dData.description,
		openGraph: {
			images: dData.photoURL || `${url}/rocket-takeoff-fill.svg`,
			url: `${url}/view/${data}`,
			title: `${dData.name} | ${appName}`,
			description: dData.description,
			siteName: appName,
			type: 'website',
			locale: 'en_US',
		},
	}
}


export default function View({ params }: {
    params: {
        data: string
    }
}) {
	const data = decodeData(params.data);
	return (
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
	);
}
