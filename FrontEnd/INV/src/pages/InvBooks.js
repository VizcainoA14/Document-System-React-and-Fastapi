import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Inv_books } from "@mui/icons-material";
import Addinvbook from "../components/Addinvbook";

const table_name = "Investigation_books"

function App() {
    const [Inv_books, setInv_books] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/document/select/${table_name}`,)
            .then(response => response.json())
            .then(json => setInv_books(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="Investigation books">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Investigation Books</h1>
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
                            <th>Pages</th>
                            <th>Abstract</th>
                        </tr>
                        {Inv_books.map(Inv_books => (
                            <tr key={Inv_books.ID}>
                                <td>{Inv_books.ID}</td>
                                <td>{Inv_books.author}</td>
                                <td>{Inv_books.title}</td>
                                <td>{Inv_books.price}</td>
                                <td>{Inv_books.topic}</td>
                                <td>{Inv_books.language}</td>
                                <td>{Inv_books.pub_date}</td>
                                <td>{Inv_books.size}</td>
                                <td>{Inv_books.doi}</td>
                                <td>{Inv_books.pages}</td>
                                <td>{Inv_books.abstract}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
            <div>
                <Addinvbook />
            </div>
        </div>
    )
}

export default App
