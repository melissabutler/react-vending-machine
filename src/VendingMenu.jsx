import { Link } from "react-router-dom"   

function VendingMenu() {
    return (
        <nav className="VendingMenu">
            <div className="VendingMenu-item">
                <Link to="/cadi">
                    Cadi
                </Link>
            </div>
            
            <div className="VendingMenu-item">
                <Link to="/mountain-dew">
                    Mountain Dew
                </Link>
            </div>
            <div className="VendingMenu-item">
                <Link to="/shorts">
                    Pair of Shorts
                </Link>
            </div>
            <div className="VendingMenu-item">
                <Link to="/sling-shot">
                    Sling shot
                </Link>
            </div>
            <div className="VendingMenu-item">
               <Link to="/trash-can">
                    Trash Can
                </Link> 
            </div>
            
        </nav>
    )
}

export default VendingMenu;