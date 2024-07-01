import { Inter } from "next/font/google";
import "./globals.css";
import WrapperRedux from "@/components/WrapperRedux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task management app",
  description: "Simple application to manage tasks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WrapperRedux>{children}</WrapperRedux>
      </body>
    </html>
  );
}
