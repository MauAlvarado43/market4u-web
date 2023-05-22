import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete, useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/users/DeleteSA.view";
import { DELETE_USER } from "seed/gql/queries";

function Delete({ itemId, onCompleted = () => null, onError = () => null, }) {
    const [callDelete] = useDelete(DELETE_USER, {
        onCompleted: () => {
            onCompleted();
        }
    }
    );

    const onClickDelete = () => {
        const id = parseInt(itemId);
        callDelete({ id: id });
    }

    return <View
        onClose={onCompleted}
        onClickDelete={onClickDelete}
    />;
}

Delete.propTypes = {
    itemId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default Delete;