var Observable = require("data/observable").Observable;
var pref = require("nativescript-android-app-preferences");

function createViewModel() {
    var viewModel = new Observable();

    viewModel.onTapBool = function () {
        var options = {
            datavalue: true,
            datatype: pref.DataTypes.BOOLEAN,
            prefname: "Boolean_Preference"
        }
        pref.SavePreference(options);
        options.datavalue = false;
        alert("Boolean Preference saved:"+pref.GetPreference(options));
    }
    viewModel.onTapFloat = function () {
        var options = {
            datavalue: 5.5,
            datatype: pref.DataTypes.FLOAT,
            prefname: "Float_Preference"
        }
        pref.SavePreference(options);
        options.datavalue = 0.0;
        alert("Float Preference saved:"+pref.GetPreference(options));
    }
    viewModel.onTapInteger = function () {
        var options = {
            datavalue: 5,
            datatype: pref.DataTypes.INTEGER,
            prefname: "Int_Preference"
        }
        pref.SavePreference(options);
        options.datavalue = 0;
        alert("Integer Preference saved:"+pref.GetPreference(options));
    }
    viewModel.onTapLong = function () {
        var options = {
            datavalue: 10000,
            datatype: pref.DataTypes.LONG,
            prefname: "Long_Preference"
        }
        pref.SavePreference(options);
        options.datavalue = 0;
        alert("Long Preference saved:"+pref.GetPreference(options));
    }
    viewModel.onTapString = function () {
        var options = {
            datavalue: "StringPreference",
            datatype: pref.DataTypes.STRING,
            prefname: "String_Preference"
        }
        pref.SavePreference(options);
        options.datavalue = "DefStringPreference";
        alert("String Preference saved:"+pref.GetPreference(options));
    }
    return viewModel;
}

exports.createViewModel = createViewModel;