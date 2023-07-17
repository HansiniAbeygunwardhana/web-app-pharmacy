import React from "react";
import "./UserNavigation.scss";
import { useEffect } from "react";

const UserNavigation = ({ userText, onClickFunc }) => {
  useEffect(() => {
    console.log("UserNavigation re-rendered");
  });
  const handleClick = () => {
    if (onClickFunc) {
      onClickFunc();
    }
  };

  return (
    <div className="Navbar__user__details__user" onClick={handleClick}>
      <div className="Navbar__user__details__user__text">{userText}</div>
    </div>
  );
};

// const UserNavigation = ({ userIcon, userText, onClickFunc, onClickIcon }) => {
//   return (
//     <div className="Navbar__user__details__user">
//       <div className="Navbar__user__details__user__icon" onClick={onClickIcon}>
//         {userIcon}
//       </div>
//       <div className="Navbar__user__details__user__text" onClick={onClickFunc}>
//         {userText}
//       </div>
//     </div>
//   );
// };

export default UserNavigation;
