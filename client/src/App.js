import { BrowserRouter, Routes, Route } from "react-router-dom"
import Events from "./pages/Events/Events";
import EventDetails from "./pages/EventDetails/EventDetails";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Events />} path="/" />
          <Route element={<EventDetails />} path="/event/:eventId" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
