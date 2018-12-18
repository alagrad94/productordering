(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNavbar(); //call function to add final product HTML to DOM

},{"./nav":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxhQUFPLFdBQVAsRyxDQUVBOzs7Ozs7Ozs7QUNKQSxNQUFNLE1BQU0sR0FBRztBQUVYLEVBQUEsV0FBVyxHQUFJO0FBQ1gsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXRCO0FBRUEsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtBQUNBLElBQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkIsRUFBN0I7QUFDQSxJQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0EsSUFBQSxPQUFPLENBQUMsU0FBUixHQUFvQixZQUFwQjtBQUVBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCLEVBQTdCO0FBQ0EsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsUUFBcEI7QUFFQSxRQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFkO0FBQ0EsSUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixNQUFyQixFQUE2QixFQUE3QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLFFBQXBCO0FBRUEsSUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixPQUE1QjtBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0g7O0FBdkJVLENBQWY7ZUEwQmUsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2XCJcblxubmF2YmFyLmJ1aWxkTmF2YmFyKCk7XG5cbi8vY2FsbCBmdW5jdGlvbiB0byBhZGQgZmluYWwgcHJvZHVjdCBIVE1MIHRvIERPTSIsImNvbnN0IG5hdmJhciA9IHtcblxuICAgIGJ1aWxkTmF2YmFyICgpIHtcbiAgICAgICAgbGV0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyQ29udGFpbmVyXCIpO1xuXG4gICAgICAgIGxldCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIG9wdGlvbjEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICAgICAgb3B0aW9uMS5jbGFzc0xpc3QuYWRkKFwibmF2SXRlbVwiKTtcbiAgICAgICAgb3B0aW9uMS5pbm5lckhUTUwgPSBcIkNhdGVnb3JpZXNcIjtcblxuICAgICAgICBsZXQgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBvcHRpb24yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgICAgIG9wdGlvbjIuY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG4gICAgICAgIG9wdGlvbjIuaW5uZXJIVE1MID0gXCJPcmRlcnNcIjtcblxuICAgICAgICBsZXQgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBvcHRpb24zLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgICAgIG9wdGlvbjMuY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG4gICAgICAgIG9wdGlvbjMuaW5uZXJIVE1MID0gXCJMb2dvdXRcIjtcblxuICAgICAgICBuYXZiYXJDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyO1xuXG5cblxuIl19
