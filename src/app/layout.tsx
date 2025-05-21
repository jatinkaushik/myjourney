import type { Metadata } from "next";
import { ReduxProvider } from '@/app/components/redux/providers';
import ThemeButton from "@/app/components/theme/ThemeButton";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jatin Kaushik | Software Developer & Entrepreneur",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BSS74VXP39"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BSS74VXP39');
          `}
        </Script>
        <ReduxProvider>
          {children}
          <ThemeButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
