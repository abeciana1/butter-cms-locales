import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/_navigation/NavBar'

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased max-w-[1440px] relative mx-auto`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
