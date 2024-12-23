import { Link } from "react-router-dom"
import { sideBarMenu } from "../../constants/index.js" 
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar-section'>
    {sideBarMenu && sideBarMenu.map((item, index)=>(
      <div className="item" key={index}>
      <span className="title">{item.title}</span>
      {item.listItems && item.listItems.map((link, index)=>(
        <Link to={link.url} className="item-link">
        <img src={link.icon} alt="home" />
        <sapn className="link-title">{link.title}</sapn>
      </Link>
      ))}
      
    </div>
    ))}
      
    </div>
  )
}

export default Sidebar