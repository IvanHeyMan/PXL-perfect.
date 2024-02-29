"use client"
import { FormEvent, useState } from "react";
import clsx from "clsx";
import { BsFillSendFill } from "react-icons/bs";


export const ContactForm = () => {
    const [isSubmitted, setisSubmitted] = useState(false)
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e:FormEvent) => {
        e.preventDefault()  
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                firstName,
                lastName,
                email,
                message,
                }),
                headers: {
                "content-type" : "/application/json"
                }
            })

            if (res.status === 200) {
                setisSubmitted(true)
            }
        }
        catch(err:any) {
            console.error("Error: ", err)
        }
    };

    return isSubmitted ? (
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-5 ">
            <div className="h-[20vh]">

            </div>
            <h1 className="col-start-1 text-center text-slate-50 text-2xl md:col-start-1 md:col-span-5 md:text-8xl">
                Thank you for your message!
            </h1>
            
        </div>
    ) : (
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3" >
            <form onSubmit={onSubmit} className="md:col-start-2">
                <input value={firstName} type="text" placeholder="First Name" className="mt-5 py-2 bg-black rounded-2xl border-2 border-teal-700 w-full h-full justify-center text-center text-5xl outline-none bg-opacity-85" onChange={(e) => setfirstName(e.target.value)}/>
                <input value={lastName} type="text" placeholder="Last Name" className="mt-5 py-2 bg-black rounded-2xl border-2 border-teal-700 w-full h-full justify-center text-center text-5xl outline-none bg-opacity-85" onChange={(e) => setlastName(e.target.value)}/>
                <input value={email} type="email" placeholder="Email" className="mt-5 py-2 bg-black rounded-2xl border-2 border-teal-700 w-full h-full justify-center text-center text-5xl outline-none bg-opacity-85" onChange={(e) => setEmail(e.target.value)}/>
                <textarea value={message} placeholder="Message" className="mt-5 py-8 bg-black rounded-2xl border-2 border-teal-700 w-full h-full justify-center text-center text-5xl outline-none resize-none bg-opacity-85" onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <div className="flex items-center justify-center py-8">
                    <button type='submit' className={clsx("group relative w-full text-4xl items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-teal-600  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",)}>
                        <span className={clsx("absolute inset-0 w-full h-full translate-y-14 bg-teal-800 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 ",)}>
                        <BsFillSendFill className="inline-block mt-3"/>
                        </span>
                            Send
                    </button>
                </div>
            </form>
        </div>
        )
}