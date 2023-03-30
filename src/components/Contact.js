
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import Wrapper from './wrapper';
import { slideIn } from "../utils/motion";

const Contact = () => {

    const form = useRef();
  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [errors,setErrors] = useState({});

  const [isSubmit,setSumbit] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(state));
    setSumbit(true);
    
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmit){
        setLoading(true);
      emailjs.sendForm('service_jlrrl4d', 'template_0db9wuw', form.current, 'XgpZsrhb-sJPakvFY')
      .then((result) => {
        setLoading(false);
        alert('Successfully submitted');
        window.location.reload(true);
        
          console.log(result.text);
      }, (error) => {
        setLoading(false);
          console.log(error.text);
      });
      console.log('submitted');
      // setShow(true);
    }
  },[errors, isSubmit])
  

  const validate = (values) => {
    const err = {}
    if(!values.name){
      err.name = "Please fill out the input field !"
    }
    if(!values.email){
      err.email = "Please fill out the input field !"
    }
    if(!values.message){
      err.message = "Please fill out the input field !"
    }
    return err;
  }
  return (
    <Wrapper idName={'contact'}>
    <div
    className={`xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-primary p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
            type='text'
            name='name'
            value={state.name} onChange={handleInputChange}
            placeholder="What's your good name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
          <p style={{color:'red'}}>{errors.name}</p>
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your email</span>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={handleInputChange}
            placeholder="What's your web address?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
          <p style={{color:'red'}}>{errors.email}</p>
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={state.message}
            onChange={handleInputChange}
            placeholder='What you want to say?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
          <p style={{color:'red'}}>{errors.message}</p>
        </label>

        <button
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>

  </div>
  </Wrapper>
  )
}

export default Contact