import "./globals.css";
import Nav from "./auth/Nav";
import { Roboto } from "next/font/google";
// import AuthContext from "./auth/AuthContext"
import QueryWrapper from "./QueryWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`bg-black mx-4 md:mx-48 xl:mx-96 ${roboto.variable} font-sans text-white`}
      >
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
