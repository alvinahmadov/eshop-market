import emailTemplates from './emailTemplates';

export function getContent(emailType, translations) {
  if (emailType.subject === 'Order') {
    const cart = emailType.cart;

    return emailTemplates(cart, emailType, translations);
  } else if (emailType.subject === 'Contact') {
    const keys = translations ? translations['keys'] : {};

    return `<html>
              <body>
                <div style='text-align:center;'>
                  <h3> ${keys.Email_contact_header || 'Спасибо, мы скоро сообщим вам о ваших требованиях'}  </h3>
                  <p> Name: ${emailType.contact.name} </p>
                  <p> Email: ${emailType.contact.email} </p>
                  <p> Notes: ${emailType.contact.notes} </p>
                  <div>
                  </div>
                  <a href='#'> ${keys.ESHOP_TITLE || 'Eshop'} </a>
                </div>
              </body>
            </html>
        `;
  }
}
