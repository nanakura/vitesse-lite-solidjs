export default function useDark() {
	const { isDarkMode: isDark, toggle: toggleDark } = useDarkMode()
	createEffect(() => {
		if (isDark())
			document.documentElement.classList.add('dark')
		else
			document.documentElement.classList.remove('dark')
	})

	return {
		isDark,
		toggleDark
	}
}

function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = createSignal(false)
	function toggle() {
		setIsDarkMode(!isDarkMode())
	}
	createEffect(() => {
		localStorage.setItem('dark-mode', JSON.stringify(isDarkMode()))
	})
	return {
		isDarkMode,
		toggle
	}
}