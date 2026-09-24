import { BookText , Waves, Paintbrush, Settings, ShieldCheck, Truck , BadgeCheck, Boxes, Scissors, ClipboardCheck, RefreshCcw, Joystick, Ruler, Clock, Smile, ShoppingBag, Shirt, Move, SearchCheck, Mail, Phone, Palette, Sticker, Package, BarChart3 } from "lucide-react";

export const steps = [
  {
    number: "01",
    title: "تحديد المتطلبات",
    description: "التعرف على المنتج والأوصاف والكميات المطلوبة.",
    note: "جلسة فهم لتفاصيل المنتج والهوية والدخول الفني",
    icon: <BookText className='text-(--primary)' />,
  },
  {
    number: "02",
    title: "اختيار الخامات",
    description: "اختيار الخامة المناسبة حسب المنتج ومتطلبات العميل.",
    note: "تحديد نوع الخامة (GSM) ونوع التجهيزات",
    icon: <Waves className='text-(--primary)' />,
  },
  {
    number: "03",
    title: "العينة",
    description: "تنفيذ عينة للتأكد من التفاصيل والمواصفات قبل الاعتماد.",
    note: "تطبيق القياسات والتصميم والتفاصيل النهائية",
    badge: "مرحلة حرجة",
    icon: <Paintbrush className='text-(--primary)' />,
  },
  {
    number: "04",
    title: "الإنتاج",
    description: "بدء عملية التصنيع بالكميات المطلوبة بخطوط إنتاج متطورة.",
    note: "من أيادي دقيقة وجودة رقابة في كل خطوة",
    icon: <Settings className='text-(--primary)' />,
  },
  {
    number: "05",
    title: "مراقبة الجودة",
    description: "مراجعة المنتجات والتأكد من مطابقتها الدقيقة للمواصفات.",
    note: "فحص العيوب أثناء الإنتاج واختبار مقاومة الاستخدام",
    icon: <ShieldCheck  className='text-(--primary)' />,
  },
  {
    number: "06",
    title: "التجهيز والتسليم",
    description: "تجهيز المنتجات للتغليف والتسليم حسب الاتفاق.",
    note: "اختيار طريقة التغليف المناسبة للمنتج وضمان أمان النقل",
    icon: <Truck className='text-(--primary)' />,
  },
];

export const ourAdvantages = [
  {
    number: "01",
    category: "دقة", 
    title: "جودة ثابتة",
    description: "نضمن تطابق كل قطعة مع العينة المعتمدة دون أي تفاوت في القص أو الخياطة عبر كل دورات الإنتاج",
    icon: <BadgeCheck className='text-(--primary)' />,
  },
  {
    number: "02",
    category: "سعة", 
    title: "إنتاج كميات",
    description: "طاقات إنتاجية ضخمة تلبي طلبيات سلاسل المتاجر الكبرى مع الحفاظ التام على أدق معايير الحرفية اليدوية.",
    icon: <Boxes className='text-(--primary)' />,
  },
  {
    number: "03",
    category: "تخصيص", 
    title: "مواصفات مخصصة",
    description: "تخصيص كامل من الصفر: الباترون، الأزرار، السحابات الفاخرة، والبطاقات الداخلية، وتطريز أو طباعة حرارية.",
    icon: <Scissors className='text-(--primary)' />,
  },
  {
    number: "04",
    category: "رقابة", 
    title: "مراقبة جودة صارمة",
    description: "نظام تدقيق ثلاثي المراحل: فحص النسيج الخام، تدقيق خط الخياطة اللحظي، والفحص الشامل قبل التعبئة.",
    icon: <ClipboardCheck className='text-(--primary)' />,
  },
  {
    number: "05",
    category: "مرونة", 
    title: "مرونة في التصنيع",
    description: "حلول تتماشى مع المواسم السريعة، إمكانية تعديل الكميات وتوزيع التوريد عبر دفعات زمنية منتظمة.",
    icon: <RefreshCcw className='text-(--primary)' />,
  },
];

