import { Box, Container, Text, Tab, TabList, TabPanels, TabPanel, Tabs } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Signup from "../Components/Authentication/signup";
import Login from "../Components/Authentication/login";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);


  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="black"
          textAlign={"center"}
        >
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg={"white"} w="100%" p={4} borderRadius={"lg"} color={'black'} borderWidth={"1px"}>
        <Tabs variant="enclosed">
          <TabList margin={'1em'}>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login /></TabPanel>
            <TabPanel><Signup /></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
