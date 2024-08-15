let distance=100;
if(distance>=0 && distance<5){
    console.log("Fare is $5");

}
else if(distance>=5 && distance<10){
    console.log("Fare is $10");
}
else if(distance>=10 && distance<=20){
    console.log("Fare is $20");

}
else{
    console.log("Fare is $"+(30+5*(distance-20)))
}

//dist=20 =rs 30
//distance=30  = 30+5*(10)