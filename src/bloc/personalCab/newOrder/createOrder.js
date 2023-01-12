import { useDispatch, useSelector } from "react-redux"
import { orPriceCh } from "../../../store/orderSlice";


export const useCreateOrder = () => {
    const {userId} = useSelector(state => state.auth)
    const {orType, orName, orComment, orQuan, orLayout, orDelivery, orReceiver, orPrice} = useSelector(state=> state.order);
    const polygDetails = useSelector(state=> state.polygraphy);
    const signDetails = useSelector(state=> state.sign.calculator);
    const dispatch = useDispatch();


    let details;
    let price;

    orType === 'polyg' ? details = polygDetails :
    orType !== 'polyg' ? details = signDetails:
    details = 'no details'

    orType === 'polyg' ? price = polygDetails.polygPrice:
    price = ''

    
    
    let orderData = {
        name: orName,
        type: orType,
        details,
        quan: orQuan,
        date: Date.now().toString(),
        owner: userId,
        expDate: (Date.now() + (3600*24*10*1000)).toString(),
        layout: orLayout,
        price: price || orPrice,
        delivery: orDelivery,
        receiver: orReceiver,
        status: 'created',
        comment: orComment,
    }

    const falseValues = Object.entries(orderData).filter(item =>  !item[1] || item[1] === []);

    if (falseValues.length) {
        return null
    }
    return orderData;
}