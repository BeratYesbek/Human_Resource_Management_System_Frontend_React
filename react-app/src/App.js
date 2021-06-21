import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from './pages/Dashboard';

function App() {




  return (

    <div className="App">

          <Navi></Navi>
          <Dashboard></Dashboard>
        </div>
        );
}


        export default App;
