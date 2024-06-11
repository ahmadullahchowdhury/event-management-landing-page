'use server';

import { transporter,  mailOptions } from 'config/nodemailler';
import { describe } from 'node:test';

const generateEmailContent = ({ data, flag }: any) => {
  let CONTACT_MESSAGE_FIELDS = {};

  if (flag === 1) {
    CONTACT_MESSAGE_FIELDS = {
      name: 'Name',
      subject: 'Subject',
      phone: 'Contact Phone',
      email: 'Email',
      message: 'Message'
    };
  } else if (flag === 2) {
    CONTACT_MESSAGE_FIELDS = {
      name: 'Name',
      subject: 'Subject',
      phone: 'Contact Phone',
      email: 'Email',
      description: 'Description'
    };
  } else {
    CONTACT_MESSAGE_FIELDS = {
      name: 'Name',
      email: 'Email',
      phone: 'Contact Phone',
      projectType: 'Project Type'
    };
  }

  console.log('data', data);
  const companyName = process.env.COMPANYNAME || 'Company Name';

  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]}: \n${val} \n \n`),
    ''
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3   class="form-heading" align="left">${
      CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]
    }</h3><p class="form-answer" align="left">${val}</p>`);
  }, '');

  return {
    text: stringData,
    subject: 'AMP4EMAIL message',
    html: `
    <!DOCTYPE html><html> 
    <head> <title></title> <meta charset="utf-8"/> 
    <meta name="viewport" content="width=device-width, initial-scale=1"/> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
    <style type="text/css"> 
    body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
    table{border-collapse: collapse !important;}
    body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}
    @media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}
    .responsive-table{width: 100% !important;}
    .padding{padding: 10px 5% 15px 5% !important;}
    .section-padding{padding: 0 15px 50px 15px !important;}}
    .form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}
    .form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; }
    .form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; }
    div[style*="margin: 16px 0;"]{margin: 0 !important;}
    </style>
    </head>
    
      <body style="margin: 0 !important; padding: 0 !important; background: #fff"> 
        <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;>
        </div>
          <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding"> 
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px" class="responsive-table" > 
            <tr> 
              <td> 
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr> 
                  <td> 
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" > 
                      <tr> 
                      <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" >
                        <h2>New ${flag === 1 ? "Contact Us Message" : flag === 2 ? "Request Project Quote" : "Project Sample Request" } for ${companyName}
                        </h2> 
                        <div class="form-container">${htmlData}</div>
                      </td>
                      </tr>
                    </table> 
                  </td>
                </tr>
                </table> 
                </td>
              </tr>
              </table>
            </td>
          </tr>
        </table> 
      </body>
    </html>
    `
  };
};


const generateAutoReplyContent = (name: any) => {
  const companyName = process.env.COMPANYNAME || 'Company Name';
  return {
    text: `Hello ${name},\n\nThank you for getting in touch with us. We have received your message and will respond to you shortly.\n\nBest regards,\nCompany Name`,
    subject: 'Thank you for your message',
    html: `
    <!DOCTYPE html><html> 
    <head> <title></title> <meta charset="utf-8"/> 
    <meta name="viewport" content="width=device-width, initial-scale=1"/> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/> 
    <style type="text/css"> 
    body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
    table{border-collapse: collapse !important;}
    body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}
    @media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}
    .responsive-table{width: 100% !important;}
    .padding{padding: 10px 5% 15px 5% !important;}
    .section-padding{padding: 0 15px 50px 15px !important;}}
    .form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}
    .form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; }
    .form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; }
    div[style*="margin: 16px 0;"]{margin: 0 !important;}
    </style>
    </head>
    
      <body style="margin: 0 !important; padding: 0 !important; background: #fff"> 
        <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;>
        </div>
          <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding"> 
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px" class="responsive-table" > 
            <tr> 
              <td> 
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr> 
                  <td> 
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" > 
                      <tr> 
                      <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" >
                        <h2>Thank you for your message</h2> 
                        <p>Hello ${name},</p>
                        <p>Thank you for getting in touch with us. We have received your message and will respond to you shortly.</p>
                        <p>Best regards,<br/>${companyName}</p>
                      </td>
                      </tr>
                    </table> 
                  </td>
                </tr>
                </table> 
                </td>
              </tr>
              </table>
            </td>
          </tr>
        </table> 
      </body>
    </html>
    `
  };
};


type IContactProps = {
  name?: string;
  subject?: string;
  phone?: string;
  email?: string;
  message?: string;
  description?: string;
  projectType?: string;
};

const sendMessage = async ({ data, flag }: { data: IContactProps; flag: Number }) => {
  // console.log('data2', data);
  try {
    const res = await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent({ data, flag }),
      subject: `${flag === 1 ? "Contact Us Message " : flag === 2 ? "Request Project Quote" : "Project Sample Request" } from DataDaddys Website`,
      replyTo: `${data.name} ${data.email}`,
      // from: `${data.name} ${data.email}`,
      // from: "kowcher99@gmail.com",
      // to: "testingsmtp@stacksages.com",
    });

    await transporter.sendMail({
      from: mailOptions.from,
      to: data.email,
      ...generateAutoReplyContent(data.name),
    });

    // console.log('server', res);

    if (res.accepted.length > 0) {
      return {
        status: true,
        message: 'Thank you for your message. We will contact soon.',
        data: res
      };
    }

    return {
      status: false,
      message: 'Something wrong please try again later.',
      data: res
    };
  } catch (err) {
    // console.log('errors', err);
    return { status: false, message: 'Bad request', data: err };
  }
};

export default sendMessage;
