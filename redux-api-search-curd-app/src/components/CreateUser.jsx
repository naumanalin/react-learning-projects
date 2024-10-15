import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/userAPIs"; 
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use the useNavigate hook

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
        dispatch(createUser(userdata));
        setUserdata({
            name: "",
            email: "",
            age: "",
            gender: ""
        });
        navigate('/'); 
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmitUser}>
                    <h3>Create New User Here</h3>
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
                    <input
                        type="radio"
                        id="male"
                        value="male"
                        name="gender"
                        onChange={getUserData}
                        checked={userdata.gender === "male"}
                        required
                    />
                    <label htmlFor="male">Male</label>

                    <input
                        type="radio"
                        id="female"
                        value="female"
                        name="gender"
                        onChange={getUserData}
                        checked={userdata.gender === "female"}
                        required
                    />
                    <label htmlFor="female">Female</label>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default CreateUser;
