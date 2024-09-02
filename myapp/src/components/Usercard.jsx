
function Usercard({name, email, rollno}){
    return <>
    <p key={email}>{name}, {email}, {rollno}</p>
    </>
}

export default Usercard;