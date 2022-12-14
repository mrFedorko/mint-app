import {Routes, Route} from 'react-router-dom';



import MainPage from '../screens/mainPage/mainPage';
import Signs from '../screens/signs/signs';
import Polygraphy from '../screens/polygraphy/polygraphy';
import UvPrint from '../screens/uvPrint/uvPrint';
import Design from '../screens/design/design';
import { PersonalEnter } from '../personalCab/personalEnter';

import SignsOrder from '../screens/signs/signsOrder';
import SignsUseful from '../screens/signs/signsUseful';
import SignsCalculator from '../screens/signs/signsCalculator';
import {PolygraphyUseful} from '../screens/polygraphy/polygraphyUseful';
import PolygraphyCalc from '../screens/polygraphy/polygraphyCalculator';
import Profile from '../personalCab/profile/profile';
import NewOrder from '../personalCab/newOrder/newOrder';
import Manufacture from '../personalCab/manufacture/manufacture';
import { History } from '../personalCab/history/history';
import Help from '../personalCab/help/help';
import Feedback from '../personalCab/feedback';
import Settings from '../personalCab/settings';

import Cases from '../screens/cases/cases';
import Reviews from '../screens/reviews/reviews';



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
                <Route path="/polygraphy" element = {<Polygraphy/>}>
                    <Route path="/polygraphy" element = {<PolygraphyUseful/>}/>
                    <Route path="/polygraphy/order" element = {<PolygraphyCalc/>}/>
                </Route>
                <Route path="/personal" element = {<Personal/>}>
                    <Route index path="/personal" element = {<Profile/>}/>
                    <Route path="/personal/neworder" element = {<NewOrder/>}/>
                    <Route path="/personal/manufacture" element = {<Manufacture/>}/>
                    <Route path="/personal/history" element = {<History/>}/>
                    <Route path="/personal/help" element = {<Help/>}/>
                    <Route path="/personal/feedback" element = {<Feedback/>}/>
                    <Route path="/personal/settings" element = {<Settings/>}/>
                </Route>
                <Route path="/cases" element = {<Cases/>}/>
                <Route path="/reviews" element = {<Reviews/>}/>

            </Routes>
        
        </>

    );
    
};




export default ContentRouter;