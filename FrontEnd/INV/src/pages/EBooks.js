import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { EBooks } from "@mui/icons-material";
import Addebook from "../components/Addebook"

const table_name = "EBooks"

function App() {
    const [EBooks, setEBooks] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/document/select/${table_name}`,)
            .then(response => response.json())
            .then(json => setEBooks(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="EBooks">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>EBooks</h1>
                    <table border={1} align={"center"} className="table-design">
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Topic</th>
                            <th>language</th>
                            <th>Publication Date</th>
                            <th>Size</th>
                            <th>Doi</th>
                            <th>Editor</th>
                            <th>Pages</th>
                            <th>Synopsis</th>
                        </tr>
                        {EBooks.map(EBooks => (
                            <tr key={EBooks.ID}>
                                <td>{EBooks.ID}</td>
                                <td>{EBooks.author}</td>
                                <td>{EBooks.title}</td>
                                <td>{EBooks.price}</td>
                                <td>{EBooks.topic}</td>
                                <td>{EBooks.language}</td>
                                <td>{EBooks.pub_date}</td>
                                <td>{EBooks.size}</td>
                                <td>{EBooks.doi}</td>
                                <td>{EBooks.editor}</td>
                                <td>{EBooks.pages}</td>
                                <td>{EBooks.synopsis}</td>

                            </tr>
                        ))}
                    </table>
                    </>  
            )}
            <div>
                <Addebook />
            </div>
        </div>
    )
}

export default App
