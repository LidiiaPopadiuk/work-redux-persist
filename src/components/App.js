import { Layout } from "components/Layout/Layout";
import { AuthPage } from "pages/AuthPage";
import { ListPage } from "pages/ListPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { PublicRoutes } from "utils/routes/PublicRoutes";
import { PrivateRoute } from "utils/routes/PrivateRoute";
export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes restricted>
              <AuthPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/list"
          element={
            <PrivateRoute>
              <ListPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};
