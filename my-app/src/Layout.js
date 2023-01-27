import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Layout(){


    return <div><header>
        <h1>Bikes</h1>
    </header>
        <nav>
            <li><Link to = "/">All Bikes</Link></li>
            <li><Link to = "create">New Bike</Link></li>
        </nav>
    <div>
        <Outlet />
    </div>
</div>
}