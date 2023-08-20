import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import AboutUs from "../pages/AboutUs/AboutUs";
import { ContextProvider } from "../context/Context";
import Contact from "../pages/Contact/Contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <ReactDomRoutes>
            <Route path="/" element={<Home />} />

            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":product" element={<Product />} />
            </Route>

            <Route path="contact" element={<Contact/>}/>

            <Route path="aboutus" element={<AboutUs />} />

            <Route path="*" element={<h2>ERROR!</h2>} />
          </ReactDomRoutes>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
