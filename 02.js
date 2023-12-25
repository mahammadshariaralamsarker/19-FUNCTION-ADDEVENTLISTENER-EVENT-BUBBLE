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