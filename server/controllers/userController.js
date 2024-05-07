const User = require('../Model/User');
const Deposit = require('../Model/depositSchema');
const Widthdraw = require('../Model/widthdrawSchema');
const Verify = require("../Model/verifySchema");
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");


// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '', };
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
//     // validation errors
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

  const maxAge = 3 * 24 * 60 * 60;
  const createToken = (id) => {
    return jwt.sign({ id }, 'piuscandothis', {
      expiresIn: maxAge
    });
  };








module.exports.homePage = (req, res)=>{
res.render("index")
}

module.exports.aboutPage = (req, res)=>{
    res.render("about")
    }
    


    module.exports.contactPage = (req, res)=>{
        res.render("contact")
   }
        
   module.exports.bitPage = (req, res)=>{
    res.render("services")
}

module.exports.faqPage = (req, res)=>{
res.render("faq")
}

module.exports.tradePage = (req, res)=>{
  res.render("trade")
  }

    
    module.exports.termsPage = (req, res)=>{
        res.render("terms")
    }

    module.exports.registerPage = (req, res)=>{
        res.render("register")
    }

    module.exports.loginAdmin = (req, res) =>{
        res.render('loginAdmin');
    }
    
    const sendEmail = async ( fullname, email,  password ) =>{
    
        try {
          const transporter =  nodemailer.createTransport({
            host: 'mail.globalflextyipsts.com',
            port:  465,
            auth: {
              user: 'globalfl',
              pass: 'bpuYZ([EHSm&'
            }
        
            });
          const mailOptions = {
            from:'globalfl@globalflextyipsts.com',
            to:email,
            subject: 'Welcome to Bitonite FX ',
            html: `<p>Hello  ${fullname},<br>You are welcome to    Bitonite FX , we will help you make profit from the financial market after trading. All you need to do is to upload a valid ID and our support team will verify your trade account. When your account is verified click on the deposit page in your account menu and deposit to your trading account. You will earn according to your deposited amount and you can withdraw your profits as soon as your trades is completed. Good luck and we are waiting to get testimonies from you.
      
            Please note that your deposit is with the wallet address provided by    Bitonite FX  trading Platform, do not invest to any copied wallet address or bank details provided by any account manager or third party other than that provided by Bitonite-cryptotrading, hence your deposit is invalid.<br><br>
          
            <br><br>Best Regards,
            Management<br><br>
 
            Copyright © 2021   Bitonite FX , All Rights Reserved..<br><br>
            Your login information:<br>Email: ${email}<br>Password: ${password}<br><br>You can login here: <br>  Contact us immediately if you did not authorize this registration.<br>Thank you.</p>`
        }
        transporter.sendMail(mailOptions, (error, info) =>{
          if(error){
              console.log(error);
              res.send('error');
          }else{
              console.log('email sent: ' + info.response);
              res.send('success')
          }
      })
      
      
        } catch (error) {
          console.log(error.message);
        }
      }
      
    
      


module.exports.register_post = async (req, res) =>{
    const {fullname, email, country, gender,tel, password, } = req.body;
    try {
        const user = await User.create({fullname, email, country, gender,tel, password});
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });

      
        if(user){
          sendEmail(req.body.fullname,req.body.email, req.body.password)
        }else{
          console.log(error);
        }
      }
        catch(err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
          }
    
}

module.exports.loginPage = (req, res)=>{
    res.render("login")
}
const loginEmail = async (  email ) =>{
    
    try {
      const transporter =  nodemailer.createTransport({
        host: 'mail.globalflextyipsts.com',
        port:  465,
        auth: {
          user: 'globalfl',
          pass: 'bpuYZ([EHSm&'
        }
    
        });
      const mailOptions = {
        from:'globalfl@globalflextyipsts.com',
        to:email,
        subject: 'Your account has recently been logged In',
        html: `<p>Greetings,${email}<br>your trading account has just been logged in by a device .<br>
       if it's not you kindly message support to terminate access  <br>You can login here: https://bitoniteFx.com/login.<br>Thank you.</p>`
    }
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('email sent: ' + info.response);
          res.send('success')
      }
  })
  
  
    } catch (error) {
      console.log(error.message);
    }
  }
  

  module.exports.login_post = async(req, res) =>{
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id });

        if(user){
          loginEmail(req.body.email)
        }else{
          console.log(error);
        }
    } 
    catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
}

