const { sendTextEmail } = require("./email");

sendTextEmail({
    senderName: "Ando",
    to: "ando.mickael25@gmail.com",
    subject: "Test",
    text: "Hello World"
});