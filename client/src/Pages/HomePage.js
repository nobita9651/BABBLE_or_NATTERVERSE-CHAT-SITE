import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import { useHistory } from "react-router";

function Homepage() {
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
        p={4}
        bg={"white"}
        w="100%"
        m="50px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="x-large" fontFamily="Work sans" colour="Green">
          NATTERVERSE
        </Text>
      </Box>
      <Box
        bg={"white"}
        w="100%"
        p={4}
        colour="black"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="enclosed">
          <TabList mb="1em">
            <Tab width="50%">Register</Tab>
            <Tab width="50%">Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Register />
            </TabPanel>
            <TabPanel>
              {" "}
              <Login />{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
