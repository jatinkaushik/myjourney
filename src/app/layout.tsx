import type { Metadata } from "next";
import { ReduxProvider } from '@/app/components/redux/providers';
import ThemeButton from "@/app/components/theme/ThemeButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jatin Kaushik | My Journey",
  description: "My Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          <ThemeButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
