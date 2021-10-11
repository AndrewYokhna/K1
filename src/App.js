import './App.css';
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Nav.jsx';
import Profile from './Profile/Profile.jsx';
import Dialog from "./Dialog/Dialog";
import Music from "./Music/Music";
import News from "./News/News";
import Setting from "./Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    {/* <Route exact path='/dialog' component={Dialog} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Setting} /> */}


                    <Route exact path='/dialog' render={() => <Dialog />} />
                    <Route exact path='/profile' render={() => <Profile />} />
                    <Route exact path='/news' render={ () => <News /> }/>
                    <Route exact path='/music' render={ () => <Music /> }/>
                    <Route exact path='/setting' render={ () => <Setting /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;