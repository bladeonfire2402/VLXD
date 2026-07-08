import styled from "styled-components";

export const GlobalHeader = styled.header`
  width: 100%;

  .desktop-view {
    display: block;
  }
  .mobile-view {
    display: none;
  }

  @media (max-width: 991px) {
    .desktop-view {
      display: none;
    }
    .mobile-view {
      display: block;
    }
  }

  .header-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;
