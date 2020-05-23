//引入mongoose
//引入mongoose的Schema对象
//对Schema对象实例化创建表结构
//将定义好的Schema暴露给其他模块
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: String,
    password: String,
    mobile: String,
    createDate: Number,
    lastUpdate: Number

})
module.exports = mongoose.model('User', user)



