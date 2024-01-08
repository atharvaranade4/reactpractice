import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <Link to = { "/characters" }>
                <button> Query Star-Wars planets</button>
            </Link>
            <Link to = { "/planets" }>
                <button> Query Star-Wars planets</button>
            </Link>
        </div>
    )
}

export default Home