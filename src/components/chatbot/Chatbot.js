import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import View from "components/chatbot/Chatbot.view";
import { useDetail } from "seed/gql";
import { useEffect } from "react";
import { usePost } from "seed/api";

function Chatbot() {

    const chatRef = useRef(null);
    const [showChatbot, setShowChatbot] = useState(true);
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState([
        { 
            isUser: false, 
            message: "Hola, soy MarketBot, ¿en qué puedo ayudarte?", 
            product: null
        },
    ]);

    const [callRecomendations, qRecomendations] = usePost("/products/get_chatbot_recomendations", {
        onCompleted: (data) => {
            if(data.products.length === 0) {
                setMessages(
                    [
                        ...messages, 
                        { 
                            isUser: false, 
                            message: "No tengo recomendaciones para ti", 
                            product: null
                        }
                    ]
                );
            }
            else {
                setMessages(
                    [
                        ...messages, 
                        { 
                            isUser: false, 
                            message: "Estos son los productos que te puedo recomendar", 
                            product: null
                        },
                        ...data.products.map((product) => ({
                            isUser: false,
                            message: null,
                            product
                        }))
                    ]
                );
            }
        },
        onError: (error) => {
            setMessages(
                [
                    ...messages, 
                    { 
                        isUser: false, 
                        message: "Ocurrió un error al obtener las recomendaciones, por favor intenta más tarde",
                        product: null
                    }
                ]
            );
        }
    });

    const reqUser = useDetail(`{
        user {
          firstName
          type
          photo{
            id
            url
          }
          company{
            id
            photo{
              url
            }
          }
        }
      }`, sessionStorage.getItem("id"));

    const handleSendMessage = (e) => {

        if(!messageInput) return;
        if(e.key && e.key !== "Enter") return;

        callRecomendations({ message: messageInput });
        setMessages([...messages, { isUser: true, message: messageInput, product: null }]);
        setMessageInput("");

    }

    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight + 1000;
    }, [messages]);

    const { user = {} } = reqUser.data;

    return <View 
        setShowChatbot={setShowChatbot}
        showChatbot={showChatbot}
        messages={messages}
        setMessages={setMessages}
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        user={user}
        handleSendMessage={handleSendMessage}
        chatRef={chatRef}
    />;

}

Chatbot.propTypes = {};

export default Chatbot;