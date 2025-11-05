import BeerSlider from "beerslider";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.beer-slider').forEach(element => {
        new BeerSlider(element);
    })
});
