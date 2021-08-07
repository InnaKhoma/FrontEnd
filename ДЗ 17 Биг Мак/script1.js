'use strict';

class Hamburger {

    constructor(name) {
        this.name = {
            money: name.money,
            calorie: name.calorie
        }
    }

    static SIZE_SMALL = {
        money: 50,
        calorie: 20
    }

    static SIZE_MIDDLE = {
        money: 75,
        calorie: 30
    }

    static SIZE_BIG = {
        money: 100,
        calorie: 40
    }

    static TOPPING_CHEESE = {
        money: 10,
        calorie: 20
    }

    static TOPPING_SALAD = {
        money: 20,
        calorie: 5
    }

    static TOPPING_POTATO = {
        money: 15,
        calorie: 10
    }

    static TOPPING_SPICES = {
        money: 15,
        calorie: 0
    }

    static TOPPING_MAYO = {
        money: 20,
        calorie: 5
    }

    addTopping(obj) {
        this.name.money += obj.money;
        this.name.calorie += obj.calorie;
    }

    getPrice() {
        return this.name.money;
    }

    getCalories() {
        return this.name.calorie;
    }

}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());