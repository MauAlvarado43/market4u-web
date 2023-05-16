/*historyhoB
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { Loading } from "seed/helpers";
import { DateTime } from "luxon";
import { useHistory } from "react-router";
import { OPINION } from "seed/gql/queries";
import View from "components/superadmin/sales/DetailsSA.view";

function FormDetails({ saleId, onCompleted = () => null, onError = () => null }) {

    const qSale = useDetail(
        `
        {
            sale {
                id
                name
                disscount
                startDate
                endDate
                products {
                    id
                    name
                }
                banner {
                    id
                    url
                }
            }
        }
        `, saleId);

    if (qSale.loading) return <Loading />;

    const { sale = {} } = qSale.data;

    const onCancel = () => {
        onCompleted();
    }

    return <View
        sale={sale}
        onCancel={onCancel}
    />;
}

FormDetails.propTypes = {
    saleId: PropTypes.number.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormDetails;