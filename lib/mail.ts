


import nodemailer from "nodemailer";



export async function sendMail  ({
    to,
    name,
    subject,
    body,
  }:{
    to:string,
    name:string,
    subject:string,
    body:string
  })  {
    const {SMTP_EMAIL , SMTP_PASSWORD} = process.env;
  
    const transport = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:SMTP_EMAIL,
        pass:SMTP_PASSWORD
      }
    });
  
    try {
      const testRes = await transport.verify();
      console.log(testRes);
      
    } catch (error) {
      console.log(error);
      
    }
  
  
    try {
      const sendMailNow = await transport.sendMail({
        from:SMTP_EMAIL,
        to,
        subject,
        html:body
      })
    } catch (error) {
      console.log(error);
      
    }
  
  
  
  }