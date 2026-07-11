import styled, { keyframes, css } from "styled-components";

// Types for props
export type SocialMediaPosition =
  | "bottom left"
  | "bottom right"
  | "middle left"
  | "middle right"
  | "bottom-left"
  | "bottom-right"
  | "middle-left"
  | "middle-right";

interface ContainerProps {
  $position: SocialMediaPosition;
}

// Keyframes for animations
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(30, 136, 229, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(30, 136, 229, 0);
  }
`;

const getPositionStyles = (position: SocialMediaPosition) => {
  const pos = position.toLowerCase().replace(" ", "-");
  switch (pos) {
    case "bottom-left":
      return css`
        bottom: 24px;
        left: 24px;
      `;
    case "bottom-right":
      return css`
        bottom: 24px;
        right: 24px;
      `;
    case "middle-left":
      return css`
        top: 50%;
        transform: translateY(-50%);
        left: 24px;
      `;
    case "middle-right":
    default:
      return css`
        top: 50%;
        transform: translateY(-50%);
        right: 24px;
      `;
  }
};

export const SocialMediaBarContainer = styled.div<ContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 9999;
  padding: 12px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $position }) => getPositionStyles($position)}

  @media (max-width: 768px) {
    gap: 12px;
    padding: 8px;
    border-radius: 24px;
    
    // Adjust bottom positioning for mobile devices to not overlap native bottom navigations
    ${({ $position }) => {
      const pos = $position.toLowerCase().replace(" ", "-");
      if (pos.startsWith("bottom")) {
        return css`
          bottom: 16px;
        `;
      }
      return "";
    }}
  }
`;

export const SocialMediaItem = styled.a<{ $bgColor: string; $isPhone?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;

  ${({ $isPhone }) =>
    $isPhone &&
    css`
      animation: ${pulse} 2s infinite;
    `}

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  span.zalo-text {
    font-weight: 800;
    font-size: 14px;
    letter-spacing: -0.5px;
    text-transform: none;
    font-family: inherit;
  }

  &:hover {
    transform: scale(1.15) translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    filter: brightness(1.05);

    svg {
      transform: scale(1.1) rotate(10deg);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    svg {
      width: 20px;
      height: 20px;
    }

    span.zalo-text {
      font-size: 12px;
    }
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  background: #212529;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  /* Set position of tooltips based on side */
  ${({ theme }) => {
    // We can infer tooltip side by the outer container positioning
    return css`
      .left-aligned & {
        left: calc(100% + 10px);
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: transparent #212529 transparent transparent;
        }
      }
      .right-aligned & {
        right: calc(100% + 10px);
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent transparent #212529;
        }
      }
    `;
  }}

  ${SocialMediaItem}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
