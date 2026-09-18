import { NewsArticle } from '../interface/news/news';

export const mockNews: NewsArticle[] = [
  {
    id: 'news-001',
    title: 'Giá thép xây dựng hôm nay: Hòa Phát, Việt Nhật, Pomina đồng loạt tăng nhẹ',
    slug: 'gia-thep-xay-dung-hom-nay-hoa-phat-viet-nhat-pomina-dong-loat-tang-nhe',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
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
        content: 'Cụ thể, thép Hòa Phát đã điều chỉnh tăng khoảng 200 đồng/kg cho cả thép cuộn và thép thanh vằn. Tương tự, thép Việt Nhật và thép Pomina cũng ghi nhận mức tăng từ 150 - 250 đồng/kg tùy loại. Đây là đợt tăng giá thứ 2 tính từ đầu tháng, phản ánh sự sôi động của thị trường xây dựng dân dụng và dự án.',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          'Thép cuộn CB240 Hòa Phát: Tăng 200đ/kg',
          'Thép thanh vằn D10 CB300 Hòa Phát: Tăng 250đ/kg',
          'Thép Việt Nhật Vina Kyoei: Tăng trung bình 150đ/kg',
          'Thép Pomina: Tăng 200đ/kg',
        ],
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
        caption: 'Công trường xây dựng tấp nập trong mùa khô',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Dự báo thị trường thời gian tới',
      },
      {
        type: 'paragraph',
        content: 'Theo các chuyên gia, giá thép có thể tiếp tục biến động nhẹ trong tuần tới nhưng sẽ khó xảy ra những đợt tăng sốc do nguồn cung trong nước vẫn đang rất dồi dào. Người tiêu dùng nên theo dõi sát sao bảng giá hằng ngày để có quyết định nhập vật tư hợp lý.',
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
        content: 'Chọn gạch ốp lát phòng khách là một quyết định quan trọng, ảnh hưởng lớn đến thẩm mỹ tổng thể của cả ngôi nhà. Bài viết này sẽ hướng dẫn bạn cách chọn gạch phù hợp với bản mệnh gia chủ nhằm thu hút vượng khí, tài lộc và sự bình an.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Chọn màu gạch theo mệnh Mộc',
      },
      {
        type: 'paragraph',
        content: 'Người mệnh Mộc nên ưu tiên chọn gạch màu xanh lá cây hoặc màu đen, xanh biển (Thủy sinh Mộc). Tránh sử dụng màu trắng, xám (Kim khắc Mộc). Những gam màu này không chỉ mang lại sự tươi mới, gần gũi với thiên nhiên mà còn giúp cân bằng dòng chảy năng lượng trong không gian sống.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Chọn màu gạch theo mệnh Kim, Thủy, Hỏa, Thổ',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          'Mệnh Kim: Phù hợp với màu trắng, xám bạc, ánh kim, hoặc màu vàng, nâu đất (Thổ sinh Kim).',
          'Mệnh Thủy: Nên chọn gạch màu xanh nước biển, đen, kết hợp với các tông màu trắng, ánh kim (Kim sinh Thủy).',
          'Mệnh Hỏa: Ưu tiên màu đỏ, hồng, tím hoặc xanh lá cây (Mộc sinh Hỏa).',
          'Mệnh Thổ: Hợp với màu vàng, nâu đất, hoặc các tông màu nóng như đỏ, cam, hồng (Hỏa sinh Thổ).',
        ],
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
        caption: 'Không gian phòng khách sử dụng gạch ốp lát hợp phong thủy',
      },
      {
        type: 'paragraph',
        content: 'Ngoài yếu tố màu sắc, họa tiết gạch cũng đóng vai trò quan trọng. Gia chủ nên tránh các loại gạch có hoa văn quá rối mắt, góc cạnh sắc nhọn để đảm bảo không gian luôn giữ được sự thanh thoát, mang lại cảm giác thư thái cho các thành viên trong gia đình.',
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
        content: 'Xi măng Insee vừa chính thức giới thiệu dòng sản phẩm "Xanh" mới, hướng tới sự phát triển bền vững trong ngành vật liệu xây dựng. Sự kiện ra mắt thu hút sự quan tâm lớn từ các chủ thầu, kỹ sư và chuyên gia đầu ngành trong bối cảnh xu hướng xây dựng xanh đang lên ngôi.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Công nghệ sản xuất tiên tiến',
      },
      {
        type: 'paragraph',
        content: 'Sản phẩm mới được áp dụng công nghệ nghiền trộn hiện đại, giúp tối ưu hóa thành phần clinker, từ đó giảm thiểu đến 30% lượng khí thải CO2 so với xi măng thông thường. Không chỉ thân thiện với môi trường, loại xi măng này còn duy trì được cường độ cao, đảm bảo kết cấu vững chắc cho mọi công trình.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ưu điểm nổi bật của dòng sản phẩm mới',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          'Khả năng chống thấm, chống xâm thực tốt, phù hợp với điều kiện khí hậu Việt Nam.',
          'Độ dẻo cao, dễ thi công, tiết kiệm thời gian và công sức cho nhân công.',
          'Bề mặt bê tông láng mịn, hạn chế hiện tượng nứt nẻ sau khi đóng rắn.',
          'Chứng nhận nhãn xanh thân thiện với môi trường theo tiêu chuẩn quốc tế.',
        ],
      },
      {
        type: 'quote',
        content: 'Chúng tôi tin rằng dòng sản phẩm xi măng thế hệ mới không chỉ giải quyết bài toán chất lượng công trình mà còn đóng góp tích cực vào cam kết giảm phát thải ròng của quốc gia.',
        author: 'Đại diện Xi măng Insee Việt Nam',
      },
      {
        type: 'paragraph',
        content: 'Dự kiến, sản phẩm sẽ được phân phối rộng rãi tại các đại lý vật liệu xây dựng trên toàn quốc bắt đầu từ tháng tới với mức giá vô cùng cạnh tranh.',
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
        content: 'Cửa nhôm Xingfa tiếp tục khẳng định vị thế dẫn đầu trong thị trường cửa bởi độ bền, tính thẩm mỹ và khả năng cách âm, cách nhiệt tuyệt vời. Năm 2026, thiết kế nhôm kính hướng đến sự tối giản, mở rộng tầm nhìn và tối ưu hóa không gian sống.',
      },
      {
        type: 'heading',
        level: 2,
        content: '1. Cửa đi mở trượt (lùa) 4 cánh',
      },
      {
        type: 'paragraph',
        content: 'Mẫu cửa này là giải pháp hoàn hảo cho các không gian có diện tích hẹp, giúp tiết kiệm không gian đóng mở. Hệ ray trượt êm ái, kết cấu vững chắc giúp cửa hoạt động nhẹ nhàng, không gây tiếng ồn.',
      },
      {
        type: 'heading',
        level: 2,
        content: '2. Cửa sổ mở quay kết hợp vách kính cố định',
      },
      {
        type: 'paragraph',
        content: 'Thiết kế này mang lại vẻ đẹp hiện đại, thường được sử dụng ở các tòa nhà văn phòng hoặc biệt thự sang trọng. Vách kính lớn giúp lấy sáng tự nhiên tối đa trong khi phần cửa mở quay đảm bảo thông gió tốt.',
      },
      {
        type: 'heading',
        level: 2,
        content: '3. Cửa đi xếp trượt nhiều cánh',
      },
      {
        type: 'paragraph',
        content: 'Cửa xếp trượt (từ 4 đến 6 cánh) đang là "hot trend" cho mặt tiền rộng hoặc lối ra sân vườn, hồ bơi. Khi mở hết cỡ, cửa tạo ra không gian mở hoàn toàn, kết nối hài hòa giữa trong nhà và ngoài trời.',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          '4. Cửa sổ mở hất an toàn cho nhà cao tầng.',
          '5. Cửa đi mở quay 2 cánh truyền thống nhưng sử dụng kính hộp cách âm cách nhiệt.',
        ],
      },
      {
        type: 'paragraph',
        content: 'Để chọn được bộ cửa nhôm Xingfa ưng ý, khách hàng nên tìm đến các đại lý phân phối chính hãng, yêu cầu xem kỹ tem đỏ Quảng Đông và chế độ bảo hành phụ kiện đi kèm.',
      }
    ],
  },
  {
    id: 'news-005',
    title: 'Bí quyết chống thấm tường nhà hiệu quả triệt để',
    slug: 'bi-quyet-chong-tham-tuong-nha-hieu-qua-triet-de',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
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
        content: 'Chống thấm là một công đoạn quan trọng không thể bỏ qua trong quá trình thi công xây dựng cũng như bảo trì nhà cửa. Tường nhà bị thấm dột không chỉ gây mất thẩm mỹ với các vết ố vàng, rêu mốc mà còn làm giảm tuổi thọ công trình, ảnh hưởng đến kết cấu và sức khỏe của các thành viên trong gia đình.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Nguyên nhân gây thấm tường phổ biến',
      },
      {
        type: 'paragraph',
        content: 'Có rất nhiều nguyên nhân dẫn đến hiện tượng thấm tường, trong đó phổ biến nhất là do vật liệu xây dựng có lỗ rỗng lớn, thi công không đúng kỹ thuật, hoặc tác động của môi trường thời tiết khắc nghiệt như mưa bão kéo dài, thay đổi nhiệt độ đột ngột gây nứt tường.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Các biện pháp chống thấm hiệu quả',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          'Sử dụng phụ gia chống thấm trộn cùng vữa xi măng ngay từ giai đoạn xây trát.',
          'Quét sơn chống thấm chuyên dụng cho các bức tường ngoại thất (thường quét từ 2-3 lớp).',
          'Sử dụng màng chống thấm khò nóng hoặc màng tự dính cho các khu vực đặc biệt như ban công, chân tường.',
          'Xử lý triệt để các vết nứt nhỏ bằng keo trám khe nứt trước khi sơn phủ.',
        ],
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        caption: 'Công tác thi công chống thấm cần được thực hiện tỉ mỉ, đúng kỹ thuật',
      },
      {
        type: 'paragraph',
        content: 'Đối với những ngôi nhà cũ đã bị thấm, việc xử lý sẽ phức tạp hơn. Bạn cần phải cạo bỏ hoàn toàn lớp sơn và vữa cũ bị bong tróc, vệ sinh sạch sẽ bề mặt, sau đó mới tiến hành các bước chống thấm lại từ đầu. Đừng ngần ngại liên hệ với các đơn vị thi công chuyên nghiệp nếu tình trạng thấm dột quá nghiêm trọng.',
      }
    ],
  },
  {
    id: 'news-006',
    title: 'Xu hướng thiết kế nội thất nhà ống đẹp, hiện đại năm 2026',
    slug: 'xu-huong-thiet-ke-noi-that-nha-ong-dep-hien-dai-nam-2026',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    summary: 'Cùng khám phá những xu hướng thiết kế nội thất nhà ống đang được ưa chuộng nhất, giúp tối ưu hóa không gian và mang lại vẻ đẹp sang trọng.',
    author: {
      id: 'author-3',
      name: 'Phạm Thị Nội Thất',
    },
    category: {
      id: 'cat-4',
      name: 'Nội thất',
      slug: 'noi-that',
    },
    publishedAt: '2026-09-08T10:00:00Z',
    content: [
      {
        type: 'paragraph',
        content: 'Với đặc thù hẹp về chiều ngang và sâu về chiều dài, thiết kế nội thất nhà ống luôn là một bài toán khó đòi hỏi sự sáng tạo và tinh tế từ các kiến trúc sư. Tuy nhiên, nếu biết cách bố trí hợp lý, bạn hoàn toàn có thể sở hữu một không gian sống vừa tiện nghi vừa thẩm mỹ.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tối giản hóa đồ nội thất',
      },
      {
        type: 'paragraph',
        content: 'Xu hướng Minimalism (tối giản) tiếp tục lên ngôi trong năm 2026. Việc lược bỏ những chi tiết rườm rà, ưu tiên sử dụng nội thất đa năng không chỉ giúp giải phóng không gian mà còn tạo cảm giác thoáng đãng, rộng rãi hơn cho ngôi nhà.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Mang thiên nhiên vào không gian sống',
      },
      {
        type: 'paragraph',
        content: 'Việc bố trí tiểu cảnh, giếng trời hay sử dụng nhiều cây xanh trong nhà giúp thanh lọc không khí, giảm bớt sự ngột ngạt của những bức tường bê tông. Đây cũng là liệu pháp thư giãn tuyệt vời sau những giờ làm việc căng thẳng.',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          'Sử dụng gam màu sáng như trắng, be, pastel làm chủ đạo để ăn gian diện tích.',
          'Thiết kế không gian mở, liên thông giữa phòng khách và phòng bếp.',
          'Tận dụng tối đa ánh sáng tự nhiên thông qua hệ thống cửa kính lớn.',
        ],
      },
    ],
  },
  {
    id: 'news-007',
    title: 'Bảng báo giá cát đá xây dựng cập nhật mới nhất',
    slug: 'bang-bao-gia-cat-da-xay-dung-cap-nhat-moi-nhat',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800',
    summary: 'Thông tin chi tiết về giá các loại cát, đá xây dựng trên thị trường hiện nay. Bảng giá được cập nhật liên tục từ các vựa vật liệu uy tín.',
    author: {
      id: 'author-1',
      name: 'Nguyễn Văn Chuyên Gia',
    },
    category: {
      id: 'cat-1',
      name: 'Thị trường Vật liệu',
      slug: 'thi-truong-vat-lieu',
    },
    publishedAt: '2026-09-05T08:30:00Z',
    content: [
      {
        type: 'paragraph',
        content: 'Giá cát đá xây dựng là một trong những yếu tố được quan tâm hàng đầu của các chủ đầu tư và nhà thầu trước khi bước vào giai đoạn thi công. Thị trường vật liệu hiện nay đang có những biến động nhất định do ảnh hưởng của việc siết chặt khai thác tài nguyên.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Diễn biến giá cát xây dựng',
      },
      {
        type: 'paragraph',
        content: 'Giá cát san lấp và cát xây tô nhìn chung đang có xu hướng giữ ở mức ổn định so với tháng trước. Cát vàng đổ bê tông loại 1 (hạt to, sạch) vẫn duy trì ở mức giá cao do nguồn cung hạn chế tại một số khu vực trọng điểm.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tình hình giá đá các loại',
      },
      {
        type: 'paragraph',
        content: 'Ngược lại với cát, giá các loại đá xây dựng như đá 1x2, đá 4x6, đá mi bụi lại ghi nhận sự sụt giảm nhẹ tại một số mỏ đá khu vực phía Nam. Nguyên nhân chính là do mùa mưa bắt đầu, nhu cầu san lấp và làm đường giảm sút.',
      },
      {
        type: 'list',
        style: 'unordered',
        items: [
          'Cát vàng xây tô: 350.000đ - 420.000đ/khối',
          'Cát san lấp: 180.000đ - 220.000đ/khối',
          'Đá 1x2 xanh (Đồng Nai): 380.000đ - 450.000đ/khối',
          'Đá mi bụi: 250.000đ - 280.000đ/khối',
        ],
      },
      {
        type: 'quote',
        content: 'Lưu ý: Bảng giá trên chỉ mang tính chất tham khảo. Giá thực tế có thể thay đổi tùy thuộc vào vị trí công trình, số lượng đơn hàng và chi phí vận chuyển.',
        author: 'Ban Biên Tập',
      }
    ],
  },
];
