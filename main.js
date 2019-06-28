//Task1
// Якщо курс: 8грн = 1дол
const value = 8;
function convert (amount){
    const convert=amount*value;
    return `${amount} Usd = ${convert} Uah`;
}
//1 дол = 8 грн
console.log(convert(1));

//Task2
//Повертає зворотній рядок
function reverse(str) {
    const result =str.split('').reverse('').join('');
    return `Result: ${result}`;
}
//dog = god
console.log(reverse("dog"));

//Task3
//Друкує сходові зображення розиіру n
function printStairs(n) {
    let  dog= "";
    for(let i =0; i < n; i++){
    console.log(dog+='Gaf ');
    }
 }
 //3 рази
 printStairs(3);

 //Task4
 //Повертає загальну суму діапазону
 function sumRange(start, end){
 	var a = 0
 	for (var i = start; i <= end; i++) {
        a += i;
    }
    return console.log(a);
 }
sumRange(2, 4);
sumRange(-1,3);

//Task5
//Повертає найменшу з трьох чисел
function min(a,b,c){
    if ((a==b)&&(b==c)){
         console.log(`Rivno:)`);}
    else if ((a<=b)&&(a<c)) {
         console.log(`min number ${a}`);}
    else if ((b<=a)&&(b<c)){
        console.log(`min number ${b}`);}
    else if ((c<a)&&(c<b)){
        console.log(`min number ${c}`);}
    else {console.log(`Not wright format`);}
 }
 min(10,5,11);
 min(3,8,4);

 //Task7
//перетворює першу і останню букву у верхній регістр
function firstAndLastToUpper(str){
    let a = str.length - 1;
    let Rezult = str[0].toUpperCase() + str.slice(1,a)+str[a].toUpperCase();
    console.log(Rezult);
}
firstAndLastToUpper(`abc`);