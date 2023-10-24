import { decodeData } from '@typescript/decode';
import Viewer from '../../../components/viewer';
import type { Metadata } from 'next';
import { name, url } from '@typescript/constants';

interface Props {
	params: { data: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ params }: Props,
  ): Promise<Metadata> {
	// read route params
	const data = params.data
	const dData = decodeData(data);
	return {
	  title: dData.name,
	  description: dData.description,
	  applicationName: name.toLowerCase(),
	  generator: `${name.toLowerCase()} & Next.js`,
	  keywords: dData.description,
	  openGraph: {
		images: dData.photoURL || `${url}/rocket-takeoff-fill.svg`
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
