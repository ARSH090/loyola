import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EditContent from "./pages/EditContent";
import EditContacts from "./pages/EditContacts";
import ManageGallery from "./pages/ManageGallery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-content" element={<EditContent />} />
        <Route path="/edit-contacts" element={<EditContacts />} />
        <Route path="/manage-gallery" element={<ManageGallery />} />
      </Routes>
    </Router>
  );
};

export default App;
