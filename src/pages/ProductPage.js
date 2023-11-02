import DarkNav from "../components/navbars/DarkNav";
import LightNav from "../components/navbars/LightNav";
import Shop from "../components/productPageComps/Shop";
import Brands from "../components/productPageComps/Brands";
import Footer from "../layout/Footer";

export default function ProductPage() {
  return (
    <div>
      <DarkNav />
      <LightNav />
      <Shop />
      <Brands />
      <Footer />
    </div>
  );
}
