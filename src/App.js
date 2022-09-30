import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppRouter } from './Routes/AppRouter';

function App() {
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;
