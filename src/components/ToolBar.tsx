import { NavLink } from "react-router-dom"

export const ToolBar = () => {
    return (
        <div className="ToolBarContainer">
            <NavLink to='/' className="ToolBarElement">BookShelf</NavLink>
            <NavLink to='/search' className="ToolBarElement">Search</NavLink>
        </div>
    )
}