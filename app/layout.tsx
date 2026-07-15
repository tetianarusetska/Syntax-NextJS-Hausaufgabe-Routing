import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Routing",
  description: "Routing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">

      <body>

        <header className="w-full bg-blue-800 px-8 py-4 shadow-md">
          <h1 className="text-center text-3xl font-['Kosmos'] text-white">
            Routing
          </h1>
        </header>

        <main>{children}</main>

      </body>
    </html>
  );
}