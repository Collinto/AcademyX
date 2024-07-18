import {React, useRef} from 'react'
import "./Testimonials.css"
import next_icon from "../../Assets/next-icon.png"
import back_icon from "../../Assets/back-icon.png"
import user_1 from "../../Assets/user-1.png"
import user_2 from "../../Assets/user-2.png"
import user_3 from "../../Assets/user-3.png"
import user_4 from "../../Assets/user-4.png"

const Testimonials = () => {

    const slider = useRef();
    let count = 0;

    const slideForward = () =>{
        count > -50 ? count -=25 : count = 0;

        slider.current.style.transform = `translateX(${count}%)`
    }
    const slideBackward = () =>{
        count < 0 ? count +=25 : count = 0;

        slider.current.style.transform = `translateX(${count}%)`
    }


  return (
    <div className='testimonials'>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
     
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Debby</h3>
                            <span>Detroit, usa</span>
                        </div>
                    </div>
                                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Mark </h3>
                            <span>Detroit, usa</span>
                        </div>
                    </div>
                   
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Precious</h3>
                            <span>Detroit, usa</span>
                        </div>
                    </div>
                                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Lizzy</h3>
                            <span>Detroit, usa</span>
                        </div>
                    </div>
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias</p>
                </div>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Testimonials
