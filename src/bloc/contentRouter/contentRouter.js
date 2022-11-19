import {Routes, Route} from 'react-router-dom';



import MainPage from '../screens/mainPage/mainPage';
import Signs from '../screens/signs/signs';
import Polygraphy from '../screens/polygraphy/polygraphy';
import UvPrint from '../screens/uvPrint/uvPrint';
import Design from '../screens/design/design';
import { Personal } from '../personalCab/personalCab';

import SignsOrder from '../screens/signs/signsOrder';
import SignsUseful from '../screens/signs/signsUseful';
import SignsCalculator from '../screens/signs/signsCalculator';
import Profile from '../personalCab/profile/profile';
import NewOrder from '../personalCab/newOrder/newOrder';
import Manufacture from '../personalCab/manufacture/manufacture';
import History from '../personalCab/history';
import Help from '../personalCab/help/help';
import Review from '../personalCab/review';
import Settings from '../personalCab/settings';


const ContentRouter = () => {
   
    return (
            
        <>
            <Routes>
                                
                <Route index element = {<MainPage/>}/>
                <Route path="/design" element = {<Design/>}/>
                <Route path="/uvprint" element = {<UvPrint/>}/>
                <Route path="/signs" element = {<Signs/>}>
                    <Route path="/signs/calculator" element = {<SignsCalculator/>}/>
                    <Route path="/signs" element = {<SignsUseful/>}/>
                    <Route path="/signs/order" element = {<SignsOrder/>}/>
                </Route>
                <Route path="/polygraphy" element = {<Polygraphy/>}/>
                <Route path="/personal" element = {<Personal/>}>
                    <Route index path="/personal" element = {<Profile/>}/>
                    <Route path="/personal/neworder" element = {<NewOrder/>}/>
                    <Route path="/personal/manufacture" element = {<Manufacture/>}/>
                    <Route path="/personal/history" element = {<History/>}/>
                    <Route path="/personal/help" element = {<Help/>}/>
                    <Route path="/personal/review" element = {<Review/>}/>
                    <Route path="/personal/settings" element = {<Settings/>}/>
                </Route>

            </Routes>
        
        </>

    );
    
};




export default ContentRouter;