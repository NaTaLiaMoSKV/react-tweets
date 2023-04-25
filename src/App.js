import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import TweetsPage from "./components/TweetsPage/TweetsPage";
import Layout from "./components/Layout";
import { RestrictedRoute } from "components/RestrictedRoute";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={
                <RestrictedRoute redirectTo="/" />
              }
            />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
