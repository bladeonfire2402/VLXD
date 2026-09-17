"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MapPin, Phone, Search, ChevronDown } from "lucide-react";
import { AssetManagers } from "@/constants/assets";
import { MENU_ITEMS } from "@/constants/data";
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
  LOGO_SRC: AssetManagers.branding.logoWithSlogan,
  LOGO_ALT: "Anh Tuấn Logo",
  ADDRESS: "Số 14, KP3, P. Hòa Lợi, TP. Bến Cát, Bình Dương",
  HOTLINE: "0909 746 816",
  ADDRESS_TITLE: "Địa chỉ",
  HOTLINE_TITLE: "Hotline",
  SEARCH_PLACEHOLDER: "Tìm kiếm sản phẩm...",
};

export const DesktopHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`${RouteManager.SEARCH}?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Section */}
      <DesktopTop>
        <div className="header-container">
          <DesktopTopContent>
            <DesktopLogo href={RouteManager.HOME}>
              <Image
                src={DesktopHeaderData.LOGO_SRC}
                alt={DesktopHeaderData.LOGO_ALT}
                width={240}
                height={80}
                priority
              />
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </DesktopSearchInputContainer>
              <DesktopSearchIconBtn onClick={() => {
                if (isSearchOpen && searchQuery.trim()) {
                  router.push(`${RouteManager.SEARCH}?q=${encodeURIComponent(searchQuery.trim())}`);
                  setIsSearchOpen(false);
                } else {
                  setIsSearchOpen(!isSearchOpen);
                }
              }}>
                <Search size={20} />
              </DesktopSearchIconBtn>
            </DesktopSearchWrapper>
          </DesktopNavContainer>
        </div>
      </DesktopBottom>
    </>
  );
};
