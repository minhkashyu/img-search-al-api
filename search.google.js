'use strict';

var google = require('googleapis');
var customsearch = google.customsearch('v1');

const getValidOffset = function (offset) {
    const max = 10;
    var intOffset = offset && parseInt(offset, 10) ? parseInt(offset, 10) : max;
    var validOffset = intOffset > 0 && intOffset < 10 ? intOffset : max;
    return validOffset;
};

module.exports = function (query, offset, callback) {
    customsearch.cse.list({
        auth: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_CX,
        q: query,
        searchType: 'image',
        num: getValidOffset(offset)
    }, callback);
};
