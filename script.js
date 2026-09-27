document.addEventListener('DOMContentLoaded', () => {
    // قاعدة بيانات المنتجات (كما في السابق)
    const products = {
        tshirt1: { name: 'تي شيرت أبيض', material: 'قطن', price: 200, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800', alt: 'تي شيرت أسود' },
        tshirt2: { name: 'تي شيرت أسود', material: 'قطن', price: 220, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800', alt: 'تي شيرت أبيض' },
        tshirt3: { name: 'تي شيرت أزرق', material: 'قطن', price: 210, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800', alt: 'تي شيرت أزرق' },
        tshirt4: { name: 'تي شيرت أحمر', material: 'قطن', price: 230, image: 'https://images.unsplash.com/photo-1582552938357-32b055482de0?auto=format&fit=crop&q=80&w=800', alt: 'تي شيرت أحمر' },
        tshirt5: { name: 'تي شيرت رمادي', material: 'قطن', price: 200, image: 'https://images.unsplash.com/photo-1586790170083-2f9edde84dbb?auto=format&fit=crop&q=80&w=800', alt: 'تي شيرت رمادي' },
        tshirt6: { name: 'تي شيرت أخضر', material: 'قطن', price: 240, image: 'https://images.unsplash.com/photo-1622470953794-84483f97a5cc?auto=format&fit=crop&q=80&w=800', alt: 'تي شيرت أخضر' },
        jacket1: { name: 'جاكيت جلدي', material: 'جلد', price: 500, image: 'https://images.unsplash.com/photo-1551537486-80617babc18d?auto=format&fit=crop&q=80&w=800', alt: 'جاكيت جلدي' },
        jacket2: { name: 'جاكيت شتوي', material: 'صوف', price: 450, image: 'https://images.unsplash.com/photo-1551028719-53ecbfc3d5c6?auto=format&fit=crop&q=80&w=800', alt: 'جاكيت شتوي' },
        jacket3: { name: 'جاكيت جينز', material: 'دنيم', price: 400, image: 'https://images.unsplash.com/photo-1525457136159-47685a7d8134?auto=format&fit=crop&q=80&w=800', alt: 'جاكيت جينز' },
        jacket4: { name: 'جاكيت رياضي', material: 'بوليستر', price: 350, image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?auto=format&fit=crop&q=80&w=800', alt: 'جاكيت رياضي' },
        jacket5: { name: 'جاكيت أسود', material: 'جلد صناعي', price: 480, image: 'https://images.unsplash.com/photo-1548125875-038b232c0d33?auto=format&fit=crop&q=80&w=800', alt: 'جاكيت أسود' },
        pants1: { name: 'جينز أزرق', material: 'دنيم', price: 300, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a03e1?auto=format&fit=crop&q=80&w=800', alt: 'جينز أزرق' },
        pants2: { name: 'بنطال رسمي', material: 'صوف', price: 250, image: 'https://images.unsplash.com/photo-1591195853828-11f92f3a95f0?auto=format&fit=crop&q=80&w=800', alt: 'بنطال رسمي' },
        pants3: { name: 'بنطال رياضي', material: 'قطن', price: 280, image: 'https://images.unsplash.com/photo-1602293589930-45aad59da6ab?auto=format&fit=crop&q=80&w=800', alt: 'بنطال رياضي' },
        pants4: { name: 'جينز أسود', material: 'دنيم', price: 320, image: 'https://images.unsplash.com/photo-1622470953794-84483f97a5cc?auto=format&fit=crop&q=80&w=800', alt: 'جينز أسود' },
        pants5: { name: 'بنطال كارغو', material: 'قطن', price: 270, image: 'https://images.unsplash.com/photo-1582552938357-32b055482de0?auto=format&fit=crop&q=80&w=800', alt: 'بنطال كارغو' }
    };

    // التحكم في قائمة Hamburger (كما في السابق)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // التحكم في نموذج الطلب (مع حفظ بيانات المستخدم)
    const form = document.getElementById('order-form');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // حفظ بيانات المستخدم إذا كان النموذج للحساب
            if (form.dataset.user === 'true') {
                const userData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    address: document.getElementById('address').value
                };
                localStorage.setItem('userData', JSON.stringify(userData));
            }
            
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.reset();
            }, 3000);
        });
    }

    // التحكم في شريط الأقسام (كما في السابق)
    const categoryButtons = document.querySelectorAll('.category-bar button');
    const sections = document.querySelectorAll('.section');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (button.dataset.section === 'all') {
                sections.forEach(section => section.classList.add('active'));
            } else {
                sections.forEach(section => section.classList.remove('active'));
                document.getElementById(button.dataset.section).classList.add('active');
            }
        });
    });

    if (sections.length > 0) {
        sections.forEach(section => section.classList.add('active'));
        categoryButtons[0].classList.add('active');
    }

    // إضافة إلى السلة (كما في السابق)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const product = products[productId];
            if (product) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('تمت الإضافة إلى السلة!');
            }
        });
    });

    // عرض تفاصيل المنتج (كما في السابق)
    const productDetails = document.getElementById('product-details');
    if (productDetails) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products[productId];
        if (product) {
            productDetails.innerHTML = `
                <div class="card product-card">
                    <img src="${product.image}" alt="${product.alt}">
                    <h2>${product.name}</h2>
                    <p>الخامة: ${product.material}</p>
                    <p>السعر: ${product.price} جنيه</p>
                    <button class="add-to-cart" data-product-id="${productId}">إضافة إلى السلة</button>
                </div>
            `;
            const addButton = productDetails.querySelector('.add-to-cart');
            addButton.addEventListener('click', () => {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('تمت الإضافة إلى السلة!');
            });
        } else {
            productDetails.innerHTML = '<p>المنتج غير موجود</p>';
        }
    }

    // عرض السلة في cart.html (كما في السابق)
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        displayCart(cartItems);
    }

    // وظائف البروفايل
    const userInfo = document.getElementById('user-info');
    const editProfileBtn = document.getElementById('edit-profile');
    const editFormSection = document.getElementById('edit-form-section');
    const profileForm = document.getElementById('profile-form');
    const cancelEditBtn = document.getElementById('cancel-edit');
    const profileCartItems = document.getElementById('profile-cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearProfileCartBtn = document.getElementById('clear-profile-cart');

    if (userInfo) {
        // عرض بيانات المستخدم
        const userData = JSON.parse(localStorage.getItem('userData')) || null;
        if (userData) {
            userInfo.innerHTML = `
                <p><strong>الاسم:</strong> ${userData.name}</p>
                <p><strong>البريد الإلكتروني:</strong> ${userData.email}</p>
                <p><strong>العنوان:</strong> ${userData.address}</p>
            `;
            // ملء النموذج بالبيانات الحالية
            document.getElementById('user-name').value = userData.name;
            document.getElementById('user-email').value = userData.email;
            document.getElementById('user-address').value = userData.address;
        } else {
            userInfo.innerHTML = '<p>لم تقم بإدخال بياناتك بعد. يرجى التحديث.</p>';
        }

        // زر تحديث البيانات
        if (editProfileBtn) {
            editProfileBtn.addEventListener('click', () => {
                editFormSection.style.display = 'block';
                userInfo.style.display = 'none';
            });
        }

        // إلغاء التحديث
        if (cancelEditBtn) {
            cancelEditBtn.addEventListener('click', () => {
                editFormSection.style.display = 'none';
                userInfo.style.display = 'block';
            });
        }

        // حفظ التغييرات
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const updatedUserData = {
                    name: document.getElementById('user-name').value,
                    email: document.getElementById('user-email').value,
                    address: document.getElementById('user-address').value
                };
                localStorage.setItem('userData', JSON.stringify(updatedUserData));
                alert('تم تحديث البيانات بنجاح!');
                location.reload(); // إعادة تحميل لعرض التغييرات
            });
        }
    }

    // عرض السلة في البروفايل
    if (profileCartItems) {
        displayCart(profileCartItems, cartTotal);
    }

    if (clearProfileCartBtn) {
        clearProfileCartBtn.addEventListener('click', () => {
            localStorage.removeItem('cart');
            location.reload();
        });
    }

    // دالة مساعدة لعرض السلة
    function displayCart(container, totalElement = null) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            container.innerHTML = '<p>السلة فارغة</p>';
            if (totalElement) totalElement.innerHTML = '';
        } else {
            let total = 0;
            container.innerHTML = cart.map(item => {
                const productTotal = item.price * item.quantity;
                total += productTotal;
                return `
                    <div class="cart-item">
                        <p>${item.name} - ${item.price} جنيه</p>
                        <p>الكمية: <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}"> 
                        <button class="update-cart" data-id="${item.id}">تحديث</button>
                        <button class="remove-from-cart" data-product-id="${item.id}">إزالة</button></p>
                        <p>الإجمالي: ${productTotal} جنيه</p>
                    </div>
                `;
            }).join('');

            if (totalElement) {
                totalElement.innerHTML = `<strong>الإجمالي الكلي: ${total} جنيه</strong>`;
            }

            // أحداث الإزالة والتحديث
            container.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', () => {
                    const productId = button.dataset.productId;
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    cart = cart.filter(item => item.id !== productId);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    location.reload();
                });
            });

            container.querySelectorAll('.update-cart').forEach(button => {
                button.addEventListener('click', () => {
                    const productId = button.dataset.id;
                    const quantityInput = container.querySelector(`.quantity-input[data-id="${productId}"]`);
                    const newQuantity = parseInt(quantityInput.value);
                    if (newQuantity > 0) {
                        let cart = JSON.parse(localStorage.getItem('cart')) || [];
                        const item = cart.find(item => item.id === productId);
                        if (item) {
                            item.quantity = newQuantity;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            location.reload();
                        }
                    }
                });
            });
        }
    }
});