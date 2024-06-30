import Landing from "./pages/Landing";

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Test } from "./pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Assistant" element={<Test />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
