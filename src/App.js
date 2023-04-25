import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import TweetsPage from "./components/TweetsPage/TweetsPage";
import Layout from "./components/Layout";
import Footer from "components/Footer/Footer";
import { RestrictedRoute } from "components/RestrictedRoute";

export const App = () => {
  return (
    <>
      <div id="content">
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
        
      <Footer />
    </>
    
  );
};

export default App;
