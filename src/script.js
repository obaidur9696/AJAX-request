function fetchandomImageDog() {
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function()
    // {

    //     var responseJson= JSON.parse(xhrRequest.response);

    //     var imageUrl = responseJson.message;
    //     $('#dog-image').attr('src', imageUrl);


    // }

    // xhrRequest.onlerror = function(){
    // console.log("error")
    // {


    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);



    // xhrRequest.send();






    /*request using jquery.
    */

    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function (data) {
    //         var imageUrl = data.message;
    //         $('#dog-image').attr('src', imageUrl);

    //     }

    // }).fall(function(){
    //     console.log('request failed');                                
    // })

    $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        var imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);

    }).fall(function (xhr, textStatus, errorThrown) {
        console.log('request failed');
    })

}


$('#btn').click(fetchandomImageDog)

