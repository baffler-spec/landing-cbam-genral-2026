import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu propia franquicia inmobiliaria Coldwell Banker",
  description: "Suma a tu experiencia el prestigio y las conexiones de Coldwell Banker. Explora tu franquicia con formación, Coaching Directivo permanente y un ecosistema PropTech.",
  icons: {
    icon: "/favicon-cb.svg",
    shortcut: "/favicon-cb.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased">{children}</body>
    </html>
  );
}
