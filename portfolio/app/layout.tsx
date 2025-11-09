import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ajit Singh - Full Stack Developer",
  description: "Results-driven Software Engineer with 4 years of experience in building scalable full-stack web applications.",
  keywords: ["Full Stack Developer", "Software Engineer", "Web Development", "React", "Node.js"],
  authors: [{ name: "Ajit Singh" }],
  openGraph: {
    title: "Ajit Singh - Full Stack Developer",
    description: "Results-driven Software Engineer with 3 years of experience in building scalable full-stack web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
