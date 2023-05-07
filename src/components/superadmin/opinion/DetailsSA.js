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

///
import { OPINION } from "seed/gql/queries";
import View from "components/superadmin/opinion/DetailsSA.view";
///

function FormDetails({ 

    ///
    opinionId, 
    ///
    
    onCompleted = () => 
        null
    , 
    onError = () => 
        null 
}) {
    
    const qOpinion = useDetail(
        
        ///
        `
        {
            opinion {
                id
                title
                description
                rate
                product {
                    id
                    name
                }
                user {
                    id
                    username
                    company {
                        name
                    }
                }
            }
        }
        `, 
        opinionId
        ///

    );

    if (qOpinion.loading) return <Loading />;

    ///
    const { opinion = {} } = qOpinion.data;
    ///
    
    const onCancel = () => {
        onCompleted();
    }

    return <View

        ///
        opinion={opinion}
        ///
        onCancel={onCancel}
    />;
}

FormDetails.propTypes = {
    
    ///
    opinionId: PropTypes.number.isRequired,
    ///
    
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};

export default FormDetails;