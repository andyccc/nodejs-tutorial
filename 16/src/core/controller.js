const baseFun = require('../lib/baseFun');

class Controller {
    constructor(ctx) {
        this.ctx = ctx;
    }

    /**
     * 
     * @description 设置响应数据
     * @param object res http res
     * @param boolean ret boolean
     * @param string message string
     * @param object dataInfo object
     * @param int httpStatus
     */
    resApi(ret, message, dataInfo, httpStatus=200) {
        return baseFun.setResInfo(this.ctx, ret, message, dataInfo, httpStatus);
    }

    /**
     * 
     * @param {string} logType 日志类型 info | error | warning | debug
     * @param {object} logInfo 日志信息
     */
    log(logType, logInfo) {
        return this.ctx.log.add(logType, this.ctx.pathname, logInfo);
    }
}

module.exports = Controller;