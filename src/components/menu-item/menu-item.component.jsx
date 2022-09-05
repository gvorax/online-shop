import React from 'react';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  // const navigate = useNavigate();

  // const changeNav = ({linkUrl}) => {
  //   navigate(`/${linkUrl}`);
  // };

  return (
    <Link
      className={`${size} menu-item`}
      // onClick={() => changeNav(linkUrl)}
      to ={`/${linkUrl}`}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
};

export default MenuItem;
