import React from "react";
import { Box, Container, Heading, Button, Stack, Text, Flex, Image, useColorModeValue, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaGolfBall, FaUserFriends, FaClipboardList, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Header />
        <HeroSection />
        <Features />
        <Footer />
      </VStack>
    </Container>
  );
};

const Header = () => {
  return (
    <Flex align="center" justify="space-between">
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        GolfPro
      </Heading>
      <Stack direction="row" spacing={6}>
        <Button colorScheme="green" variant="solid">
          Sign In
        </Button>
        <Button colorScheme="green" variant="outline">
          Sign Up
        </Button>
      </Stack>
    </Flex>
  );
};

const HeroSection = () => {
  return (
    <Flex align="center" justify="center" direction={{ base: "column", md: "row" }}>
      <Box flex="1">
        <Heading mb={3} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          Elevate Your Golf Experience
        </Heading>
        <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue("gray.600", "gray.300")}>
          Join the community of professional golfers and improve your game with state-of-the-art analytics.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={8}>
          <Button leftIcon={<Icon as={FaGolfBall} />} colorScheme="green" size="lg">
            Start Playing
          </Button>
          <Button leftIcon={<Icon as={FaUserFriends} />} variant="outline" size="lg">
            Join a Group
          </Button>
        </Stack>
      </Box>
      <Box flex="1" mt={{ base: 12, md: 0 }}>
        <Image src="https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlfGVufDB8fHx8MTcwOTI2NjgzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Golf Course" borderRadius="lg" boxShadow="lg" />
      </Box>
    </Flex>
  );
};

const Features = () => {
  const features = [
    {
      icon: FaClipboardList,
      title: "Track Your Scores",
      description: "Easily record and manage your scores on any course.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Discover Courses",
      description: "Find the best courses to play on around you.",
    },
    {
      icon: FaUserFriends,
      title: "Connect with Friends",
      description: "Add friends to your network and share your progress.",
    },
  ];

  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Features
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} justify="center" spacing={10}>
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </Stack>
    </Box>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <VStack bg={useColorModeValue("gray.100", "gray.700")} p={5} borderRadius="xl" boxShadow="md" align="stretch">
      <Icon as={icon} w={10} h={10} color={useColorModeValue("green.500", "green.200")} />
      <Heading as="h3" size="md" mt={2}>
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{description}</Text>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py={6}>
      <Flex justify="center" align="center">
        <Text fontSize="sm">&copy; {new Date().getFullYear()} GolfPro. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
