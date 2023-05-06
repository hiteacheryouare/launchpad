import '@styles/globals.scss'
import { Poppins } from 'next/font/google'
import Comment from '../components/comment'
import { banner } from '../typescript/constants'
import { name, description } from '../typescript/constants'

const poppins = Poppins({ weight: [
    "100",
    "200", 
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
], subsets: ['latin'] })

export const metadata = {
    title: name,
    description: description,
}

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
                </head>
                <body className={poppins.className}>
                    <Comment text={banner} />
                    {children}
                </body>
            </html>
        </>
    )
}
