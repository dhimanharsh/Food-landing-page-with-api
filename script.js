fetch("https://dummyjson.com/recipes?limit=10&skip=10&select=name,image")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for (let i of data.recipes) {
      console.log(i);
      // creating elemnts
      let createSectionForProduct = document.createElement("section");
      createSectionForProduct.className = "productCard";
      let productTitle = document.createElement("h2");
      productTitle.className = "productTitle";
      let productImage = document.createElement("img");
      productImage.className = "productImage";
      let productId = document.createElement("p");
      let productBtn = document.createElement("a");
      let productIcon = document.createElement('i')
      // assigning the values
      productTitle.innerText = i.name;
      productId.innerText = '# '+i.id;
      productBtn.innerText = "Order Now";
      productImage.src = i.image;
      productIcon.className = "fa-solid fa-utensils"
      // appending all new elements
      document
        .querySelector(".order-our-best")
        .appendChild(createSectionForProduct);
      createSectionForProduct.appendChild(productImage);
      createSectionForProduct.appendChild(productTitle);
      createSectionForProduct.appendChild(productId);
      createSectionForProduct.appendChild(productBtn);
      productBtn.appendChild(productIcon)
    }
  });
