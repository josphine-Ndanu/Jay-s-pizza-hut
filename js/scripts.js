$(document).ready(function () {

    // global variables 
    var myOrder = [];
    var totalAMount = 0;

    // constructor 
    function Pizza(type, size, crust, topping) {
        this.type = type;
        this.size = size;
        this.crust = crust;
        this.topping = topping;

    }

    Pizza.prototype.getTypePrice = function () {
        if (this.size === "large") {
            if (this.type === "vegtikka") {
                return 1200;
            } else if (this.type === "hawaian") {
                return 1600;
            } else if (this.type === "pepperoni") {
                return 1250;
            } else {
                return 1200;
            }

        } else if (this.size === "medium") {
            if (this.type === "vegtikka") {
                return 950;
            } else if (this.type === "hawaian") {
                return 1250;
            } else if (this.type === "pepperoni") {
                return 950;
            } else {
                return 950;
            }
        } else {

            if (this.type === "vegtikka") {
                return 650;
            } else if (this.type === "hawaian") {
                return 950;
            } else if (this.type === "pepperoni") {
                return 650;
            } else {
                return 800;
            }

        };


    }

    Pizza.prototype.getToppingPrice = function () {
        if (this.topping === "bacon") {
            return 200;
        } else if (this.topping === "mushroom") {
            return 250;
        } else if (this.topping === "extracheese") {
            return 280;
        } else {
            return 150;
        }
    }


    Pizza.prototype.getCrustPrice = function () {
        if (this.crust === "thick") {
            return 250;
        } else if (this.crust === "thin") {
            return 100;
        } else {
            return 150;
        }
    }

    Pizza.prototype.quantity = function () {
        var selectedQuantity = $("#number").val()
        return selectedQuantity;
    }

    Pizza.prototype.getPizzaPrice = function () {
        return (this.getCrustPrice() + this.getToppingPrice() + this.getTypePrice()) * this.quantity();

    }

    Pizza.prototype.getTotal = function () {
        return totalAMount;
    }

    $("#formOrder").submit(function (event) {
        event.preventDefault();
        
        
    //    $("#formOrder").show();
        var selectedType = $("#type").val();
        var selectedSize = $("#size").val();
        var selectedCrust = $("#crust").val();
        var selectedTopping = $("#topping").val();
        var inputtedQuantity = $("#number").val();
        var total = " "

        var newPizza = new Pizza(selectedType, selectedSize, selectedCrust, selectedTopping, inputtedQuantity)


        myOrder.push(newPizza)
        $("#type").val();
        $("#size").val();
        $("#topping").val();
        $("#crust").val();

        console.log(myOrder) // test array

        totalAMount += newPizza.getPizzaPrice();
        
        console.log(totalAMount) // test calculation

        

        $("#summary").append(
            "<tr>" +
            '<th scope="row">' +
            newPizza.type + "</th>" +

            "<td>" +
            newPizza.size +
            " - " +
            newPizza.getTypePrice() +
            "</td>" +

            "<td>" +
            newPizza.crust +
            " - " +
            newPizza.getCrustPrice() +
            "</td>" +

            "<td>" +
            newPizza.topping +
            " - " +
            newPizza.getToppingPrice() +
            "</td>" +

            "<td>" +
            newPizza.quantity() +
            "</td>" +
            "<td>" +
            newPizza.getPizzaPrice() +
            "</td>" +
            "</tr>"
        );

        $("#order").show();


        $("#totalAmount").empty();
        $("#totalAmount").append(newPizza.getTotal());
        $(".totalAmount").show();
    })
    $("#placeOrder").click(function(){
        $("#formOrder").show();
    })
   
    var selectedType = $("#type").val();
    var selectedSize = $("#size").val();
    var selectedCrust = $("#crust").val();
    var selectedTopping = $("#topping").val();
    var inputtedQuantity = $("#number").val();
    var total = " "

    var newPizza = new Pizza(selectedType, selectedSize, selectedCrust, selectedTopping, inputtedQuantity); 


    $("button#proceedCheckout").click(function (event) {
        event.preventDefault();
        $('#checkout').prop("disabled", true);
        $("#checkout").fadeIn();
    })


    $("button#pickup").click(function (event) {
         var name = $("#name").val()
        event.preventDefault();
        $(".deliveryCharges").empty();
        $(".deliveryCharges").append("Hello "+name+ " Thanks for ordering, your order will be ready in a few. Your order amounts to Ksh " + newPizza.getTotal())
    // console.log(name)
    })

    $("button#delivery").click(function (event) {
        event.preventDefault();
        var name = $("#name").val();
    var location = $("#location").val();
        $(".deliveryCharges").empty();
        $(".deliveryCharges").append("Hello " +name +" Thanks for ordering. Our delivery charges are Ksh 300. You will pay Ksh " + ((newPizza.getTotal()) + parseInt(300)) + "<br> You order will be delivered at " + location + " in 1 hour")
    })
});