import NavBar from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";
export const metadata = {
  title: "Rental Property",
  keywords: "Renting Property,real estate",
  description: "Renting property",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
