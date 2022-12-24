import React, { Suspense,  } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import * as routes from "./constants/routes"
const Login = React.lazy(() => import("./pages/login"))
function App() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path={routes.DASHBOARD} element={<h1>Hello</h1>} ></Route>
          <Route path={routes.LOGIN} element={<Login/>} ></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
