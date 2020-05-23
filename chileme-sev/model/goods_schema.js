const mongoose = require('mongoose')
const Schema = mongoose.Schema


const goods = new Schema({
    goods: String,
    price: Number,
    num: Number,
    desc: String,
    recommend: Number,
    isDrink: Boolean,
    isCombo: Boolean,
    type: String,
    isRecommend: Boolean,
    sailNum: Number,
    isOff: Boolean,
    percent: Number,
    material: Array,
    tast: String,
})
module.exports = mongoose.model('Goods', goods)