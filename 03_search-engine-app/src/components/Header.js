import React, { useState, useEffect } from "react";
import { Button, Avatar, Tooltip } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import "../assets/styles/Header.css";

function Header() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUserPhoto();
  }, []);

  console.log(usersList);

  async function getUserPhoto() {
    await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        const userData = {
          username: user.login.username,
          photo: user.picture.thumbnail,
        };
        setUsersList([...usersList, userData]);
      });
  }

  function addUser() {
    getUserPhoto();
  }

  return (
    <div className="home__header">
      <header>
        <div className="header__links">
          <Button type="link">Mail</Button>
          <Button type="link">Maps</Button>
          <Button type="link">Calendar</Button>
        </div>
        {usersList.length !== 0 && (
          <div className="header__card">
            <Avatar.Group
              maxCount={4}
              maxStyle={{
                backgroundColor: "var(--cl-primary)",
                fontWeight: "600",
              }}
            >
              {usersList.map((user, index) => (
                <Tooltip title={user.username} placement="left" key={index}>
                  <Avatar src={user.photo} />
                </Tooltip>
              ))}
            </Avatar.Group>
            <Button
              type="text"
              shape="circle"
              icon={<PlusCircleFilled />}
              size="default"
              style={{ color: "var(--cl-white)" }}
              onClick={addUser}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
