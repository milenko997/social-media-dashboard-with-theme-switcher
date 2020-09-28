(() => {
    const themeSwitcherBtn = document.querySelector("#theme-switcher");
    themeSwitcherBtn.addEventListener('click', () => {
        const element = document.body;
        element.classList.toggle("dark-mode");
    });
})()

