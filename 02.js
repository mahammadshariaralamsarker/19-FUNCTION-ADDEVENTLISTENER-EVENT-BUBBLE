// Video 2

function explain_callback(name,age,task){
    
    console.log('Hello',name); 
    console.log('Your age',age); 
    task();
}
function washHand (){
    console.log ('wash hand with soap');
}
function takeShawor (){
    console.log ('Take Shawor');
}
function scrollFacebook (){
    console.log ('scroll timeline but didnot like any post');
}

explain_callback('sogir uddin',11,washHand);
explain_callback('Kogir uddin',13,takeShawor);
explain_callback('Wagis uddin',19,scrollFacebook);
// the name of our country name is bangladesh >there are six season in a year. there are rainy season ,summer , winter are most common
