import Aboutus from "@/components/templates/index/Aboutus";
import Branding from "@/components/templates/index/Branding";
import Clients from "@/components/templates/index/Clients";
import FreshCakes from "@/components/templates/index/FreshCakes";
import Landing from "@/components/templates/index/Landing";
import LatestNews from "@/components/templates/index/LatestNews";
import NewProducts from "@/components/templates/index/NewProducts";
import Offers from "@/components/templates/index/Offers";
import OurTeam from "@/components/templates/index/OurTeam";
import SummerSale from "@/components/templates/index/SummerSale";
import Testimonials from "@/components/templates/index/Testimonials";
import UniqueCakes from "@/components/templates/index/UniqueCakes";

type productBoxType = {
  id: number;
  title: string;
  discount?: string;
  price: string;
  score: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
};

type MainPagePropsType = {
  newProducts: productBoxType[]
}


export default function Home(props: MainPagePropsType) {
  const {newProducts} = props
  return (
    <div className="main-page relative z-[999]">
       <Landing/>
       <FreshCakes/>
       <Offers/>
       <NewProducts products={newProducts}/>
       <Branding/>
       <SummerSale/>
       <Aboutus/>
       <OurTeam/>
       <UniqueCakes/>
       <Testimonials/>
       <LatestNews/>
       <Clients/>
    </div>
  );
}


export async function getStaticProps () {
  const productsRes = await fetch('https://cake-shop-api-yhrn.onrender.com/api/products')
  const products = await productsRes.json()
  const newProducts = [...products].reverse().slice(0,6)
  return {
    props: {
      newProducts
    }
  }
}