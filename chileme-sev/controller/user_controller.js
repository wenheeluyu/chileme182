// 1.引入model文件夹中定义好的Schema
const User = require('../model/user_schema')
const Util = require('../utils/util') //引入工具文件
// 2.构造中间件

/* async/await 
    async 异步  放在function关键字之前，声明该函数为一个异步函数   返回一个promise对象
    async function fn(){}
    await 同步 必须和async搭配使用不能单独出现  等待上一个async函数完成之后再执行后面的代码
    async function fn(){
        await .......
    }
*/ 
// 注册
const register = async ctx =>{

}
// 登录
const login = async ctx =>{

}
// 3.暴露中间件
module.exports = {
    register,
    login
}