import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const products = {
  tshirt1: { name: 'تي شيرت أبيض', material: 'قطن', price: 200, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800', alt: 'تي شيرت أسود' },
  // ... بقية المنتجات
};

function Shop() {
  const [activeSection, setActiveSection] = useState('all');

  const handleCategoryClick = (section) => {
    setActiveSection(section);
  };

  const filteredProducts = Object.entries(products).filter(([id, product]) => {
    if (activeSection === 'all') return true;
    return id.startsWith(activeSection);
  });

  const addToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products[productId];
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('تمت الإضافة إلى السلة!');
  };

  return (
    <div className="container">
      <h1>متجرنا</h1>
      <div className="category-bar">
        <button className={activeSection === 'all' ? 'active' : ''} onClick={() => handleCategoryClick('all')}>
          الكل
        </button>
        <button className={activeSection === 'tshirt' ? 'active' : ''} onClick={() => handleCategoryClick('tshirt')}>
          تي شيرت
        </button>
        <button className={activeSection === 'jacket' ? 'active' : ''} onClick={() => handleCategoryClick('jacket')}>
          جاكيت
        </button>
        <button className={activeSection === 'pants' ? 'active' : ''} onClick={() => handleCategoryClick('pants')}>
          بنطال
        </button>
      </div>
      <div className="section cards active">
        {filteredProducts.map(([id, product]) => (
          <div className="card" key={id} data-product-id={id}>
            <Link to={`/product/${id}`}>
              <img src={product.image} alt={product.alt} />
              <p>اسم المنتج: {product.name}</p>
              <p>الخامة: {product.material}</p>
              <p>السعر: {product.price} جنيه</p>
            </Link>
            <button className="add-to-cart" onClick={() => addToCart(id)}>
              إضافة إلى السلة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;