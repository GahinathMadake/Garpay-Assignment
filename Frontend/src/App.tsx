import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// common Pages
import AuthenticateLayout from "./pages/Authentication/LoginRegistration";
import LandingPage from "./pages/LandingPage";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import ForgotPassword from "./components/common/ForgotPassword";
import DashboardLayout from '@/pages/DashboardLayout';

// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import BusinessSetupDashboard from "./pages/PlatformSetup";
import AIAgent from "./pages/AIAgent";
import Payouts from "./pages/Payouts";
import Promoters from "./pages/Promoters";
import Leads from "./pages/Leads";
import Campaign from "./pages/Campaign";


// Context Provider
import { BreadcrumbProvider } from "./context/BreaderCrumbContext";
// import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<AuthenticateLayout><Login /></AuthenticateLayout>} />
          <Route path="/login/forgotpassword" element={<AuthenticateLayout><ForgotPassword /></AuthenticateLayout>} />
          <Route path="/register" element={<AuthenticateLayout><Register /></AuthenticateLayout>} />
          <Route path="/dashboard" element={ <BreadcrumbProvider><DashboardLayout /></BreadcrumbProvider>}>
            <Route index element={<Dashboard />}/>
            <Route path="platform-setup" element={<BusinessSetupDashboard />}/>
            <Route path="ai-agent" element={<AIAgent />}/>
            <Route path="campaign" element={<Campaign />}/>
            <Route path="promoters" element={<Promoters />}/>
            <Route path="leads" element={<Leads />}/>
            <Route path="payouts" element={<Payouts />}/>
          </Route>
        </Routes>
      </Router>
    // </ThemeProvider>
  );
}

export default App;
