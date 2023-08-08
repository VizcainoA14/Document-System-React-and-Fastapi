import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Inventory } from "@mui/icons-material";

const table_name = "all"

function App() {
    const [Inventory, setInventory] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/document/select/${table_name}`,)
            .then(response => response.json())
            .then(json => setInventory(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="Inventory">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Inventory</h1>
                    <table border={1} align={"center"} className="table-design">
                        <tr>

                            <th>Author</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Topic</th>
                            <th>language</th>
                            <th>Publication Date</th>
                        </tr>
                        {Inventory.map(Inventory => (
                            <tr key={Inventory.ID}>
                                
                                <td>{Inventory.author}</td>
                                <td>{Inventory.title}</td>
                                <td>{Inventory.price}</td>
                                <td>{Inventory.topic}</td>
                                <td>{Inventory.language}</td>
                                <td>{Inventory.pub_date}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    )
}

export default App
