document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
    const img = document.getElementById('toggle_dark')
    img.src="resources/svgs/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
})
if (module.hot) {
    module.hot.accept();
}