// Generated by CoffeeScript 1.10.0

/* jshint node:true */


/* jshint -W097 */

(function() {
  'use strict';
  var normalizeUrl, urlUtil;

  urlUtil = require('url');

  normalizeUrl = function(targetUrl, fullUrl) {
    var fixedUrlObj, loginUrlObj, targetUrlObj;
    loginUrlObj = urlUtil.parse(fullUrl, true, true);
    targetUrlObj = urlUtil.parse(targetUrl, true, true);
    if (targetUrlObj.host === loginUrlObj.host) {
      return targetUrl;
    }
    fixedUrlObj = {
      protocol: loginUrlObj.protocol,
      slashes: true,
      host: loginUrlObj.host,
      pathname: targetUrlObj.pathname,
      query: targetUrlObj.query
    };
    return urlUtil.format(fixedUrlObj);
  };

  module.exports = normalizeUrl;

}).call(this);