import { use } from "react";
import { fetchSocials } from "../utils/fetchSocials";
import "./globals.css";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

async function getSocials() {
  const socials = await fetchSocials();
  return socials;
}

export default function RootLayout({ children }) {
  const socials = use(getSocials());
  console.log(socials);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <header>
          <Navbar socials={socials} />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
