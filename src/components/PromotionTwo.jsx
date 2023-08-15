import imgPromo from "../assets/sass/img/imgPlanta.png";

export const PromotionTwo = () => {
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
      <img className="imagenProm" src={imgPromo} alt="Mazetas en promosion" />
    </div>
  );
};
