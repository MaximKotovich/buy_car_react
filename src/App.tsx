import React, {Suspense} from 'react';
import './App.scss';
import {SpinnerComponent} from "./common/spiner/spinnerComponent";
import {useSelector} from "react-redux";
import {RootState} from "./store/reducers";
import {LoginPage} from "./pages/login-page/login.page";


function App() {

  const user = useSelector((state: RootState) => state.userReducer.user)


  if (!user) {
    return (
        <Suspense fallback={<SpinnerComponent/>}>
          <LoginPage/>
        </Suspense>
    )
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
