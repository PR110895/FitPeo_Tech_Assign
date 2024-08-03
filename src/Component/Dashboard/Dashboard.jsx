import React from "react";
import DashboardSection from "./DashboardSection";
import ActivitySection from "./ActivitySection";
import { Box } from "@chakra-ui/react";
import OrderSection from "./OrderSection";

const Dashboard = () => {
  return (
    <Box w='100%'h={"92.5vh"} overflowY={'scroll'}>
      <DashboardSection />
      <ActivitySection/>
      <OrderSection/>
    </Box>
  );
};

export default Dashboard;
