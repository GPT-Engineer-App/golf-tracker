import React from "react";
import { Flex, Box, Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/score-tracking" px={2}>
          Score Tracking
        </Link>
        <Link as={RouterLink} to="/friends" px={2}>
          Friends
        </Link>
        <Link as={RouterLink} to="/courses" px={2}>
          Courses
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
