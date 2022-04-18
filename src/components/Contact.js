import { useState } from "react";
import { send } from 'emailjs-com'

const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    text: '',
    from_email: '',
  });



  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div>
    <h1 className="text-xl font-bold underline text-white">Contact</h1>
      <form>
        <input 
          type="text" 
          placeholder="Name"
          className="validate"
          id="name" 
          name='from_name'
          required="true"
          value={toSend.from_name}
          onChange={handleChange} />
        <input 
          type="text" 
          placeholder="Email"
          id="email" 
          name='from_email'
          required="true"
          value={toSend.from_email}
          onChange={handleChange} />
        <input 
          type="textarea" 
          placeholder="How can we help?"
          className="validate"
          id="text" 
          name='text'
          required="true"
          value={toSend.text}
          onChange={handleChange} />
        <button className="btn waves-effect waves-light" type="submit" name="action">Drop the mic</button>
      </form>
    </div>
    </>
  )
}

export default Contact