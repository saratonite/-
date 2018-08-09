const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({

    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '---',
        pass: '---'
    }

})


const mail = {
    from : '"Sarath TK" <>',
    to: '',
    subject: 'Hello World',
    text: 'Hello World!!!!',
    html : '<h1>Hello World!!!!@@</h1>'
}

transport.sendMail(mail, (error, info) => {

    console.log('>> Error ', error);

    console.info('INFO', info);


})