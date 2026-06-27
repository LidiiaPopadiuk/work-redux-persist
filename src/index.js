import { App } from "components/App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "redux/store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/work-redux-persist">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
