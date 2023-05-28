import React from "react";
import PropTypes from "prop-types";
import ChatbotProduct from "components/chatbot/ChatbotProduct";

const ChatbotView = ({
    setShowChatbot,
    showChatbot,
    messages,
    setMessages,
    messageInput,
    setMessageInput,
    user,
    handleSendMessage,
    chatRef
}) =>
<div style={{ position: "fixed", bottom: 25, right: 25, zIndex: 999 }}>
    <div className="d-flex">
        {
            showChatbot && 
            <div className="card" style={{ width: "25em", height: "35em" }}>
                <div className="card-header mb-0 px-1 py-2" style={{ backgroundColor: "#519EA4" }}>
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="d-flex align-items-center">
                            <div className="mr-2">
                                <span className="fa-stack fa-2x" >
                                    <i class="fas fa-circle fa-stack-2x text-white"/>
                                    <i class="fas fa-robot fa-stack-1x fa-inverse" style={{ color: "#519EA4" }}/>
                                </span>
                            </div>
                            <div>
                                <span className="h2 font-weight-bold text-white">MarketBot</span>
                            </div>
                        </div>
                        <div className="mt-1 mr-3 d-flex">
                            <i 
                                class="fas fa-times fa-2x text-white" 
                                style={{ cursor: "pointer" }} 
                                onClick={() => setShowChatbot(!showChatbot)}
                            />
                        </div>
                    </div>
                </div>
                <div className="card-body px-2 py-0">
                    <div className="d-flex flex-column py-0">
                        <div style={{ height: "25em", overflowY: "scroll" }} className="my-2" ref={chatRef}>
                            {
                                messages.map((message, index) => 
                                    <div key={index} className="d-flex justify-content-start align-items-center my-2">
                                        {
                                            function(){
                                                if(message.message) {
                                                    if(message.isUser) {
                                                        return <div className="d-flex justify-content-end w-100">
                                                            <div 
                                                                className="d-flex justify-content-end align-items-center" 
                                                                style={{ maxWidth: "75%" }}
                                                            >
                                                                <div 
                                                                    className="d-flex justify-content-center align-items-center"
                                                                    style={{ 
                                                                        backgroundColor: "#519EA4", 
                                                                        borderRadius: "10px", 
                                                                        padding: "10px"
                                                                    }}
                                                                >
                                                                    <span className="text-white">{message.message}</span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-2 d-flex justify-content-end align-items-end">
                                                                <img
                                                                    src={user?.photo?.url}
                                                                    alt="Foto de Perfil"
                                                                    class="rounded-circle"
                                                                    style={{ 
                                                                        width: "50px", 
                                                                        height: "50px", 
                                                                        borderRadius: "50%" 
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    }
                                                    else {
                                                        return <div className="d-flex justify-content-start align-items-center w-100">
                                                            <div className="mr-2">
                                                                <span className="fa-stack fa-2x" >
                                                                    <i 
                                                                        class="fas fa-circle fa-stack-2x" 
                                                                        style={{ color: "#519EA4" }}
                                                                    />
                                                                    <i class="fas fa-robot fa-stack-1x fa-inverse text-white"/>
                                                                </span>
                                                            </div>
                                                            <div 
                                                                className="d-flex justify-content-start align-items-center" 
                                                                style={{ maxWidth: "75%" }}
                                                            >
                                                                <div 
                                                                    className="d-flex justify-content-center align-items-center"
                                                                    style={{ 
                                                                        backgroundColor: "#F2F2F2", 
                                                                        borderRadius: "10px", 
                                                                        padding: "10px" 
                                                                    }}
                                                                >
                                                                    <span>{message.message}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                }
                                                else {
                                                    return <ChatbotProduct product={message.product}/>;
                                                }
                                            }() 
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="d-flex align-items-center px-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Escribe tu búsqueda..." 
                                value={messageInput} 
                                onKeyUp={handleSendMessage}
                                onChange={(e) => setMessageInput(e.target.value)} 
                            />
                            <i
                                class="fas fa-paper-plane fa-2x ml-3" 
                                style={{ cursor: "pointer", color: "#FC4B08"}} 
                                onClick={handleSendMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        }
        <div className="d-flex justify-content-end align-items-end ml-3">
            <span className="fa-stack fa-2x" style={{ cursor: "pointer" }} onClick={() => setShowChatbot(!showChatbot)}>
                <i class="fas fa-comment fa-stack-2x" style={{ color: "#519EA4" }}></i>
                <i class="fas fa-robot fa-stack-1x fa-inverse"></i>
            </span>
        </div>
    </div>
</div>;

ChatbotView.propTypes = {
    setShowChatbot: PropTypes.func,
    showChatbot: PropTypes.bool,
    messages: PropTypes.array,
    setMessages: PropTypes.func,
    messageInput: PropTypes.string,
    setMessageInput: PropTypes.func,
    user: PropTypes.object,
    handleSendMessage: PropTypes.func,
    chatRef: PropTypes.object
};

export default ChatbotView;