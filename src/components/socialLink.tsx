import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';

interface PROPS {
    name: string;
    link: string;
    image: {
        src: StaticImageData;
        alt: string;
    }
}
export default (props: PROPS) => (
		<Link href={props.link} target="_blank" rel="noreferrer">
			<Image src={props.image.src} alt={props.image.alt} placeholder={typeof props.image.src === 'string' ? 'blur' : 'empty'} height={50}  />
		</Link>
);
