let cart = [];

function addToCart(name) {
  cart.push(name);
  document.getElementById('cart-count').textContent = cart.length;
  alert(${name} به سبد خرید اضافه شد.);
}

document.getElementById('order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert('سبد خرید خالی است!');
    return;
  }
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  alert(
    سفارش ثبت شد ✅\n\nنام: ${name}\nتلفن: ${phone}\nآدرس: ${address}\nمحصولات: ${cart.join(', ')}
  );

  cart = [];
  document.getElementById('cart-count').textContent = 0;
  e.target.reset();
});
