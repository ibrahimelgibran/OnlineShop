import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Providers from "./providers";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "IegCode Business - Ibrahim El Gibran",
  description: "My personal Business website by IegCode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
