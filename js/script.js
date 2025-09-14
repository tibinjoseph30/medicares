const userBtn = document.querySelector('.user-btn');
const userMenu = document.querySelector('.user-menu');

function toggleUserMenu() {
    userMenu.classList.toggle('hidden');
    userMenu.offsetHeight;
    userMenu.classList.toggle('opacity-0');
    userMenu.classList.toggle('translate-y-3');
}

userBtn.addEventListener('click', toggleUserMenu);

document.addEventListener('click', (event)=> {
    if (!userBtn.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.add('hidden');
        userMenu.classList.add('opacity-0');
        userMenu.classList.add('translate-y-3');
    }
});