import React from 'react'
import {Menu, X,MapPinCheckInside,Mail, AlignRight, Search} from 'lucide-react';
import {hours} from '../constants';

const Form = () => {
    const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Convert formData to a JSON object
    const jsonData = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: JSON.stringify(jsonData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("Thank you! Your message has been sent.");
            form.reset();
        } else {
            setStatus("Oops! Something went wrong.");
        }
    } catch (error) {
        setStatus("Oops! Something went wrong.");
    }
};
  return (
    <div className='formap bg-neutral-900 w-full  py-10 flex flex-col items-center justify-center gap-15 md:flex-row md:px-10 lg:flex-row px-10'>
        <div className='form w-full py-5 px-7 flex flex-col gap-5'>
            <article className='flex flex-col gap-3'>
                <h3 className='text-green-700 font-bold text-md'>GET IN TOUCH</h3>
                <span className='text-2xl'>We're here to help you create magic!</span>
            </article>  
            <form action="https://formspree.io/f/xpwpjrey" method="POST" className='flex flex-col px-2 py-4 justify-center'>
                <label htmlFor="name" required >Name</label>
                <input type="text" name='name' placeholder='Jane Smith' className='border my-1 px-2 py-1 mb-6' />
                <label htmlFor="email"required>Email</label>
                <input type="email" name='email' placeholder='janesmith@yahoo.com' className='py-2 px-2 mb-6 border'/>
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id='phone' placeholder='555-555-555' className=' border py-2 px-2 mb-6'/>
                <label htmlFor="message">Message</label>
                <textarea name='message' className='h-32 px-2 py-2 mb-6 border' placeholder='Type your message...'></textarea>

                <article><input type='checkbox' required/> <span>I allow this website to store my submission so they can respond to my inquiry</span></article>
                <button type='submit' className='bg-green-800 mt-5 w-full px-10 py-3 text-sm font-bold cursor-pointer'>SUBMIT</button>
            </form>
        </div>
        <div className="map  w-full flex flex-col items-center py-5">

            <div className=' mb-5 flex flex-col gap-2'>
            <span className='text-2xl'>Get in touch</span>
            <div className='flex flex-row gap-5'>
                <span>{<Mail/>}</span>
                <a className='underline'>chefamara@nneskitchen.com</a>
            </div>
            </div>

            <div className='w-70  mb-5 flex flex-col items-start gap-2'>
            <span className='text-2xl'>Location</span>
            <div className='flex flex-row gap-5'>
                <span>{<MapPinCheckInside/>}</span>
                <a className='underline'>Abuja, FC NG</a>
            </div>
            </div>

            <div className=' w-87 px-8 text-lg flex  flex-col '>
            <span className='text-2xl'>Hours</span>
            <ul className='flex flex-col gap-2'>
            {hours.map((hour, index)=>(
                    <li key={index}>
                      <span>{hour.text}{hour.description}</span>  
                    </li>
                ))}
            </ul>
            </div>
        
        </div>
      
    </div>
  )
}

export default Form
