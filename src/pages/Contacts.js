import React from 'react'

function Contacts() {
	return (
		<main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Samara, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/naaaailsSsS" target="_blank" rel="noreferrer">@naaaailsSsS</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:04200620z@gmail.com">04200620z@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
	)
}

export default Contacts
