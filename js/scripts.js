//function for first id ddselect//
function ddselect()
{
    var d=document.getElementById("ddselect");
    var displayText=d.options[d.selectedIndex].text;
    document.getElementById("textvalue").value=displayText;
}

//function for second id ddselect1//
function ddselect1()
{
    var d=document.getElementById("ddselect1");
    var displayText=d.options[d.selectedIndex].text;
    document.getElementById("textvalue1").value=displayText;
}

//object for pizza//
var pizza = {
    size: ["Large", "Small", "Medium"],
    crust: ["Crispy", "Stuffed", "Gluten free", "Scrumbled"],
    toppings: ["pepperoni","mushrooms","onions", "sausage","bacon", "extra cheese"],
  };  

  //object for pizza prices,crust and toppings//
  var pizzaPrice = {
    size: ["Large = 800", "Small = 200", "Medium = 400"],
    crust: ["Crispy = 400", "Stuffed = 350", "Gluten free = 300", "Scrumbled = 250"],
    toppings: ["pepperoni = 600", "mushrooms = 550", "onions = 500", "sausage = 450","bacon = 400", "extra cheese = 350"],
  };

  //consrtuctor for pizza//
  function pizza (size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }

 // business logic//
function pizza (size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }

  pizza.prototype.orderhistory = function() {
    return this.size + " " + this.crust + " " + this.toppings
  }

  //constructor for pizza prices//
  function pizzaPrice (size, crust, toppings) {
    this.size = {0: 800, 1: 200, 2: 400};
    this.crust = {0: 400, 1: 350, 2: 300, 3: 250};
    this.toppings = {0: 600, 1: 550, 2: 500, 3: 450, 4: 400, 5: 350};
  }

  //business logic//
  function pizzaPrice (size, crust, toppings) {
      this.size = {0: 800, 1: 200, 2: 400};
      this.crust = {0: 400, 1: 350, 2: 300, 3: 250};
      this.toppings = {0: 600, 1: 550, 2: 500, 3: 450, 4: 400, 5: 350};
  }

  pizzaPrice.prototype.calculatetotal = function() {
    return this.size + " " + this.crust + " " + this.toppings
  }

  //function get order history//
  function getOrderHistory()
  {
  var d=document.getElementById("ddselect");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue").value=displayText;

  var d=document.getElementById("ddselect1");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue1").value=displayText;

  alert("Thank you for choosing Slice of Heaven pizza ,order is being processed");
  }

  //function to check price//
  function checkPrice()
  {
    var size = document.getElementById("ddselect").value;

    if(size == "Large")
    {
      var price = 800
      document.getElementById("price").value=document.getElementById("quantity").value*price
    }
    else if(size == "Small")
    {
      var price = 200
      document.getElementById("price").value=document.getElementById("quantity").value*price
    }
    else if(size == "Medium")
    {
      var price = 400
      document.getElementById("price").value=document.getElementById("quantity").value*price
    }
  }

  //function to check delivery//
  $('input[type=checkbox]').prop('checked');//returns true if checked 

  //function to alert user about delivery fee//
  function checkDelivery()
  {
    var d=document.getElementById("ddselect");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue").value=displayText;

  var d=document.getElementById("ddselect1");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue1").value=displayText;

  alert("The delivery fee will be 150ksh Thank you!");
  prompt("Enter your location");
  alert("Awesome the order has been released and will be delivered to the location given");
  }

  

  

  

  


  