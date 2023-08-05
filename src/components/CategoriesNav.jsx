import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPottedPlant } from "react-icons/pi";
import { LuLampFloor } from "react-icons/lu";
import { GrFormNext } from "react-icons/gr";

export const CategoriesNav = () => {
  return (
    <div className="categories">
      <h1 className="items">
        <AiOutlineUnorderedList className="colorItem" />
        Categoris
      </h1>
      <hr />
      <a className="item">
        <AiOutlineStar className="colorItem" size={30} />
        <text className="textItem">Popular products</text>
        <GrFormNext size={30} />
      </a>
      <hr />
      <a className="item">
        <LiaTshirtSolid className="colorItem" size={30} />
        <text className="textItem">Fashions</text>
        <GrFormNext size={30} />
      </a>
      <hr />
      <a className="item">
        <LuLampFloor className="colorItem" size={30} />
        <text className="textItem">Decoretion</text>
        <GrFormNext size={30} />
      </a>
      <hr />
      <a className="item">
        <PiPottedPlant className="colorItem" size={30} />
        <text className="textItem">Garden</text>
        <GrFormNext size={30} />
      </a>
      <hr />
      <button className="itemButton">All products</button>
    </div>
  );
};
