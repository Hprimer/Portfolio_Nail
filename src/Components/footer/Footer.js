import React from 'react'
import codewars from './../../img/icons/codewars.svg'
import gitHub from './../../img/icons/gitHub.svg'
import tg from './../../img/icons/telegram.svg'
import './style.css'
function Footer() {
	return (
		<footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="https://www.codewars.com/users/Hprimer" target="_blank" rel="noreferrer">
                            <img src={codewars} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://github.com/Hprimer" target="_blank" rel="noreferrer">
                            <img src={gitHub} alt="Link"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://t.me/naaaailsSsS" target="_blank" rel="noreferrer">
                            <img src={tg} alt="Link"/>
                        </a>
                    </li>

                </ul>
                <div className="copyright">
                    <p>© 2025 hprimer.github.io/Portfolio_Nail</p>
                </div>
            </div>
        </div>
    </footer>
	)
}

export default Footer
