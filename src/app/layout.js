import { Manrope } from "next/font/google";
import { LazyMotion, domMax } from "framer-motion";
import "./globals.css?dsh";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./sections/Footer";
import { ThemeWrapper } from "./components/layout/ThemeWrapper";
import { WhatsAppFloat } from "./components/layout/WhatsAppFloat";
import { DEFAULT_THEME } from "./lib/themes";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Base2Brand | High-Converting Website Design & Digital Growth Agency",
  description: "Base2Brand builds high-converting websites and digital strategies that help brands grow. Expert website design, development, SEO, and performance marketing",
  verification: {
    google: "bUGDRRzEBb5VQ8pNq6l7Qtp-sQJg15CvaLJ2a2O8ZH8",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://base2brand.com/#organization",
      "name": "Base2Brand",
      "url": "https://base2brand.com",
      "logo": "https://base2brand.com/logo.png",
      "description": "Base2Brand builds high-converting websites and digital strategies that help brands grow. Expert website design, development, SEO, and performance marketing",
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://base2brand.com/#website",
      "url": "https://base2brand.com",
      "name": "Base2Brand",
      "description": "Base2Brand builds high-converting websites and digital strategies that help brands grow. Expert website design, development, SEO, and performance marketing",
      "publisher": { "@id": "https://base2brand.com/#organization" }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${DEFAULT_THEME.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${manrope.className} ${DEFAULT_THEME.className} min-h-full flex flex-col`}
        cz-shortcut-listen="true"
        suppressHydrationWarning
      >
        <LazyMotion features={domMax}>
          <ThemeWrapper>
            <Navbar />
             {children}
            <Footer />
            <WhatsAppFloat />
          </ThemeWrapper>
        </LazyMotion>
      </body>
    </html>
  );
}
