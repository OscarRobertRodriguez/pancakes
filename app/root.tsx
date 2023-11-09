import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import fontStylesheetUrl from "./styles/font.css";
import faviconAssetUrl from "./assets/favicon.svg"; 
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const links: LinksFunction = () => {
  return [
    {rel: "icon" ,type: 'image/svg+xml', href: faviconAssetUrl},
    {rel: "stylesheet", href: fontStylesheetUrl},
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    cssBundleHref ? { rel: "stylesheet", href: cssBundleHref } : null,
  ].filter(Boolean);
};

export default function App() {
  return (
    <html lang="en" className=" h-full isolate ">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="grid grid-rows-main h-full justify-items-center py-0">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
