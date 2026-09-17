"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, Menu, Plus, Minus } from "lucide-react";
import { AssetManagers } from "@/constants/assets";
import { MENU_ITEMS } from "@/constants/data";
import { RouteManager } from "@/constants/route";
import {
  MobileHeaderWrapper,
  MobileTop,
  MobileTopContent,
  MobileLogo,
  MobileBottom,
  MobileNavContainer,
  MobileIconBtn,
  MobileAccordion,
  MobileMenuList,
  MobileMenuItem,
  MobileItemHeader,
  MobileMenuLink,
  MobileToggleBtn,
  MobileSubmenu,
  MobileSubmenuList,
  MobileSubmenuItem,
  MobileSubmenuLink,
} from "./styles";

const MobileHeaderData = {
  LOGO_SRC: AssetManagers.branding.logoWithSlogan,
  LOGO_ALT: "Tu Thanh Phat Logo",
  MENU_ARIA_LABEL: "Toggle Menu",
  SEARCH_LABEL: "Tìm kiếm",
  SEARCH_PLACEHOLDER: "Tìm kiếm sản phẩm...",
};

export const MobileHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`${RouteManager.SEARCH}?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
      setExpandedItem(null);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (label: string) => {
    if (expandedItem === label) {
      setExpandedItem(null);
    } else {
      setExpandedItem(label);
    }
  };

  return (
    <MobileHeaderWrapper>
      {/* Top Section */}
      <MobileTop>
        <div className="header-container">
          <MobileTopContent>
            <MobileLogo href={RouteManager.HOME}>
              <Image
                src={MobileHeaderData.LOGO_SRC}
                alt={MobileHeaderData.LOGO_ALT}
                width={150}
                height={50}
                priority
              />
            </MobileLogo>
          </MobileTopContent>
        </div>
      </MobileTop>

      {/* Bottom Section */}
      <MobileBottom>
        <div className="header-container">
          <MobileNavContainer>
            <MobileIconBtn onClick={toggleMenu} aria-label={MobileHeaderData.MENU_ARIA_LABEL}>
              <Menu size={24} />
            </MobileIconBtn>
          </MobileNavContainer>
        </div>
      </MobileBottom>

      {/* Accordion Menu */}
      <MobileAccordion $isOpen={isMenuOpen}>
        <MobileMenuList>
          {MENU_ITEMS.map((item, index) => {
            const isActive = pathname === item.url || (item.url !== '/' && pathname?.startsWith(item.url));
            const isExpanded = expandedItem === item.label;

            return (
              <MobileMenuItem key={index}>
                <MobileItemHeader>
                  <MobileMenuLink
                    href={item.url}
                    $isActive={isActive}
                    onClick={() => !item.children && setIsMenuOpen(false)}
                  >
                    {item.label}
                  </MobileMenuLink>

                  {item.children && (
                    <MobileToggleBtn
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(item.label);
                      }}
                    >
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </MobileToggleBtn>
                  )}
                </MobileItemHeader>

                {item.children && (
                  <MobileSubmenu $isOpen={isExpanded}>
                    <MobileSubmenuList>
                      {item.children.map((child, idx) => (
                        <MobileSubmenuItem key={idx}>
                          <MobileSubmenuLink
                            href={child.url}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </MobileSubmenuLink>
                        </MobileSubmenuItem>
                      ))}
                    </MobileSubmenuList>

                  </MobileSubmenu>
                )}

              </MobileMenuItem>
            );
          })}

          <MobileMenuItem>
            <MobileItemHeader>
              <MobileMenuLink
                href="#"
                $isActive={false}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu('search');
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Search size={18} />
                {MobileHeaderData.SEARCH_LABEL}
              </MobileMenuLink>
              <MobileToggleBtn
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu('search');
                }}
              >
                {expandedItem === 'search' ? <Minus size={16} /> : <Plus size={16} />}
              </MobileToggleBtn>
            </MobileItemHeader>
            <MobileSubmenu $isOpen={expandedItem === 'search'}>
              <MobileSubmenuList style={{ padding: '15px' }}>
                <input
                  type="text"
                  placeholder={MobileHeaderData.SEARCH_PLACEHOLDER}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    outline: 'none',
                    fontSize: '14px'
                  }}
                />
              </MobileSubmenuList>
            </MobileSubmenu>
          </MobileMenuItem>
        </MobileMenuList>
      </MobileAccordion>
    </MobileHeaderWrapper>
  );
};
