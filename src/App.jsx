import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Adminlayout from "./components/Adminlayout";
import SingleBooking from "./components/booking/BookingServiceCard/SingleBooking";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import SingleBlogContent from "./pages/SingleBlogContent";
import SingleServicesContent from "./pages/SingleServicesContent";
import Trend from "./pages/Trend";

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
      { path: "booking", element: <Booking /> },
      { path: "blog/:id", element: <SingleBlogContent /> },
      { path: "service/:id", element: <SingleServicesContent /> },
      { path: "settings", element: <Settings /> },
      { path: "booking/detailed/:id", element: <SingleBooking /> },
      { path: "trend", element: <Trend /> },
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
