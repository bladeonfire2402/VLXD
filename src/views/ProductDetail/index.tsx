"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { User, Phone, Mail, PenLine, MessageCircle } from 'lucide-react';
import { Product } from '@/types/product';
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
      toast.success('Đặt hàng thành công! Chúng tôi sẽ liên hệ lại sớm nhất.');
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
          <ProductPrice>{product.price || 'Liên hệ'}</ProductPrice>
          <ProductDescription>
            Anh Tuấn luôn là địa chỉ cung cấp {product.name.toLowerCase()} của mọi công trình,
            nhận đơn đặt hàng theo hợp đồng, phân phối cho mọi công trình lớn nhỏ.
          </ProductDescription>
          <ContactButton onClick={() => setActiveTab('order')}>
            Liên hệ đặt hàng
          </ContactButton>
        </ProductInfo>
      </HeroGrid>

      {/* ===== TABS ===== */}
      <TabsWrapper>
        <TabsHeader>
          <TabButton $active={activeTab === 'info'} onClick={() => setActiveTab('info')}>
            Thông tin sản phẩm
          </TabButton>
          <TabButton $active={activeTab === 'order'} onClick={() => setActiveTab('order')}>
            Đặt hàng
          </TabButton>
        </TabsHeader>

        {activeTab === 'info' && (
          <TabContent>
            <p>{product.details}</p>

            {/* Company Card */}
            <CompanyCard>
              <CompanyInfo>
                <strong>MUA BÁN VẬT LIỆU XÂY DỰNG</strong>
                <span>Địa chỉ: 71/3 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM</span>
                <span>Tel: 0909 553 750 - 0911 702 879</span>
                <span>Email: vlxdtanphu2026@gmail.com</span>
                <a href="https://muabanvatlieuixaydung.com" target="_blank" rel="noopener noreferrer">
                  Website: muabanvatlieuxaydung.com
                </a>
              </CompanyInfo>
            </CompanyCard>

            {/* Tags */}
            {product.tags.length > 0 && (
              <TagsSection>
                <TagsTitle>Tags</TagsTitle>
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
                <QuickContactTitle>LIÊN HỆ NHANH</QuickContactTitle>
                <QuickContactItem>
                  <MessageCircle size={20} />
                  <span>Chat online</span>
                </QuickContactItem>
                <QuickContactItem>
                  <Phone size={20} />
                  <span>0909 553 750</span>
                </QuickContactItem>
                <QuickContactItem>
                  <Mail size={20} />
                  <span>0911 702 879</span>
                </QuickContactItem>
              </QuickContactSection>

              {/* Right: Order Form */}
              <OrderFormSection>
                <OrderFormTitle>ĐẶT HÀNG ONLINE</OrderFormTitle>
                <OrderInputGroup>
                  <OrderInputIcon><User size={16} /></OrderInputIcon>
                  <OrderInput type="text" placeholder="Họ tên *" />
                </OrderInputGroup>
                <OrderFormRow>
                  <OrderInputGroup>
                    <OrderInputIcon><Phone size={16} /></OrderInputIcon>
                    <OrderInput type="text" placeholder="Điện thoại *" />
                  </OrderInputGroup>
                  <OrderInputGroup>
                    <OrderInputIcon><Mail size={16} /></OrderInputIcon>
                    <OrderInput type="email" placeholder="Email" />
                  </OrderInputGroup>
                </OrderFormRow>
                <OrderInputGroup>
                  <OrderInputIconTop><PenLine size={16} /></OrderInputIconTop>
                  <OrderTextarea placeholder="Lời nhắn *" />
                </OrderInputGroup>
                <OrderSubmitButton
                  type="button"
                  onClick={handleOrder}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Đang gửi...' : 'Đặt hàng'}
                </OrderSubmitButton>
              </OrderFormSection>
            </OrderGrid>
          </TabContent>
        )}
      </TabsWrapper>

      {/* ===== RELATED PRODUCTS ===== */}
      {relatedProducts.length > 0 && (
        <RelatedSection>
          <SectionTitle title="SẢN PHẨM LIÊN QUAN" />
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
