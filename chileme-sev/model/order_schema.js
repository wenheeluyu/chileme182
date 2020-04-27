/**
 * 订单表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const order = new Schema({
    orderNo: String,
    orderType: String,
    detail: Array,
    createTime: Number,
    way: String,
    price: Number,
    payTime: Number,
    createPersonName: String,
    createPersonId: Number

})
module.exports = mongoose.model('Order', 'order')