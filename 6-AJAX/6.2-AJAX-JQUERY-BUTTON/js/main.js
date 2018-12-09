$(function () {
    function funkcja() {
        $("#pobierz-dane").click(function () {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users",
                dataType: 'json',
                success: function (resultJSON) {
                    let pierwszyUzytkownik = resultJSON[0];
                    let paragraf = document.createElement("p");

                    $(paragraf).html(`
               Id: ${pierwszyUzytkownik.id}, <br>
               Name: ${pierwszyUzytkownik.name}, <br>
               Email: ${pierwszyUzytkownik.email}, <br>
               Website: ${pierwszyUzytkownik.website}, <br>
               Phone: ${pierwszyUzytkownik.phone}
           `);
                    $("body").append(paragraf);
                },
                onerror: function (msg) {
                    console.log(msg);
                }
            })
        });


 };

 funkcja();
});
