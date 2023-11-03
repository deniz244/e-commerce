import DarkNav from "../components/navbars/DarkNav";
import LightNav from "../components/navbars/LightNav";
import ShopHeader from "../components/productPageComps/ShopHeader";
import ShopCards from "../components/productPageComps/ShopCards";
import Filter from "../components/productPageComps/Filter";
import ShopProducts from "../components/productPageComps/ShopProducts";
import Brands from "../components/productPageComps/Brands";
import Footer from "../layout/Footer";

export default function ProductListPage() {
  return (
    <div>
      <DarkNav />
      <LightNav />
      <ShopHeader />
      <ShopCards />
      <Filter />
      <ShopProducts />
      <Brands />
      <Footer />
    </div>
  );
}
