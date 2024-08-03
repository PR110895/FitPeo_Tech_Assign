import React from "react";
import { Box, IconButton, VStack } from "@chakra-ui/react";
import { IoMdLogOut, IoMdHome } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";

const SideNav = () => {
  return (
    <Box bg="gray.800" color="white" w="60px" h={"92.5vh"} p={2}>
      <VStack>
        <Box spacing={400}>
          <IconButton
            variant="ghost"
            color="white"
            aria-label="Home"
            borderRadius={"50%"}
            icon={<IoMdHome fontSize={"18px"} />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
          <IconButton
            variant="ghost"
            color="white"
            aria-label="Analytics"
            borderRadius={"50%"}
            icon={<MdInsertChartOutlined fontSize={"18px"} />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
          <IconButton
            variant="ghost"
            color="white"
            aria-label="Tasks"
            borderRadius={"50%"}
            icon={<BiTask fontSize={"18px"} />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
          <IconButton
            variant="ghost"
            color="white"
            aria-label="Messages"
            borderRadius={"50%"}
            icon={<CiWallet fontSize={"18px"} />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
          <IconButton
            variant="ghost"
            color="white"
            aria-label="Clipboard"
            borderRadius={"50%"}
            icon={<IoBagCheckOutline fontSize={"18px"} />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
        </Box>
        <Box mt={"55vh"}>
          <IconButton
            variant="ghost"
            color="white"
            aria-label="Settings"
            borderRadius={"50%"}
            icon={<IoMdLogOut fontSize={"18px"} />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default SideNav;
