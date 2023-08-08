import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Book } from "@mui/icons-material";
import Addbook from "../components/Addbook";

const table_name = "Books"

function App() {
    const [Book, setBook] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/document/select/${table_name}`,)
            .then(response => response.json())
            .then(json => setBook(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className="Book">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <h1>Books</h1>
                        <table border={1} align={"center"} className="table-design">
                            <tr>
                                <th>ID</th>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Topic</th>
                                <th>language</th>
                                <th>Publication Date</th>
                                <th>Publisher</th>
                                <th>Editor</th>
                                <th>Pages</th>
                                <th>Synopsis</th>
                                <th>Presentation</th>
                            </tr>
                            {Book.map(Book => (
                                <tr key={Book.ID}>

                                    <td>{Book.ID}</td>
                                    <td>{Book.author}</td>
                                    <td>{Book.title}</td>
                                    <td>{Book.price}</td>
                                    <td>{Book.topic}</td>
                                    <td>{Book.language}</td>
                                    <td>{Book.pub_date}</td>
                                    <td>{Book.publisher}</td>
                                    <td>{Book.editor}</td>
                                    <td>{Book.pages}</td>
                                    <td>{Book.synopsis}</td>
                                    <td>{Book.presentation}</td>
                                </tr>
                            ))}
                        </table>
                    </>
                )}
            </div>
            <div>
                <Addbook />
            </div>
        </>
    )
}

export default App
