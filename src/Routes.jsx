// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NotFound from "pages/NotFound";
// import FrameOne from "pages/FrameOne";
// import MySubmissions from "pages/MySubmissions";
// import ReportsPage from "pages/Reports";
// import Login from "pages/Login";
// import AuthGuard from "pages/AuthGuard/AuthGuard";
// import HostelPages from "pages/HostelPages/HostelPages";
// import Login1 from "pages/Login1/Login";
// import StudentLoggedInRoomsPage from "pages/FrameOne/StudentLoggedInRoomsPage"; // Correct import
// import ConfirmRoomBook from "pages/FrameOne/ConfirmRoomBook";

// const ProjectRoutes = () => {
//   const isAuthenticated = localStorage.getItem("token"); // Get the authentication state from your application
  
//   return (
//     <React.Suspense fallback={<>Loading...</>}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/Login1" element={<Login1 />} />
//           <Route path="/HostelPages" element={<HostelPages />} />
//           <Route
//             path="/Frameone"
//             element={<AuthGuard isAuthenticated={isAuthenticated}><FrameOne /></AuthGuard>}
//           />
//           <Route
//             path="/MySubmissions"
//             element={<AuthGuard isAuthenticated={isAuthenticated}><MySubmissions /></AuthGuard>}
//           />
//           <Route
//             path="/Reports"
//             element={<AuthGuard isAuthenticated={isAuthenticated}><ReportsPage /></AuthGuard>}
//           />
//           <Route path="/StudentLoggedInRoomsPage" element={<StudentLoggedInRoomsPage />} />
//           <Route path="/ConfirmRoomBook" element={<ConfirmRoomBook />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </React.Suspense>
//   );
// };

// export default ProjectRoutes;







import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Booked from "pages/Booked";
import Confirmed from "pages/Confirmed";
import AuthGuard from "pages/AuthGuard/AuthGuard";
import HostelPages from "pages/HostelPages/HostelPages";

import StudentIsLoggedInRooms from "pages/Dashboard/StudentLoggedInRoomsPage";
import ConfirmRoomBook from "pages/Dashboard/ConfirmRoomBook";
import RoomMates from "pages/Dashboard/RoomMates";
import Transactions from "pages/Dashboard/Transactions";
import KeyLog from "pages/Dashboard/KeyLog";
import Faqs from "pages/Faqs";
import HelpDesk from "pages/HelpDesk";
import About from "pages/About";


const ProjectRoutes = () => {
  const isAuthenticated = localStorage.getItem("token"); // Get the authentication state from your application
  
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HostelPages" element={<HostelPages />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/HelpDesk" element={<HelpDesk />} />
          <Route path="/About" element={<About />} />
           <Route path="/Dashboard" element={<AuthGuard isAuthenticated={isAuthenticated}><Dashboard /></AuthGuard>} /> 
           <Route path="/Booked" element={<AuthGuard isAuthenticated={isAuthenticated}><Booked /></AuthGuard>} /> 
           <Route path="/Confirmed" element={<AuthGuard isAuthenticated={isAuthenticated}><Confirmed /></AuthGuard>} />
          
          
           <Route path="/StudentLoggedInRoomsPage" element={<AuthGuard isAuthenticated={isAuthenticated}> <StudentIsLoggedInRooms /> </AuthGuard>} /> 
         


          <Route path="/ConfirmRoomBook" element={<ConfirmRoomBook />} />
          <Route path="/RoomMates" element={<AuthGuard isAuthenticated={isAuthenticated}> <RoomMates /></AuthGuard>} />
          <Route path="/Transactions" element={<AuthGuard isAuthenticated={isAuthenticated}><Transactions /></AuthGuard>} />
          <Route path="/KeyLog" element={<AuthGuard isAuthenticated={isAuthenticated}><KeyLog /></AuthGuard>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
