import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <Link to={"/"}>
              <h1>Product-cards</h1>
          </Link>

          <ul className="header_list">
            <li>
              <Link to={"/like"}>
                <FiHeart />
                Like
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
