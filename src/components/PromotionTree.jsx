import imgJarron from "../assets/sass/img/imgJarron.png";

export const PromotionTree = () => {
  return (
    <div className="promoTwo">
      <text className="text">
        New arrival
        <h1 className="promotion">Get 40% OFF in plants</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          architecto aut minus officiis quaerat.
        </p>
        <button className="btnPromotion">Buy Now</button>
      </text>
      <img className="imagenProm" src={imgJarron} alt="Mazetas en promosion" />
    </div>
  );
};
