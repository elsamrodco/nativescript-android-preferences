/**********************************************************************************
* (c) 2016, Elsa Rodriguez Plaza.
* Licensed under the MIT license.
*
* Version 1.0.0                                                elsamrodco@gmail.com
**********************************************************************************/

var application = require("application");
var context = application.android.context;
var sharedPref = context.getSharedPreferences("MyPREFERENCES", 0);
var PREFERENCE_NAME = "PREFERENCE_NAME";
var DataTypes = {
    BOOLEAN: 0,
    FLOAT: 1,
    INTEGER: 2,
    LONG: 3,
    STRING: 4
}

exports.DataTypes = DataTypes

exports.SavePreference = function (options) {
    if (options) {
        var datavalue = options.datavalue;
        var datatype = options.datatype;
        var prefname = options.prefname;
        switch (datatype) {
            case DataTypes.BOOLEAN:
                sharedPref.edit().putBoolean(prefname, datavalue).commit();
                break;
            case DataTypes.FLOAT:
                sharedPref.edit().putFloat(prefname, datavalue).commit();
                break;
            case DataTypes.INTEGER:
                sharedPref.edit().putInt(prefname, datavalue).commit();
                break;
            case DataTypes.LONG:
                sharedPref.edit().putLong(prefname, datavalue).commit();
                break;
            case DataTypes.STRING:
                sharedPref.edit().putString(prefname, datavalue).commit();
                break;
        }
    }
    else {
        console.log('Options are needed to execute this function.');
    }
}

exports.GetPreference = function (options) {
    var prefValue;
    if (options) {
        var defdatavalue = options.datavalue;
        var datatype = options.datatype;
        var prefname = options.prefname;
        switch (datatype) {
            case DataTypes.BOOLEAN:
                prefValue = sharedPref.getBoolean(prefname, defdatavalue);
                break;
            case DataTypes.FLOAT:
                prefValue = sharedPref.getFloat(prefname, defdatavalue);
                break;
            case DataTypes.INTEGER:
                prefValue = sharedPref.getInt(prefname, defdatavalue);
                break;
            case DataTypes.LONG:
                prefValue = sharedPref.getLong(prefname, defdatavalue);
                break;
            case DataTypes.STRING:
                prefValue = sharedPref.getString(prefname, defdatavalue);
                break;
        }
    }
    else {
        console.log('Options are needed to execute this function.');
    }
    return prefValue;
}
