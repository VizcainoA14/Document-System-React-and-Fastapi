import React, { useEffect, useState } from 'react';
import "./form.css"
import Delete from "./delete.js"

export default function Addaudiobook() {
    const [author, setParam1] = useState('');
    const [title, setParam2] = useState('');
    const [price, setParam3] = useState('');
    const [topic, setParam4] = useState('');
    const [language, setParam5] = useState('');
    const [pub_date, setParam6] = useState('');
    const [size, setParam7] = useState('');
    const [doi, setParam8] = useState('');
    const [duration, setParam9] = useState('');
    const [synopsis, setParam10] = useState('');


    useEffect(() => {
        setParam1('author');
        setParam2('title');
        setParam3(100);
        setParam4('topic');
        setParam5('language');
        setParam6('2000-01-01');
        setParam7(10);
        setParam8('doi');
        setParam9(20);
        setParam10('synopsis');
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://127.0.0.1:8000/api/document/ElectronicDoc/Add/Audiobook/${author}/${title}/${price}/${topic}/${language}/${pub_date}/${size}/${doi}/${duration}/${synopsis}`, {method: 'POST'})
            .then((response) => response.json())
            .then((data) => {
                // Haz algo con los datos de la respuesta de la API
                console.log(data);
                window.location.reload();
            })
            .catch((error) => {
                // Manejo de errores
                console.error(error);
            });
    };

    return (
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <h2>Add Audiobook</h2>
                <label>
                    Author:
                        <input
                        placeholder='author'
                        type="text"
                        value={author}
                        required
                        onChange={(event) => setParam1(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Title:
                        <input
                        placeholder='title'
                        type="text"
                        value={title}
                        required
                        onChange={(event) => setParam2(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        placeholder='100'
                        type="number"
                        value={price}
                        required
                        onChange={(event) => setParam3(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Topic:
                    <input
                        placeholder='topic'
                        type="text"
                        value={topic}
                        required
                        onChange={(event) => setParam4(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Language:
                    <input
                        placeholder='language'
                        type="text"
                        value={language}
                        required
                        onChange={(event) => setParam5(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Publication Date:
                    <input
                        placeholder='2000-01-01'
                        type="date"
                        value={pub_date}
                        required
                        onChange={(event) => setParam6(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Size:
                        <input
                        placeholder='10'
                        type="number"
                        value={size}
                        required 
                        onChange={(event) => setParam7(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Doi:
                    <input
                        placeholder='doi'
                        type="text"
                        value={doi}
                        required 
                        onChange={(event) => setParam8(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Duration:
                    <input
                        placeholder='20'
                        type="number"
                        value={duration}
                        required
                        onChange={(event) => setParam9(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Synopsis:
                    <input
                        placeholder='synopsis'
                        type="text"
                        value={synopsis}
                        required 
                        onChange={(event) => setParam10(event.target.value)}
                    />
                </label>
                <br />
                    <button type="submit">SENT</button>
                    </div>
            </form>
            <aside><Delete data="Audiobooks"/></aside>
        </div>
    )
}
