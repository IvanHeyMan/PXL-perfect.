"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { FormEvent, useState } from "react";
import clsx from "clsx";
import { BsFillSendFill } from "react-icons/bs";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Data", firstName, lastName, email, message)
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <form onSubmit={onSubmit}>
            <input value={firstName} type="text" placeholder="First Name" className="bg-black overflow-hidden rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center items-center text-pretty text-center text-5xl" onChange={(e) => setfirstName(e.target.value)}/>
            <input value={lastName} type="text" placeholder="Last Name" className="bg-black overflow-hidden rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center items-center text-pretty text-center text-5xl" onChange={(e) => setlastName(e.target.value)}/>
            <input value={email} type="email" placeholder="Email" className="bg-black overflow-hidden rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center items-center text-pretty text-center text-5xl" onChange={(e) => setEmail(e.target.value)}/>
            <textarea value={message} placeholder="Message"className="bg-black overflow-hidden rounded-2xl border-2 border-teal-700 opacity-95 w-full h-full justify-center items-center text-pretty text-center text-5xl" onChange={(e) => setMessage(e.target.value)}>

            </textarea>
            <button type='submit' className={clsx("group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-teal-600  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",)}>
              <span className={clsx("absolute inset-0 w-full h-full translate-y-9 bg-teal-800 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 ",)}>
                <BsFillSendFill className="inline-block mt-3"/>
              </span>
                {slice.primary.button_text}
            </button>
        </form>
    </Bounded>
  );
};

export default Contact;


//Contact Us!  HEADING KEYTEXT FIELD

//First Name FIRST KEYTEXT FIELD

//Last Name LAST KEYTEXT FIELD

//Email EMAIL KEYTEXT FIELD

//Message MESSAGE KEYTEXT FIELD

//SUBMIT BUTTON TEXT KEYTEXT FIELD
