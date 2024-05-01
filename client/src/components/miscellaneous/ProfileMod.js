import { InfoIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProfileMod = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<InfoIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontFamily="Work sans"
            fontSize="50px"
            d="flex"
            justifyContent="center"
          ></ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="160px"
              src={user.picture}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "15px", md: "15px" }}
              fontFamily="Work sans"
            >
              {" "}
              Name: {user.name}
            </Text>
            <Text
              fontSize={{ base: "30px", md: "30px" }}
              fontFamily="Work sans"
            >
              {" "}
              Email :{user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileMod;
