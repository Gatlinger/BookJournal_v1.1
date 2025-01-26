import { NavLink } from "react-router-dom"

export const ToolBar = () => {
    return (
        <div className="ToolBarContainer">
            <NavLink to='/' className="ToolBarElement">МОЯ ПОЛКА</NavLink>
            <NavLink to='/search' className="ToolBarElement">ПОИСК</NavLink>
        </div>
    )
}