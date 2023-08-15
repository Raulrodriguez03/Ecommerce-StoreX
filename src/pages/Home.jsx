import { CategoriesNav } from "../components/CategoriesNav.jsx";
import { PromotionOne } from "../components/PromotionOne";
import { PromotionTree } from "../components/PromotionTree.jsx";
import { PromotionTwo } from "../components/PromotionTwo.jsx";

export const Home = () => {
  return (
    <div className="home">
      <section className="firstPart">
        <CategoriesNav />
        <PromotionOne />
      </section>
      <div className="secondPart">
        <PromotionTwo />
        <PromotionTree />
      </div>
    </div>
  );
};
