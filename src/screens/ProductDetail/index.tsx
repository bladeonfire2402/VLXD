"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { User, Phone, Mail, PenLine, MessageCircle } from 'lucide-react';
import { Product } from '@/interface/product/product';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';
import {
  HeroGrid,
  GalleryWrapper,
  GalleryMain,
  GalleryMainImage,
  GalleryThumbnails,
  Thumbnail,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription,
  ContactButton,
  TabsWrapper,
  TabsHeader,
  TabButton,
  TabContent,
  CompanyCard,
  CompanyInfo,
  TagsSection,
  TagsTitle,
  TagList,
  Tag,
  OrderGrid,
  QuickContactSection,
  QuickContactTitle,
  QuickContactItem,
  OrderFormSection,
  OrderFormTitle,
  OrderInputGroup,
  OrderInputIcon,
  OrderInputIconTop,
  OrderInput,
  OrderTextarea,
  OrderFormRow,
  OrderSubmitButton,
  RelatedSection,
  RelatedGrid
} from './styles';

const ProductDetailData = {
  SUCCESS_MSG: 'Đặt hàng thành công! Chúng tôi sẽ liên hệ lại sớm nhất.',
  PRICE_CONTACT: 'Liên hệ',
  DESC_PREFIX: 'Anh Tuấn luôn là địa chỉ cung cấp',
  DESC_SUFFIX: 'của mọi công trình, nhận đơn đặt hàng theo hợp đồng, phân phối cho mọi công trình lớn nhỏ.',
  BTN_CONTACT_ORDER: 'Liên hệ đặt hàng',
  TAB_INFO: 'Thông tin sản phẩm',
  TAB_ORDER: 'Đặt hàng',
  COMPANY_INFO: {
    NAME: 'MUA BÁN VẬT LIỆU XÂY DỰNG',
    ADDRESS: 'Địa chỉ: Số 14, KP3, P. Hòa Lợi, TP. Bến Cát, Bình Dương',
    TEL: 'Tel: 0909 746 816',
    EMAIL: 'Email: vlxdanhtuan79@gmail.com',
    WEBSITE_URL: 'https://muabanvatlieuixaydung.com',
    WEBSITE_TEXT: 'Website: muabanvatlieuxaydung.com'
  },
  TAGS_TITLE: 'Tags',
  QUICK_CONTACT: {
    TITLE: 'LIÊN HỆ NHANH',
    CHAT: 'Chat online',
    PHONE1: '0909 746 816',
    PHONE2: '0911 702 879'
  },
  ORDER_FORM: {
    TITLE: 'ĐẶT HÀNG ONLINE',
    PLACEHOLDERS: {
      NAME: 'Họ tên *',
      PHONE: 'Điện thoại *',
      EMAIL: 'Email',
      MESSAGE: 'Lời nhắn *'
    },
    BTN_SUBMIT: 'Đặt hàng',
    BTN_SUBMITTING: 'Đang gửi...'
  },
  RELATED_TITLE: 'SẢN PHẨM LIÊN QUAN'
};

