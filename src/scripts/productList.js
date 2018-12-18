import productData from "./productData"
import reviewData from "./reviewData"
import product from "./product"
import review from "./review"

const productList = {

    createProductList () {
        let reviewArray = [];
        let productArray = [];

        productData.getProductData()
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
                        "productImageURL" : productImageURL,
                    }
                productArray.push(productObject);
            });
            productArray.forEach(productItem => {
                product.buildProductHtml(productItem);
            })
        })
        reviewData.getReviewData()
        .then (parsedReviews => {

            for (let i = 0; i < parsedReviews.length; i++) {
                let reviewTitle = parsedReviews[i].reviewTitle;
                let reviewData = parsedReviews[i].reviewtext;
                let reviewProdID = parsedReviews[i].productID;

                let reviewObject =  {
                        "reviewTitle" : reviewTitle,
                        "reviewData" : reviewData,
                        "productId" : reviewProdID
                    }

                reviewArray.push(reviewObject)
            }
            console.log(reviewArray)
            for (let i = 0; i < productArray.length; i++) {

                let productToAppend = document.getElementById(`${productArray[i].productID}`);

                for (let j = 0; j < reviewArray.length; j++) {

                    if (reviewArray[j].productId = productToAppend.id) {
                        let productNum = productArray[i].productID;
                        let reviewDesc = reviewArray[j].reviewData
                        review.buildReviewHtml(productNum, reviewDesc)
                    }
                }
            }
        })
    }
}

export default productList