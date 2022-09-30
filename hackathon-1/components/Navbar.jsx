import Link from 'next/link'
const Navbar = () => {

    return(
        <nav className="nav-cont">
            <Link href="/"> <a className="nav-title" >  Fiscalizador - Aglomeración</a></Link>
            <Link href="/api/logout"><a>Log out</a></Link>
        </nav>
    )
}

export default Navbar