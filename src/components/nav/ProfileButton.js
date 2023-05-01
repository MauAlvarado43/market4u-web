import React from "react";
import PropTypes from "prop-types";
import View from "components/nav/ProfileButton.view";

function ProfileButton(props){

    const { text, icon_left } = props;

    return <View
        text={text}
        icon_left={icon_left}
    />
}

ProfileButton.propTypes = {
    minHeight: PropTypes.string,
    maxHeight: PropTypes.string,
    icon_left: PropTypes.string
};

export default ProfileButton;
