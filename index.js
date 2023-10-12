"use strict";
const sidebarOpenButton = document.querySelector(".hamburger");
const sidebarCloseButton = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const lightbox = document.querySelector(".lightbox");
const openSidebar = (sidebar) => {
    if (sidebar) {
        sidebar.classList.add("sidebar_open");
    }
    ;
};
const closeSidebar = (sidebar) => {
    if (sidebar) {
        sidebar.classList.remove("sidebar_open");
    }
    ;
};
const toggleLightbox = (lightbox) => {
    if (lightbox) {
        lightbox.classList.toggle("hidden");
    }
    ;
};
const closeSidebarOnLargerScreens = (sidebar, lightbox) => {
    if (window.innerWidth < 680 || sidebar == null || lightbox == null)
        return;
    sidebar.classList.remove("sidebar_open");
    lightbox.classList.add("hidden");
};
if (sidebarOpenButton) {
    sidebarOpenButton.addEventListener("click", () => {
        openSidebar(sidebar);
        toggleLightbox(lightbox);
    });
}
;
if (sidebarCloseButton) {
    sidebarCloseButton.addEventListener("click", () => {
        closeSidebar(sidebar);
        toggleLightbox(lightbox);
    });
}
;
window.addEventListener("resize", () => {
    closeSidebarOnLargerScreens(sidebar, lightbox);
});
