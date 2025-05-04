import React from "react";

interface Props {
  isNavExpanded: boolean;
}

const Navigation: React.FC<Props> = ({ isNavExpanded }) => {
  return (
    <div className={`nav-links ${isNavExpanded ? "expanded" : ""}`}>
      <a href="/">ホーム</a>
      <a href="/about/">概要</a>
      <a href="/blog/">ブログ</a>
    </div>
  )
}
export default Navigation