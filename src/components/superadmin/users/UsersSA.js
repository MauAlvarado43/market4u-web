import React, { useRef } from "react";
import PropTypes from "prop-types";
import View from "components/superadmin/users/UsersSA.view";


function Element() {

    const type = sessionStorage.getItem("type");
    if (type != "SUPERADMIN") window.location.replace("/profile/info");

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