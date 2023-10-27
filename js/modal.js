const userNavigationButton = document.querySelector('.navigation-user-btn');

const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close-btn');

userNavigationButton.addEventListener('click', () => {
  modalWindow.classList.add('open');
});

closeModalBtn.addEventListener('click', () => {
  modalWindow.classList.remove('open');
});
