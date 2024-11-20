import { Link } from "react-router-dom";


const HomePage = () => {

    return(
        <div>
            <p>User Name: </p>
            HOME PAGE
            <Link to='/user'>Go To user page</Link>
        </div>
    )
}

export default HomePage;