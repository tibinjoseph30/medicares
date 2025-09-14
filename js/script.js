const userBtn = document.querySelector('.user-btn');
const userMenu = document.querySelector('.user-menu');
const searchToggler = document.querySelector('.search-toggler');
const searchBar = document.querySelector('.search-bar');
const searchCloser = document.querySelector('.search-closer');
const sidebarToggler = document.querySelector('.sidebar-toggler');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// user dropdown menu
function toggleUserMenu() {
    userMenu.classList.toggle('hidden');
    userMenu.offsetHeight;
    userMenu.classList.toggle('opacity-0');
    userMenu.classList.toggle('translate-y-3');
}

// search bar toggle
function toggleSearchBar() {
    searchBar.classList.toggle('opened');
}

// side bar toggle
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-[var(--sidebar-width)]');
    overlay.classList.toggle('opened');
}

userBtn.addEventListener('click', toggleUserMenu);
searchToggler.addEventListener('click', toggleSearchBar);
searchCloser.addEventListener('click', toggleSearchBar);
sidebarToggler.addEventListener('click', toggleSidebar);

// outside click handler
document.addEventListener('click', (event)=> {
    if (!userBtn.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.add('hidden');
        userMenu.classList.add('opacity-0');
        userMenu.classList.add('translate-y-3');
    }

    const sidebarOpen = !sidebar.classList.contains('-translate-x-[var(--sidebar-width)]');
    if (sidebarOpen && !sidebar.contains(event.target) &&  !sidebarToggler.contains(event.target)) {
        sidebar.classList.add('-translate-x-[var(--sidebar-width)]');
        overlay.classList.remove('opened');
    }
});