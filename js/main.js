var toggleButton = document.querySelector(".details__action");
var box = document.querySelector(".details__card");
var close = document.querySelector(".card-close");
var detailsBody = document.querySelector(".details__body");
var exploreTitle = document.querySelector(".explore__title");

toggleButton.addEventListener("click", function () {
  box.classList.remove("card-toggle-out");
  box.classList.add("card-toggle-in");
  detailsBody.classList.remove("card-body-out");
  detailsBody.classList.add("card-body-in");
  exploreTitle.classList.add("explore-title-out");
});

close.addEventListener("click", function () {
  box.classList.remove("card-toggle-in");
  box.classList.add("card-toggle-out");
  detailsBody.classList.remove("card-body-in");
  detailsBody.classList.add("card-body-out");
  exploreTitle.classList.remove("explore-title-out");
});

