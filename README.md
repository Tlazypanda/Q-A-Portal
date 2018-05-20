# Q-A-Portal

This is a portal for answering questions for IIIT Allahabad students.It will serve as a medium for discussion among students as well as for answering their doubts by the faculty members.

Install dependencies :
npm install

//Setting up auth part
->Setting up the mogo server
Navigate to bin folder inside mongo folder:cd mongo/bin(for linux users)
Then run the following command for running mongo server :
./mongod --dbpath ~/(directory of repo)/user-credentials(server will be up on port 27017)
Navigate into the directory of repo then :
Inside the text editor->replace email and password with your email:
var transporter = nodemailer.createTransport('smtps://email%40gmail.com:password@smtp.gmail.com');
Run node server.js(Good to use nodemon)
The server will be up on port:3000

Usage:
Inside any web Browser type:
localhost:3000/signup
Then enter the credentials to register your account.
You will recieve an email and a landing page will be displayed that shows an email has been sent.
From the email a link is to be copied(For now it is localhost:3000/signup).
The link will soon redirect when it will be hosted.
On going to localhost:3000/signup it will be redirect to login page that now shows Email verified successfully.
This page in future should be the page where user lands to his own Q-A page.

Also in future the land page will be applied css and get a better interface.

Note:
Signup form requires @gmail.com type mails as of now.
Password should be min 8 digits and must contain a small letter,a capital letter,a number and password and confirm password must match to signup.
