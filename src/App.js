
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import reducer from "./store/reducer";
import { initialState } from "./store/reducer";

import ProductPage from './routes/ProductPage';
import AppHeader from "./components/Header";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div className="App__Container">
        <AppHeader
          dispatch={dispatch}
          appState={state}
        />
        <div className="App__Content">
          <Routes>
                <Route path="/" element={
                  <ProductPage 
                    dispatch={dispatch}
                    appState={state}
                  />
                } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
