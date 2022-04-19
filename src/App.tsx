import React, {Suspense, useMemo} from 'react';
import './App.scss';
import {SpinnerComponent} from "./common/spiner/spinnerComponent";
import {useSelector} from "react-redux";
import {RootState} from "./store/reducers";
import {LoginPage} from "./pages/login/login.page";
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/home/home.page";
import {HeaderComponent} from "./common/components/header.component/header.component";
import {NavBarComponent} from "./common/components/nav-bar.component/nav-bar.component";
import {RegistrationPage} from "./pages/registration/registration.page";
import {useTheme} from "./common/custom-hooks/theme.hook";


function App() {

    const loading = useSelector((state: RootState) => state.userReducer.loading)
    const openBurger = useSelector((state: RootState) => state.burgerMenuReducer.openBurger)

    const {theme, setTheme} = useTheme()

    const header = useMemo(() => {
        return <HeaderComponent/>
    }, [])

    if (loading) {
        return <SpinnerComponent/>
    }

    return (
        <div className='App'>
            <LoginPage/>
            <div className='wrapper'>
                {header}
                <div className={openBurger ? 'burger-menu active-nav-bar' : 'burger-menu'}>
                    <NavBarComponent />
                </div>

                <div className='container'>
                    <div className='content'>
                        <Suspense fallback={<SpinnerComponent/>}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/home" replace/>}/>
                                <Route path="/home" element={<HomePage/>}/>
                                <Route path="/registration" element={<RegistrationPage/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
