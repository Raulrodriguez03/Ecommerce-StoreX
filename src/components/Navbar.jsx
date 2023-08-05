import { FaReact } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const pages = ["Home", "Products", "Contact", "Blog"];
export const Navbar = () => {
  return (
    <header className="header">
      <h2 className="logo">
        <FaReact size={45} /> Store X
      </h2>
      <nav className="nav">
        {pages.map((page) => (
          <li key={page} className="item">
            <a className="page">{page}</a>
          </li>
        ))}
      </nav>
      <button className="cart">
        <AiOutlineShoppingCart size={35} style={{ color: "#0466c8" }} />
        Your cart
      </button>
    </header>
  );
};
