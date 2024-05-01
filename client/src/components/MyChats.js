import axios from "axios";
import React, { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import { AddIcon } from "@chakra-ui/icons";
import ChatLoading from "./ChatLoading";
import GroupChatMod from "./miscellaneous/GroupChatMod";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();
  const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      console.error("Failed to load chats: ", error.message);
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #CBD5E0",
        background: "white",
        width: "80%",
        maxWidth: "31%",
      }}
    >
      <div
        style={{
          paddingBottom: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          fontSize: "30px",
          fontFamily: "Work sans",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        My Chats
        <GroupChatMod>
          <button
            style={{
              display: "flex",
              fontSize: "17px",
              alignItems: "center",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            New GroupChat <AddIcon />
          </button>
        </GroupChatMod>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          background: "#F8F8F8",
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          overflowY: "hidden",
        }}
      >
        {chats ? (
          <div style={{ overflowY: "scroll" }}>
            {chats.map((chat) => (
              <div
                onClick={() => setSelectedChat(chat)}
                key={chat._id}
                style={{
                  cursor: "pointer",
                  background: selectedChat === chat ? "#38B2AC" : "#E8E8E8",
                  color: selectedChat === chat ? "white" : "black",
                  padding: "10px",
                  borderRadius: "8px",
                  marginBottom: "5px",
                }}
              >
                <span>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <ChatLoading />
        )}
      </div>
    </div>
  );
};

export default MyChats;
