var checkText = false;
//event listener para add item
$("#addButton").on("click", function(e){
  e.preventDefault();
  $(".itemsList").append(`<div class = "ShopItems"><li class = "lis"> <p class = "itemShop">  ${ $("input").val() }</p>
  <button class = "checar">Check</button>
  <button class = "del">Delete</button>
   </li> </div>`);
});

//event listener de check
$("div").on("click", ".checar", function(e){
  e.preventDefault();
  checkText = !checkText;
  if (checkText)
  $(this).siblings('p').css('text-decoration', 'line-through');

  else{
    $(this).siblings('p').css('text-decoration', 'none');
  
  }
  
  
});

//event listener de delete
$("div").on("click", ".del", function(e){
  e.preventDefault();
  $(this).parent().remove();
});