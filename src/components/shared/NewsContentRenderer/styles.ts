import styled from 'styled-components';

export const ContentWrapper = styled.article`
  width: 100%;
  color: #334155;
  font-size: 1.125rem;
  line-height: 1.75;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #0F172A;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0F172A;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid #3B82F6;
    background-color: #F0F9FF;
    padding: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #1E293B;

    footer {
      margin-top: 0.75rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: #475569;
    }
  }

  figure {
    margin: 2.5rem 0;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    
    figcaption {
      text-align: center;
      font-size: 0.875rem;
      color: #64748B;
      margin-top: 0.75rem;
      font-style: italic;
    }
  }
`;

export const ProductEmbeddedWrapper = styled.div`
  margin: 2.5rem 0;
  padding: 1.5rem;
  background-color: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
`;

export const ProductEmbeddedTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 1rem;
`;
