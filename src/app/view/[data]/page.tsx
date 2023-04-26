import { decodeData } from "@typescript/decode";
import Viewer from "../../../components/viewer";
export default function View({ params }: {params: {data: string}}) {
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
    )
};