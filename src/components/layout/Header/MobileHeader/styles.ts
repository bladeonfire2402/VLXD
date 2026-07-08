import styled from "styled-components";
import Link from "next/link";

export const MobileHeaderWrapper = styled.div`
  position: relative;
`;

export const MobileTop = styled.div`
  background-color: #ffffff;
  width: 100%;
`;

export const MobileTopContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const MobileLogo = styled(Link)`
  img {
    height: 50px;
    width: auto;
    object-fit: contain;
  }
`;

export const MobileBottom = styled.div`
  background-color: var(--color-nav-bg, #1a1a1a);
`;

export const MobileNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
`;

export const MobileIconBtn = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const MobileAccordion = styled.div<{ $isOpen: boolean }>`
  background-color: #ffffff;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  border-top: 1px solid #eee;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 99;
`;

export const MobileMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MobileMenuItem = styled.li`
  border-bottom: 1px solid #eaeaea;
`;

export const MobileItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileMenuLink = styled(Link)<{ $isActive?: boolean }>`
  padding: 15px 20px;
  color: ${({ $isActive }) => ($isActive ? "var(--color-nav-active, #ffbc13)" : "#333333")};
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  flex: 1;
`;

export const MobileToggleBtn = styled.button`
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  border-radius: 2px;
`;

export const MobileSubmenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  background-color: #fafafa;
  border-top: 1px solid #eaeaea;
`;

export const MobileSubmenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MobileSubmenuItem = styled.li`
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    border-bottom: none;
  }
`;

export const MobileSubmenuLink = styled(Link)`
  display: block;
  padding: 12px 20px 12px 35px;
  color: #555555;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: var(--color-nav-active, #ffbc13);
  }
`;
