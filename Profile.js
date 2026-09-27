import { useState, useEffect } from 'react';
import './Profile.css';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem('userData'));
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (savedUserData) {
      setUserData(savedUserData);
      setFormData(savedUserData);
    }
    setCart(savedCart);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    setUserData(formData);
    setIsEditing(false);
    alert('تم تحديث البيانات بنجاح!');
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div className="container">
      <h1>بروفايل المستخدم</h1>
      <div className="user-section">
        <h2>تفاصيل الحساب</h2>
        <div id="user-info">
          {userData ? (
            <>
              <p><strong>الاسم:</strong> {userData.name}</p>
              <p><strong>البريد الإلكتروني:</strong> {userData.email}</p>
              <p><strong>العنوان:</strong> {userData.address}</p>
            </>
          ) : (
            <p>لم تقم بإدخال بياناتك بعد. يرجى التحديث.</p>
          )}
          <button onClick={() => setIsEditing(true)}>تحديث البيانات</button>
        </div>
      </div>
      {isEditing && (
        <div className="user-section">
          <h2>تحديث البيانات</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="user-name">الاسم:</label>
            <input
              type="text"
              id="user-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="user-email">البريد الإلكتروني:</label>
            <input
              type="email"
              id="user-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="user-address">العنوان:</label>
            <textarea
              id="user-address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <button type="submit">حفظ التغييرات</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              إلغاء
            </button>
          </form>
        </div>
      )}
      <div className="user-section">
        <h2>محتويات السلة</h2>
        <div id="profile-cart-items">
          {cart.length === 0 ? (
            <p>السلة فارغة</p>
          ) : (
            cart.map(item => (
              <div key={item-plan className="cart-item">
                <p>{item.name} - {item.price} جنيه</p>
                <p>الكمية: {item.quantity}</p>
              </div>
            ))
          )}
        </div>
        <button onClick={clearCart}>إفراغ السلة</button>
      </div>
    </div>
  );
}

export default Profile;