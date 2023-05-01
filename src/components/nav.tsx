import { name } from "@typescript/constants";
import Link from "next/link";

const Navbar = (): JSX.Element => {
    return (
        <nav className='bg-gradient-to-r text-5xl p-10 no-underline from-theme-primary to-theme-secondary text-white text-center'>
            <Link href={'/'} className='font-black text-center bg-transparent text-white'>
                {name.toLocaleUpperCase()}
            </Link>
        </nav>
    );
};

export default Navbar;