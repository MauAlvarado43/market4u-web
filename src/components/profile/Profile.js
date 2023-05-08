import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "components/profile/Profile.view";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";

function Profile() {

  const reqUsers = useQuery(
    `{
      users {
        type
        photo{
          id
          url
        }
        company{
          id
          photo{
            url
          }
        }
      }
    }`,
    "id = " + sessionStorage.getItem('id')
  );

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "Error";

  const { users } = reqUsers.data;

  return <View
    users={users}
  />;
}

Profile.propTypes = {
  user: PropTypes.object
};

export default Profile;