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

const ContactData = {
  COMPANY_NAME: 'CÔNG TY TNHH MTV VẬT LIỆU XÂY DỰNG Anh Tuấn',
  HQ_TITLE: 'TRỤ SỞ CHÍNH',
  HQ_INFO: [
    { label: 'Địa chỉ:', value: '71/3 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM' },
    { label: 'Điện thoại:', value: '(028) 3812 4464' },
    { label: 'Tư vấn bán hàng:', value: '0909 746 816' },
    { label: 'Mã số thuế:', value: '0309758550', normal: true },
    { label: 'Cấp ngày:', value: '26/01/2010 tại TP.HCM', normal: true }
  ],
  WAREHOUSE_TITLE: 'KHO HÀNG',
  WAREHOUSE_INFO: [
    { label: 'Địa chỉ:', value: '71/3 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM' },
    { label: 'Tư vấn bán hàng:', value: '0909 746 816' },
    { label: 'Tư vấn bán hàng:', value: '0911 702 879' },
    { label: 'Tư vấn qua Zalo:', value: '0911 702 879' }
  ],
  FORM_TITLE: 'GỬI LỜI NHẮN',
  PLACEHOLDERS: {
    NAME: 'Họ tên *',
    PHONE: 'Điện thoại *',
    EMAIL: 'Email',
    MESSAGE: 'Lời nhắn *'
  },
  BTN_SUBMIT: 'GỬI',
  BTN_SUBMITTING: 'ĐANG GỬI...',
  SUCCESS_MSG: 'Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm nhất.',
  MAP_SRC: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.623456789!3d10.8012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzA0LjQiTiAxMDbCsDM3JzI0LjQiRQ!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s',
  MAP_TITLE: 'Google Map VLXD Anh Tuấn'
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(ContactData.SUCCESS_MSG);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <ContactWrapper>
      <Container>
        <Grid>
          {/* Left Column: Company Info */}
          <Column>
            <SectionTitle>{ContactData.COMPANY_NAME}</SectionTitle>
            <TitleDivider>
              <SquareIcon />
              <YellowLine />
            </TitleDivider>

            <InfoGroup>
              <InfoTitle>{ContactData.HQ_TITLE}</InfoTitle>
              <InfoList>
                {ContactData.HQ_INFO.map((info, idx) => (
                  <InfoItem key={idx}>
                    {info.label} {info.normal ? info.value : <strong>{info.value}</strong>}
                  </InfoItem>
                ))}
              </InfoList>
            </InfoGroup>

            <InfoGroup>
              <InfoTitle>{ContactData.WAREHOUSE_TITLE}</InfoTitle>
              <InfoList>
                {ContactData.WAREHOUSE_INFO.map((info, idx) => (
                  <InfoItem key={idx}>
                    {info.label} <strong>{info.value}</strong>
                  </InfoItem>
                ))}
              </InfoList>
            </InfoGroup>
          </Column>

          {/* Right Column: Contact Form */}
          <Column>
            <SectionTitle>{ContactData.FORM_TITLE}</SectionTitle>
            <TitleDivider>
              <SquareIcon />
              <YellowLine />
            </TitleDivider>

            <FormWrapper>
              <InputGroup>
                <InputIconWrapper>
                  <User size={18} />
                </InputIconWrapper>
                <StyledInput type="text" placeholder={ContactData.PLACEHOLDERS.NAME} />
              </InputGroup>

              <FormRow>
                <InputGroup>
                  <InputIconWrapper>
                    <Phone size={18} />
                  </InputIconWrapper>
                  <StyledInput type="text" placeholder={ContactData.PLACEHOLDERS.PHONE} />
                </InputGroup>
                <InputGroup>
                  <InputIconWrapper>
                    <Mail size={18} />
                  </InputIconWrapper>
                  <StyledInput type="email" placeholder={ContactData.PLACEHOLDERS.EMAIL} />
                </InputGroup>
              </FormRow>

              <InputGroup>
                <IconWrapperTop>
                  <PenLine size={18} />
                </IconWrapperTop>
                <StyledTextarea placeholder={ContactData.PLACEHOLDERS.MESSAGE} />
              </InputGroup>

              <SubmitButton
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? ContactData.BTN_SUBMITTING : ContactData.BTN_SUBMIT}
              </SubmitButton>
            </FormWrapper>
          </Column>
        </Grid>
      </Container>

      {/* Full width Map */}
      <MapContainer>
        <iframe
          src={ContactData.MAP_SRC}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={ContactData.MAP_TITLE}
        />
      </MapContainer>
    </ContactWrapper>
  );
};

export default ContactPage;
