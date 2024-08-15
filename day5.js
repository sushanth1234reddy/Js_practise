// let acpr=true;
// let isfrnd=true;
// if(acpr==true)
// {
//     if(isfrnd==true){
//         console.log("send msg");
//     }
//     else{
//         console.log("make him frnd");
//     }
// }
// else{
//     console.log("send msg directly");
// }

//prog 1
// onetime view msg
// if the msg is onetimeview  then we can't forward it to another frnds
//if not , we can forward to amother frnd

// let OneTimeMsg=true;
// if(OneTimeMsg){
//     console.log("can't forward it to another frnds");
// }
// else{
//     console.log("can forward it to another frnds");
// }

//prog 2
//msg delete option
//if time is <24hrs then show delete for me and delete for everyone
//if time is >24hrs then show only delete for me option
// let Time=18;
// if(Time<24){
//     console.log(" show delete for me & delete for everyone ");
// }
// else{
//     console.log("show delete for me");
// }

//prog 3
//check for largest number among three numbers
//using ternery operator and if-else



// if(a>b && a>c){
//     console.log("a is the largest number");
// }
// else if(b>a && b>c){
//     console.log("b is the largest number");
// }
// else{
//     console.log("c is the largest number");
// }

let a=+prompt("enter a value ");
let b=+prompt("enter b value ");
let c=+prompt("enter c value ");

let ans= c>a && c>b? "C is largest among 3":"C is not Largest among 3";
alert(ans);
