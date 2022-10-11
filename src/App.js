import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProjectTheme from "./Theme/ProjectTheme";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ContentWrapper from "./components/ContentWrapper";
import Loading from "./components/Loading/Loading";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Events from "./pages/events/Events";
import Event from "./pages/event/Event";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <ProjectTheme>
      {authIsReady ? (
        <BrowserRouter>
          <NavBar />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/dashboard" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/dashboard" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route path="/about" element={<Navigate to="/" />} />
              <Route path="/events" element={<Events />} />
              <Route path="/event/:id" element={<Event />} />
            </Routes>
          </ContentWrapper>
          <Footer />
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </ProjectTheme>
  );
}

export default App;
