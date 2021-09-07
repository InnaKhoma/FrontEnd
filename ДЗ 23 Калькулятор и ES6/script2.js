'use strict';

class Calculator {
    static EL = function(element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        }

        return document.querySelectorAll(element);
    };

    static viewer = Calculator.EL("#viewer"); // Calculator screen where result is displayed
    static equals = Calculator.EL("#equals"); // Equal button
    static #theNum = ""; // Current number
    static #oldNum = ""; // First number
    static resultNum; // Result
    static operator; // Batman

    constructor() {
        this.nums = Calculator.EL(".num"); // List of numbers
        this.ops = Calculator.EL(".ops"); // List of operators

        // Add click event to numbers
        for (let i = 0, l = this.nums.length; i < l; i++) {
            this.nums[i].onclick = this.setNum;
        }

        // Add click event to operators
        for (let i = 0, l = this.ops.length; i < l; i++) {
            this.ops[i].onclick = this.moveNum;
        }

        // Add click event to equal sign
        Calculator.equals.onclick = this.displayNum;

        // Add click event to clear button
        Calculator.EL("#clear").onclick = this.clearAll;

        // Add click event to reset button
        Calculator.EL("#reset").onclick = function() {
            window.location = window.location;
        };
    }

    setNum = function() {
        if (Calculator.resultNum) { // If a result was displayed, reset number
            Calculator.#theNum = this.getAttribute("data-num");
            Calculator.resultNum = "";
        } else { // Otherwise, add digit to previous number (this is a string!)
            Calculator.#theNum += this.getAttribute("data-num");
        }

        Calculator.viewer.innerHTML = Calculator.#theNum; // Display current number
    };

    moveNum = function() {
        Calculator.#oldNum = Calculator.#theNum;
        Calculator.#theNum = "";
        Calculator.operator = this.getAttribute("data-ops");

        Calculator.equals.setAttribute("data-result", ""); // Reset result in attr
    };

    displayNum = function() {
        // Convert string input to numbers
        Calculator.#oldNum = parseFloat(Calculator.#oldNum);
        Calculator.#theNum = parseFloat(Calculator.#theNum);

        // Perform operation
        switch (Calculator.operator) {
            case "plus":
                Calculator.resultNum = Calculator.#oldNum + Calculator.#theNum;
                break;

            case "minus":
                Calculator.resultNum = Calculator.#oldNum - Calculator.#theNum;
                break;

            case "times":
                Calculator.resultNum = Calculator.#oldNum * Calculator.#theNum;
                break;

            case "divided by":
                Calculator.resultNum = Calculator.#oldNum / Calculator.#theNum;
                break;

            // If equal is pressed without an operator, keep number and continue
            default:
                Calculator.resultNum = Calculator.#theNum;
        }

        // If NaN or Infinity returned
        if (!isFinite(Calculator.resultNum)) {
            if (isNaN(Calculator.resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
                Calculator.resultNum = "You broke it!";
            } else { // If result is infinity, set off by dividing by zero
                Calculator.resultNum = "Look at what you've done";
                Calculator.EL('#calculator').classList.add("broken"); // Break calculator
                Calculator.EL('#reset').classList.add("show"); // And show reset button
            }
        }

        // Display result, finally!
        Calculator.viewer.innerHTML = Calculator.resultNum;
        Calculator.equals.setAttribute("data-result", Calculator.resultNum);

        // Now reset oldNum & keep result
        Calculator.#oldNum = 0;
        Calculator.#theNum = Calculator.resultNum;

    };

    clearAll = function() {
        Calculator.#oldNum = "";
        Calculator.#theNum = "";
        Calculator.viewer.innerHTML = "0";
        Calculator.equals.setAttribute("data-result", Calculator.resultNum);
    };
}

const calc = new Calculator();