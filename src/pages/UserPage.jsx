import { Link } from "react-router-dom";



const UserPage = () => {
    const user = 'Alex'
    return (
        <div>
            User Page
            <Link to='/'>Go to home page</Link>
        </div>
    )
}

export default UserPage;