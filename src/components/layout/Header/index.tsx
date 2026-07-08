"use client";

import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { GlobalHeader } from "./styles";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const Header = () => {
  return (
    <GlobalHeader>
      <div className="desktop-view">
        <DesktopHeader />
      </div>
      <div className="mobile-view">
        <MobileHeader />
      </div>

      <Breadcrumb />
    </GlobalHeader>
  );
};
