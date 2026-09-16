"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Search, ChevronDown } from "lucide-react";
import { AssetManager } from "@/lib/AssetManager";
import { MENU_ITEMS } from "@/lib/constants";
import { RouteManager } from "@/constants/route";
import {
  DesktopTop,
  DesktopTopContent,
  DesktopLogo,
  DesktopInfo,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoLabel,
  InfoValue,
  DesktopBottom,
  DesktopNavContainer,
  DesktopNavList,
  DesktopNavItem,
  DesktopNavLink,
  DesktopDropdown,
  DesktopDropdownList,
  DesktopDropdownItem,
  DesktopDropdownLink,
  DesktopSearchWrapper,
  DesktopSearchInputContainer,
  DesktopSearchInput,
  DesktopSearchIconBtn,
} from "./styles";

const DesktopHeaderData = {
  LOGO_SRC: AssetManager.logo,
  LOGO_ALT: "Anh Tuấn Logo",
  ADDRESS: "Số 14, KP3, P. Hòa Lợi, TP. Bến Cát, Bình Dương",
  HOTLINE: "0909 746 816",
  ADDRESS_TITLE: "Địa chỉ",
  HOTLINE_TITLE: "Hotline",
  SEARCH_PLACEHOLDER: "Tìm kiếm sản phẩm...",
};

export const DesktopHeader = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Top Section */}
      <DesktopTop>
        <div className="header-container">
          <DesktopTopContent>
            <DesktopLogo href={RouteManager.HOME}>
              <img src={DesktopHeaderData.LOGO_SRC} alt={DesktopHeaderData.LOGO_ALT} />
            </DesktopLogo>

            <DesktopInfo>
              <InfoItem>
                <InfoIcon>
                  <MapPin size={24} />
                </InfoIcon>
                <InfoText>
                  <InfoLabel>{DesktopHeaderData.ADDRESS_TITLE}</InfoLabel>
                  <InfoValue>{DesktopHeaderData.ADDRESS}</InfoValue>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <InfoIcon>
                  <Phone size={24} />
                </InfoIcon>
                <InfoText>
                  <InfoLabel>{DesktopHeaderData.HOTLINE_TITLE}</InfoLabel>
                  <InfoValue>{DesktopHeaderData.HOTLINE}</InfoValue>
                </InfoText>
              </InfoItem>
            </DesktopInfo>
          </DesktopTopContent>
        </div>
      </DesktopTop>

      {/* Bottom Section */}
      <DesktopBottom>
        <div className="header-container">
          <DesktopNavContainer>
            <DesktopNavList>
              {MENU_ITEMS.map((item, index) => {
                const isActive = pathname === item.url || (item.url !== '/' && pathname?.startsWith(item.url));

                return (
                  <DesktopNavItem key={index}>
                    <DesktopNavLink
                      href={item.url}
                      $isActive={isActive}
                    >
                      {item.label}
                      {item.children && <ChevronDown size={16} />}
                    </DesktopNavLink>

                    {item.children && (
                      <DesktopDropdown>
                        <DesktopDropdownList>
                          {item.children.map((child, idx) => (
                            <DesktopDropdownItem key={idx}>
                              <DesktopDropdownLink href={child.url}>
                                {child.label}
                              </DesktopDropdownLink>
                            </DesktopDropdownItem>
                          ))}
                        </DesktopDropdownList>
                      </DesktopDropdown>
                    )}
                  </DesktopNavItem>
                );
              })}
            </DesktopNavList>

            <DesktopSearchWrapper>
              <DesktopSearchInputContainer $isOpen={isSearchOpen}>
                <DesktopSearchInput
                  type="text"
                  placeholder={DesktopHeaderData.SEARCH_PLACEHOLDER}
                />
              </DesktopSearchInputContainer>
              <DesktopSearchIconBtn onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search size={20} />
              </DesktopSearchIconBtn>
            </DesktopSearchWrapper>
          </DesktopNavContainer>
        </div>
      </DesktopBottom>
    </>
  );
};
