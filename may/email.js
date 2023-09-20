let submit = document.getElementById('contact-form');

submit.addEventListener('submit', (e)=>{
  e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let body = '<div style={border : 3px solid green ; padding : 10px; margin: 15px;  border-radius: 5px;}><h2>New Email from   '+ name + '<h2/>'+' <br/>name:  '+ name + '<br/>email:  '+ email +
    '<br/><h3>Message:<h3/>  ' +message+'<div/>';

    Email.send({
    SecureToken : "8f758c0a-b1ea-4dc5-9939-7196ba707ee2",
    To : 'maygeneralbusiness@gmail.com',
    From : "maygeneralbusiness@gmail.com",
    Subject : subject,
    Body : body
}).then(
  message => alert("Messege sent Succesfully")
);
})
