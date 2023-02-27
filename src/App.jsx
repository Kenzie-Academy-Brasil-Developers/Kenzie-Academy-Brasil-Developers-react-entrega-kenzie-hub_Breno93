import { useState } from "react";
import { Approutes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toast";
import { UserProvider } from "./providers/UserContext";
import { TechProvider } from "./providers/TechContext";
import { ProtectedRoutes } from "./protectedRoutes";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <UserProvider>
        <TechProvider>
          <Approutes />
        </TechProvider>
      </UserProvider>
      <ToastContainer position="top-right" delay={3000} />
    </div>
  );
}

export default App;
