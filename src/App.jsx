import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderTable from "./components/OrderTable/OrderTable";
import HomePage from "./components/HomePage/HomePage";
function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:company" element={<OrderTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
