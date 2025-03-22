import FreshCakes from "@/components/templates/index/FreshCakes";
import Landing from "@/components/templates/index/Landing";
import NewProducts from "@/components/templates/index/NewProducts";
import Offers from "@/components/templates/index/Offers";


export default function Home() {
  return (
    <div className="main-page">
       <Landing/>
       <FreshCakes/>
       <Offers/>
       <NewProducts/>
    </div>
  );
}
