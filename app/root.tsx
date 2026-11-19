import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Grotesk:wght@500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-orange-600 selection:text-white min-h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 - Page Not Found" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center bg-white text-slate-900">
      <div className="max-w-md w-full bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-xl">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4 font-bold text-xl">
          !
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2 text-slate-900">{message}</h1>
        <p className="text-slate-600 text-sm mb-6">{details}</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium transition text-sm shadow-sm"
        >
          Return Home
        </a>
        {stack && (
          <pre className="mt-6 p-4 rounded-lg bg-slate-100 text-xs text-left text-red-700 overflow-x-auto border border-red-200">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
