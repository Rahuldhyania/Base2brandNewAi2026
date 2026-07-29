import { Manrope } from "next/font/google";
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${DEFAULT_THEME.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${manrope.className} ${DEFAULT_THEME.className} min-h-full flex flex-col`}
        cz-shortcut-listen="true"
        suppressHydrationWarning
      >
        <ThemeWrapper>
          <Navbar />
           {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeWrapper>
      </body>
    </html>
  );
}
