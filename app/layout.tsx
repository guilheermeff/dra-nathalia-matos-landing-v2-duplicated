import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dra. Nathalia - Harmonização Facial e Estética Facial",
  description:
    "Especialista em harmonização e estética facial. Tratamentos de harmonização facial, preenchimento labial, bioestimulador de colágeno, peeling, microagulhamento, tratamento de rugas, melasma, manchas no rosto, flacidez facial, olheiras e papada. Descubra a leveza do autocuidado com resultados naturais.",
  keywords: [
    "dermatologia",
    "estética facial",
    "harmonização facial",
    "preenchimento labial",
    "aumento labial",
    "microagulhamento no rosto",
    "peeling",
    "bioestimulador de colágeno",
    "colágeno",
    "bioestimulador",
    "tratamento de rugas",
    "preenchimento rugas",
    "rugas",
    "tratamento melasma",
    "melasma",
    "manchas no rosto",
    "tratamentos para pele",
    "flacidez facial",
    "flacidez",
    "olheiras",
    "preenchimento de olheiras",
    "papada",
    "Dra. Nathalia",
    "dermatologista",
    "clínica de estética",
  ],
  authors: [{ name: "Dra. Nathalia" }],
  creator: "Dra. Nathalia",
  publisher: "Dra. Nathalia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dranathaliamatos.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dra. Nathalia - Dermatologia, Harmonização Facial e Estética Facial",
    description:
      "Especialista em dermatologia e estética facial. Tratamentos de harmonização facial, preenchimento labial, bioestimulador de colágeno, peeling, microagulhamento, tratamento de rugas, melasma, manchas no rosto, flacidez facial, olheiras e papada.",
    url: "https://dranathaliamatos.com.br",
    siteName: "Dra. Nathalia - Harmonização & Estética",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/foto-da-clinica.webp",
        width: 1200,
        height: 630,
        alt: "Dra. Nathalia - Clínica de Dermatologia e Estética Facial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Nathalia - Dermatologia, Harmonização Facial e Estética Facial",
    description:
      "Especialista em dermatologia e estética facial. Tratamentos de harmonização facial, preenchimento labial, bioestimulador de colágeno, peeling e muito mais.",
    images: ["/foto-da-clinica.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WNFTPPX');`}
        </Script>
      </head>
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNFTPPX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