export const productionSteps = [
  {
    title: "القص الآلي بالليزر",
    description: "دقة قص بنسبة خطأ صفرية تضمن تطابق مقاسات البنطال عبر جميع الدفعات الكبيرة وفق باترونات عالمية.",
    icon: <BadgeCheck className='text-(--primary)' />,
  },
  {
    title: "الفحص الرباعي للجودة (QA)",
    description: "مراجعة دقيقة لسلامة الدرزات، سحّابات YKK الأصلية، والتثبيت المزدوج لمناطق الضغط والجيوب.",
    icon: <Boxes className='text-(--primary)' />,
  },
  {
    title: "تغليف العلامة التجارية والشحن",
    description: "تجهيز المنتجات ببطاقات علامتك الخاصة (Hangtags & Labels) مع تغليف كرتوني مطابق لمواصفات التصدير.",
    icon: <Scissors className='text-(--primary)' />,
  },
];

export const homeFeatures = [
  {
    title: "جودة عالية",
    description: "فحص مجهري للغزل وخيوط الحياكة واختبارات معملية لثبات الألوان ومقاومة التمزق والانكماش قبل التعبئة.",
    icon: <BadgeCheck className='text-(--primary)' />,
  },
  {
    title: "إنتاج كميات",
    description: "طاقة إنتاجية ضخمة تضمن تلبية طلبات الجملة وسلاسل المتاجر الكبرى مع الحفاظ على ذات الدقة لكل قطعة.",
    icon: <Boxes className='text-(--primary)' />,
  },
  {
    title: "تصنيع حسب الطلب",
    description: "تحويل اسكتشاتك ونماذجك الرقمية إلى خط إنتاج فعلي مع تطوير الباترونات ومطابقة أكواد ألوان Pantone بدقة.",
    icon: <Scissors className='text-(--primary)' />,
  },
  {
    title: "التزام واحترافية",
    description: "جداول زمنية واضحة وموثقة لتسليم الشحنات مع تقارير دورية لمراحل تصنيع الطلبية لضمان سلاسة أعمالك.",
    icon: <Joystick className='text-(--primary)' />,
  },
];

export const services  = [
  {
    title: "تصنيع البناطيل",
    description: "قص ليزري وتشطيب يدوي متقن يضمن الهيكل المثالي والانسانية العالية للبنطال الكلاسيكي والكاجوال.",
    icon: <Move className='text-(--primary)' />,
  },
  {
    title: "تصنيع التيشرتات",
    description: "حياكة فنية فائقة ومعالجة كيميائية للأقمشة تمنع الانكماش وتمنح النعومة والفخامة الدائمة.",
    icon: <Scissors  className='text-(--primary)' />,
  },
  {
    title: "الإنتاج بالكميات",
    description: "خطوط إنتاج ضخمة تلبي طلبات الجملة والموزعين والعلامات مع سرعة فائقة في الإنجاز",
    icon: <ShoppingBag className='text-(--primary)' />,
  },
  {
     title: "التصنيع حسب الطلب",
    description: "تنفيذ الباترونات الخاصة وتطريز وطباعة الهوية التجارية بدقة متناهية تعزز حضور علامتك",
    icon: <Shirt  className='text-(--primary)' />,
  },
  {
    title: "مراقبة الجودة",
    description: "فحص دقيق وشامل لكل مرحلة من مراحل الخياطة والكي لضمان خلو المنتجات من أي عيوب تصنيعية.",
    icon: <SearchCheck className='text-(--primary)' />,
  },
];

export const whoAreYouFeatures = [
  {
    "title": "الجودة",
    "description": "اختيار الأقمشة الفاخرة وخيوط الحياكة المعتمدة لضمان مظهر وملمس استثنائي يدوم",
    icon: <BadgeCheck className='text-(--primary)' />,
  },
  {
    "title": "الدقة",
    "description": "قص بالمليمتر وضبط هندسي متناهي في كل مقاس وتطريز وفق المواصفات المعتمدة",
    icon: <Ruler className='text-(--primary)' />,
  },
  {
    "title": "الالتزام",
    "description": "مواعيد تسليم حاسمة وجداول شحن B2B موثوقة تلبي خطط إطلاق مواسم الموضة.",
    icon: <Clock className='text-(--primary)' />,
  },
  {
    "title": "رضا العميل",
    "description": "شراكة طويلة الأمد مبنية على الشفافية التامة والدعم الفني في كافة المراحل.",
    icon: <Smile className='text-(--primary)' />,
  },
];

