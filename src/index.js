import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor, Store } from "./store/Store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={Store}>
    <StrictMode>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </StrictMode>
  </Provider>
);
