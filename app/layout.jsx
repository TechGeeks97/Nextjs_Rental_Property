import NavBar from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";
export const metadata = {
  title: "Rental Property",
  keywords: "Renting Property,real estate",
  description: "Renting property",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
