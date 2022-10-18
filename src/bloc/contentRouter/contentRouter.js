import {Routes, Route} from "react-router-dom"



import MainPage from "../screens/mainPage/mainPage";
import Signs from "../screens/signs/signs";
import Polygraphy from "../screens/polygraphy/polygraphy";
import UvPrint from "../screens/uvPrint/uvPrint";
import Design from "../screens/design/design";
import Footer from "../footer/footer";
import { Personal } from "../screens/personalCab/personalCab";

import SignsOrder from "../screens/signs/signsOrder";
import SignsUseful from '../screens/signs/signsUseful';
import SignsCalculator from '../screens/signs/signsCalculator'
import Profile from "../screens/personalCab/profile";
import NewOrder from "../screens/personalCab/newOrder";
import Manufacture from "../screens/personalCab/manufacture";
import History from "../screens/personalCab/history";
import Help from "../screens/personalCab/help";
import Review from "../screens/personalCab/review";
import Settings from "../screens/personalCab/settings";


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
                        <Footer/>

        
                </>

        )
    
}




export default ContentRouter;