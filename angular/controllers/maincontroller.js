myApp.controller('mainController',['$http','GotService',function($http,
  GotService) {

  //create a context
  var main = this;

  this.loadAllBooks = function(){
    
      //To get books
      GotService.getAllBooks().
      then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          main.books = response.data;

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });

        //To get Chars
      GotService.getAllChars().
      then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          main.chars = response.data;

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });

        //To get House
      GotService.getAllHouses().
      then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          main.houses = response.data;

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });



  }// end load all books
 this.myMethod=function(query){
  alert("Inside");
 }

}]); // end controller
