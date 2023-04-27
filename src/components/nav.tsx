import { name } from "@typescript/constants";

const Navbar = (): JSX.Element => {
    return (
        <nav className='bg-gradient-to-r text-5xl from-theme-primary to-theme-secondary text-white dark:bg-black'>
            <h1 className='font-black text-center p-4'>
                {name.toLocaleUpperCase()}
            </h1>
        </nav>
    );
};

export default Navbar;