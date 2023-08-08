import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./form.css"


export default function Navbar() {
    return (
        <nav className="nav">
            <Link className="site-title">
                DMS
            </Link>
            <ul>
                <CustomLink to="/Inventory">Inventory</CustomLink>
                <CustomLink to="/Books">Books</CustomLink>
                <CustomLink to="/AudioBooks">AudioBook</CustomLink>
                <CustomLink to="/Magazines">Magazines</CustomLink>
                <CustomLink to="/InvBooks">Investigation Books</CustomLink>
                <CustomLink to="/EBooks">EBooks</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}