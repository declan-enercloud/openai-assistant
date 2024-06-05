import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_TITLE}`,
  description: " ",
  icons: {
    icon: "/ec.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2 className={inter.className}>⠀⠀{process.env.NEXT_PUBLIC_TITLE}</h2>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/ec.jpg" alt="OpenAI Logo" />
      </body>
    </html>
  );
}
