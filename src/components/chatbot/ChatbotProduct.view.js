import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ChatbotProductView = ({ product }) => 
<Link to={`/product/${product.id}`} className="text-decoration-none">
    <div className="card w-100">
        <div className="card-body">
            <div className="row">
                <div className="col-md-6">
                    <span className="h6 font-weight-bold">
                        {
                            product.name.length > 30
                                ? product.name.substring(0, 30) + "..."
                                : product.name
                        }
                    </span>
                    <p className="h6 text-muted">
                        {
                        product.short_description.length > 70 
                            ? product.short_description.substring(0, 70) + "..."
                            : product.short_description
                        }
                    </p>
                    <span className="h6 font-weight-bold">${product.variants[0].price}</span>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img
                        src={product.variants[0].photos[0].url}
                        alt={"Producto"}
                        className="img-fluid"
                        style={{ maxHeight: "10em" }}
                    />
                </div>
            </div>
        </div>
    </div>
</Link>;

ChatbotProductView.propTypes = {
    product: PropTypes.object
};

export default ChatbotProductView;