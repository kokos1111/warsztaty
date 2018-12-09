$.ajax({
         url: "http://echo.jsontest.com/userId/108/userName/Akademia108/ userURL/akademia108.pl",     
         dataType: 'json',     
         success: function () { 
 
        console.log();
    },     
    onerror: function (msg) {
        console.log(msg);
    } 
});

