import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header3 from './components/Header/Header3';


function Layout() {


  return (
    <>

      <Header3/>
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