export const contactData = [
  {
    id: "phone",
    title: "اتصل بنا",
    value: "010 2904 4321 +",
    description: "مكتب الاستقبال وإدارة العقود الصناعية المباشرة",
    actionText: "اتصل الآن",
    icon: <Phone size={24}  />,
    actionIcon: <Phone size={18} className='text-(--secondary-text)'/>,
    isPrimary: true, 
  },
  {
    id: "email",
    title: "البريد الإلكتروني",
    value: "b2b@daralherf-textiles.com",
    description: "إرسال المواصفات الفنية وجداول الكميات والملفات الرقمية",
    actionText: "مراسلة عبر الإيميل",
    icon: <Mail size={24}  />,
    actionIcon: <Mail size={18} className='text-(--secondary-text)' />,
    isPrimary: false,
  },
];

export const homeTshirtPantalon = [
  {
    id: 1541,
    title: "تصنيع البناطيل الفاخرة",
    description: "قصتنا الفريدة تجمع بين الأصالة والرقي، لنقدم لك تجربة تفصيلية تعكس ذوقك في أرقى صوره. نصنع لك البناطيل بأجود الخامات العالمية.",
    types: "تشينو • رسمي • كارجو",
    link: "اكتشف التفاصيل",
    image: "public/pantlon.png" ,
    positionText:"خط انتاج معتمد",
  },
  {
    id: 2546,
    title: "تصنيع التيشرتات الفاخرة",
    description: "أوزان نسيج متعددة GSM، تشطيبات ناعمة مقاومة للانكماش، ومعالجات صباغة متطورة تحافظ على ثبات اللون لسنوات.",
    types: "أوفرسايز • بولو • بيزك",
    link: "استكشف التيشرتات  ",
    image: "public/tshirt.png",
    positionText:" الوان طبيعيه 100% ",
  }
];

export const homeDesignFeatures = [
  {
    "arabic": "ألوان مخصصة",
    "icon": <Palette className="text-(--secondary-text)" />
  },
  {
    "arabic": "ملصقات خاصة",
    "icon": <Sticker className="text-(--secondary-text)" />
  },
  {
    "arabic": "برامج وباجات",
    "icon": <Package className="text-(--secondary-text)" />
  },
  {
    "arabic": "كميات كبيرة",
    "icon": <BarChart3 className="text-(--secondary-text)" />
  }
];

export const productsCategories = [
  { value: "all", label: "الكل" },
  { value: "tshirts", label: "تيشيرتات" },
  { value: "pants", label: "بناطيل" },
];

export const products = [
  {
    id: 1,
    name: "بنطلون كلاسيك",
    category: "pants",
    price: 450,
    image: "/product.png",
  },
  {
    id: 2,
    name: "بنطلون جينز",
    category: "pants",
    price: 550,
    image: "/product.png",
  },
  {
    id: 3,
    name: "تيشيرت أساسي",
    category: "tshirts",
    price: 300,
    image: "/product.png",
  },
  {
    id: 4,
    name: "تيشيرت بولو",
    category: "tshirts",
    price: 350,
    image: "/product.png",
  },
  {
    id: 5,
    name: "بنطلون رياضي",
    category: "pants",
    price: 400,
    image: "/product.png",
  },
  {
    id: 6,
    name: "تيشيرت أوفر سايز",
    category: "tshirts",
    price: 380,
    image: "/product.png",
  },
  {
    id: 7,
    name: "بنطلون كارغو",
    category: "pants",
    price: 600,
    image: "/product.png",
  },
  {
    id: 8,
    name: "تيشيرت قطن",
    category: "tshirts",
    price: 280,
    image: "/product.png",
  },
  {
    id: 9,
    name: "بنطلون تشينو",
    category: "pants",
    price: 500,
    image: "/product.png",
  },
  {
    id: 10,
    name: "تيشيرت مطبوع",
    category: "tshirts",
    price: 330,
    image: "/product.png",
  },
  {
    id: 11,
    name: "بنطلون واسع",
    category: "pants",
    price: 520,
    image: "/product.png",
  },
  {
    id: 12,
    name: "تيشيرت رياضي",
    category: "tshirts",
    price: 360,
    image: "/product.png",
  },
  {
    id: 13,
    name: "بنطلون قطن",
    category: "pants",
    price: 480,
    image: "/product.png",
  },
  {
    id: 14,
    name: "تيشيرت كلاسيك",
    category: "tshirts",
    price: 320,
    image: "/product.png",
  },
  {
    id: 15,
    name: "بنطلون فاخر",
    category: "pants",
    price: 650,
    image: "/product.png",
  },
];