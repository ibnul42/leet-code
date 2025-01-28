class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
      this.result = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
      this.result += value;
      return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
      this.result -= value;
      return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */ 
    multiply(value) {
      this.result *= value;
      return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
      if(value === 0) throw "Division by zero is not allowed";
      this.result /= value;
      return this;
    }

     /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
      this.result **= value;
      return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
      return this.result;
    }
  }
  

// Example usage:
const calc = new Calculator(2);
console.log(calc.add(3).getResult()); // Output: 5