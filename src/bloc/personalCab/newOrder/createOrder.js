import { useSelector } from "react-redux"


export const useCreateOrder = () => {
    const {userId} = useSelector(state => state.auth)
    const {orType, orName, orComment, orQuan, orLayout, orDelivery, orReceiver} = useSelector(state=> state.order);
    const polygDetails = useSelector(state=> state.polygraphy);
    let details;
    let price;

    orType === 'polyg' ? details = polygDetails :
    details = 'no details'

    orType === 'polyg' ? price = `${polygDetails.price}` :
    details = 'no details'
    
    let orderData = {
        name: orName,
        type: orType,
        details,
        quan: orQuan,
        date: Date.now().toString(),
        owner: userId,
        expDate: (Date.now() + (3600*24*10*1000)).toString(),
        layout: orLayout,
        price,
        delivery: orDelivery,
        receiver: orReceiver,
        status: 'created',
        comment: orComment,
    }

    const falseValues = Object.entries(orderData).filter(item =>  !item[1]);

    if (falseValues.length) {
        return null
    }
    return orderData;
}