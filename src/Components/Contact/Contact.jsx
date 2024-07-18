import {React, useState} from 'react'
import "./Contact.css"
import msg_icon from "../../Assets/msg-icon.png"
import mail_icon from "../../Assets/mail-icon.png"
import phone_icon from "../../Assets/phone-icon.png"
import location_icon from "../../Assets/location-icon.png"
import white_Arrow from "../../Assets/white-arrow.png"


const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_EMAIL_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore distinctio ad error nobis, similique rerum dolorem corrupti fuga nihil atque, modi nulla eveniet quis aspernatur totam ullam, impedit ea!</p>
        <ul>
            <li><img src={mail_icon} alt="" srcset="" /> Contact@linzTech.com</li>
            <li><img src={phone_icon} alt="" srcset="" />+2347081774877</li>
            <li><img src={location_icon} alt="" srcset="" />Port Harcout, Rivers State, Nigeria</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text"  name='name' id='name' placeholder='Enter your name...' required/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name='phone' id='phone' placeholder='Enter your mobile number...' required/>
            <label htmlFor="msg">Write your message here</label>
            <textarea name="msg" id="msg" cols='30' rows="6" placeholder='Enter your message here...' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now <img src={white_Arrow} alt="" /></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
