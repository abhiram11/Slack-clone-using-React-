import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

// 6:31:48 MaterialUI icons are FONTS
// 6:34:30 nested CSS children!!
// 6:36:20 why I is capital in Icon when sending <SidebarOption Icon={}> because sending component as a prop
// 6:45:00 !important is used to override the MaterialUI font size here!
// 6:50:50 connect to DB and list all channels!!
//  6:54:00 we need a Config to connect the firebase db to the react frontend
// !!!!!!6:57:00 connects entire app!!!!!!!
// 6:59:00 what default export does...
// 7:02:00 structure of firebase cloud and the databases in general
// 7:05:20 everytime a user sends a message we get the data in {field (type, value)}:
// {username (string, value), userimage (string, value of url), message (string, value), timestamp (timestamp)}
// 7:06:50 useEffect (()=>{}, []) last sq brackets we call them dependencies
// 7:21:00 starting with REACT ROUTER, CHUCK ALL THE APP INSIDE <ROUTINE>
// 7:25:00 intro to useParams from ReactRouter
// 7:35:18 make the channel name lowercase that comes from dB using CSS's text-transform: lowercase
// 7:41:28 useHistory() whenever url is changed!
// 7:43:30 room id pushed into url, so then info can be fetched using it
// 7:45:50 decoupled code : sidebar and addchannel !
// 7:59:00 we use .orderBy which is a firestory query!!
// 8:02:40 destructure the output of .map by directly calling the variable names
// 8:04:30 channelMessage?.name use of ? is called optional chaining, came in es6 or 7, came from swift
// similar to instant try catch! used in async, other tasks

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {/* <h1>Starting a slack clone!! 🚀</h1> */}
        {/* <br /> */}

        {/* Header = search bar at top */}
        {/* Sidebar = profile, channels, drafts, saved itmes, etc...*/}
        {/* React Router at end for chat screen */}
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/room/:roomId">
              {" "}
              {/* <h1>Welcome!!</h1> */}
              {/*The syntax is important here!! */}
              {/* <h1>CHAT SCREEN</h1> */}
              <Chat />
            </Route>
            <Route path="/">
              <h1>WELCOME to home screen</h1>
              {/* <Chat /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
