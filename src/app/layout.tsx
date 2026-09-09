import type { Metadata, Viewport } from "next";
import { Chivo } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MembershipModalProvider } from "@/components/pricing/MembershipModal";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "247 GP Direct — Healthcare that never closes",
  description:
    "Speak to a registered GP in minutes, any hour of the day. Video consultations, prescriptions and referrals — all from your phone.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/247 GP Direct Fav.png", sizes: "923x923", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${chivo.variable} h-full antialiased`}>
      <body className="bg-cream text-brand-teal flex min-h-full flex-col font-sans antialiased">
        <MembershipModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MembershipModalProvider>
      </body>
    </html>
  );
}