module.exports.dashboardPage = async(req, res) =>{
  res.render('dashboard');
}

module.exports.verifyPage = async(req, res)=>{
    res.render("verify")
}
const verifyEmail = async (email,fullname ) =>{
    
    try {
      const transporter =  nodemailer.createTransport({
        host: 'mail.globalflextyipsts.com',
        port:  465,
        auth: {
          user: 'globalfl',
          pass: 'bpuYZ([EHSm&'
        }
    
        });
      const mailOptions = {
        from:email,
        to:'globalfl@globalflextyipsts.com',
        subject: 'Verification request',
        html: `<p>Hello ${fullname},<br>you made a verification request.<br>
        and it is immeditaly under review by admins<br>You can login here: https://bitoniteFx.com/loginAdmin<br> to check your verification status.<br>Thank you.</p>`
    }
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('email sent: ' + info.response);
          res.send('success')
      }
  })
  
  
    } catch (error) {
      console.log(error.message);
    }
  }


module.exports.verifyPage_post = async(req, res)=>{
    // const { email, username,fullname,city,gender,dateofBirth,marital,age,address,image} =req.body
    let theImage;
    let uploadPath;
    let newImageName;

    if(!req.files || Object.keys(req.files).length === 0){
        console.log('no files to upload')
    }else{
            theImage = req.files.image;
            newImageName = theImage.name;
            uploadPath = require('path').resolve('./') + '/Public/IMG_UPLOADS' + newImageName

            theImage.mv(uploadPath, function(err){
                if(err){
                    console.log(err)
                }
           })

    }
    try{
        const verification = new Verify({
            type: req.body.type,
             image: newImageName,
        })
        verification.save()
        const id = req.params.id;
        const user = await User.findById(id);
        user.verified.push(verification);
        // await User.findById(id).populate("verify")
        await user.save();

        if(user){
            verifyEmail(req.body.fullname)
            res.redirect("/dashboard")   
        }else{
            console.log(error)
        }
    }catch(error){
        console.log(error)
    }

}

module.exports.accountPage = async(req, res) =>{
  const id = req.params.id
  const user = await User.findById(id);
  res.render('account')
}

module.exports.accountPage_post = async(req, res) =>{
  let theImage;
  let uploadPath;
  let newImageName;

  if(!req.files || Object.keys(req.files).length === 0){
      console.log('no files to upload')
  }else{
          theImage = req.files.image;
          newImageName = theImage.name;
          uploadPath = require('path').resolve('./') + '/public/IMG_UPLOADS' + newImageName

          theImage.mv(uploadPath, function(err){
              if(err){
                  console.log(err)
              }
          })

  }

    try {
        await User.findByIdAndUpdate(req.params.id,{
          fullname: req.body.fullname,
          tel: req.body.tel,
          email: req.body.email,
          country: req.body.country,
          image: newImageName,   
          updatedAt: Date.now()
        });

          await res.redirect(`/account/${req.params.id}`);
          
          console.log('redirected');
        
      // } catch (error) {
      //   console.log(error);
      // }

        await res.redirect(`/editUser/${req.params.id}`);
        
        console.log('redirected');
      } catch (error) {
        console.log(error);
      }
    
}

module.exports.editProfilePage = async(req, res)=>{
    res.render("editProfile")
}

module.exports.transactionPage = async(req, res)=>{
    res.render("transactions")
}



module.exports.depositPage = async(req, res) =>{
    res.render("fundAccount")
}

module.exports.widthdrawPage = async(req, res)=>{
    res.render("widthdrawFunds")
}


module.exports.buyCrypto = async(req, res)=>{
  res.render("buyCrypto")
}


module.exports.assetsPage = async(req, res)=>{
  res.render("assets")
}

module.exports.marketPage = async(req, res)=>{
  res.render("market")
}

