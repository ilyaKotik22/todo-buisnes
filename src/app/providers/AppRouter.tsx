import {PublicRouter} from "./Routes.ts";
import {Route, Routes} from "react-router-dom";
import {Header} from "../../entiteis/header/Header.tsx";


const AppRouter = () => {
    return (
        <>
            <Header ClassName={'Header'}/>
            <Routes>
                {PublicRouter.map((el)=>{
                    return (
                            <Route path={el.url} Component={el.component}/>
                        )

                })}
            </Routes>

        </>
    );
};

export default AppRouter;