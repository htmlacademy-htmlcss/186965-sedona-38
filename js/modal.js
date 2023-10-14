const userNavigationButton = document.querySelector('.navigation-user-btn');
const searchHotelsButton = document.querySelector('.searching-btn');
const modalWindow = document.querySelector('.modal');
const closeModalIcon = document.querySelector('.modal-close-icon');

userNavigationButton.addEventListener('click', () => {
  modalWindow.classList.add('open');
});

searchHotelsButton.addEventListener('click', () => {
  modalWindow.classList.add('open');
});

// closeModalIcon.addEventListener("click", () => {
//   modalWindow.classList.remove("open");
// });
