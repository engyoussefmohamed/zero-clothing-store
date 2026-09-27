import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button
        className="hamburger"
        aria-label="فتح القائمة"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/shop">التسوق</Link></li>
        <li><Link to="/order">الطلب</Link></li>
        <li><Link to="/cart">السلة</Link></li>
        <li><Link to="/profile">البروفايل</Link></li>
        <li><Link to="/about">عننا</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;