const checkboxes = document.querySelectorAll(".checkbox");
const galleryImages = document.querySelectorAll(".gallery__img");

const getImagePath = (index) => `img/gallery/${index}.jpg`;

const checkboxImagesPaths = [
    [getImagePath(1), getImagePath(2), getImagePath(3)],
    [getImagePath(4), getImagePath(5), getImagePath(6)],
    [getImagePath(7), getImagePath(8), getImagePath(9)],
];

galleryImages.forEach((image, imageIndex) => {
    image.setAttribute("src", checkboxImagesPaths[2][imageIndex]);
});

checkboxes.forEach((checkbox, checkboxIndex) => {
    checkbox.addEventListener("click", () => {
        const galleryImagesByIndex = checkboxImagesPaths[checkboxIndex];

        galleryImages.forEach((image, imageIndex) => {
            image.setAttribute("src", galleryImagesByIndex[imageIndex]);
        });

        checkbox.querySelector(".checkbox__input").classList.add("checked");

        checkboxes.forEach((checkbox2, checkboxIndex2) => {
            if(checkboxIndex2 !== checkboxIndex) {
                checkbox2.querySelector(".checkbox__input").classList.remove("checked");
            };
        });
    });
});