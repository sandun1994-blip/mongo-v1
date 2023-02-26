const { default: mongoose } = require("mongoose");



const addressSchema = new mongoose.Schema(
    {
        street: String,
        city: String
    }
)


const userSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, min: 0, max: 100,validate:{validator:v=>v%2===0, message:props=>`${props.value} is not an even number`} },
    email: {
        type: String,
        minLength: 10,
        
    },
    createdAt: {
        type: Date,
        default: new Date(),
        immutable: true //it cant be changed entire time
    },

    updatedAt: Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
    }
})


userSchema.methods.sayHi=function(){

}

//middle ware
userSchema.pre('save',function(next){
    this.updatedAt=Date.now()
    next()
})


module.exports = mongoose.model('User', userSchema)