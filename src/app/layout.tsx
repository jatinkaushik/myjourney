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
      <body className="p-[3%] pt-[15%] md:p-[8%]">
        <ReduxProvider>
          {children}
          <ThemeButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
