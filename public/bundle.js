(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNavbar();

_productList.default.createProductList(); //call function to add final product HTML to DOM

},{"./nav":2,"./productList":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const navbar = {
  buildNavbar() {
    let navbarContainer = document.getElementById("navbarContainer");
    let option1 = document.createElement("a");
    option1.setAttribute("href", "");
    option1.classList.add("navItem");
    option1.innerHTML = "Categories";
    let option2 = document.createElement("a");
    option2.setAttribute("href", "");
    option2.classList.add("navItem");
    option2.innerHTML = "Orders";
    let option3 = document.createElement("a");
    option3.setAttribute("href", "");
    option3.classList.add("navItem");
    option3.innerHTML = "Logout";
    navbarContainer.appendChild(option1);
    navbarContainer.appendChild(option2);
    navbarContainer.appendChild(option3);
  }

};
var _default = navbar;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const product = {
  buildProductHtml(productObject) {
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

};
var _default = product;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const productData = {
  getProductData() {
    return fetch("http://localhost:8088/products").then(response => response.json());
  }

};
var _default = productData;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

var _reviewData = _interopRequireDefault(require("./reviewData"));

var _product = _interopRequireDefault(require("./product"));

var _review = _interopRequireDefault(require("./review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productList = {
  createProductList() {
    let reviewArray = [];
    let productArray = [];

    _productData.default.getProductData().then(products => {
      products.forEach(productItem => {
        let productId = productItem.id;
        let productTitle = productItem.product;
        let productDescription = productItem.description;
        let productImageURL = productItem.image;
        let productObject = {
          "productID": productId,
          "productTitle": productTitle,
          "productDescription": productDescription,
          "productImageURL": productImageURL
        };
        productArray.push(productObject);
      });
      productArray.forEach(productItem => {
        _product.default.buildProductHtml(productItem);
      });
    });

    _reviewData.default.getReviewData().then(parsedReviews => {
      for (let i = 0; i < parsedReviews.length; i++) {
        let reviewTitle = parsedReviews[i].reviewTitle;
        let reviewData = parsedReviews[i].reviewtext;
        let reviewProdID = parsedReviews[i].productID;
        let reviewObject = {
          "reviewTitle": reviewTitle,
          "reviewData": reviewData,
          "productId": reviewProdID
        };
        reviewArray.push(reviewObject);
      }

      console.log(reviewArray);

      for (let i = 0; i < productArray.length; i++) {
        let productToAppend = document.getElementById(`${productArray[i].productID}`);

        for (let j = 0; j < reviewArray.length; j++) {
          if (reviewArray[j].productId = productToAppend.id) {
            let productNum = productArray[i].productID;
            let reviewDesc = reviewArray[j].reviewData;

            _review.default.buildReviewHtml(productNum, reviewDesc);
          }
        }
      }
    });
  }

};
var _default = productList;
exports.default = _default;

},{"./product":3,"./productData":4,"./review":6,"./reviewData":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const review = {
  buildReviewHtml(productNum, reviewDesc) {
    let productAppending = document.getElementById(`${productNum}`);
    let review = document.createElement("div");
    review.setAttribute("id", "review");
    let reviewLabel = document.createElement("label");
    reviewLabel.setAttribute("for", "review");
    reviewLabel.textContent = "Customer Review";
    let reviewDescription = document.createElement("p");
    reviewDescription.textContent = reviewDesc;
    review.appendChild(reviewDescription);
    productAppending.appendChild(reviewLabel);
    productAppending.appendChild(review);
  }

};
var _default = review;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = {
  getReviewData() {
    return fetch("http://localhost:8088/reviews").then(response => response.json());
  }

};
var _default = reviewData;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBTyxXQUFQOztBQUNBLHFCQUFZLGlCQUFaLEcsQ0FHQTs7Ozs7Ozs7O0FDUEEsTUFBTSxNQUFNLEdBQUc7QUFFWCxFQUFBLFdBQVcsR0FBSTtBQUNYLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLGlCQUF4QixDQUF0QjtBQUVBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCLEVBQTdCO0FBQ0EsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsWUFBcEI7QUFFQSxRQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFkO0FBQ0EsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixNQUFyQixFQUE2QixFQUE3QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLFFBQXBCO0FBRUEsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtBQUNBLElBQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkIsRUFBN0I7QUFD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dW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXZiYXIuYnVpbGROYXZiYXIoKTtcbnByb2R1Y3RMaXN0LmNyZWF0ZVByb2R1Y3RMaXN0KCk7XG5cblxuLy9jYWxsIGZ1bmN0aW9uIHRvIGFkZCBmaW5hbCBwcm9kdWN0IEhUTUwgdG8gRE9NIiwiY29uc3QgbmF2YmFyID0ge1xuXG4gICAgYnVpbGROYXZiYXIgKCkge1xuICAgICAgICBsZXQgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJDb250YWluZXJcIik7XG5cbiAgICAgICAgbGV0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xuICAgICAgICBvcHRpb24xLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuICAgICAgICBvcHRpb24xLmlubmVySFRNTCA9IFwiQ2F0ZWdvcmllc1wiO1xuXG4gICAgICAgIGxldCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIG9wdGlvbjIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICAgICAgb3B0aW9uMi5jbGFzc0xpc3QuYWRkKFwibmF2SXRlbVwiKTtcbiAgICAgICAgb3B0aW9uMi5pbm5lckhUTUwgPSBcIk9yZGVyc1wiO1xuXG4gICAgICAgIGxldCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIG9wdGlvbjMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICAgICAgb3B0aW9uMy5jbGFzc0xpc3QuYWRkKFwibmF2SXRlbVwiKTtcbiAgICAgICAgb3B0aW9uMy5pbm5lckhUTUwgPSBcIkxvZ291dFwiO1xuXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBuYXZiYXJDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XG5cblxuXG4iLCJjb25zdCBwcm9kdWN0ID0ge1xuXG4gICAgYnVpbGRQcm9kdWN0SHRtbCAocHJvZHVjdE9iamVjdCkge1xuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdENvbnRhaW5lclwiKTtcblxuICAgICAgICBsZXQgbmV3UHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBuZXdQcm9kdWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Byb2R1Y3RPYmplY3QucHJvZHVjdElEfWApO1xuXG4gICAgICAgIGxldCBuZXdQcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmV3UHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9kdWN0T2JqZWN0LnByb2R1Y3RUaXRsZX1gO1xuXG4gICAgICAgIGxldCBuZXdQcm9kdWN0RGVzY3JpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXdQcm9kdWN0RGVzY3JpdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2R1Y3RPYmplY3QucHJvZHVjdERlc2NyaXB0aW9ufWA7XG5cbiAgICAgICAgbGV0IG5ld1Byb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG5ld1Byb2R1Y3RJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ1wiKTtcbiAgICAgICAgbmV3UHJvZHVjdEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtwcm9kdWN0T2JqZWN0LnByb2R1Y3RJbWFnZVVSTH1gKTtcblxuICAgICAgICBuZXdQcm9kdWN0LmFwcGVuZENoaWxkKG5ld1Byb2R1Y3ROYW1lKTtcbiAgICAgICAgbmV3UHJvZHVjdC5hcHBlbmRDaGlsZChuZXdQcm9kdWN0RGVzY3JpdGlvbik7XG4gICAgICAgIG5ld1Byb2R1Y3QuYXBwZW5kQ2hpbGQobmV3UHJvZHVjdEltYWdlKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9kdWN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3QiLCJjb25zdCBwcm9kdWN0RGF0YSA9IHtcblxuICAgIGdldFByb2R1Y3REYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoIChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0c1wiKVxuICAgICAgICAudGhlbiAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3REYXRhIiwiaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3REYXRhXCJcbmltcG9ydCByZXZpZXdEYXRhIGZyb20gXCIuL3Jldmlld0RhdGFcIlxuaW1wb3J0IHByb2R1Y3QgZnJvbSBcIi4vcHJvZHVjdFwiXG5pbXBvcnQgcmV2aWV3IGZyb20gXCIuL3Jldmlld1wiXG5cbmNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuXG4gICAgY3JlYXRlUHJvZHVjdExpc3QgKCkge1xuICAgICAgICBsZXQgcmV2aWV3QXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHByb2R1Y3RBcnJheSA9IFtdO1xuXG4gICAgICAgIHByb2R1Y3REYXRhLmdldFByb2R1Y3REYXRhKClcbiAgICAgICAgLnRoZW4gKHByb2R1Y3RzID0+IHtcblxuICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0SXRlbSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdElkID0gcHJvZHVjdEl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IHByb2R1Y3RJdGVtLnByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3REZXNjcmlwdGlvbiA9IHByb2R1Y3RJdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0SW1hZ2VVUkwgPSBwcm9kdWN0SXRlbS5pbWFnZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdE9iamVjdCA9IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SURcIiA6IHByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdFRpdGxlXCIgOiBwcm9kdWN0VGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2R1Y3REZXNjcmlwdGlvblwiIDogcHJvZHVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SW1hZ2VVUkxcIiA6IHByb2R1Y3RJbWFnZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2R1Y3RBcnJheS5wdXNoKHByb2R1Y3RPYmplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9kdWN0QXJyYXkuZm9yRWFjaChwcm9kdWN0SXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdC5idWlsZFByb2R1Y3RIdG1sKHByb2R1Y3RJdGVtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldmlld0RhdGEuZ2V0UmV2aWV3RGF0YSgpXG4gICAgICAgIC50aGVuIChwYXJzZWRSZXZpZXdzID0+IHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZWRSZXZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldmlld1RpdGxlID0gcGFyc2VkUmV2aWV3c1tpXS5yZXZpZXdUaXRsZTtcbiAgICAgICAgICAgICAgICBsZXQgcmV2aWV3RGF0YSA9IHBhcnNlZFJldmlld3NbaV0ucmV2aWV3dGV4dDtcbiAgICAgICAgICAgICAgICBsZXQgcmV2aWV3UHJvZElEID0gcGFyc2VkUmV2aWV3c1tpXS5wcm9kdWN0SUQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmV2aWV3T2JqZWN0ID0gIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmV2aWV3VGl0bGVcIiA6IHJldmlld1RpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXZpZXdEYXRhXCIgOiByZXZpZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SWRcIiA6IHJldmlld1Byb2RJRFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXZpZXdBcnJheS5wdXNoKHJldmlld09iamVjdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJldmlld0FycmF5KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0VG9BcHBlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwcm9kdWN0QXJyYXlbaV0ucHJvZHVjdElEfWApO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXZpZXdBcnJheS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXZpZXdBcnJheVtqXS5wcm9kdWN0SWQgPSBwcm9kdWN0VG9BcHBlbmQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0TnVtID0gcHJvZHVjdEFycmF5W2ldLnByb2R1Y3RJRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXdEZXNjID0gcmV2aWV3QXJyYXlbal0ucmV2aWV3RGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3LmJ1aWxkUmV2aWV3SHRtbChwcm9kdWN0TnVtLCByZXZpZXdEZXNjKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3QiLCJjb25zdCByZXZpZXcgPSB7XG5cbiAgICBidWlsZFJldmlld0h0bWwgKHByb2R1Y3ROdW0sIHJldmlld0Rlc2MpIHtcblxuICAgICAgICAgICAgbGV0IHByb2R1Y3RBcHBlbmRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwcm9kdWN0TnVtfWApO1xuXG4gICAgICAgICAgICBsZXQgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJldmlldy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJldmlld1wiKTtcblxuICAgICAgICAgICAgbGV0IHJldmlld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgcmV2aWV3TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicmV2aWV3XCIpXG4gICAgICAgICAgICByZXZpZXdMYWJlbC50ZXh0Q29udGVudCA9IFwiQ3VzdG9tZXIgUmV2aWV3XCJcblxuICAgICAgICAgICAgbGV0IHJldmlld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICByZXZpZXdEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHJldmlld0Rlc2M7XG5cbiAgICAgICAgICAgIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBwcm9kdWN0QXBwZW5kaW5nLmFwcGVuZENoaWxkKHJldmlld0xhYmVsKTtcbiAgICAgICAgICAgIHByb2R1Y3RBcHBlbmRpbmcuYXBwZW5kQ2hpbGQocmV2aWV3KTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3IiwiY29uc3QgcmV2aWV3RGF0YSA9IHtcblxuICAgIGdldFJldmlld0RhdGEgKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2ggKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Jldmlld3NcIilcbiAgICAgICAgLnRoZW4gKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0RhdGEiXX0=
