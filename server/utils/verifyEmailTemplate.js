const verifyEmailTemplate = ({ name, url }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .logo {
        margin-bottom: 20px;
      }
      h2 {
        color: #333333;
        margin-bottom: 15px;
      }
      p {
        color: #555555;
        font-size: 16px;
        line-height: 1.5;
      }
      .btn {
        display: inline-block;
        padding: 14px 28px;
        margin: 20px 0;
        background-color: #ffd700; /* Gold color */
        color: #333333; /* Dark text */
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }
      .btn:hover {
        background-color: #e6c200; /* Slightly darker gold on hover */
      }
      .footer {
        color: #888888;
        font-size: 12px;
        margin-top: 30px;
        line-height: 1.4;
      }
      .divider {
        border: none;
        border-top: 1px solid #eeeeee;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Logo / Image -->
      <div class="logo">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/695/732/small/express-delivery-set-stock-illustration-free-vector.jpg" alt="DeliveredOn10 Logo" width="150" />
      </div>

      <h2>Welcome to DeliveredOn10, ${name}!</h2>
      <p>
        Thank you for registering on <b>DeliveredOn10</b>. To start using your account, please verify your email address by clicking the button below.
      </p>

      <!-- Button -->
      <a href="${url}" class="btn">
        Verify Email
      </a>

      <p>
        If you did not create this account, you can safely ignore this email.
      </p>

      <hr class="divider">

      <!-- Footer -->
      <div class="footer">
        DeliveredOn10 Inc.<br>
        123 Your Street, Your City, Your Country<br>
        <a href="#" style="color:#007bff; text-decoration:none;">Privacy Policy</a> | 
        <a href="#" style="color:#007bff; text-decoration:none;">Contact Us</a>
      </div>
    </div>
  </body>
  </html>
  `;
};

export default verifyEmailTemplate;
