import React from "react";
import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menuItems";
import avatar from "../../img/avatar.png";
import {
  Avatar,
  BottomNav,
  MenuItem,
  MenuItems,
  NavStyled,
  SignOut,
  Subtitle,
  TextContainer,
  UserContainer,
  Username,
} from "./Navigation.styled";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <UserContainer>
        <Avatar src={avatar} />
        <TextContainer>
          <Username>John</Username>
          <Subtitle>wick</Subtitle>
        </TextContainer>
      </UserContainer>
      <MenuItems>
        {menuItems.map((item) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => setActive(item.id)}
              isActive={active === item.id}
            >
              {item.icon}
              <span>{item.title}</span>
            </MenuItem>
          );
        })}
      </MenuItems>
      <BottomNav>
        <SignOut>{signout} SignOut</SignOut>
      </BottomNav>
    </NavStyled>
  );
}

export default Navigation;
