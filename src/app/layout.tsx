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
