import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="darkorchid"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
