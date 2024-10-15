import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userAPIs";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams(); // Get the ID from the URL
    const allUsers = useSelector((state) => state.users.data);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use the useNavigate hook

    // Find the user by ID
    console.log(allUsers)
    const userToUpdate = allUsers.find((user) => user.id === id);
    console.log("user to update", userToUpdate);

    // Initialize state with the user's data
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    });

    useEffect(() => {
        if (userToUpdate) {
            setUserdata({
                name: userToUpdate.name,
                email: userToUpdate.email,
                age: userToUpdate.age,
                gender: userToUpdate.gender
            });
        }
    }, [userToUpdate]);

    // Update userdata state on form input change
    const getUserData = (e) => {
        const { name, value } = e.target;
        setUserdata({
            ...userdata,
            [name]: value
        });
    };

    const handleSubmitUser = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id, ...userdata })); // Include the user ID in the payload
        navigate('/'); 
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmitUser}>
                    <h3>Update User Data</h3>
                    <div className="form-container">
                        {/* name */}
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={userdata.name}
                            onChange={getUserData}
                            required
                        />
                    </div>
                    <div className="form-container">
                        {/* email */}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={userdata.email}
                            onChange={getUserData}
                            required
                        />
                    </div>
                    <div className="form-container">
                        {/* age */}
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={userdata.age}
                            onChange={getUserData}
                            required
                        />
                    </div>
                    
                    {/* gender */}
                    <div className="form-container">
                        <input
                            type="radio"
                            id="male"
                            value="male"
                            name="gender"
                            onChange={getUserData}
                            checked={userdata.gender === "male"}
                        />
                        <label htmlFor="male">Male</label>

                        <input
                            type="radio"
                            id="female"
                            value="female"
                            name="gender"
                            onChange={getUserData}
                            checked={userdata.gender === "female"}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    
                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    );
};

export default Update;
