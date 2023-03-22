import React, { useEffect, useState } from "react";
import Head from "next/head";

import MainNav from "./Nav/MainNav";

// import {GA_TRACKING_ID} from "../lib/gtag";

const MainLayout = ({
  children,
  pageTitle,
  description,
  image,
  website,
  card,
  title,
  ...props
}) => {
  return (
    <div className="bg-[#101010] flex flex-col h-screen overflow-x-hidden">
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width maximum-scale=1"
        />
        <meta name="description" content={description} />
        <meta property="og:type" content={website} />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:image" content={image} key="ogimage" />
        <meta name="twitter:card" content={card} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {" "}
        <MainNav />{" "}
      </header>
      <main className="flex-1 max-w-full overflow-x-hidden overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
