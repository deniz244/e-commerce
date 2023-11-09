import DarkNav from "../components/navbars/DarkNav";
import LightNav from "../components/navbars/LightNav";
import ShopHeader from "../components/productListPageComps/ShopHeader";
import ShopCards from "../components/productListPageComps/ShopCards";
import Filter from "../components/productListPageComps/Filter";
import ShopProducts from "../components/productListPageComps/ShopProducts";
import Brands from "../components/productListPageComps/Brands";
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
