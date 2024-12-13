import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Adminlayout from "./components/Adminlayout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Awards from "./pages/Awards";

const routes = [
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Adminlayout>
          <Outlet />
        </Adminlayout>
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutMe />},
      { path: "/education", element: <Education /> },
      { path: "/experience", element: <Experience /> },
      { path: "/skills", element: <Skills /> },
      { path: "/awards", element: <Awards /> },
    ],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
