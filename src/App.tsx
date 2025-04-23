import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CVProvider } from "@/data/CVProvider";
import ViewCV from "@/pages/ViewCV";

function App() {
  return (
    <Router>
      <CVProvider>
        <Routes>
          <Route path="*" element={<ViewCV />} />
        </Routes>
      </CVProvider>
    </Router>
  );
}

export default App;
