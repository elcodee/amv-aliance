import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import Upload from "./pages/Upload";
import DetailPost from "./pages/DetailPost";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="upload" element={<Upload />} />
            <Route path="/detail-post/:idlm" element={<DetailPost />} />

            {/* OWNER */}
            {/* <PrivateRoute exact path="/transactions" component={Dashboard} /> */}
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
