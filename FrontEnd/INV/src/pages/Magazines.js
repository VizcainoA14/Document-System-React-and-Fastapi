import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Magazines } from "@mui/icons-material";
import Addmagazine from "../components/Addmagazine";

const table_name = "Magazines"

function App() {
    const [Magazines, setMagazines] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/document/select/${table_name}`,)
            .then(response => response.json())
            .then(json => setMagazines(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="Magazines">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Magazines</h1>
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
                                <th>Edition</th>
                                <th>Pages</th>
                        </tr>
                        {Magazines.map(Magazines => (
                            <tr key={Magazines.ID}>
                                
                                <td>{Magazines.ID}</td>
                                <td>{Magazines.author}</td>
                                <td>{Magazines.title}</td>
                                <td>{Magazines.price}</td>
                                <td>{Magazines.topic}</td>
                                <td>{Magazines.language}</td>
                                <td>{Magazines.pub_date}</td>
                                <td>{Magazines.size}</td>
                                <td>{Magazines.doi}</td>
                                <td>{Magazines.edition}</td>
                                <td>{Magazines.pages}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
            <div>
                <Addmagazine />
                
            </div>
        </div>
    )
}

export default App
