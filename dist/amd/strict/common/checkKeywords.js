/*jslint sloppy:true, forin:true*/
/*global define*/

define([
    'Utils/array/contains'
], function (
    contains
) {
    var reservedNormal = ['$constructor', '$initializing', '$static', '$self', '$super'],
        reservedStatics = ['$parent', '$super'];

    /**
     * Verify reserved words found in classes/interfaces.
     * The second parameter can be normal or statics.
     * Normal will test for reserved words of the instance.
     * $statics will test for reserved words in the ckass statics.
     *
     * Will throw an error if any reserved key is found.
     *
     * @param {Object} object            The object to verify
     * @param {String} [type="normal"]   The list of reserved word to test
     */
    function checkKeywords(object, type) {

        var reserved = type === 'normal' || !type ? reservedNormal : reservedStatics,
            key;

        for (key in object) {

            if (contains(reserved, key) || Object.prototype[key]) {
                throw new TypeError('"' + object.$name + '" is using a reserved keyword: ' + key);
            }
        }
    }

    return checkKeywords;
});
