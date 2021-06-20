//Калькулятор
/*
let Calc = function(){
    this.offOn = function (){
        this.offon = confirm('Хотите ли вы произвести расчет?');
        (this.offon == true) ? this.get(): alert('Досвидания!');
    };

    this.get = function(){
        this.a = +prompt('Введите число a');
        this.oper = prompt('Введите операцию: +, -, *, /');

        this.b = +prompt('Введите число b');
        

        this.operation();
    };

    this.operation = function(){
        switch(this.oper){
            case '+':
                this.result=this.a+this.b;
            break;
            case '-':
                this.result=this.a-this.b;
            break;
            case '*':
                this.result=this.a*this.b;
            break;
            case '+':
                this.result=this.a/this.b;
            break;
            default:this.result=0;
        };

        this.show();
    };
    
    this.show = function(){
        alert(`${this.a} ${this.oper} ${this.b} =${this.result}`);
    };
};

let calc= new Calc();
calc.offOn();
*/

//Чайник
let Kettle = function(){
    this.offOn = function (){
        this.offon = confirm('Расчитать время закипания воды?');
        (this.offon == true) ? this.kettleInfo() : alert('Досвидания!');
    };

    this.kettleInfo = function(){
        this.power = +prompt('Введите мощьность электрочайника (кВт)');
        this.volume = +prompt('Введите объем электрочайника (л)');
        this.waterVolume = +prompt('Введите объем воды в чайнике (л)');
        this.temperature=+prompt('Введите начальную температуру воды (°С)');       

        this.operation();
    };
    this.operation = function(){

        this.result=0.00117*this.volume*(100 - this.temperature)/this.power*60;

        this.show(); 
    };

    this.show = function(){
        document.write(`<h1>Электро чайник</h1>`);
        document.write(`<img src="image/kettle.jpg">`);
        document.write(`<h3> Характеристики электрочайника</h3>`);
        document.write(`<p>Moщнocть: ${this.power} кВт<br>Oбъём: ${this.volume} л<br>Время закипания воды: ${Math.round(this.result)} минут</p>`);
    };

};
let kettle= new Kettle;
kettle.offOn();