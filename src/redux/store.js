import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todosSlice";
import { filterReducer } from "./filter/filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "todos",
  storage,
  whitelist: ["todos"],  //! whitelist - масив полів які ми хочемо попавати в локалсторедж, запрошені
};

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// const localStorData = localStorage.getItem("context")
//   const [context, setContext] = useState(JSON.parse(localStorData) || [{ id: 1 }]);

//   useEffect(() => {
//     localStorage.setItem("context", JSON.stringify(context));
//   }, [context]);
