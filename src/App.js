import React from "react";
import { ChakraProvider,Flex } from "@chakra-ui/react";
import "./App.css";
import Header from "./Component/Header/Header";
import SideNav from "./Component/SideNav/SideNav";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Flex>
        <SideNav />
       <Dashboard/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
