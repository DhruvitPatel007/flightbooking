import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Navfoot from '@/components/Navfoot'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AdaniOne',
  description: 'Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body>
      {children}
      <Navfoot/>
      </body>
    </html>
  )
}
