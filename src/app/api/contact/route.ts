import { MIDDLEWARE_BUILD_MANIFEST } from "next/dist/shared/lib/constants";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request:NextRequest) {
    try {
        const {firstName, lastName, email, message} = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.BREVO_KEY,
            }
        })

        const mailOption = {
            from: email,
            to: process.env.EMAIL_FROM,
            subject: 'New Contact Form Submission!',
            text: `Hello,
            
            You have a new form entry from ${firstName} ${lastName} ${email}.
            
            ${message}
            
            :)`,
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({message:'Email sent successfully'}, {status:200})

    } catch (error:any) {
        return NextResponse.json({message:'Failed sending email'}, {status:500})
    }
    
}

















// export async function POST(req: NextRequest, res: NextResponse) {

//     const formData = await req.json();
//     console.log(formData);

//     const {firstName, lastName, email, message} = formData

//     sendEmail.subject = "New Contact Form Entry"
//     sendEmail.to = [{email:"ivanentin@gmail.com", name:"Ivan Entin"}]
//     sendEmail.textContent = `Hello,
        
//     You have a new form entry from ${firstName} ${lastName} ${email}.
        
//     ${message}
        
//     :)`

//     apiInstance.sendTransacEmail(sendEmail).then(function (data: any) {
//         console.log('Api called, return data: ' + JSON.stringify(data));
//     }, function (error:any) {
//         console.error(error)
//     })

//     // const sendSmtpEmail = {
//     //     to: [{email:"ivanentin@gmail.com", name:"Ivan Entin"}],
//     //     subject:"New Contact Form",
        // textContent:`Hello,
        
        // You have a new form entry from ${firstName} ${lastName} ${email}.
        
        // ${message}
        
        // :)`,
//     // }

//     return (
//         NextResponse.json({message: "Working", formData})
//     )
// }


//Everything is working... February 16th 2024
//All resources and docs used ----> 
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers 
//https://stackoverflow.com/questions/76743001/how-to-send-a-json-response-from-an-api-route-in-next-js?rq=1
//https://stackoverflow.com/questions/76214029/no-http-methods-exported-in-export-a-named-export-for-each-http-method
//https://stackoverflow.com/questions/75974247/readablestream-locked-false-state-readable-supportsbyob-false
//https://github.com/vercel/next.js/discussions/54355
// import  { NextRequest, NextResponse } from 'next/server'
// import { TransactionalEmailsApi } from '@getbrevo/brevo';

// const brevo = require("@getbrevo/brevo")
// const defaultClient = brevo.ApiClient.instance

// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = process.env.BREVO_API_KEY;

// let apiInstance = new brevo.TransactionalEmailsApi()
// let sendEmail = new brevo.sendSmtpEmail()

// export async function POST(request: NextRequest) {

//     const {firstName, lastName, email, message} = await request.json()


// }//