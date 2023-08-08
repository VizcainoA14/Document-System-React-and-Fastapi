import React, { useEffect, useState } from 'react';
import "./form.css"

const Delete = (props) => {
    const [id_document, setParam1] = useState('');
    const [table_name, setParam2] = useState(props.data);


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://127.0.0.1:8000/api/document/delete/${id_document}/${table_name}`, {method: 'DELETE'})
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
            <center>
                <form onSubmit={handleSubmit}>
                <div className='delete-group'>
                    <h2>Delete</h2>
                        <label>
                            ID:
                            <input
                                placeholder='id'
                                type="number"
                                value={id_document}
                                required
                                onChange={(event) => setParam1(event.target.value)}
                            />
                        </label>
                        <br />
                        <button type="submit" className="btn btn-primary">DELETE</button>
                    </div>
                </form>
            </center>
        );
}
export default Delete;