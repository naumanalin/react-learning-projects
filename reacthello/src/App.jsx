import Test from "./components/Test";
import Dynamic from "./components/Dynamic";
import Random from "./components/Random";
import Title from "./components/Title";
import Registration from "./components/Registration";
import Users from "./components/Users";


function App(){
  return <div>
    <h1>Hello react</h1>
    <Registration/>
    <hr />
    <Users />
    <hr />
    {/* props  */}
    <Title name="Ahmad" email="ahmad@gmail.com" contactNo={'231654'} rollNo={56} address={'sialkot'} />
    <Title name="Abdullah" email={'abdullah@gmail.com'} contactNo={12346} rollNo={33} address={'alipure'} />

    <hr />
    <h2>h2 heading</h2>
    <Test/>
    <Dynamic/>
    <Random/>
    <Random/>
    <Random/>
    <Random/>
  </div>
}

export default App;