import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const [search, setSearch] = useState("");
    const userCount = useSelector((state) => state.users.data)
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className="flex justify-between ">
                            <div className="nav-left flex">
                                <h2><Link to={'/'}>MockAPI</Link></h2>
                                <Link to={'/'}> All User <sup>({userCount.length})</sup> </Link>
                                <Link to={'/create'}>Add new</Link>
                            </div>

                            <div className="nav-right">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search..."
                                    className="search-bar"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
