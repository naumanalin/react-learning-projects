import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, deleteUser, searchData } from "../redux/userAPIs"; // Import deleteUser action

const Home = () => {
    const allUsers = useSelector((state) => state.users.data);
    const loading = useSelector((state)=> state.users.isLoading)
    const search = useSelector((state)=> state.users.searchData)

    const [radiobtn, setradiobtn] = useState("")

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
                <h2>All Users List <span style={{color:"blue", textDecoration:"underline"}}>{search && ` with your search: ${search}`}</span></h2>
                <div className="radio-search">
                    <input type="radio" name="gender" id="all" value="" 
                    checked={radiobtn === ""}
                    onChange={(e)=>setradiobtn("")}
                    />
                    <label htmlFor="all">All</label>

                    <input type="radio" name="gender" id="male" value="male" 
                    checked={radiobtn === "male"}
                    onChange={(e)=>setradiobtn(e.target.value)}
                    />
                    <label htmlFor="male">Male</label>

                    <input type="radio" name="gender" id="female" value="female" 
                    checked={radiobtn === "female"}
                    onChange={(e)=>setradiobtn(e.target.value)}
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="user-list">
                    {allUsers && 
                    allUsers.filter((ele)=>{
                        if(search.length == 0){
                            return true;
                        } 
                        else {
                            return ele.name.toLowerCase().includes(search.toLowerCase());
                        }
                    }).filter((ele)=>{
                        if(radiobtn === "male"){
                            return ele.gender.toLowerCase() == radiobtn;
                        } else if (radiobtn === "female"){
                            return ele.gender.toLowerCase() === radiobtn;
                        }
                        else {
                            return true;
                        }
                    })
                    .map((u) => (
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
