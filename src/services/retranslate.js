
function addZero (value){
    if(value/10 < 1){
        return `0${value}`
    }
    return value
}

export const retranslate = () => {
    return{
        rtlDate: (dateStr, exact=0) => {
            const d = new Date(+dateStr);
            const day = addZero(d.getDate());
            const month = addZero(d.getMonth()+1);
            const year = d.getFullYear();
            const hour = addZero(d.getHours());  
            const minutes = addZero(d.getMinutes());
            if(exact){
                return `${year}-${month}-${day}   ${hour}:${minutes}`;
            } else {
                return `${year}-${month}-${day}`;
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
        },
        
        rtlMaterial: (mat) => {
            switch (mat) {
                case 'PVC3':
                    return 'ПВХ 3мм'
                case 'PVC5':
                    return 'ПВХ 5мм'
                case 'ACP3':
                    return 'Алюминиевая композитная паннель 3мм'
                default:
                    break;
            }
        },
        rtlPostWork: (pw) => {
            switch (pw) {
                case true:
                    return 'проклейка края и установка люверсов через 30 см'
                case false:
                    return 'без постпечатной обработки'
                
                default:
                    break;
            }
        }
    }
};

