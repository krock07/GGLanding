import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";

// import {GA_TRACKING_ID} from "../lib/gtag";

const Layout = ({
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
    <div>
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
        <Nav />{" "}
      </header>
      <main className="relative h-full min-h-full ">{children}</main>
    </div>
  );
};

export default Layout;
