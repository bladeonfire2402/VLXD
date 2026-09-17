import React from 'react';
import { ContentBlock } from '@/interface/news/news';
import { ContentWrapper, ProductEmbeddedWrapper, ProductEmbeddedTitle } from './styles';

interface NewsContentRendererProps {
  blocks: ContentBlock[];
}

const NewsContentRenderer: React.FC<NewsContentRendererProps> = ({ blocks }) => {
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );

      case 'heading':
        const HeadingTag = `h${block.level}` as React.ElementType;
        return (
          <HeadingTag key={index}>
            {block.content}
          </HeadingTag>
        );

      case 'image':
        return (
          <figure key={index}>
            <img
              src={block.url}
              alt={block.alt || 'Article image'}
              loading="lazy"
            />
            {block.caption && (
              <figcaption>
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'list':
        const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={index}>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );

      case 'quote':
        return (
          <blockquote key={index}>
            "{block.content}"
            {block.author && (
              <footer>
                — {block.author}
              </footer>
            )}
          </blockquote>
        );

      case 'product_embedded':
        // Placeholder for product cards
        return (
          <ProductEmbeddedWrapper key={index}>
            <ProductEmbeddedTitle>Sản phẩm gợi ý:</ProductEmbeddedTitle>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {block.productIds.map(id => (
                <div key={id} style={{ padding: '0.5rem 1rem', background: 'white', borderRadius: '4px', border: '1px solid #ddd' }}>
                  Product ID: {id}
                </div>
              ))}
            </div>
          </ProductEmbeddedWrapper>
        );

      default:
        console.warn(`Unsupported block type found`);
        return null;
    }
  };

  return (
    <ContentWrapper>
      {blocks.map((block, index) => renderBlock(block, index))}
    </ContentWrapper>
  );
};

export default NewsContentRenderer;
