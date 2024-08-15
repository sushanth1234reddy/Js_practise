//1. Calculate the sum of all even numbers between 1 and 100

//- Test case 1: Verify that the sum of all even numbers between 1 and 100 is 2550.
//- Test case 2: Verify that the sum of all even numbers between 1 and 50 is 650.

let sum=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
    sum+=i;
    if(sum==650){
        console.log("Sum of all even numbers between 1 and 50 is: "+sum);
    }
    if(sum==2550){
        console.log("Sum of all even numbers between 1 and 100 is: "+sum)

    }
    }
}
