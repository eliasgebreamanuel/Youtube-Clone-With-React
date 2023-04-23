import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
    <Router>
    <Header />
      <Switch>
        <Route path = "/search/:searchTerm">
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        </Route>
        <Route path = "/">
          <div className="app__page">
            <Sidebar />
            <RecommendedVideos />
          </div>
        </Route>
      </Switch>
    </Router>

      {/* <h1>Youtube Clone is here</h1> */}
      {/* Header */}
      {/* <Header />
      <div className="app__page"> */}
{/* Sidebar */}
{/* <Sidebar /> */}
{/* Recommended Videos */}
{/* <RecommendedVideos /> */}
      {/* </div> */}
      
      {/* Recommendation */}
    </div>
  );
}

export default App;
