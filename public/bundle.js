(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productData = _interopRequireDefault(require("./productData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNavbar();

_productData.default.getProductData(); //call function to add final product HTML to DOM

},{"./nav":2,"./productData":3}],2:[function(require,module,exports){
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
const productData = {
  getProductData() {
    fetch("http://localhost:8088/products").then(response => response.json()).then(products => {
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
        return productObject;
      });
    });
  }

};
var _default = productData;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBTyxXQUFQOztBQUNBLHFCQUFZLGNBQVosRyxDQUVBOzs7Ozs7Ozs7QUNOQSxNQUFNLE1BQU0sR0FBRztBQUVYLEVBQUEsV0FBVyxHQUFJO0FBQ1gsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXRCO0FBRUEsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtBQUNBLElBQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkIsRUFBN0I7QUFDQSxJQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0EsSUFBQSxPQUFPLENBQUMsU0FBUixHQUFvQixZQUFwQjtBQUVBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCLEVBQTdCO0FBQ0EsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsUUFBcEI7QUFFQSxRQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFkO0FBQ0EsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixNQUFyQixFQUE2QixFQUE3QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLFFBQXBCO0FBRUEsSUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixPQUE1QjtBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0g7O0FBdkJVLENBQWY7ZUEwQmUsTTs7Ozs7Ozs7OztBQzFCZixNQUFNLFdBQVcsR0FBRztBQUVoQixFQUFBLGNBQWMsR0FBSTtBQUNkLElBQUEsS0FBSyxDQUFFLGdDQUFGLENBQUwsQ0FDQyxJQURELENBQ08sUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRG5CLEVBRUMsSUFGRCxDQUVPLFFBQVEsSUFBSTtBQUVmLE1BQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsV0FBVyxJQUFJO0FBRTVCLFlBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxFQUE1QjtBQUNBLFlBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxPQUEvQjtBQUNBLFlBQUksa0JBQWtCLEdBQUcsV0FBVyxDQUFDLFdBQXJDO0FBQ0EsWUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLEtBQWxDO0FBRUEsWUFBSSxhQUFhLEdBQUc7QUFFaEIsdUJBQWMsU0FGRTtBQUdoQiwwQkFBaUIsWUFIRDtBQUloQixnQ0FBdUIsa0JBSlA7QUFLaEIsNkJBQW9CO0FBTEosU0FBcEI7QUFPQSxlQUFPLGFBQVA7QUFDSCxPQWZEO0FBZ0JILEtBcEJEO0FBcUJIOztBQXhCZSxDQUFwQjtlQTJCZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZcIlxuaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3REYXRhXCJcblxubmF2YmFyLmJ1aWxkTmF2YmFyKCk7XG5wcm9kdWN0RGF0YS5nZXRQcm9kdWN0RGF0YSgpO1xuXG4vL2NhbGwgZnVuY3Rpb24gdG8gYWRkIGZpbmFsIHByb2R1Y3QgSFRNTCB0byBET00iLCJjb25zdCBuYXZiYXIgPSB7XG5cbiAgICBidWlsZE5hdmJhciAoKSB7XG4gICAgICAgIGxldCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhckNvbnRhaW5lclwiKTtcblxuICAgICAgICBsZXQgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBvcHRpb24xLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgICAgIG9wdGlvbjEuY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG4gICAgICAgIG9wdGlvbjEuaW5uZXJIVE1MID0gXCJDYXRlZ29yaWVzXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xuICAgICAgICBvcHRpb24yLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuICAgICAgICBvcHRpb24yLmlubmVySFRNTCA9IFwiT3JkZXJzXCI7XG5cbiAgICAgICAgbGV0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgb3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xuICAgICAgICBvcHRpb24zLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuICAgICAgICBvcHRpb24zLmlubmVySFRNTCA9IFwiTG9nb3V0XCI7XG5cbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgICAgICBuYXZiYXJDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjtcblxuXG5cbiIsImNvbnN0IHByb2R1Y3REYXRhID0ge1xuXG4gICAgZ2V0UHJvZHVjdERhdGEgKCkge1xuICAgICAgICBmZXRjaCAoXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcHJvZHVjdHNcIilcbiAgICAgICAgLnRoZW4gKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4gKHByb2R1Y3RzID0+IHtcblxuICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0SXRlbSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdElkID0gcHJvZHVjdEl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IHByb2R1Y3RJdGVtLnByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3REZXNjcmlwdGlvbiA9IHByb2R1Y3RJdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0SW1hZ2VVUkwgPSBwcm9kdWN0SXRlbS5pbWFnZTtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0T2JqZWN0ID0ge1xuXG4gICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdElEXCIgOiBwcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdFRpdGxlXCIgOiBwcm9kdWN0VGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdERlc2NyaXB0aW9uXCIgOiBwcm9kdWN0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdEltYWdlVVJMXCIgOiBwcm9kdWN0SW1hZ2VVUkxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RPYmplY3Q7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGEiXX0=
