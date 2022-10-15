// translate colors, materials, etc. from calculator block state to russian names

function convertCalcState(state){
    switch (state) {
        case "white" || "lightgrey":
            return "белый";
        case "black" :
            return "черный";
        case "red" || "crimson":
            return "красный";
        case "orange" || "tomato":
            return "оранжевый";
        case "yellow" || "gold":
            return "желтый";
        case "green" || "darkolivegreen":
            return "зеленый";
        case "navy"|| "midnightblue":
            return "синий" ;
        case "lightgrey":
            return "белый";
        case "crimson":
            return "красный";
        case "tomato":
            return "оранжевый";
        case "gold":
            return "желтый";
        case "darkolivegreen":
            return "зеленый";
        case "midnightblue":
            return "синий" ;
        case "PVC3":
            return "ПВХ 3мм";
        case "PVC5":
            return "ПВХ 5мм";
        case "ACP3":
            return "Алюминиевая композитная панель 3мм";
        default:
            break;
    }
}

// convert all data from calculator to prices

function getPrice(state, pricing){
    const {signType,
    type,
    light,
    faceColor,
    word,
    size,
    width ,
    height,
    signMaterial,
    bannerPostWork } = state;
    if(signType === "letter" && type === "plate" && faceColor === 'white'){
        return  Math.floor(pricing.letters.plateW*size*word.length + size*word.length*pricing.frame.aluminium/100)
    }
    if(signType === "letter" && type === "plate" && faceColor !== 'white'){
        return  Math.floor(pricing.letters.plateC*size*word.length + size*word.length*pricing.frame.aluminium/100)
    }
    if(signType === "letter" && light && type === "volume" && faceColor === 'white'){
        return  Math.floor(pricing.letters.volumeWL*size*word.length + size*word.length*pricing.frame.aluminium/100)
    }
    if(signType === "letter" && light && type === "volume" && faceColor !== 'white'){
        return  Math.floor(pricing.letters.volumeCL*size*word.length + size*word.length*pricing.frame.aluminium/100)
    }
    if(signType === "letter" && !light && type === "volume" && faceColor === 'white'){
        return  Math.floor(pricing.letters.volumeWwoL*size*word.length + size*word.length*pricing.frame.aluminium/100)
    }
    if(signType === "letter" && !light && type === "volume" && faceColor !== 'white'){
        return  Math.floor(pricing.letters.volumeCwoL*size*word.length + size*word.length*pricing.frame.aluminium/100)
    }
    if(signType === "banner" && +bannerPostWork){
        return  Math.floor(+pricing.banner.banner*width*height/100/100 + +pricing.banner.postWork*(width+height)*2/100)
    }
    if(signType === "banner" && !(+bannerPostWork)){
        return  Math.floor(pricing.banner.banner*width*height/100/100)
    }
    if(signType === "sign" && signMaterial === "PVC3"){
        return  Math.floor(pricing.sign.PVC3*height*width/100/100)
    }
    if(signType === "sign" && signMaterial === "PVC5"){
        return  Math.floor(pricing.sign.PVC5*height*width/100/100)
    }
    if(signType === "sign" && signMaterial === "ACP3"){
        return  Math.floor(pricing.sign.ACP3*height*width/100/100)
    }
}



export {convertCalcState, getPrice};