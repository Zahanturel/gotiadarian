import type { Metadata, Viewport } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { rootMetadataBase } from "@/lib/seo";
import { absoluteUrl, DEFAULT_SITE_DESCRIPTION } from "@/lib/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: rootMetadataBase(),
  title: {
    default: "Goti Adarian - Sacred Space for the Parsi-Zoroastrian Community",
    template: "%s - Goti Adarian",
  },
  description: DEFAULT_SITE_DESCRIPTION,
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Goti Adarian",
    title: "Goti Adarian - Sacred Space for the Parsi-Zoroastrian Community",
    description: DEFAULT_SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/assets/faravahar.png"),
        alt: "Faravahar symbol representing Zoroastrian heritage at Goti Adarian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goti Adarian - Sacred Space for the Parsi-Zoroastrian Community",
    description: DEFAULT_SITE_DESCRIPTION,
    images: [absoluteUrl("/assets/faravahar.png")],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(36, 39%, 96%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(214, 48%, 20%)" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
