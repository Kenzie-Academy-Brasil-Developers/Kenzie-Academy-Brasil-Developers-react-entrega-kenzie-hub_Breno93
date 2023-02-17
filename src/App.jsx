import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Approutes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [user, setuser] = useState([]);

  return (
    <div className="App">
      <GlobalStyles />
      <Approutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
