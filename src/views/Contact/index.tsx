"use client";

import React, { useState } from 'react';
import { User, Phone, Mail, PenLine } from 'lucide-react';
import { toast } from 'react-toastify';
import {
  ContactWrapper,
  Container,
  Grid,
  Column,
  SectionTitle,
  TitleDivider,
  SquareIcon,
  YellowLine,
  InfoGroup,
  InfoTitle,
  InfoList,
  InfoItem,
  FormWrapper,
  InputGroup,
  InputIconWrapper,
  IconWrapperTop,
  StyledInput,
  StyledTextarea,
  FormRow,
  SubmitButton,
  MapContainer
} from './styles';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm nhất.');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <ContactWrapper>
      <Container>
        <Grid>
          {/* Left Column: Company Info */}
          <Column>
            <SectionTitle>CÔNG TY TNHH MTV VẬT LIỆU XÂY DỰNG TƯ THÀNH PHÁT</SectionTitle>
            <TitleDivider>
              <SquareIcon />
              <YellowLine />
            </TitleDivider>

            <InfoGroup>
              <InfoTitle>TRỤ SỞ CHÍNH</InfoTitle>
              <InfoList>
                <InfoItem>
                  Địa chỉ: <strong>71/3 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM</strong>
                </InfoItem>
                <InfoItem>
                  Điện thoại: <strong>(028) 3812 4464</strong>
                </InfoItem>
                <InfoItem>
                  Tư vấn bán hàng: <strong>0909 553 750</strong>
                </InfoItem>
                <InfoItem>
                  Mã số thuế: 0309758550
                </InfoItem>
                <InfoItem>
                  Cấp ngày: 26/01/2010 tại TP.HCM
                </InfoItem>
              </InfoList>
            </InfoGroup>

            <InfoGroup>
              <InfoTitle>KHO HÀNG</InfoTitle>
              <InfoList>
                <InfoItem>
                  Địa chỉ: <strong>71/3 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM</strong>
                </InfoItem>
                <InfoItem>
                  Tư vấn bán hàng: <strong>0909 553 750</strong>
                </InfoItem>
                <InfoItem>
                  Tư vấn bán hàng: <strong>0911 702 879</strong>
                </InfoItem>
                <InfoItem>
                  Tư vấn qua Zalo: <strong>0911 702 879</strong>
                </InfoItem>
              </InfoList>
            </InfoGroup>
          </Column>

          {/* Right Column: Contact Form */}
          <Column>
            <SectionTitle>GỬI LỜI NHẮN</SectionTitle>
            <TitleDivider>
              <SquareIcon />
              <YellowLine />
            </TitleDivider>

            <FormWrapper>
              <InputGroup>
                <InputIconWrapper>
                  <User size={18} />
                </InputIconWrapper>
                <StyledInput type="text" placeholder="Họ tên *" />
              </InputGroup>

              <FormRow>
                <InputGroup>
                  <InputIconWrapper>
                    <Phone size={18} />
                  </InputIconWrapper>
                  <StyledInput type="text" placeholder="Điện thoại *" />
                </InputGroup>
                <InputGroup>
                  <InputIconWrapper>
                    <Mail size={18} />
                  </InputIconWrapper>
                  <StyledInput type="email" placeholder="Email" />
                </InputGroup>
              </FormRow>

              <InputGroup>
                <IconWrapperTop>
                  <PenLine size={18} />
                </IconWrapperTop>
                <StyledTextarea placeholder="Lời nhắn *" />
              </InputGroup>

              <SubmitButton 
                type="button" 
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? 'ĐANG GỬI...' : 'GỬI'}
              </SubmitButton>
            </FormWrapper>
          </Column>
        </Grid>
      </Container>

      {/* Full width Map */}
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.623456789!3d10.8012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzA0LjQiTiAxMDbCsDM3JzI0LjQiRQ!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map VLXD Tư Thành Phát"
        />
      </MapContainer>
    </ContactWrapper>
  );
};

export default ContactPage;
