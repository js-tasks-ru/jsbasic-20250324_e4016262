let calculator = {
  read(num1,num2) {
    this.num1 = num1;
    this.num2 = num2;
    /*
    if (num1 ===0 || num2===0) {
      this.num1 = Number(prompt('Bведите первое число: ', 0));
      this.num2 = Number(prompt('Bведите второе число: ', 0));
    }

     */
  },

  sum(){
    if (isFinite(this.num1) && isFinite(this.num2)){

      return this.num1 + this.num2
    }

  },

  mul(){
    if (isFinite(this.num1) && isFinite(this.num2)){

      return this.num1 * this.num2
    }

  },

};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально


/*


let  calculator = {

  read :  function () {
    this.num1 =  Number(prompt('Bведите первое число: ' , 0)) ;
    this.num2 =  Number(prompt('Bведите второе число: ' , 0)) ;
  },

  sum : function(){
    if (isFinite(this.num1) && isFinite(this.num2)){

      alert(`${this.num1} + ${this.num2} = ${this.num1 + this.num2}`
    }
    alert('Data entry error')
  },

  mul: function(){
    if (isFinite(this.num1) && isFinite(this.num2)){

      alert(`${this.num1} * ${this.num2} = ${this.num1 * this.num2}`
    }
    alert('Data entry error')
  },


  //sum,
  //mul,

};
//let calculator = new Calculator()
console.log(calculator.read(), calculator.num1, calculator.num2, calculator.sum(), calculator.mul());

 */
