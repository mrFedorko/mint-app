
function convertor(state){
    switch(state){
    case ('white' || 'black'): 
        console.log(true);
        break;
    default:
        console.log(false);
    }
}

convertor('black');