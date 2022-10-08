const buttonSidebar = document.querySelector(".sidebar");
const sidebarCloseButton = document.querySelector(".sidebar-close-button");
const sidebarTransparent = document.querySelector(".sidebar-transparent");
const sidebarNavigation = document.querySelector(".sidebar-navigation");
const featuresNavigation = document.querySelector("#feature-button");
const companyNavigation = document.querySelector("#company-button");
const featuresNavigationArrow = document.querySelector("#feature-icon");
const companyNavigationArrow = document.querySelector("#company-icon");
const featuresNavigationContainer = document.querySelector("#features-navigation-container");
const companyNavigationContainer = document.querySelector("#company-navigation-container");

const toggleFeatureArrow = () => {
    featuresNavigationArrow.classList.toggle("rotate");
    featuresNavigationContainer.classList.toggle("displayNone");
}

const toggleCompanyArrow = () => {
    companyNavigationArrow.classList.toggle("rotate");
    companyNavigationContainer.classList.toggle("displayNone");
}

const toggleSidebar = () => {
    sidebarNavigation.style.transform = "translateX(1%)";
    sidebarNavigation.style.transition = "all 0.25s ease";
    sidebarTransparent.style.transform = "translateX(0)";
    sidebarTransparent.style.transition = "all 0.25s ease";
}

const closeSidebar = () => {
    sidebarNavigation.style.transform = "translateX(102%)";
    sidebarTransparent.style.transform = "translateX(-100%)";
}

buttonSidebar.addEventListener("click", toggleSidebar);
sidebarCloseButton.addEventListener("click", closeSidebar);
featuresNavigation.addEventListener("click", toggleFeatureArrow);
companyNavigation.addEventListener("click", toggleCompanyArrow);