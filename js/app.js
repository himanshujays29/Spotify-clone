let premiumBtn = document.querySelector(".pre");
let installBtn = document.querySelector(".ins");
let mainContent = document.querySelector(".main-content");
let homePage = document.querySelector(".home-page");
let homeLink = document.querySelector(".home-link");
let installPage = document.querySelector(".install");
let premiumPage = document.querySelector(".premium");

premiumBtn.addEventListener("click", function () {
  document.title = "Spotify - Explore Premium";
  mainContent.style.padding = "0 0 1.5rem" ;
  premiumPage.classList.remove("dis");
  installPage.classList.add("dis");
  homePage.classList.add("dis");
  
});

installBtn.addEventListener("click", function () {
  document.title = "Spotify - Download for Desktop";
  mainContent.style.padding = "0 0 1.5rem" ;
  installPage.classList.remove("dis");
  premiumPage.classList.add("dis");
  homePage.classList.add("dis");
});

homeLink.addEventListener("click", function () {
  document.title = "Spotify - Web Player: Music for everyone";
  premiumPage.classList.add("dis");
  installPage.classList.add("dis");
  homePage.classList.remove("dis");
});
