import { name } from "@typescript/constants";
import Link from "next/link";

const Navbar = (): JSX.Element => {
    return (
        <nav className='bg-gradient-to-r text-5xl from-theme-primary to-theme-secondary text-white dark:bg-black'>
            <Link href={'/'} className='font-black text-center p-4'>
                {name.toLocaleUpperCase()}
            </Link>
        </nav>
    );
};

export default Navbar;