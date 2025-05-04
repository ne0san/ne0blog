import React from "react";

interface Props {
  onClickHamburger: () => void;
}

const Hamburger:React.FC<Props> = ({ onClickHamburger }) => {
  const handleHamburgerClick = () => {
    onClickHamburger();
  };
  return (
    <div className="hamburger" onClick={handleHamburgerClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}
export default Hamburger;
// headerに状態を持たせる
// headerはhamburgerとNavigationを内包している
// hamburgerクリック時、Navigationのexpandedクラスをトグルする