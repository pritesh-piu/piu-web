import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import msg_icon from '../../assets/msg-icon.png'; // Import message icon
import mail_icon from '../../assets/mail-icon.png'; // Import mail icon
import phone_icon from '../../assets/phone-icon.png'; // Import phone icon
import location_icon from '../../assets/location-icon.png'; // Import location icon
import white_arrow from '../../assets/white-arrow.png'; // Import white arrow icon

const Contact = () => {
  // Declare a state variable to store the result message
  const [result, setResult] = React.useState("");

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setResult("Sending...."); // Set the result state to "Sending...."
    
    const formData = new FormData(event.target); // Create a new FormData object from the form
    formData.append("access_key", "263e1134-8d49-4fb4-80a1-3b38f3435fc9"); // Add access key to the form data

    // Send the form data to the Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json(); // Parse the JSON response

    // Check if the form submission was successful
    if (data.success) {
      setResult("Form Submitted Successfully"); // Set success message
      event.target.reset(); // Reset the form
    } else {
      console.log("Error", data); // Log the error
      setResult(data.message); // Set the error message
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt=""/></h3>
        <p> 
          We're committed to providing exceptional service. 
          Contact us with your questions or concerns, and we'll respond promptly.
        </p>

        <ul>
          <li> <img src={mail_icon} alt=""/> mj@prakashinnovativeuniverse.com</li>
          <li><img src={phone_icon} alt=""/> +91 8121965512</li>
          <li><img src={location_icon} alt=""/> 801 Manjeera Majestic, Commercial, Same Building, <br/>
              Jntu Kukat Pally, Hyderabad, Tirumalagiri, Telangana, India, 500085.</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/> 

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/> 

          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn dark-btn'>
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result} </span> {/* Display the result message */}
      </div>
    </div>
  )
}

export default Contact;
