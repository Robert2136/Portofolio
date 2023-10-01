function sendEmail() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "lobodarobert22@gmail.com",
    Password : "C3E127A2B9CF6B2642BF3AA2999F6C3245FE",
    To : 'lobodarobert22@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact",
    Body : "First Name" + document.getElementById("first-name").value
            + "<br> Last Name:" + document.getElementById("last-name").value
            + "<br> Phone No:" + document.getElementById("phone-no").value
            + "<br> Email:" + document.getElementById("email")
}).then(
  message => alert(message)
);
}