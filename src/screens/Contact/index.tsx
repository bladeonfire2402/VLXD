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
import { MessageRequesDto } from '@/interface/message/interface';

const ContactData = {
  COMPANY_NAME: 'CÔNG TY TNHH MTV VẬT LIỆU XÂY DỰNG Anh Tuấn',
  HQ_TITLE: 'TRỤ SỞ CHÍNH',
  HQ_INFO: [
    {
      label: 'Địa chỉ:', value: 'Số 14, KP3, P. Hòa Lợi, TP. Bến Cát, Bình Dương'
    },
    { label: 'Điện thoại:', value: '0909 746 816' },
    { label: 'Email:', value: 'vlxdanhtuan79@gmail.com' },
    { label: 'Mã số doanh nghiệp:', value: '3702985730', normal: true },
    { label: 'Cấp ngày:', value: '03/06/2021', normal: true }
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
  MAP_SRC: 'https://maps.google.com/maps?q=11.0880687,106.6519615&t=&z=15&ie=UTF8&iwloc=&output=embed',
  MAP_TITLE: 'Google Map VLXD Anh Tuấn'
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formState, setFormState] = useState<MessageRequesDto>({
    name: '',
    email: '',
    phone: '',
    message: '',
    address: '',
  })

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
                <StyledInput type="text" placeholder={ContactData.PLACEHOLDERS.NAME} value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
              </InputGroup>

              <FormRow>
                <InputGroup>
                  <InputIconWrapper>
                    <Phone size={18} />
                  </InputIconWrapper>
                  <StyledInput type="text" placeholder={ContactData.PLACEHOLDERS.PHONE} value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                </InputGroup>
                <InputGroup>
                  <InputIconWrapper>
                    <Mail size={18} />
                  </InputIconWrapper>
                  <StyledInput type="email" placeholder={ContactData.PLACEHOLDERS.EMAIL} value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                </InputGroup>
              </FormRow>

              <InputGroup>
                <IconWrapperTop>
                  <PenLine size={18} />
                </IconWrapperTop>
                <StyledTextarea placeholder={ContactData.PLACEHOLDERS.MESSAGE} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
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
