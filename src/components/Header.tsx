import { useState } from 'react';
import Hamburger from './Hamburger.tsx';
import Navigation from './Navigation.tsx';
import ThemeIcon from './ThemeIcon.tsx';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const toggleNavigationExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <header>
      <h1>ねおろぐ</h1>
      <nav>
        <Hamburger onClickHamburger={toggleNavigationExpanded} />
        <Navigation isNavExpanded={isNavExpanded} />
        <ThemeIcon />
      </nav>
    </header>
  );
};
export default Header;
