import styled from "styled-components";
import Link from "next/link";

export const DesktopTop = styled.div`
  background-color: #ffffff;
  width: 100%;
`;

export const DesktopTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  width: 100%;
`;

export const DesktopLogo = styled(Link)`
  img {
    height: 80px;
    width: auto;
    object-fit: contain;
  }
`;

export const DesktopInfo = styled.div`
  display: flex;
  gap: 30px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoIcon = styled.div`
  color: var(--color-nav-active, #ffbc13);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoLabel = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #333;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  color: #555;
`;

export const DesktopBottom = styled.div`
  background-color: var(--color-nav-bg, #1a1a1a);
`;

export const DesktopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
`;

export const DesktopNavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DesktopDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  min-width: 250px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
  border-top: 3px solid var(--color-nav-active, #ffbc13);
`;

export const DesktopNavItem = styled.li`
  position: relative;
  display: flex;

  &:hover ${DesktopDropdown} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const DesktopNavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "var(--color-nav-active, #ffbc13)" : "#ffffff")};
  font-weight: 600;
  font-size: 14px;
  padding: 15px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-nav-active, #ffbc13);
  }
`;

export const DesktopSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-nav-active, #ffbc13);
  }
`;

export const DesktopDropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DesktopDropdownItem = styled.li`
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    border-bottom: none;
  }
`;

export const DesktopDropdownLink = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: #333333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
    color: var(--color-nav-active, #ffbc13);
    padding-left: 25px;
  }
`;
