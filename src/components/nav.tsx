import { name } from "@typescript/constants";
import Link from "next/link";
import Icon from "./icon";

const Navbar = (): JSX.Element => {
    return (
        <nav className='bg-gradient-to-r text-5xl p-10 no-underline from-theme-primary to-theme-secondary text-white text-center'>
            <Link href={'/'} className='font-semibold no-underline text-center bg-transparent text-white'>
                <Icon name="rocket-takeoff-fill" /> {name.toLocaleLowerCase()}
            </Link>
        </nav>
    );
};

export default Navbar;