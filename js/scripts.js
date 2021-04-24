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

    Pizza.prototype.getSubtotal = function () {
        return totalAMount;
    }

    $("#formOrder").submit(function (event) {
        event.preventDefault();
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


        // for (let i = 0; i < myOrder.length; i++) {
        //     totalAMount += myOrder[i].getPizzaPrice()
        // }

        totalAMount += newPizza.getPizzaPrice();
        console.log(totalAMount) // test calculation
        console.log(inputtedQuantity)




    })






})