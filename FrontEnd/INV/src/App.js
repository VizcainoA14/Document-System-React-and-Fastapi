import Navbar from "./components/Navbar"
import Books from "./pages/Books"
import AudioBooks from "./pages/AudioBooks"
import Magazines from "./pages/Magazines"
import InvBooks from "./pages/InvBooks"
import Inventory from "./pages/Inventory"
import EBooks from "./pages/EBooks"







import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/Inventory" element={<Inventory />} />
                    <Route path="/Books" element={<Books />} />
                    <Route path="/AudioBooks" element={<AudioBooks />} />
                    <Route path="/Magazines" element={<Magazines />} />
                    <Route path="/InvBooks" element={<InvBooks />} />
                    <Route path="/EBooks" element={<EBooks />} />
                </Routes>
            </div>    
        </>
    )
}

export default App