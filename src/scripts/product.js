const product = {

    buildProductHtml (productObject) {
        let productContainer = document.getElementById("productContainer");

        let newProduct = document.createElement("section");
        newProduct.setAttribute("id", `${productObject.productID}`);

        let newProductName = document.createElement("h3");
        newProductName.textContent = `${productObject.productTitle}`;

        let newProductDescrition = document.createElement("p");
        newProductDescrition.textContent = `${productObject.productDescription}`;

        let newProductImage = document.createElement("img");
        newProductImage.setAttribute("id", "img");
        newProductImage.setAttribute("src", `${productObject.productImageURL}`);

        newProduct.appendChild(newProductName);
        newProduct.appendChild(newProductDescrition);
        newProduct.appendChild(newProductImage);
        productContainer.appendChild(newProduct);
    }
}

export default product