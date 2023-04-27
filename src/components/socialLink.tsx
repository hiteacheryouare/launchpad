import Link from "next/link";
interface PROPS {
    name: string;
    link: string;
    image: {
        src: string;
        alt: string;
    }
}
import Image from "next/image";
export default function SocialLink(props: PROPS) {
    return (
        <Link href={props.link} target="_blank" rel="noreferrer">
            <Image src={props.image.src} alt={props.image.alt} width={50} height={50} />
        </Link>
    )

}