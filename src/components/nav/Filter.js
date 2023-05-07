import React from "react";
import PropTypes from "prop-types";
import View from "components/nav/Filter.view";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";

function Filter(props){

    const { user=[], values=[], handleChange={}, handleModalToggle={} } = props;

    const reqCategory = useQuery(
        `{
            categories {
                name
            }
        }`
    );

    const reqBusiness = useQuery(
        `{
            companies{
                commonName
            }
        }`
    );

    if (reqCategory.loading) return <Loading/>;
    if (reqCategory.error) return "Error";

    const { categories=[] } = reqCategory.data;
    const { companies=[] } = reqBusiness.data;

    return <View 
             user={user}
             values={values}
             companies={companies}
             categories={categories}
             handleChange={handleChange}
             handleModalToggle={handleModalToggle}
            />;
    
}

Filter.propTypes = {
    user: PropTypes.object,
    values: PropTypes.array,
    handleChange: PropTypes.func,
    handleModalToggle: PropTypes.func
};

export default Filter;