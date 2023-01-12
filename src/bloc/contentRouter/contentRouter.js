import {Routes, Route} from 'react-router-dom';



import MainPage from '../pages/mainPage/mainPage';
import Signs from '../pages/signs/signs';
import Polygraphy from '../pages/polygraphy/polygraphy';
import UvPrint from '../pages/uvPrint/uvPrint';
import Design from '../pages/design/design';
import { PersonalEnter } from '../personalCab/personalEnter';
import { Privacy } from '../pages/privacy/privacy';

import SignsOrder from '../pages/signs/signsOrder';
import SignsUseful from '../pages/signs/signsUseful';
import SignsCalculator from '../calculators/signsCalculator';
import {PolygraphyUseful} from '../pages/polygraphy/polygraphyUseful';
import PolygraphyCalc from '../calculators/polygraphyCalculator';
import Profile from '../personalCab/profile/profile';
import NewOrder from '../personalCab/newOrder/newOrder';
import Manufacture from '../personalCab/manufacture/manufacture';
import { History } from '../personalCab/history/history';
import Help from '../personalCab/help/help';
import Feedback from '../personalCab/feedback/feedback';
import Settings from '../personalCab/settings';

import Cases from '../pages/cases/cases';
import Reviews from '../pages/reviews/reviews';
import { DesignUseful } from '../pages/design/designUseful';
import { DesignChek } from '../pages/design/designChek';
import { DesignRequire } from '../pages/design/designRequire';



const ContentRouter = () => {
   
    return (
            
        <>
            <Routes>
                                
                <Route index element = {<MainPage/>}/>
                <Route path="/design" element = {<Design/>}>
                    <Route path="/design" element = {<DesignUseful/>}/>
                    <Route path="/design/chek" element = {<DesignChek />}/>
                    <Route path="/design/require" element = {<DesignRequire />}/>
                </Route>
                <Route path="/uvprint" element = {<UvPrint/>}/>
                <Route path="/signs" element = {<Signs/>}>
                    <Route path="/signs/calculator" element = {<SignsCalculator/>}/>
                    <Route path="/signs" element = {<SignsUseful />}/>
                    <Route path="/signs/order" element = {<SignsOrder/>}/>
                </Route>
                <Route path="/polygraphy" element = {<Polygraphy/>}>
                    <Route path="/polygraphy" element = {<PolygraphyUseful/>}/>
                    <Route path="/polygraphy/order" element = {<PolygraphyCalc/>}/>
                </Route>
                <Route path="/personal" element = {<PersonalEnter/>}>
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
                <Route path="/privacy" element = {<Privacy/>}/>

            </Routes>
        
        </>

    );
    
};




export default ContentRouter;