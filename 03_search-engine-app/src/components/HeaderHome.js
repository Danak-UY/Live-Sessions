import React, { useState, useEffect } from "react";
import { Button, Avatar, Tooltip } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "../assets/styles/HeaderHome.css";

function HeaderHome() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUserInfo();
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
        setUsersList([...usersList, userData]);
      });
  }

  function addUser() {
    getUserInfo();
  }

  return (
    <header>
      <div className="header__links">
        <Link to="/mail">
          <Button type="text">Mail</Button>
        </Link>
        <Link to="/maps">
          <Button type="text">Maps</Button>
        </Link>
        <Link to="/calendar">
          <Button type="text">Calendar</Button>
        </Link>
      </div>
      <div className="header__card">
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
      </div>
    </header>
  );
}

export default HeaderHome;
