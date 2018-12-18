const navbar = {

    buildNavbar () {
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
}

export default navbar;



