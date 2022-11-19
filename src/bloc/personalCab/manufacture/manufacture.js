import { useSelector } from 'react-redux';
import { useGetAllOrdersQuery } from '../../../store/api/orderApi';
import { PolygOrderItem } from './polygOrderItem';

const Manufacture =  () => {
    const {userId} = useSelector(state => state.auth)
    const {data, isSuccess} =  useGetAllOrdersQuery(userId);

    let content;

    if(isSuccess){
        
        const {orders} =  data;

        content = orders.map((item, index) => {
               return  <PolygOrderItem key={item.id}  index={index+1} order={item} /> 
        } )

        if(data.orders.length === 0){
            console.log('true')
            content = <h3>Здесь будут показаны ваши активные заказы...</h3>
        }
    }  

   
 
    return(
        // manu - manufacture
         <div className="manu"> 
         <div className="container">
             <div className="manu__heading">Заказы в работе</div>

                {content}
         
            </div>
        </div>
    );
};
export default Manufacture;