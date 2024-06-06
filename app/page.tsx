import BrandsSection from "./components/BrandsSection";
import Header from "./components/Header";
import MOreFeature from "./components/MoreFeature";
import NewsLetter from "./components/NewsLetter";
import ProductsCarousel from './components/ProductsCarousel'

export default async function Home() {
  return (
    <main >
      <Header/>
      <BrandsSection/>
      <ProductsCarousel/>
      <MOreFeature/>
      <NewsLetter/>
    </main>
  );
}
