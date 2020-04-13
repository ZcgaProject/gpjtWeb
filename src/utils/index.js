/* eslint-disable */
'use strict';
const genEnv = require("../../config/utils.config")
const obj = {
    "development": "http://api.airtask.eplans.cn",    //测试版
    "production": "http://api.airtask.eplans.cn",            //正式版
}

module.exports = {
    getEnv() {
        return obj[genEnv.default()]
    }
}
