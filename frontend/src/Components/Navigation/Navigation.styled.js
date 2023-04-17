import styled from "styled-components";

export const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;
export const UserContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  padding: 0.2rem;
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
`;

export const Username = styled.h2`
  color: rgba(34, 34, 96, 1);
`;

export const Subtitle = styled.p`
  color: rgba(34, 34, 96, 0.6);
`;

export const TextContainer = styled.div``;

export const MenuItems = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  i {
    color: rgba(34, 34, 96, 0.6);
    font-size: 1.4rem;
    transition: all 0.4s ease-in-out;
  }
`;

export const MenuItem = styled.li`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  margin: 0.6rem 0;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  color: rgba(34, 34, 96, 0.6);
  padding-left: 1rem;
  position: relative;
`;

export const BottomNav = styled.div``;

export const SignOut = styled.li``;
