"use client";

import React from "react";
import { Phone } from "lucide-react";
import {
  SocialMediaBarContainer,
  SocialMediaItem,
  Tooltip,
  SocialMediaPosition,
} from "./styles";

export interface SocialMediaBarProps {
  position?: SocialMediaPosition;
  phoneNumber?: string;
  zaloNumber?: string;
  youtubeUrl?: string;
  facebookUrl?: string;
}

export const SocialMediaBar: React.FC<SocialMediaBarProps> = ({
  position = "middle-right",
  phoneNumber = "0909553750",
  zaloNumber = "0909553750",
  youtubeUrl = "#",
  facebookUrl = "#",
}) => {
  // Determine tooltip orientation class
  const isLeft = position.toLowerCase().includes("left");
  const alignmentClass = isLeft ? "left-aligned" : "right-aligned";

  // Format phone number for tel link (remove spaces)
  const formattedPhone = phoneNumber.replace(/\s+/g, "");

  // Format Zalo link
  const formattedZalo = zaloNumber.replace(/\s+/g, "");
  const zaloLink = `https://zalo.me/${formattedZalo}`;

  return (
    <SocialMediaBarContainer $position={position} className={alignmentClass}>
      {/* Phone Button */}
      <SocialMediaItem
        href={`tel:${formattedPhone}`}
        $bgColor="#2585e5"
        $isPhone={true}
        aria-label="Gọi điện thoại"
      >
        <Phone fill="currentColor" />
        <Tooltip>Gọi hotline: {phoneNumber}</Tooltip>
      </SocialMediaItem>

      {/* Zalo Button */}
      <SocialMediaItem
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        $bgColor="#0068FF"
        aria-label="Chat Zalo"
      >
        <span className="zalo-text">Zalo</span>
        <Tooltip>Chat qua Zalo</Tooltip>
      </SocialMediaItem>

      {/* Youtube Button */}
      <SocialMediaItem
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        $bgColor="#FF0000"
        aria-label="Kênh Youtube"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.556a3.003 3.003 0 0 0 2.11-2.107C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        <Tooltip>Kênh Youtube</Tooltip>
      </SocialMediaItem>

      {/* Facebook Button */}
      <SocialMediaItem
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        $bgColor="#1877F2"
        aria-label="Trang Facebook"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
        <Tooltip>Trang Facebook</Tooltip>
      </SocialMediaItem>
    </SocialMediaBarContainer>
  );
};

export default SocialMediaBar;
