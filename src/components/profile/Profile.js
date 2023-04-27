import React from "react";
import PropTypes from "prop-types";
import View from "components/profile/Profile.view";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";

function Profile(props) {

  const { user_id } = props;

  const reqUsers = useQuery(
    `{
      users {
        id
        firstName
        lastName
        email
        address
        type
        photo{
          id
          url
        }
        company{
          id
        }
      }
    }`,
  );

  if(reqUsers.loading) return <Loading/>;
  if(reqUsers.error) return "Error";

  const { users } = reqUsers.data;

  console.log(users)

  return <View />;
}

Profile.propTypes = {};

export default Profile;