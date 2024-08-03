import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
} from "@chakra-ui/react";
import {
  Search2Icon,
  EmailIcon,
  SettingsIcon,
  BellIcon,
} from "@chakra-ui/icons";
import { AiFillAppstore } from "react-icons/ai";

const Header = () => {
  return (
    <Box bg="gray.800" px={4} py={2} color="white">
      <Flex alignItems="center" justifyContent={'space-between'}>
        <Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            color="white"
            borderRadius="50%"
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
            p={1.5}
          >
            <AiFillAppstore fontSize={"20px"} color="white" />
          </Flex>
          <InputGroup ml={4} maxW="250px">
            <InputLeftElement pointerEvents="none" maxH={"35px"}>
              <Search2Icon  color="white" />
            </InputLeftElement>
            <Input
              maxH={"35px"}
              type="text"
              placeholder="Search"
              bg="gray.700"
              borderColor="gray.600"
            />
          </InputGroup>
        </Flex>
        <Flex>
          <IconButton
            variant="ghost"
            color="white"
            borderRadius={"50%"}
            aria-label="Messages"
            icon={<EmailIcon />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
          <IconButton
            variant="ghost"
            color="white"
            borderRadius={"50%"}
            aria-label="Settings"
            icon={<SettingsIcon />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
          <IconButton
            variant="ghost"
            color="white"
            borderRadius={"50%"}
            aria-label="Notifications"
            icon={<BellIcon />}
            _hover={{ bg: "gray.600", borderRadius: "50%" }}
          />
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            ml={4}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