interface ProductDetailPageProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, relatedProducts }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'info' | 'order'>('info');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const allImages = product.images.length > 0 ? product.images : [product.thumbnail];

  const handleOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(ProductDetailData.SUCCESS_MSG);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <HeroGrid>
        <GalleryWrapper>
          <GalleryMain>
            <GalleryMainImage
              src={allImages[selectedImageIndex]}
              alt={product.name}
            />
          </GalleryMain>
          <GalleryThumbnails>
            {allImages.map((img, idx) => (
              <Thumbnail
                key={idx}
                src={img}
                alt={`${product.name} - ${idx + 1}`}
                $active={idx === selectedImageIndex}
                onClick={() => setSelectedImageIndex(idx)}
              />
            ))}
          </GalleryThumbnails>
        </GalleryWrapper>

        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price || ProductDetailData.PRICE_CONTACT}</ProductPrice>
          <ProductDescription>
            {ProductDetailData.DESC_PREFIX} {product.name.toLowerCase()} {ProductDetailData.DESC_SUFFIX}
          </ProductDescription>
          <ContactButton onClick={() => setActiveTab('order')}>
            {ProductDetailData.BTN_CONTACT_ORDER}
          </ContactButton>
        </ProductInfo>
      </HeroGrid>

      {/* ===== TABS ===== */}
      <TabsWrapper>
        <TabsHeader>
          <TabButton $active={activeTab === 'info'} onClick={() => setActiveTab('info')}>
            {ProductDetailData.TAB_INFO}
          </TabButton>
          <TabButton $active={activeTab === 'order'} onClick={() => setActiveTab('order')}>
            {ProductDetailData.TAB_ORDER}
          </TabButton>
        </TabsHeader>

        {activeTab === 'info' && (
          <TabContent>
            <p>{product.details}</p>

            {/* Company Card */}
            <CompanyCard>
              <CompanyInfo>
                <strong>{ProductDetailData.COMPANY_INFO.NAME}</strong>
                <span>{ProductDetailData.COMPANY_INFO.ADDRESS}</span>
                <span>{ProductDetailData.COMPANY_INFO.TEL}</span>
                <span>{ProductDetailData.COMPANY_INFO.EMAIL}</span>
              </CompanyInfo>
            </CompanyCard>

            {/* Tags */}
            {product.tags.length > 0 && (
              <TagsSection>
                <TagsTitle>{ProductDetailData.TAGS_TITLE}</TagsTitle>
                <TagList>
                  {product.tags.map((tag, idx) => (
                    <Tag key={idx} href="#">{tag}</Tag>
                  ))}
                </TagList>
              </TagsSection>
            )}
          </TabContent>
        )}

        {activeTab === 'order' && (
          <TabContent>
            <OrderGrid>
              {/* Left: Quick Contact */}
              <QuickContactSection>
                <QuickContactTitle>{ProductDetailData.QUICK_CONTACT.TITLE}</QuickContactTitle>
                <QuickContactItem>
                  <MessageCircle size={20} />
                  <span>{ProductDetailData.QUICK_CONTACT.CHAT}</span>
                </QuickContactItem>
                <QuickContactItem>
                  <Phone size={20} />
                  <span>{ProductDetailData.QUICK_CONTACT.PHONE1}</span>
                </QuickContactItem>
                <QuickContactItem>
                  <Mail size={20} />
                  <span>{ProductDetailData.QUICK_CONTACT.PHONE2}</span>
                </QuickContactItem>
              </QuickContactSection>

              {/* Right: Order Form */}
              <OrderFormSection>
                <OrderFormTitle>{ProductDetailData.ORDER_FORM.TITLE}</OrderFormTitle>
                <OrderInputGroup>
                  <OrderInputIcon><User size={16} /></OrderInputIcon>
                  <OrderInput type="text" placeholder={ProductDetailData.ORDER_FORM.PLACEHOLDERS.NAME} />
                </OrderInputGroup>
                <OrderFormRow>
                  <OrderInputGroup>
                    <OrderInputIcon><Phone size={16} /></OrderInputIcon>
                    <OrderInput type="text" placeholder={ProductDetailData.ORDER_FORM.PLACEHOLDERS.PHONE} />
                  </OrderInputGroup>
                  <OrderInputGroup>
                    <OrderInputIcon><Mail size={16} /></OrderInputIcon>
                    <OrderInput type="email" placeholder={ProductDetailData.ORDER_FORM.PLACEHOLDERS.EMAIL} />
                  </OrderInputGroup>
                </OrderFormRow>
                <OrderInputGroup>
                  <OrderInputIconTop><PenLine size={16} /></OrderInputIconTop>
                  <OrderTextarea placeholder={ProductDetailData.ORDER_FORM.PLACEHOLDERS.MESSAGE} />
                </OrderInputGroup>
                <OrderSubmitButton
                  type="button"
                  onClick={handleOrder}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? ProductDetailData.ORDER_FORM.BTN_SUBMITTING : ProductDetailData.ORDER_FORM.BTN_SUBMIT}
                </OrderSubmitButton>
              </OrderFormSection>
            </OrderGrid>
          </TabContent>
        )}
      </TabsWrapper>

      {/* ===== RELATED PRODUCTS ===== */}
      {relatedProducts.length > 0 && (
        <RelatedSection>
          <SectionTitle title={ProductDetailData.RELATED_TITLE} />
          <RelatedGrid>
            {relatedProducts.map((rp) => (
              <ProductCard
                key={rp.id}
                product={rp}
              />
            ))}
          </RelatedGrid>
        </RelatedSection>
      )}
    </>
  );
};

export default ProductDetailPage;
