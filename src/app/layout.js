import './globals.css'
import { Inter } from 'next/font/google'

import { Providers } from './redux/provider'
import Header from './component/header/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crotopia',
  description: 'Crotopia App',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
