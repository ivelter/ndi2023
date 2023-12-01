import { Fira_Code } from 'next/font/google'
import './globals.scss'

const inter_marche = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Dummy file',
  description: 'Site généré',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter_marche.className}>{children}</body>
    </html>
  )
}
