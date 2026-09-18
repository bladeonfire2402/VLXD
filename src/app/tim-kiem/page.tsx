"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SearchScreen from '@/screens/Search';
import { searchProducts } from '@/utils/productUtils';

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const products = searchProducts(q);

  return <SearchScreen keyword={q} products={products} />;
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <SearchContent />
    </Suspense>
  );
}
