import React from "react";
import { Box, Flex, Text, IconButton, VStack } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaBullseye, FaHamburger, FaUtensils } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({ length: 23 }, (_, i) => i + 3),
  datasets: [
    {
      label: "Activity",
      data: [
        6, 4, 6, 5, 6, 3, 4, 2, 6, 6, 3, 6, 6, 5, 3, 3, 5, 4, 6, 5, 3, 6, 6,
      ],
      backgroundColor: "rgba(66, 153, 225, 0.6)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const menuList = [
    {
      icon: <FaUtensils />,
      arialabel: "Menus",
      colorScheme: "teal",
    },
    {
      icon: <FaHamburger />,
      arialabel: "Popular Dishes",
      colorScheme: "blue",
    },
    {
      icon: <FaBullseye />,
      arialabel: "Goals",
      colorScheme: "orange",
    },
  ];
  

const ActivitySection = () => {
  return (
    <Flex>
      <Box flex="3" bg="gray.900" p={4} boxShadow="lg">
        <Text fontSize="xl" color="white" mb={4}>
          Activity
        </Text>
        <Box height="250px" boxShadow="lg">
          <Bar data={data} options={options} />
        </Box>
      </Box>
      <VStack flex="1" spacing={4} p={4} bg="gray.900">
        {menuList.map((item, i) => {
          return (
            <Flex
              key={i}
              w="full"
              justifyContent={"space-between"}
              p={5}
              bg="gray.800"
              boxShadow="lg"
            >
              <Flex gap={4} alignItems={"center"}>
                <IconButton
                  icon={item.icon}
                  aria-label={item.arialabel}
                  isRound
                  colorScheme={item.colorScheme}
                />
                <Text color="white">{item.arialabel}</Text>
              </Flex>
              <IconButton
                icon={<IoIosArrowForward color="white" />}
                aria-label="forward-icon"
                size="sm"
                isRound
                bg="geay.300"
              />
            </Flex>
          );
        })}
      </VStack>
    </Flex>
  );
};

export default ActivitySection;