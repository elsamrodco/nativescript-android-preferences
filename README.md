# NativeScript-Android-preferences
A NativeScript plugin that allows to use the application's preferences on Android.

## License
This plugin is licensed under the MITlicense by Elsa Rodriguez Plaza

## Installation
`tns plugin add nativescript-android-preferences`

## Usages
 For more details on how to use this plugin, take a look at the demo application
 ```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="onNavigatingTo">
  <StackLayout>
    <Label text="Android App Save Preferences" class="title"/>
    <Button text="Save String" tap="{{ onTapString }}" />
  </StackLayout>
</Page>
```

```JavaScript
var pref = require("nativescript-android-preferences");
onTapString = function () {
        var options = {
            datavalue: "StringPreference",
            datatype: pref.DataTypes.STRING,
            prefname: "String_Preference"
        }
        pref.SavePreference(options);
        options.datavalue = "DefStringPreference";
        alert("String Preference saved:"+pref.GetPreference(options));
    }
```

