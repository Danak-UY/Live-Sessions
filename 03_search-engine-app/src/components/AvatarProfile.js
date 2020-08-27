import React, { useState, useEffect } from "react";
import { useStateValue } from "./../components/StateProvider";
import { actionTypes } from "./../reducer";
import { Button, Avatar, Tooltip } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

function AvatarProfile() {
  const [{ avatarProfiles }, dispatch] = useStateValue();
  const [usersList, setUsersList] = useState(avatarProfiles);

  useEffect(() => {
    if (usersList.length === 0) getUserInfo();
  }, []);

  async function getUserInfo() {
    await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        const userData = {
          username: user.login.username,
          photo: user.picture.thumbnail,
        };
        dispatch({
          type: actionTypes.SET_USER_DATA,
          payload: userData,
        });
        setUsersList([...usersList, userData]);
      });
  }

  function addUser() {
    getUserInfo();
  }

  return (
    <>
      <Avatar.Group
        maxCount={4}
        maxStyle={{
          backgroundColor: "var(--cl-primary)",
          fontWeight: "600",
        }}
      >
        {usersList.length !== 0 ? (
          usersList.map((user, index) => (
            <Tooltip title={user.username} placement="bottom" key={index}>
              <Avatar src={user.photo} />
            </Tooltip>
          ))
        ) : (
          <Avatar
            style={{
              backgroundColor: "var(--cl-primary)",
              fontWeight: "600",
            }}
          >
            DK
          </Avatar>
        )}
      </Avatar.Group>
      <Button
        type="link"
        shape="circle"
        icon={<PlusCircleFilled />}
        size="default"
        style={{ color: "var(--cl-white)" }}
        onClick={addUser}
      />
    </>
  );
}

export default AvatarProfile;
