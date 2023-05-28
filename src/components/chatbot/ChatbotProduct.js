import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/chatbot/ChatbotProduct.view";

function ChatbotProduct({ product }) {
    return <View product={product}/>;
}

ChatbotProduct.propTypes = {
    product: PropTypes.object
};

export default ChatbotProduct;