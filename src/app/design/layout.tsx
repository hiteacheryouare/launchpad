import '@styles/globals.scss'
import { Inter } from 'next/font/google'
import Comment from '../../components/comment'
import { banner } from '../../typescript/constants'
import {name, description} from '../../typescript/constants'
import Navbar from '../../components/nav'

const inter = Inter({ weight: "variable", subsets: ['latin'] })

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
        <body className={inter.className}>
          <Comment text={banner} />
          <Navbar />
          {children}
        </body>
      </html>
    </>
  )
}
