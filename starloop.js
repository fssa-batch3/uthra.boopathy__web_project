// for(let i = 1;i <= 100;i++){
//     if (i % 2 === 0) {
//         console.log(i + ")" + "Superstar")
//     }
//     else {
//         console.log(i + ")" + "Rajini")
//     }
// }

// s = 1
// for ( i = 1; i <= 7; i++){
//     s = s + "1"
// }
//     console.log(s)

// s = 2    
// for (i=2; i<=8; i++){
//     s = s + "2"
// }    
//     console.log(s)

// s = 3    
// for (i=3; i<=9; i++){
//     s = s + "3"
// }    
//     console.log(s)

// s = 4    
// for (i=4; i<=10; i++){
//     s = s + "4"
// }    
//     console.log(s)

// s = 5    
// for (i=5; i<=11; i++){
//     s = s + "5"
// }    
//     console.log(s)

// s = 6    
// for (i=6; i<=12; i++){
//     s = s + "6"
// }    
//     console.log(s)

// for(let x=1; x<=7; x++){
//     console.log(x, x, x, x, x, x, x, x)
// }

// const n = 7
// for(let x=1; x<=n; x++){
//     let output = "";
//     for (let y=1; y<=n; y++){
//         output +=x + " "
//     }
//     console.log(output);
// }



// const n = 5
// for (let x = 1; x <= n; x++){
//     output = "";
//     for(let y = 1; y <= x; y++){
//         output += y + " "
//     }
//     console.log(output)
// }

// first sum //

// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let string = "";
//   for (let j = n; j > i; j--) {
//     string += "  ";
//   }
//   for (let k = i; k >= 1; k--) {
//     string += k +" ";
//   }
//   console.log(string);
// }


// eg sum //


// Second sum //
// let n = 4;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += i + " ";
//   }
//   string += "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += i + " ";
//   }
//   string += "\n";
// }
// console.log(string);


// **********Solution 2**********
// let n = 4;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     string += " ".repeat(n-i) + Array(i+1).join(i + " ") + "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
//     string += " ".repeat(n-i) + Array(i+1).join(i + " ") + "\n";
// }
// console.log(string);


// **********Consecutive numbers diamond**********
// let n = 4;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     string += " ".repeat(n-i);
//     for (let j = 1; j <= i; j++) {
//         string += j + " ";
//     }
//     string += "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
//     string += " ".repeat(n-i);
//     for (let j = 1; j <= i; j++) {
//         string += j + " ";
//     }
//     string += "\n";
// }
// console.log(string);


// **********Superstar Rajnikanth Challenge**********
// let n = 15;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Superstar Rajnikanth");
//   } else if (i % 3 === 0) {
//     console.log("Superstar");
//   } else if (i % 5 === 0) {
//     console.log("Rajnikanth");
//   } else {
//     console.log(i);
//   }
// }








// For loop syntax

// for (let i = 0; i < 10; i++) {

// }

// let i = 0 initilization
// i < 10 condition
// i++ increment  i-- decrement

// 1st sum //

// let n = 5;
// let string = "";
// for ( let i = 1; i <= n; i++){
//      string += i + " ";
// }
//     console.log(string);

// // 2nd sum //

//  let n = 5;
//  let string = "";
//  for (let i = 5; i >= 1; i--){
//      string += i + " ";
//  }
//      console.log(string)

// // 3rd sum //     

// n=7;
// for (let i = 1; i <= n; i = i+2){
//     console.log(i)
// }

// // 4th sum //

// let n = 5;
// let string = "";
// for ( let i = 1; i <= n; i++){
//     string += i + " ";
// }

// for ( let j = n-1 ; j >= 1; j--){
//     string += j + " ";
// }    
//     console.log(string);


// let n = 5;
// let string = "";
// for ( let i = 1; i <= n; i++){
//     for ( let j = 1; j <= n-1; j++){
//         string += " ";
//     }
//     for ( let k = 1; k <= i; k++ ){
//         string += k + " ";
//     }
// }
// console.log(string)

// n = 4
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
//   1 2 3 2 1
//     1 2 1 
//       1


// let n = 3;
// let string = "";
// for ( let l = 1; l < 2; l++){
//     string += " " + " " + l; 
// }
// string += "\n";
// for ( let k = 1; k <= 2; k++){
//     string += " " + k;
// }
// string += "\n";

// for ( let i = 1; i <= n; i++ ){
//     string += i  + " ";
// }
// string += "\n"; 
// for ( let j=n-1; j>0; j-- ){
//     string +=  " " + j;
// }
// string += "\n";
// for ( let m = 1; m <= 1; m++){
//     string += " " + " " + m;
// }
// console.log(string);


// let n = 4;
// let out = "";
// for (let i = 1; i <= n; i++){
//     out += " " + "."; 
// }
// console.log(out);

// let n=3;
// let string="";
// for (i=1;i<=n;i++){
//     for(j=i;j>=1;j--){
//         string+=".";
//     }
//     for(k=1;k<=i;k++){
//        string += i+"  ";
//     }
//  string+="\n";
    
// }
//  console.log(string);


// for (i=n-1;i>=1;i--){
//     for(j=n-1;j>=1;j--){
//         string+=" "
//     }
//     for(j=n-1;j>=1;j--){
//         string+=i+" ";
//     }

   
// }


// let n = 3;
// let string = "";
// for ( let i = 1; i <= n; i++){
//     string += i + " "; 
// }
// for ( let j = n-1; j >= 1; j--){
//     string += j + " ";
// }
// console.log(string);


// function getnumseq (n){
//     for ( let i = 1; i <= n; i++){
//         let string = "";
//          string += i + " ";
//          return(string);

//     }
// }

// function getnumdes (n) {
//     let string = "";
//     for ( let j = n; j >= 1; j--){
//         string += j + " ";
//         return(string)
//     }
//     }


// function getspace (n) {
//     let string = "";
//     for(let i = 1; i <= n; i++ ){
//         string += " ";
//         return (string);
//     }
// }

// // for ( let i=1; i<=n; i++){
// //     console.log(getnumseq(i) + getspace(n) + getnumdes(i)) ;
// // }

// let n = 4;
// for ( let i=1; i<=n; i++){
//     console.log(getspace(i) + getnumseq(i) );
// }





// let n=4;
// let string = "";
// for (let i=1;i<=n;i++){
//     for(let j=n; j>=1;j--){
//         string+=j+" ";
//     }
//     string+="\n";
// }
// console.log(string);



// 1 2 3 
// 1 2 
// 1 //

// function numseq (n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str+=i+" ";
//     }
//     return str;
// }

// let j=3;
// for (let i=1; i<=j; i++){
//     if(i%2!=0){
//         n=1;
//     }
//     else{
//         n=2;
//     }
//     console.log(numseq(n));
// }
// j is the no of loops we want
// let j = 3;
// for(let i=1;i<=j;i++){
//     //INCREMENT ( START,ENDING,I++)
//     //DECREMENT( ENDING , START , I--)
//     let n=i;
//     console.log(numseq (n));
// }



let n = 5;
let m = 5;
for ( let j=1; j<=m; j++ ){
     let str = ""
     for (i=1; i<=n; i++){
       if ( i>=j){
      str += "*" + ".";
        }  
}
console.log(str);
}

