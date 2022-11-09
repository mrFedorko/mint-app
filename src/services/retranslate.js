
function addZero (value){
    if(value/10 < 1){
        return `0${value}`
    }
    return value
}

export const retranslate = () => {
    return{
        rtlData: (dateStr, exact=0) => {
            const d = new Date(+dateStr);
            const day = addZero(d.getDate());
            const month = addZero(d.getMonth());
            const year = d.getFullYear();
            const hour = addZero(d.getHours());  
            const minutes = addZero(d.getMinutes());
            if(exact){
                return `${year}-${month+1}-${day}   ${hour}:${minutes}`;
            } else {
                return `${year}-${month+1}-${day}`;
            }

        },
        rtlStatus: (status) => {
            switch (status) {
                case 'created':
                    return 'создан'
                case 'inwork':
                    return 'в работе'
                case 'deliver':
                    return 'доставка'
                case 'canceled':
                    return 'отменен'
                case 'store':
                 return 'готов к отправке'
                case 'end':
                    return 'завершен'
                case 'check':
                 return 'проверка заказа'
                case 'errors':
                    return 'необходимы правки'
                default:
                    break;
            }
        },

        rtlPayStatus: (status) => {
            switch (status) {
                case 'payed':
                    return 'оплачен'
                case 'paywait':
                    return 'ожидает оплаты'
                case 'canceled':
                    return 'отменен'
                default:
                    break;
            }
        },

        rtlSide: (side) => {
            switch (side) {
                case 'single':
                    return '4+0 (односторонние)'
                case 'double':
                    return '4+4 (двусторонние)'
                default:
                    break;
            }
        } 
    }
};

