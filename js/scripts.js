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
  var pizzaPrices = {
    size: ["Large = 800", "Small = 200", "Medium = 400"],
    crust: ["Crispy  = 400", "Stuffed = 350", "Gluten free = 300", "Scrumbled = 250"],
    toppings: ["pepperoni = 600","mushrooms = 550","onions = 500", "sausage = 450","bacon = 400", "extra cheese = 350"],
  };

  //consrtuctor for pizza
  function pizza (size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }

 // business logic
function pizza (size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }

  pizza.prototype.orderhistory = function() {
    return this.size + " " + this.crust + " " + this.toppings
  }