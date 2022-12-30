import { useSelector } from 'react-redux';
import { useGetAllOrdersQuery } from '../../../store/api/orderApi';
import { PolygOrderItem } from './polygOrderItem';
import { UvOrderItem } from './uvOrderItem';

const Manufacture =  () => {
    const {userId} = useSelector(state => state.auth)
    const {data, isSuccess} =  useGetAllOrdersQuery(userId);

    let content;

    if(isSuccess){
        
        const {orders} =  data;

        content = orders.map((item, index) => {
            if (item.type === 'polyg'){
                return  <PolygOrderItem key={item._id}  index={index+1} order={item} /> 
            };
            if (item.type === 'uv'){
                return <UvOrderItem key={item._id}  index={index+1} order={item}/>
            }        
            return ''
        } )

        if(data.orders.length === 0){
            console.log('true')
            content = <h6>Здесь будут показаны ваши активные заказы...</h6>
        }
    }  

   
 
    return(
        // manu - manufacture
         <div className="manu"> 
            <div className="container">
                <div className="manu__heading">Заказы в работе</div>
                <div className="manu__revers-wrap">{content}
                </div>
            </div>
        </div>
    );
};
export default Manufacture;