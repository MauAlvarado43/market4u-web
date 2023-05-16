import React from "react";
import PropTypes from "prop-types";
import { useSet, useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/opinion/CensorSA.view";
import { SET_OPINION } from "seed/gql/queries";

function Delete({ opinionId, onCompleted = () => null, onError = () => null, refetchQuery }) {

    const [callCensor, qSet] = useSet(SET_OPINION, {
        onCompleted: (data) => {
            console.log(data)
            refetchQuery();
            onCompleted();
        }
    }
    );

    const onClickCensor = () => {
        const id = parseInt(opinionId);
        callCensor({
            id: id,
            description: "Esta opinión fue censurada porque no cumplía con los términos y condiciones de Market4U"
        });
    }

    const error = qSet.error ? "Error" : null;

    return <View
        onClose={onCompleted}
        onClickCensor={onClickCensor}
    />;
}

Delete.propTypes = {
    opinionId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default Delete;