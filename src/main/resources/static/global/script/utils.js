/**
 * Created by KSC on 5/12/2016.
 */

'use strict'

//All extension here for array type
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

/**
 * Sort array by given key
 *
 * @param sortKey
 */
Array.prototype.searchBy = function (key, value) {
    for (var idx = 0; idx < this.length; idx++) {
        if (this[idx][key] == value) {
            return idx;
        }
    }
};

/**
 * Sort array by given key
 *
 * @param sortKey
 */
Array.prototype.sortBy = function (sortKey) {
    this.sort(function (a, b) {
        return a[sortKey] > b[sortKey] ? 1 : -1
    });
};

/**
 * Compare to other array by given fields
 *
 * @param compareToArray
 * @param keys
 * @param sortKey
 * @returns {boolean}
 */
Array.prototype.compareTo = function (compareToArray, keys, sortKey) {
    //Sort two array by given sort key
    this.sortBy(sortKey);
    compareToArray.sortBy(sortKey);
    //Determine the pass in parameter array
    if (compareToArray == null) return false;
    //Compare the length
    if (this.length != compareToArray.length) return false;
    //Iterate all items
    for (var i = 0; i < this.length; i++) {
        if (this[i] != null && compareToArray[i] != null) {
            //Iterate all keys
            for (var idx = 0; idx < keys.length; idx++) {
                if (this[i][keys[idx]] != compareToArray[i][keys[idx]]) {
                    return false;
                }
            }
        } else {
            if (this[i] != compareToArray[i])return false;
        }
    }
    return true;
};

Array.prototype.unique = function () {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = this[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
};

Date.prototype.addHour = function (hour) {
    this.setHours(this.getHours() + hour);
    return this;
};

Date.prototype.toLocaleTime = function () {
    var offsetHours = -(360 - (this.getTimezoneOffset())) / 60;
    return this.addHour(offsetHours);
};

Date.prototype.toServerTime = function () {
    var offsetHours = (360 - (this.getTimezoneOffset())) / 60;
    return this.addHour(offsetHours);
};

//Extend String prototype to support replace all function
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
};

String.prototype.insertAfter = function (idx, subString) {
    var pre = this.slice(0, idx),
        last = this.slice(idx);
    if (idx > 0) {
        return pre + subString + last;
    } else {
        return subString + last;
    }
};