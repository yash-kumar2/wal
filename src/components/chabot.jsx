import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Input, Text, VStack, Flex, Icon, Image } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import axios from "axios";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([
        {
          sender: "bot",
          msg: "👋 Hi! I’m your Walmart Assistant. What do you need today?",
        },
      ]);
    }
  }, [open]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setChat((prev) => [...prev, { sender: "user", msg: input }]);
    setInput("");
    try {
      const res = await axios.post("http://10.95.18.250:5000/chatbot", { message: input });
      setChat((prev) => [...prev, { sender: "bot", msg: res.data.response }]);
    } catch (e) {
      setChat((prev) => [...prev, { sender: "bot", msg: "Error connecting to chatbot." }]);
    }
  };

  return (
    <>
      <Button
        position="fixed"
        bottom="30px"
        right="30px"
        zIndex={1500}
        p={0}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        onClick={() => setOpen((v) => !v)}
      >
        <Image
          src="/chat.png"
          alt={open ? "Close Chat" : "Chat"}
          boxSize="60px"
          borderRadius="full"
          objectFit="cover"
        />
      </Button>

      {open && (
        <Box
          position="fixed"
          bottom="100px"
          right="30px"
          width={["90vw", "350px"]}
          height="500px"
          bg="white"
          boxShadow="2xl"
          borderRadius="lg"
          zIndex={15000}
          display="flex"
          flexDirection="column"
        >
          <Flex
            align="center"
            bg="#0071ce"
            color="white"
            px={4}
            py={3}
            borderTopRadius="lg"
          >
            <Icon as={FaRobot} boxSize={5} mr={2} />
            <Text fontWeight="bold" fontSize="lg">
              Shopping Assistant
            </Text>
          </Flex>

          <VStack
            align="stretch"
            spacing={3}
            flex={1}
            px={3}
            py={2}
            overflowY="auto"
            bg="#f7fafc"
          >
            {chat.map((c, i) => (
              <Box
                key={i}
                alignSelf={c.sender === "user" ? "flex-end" : "flex-start"}
                bg={c.sender === "user" ? "#0071ce" : "#e2e8f0"}
                color={c.sender === "user" ? "white" : "black"}
                borderRadius="20px"
                px={4}
                py={2}
                maxWidth="80%"
                fontSize="md"
                boxShadow="sm"
              >
                <Text whiteSpace="pre-line">{c.msg}</Text>
              </Box>
            ))}
            <div ref={chatEndRef} />
          </VStack>

          <Box
            px={3}
            py={2}
            borderBottomRadius="lg"
            bg="#f7fafc"
            borderTop="1px solid #e2e8f0"
            display="flex"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              mr={2}
              bg="white"
              borderColor="#cbd5e1"
            />
            <Button onClick={sendMessage} colorScheme="blue">
              Send
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Chatbot;
