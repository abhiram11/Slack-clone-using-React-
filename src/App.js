import "./App.css";
import Header from "./Header";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Starting a slack clone!! 🚀</h1>
      <br />

      {/* Header = search bar at top */}
      {/* Sidebar = profile, channels, drafts, saved itmes, etc...*/}
      {/* React Router at end for chat screen */}
      <Header></Header>
    </div>
  );
}

export default App;
