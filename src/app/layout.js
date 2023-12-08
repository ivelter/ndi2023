import { Bebas_Neue } from "next/font/google";
import "./globals.scss";

const inter_marche = Bebas_Neue({ weight: "400", preload: false });

export const metadata = {
  title: "Le réchauffement climatique",
  description:
    "Site créé par la `CoopTeam` pendant la Nuit De l'Info édition 2023. Le sujet était sur le réchauffement climatique, déméler le vrai du faux. Nous avons donc créer une expérience unique.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter_marche.className}>{children}</body>
    </html>
  );
}
