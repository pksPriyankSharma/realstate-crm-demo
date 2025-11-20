import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Properties from "./pages/Properties";
import Analytics from "./pages/Analytics";
import Mobile from "./pages/Mobile";
import Settings from "./pages/Settings";
import AgentOnboarding from "./pages/AgentOnboarding";
import AgentNetwork from "./pages/AgentNetwork";
import CommissionManagement from "./pages/CommissionManagement";
import DealRoom from "./pages/DealRoom";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Dashboard} />
      <Route path="/leads" component={Leads} />
      <Route path="/properties" component={Properties} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/settings" component={Settings} />
      <Route path="/onboarding" component={AgentOnboarding} />
      <Route path="/network" component={AgentNetwork} />
      <Route path="/commissions" component={CommissionManagement} />
      <Route path="/deals/:id" component={DealRoom} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
