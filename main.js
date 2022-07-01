let i = 0;
let buzz = 0;
let fizz = 0;
let fizzBuzz = 0;
let obj = {};

while(i<100){
    i++
    if(i%3==0&&i%5==0){
        fizzBuzz++
    }else if(i%3==0&& !i%5==0){
        fizz++
    }else if(i%5==0&& !i%3==0){
        buzz++
    }
}

obj.fizz = fizz;
obj.buzz = buzz;
obj.fizzbuzz = fizzBuzz;
console.log(obj);
