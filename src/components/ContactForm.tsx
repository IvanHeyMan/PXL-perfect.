"use client"
import { FormEvent, useState } from "react";
import clsx from "clsx";
import { BsFillSendFill } from "react-icons/bs";
import Image from "next/image";


export const ContactForm = () => {
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
        }
        catch(err:any) {
            console.error("Err", err)
        }
    };

    return (
        <div className="grid grid-cols-3 items-center justify-center" >
            <form onSubmit={onSubmit} className="col-start-2">
                <input value={firstName} type="text" placeholder="First Name" className="mt-5 py-2 bg-black rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center text-center text-5xl outline-none" onChange={(e) => setfirstName(e.target.value)}/>
                <input value={lastName} type="text" placeholder="Last Name" className="mt-5 py-2 bg-black rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center text-center text-5xl outline-none" onChange={(e) => setlastName(e.target.value)}/>
                <input value={email} type="email" placeholder="Email" className="mt-5 py-2 bg-black rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center text-center text-5xl outline-none" onChange={(e) => setEmail(e.target.value)}/>
                <textarea value={message} placeholder="Message" className="mt-5 py-8 bg-black rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center text-center text-5xl outline-none" onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <div className="flex items-center justify-center">
                    <button type='submit' className={clsx("group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-teal-600  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",)}>
                        <span className={clsx("absolute inset-0 w-full h-full translate-y-9 bg-teal-800 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 ",)}>
                        <BsFillSendFill className="inline-block mt-3"/>
                        </span>
                            Send
                    </button>
                </div>
            </form>
        </div>
    )
}