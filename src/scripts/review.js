const review = {

    buildReviewHtml (productNum, reviewDesc) {

            let productAppending = document.getElementById(`${productNum}`);

            let review = document.createElement("div");
            review.setAttribute("id", "review");

            let reviewLabel = document.createElement("label");
            reviewLabel.setAttribute("for", "review")
            reviewLabel.textContent = "Customer Review"

            let reviewDescription = document.createElement("p");
            reviewDescription.textContent = reviewDesc;

            review.appendChild(reviewDescription);
            productAppending.appendChild(reviewLabel);
            productAppending.appendChild(review);

    }
}

export default review