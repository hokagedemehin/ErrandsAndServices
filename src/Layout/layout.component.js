import React from "react";
import Header from "../components/Header/header.component";
import Head from "next/head";
import Footer from "../components/Footer/footer.component";
import NavHeader from "../components/Header/navheader.component";
import { BackToTop } from "material-ui-back-to-top";

export const Layout = ({ children, name, desc }) => {
  // console.log(window.innerHeight);
  return (
    <div className="">
      <Head>
        <title>Errands & Services - {name}</title>
        <link rel="icon" href="/errands_fav.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Catamaran:wght@400;500;600;700;800;900&family=Josefin+Sans:wght@400;500;600;700&family=Merriweather+Sans:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700;900&family=Stardos+Stencil:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Header /> */}
      <NavHeader />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <BackToTop size="small" />
    </div>
  );
};
