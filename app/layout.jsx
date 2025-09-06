import NavBar from "@/components/Nav";
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
      </body>
    </html>
  );
};

export default MainLayout;
