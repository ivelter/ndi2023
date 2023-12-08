import { Fira_Code } from 'next/font/google'
import './globals.scss'

const inter_marche = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Le réchauffement climatique',
  description: "Site créé par la `CoopTeam` pendant la Nuit De l'Info édition 2023. Le sujet était sur le réchauffement climatique, déméler le vrai du faux. Nous avons donc créer une expérience unique.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter_marche.className}>{children}</body>
    </html>
  )
}
