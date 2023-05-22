import React from "react";
import PropTypes from "prop-types";
import { useSet, useDelete, useQuery } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "components/superadmin/companies/DeleteSA.view";
import { DELETE_COMPANY } from "seed/gql/queries";

function Delete({ itemId, onCompleted = () => null, onError = () => null, refetchQuery }) {
    const [callDelete] = useDelete(DELETE_COMPANY, {
        onCompleted: () => {
            refetchQuery();
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