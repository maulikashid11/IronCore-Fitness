import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IronCore Fitness",
  description: "The best gym in town for all your fitness needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=""
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
