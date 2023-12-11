import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <Link to = { "/characters" }>
                <button> Query Star-Wars characters</button>
            </Link>
        </div>
    )
}

export default Home