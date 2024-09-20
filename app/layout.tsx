import type { Metadata } from "next";
import "@/app/globals.css";
import Background from "@/app/ui/background";

export const metadata: Metadata = {
  title: "Kedoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
