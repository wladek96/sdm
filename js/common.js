$(document).ready(function() {
	var categories= $(".product-categories .product-categories-wrap");

    categories[0].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".game-complexes").css("display","flex")
    }
    categories[1].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".children-pavilions").css("display","flex")
    }
    categories[2].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".spring-rockers").css("display","flex")
    }
    categories[3].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".gaming-panels").css("display","flex")
    }
    categories[4].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".slides").css("display","flex")
    }
    categories[5].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".swing").css("display","flex")
    }
    categories[6].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".story-equipment").css("display","flex")
    }
    categories[7].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".carousel").css("display","flex")
    }
    categories[8].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".balancers").css("display","flex")
    }
    categories[9].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".sandboxes").css("display","flex")
    }
    categories[10].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".sport-complexes-equipment").css("display","flex")
    }
    categories[11].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".fencing").css("display","flex")
    }
    categories[12].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".trainers").css("display","flex")
    }
    categories[13].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".tabels").css("display","flex")
    }
    categories[14].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".rolledroms").css("display","flex")
    }

    categories[14].onclick = function() {
    	$(".product-categories").css("display","none");
    	$(".rolledroms").css("display","flex")
    }


	var sportCategories= $(".sport-complexes-equipment .product-categories-wrap");
    sportCategories[0].onclick = function() {
    	$(".sport-complexes-equipment").css("display","none");
    	$(".sport-complexes").css("display","flex")
    }
    sportCategories[1].onclick = function() {
    	$(".sport-complexes-equipment").css("display","none");
    	$(".sport-equipment").css("display","flex")
    }
    sportCategories[2].onclick = function() {
    	$(".sport-complexes-equipment").css("display","none");
    	$(".sport-elements").css("display","flex")
    } 

	var complexCategories= $(".game-complexes .product-categories-wrap");
    complexCategories[0].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex1").css("display","flex")
    }
    complexCategories[1].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex2").css("display","flex")
    }
    complexCategories[2].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex3").css("display","flex")
    }
    complexCategories[3].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex4").css("display","flex")
    }
    complexCategories[4].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex5").css("display","flex")
    }
    complexCategories[5].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex6").css("display","flex")
    }
    complexCategories[6].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex7").css("display","flex")
    }
    complexCategories[7].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex8").css("display","flex")
    }
    complexCategories[8].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex9").css("display","flex")
    }
    complexCategories[9].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex10").css("display","flex")
    }
    complexCategories[10].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex11").css("display","flex")
    }
    complexCategories[11].onclick = function() {
    	$(".game-complexes").css("display","none");
    	$(".game-complex12").css("display","flex")
    }
 })
	var categoryItems=[
		$(".game-complexes"),
		$(".children-pavilions"),
		$(".spring-rockers"),
		$(".gaming-panels"),
		$(".slides"),
		$(".swing"),
		$(".story-equipment"),
		$(".carousel"),
		$(".balancers"),
		$(".sandboxes"),
		$(".sport-complexes-equipment"),
		$(".fencing"),
		$(".trainers"),
		$(".tabels"),
		$(".rolledroms"),
	]
function back(){
    	$(".product-categories").css("display","flex");
    	for (var i = 0; i < categoryItems.length; i++) {
    		categoryItems[i].css("display","none");
    	}
    	$("html,body").animate({scrollTop: $(".product-categories").offset().top}, 500);
    }
function backSport(){
		$(".sport-complexes-equipment").css("display","flex");
		$(".sport-complexes").css("display","none");
		$(".sport-equipment").css("display","none");
		$(".sport-elements").css("display","none");
    	$("html,body").animate({scrollTop: $(".sport-complexes-equipment").offset().top}, 500);
    }
function backComplex(){
		$(".game-complexes").css("display","flex");
		$(".game-complex1").css("display","none");
		$(".game-complex2").css("display","none");
		$(".game-complex3").css("display","none");
		$(".game-complex4").css("display","none");
		$(".game-complex5").css("display","none");
		$(".game-complex6").css("display","none");
		$(".game-complex7").css("display","none");
		$(".game-complex8").css("display","none");
		$(".game-complex9").css("display","none");
		$(".game-complex10").css("display","none");
		$(".game-complex11").css("display","none");
		$(".game-complex12").css("display","none");
    	$("html,body").animate({scrollTop: $(".game-complexes").offset().top}, 500);
    }
    
