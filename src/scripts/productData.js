const productData = {

    getProductData () {
        fetch ("http://localhost:8088/products")
        .then (response => response.json())
        .then (products => {

            products.forEach(productItem => {

                let productId = productItem.id;
                let productTitle = productItem.product;
                let productDescription = productItem.description;
                let productImageURL = productItem.image;

                let productObject = {

                    "productID" : productId,
                    "productTitle" : productTitle,
                    "productDescription" : productDescription,
                    "productImageURL" : productImageURL
                }
                return productObject;
            })
        })
    }
}

export default productData


//  review =  {
//     "reviewTitle" : "",
//     "reviewData" : "",
//     "productId" : ""
// }
