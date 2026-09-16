import { NewsArticle } from '../types/news';

export const mockNews: NewsArticle[] = [
  {
    id: 'news-001',
    title: 'Giá thép xây dựng hôm nay: Hòa Phát, Việt Nhật, Pomina đồng loạt tăng nhẹ',
    slug: 'gia-thep-xay-dung-hom-nay-hoa-phat-viet-nhat-pomina-dong-loat-tang-nhe',
    thumbnailUrl: 'https://images.unsplash.com/photo-1541888086884-60c704be2f62?auto=format&fit=crop&q=80&w=800',
    summary: 'Cập nhật diễn biến giá thép xây dựng mới nhất hôm nay. Thị trường ghi nhận đà tăng nhẹ từ các thương hiệu lớn như Hòa Phát, Pomina.',
    isFeatured: true,
    author: {
      id: 'author-1',
      name: 'Nguyễn Văn Chuyên Gia',
    },
    category: {
      id: 'cat-1',
      name: 'Thị trường Vật liệu',
      slug: 'thi-truong-vat-lieu',
    },
    tags: ['Thép xây dựng', 'Báo giá', 'Hòa Phát'],
    publishedAt: '2026-09-16T08:00:00Z',
    content: [
      {
        type: 'paragraph',
        content: 'Theo ghi nhận từ thị trường vật liệu xây dựng sáng nay, giá thép xây dựng của nhiều thương hiệu lớn đã có dấu hiệu điều chỉnh tăng nhẹ. Sự thay đổi này được cho là do ảnh hưởng của giá nguyên liệu đầu vào và nhu cầu xây dựng đang tăng cao vào mùa khô.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Chi tiết mức tăng của các thương hiệu',
      },
      {
        type: 'paragraph',
        content: 'Cụ thể, thép Hòa Phát đã điều chỉnh tăng khoảng 200 đồng/kg cho cả thép cuộn và thép thanh vằn. Tương tự, thép Việt Nhật và thép Pomina cũng ghi nhận mức tăng từ 150 - 250 đồng/kg tùy loại.',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          'Thép cuộn CB240 Hòa Phát: Tăng 200đ/kg',
          'Thép thanh vằn D10 CB300 Hòa Phát: Tăng 250đ/kg',
          'Thép Việt Nhật Vina Kyoei: Tăng trung bình 150đ/kg',
        ],
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1541888086884-60c704be2f62?auto=format&fit=crop&q=80&w=800',
        caption: 'Công trường xây dựng tấp nập trong mùa khô',
      },
      {
        type: 'quote',
        content: 'Mặc dù giá thép có sự điều chỉnh tăng nhẹ, nhưng nhìn chung nguồn cung vẫn đảm bảo đáp ứng đủ nhu cầu của thị trường.',
        author: 'Đại diện Hiệp hội Thép Việt Nam',
      },
    ],
  },
  {
    id: 'news-002',
    title: 'Kinh nghiệm chọn gạch ốp lát phòng khách chuẩn phong thủy',
    slug: 'kinh-nghiem-chon-gach-op-lat-phong-khach-chuan-phong-thuy',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    summary: 'Phòng khách là bộ mặt của ngôi nhà, việc chọn gạch ốp lát không chỉ cần đẹp mà còn phải hợp phong thủy để mang lại tài lộc.',
    author: {
      id: 'author-2',
      name: 'Lê Trần Kiến Trúc',
    },
    category: {
      id: 'cat-2',
      name: 'Kinh nghiệm hay',
      slug: 'kinh-nghiem-hay',
    },
    publishedAt: '2026-09-15T14:30:00Z',
    content: [
      {
        type: 'paragraph',
        content: 'Chọn gạch ốp lát phòng khách là một quyết định quan trọng, ảnh hưởng lớn đến thẩm mỹ tổng thể của cả ngôi nhà. Bài viết này sẽ hướng dẫn bạn cách chọn gạch phù hợp với bản mệnh gia chủ.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Chọn màu gạch theo mệnh Mộc',
      },
      {
        type: 'paragraph',
        content: 'Người mệnh Mộc nên ưu tiên chọn gạch màu xanh lá cây hoặc màu đen, xanh biển (Thủy sinh Mộc). Tránh sử dụng màu trắng, xám (Kim khắc Mộc).',
      }
    ],
  },
  {
    id: 'news-003',
    title: 'Xi măng Insee ra mắt dòng sản phẩm mới thân thiện môi trường',
    slug: 'xi-mang-insee-ra-mat-dong-san-pham-moi-than-thien-moi-truong',
    thumbnailUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    summary: 'Với công nghệ sản xuất tiên tiến, dòng xi măng mới của Insee giúp giảm thiểu đáng kể lượng khí thải CO2.',
    author: {
      id: 'author-1',
      name: 'Nguyễn Văn Chuyên Gia',
    },
    category: {
      id: 'cat-3',
      name: 'Sản phẩm mới',
      slug: 'san-pham-moi',
    },
    publishedAt: '2026-09-14T09:15:00Z',
    content: [
      {
        type: 'paragraph',
        content: 'Xi măng Insee vừa chính thức giới thiệu dòng sản phẩm "Xanh" mới, hướng tới sự phát triển bền vững trong ngành vật liệu xây dựng.',
      }
    ],
  },
  {
    id: 'news-004',
    title: 'Top 5 mẫu cửa nhôm Xingfa được ưa chuộng nhất 2026',
    slug: 'top-5-mau-cua-nhom-xingfa-duoc-ua-chuong-nhat-2026',
    thumbnailUrl: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=800',
    summary: 'Khám phá ngay 5 thiết kế cửa nhôm Xingfa đang dẫn đầu xu hướng thiết kế nội ngoại thất năm nay.',
    author: {
      id: 'author-3',
      name: 'Phạm Thị Nội Thất',
    },
    category: {
      id: 'cat-4',
      name: 'Nội thất',
      slug: 'noi-that',
    },
    publishedAt: '2026-09-12T10:00:00Z',
    content: [
      {
        type: 'paragraph',
        content: 'Cửa nhôm Xingfa tiếp tục khẳng định vị thế dẫn đầu trong thị trường cửa bởi độ bền, tính thẩm mỹ và khả năng cách âm, cách nhiệt tuyệt vời.',
      }
    ],
  },
  {
    id: 'news-005',
    title: 'Bí quyết chống thấm tường nhà hiệu quả triệt để',
    slug: 'bi-quyet-chong-tham-tuong-nha-hieu-qua-triet-de',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518737213831-291702f23cf5?auto=format&fit=crop&q=80&w=800',
    summary: 'Mùa mưa bão đang đến gần, hãy trang bị ngay những kiến thức cần thiết để bảo vệ ngôi nhà khỏi tình trạng thấm dột.',
    author: {
      id: 'author-2',
      name: 'Lê Trần Kiến Trúc',
    },
    category: {
      id: 'cat-2',
      name: 'Kinh nghiệm hay',
      slug: 'kinh-nghiem-hay',
    },
    publishedAt: '2026-09-10T16:45:00Z',
    content: [
      {
        type: 'paragraph',
        content: 'Chống thấm là một công đoạn quan trọng không thể bỏ qua trong quá trình thi công xây dựng cũng như bảo trì nhà cửa.',
      }
    ],
  },
];
