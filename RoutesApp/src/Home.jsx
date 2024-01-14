import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <Link to = { "/characters" }>
                <button> Star-Wars characters</button>
            </Link>
            <Link to = { "/planets" }>
                <button> Star-Wars planets</button>
            </Link>
        </div>
    )
}

export default Home