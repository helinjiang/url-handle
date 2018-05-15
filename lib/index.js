'use strict';

var _util = require('./util');

/**
 * 合并 URL 和 param 参数为一个新的URL
 *
 * @param {String} url 请求的URL
 * @param {Object} obj 需要序列化的对象
 * @param {Boolean} [keepAll] 保留所有的参数，默认为false，此时只有key而没有value的情况就会被忽略
 * @return {String}
 * @author linjianghe
 */
function getUrl(url, obj, keepAll) {
    if (obj) {
        var paramStr = (0, _util.param)(obj, keepAll);
        if (paramStr) {
            url = url + (url.match(/\?/) ? '&' : '?') + paramStr;
        }
    }

    return url;
}

module.exports = {
    query: _util.query,
    param: _util.param,
    getUrl: getUrl
};