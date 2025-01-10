import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Adminlayout from "./components/Adminlayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutMe from "./pages/AboutMe";
import Awards from "./pages/Awards";
import Blog from "./pages/Blog";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Skills from "./pages/Skills";
import SingleBlogContent from "./pages/SingleBlogContent";
import SingleServicesContent from "./pages/SingleServicesContent";

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
      { path: "about", element: <AboutMe /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlogContent /> },
      { path: "service/:id", element: <SingleServicesContent /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "skills", element: <Skills /> },
      { path: "awards", element: <Awards /> },
    ],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
