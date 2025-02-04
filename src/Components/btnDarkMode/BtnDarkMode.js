import React from 'react'
// import { useState, useEffect, useRef } from 'react'
import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage';


import sun from './sun.svg'
import moon from './moon.svg'
import './style.css'
import detectDarkMode from '../../utils/detectDarkMode';

function BtnDarkMode() {
	
	//const [darkMode, setDarkMode] = useState('light');
	// способ, при котором 
	// при обновлении страницы НЕ СОХРАНЯЮТСЯ параметры темы


	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());
	//способ, при котором при обновлении страницы СОХРАНЯЮТСЯ параметры темы 
	//для определения темы компьютера пользователя написана функция detectDarkMode()
	
	
	const btnRef = useRef(null);


	const toggleDarkMode = () => {// Переключение dark mode
		setDarkMode((currVal) => {
			return currVal === 'light' ? 'dark' : 'light';
		})
	}

	useEffect(()=>{// Изменение стилей для фона и самой кнопки 
		if (darkMode === 'dark'){
			document.body.classList.add('dark')
			btnRef.current.classList.add('dark-mode-btn--active')
		}
		else{
			document.body.classList.remove('dark')//удаление класса для темного фона 
			btnRef.current.classList.remove('dark-mode-btn--active')// удаление класса темной кнопки 
		}
	}, [darkMode])

	return (         
	<button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
		<img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
		<img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
	</button> 
	)
}

export default BtnDarkMode
