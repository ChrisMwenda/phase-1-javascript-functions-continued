function saturdayFun(activity="roller-skate") { 
return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork=function(workActivity='go to the office'){
    return (`This Monday, I will ${workActivity}.`);
}
mondayWork();
console.log(mondayWork("work from home"));

function wrapAdjective(flair="*"){
    const innerFunction= function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }  
    return innerFunction  
}
wrapAdjective("*");
let result;
result=wrapAdjective("*")
console.log(result("a hard worker"));
