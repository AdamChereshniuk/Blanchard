const checkboxes = document.querySelectorAll(".checkbox");
const checkboxesArr = [document.querySelector(".checkbox-1"), document.querySelector(".checkbox-2"), document.querySelector(".checkbox-3")];
const galleryImages = document.querySelectorAll(".gallery__img");

const getImagePath = (index) => `img/gallery/${index}.jpg`;

const checkboxImagesPaths = [
    [getImagePath(1), getImagePath(2), getImagePath(3)],
    [getImagePath(4), getImagePath(5), getImagePath(6)],
    [getImagePath(7), getImagePath(8), getImagePath(9)],
];

let currentCheckboxCheckedIndex = null;

galleryImages.forEach((image, imageIndex) => {
    image.setAttribute("src", checkboxImagesPaths[2][imageIndex]);
});

checkboxes.forEach((checkbox, checkboxIndex) => {
    checkbox.addEventListener("click", () => {
        currentCheckboxCheckedIndex = checkboxIndex;
        const galleryImagesByIndex = checkboxImagesPaths[checkboxIndex];

        galleryImages.forEach((image, imageIndex) => {
            image.setAttribute("src", galleryImagesByIndex[imageIndex]);
        });

        checkbox.querySelector(".checkbox__input").classList.add("checked");

        const allOtherCheckboxes = checkboxesArr.filter((_, index) => index !== checkboxIndex);
        allOtherCheckboxes.forEach((el, elIndex) => el.querySelector("input").classList.remove("checked"));
    });
});