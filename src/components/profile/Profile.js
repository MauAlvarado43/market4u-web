import React, {useState} from "react";
import PropTypes from "prop-types";
import View from "components/profile/Profile.view";
import { useQuery } from "seed/gql";
import { Loading } from "seed/helpers";

function Profile() {

  const [profileImg, setProfileImg] = useState("");

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

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
  };

  if(reqUsers.loading) return <Loading/>;
  if(reqUsers.error) return "Error";

  const { users } = reqUsers.data;

  return <View 
          users={users}
          profileImg={profileImg}
          handleImgChange={handleImgChange}
        />;
}

Profile.propTypes = {
  user: PropTypes.object
};

export default Profile;