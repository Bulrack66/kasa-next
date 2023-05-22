import './globals.scss'


export const metadata = {
  title: 'Kasa',
  description: 'Votre meilleur logement',
  icons: { icon: { url: "../assets/logo-kasa.png", type: "image/png" }},
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
