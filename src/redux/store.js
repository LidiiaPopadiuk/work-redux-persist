import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todosSlice";
import { filterReducer } from "./filter/filterSlice";
import { userReducer } from "./users/userSlice";
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
  key: "token",
  storage,
  // whitelist: ["token"],
  //whitelist: ["todos"],  //! whitelist - масив полів які ми хочемо попавати в локалсторедж, запрошені
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  user: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
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
