import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Next Blog App",
  description: "The Best Blog app 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>
        <div className="container">
          <div className="wrapper">
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
