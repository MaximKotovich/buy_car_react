import React, {Suspense, useMemo, lazy} from 'react';
import './App.scss';
import {SpinnerComponent} from "./common/spiner/spinnerComponent";
import {useSelector} from "react-redux";
import {RootState} from "./store/reducers";
import {LoginPage} from "./pages/login/login.page";
import {Navigate, Route, Routes} from 'react-router-dom';
import {HeaderComponent} from "./common/components/header.component/header.component";
import {NavBarComponent} from "./common/components/header.component/page-larder/nav-bar.component/nav-bar.component";
import {RegistrationPage} from "./pages/registration/registration.page";


const HomePage = lazy((): ReturnType<any> => import('./pages/home/home.page'))
const CreatePostPage = lazy((): ReturnType<any> => import('./pages/create-post/create-post.component'))


function App() {
    const loading = useSelector((state: RootState) => state.userReducer.loading)
    const openBurger = useSelector((state: RootState) => state.burgerMenuReducer.openBurger)

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
                                <Route path="/create-post/create-found-post" element={<CreatePostPage finding={false}/>}/>
                                <Route path="/create-post/create-finding-post" element={<CreatePostPage finding={true}/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
