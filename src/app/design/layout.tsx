import '@styles/globals.scss';
import { Poppins } from 'next/font/google';
import Comment from '../../components/comment';
import { banner, name, description } from '../../typescript/constants';
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import Script from 'next/script';

const poppins = Poppins({
	weight: [
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
	],
	subsets: ['latin'],
});

export const metadata = {
	title: name,
	description,
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<>
			<html lang="en">
				<head>
					<link rel="shortcut icon" href="/rocket-takeoff-fill.svg" type="image/x-icon" />
					<Script id="toggleTheme">
						{
							`if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
								document.body.setAttribute('data-bs-theme', 'dark')
							} else {
								document.body.setAttribute('data-bs-theme', 'light')
							}`
						}
					</Script>
				</head>
				<body className={poppins.className} data-bs-theme="light">
					<Comment text={banner} />
					<Navbar />
					{children}
					<Footer />
				</body>
			</html>
		</>
	);
}
