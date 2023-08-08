import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { AudioBooks } from "@mui/icons-material";
import Addaudiobook from "../components/Addaudiobook"

const table_name = "AudioBooks"

function App() {
    const [AudioBooks, setAudioBooks] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/document/select/${table_name}`,)
            .then(response => response.json())
            .then(json => setAudioBooks(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="AudioBooks">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>AudioBooks</h1>
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
                            <th>Duration</th>
                            <th>Synopsis</th>

                        </tr>
                        {AudioBooks.map(AudioBooks => (
                            <tr key={AudioBooks.ID}>
                                <td>{AudioBooks.ID}</td>
                                <td>{AudioBooks.author}</td>
                                <td>{AudioBooks.title}</td>
                                <td>{AudioBooks.price}</td>
                                <td>{AudioBooks.topic}</td>
                                <td>{AudioBooks.language}</td>
                                <td>{AudioBooks.pub_date}</td>
                                <td>{AudioBooks.size}</td>
                                <td>{AudioBooks.doi}</td>
                                <td>{AudioBooks.duration}</td>
                                <td>{AudioBooks.synopsis}</td>
                            </tr>
                        ))}
                    </table>
                    </>
                    
            )}
             <div>
                <Addaudiobook />
            </div>
        </div>
    )
}

export default App
