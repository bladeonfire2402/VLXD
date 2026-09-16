import styled from 'styled-components';

export const ContactWrapper = styled.div`
  width: 100%;
  padding: var(--spacing-xl) 0 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #333333;
  margin-bottom: 10px;
`;

export const TitleDivider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const SquareIcon = styled.div`
  width: 8px;
  height: 8px;
  border: 2px solid #555555;
  margin-right: 10px;
`;

export const YellowLine = styled.div`
  height: 2px;
  width: 40px;
  background-color: var(--color-nav-active, #ffbc13);
`;

export const InfoGroup = styled.div`
  margin-bottom: 30px;
`;

export const InfoTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
  color: #555555;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: #333333;
    font-weight: 600;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const InputIconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888888;
  background-color: transparent;
  pointer-events: none;
`;

export const IconWrapperTop = styled(InputIconWrapper)`
  align-items: flex-start;
  padding-top: 15px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--color-nav-active, #ffbc13);
  }

  &::placeholder {
    color: #999999;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 0.9rem;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--color-nav-active, #ffbc13);
  }

  &::placeholder {
    color: #999999;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  background-color: var(--color-nav-active, #ffbc13);
  color: #ffffff;
  border: none;
  padding: 12px 30px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #e5a80f;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
