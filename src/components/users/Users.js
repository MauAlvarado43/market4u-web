import React, { useRef } from "react";
import PropTypes from "prop-types";


import View from "components/users/Users.view";


function Element() {

    const listRef = useRef(null);
    const refetchQuery = () => {
        listRef.current.refetchQuery();
    };
    return <View 
        listRef={listRef} 
        refetchQuery={refetchQuery}
    />;
}

Element.propTypes = {};

export default Element;