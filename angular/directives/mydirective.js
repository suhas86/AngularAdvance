myApp.directive("bookList",function(){
	return {
		restrict: "E",
		templateUrl:"./views/book-list.html",
		scope:{
			house:"=",
			char:"=",
			item:"="
		},
		controller: function($scope){
			
		}
	}
});