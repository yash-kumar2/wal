import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar";
import "./style/App.css";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { Pannel } from "./components/Pannel";
import { Main } from "./pages/Main";
import Headroom from "react-headroom";
import Heading1 from "./pages/Heading1";
import Products1 from "./pages/Products1";
import { CustomScrollBar } from "react-custom-scrollbar";
import { LineHorizontal } from "./components/LineHorizontal";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Heading2 from "./pages/Heading2";
import Product4 from "./components/Product4";
import { BiTachometer } from "react-icons/bi";
import Product5 from "./components/Product5";
import { Product6 } from "./components/Product6";
import Heading3 from "./pages/Heading3";
import Heading4 from "./pages/Heading4";
import Product7 from "./pages/Product7";
import { Footer } from "./components/Footer";
import { Allroutes } from "./components/Allroutes";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";
import Chatbot from "./components/chabot";

function App() {
  const { signin } = useContext(AuthContext);
  const { cart } = useContext(AuthContext);
  
  // Responsive values using Chakra UI's useBreakpointValue hook
  const containerPadding = useBreakpointValue({
    base: "0px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  });
  
  const maxWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "100%",
    lg: "1200px",
    xl: "1400px"
  });
  
  const showPanel = useBreakpointValue({
    base: false, // Hide panel on mobile
    md: true     // Show panel on medium screens and up
  });

  return (
    <>
      <Box 
        w="100%" 
        maxW={maxWidth}
        mx="auto" // Center the container
        px={containerPadding}
        minH="100vh" // Ensure full viewport height
        position="relative"
      >
        {signin ? null : (
          <Box className="headroom">
            <Navbar />
            {/* Conditionally render Panel based on screen size and cart state */}
            {cart ? null : (showPanel && <Pannel />)}
          </Box>
        )}
        
        {/* Main content area with responsive padding */}
        <Box
          px={{ base: "16px", sm: "24px", md: "32px", lg: "40px" }}
          py={{ base: "16px", sm: "20px", md: "24px" }}
        >
          <Allroutes />
        </Box>
        
        {/* Footer with responsive spacing */}
        <Box mt={{ base: "40px", md: "60px", lg: "80px" }}>
          <Footer />
        </Box>
        
        {/* Chatbot with responsive positioning */}
        <Box
          position="fixed"
          bottom={{ base: "16px", md: "24px" }}
          right={{ base: "16px", md: "24px" }}
          zIndex={1000}
        >
          <Chatbot />
        </Box>
      </Box>
    </>
  );
}

export default App;