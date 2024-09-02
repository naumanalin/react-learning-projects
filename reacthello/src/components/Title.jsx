

    // code optimization
    // props - object -> destructure kr sakty hai

function Title({name, email, contactNo, rollNo, address}){
    return <>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>RollNo:{rollNo}</h3>
        <h3>ContactNo:{contactNo}</h3>
        <h3>Address:{address}</h3>
    </>
}

export default Title;