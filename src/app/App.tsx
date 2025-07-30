import {BrowserRouter} from "react-router-dom";
import AppRouter from "./providers/AppRouter.tsx";
import {Provider} from "react-redux";
import {store} from "../shared/store";


function App() {

  return (
      <Provider store={store}>
          <BrowserRouter>
              <AppRouter/>
          </BrowserRouter>
      </Provider>

  )
}

export default App
