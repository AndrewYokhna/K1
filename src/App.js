import './App.css';
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Nav.jsx';
import Profile from './Profile/Profile.jsx';
import Dialog from "./Header/img/Dialog";
import Music from "./Music/Music";
import News from "./News/News";
import Setting from "./Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/messages' component={Dialog}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/music' component={Music}/>
                <Route exact path='/settings' component={Setting}/>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;