import type { Metadata } from "next";
import { Unbounded, Questrial } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imad Kasse | Fullstack Web Developer",
  description: "Fullstack Web Developer specializing in Next.js, NestJS, and modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${unbounded.variable} ${questrial.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}