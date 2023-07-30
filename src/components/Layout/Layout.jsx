import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { LayoutWrapper } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
