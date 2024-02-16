import  { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {

    const formData = await req.json();
    console.log(formData);


    return (
        NextResponse.json({message: "Working", formData})
    )
}


//Everything is working... February 16th 2024
//All resources and docs used ----> 
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers 
//https://stackoverflow.com/questions/76743001/how-to-send-a-json-response-from-an-api-route-in-next-js?rq=1
//https://stackoverflow.com/questions/76214029/no-http-methods-exported-in-export-a-named-export-for-each-http-method
//https://stackoverflow.com/questions/75974247/readablestream-locked-false-state-readable-supportsbyob-false
//https://github.com/vercel/next.js/discussions/54355
