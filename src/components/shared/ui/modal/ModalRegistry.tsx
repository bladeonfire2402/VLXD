import React from 'react';

// Import your modal components here
// import { ProductQuickView } from '@/components/ui/ProductQuickView';
// import { LoginForm } from '@/components/ui/LoginForm';

// Thêm component dùng tạm để test
const DemoModal: React.FC<{ title?: string }> = ({ title }) => (
  <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px' }}>
    <h2>{title || 'Demo Modal Component'}</h2>
    <p>Đây là nội dung component được truyền vào Layer 2.</p>
  </div>
);

export const MODAL_COMPONENTS: Record<string, React.ElementType> = {
  // PRODUCT_QUICK_VIEW: ProductQuickView,
  // LOGIN_FORM: LoginForm,
  DEMO_MODAL: DemoModal,
};
