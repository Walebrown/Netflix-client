import { useState } from "react";
import "./navbar.scss";
import Search, { ArrowDropDown, Notifications, SearchOutlined } from '@material-ui/icons/index'
import feature from "./feature.JPG"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        
        setIsScrolled(window.scrollY === 0 ? false: true);
        return () => (window.onscroll = null)
    }
  return (
     
    <div className = {isScrolled? "navbar scrolled": "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <SearchOutlined  className = "icon"/>
                <span>KIDS</span>
                <Notifications className = "icon"/> 
                <img src="" alt="" />
                <div className="profile">
                <ArrowDropDown className = "icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>

                </div>
               
            </div>
        </div>
        </div>
  )
}

export default Navbar