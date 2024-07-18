import React, { useEffect, useState} from 'react'
import "./Navbar.css"
import { Link  } from 'react-scroll'
import menu_icon from '../../Assets/menu-icon.png'


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })

    setSticky()
  }, [])

//   const sideBar = useRef();
 

//  const showSideBar = () => {

//    click ?  sideBar.current.style.display = "none" : sideBar.current.style.display = "block";

//    setClick(!click);
//     console.log(click)

//   }

const toggleMenu = () => {
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  console.log(mobileMenu)
}

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <h2 className="logo">LinzTech</h2>
      <ul className={mobileMenu ? '':"hide-mobile-menu"}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-240} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-190} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-240} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-240} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-240} duration={500}><button className="btn">Contact Us</button></Link></li>
      </ul>
    
        <img src={menu_icon} alt="" className='ham' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
