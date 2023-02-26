const { default: mongoose } = require("mongoose");
const User = require("./schema/User");

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/bookstore',()=>{
    console.log('conected');
},e=>console.error(e))



run()


async function run(){
//     const user =new User({name:'Sandun',age:26,hobbies:['cricket','movie','sleep','fuck'],
// address:{street:'main street',city:'kiribathgoda'}})
// user.save().then(()=>console.log('user saved'))

// const user =await User.create({name:'Sandun',age:'2i6',hobbies:['cricket','movie','sleep','fuck'],
// address:{street:'main street',city:'kiribathgoda'}})
// console.log(user);
//second method
// const user =await User.create({name:'sandun',age:26})
// user.name=tharuka
// await user.save()


try {
//     const user =await User.create({name:'Sandun',age:6,hobbies:['cricket','movie','sleep','fuck'],
//     email:'d@domain.com',
// address:{street:'main street',city:'kiribathgoda'}})
// console.log(user);

// const user =await User.findById('63fae90281400a353644d79e')
// const user =await User.findOne({name:'Sandun'})

// const user =await User.exists({name:'Sandun'}) 

// const user =await User.where({name:'tharuka'}) 
// const user =await User.where('name').equals('tharuka')
// const user =await User.where('age').gt(58)
//const user =await User.where('age').gt(5).where('name').equals('tharuka')

//const user =await User.where('age').gt(5).lt(26).where('name').equals('tharuka')
//const user =await User.where('age').gt(5).where('name').equals('Sandun').limit(2)

// const user =await User.where('age').gt(5).limit(2)

// user[0].bestFriend='63fae90281400a353644d79e'
// user[0].save()

// const user =await User.where('age').gt(5).where('name').equals('Sandun').limit(2)


const user =await User.where('age').gt(5).populate('bestFriend').limit(1)
// user[0].save()

console.log(user); 


} catch (error) {
    console.log(error.message);
}


}

