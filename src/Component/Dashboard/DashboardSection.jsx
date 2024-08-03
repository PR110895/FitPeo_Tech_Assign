import React from "react";
import {
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

const DashbordzsectionData = [
  {
    icon: FaShoppingCart,
    label: "Total Orders",
    value: "75",
    change: 3,
    isIncrease: true,
    color: "blue.500",
  },
  {
    icon: FaTruck,
    label: "Total Delivered",
    value: "70",
    change: 3,
    isIncrease: false,
    color: "green.500",
  },
  {
    icon: FaBan,
    label: "Total Cancelled",
    value: "05",
    change: 3,
    isIncrease: true,
    color: "red.500",
  },
  {
    icon: FaDollarSign,
    label: "Total Revenue",
    value: "$12k",
    change: 3,
    isIncrease: false,
    color: "purple.500",
  },
];

const DashboardSection = () => {
  return (
    <Box p={4} bg="gray.900" color="white" width={"100%"}>
      <Text fontSize="2xl" mb={4}>
        Dashboard
      </Text>
      <Flex justifyContent={"space-between"}>
        <Flex gap={6}>
          {DashbordzsectionData.map((item, i) => {
            return (
              <StatCard
                key={i}
                icon={item.icon}
                label={item.label}
                value={item.value}
                change={item.change}
                isIncrease={item.isIncrease}
                color={item.color}
              />
            );
          })}
        </Flex>
        <Box p={3} bg="gray.800" borderRadius="lg" w={'380px'} maxW={"450px"}>
          <Flex>
            <Flex>
              <Flex flexDir={"column"}>
                <Text fontSize="lg">Net Profit</Text>
                <Text fontSize="2xl" fontWeight="bold">
                  $6759.25
                </Text>
                <Stat>
                  <StatHelpText>
                    <StatArrow type={"increase"} />
                    {"3"}%
                  </StatHelpText>
                </Stat>
              </Flex>
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CircularProgress value={70} size="70px" color="blue.500">
                  <CircularProgressLabel>70%</CircularProgressLabel>
                </CircularProgress>
                <Text mt={2} fontSize="10px">
                  *The values here have been rounded off.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const StatCard = ({ icon, label, value, change, isIncrease, color }) => {
  return (
    <Box p={2} bg="gray.800" borderRadius="lg" maxH={"120px"} w={'160px'} maxW={"200px"}>
      <Flex
        align="center"
        flexDirection={"column"}
        alignItems={"flex-start"}
        rowGap={3}
      >
        <Box borderRadius={'lg'} as={icon} size="28px" bg={color} mr={4} p={1} />
        <Box>
          <Stat>
            <StatLabel>{label}</StatLabel>
            <Flex pt={5} justifyContent={"space-between"}>
              <StatNumber fontSize="xl">{value}</StatNumber>
              <StatHelpText>
                <StatArrow type={isIncrease ? "increase" : "decrease"} />
                {change}%
              </StatHelpText>
            </Flex>
          </Stat>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardSection;
