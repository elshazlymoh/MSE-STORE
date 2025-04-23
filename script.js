function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = { name, price, image };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت إضافة المنتج للسلة!");
  }
  