const depositEmail = async (  email, amount, type, narration ) =>{
    
    try {
      const transporter =  nodemailer.createTransport({
        host: 'mail.globalflextyipsts.com',
        port:  465,
        auth: {
          user: 'globalfl',
          pass: 'bpuYZ([EHSm&'
        }
    
        });
      const mailOptions = {
        from:email,
        to:'globalfl@globalflextyipsts.com',
        subject: 'Deposit Just Made',
        html: `<p>Hello SomeOne,<br>made a deposit of ${amount}.<br>
        deposit detail are below Admin <br>Pending Deposit: ${amount}<br><br>Deposit status:Pending <br> <br><br>Deposit type:${type} <br> <br> <br><br>Deposit narration:${narration} <br> You can login here: https://bitoniteFx.com/loginAdmin<br> to approve the deposit.<br>Thank you.</p>`
    }
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('email sent: ' + info.response);
          res.send('success')
      }
  })
  
  
  
    } catch (error) {
      console.log(error.message);
    }
  }
  
  
  
  module.exports.depositPage_post = async(req, res) =>{
      // const {type, amount, status, image, narration} = req.body
      let theImage;
      let uploadPath;
      let newImageName;
  
      if(!req.files || Object.keys(req.files).length === 0){
          console.log('no files to upload')
      }else{
              theImage = req.files.image;
              newImageName = theImage.name;
              uploadPath = require('path').resolve('./') + '/Public/IMG_UPLOADS' + newImageName
  
              theImage.mv(uploadPath, function(err){
                  if(err){
                      console.log(err)
                  }
              })
  
      }
      try {
          const deposit = new Deposit({
              type: req.body.type,
              amount: req.body.amount,
              status: req.body.status,
               image: newImageName,
          })
          deposit.save()
          const id = req.params.id;
          const user = await User.findById( id);
          user.deposits.push(deposit);
          await user.save();
  
          res.render("depositHistory",{user})
          if(user){
              depositEmail(req.body.type, req.body.amount)
          }else{
              console.log(error)
          }
      } catch (error) {
          console.log(error)
      }
    
  }
  
  module.exports.depositHistory = async(req, res) =>{
    try {
      const id = req.params.id
  const user = await User.findById(id).populate("deposits")
    res.render('depositHistory');
    } catch (error) {
      console.log(error)
    }
}

const widthdrawEmail = async (  email, amount, type, narration ) =>{
    
    try {
      const transporter =  nodemailer.createTransport({
        host: 'mail.globalflextyipsts.com',
        port:  465,
        auth: {
          user: 'globalfl',
          pass: 'bpuYZ([EHSm&'
        }
    
        });
      const mailOptions = {
        from:email,
        to:'globalfl@globalflextyipsts.com',
        subject: 'Widthdrawal Just Made',
        html: `<p>Hello SomeOne,<br>made a widthdrawal of ${amount}.<br>
        deposit detail are below Admin <br>Pending Widthdraw: ${amount}<br><br>Widthdraw status:Pending <br> <br><br>Widthdraw type:${type} <br> <br> <br><br>Widthdraw narration:${narration} <br> You can login here: https://bitoniteFx.com/loginAdmin<br> to approve the widthdrawal.<br>Thank you.</p>`
    }
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('email sent: ' + info.response);
          res.send('success')
      }
  
  })
  } catch (error) {
      console.log(error.message);
    }
  }
   
  

    module.exports.widthdrawPage_post = async(req, res) =>{
      const { type, amount, status} = req.body
      const id  = req.params.id
    try {
      const user = await User.findById(id);
      if (!user) {
        req.flash('message', 'User not found!')
              // return res.status(404).json({ error: 'User not found' });
           }

           if (user.balance === 0 || user.balance < amount) {
                  req.flash('messages', 'Insufficient balance!')
            }

            const widthdraw = new Widthdraw({
                   type: req.body.type,
                  amount: req.body.amount,
                  status: req.body.status,
                 });
            // Proceed with withdrawal
            user.balance -= amount;
             user.widthdraws.push(widthdraw)
            await user.save();
            res.render("widthdrawHistory",{user})
            if(user){
                 widthdrawEmail(req.body.amount,req.body.type )
               }else{
                  console.log(error)
                }
    } catch (error) {
      console.log(error)
    }

  }

  module.exports.widthdrawHistory = async(req, res) =>{
    const id = req.params.id
      const user = await User.findById(id).populate("widthdraws")
       res.render('widthdrawHistory',{user})
  }
  

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}




