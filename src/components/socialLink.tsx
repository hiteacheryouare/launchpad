import Link from 'next/link';
import Image from 'next/image';

interface PROPS {
    name: string;
    link: string;
    image: {
        src: string;
        alt: string;
    }
}
export default function SocialLink(props: PROPS) {
	return (
		<Link href={props.link} target="_blank" rel="noreferrer">
			<Image src={props.image.src} alt={props.image.alt} width={50} height={50} />
		</Link>
	);
}
