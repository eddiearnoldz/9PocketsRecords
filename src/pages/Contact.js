import { useState } from "react";
import { send } from 'emailjs-com'

const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    text: '',
    from_email: '',
  });

  const onSubmit = (e) => {

    e.preventDefault();
    send(
      '9PocketsRecords',
      'template_ac764uk',
      toSend,
      'gWfY7gMc4qo9a3kBt'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({from_name: '',
        message: '',
        from_email: '',
      })})
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="grid place-items-center h-full">
    <div className="p-6 max-w-2xl content-center mt-10">
        <form onSubmit={onSubmit} >
          <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col col-span-2">
            <h1 className=" text-xl font-bold text-white text-center ">We're always looking to meet new faces and hear new tunes</h1>
          </div>
          <div className="flex flex-col">
            <input 
              type="text" 
              placeholder="Name"
              className="form-input px-3 py-2 rounded-md"
              id="name" 
              name='from_name'
              required="true"
              value={toSend.from_name}
              onChange={handleChange} />
            </div>
            <div className="flex flex-col">
            <input 
              type="text" 
              placeholder="Email"
              className="form-input px-3 py-2 rounded-md"
              id="email" 
              name='from_email'
              required="true"
              value={toSend.from_email}
              onChange={handleChange} />
            </div>
            <div className="flex flex-col col-span-2">
            <textarea 
              type="textarea" 
              className="form-input px-3 py-2 rounded-md"
              id="text"
              rows={5}
              cols={5}
              name='text'
              placeholder="Whats good?"
              required="true"
              value={toSend.text}
              onChange={handleChange} />
              </div>
              <div className="flex flex-col col-span-2 max-w-100 items-center">
                <button className="text-white border-2 p-1 rounded mt-3 hover:scale-105 duration-300" type="submit" name="action">Drop the mic</button>
              </div>
            </div>
          </form>
        </div>
      </div>
       
  </>
  )
}

export default Contact