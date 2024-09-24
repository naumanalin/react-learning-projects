import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, deleteUser } from "../redux/userAPIs"; // Import deleteUser action

const Home = () => {
    const allUsers = useSelector((state) => state.users.data);
    const loading = useSelector((state)=> state.users.isLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleDelete = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (isConfirmed) {
            dispatch(deleteUser(id));
        }
    };

    if(loading){
        return <h1 className="loading">Loading...</h1>
    }

    return (
        <>
            <div className="container">
                <h2>All Users List</h2>
                <div className="radio-search">
                    <input type="radio" name="gender" id="all" value="" />
                    <label htmlFor="all">All</label>

                    <input type="radio" name="gender" id="male" value="male" />
                    <label htmlFor="male">Male</label>

                    <input type="radio" name="gender" id="female" value="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="user-list">
                    {allUsers && allUsers.map((u) => (
                        <div className="card-item" key={u.id}>
                            <h3>{u.name}</h3>
                            <p className="card-p">{u.email}</p>
                            <p className="card-p">{u.gender}</p>
                            <p className="card-p">{u.age}</p>
                            <span className="user-id">ID: {u.id}</span>
                            <div className="btn-group">
                                <Link to={`/update/${u.id}`} className="btn-edit">Edit</Link>
                                <button onClick={() => handleDelete(u.id)} className="btn-delete">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
