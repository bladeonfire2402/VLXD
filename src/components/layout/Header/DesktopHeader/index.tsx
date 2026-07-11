"use client";

import { usePathname } from "next/navigation";
import { MapPin, Phone, Search, ChevronDown } from "lucide-react";
import { AssetManager } from "@/lib/AssetManager";
import { MENU_ITEMS } from "@/lib/constants";
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
  DesktopSearch,
} from "./styles";

const content = {
  logo: AssetManager.logo,
  address: "251,",
  hotline: "0909 553 750",
  addressTitle: "Địa chỉ",
  hotlineTitle: "Hotline",
};

export const DesktopHeader = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Top Section */}
      <DesktopTop>
        <div className="header-container">
          <DesktopTopContent>
            <DesktopLogo href="/">
              <img src={content.logo} alt="Tu Thanh Phat Logo" />
            </DesktopLogo>

            <DesktopInfo>
              <InfoItem>
                <InfoIcon>
                  <MapPin size={24} />
                </InfoIcon>
                <InfoText>
                  <InfoLabel>{content.addressTitle}</InfoLabel>
                  <InfoValue>{content.address}</InfoValue>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <InfoIcon>
                  <Phone size={24} />
                </InfoIcon>
                <InfoText>
                  <InfoLabel>{content.hotlineTitle}</InfoLabel>
                  <InfoValue>{content.hotline}</InfoValue>
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

            <DesktopSearch>
              <Search size={20} />
            </DesktopSearch>
          </DesktopNavContainer>
        </div>
      </DesktopBottom>
    </>
  );
};
