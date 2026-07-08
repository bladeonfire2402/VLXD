"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Menu, Plus, Minus } from "lucide-react";
import { AssetManager } from "@/lib/AssetManager";
import { MENU_ITEMS } from "@/lib/constants";
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

export const MobileHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
            <MobileLogo href="/">
              <img src={AssetManager.logo} alt="Tu Thanh Phat Logo" />
            </MobileLogo>
          </MobileTopContent>
        </div>
      </MobileTop>

      {/* Bottom Section */}
      <MobileBottom>
        <div className="header-container">
          <MobileNavContainer>
            <MobileIconBtn onClick={toggleMenu} aria-label="Toggle Menu">
              <Menu size={24} />
            </MobileIconBtn>
            <MobileIconBtn>
              <Search size={20} />
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
        </MobileMenuList>
      </MobileAccordion>
    </MobileHeaderWrapper>
  );
};
