export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  year: string;
  client?: string;
  images: string[];
  color: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export const projects: Project[] = [
  {
    id: "chromatic-dreams",
    title: "Giấc Mơ Sắc Màu",
    tags: ["minh họa", "nghệ thuật số", "trừu tượng"],
    description: "Một series tranh minh họa kỹ thuật số khám phá sự tương tác giữa các hình khối và màu sắc rực rỡ. Dự án này ra đời từ mong muốn chuyển đổi cảm xúc thành các tác phẩm thị giác trừu tượng, mỗi tác phẩm đại diện cho một trạng thái cảm xúc khác nhau thông qua bảng màu đặc trưng.",
    year: "2024",
    client: "Dự án cá nhân",
    images: [
      "/assets/victoria-spheres.jpg",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80"
    ],
    color: "#FF6B6B",
    aspectRatio: "portrait"
  },
  {
    id: "vogue-editorial",
    title: "Biên Tập Vogue",
    tags: ["biên tập", "tạp chí", "thời trang"],
    description: "Chỉ đạo nghệ thuật và thiết kế biên tập cho ấn bản đặc biệt của Vogue Brasil. Dự án bao gồm tạo các bố cục typography táo bạo kết hợp với nhiếp ảnh thời trang, tạo nên những trang báo là tác phẩm nghệ thuật đồ họa thực sự.",
    year: "2024",
    client: "Vogue Brasil",
    images: [
      "/assets/nik-varoom.jpg",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
    ],
    color: "#4ECDC4",
    aspectRatio: "landscape"
  },
  {
    id: "neon-nights",
    title: "Đêm Neon",
    tags: ["poster", "typography", "về đêm"],
    description: "Bộ sưu tập poster typography được tạo cho series sự kiện âm nhạc điện tử tại São Paulo. Phong cách kết hợp typography thử nghiệm với gradient neon, nắm bắt năng lượng sôi động của cuộc sống về đêm.",
    year: "2023",
    client: "D-Edge Club",
    images: [
      "/assets/nik-synthwave.jpg",
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80"
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "botanical-essence",
    title: "Tinh Hoa Thực Vật",
    tags: ["thương hiệu", "nhận diện", "mỹ phẩm"],
    description: "Hệ thống nhận diện thương hiệu hoàn chỉnh cho một thương hiệu mỹ phẩm tự nhiên. Dự án bao gồm logo, hệ thống màu sắc, typography, bao bì và tài liệu truyền thông, tất cả lấy cảm hứng từ sự tinh tế và sang trọng của thế giới thực vật.",
    year: "2024",
    client: "Botanical Essence",
    images: [
      "/assets/kasturi-roy-floral.jpg",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    ],
    color: "#10B981",
    aspectRatio: "square"
  },
  {
    id: "urban-fragments",
    title: "Mảnh Ghép Đô Thị",
    tags: ["minh họa", "đô thị", "cắt dán"],
    description: "Dự án minh họa khám phá sự phân mảnh của cảnh quan đô thị đương đại. Thông qua collage kỹ thuật số, các tác phẩm nắm bắt sự chồng chéo hỗn loạn của các yếu tố kiến trúc, biển hiệu và kết cấu định nghĩa các đô thị lớn.",
    year: "2023",
    client: "Galeria Vermelho",
    images: [
      "/assets/omk-deer.jpg",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80"
    ],
    color: "#F59E0B",
    aspectRatio: "landscape"
  },
  {
    id: "typeface-manifesto",
    title: "Tuyên Ngôn Typography",
    tags: ["typography", "poster", "thử nghiệm"],
    description: "Series poster thử nghiệm khám phá giới hạn của typography như một hình thức biểu đạt thị giác. Mỗi tác phẩm thách thức các quy ước typography truyền thống, biến đổi chữ cái thành các tác phẩm điêu khắc đồ họa.",
    year: "2024",
    client: "ADG Brasil",
    images: [
      "/assets/simon-lee-holographic.jpg",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
    ],
    color: "#EC4899",
    aspectRatio: "portrait"
  },
  {
    id: "flow-magazine",
    title: "Tạp Chí Flow",
    tags: ["biên tập", "tạp chí", "phong cách sống"],
    description: "Thiết kế biên tập cho tạp chí Flow, một ấn phẩm về chánh niệm và sức khỏe tinh thần. Dự án bao gồm tạo hệ thống thị giác truyền tải sự bình yên và cân bằng thông qua khoảng trống rộng rãi, typography thanh lịch và nhiếp ảnh chiêm nghiệm.",
    year: "2023",
    client: "Flow Magazine",
    images: [
      "/assets/syarafina-cat.jpg",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    ],
    color: "#6366F1",
    aspectRatio: "landscape"
  },
  {
    id: "aurora-identity",
    title: "Nhận Diện Aurora",
    tags: ["thương hiệu", "nhận diện", "công nghệ"],
    description: "Hệ thống nhận diện thương hiệu cho Aurora, một startup công nghệ tập trung vào trí tuệ nhân tạo. Hệ thống thị giác kết hợp các hình dạng mềm mại lấy cảm hứng từ cực quang với typography đương đại và bảng màu sống động.",
    year: "2024",
    client: "Aurora AI",
    images: [
      "/assets/nypl-bird.jpg",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
    ],
    color: "#14B8A6",
    aspectRatio: "square"
  },
  {
    id: "street-poetry",
    title: "Thơ Đường Phố",
    tags: ["nét vẽ", "minh họa", "đô thị"],
    description: "Khám phá thị giác về thơ ca đô thị thông qua các minh họa nét vẽ tinh xảo. Mỗi tác phẩm nắm bắt nhịp điệu và năng lượng của cuộc sống đường phố, chuyển đổi chuyển động và cảm xúc thành các tác phẩm đen trắng tinh tế.",
    year: "2024",
    client: "Liên Hoan Nghệ Thuật Đô Thị",
    images: [
      "/assets/nypl-jewelry.jpg",
      "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=800&q=80"
    ],
    color: "#1F2937",
    aspectRatio: "portrait"
  },
  {
    id: "color-theory",
    title: "Lý Thuyết Màu Sắc",
    tags: ["trừu tượng", "kỹ thuật số", "thử nghiệm"],
    description: "Nghiên cứu thử nghiệm về mối quan hệ màu sắc và tác động tâm lý của chúng. Dự án cá nhân này khám phá cách các tổ hợp màu khác nhau có thể gợi lên cảm xúc cụ thể và tạo ra căng thẳng hoặc hài hòa thị giác.",
    year: "2024",
    client: "Dự án cá nhân",
    images: [
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&q=80",
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80"
    ],
    color: "#8B5CF6",
    aspectRatio: "landscape"
  },
  {
    id: "digital-natives",
    title: "Thế Hệ Số",
    tags: ["minh họa", "nhân vật", "kỹ thuật số"],
    description: "Series thiết kế nhân vật khám phá bản sắc của thế hệ kỹ thuật số. Các minh họa này kết hợp hình dạng con người với các yếu tố kỹ thuật số, đặt câu hỏi về ranh giới giữa bản thể vật lý và ảo của chúng ta.",
    year: "2023",
    client: "Hội Nghị Công Nghệ",
    images: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80"
    ],
    color: "#06B6D4",
    aspectRatio: "square"
  },
  {
    id: "festival-posters",
    title: "Poster Lễ Hội",
    tags: ["poster", "âm nhạc", "in ấn"],
    description: "Bộ sưu tập poster sống động được thiết kế cho các lễ hội âm nhạc trên khắp Brazil. Mỗi poster nắm bắt năng lượng độc đáo của sự kiện thông qua typography táo bạo, bố cục năng động và bảng màu nổi bật.",
    year: "2023",
    client: "Các Lễ Hội Đa Dạng",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    color: "#F43F5E",
    aspectRatio: "portrait"
  },
  {
    id: "brand-fusion",
    title: "Hợp Nhất Thương Hiệu",
    tags: ["thương hiệu", "chiến lược", "nhận diện"],
    description: "Dự án tái định vị thương hiệu toàn diện cho một công ty sáp nhập, kết hợp hai bản sắc thương hiệu riêng biệt thành một ngôn ngữ thị giác thống nhất mới. Thách thức là tôn vinh cả hai di sản trong khi tạo ra điều gì đó tươi mới và hướng về tương lai.",
    year: "2024",
    client: "Fusion Corp",
    images: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
    ],
    color: "#0EA5E9",
    aspectRatio: "landscape"
  },
  {
    id: "ink-stories",
    title: "Câu Chuyện Mực",
    tags: ["nét vẽ", "minh họa", "tự sự"],
    description: "Series minh họa tự sự sử dụng kỹ thuật mực truyền thống được số hóa cho các ứng dụng hiện đại. Mỗi tác phẩm kể một câu chuyện thông qua các chi tiết nét vẽ tinh xảo và bố cục cân bằng cẩn thận.",
    year: "2023",
    client: "Nhà Xuất Bản",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
    ],
    color: "#374151",
    aspectRatio: "portrait"
  },
  {
    id: "paper-dreams",
    title: "Giấc Mơ Giấy",
    tags: ["cắt dán", "đa phương tiện", "thử nghiệm"],
    description: "Tác phẩm collage đa phương tiện kết hợp kết cấu giấy vintage với kỹ thuật số đương đại. Dự án này khám phá chủ đề ký ức và hoài niệm thông qua kể chuyện thị giác nhiều lớp.",
    year: "2024",
    client: "Phòng Trưng Bày Nghệ Thuật",
    images: [
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&q=80",
      "https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=800&q=80"
    ],
    color: "#D97706",
    aspectRatio: "square"
  },
  {
    id: "minimal-bold",
    title: "Tối Giản Táo Bạo",
    tags: ["typography", "tối giản", "poster"],
    description: "Thử nghiệm typography đẩy giới hạn của chủ nghĩa tối giản. Chỉ sử dụng đen, trắng và font sans-serif đậm, các poster này truyền tải tác động tối đa với các yếu tố tối thiểu.",
    year: "2024",
    client: "Bảo Tàng Thiết Kế",
    images: [
      "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80"
    ],
    color: "#111827",
    aspectRatio: "portrait"
  },
  {
    id: "motion-blur",
    title: "Chuyển Động Mờ",
    tags: ["chuyển động", "kỹ thuật số", "hoạt hình"],
    description: "Khám phá chuyển động và thời gian thông qua hình ảnh tĩnh gợi ý chuyển động. Dự án này nắm bắt bản chất của tốc độ và sự linh hoạt, đóng băng những khoảnh khắc năng động trong các tác phẩm thị giác ấn tượng.",
    year: "2023",
    client: "Thương Hiệu Thể Thao",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80"
    ],
    color: "#7C3AED",
    aspectRatio: "landscape"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Get unique categories from all project tags
export const getCategories = (): string[] => {
  const allTags = projects.flatMap(project => project.tags);
  return [...new Set(allTags)];
};
