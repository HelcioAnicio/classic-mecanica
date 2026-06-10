import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Classic Mecânica | Oficina Automotiva em Caxias do Sul — Desde 1985",
  description:
    "Especialistas em chapeação, pintura automotiva, faróis, instalação eletrônica e polimento em Caxias do Sul, RS. 40 anos de excelência. Orçamento grátis via WhatsApp.",
  keywords:
    "mecânica Caxias do Sul, chapeação, pintura automotiva, faróis, polimento, instalação eletrônica, oficina automotiva RS",
  authors: [{ name: "Classic Mecânica" }],
  openGraph: {
    title: "Classic Mecânica | Oficina Automotiva em Caxias do Sul",
    description:
      "40 anos de excelência em chapeação, pintura, faróis, elétrica e polimento. Orçamento grátis via WhatsApp.",
    url: "https://classicmecanica.com.br",
    siteName: "Classic Mecânica",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://classicmecanica.com.br" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Classic Mecânica",
  description:
    "Oficina automotiva especializada em chapeação, pintura, faróis, elétrica e polimento desde 1985.",
  url: "https://classicmecanica.com.br",
  foundingDate: "1985",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caxias do Sul",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
