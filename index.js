const validator= require('validator')
const express= require('express')
const Sequelize= require('sequelize')

const app=express()
const path =require('path')
const pdf=path.join(__dirname,'/public')
console.log(__dirname)
console.log(pdf)
app.use(express.static(pdf))
app.get('/',(req,res)=>{
    
 const a=[req.query.a,req.query.b,req.query.c,req.query.d,req.query.e]   
 console.log(a)
    for(i=0;i<a.length;i++)
    {
        if(validator.isEmail(a[i])){
            sequelize.sync().then(function() {
                return User.create({
                  email: a[i],
                  contact:null
                
                }).then(function(user){
                    res.send(user.get({plain:true}))
                    console.log(user.get({plain:true}))

                })
              })
        }
    }
    for(i=0;i<a.length;i++)
    {
        if(validator.isMobilePhone(a[i])){
            sequelize.sync().then(function() {
                return User.create({
                    email:null,
                  contact: a[i]
                
                }).then(function(user){
                    res.send(user.get({plain:true}))

                })
              })
        }
    }
    res.send(User.findAll())
})
var sequelize = new Sequelize('hrishi','hrishi','hrishi123',{
    host:'localhost',
    dialect:'mysql'
})
const User=sequelize.define('user',{
    email:{type:Sequelize.STRING},
    contact:{type:Sequelize.STRING}
})
sequelize.sync().then(function(){
    return User.create({
        email:'hrishikeshkumar440@gmail.com',
        contact:null
    }).then(function(user) {
        console.log(user.get({
          plain: true
        }))
    })
})
app.listen(8080,()=>{
    console.log('ok')
})

