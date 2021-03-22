import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Films from "./components/Films";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Films />
        </div>
      </Router>
    </Provider>
  );
}
export default App;
