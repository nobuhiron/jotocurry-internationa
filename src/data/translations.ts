/**
 * 翻訳データ
 * indexページ用の日本語・英語の翻訳データ
 */

export const translations = {
  hero: {
    ja: {
      badge: '海外フランチャイズオーナー募集中',
      title: '大阪発の<br class="is-sm">甘辛カツカレーを、<br>あなたの街で。',
      features: ['1983年創業', 'シンプル運営', '未経験でも開業可能'],
      buttons: {
        primary: 'まずは無料オンライン相談',
        secondary: '詳細資料をダウンロード',
      },
    },
    en: {
      badge: 'International Franchise Opportunities',
      title: 'Bring Osaka-Style Sweet & Spicy Katsu Curry<br>to Your City.',
      features: [
        'Proven Success Since 1983',
        'Simple Operations',
        'No Experience Required',
      ],
      buttons: {
        primary: 'Start with a Free Online Consultation',
        secondary: 'Download Our Franchise Brochure',
      },
    },
  },
  about: {
    ja: {
      title: '大阪生まれの甘辛カレーを、<br class="is-sm">世界へ',
      description:
        '私たちは、日本の食文化――とりわけカレーの魅力を世界に広めることをミッションに、2024年に「TOKUMASA INTERNATIONAL」を設立しました。食道楽の街・大阪で培った味と運営ノウハウを、海外でも再現できる仕組みに整え、展開しています。フランチャイズオーナーとして、あなたの街で「上等カレー」を一緒に広げませんか。',
      button: 'まずは無料オンライン相談',
    },
    en: {
      title: 'Taking Osaka-Born Curry to the World',
      description:
        "We founded TOKUMASA INTERNATIONAL in 2024 with a simple mission: to share the best of Japanese food culture — above all, curry — with the world. We took the flavors and operational know-how cultivated in Osaka, Japan's food capital, and refined them into a system that can be replicated anywhere. Now we are expanding it worldwide. Join us as a franchise owner and open your own Joto Curry in your city.",
      button: 'Start with a Free Online Consultation',
    },
  },
  brandPower: {
    ja: {
      title: '数字が証明する<br class="is-sm">上等カレーのブランド力',
      stats: {
        meals: {
          value: '5000',
          unit: '食',
          label: '1日の平均提供食数',
        },
        domesticStores: {
          unit: '店舗',
          label: '国内店舗数',
        },
        overseasStores: {
          unit: '店舗',
          label: '海外店舗数',
        },
      },
      button: 'ブランドストーリーを見る',
      buttonLink: 'brand#section-brand-history',
    },
    en: {
      title: 'Joto Curry, by the Numbers',
      stats: {
        meals: {
          unit: 'meals',
          label: 'Served on an Average Day',
        },
        domesticStores: {
          unit: 'locations',
          label: 'In Japan',
        },
        overseasStores: {
          unit: 'locations',
          label: 'International',
        },
      },
      button: 'Read Our Brand Story',
      buttonLink: 'brand#section-brand-history',
    },
  },
  reasons: {
    ja: {
      title: 'フランチャイズオーナーに<br class="is-sm">選ばれる3つの理由',
      cards: [
        {
          number: '01',
          title: '世界に広がる日本カレー人気',
          description:
            '寿司やラーメンに続く成長市場として、日本カレーは世界から注目を集めています。需要の追い風がある今が参入を検討するタイミングです。',
        },
        {
          number: '02',
          title: 'シンプルで効率的な<br>オペレーション',
          description:
            '未経験者でも安心して運営できる、少人数・効率的なオペレーション。食材ロスやコストを抑え、安定した収益を実現します。',
        },
        {
          number: '03',
          title: '多彩な展開で収益を最大化',
          description:
            '地域に合わせたメニュー開発や、カレーパン、レトルトなどの物販展開により、収益を最大化。40年以上の実績に基づくノウハウでサポートします。',
        },
      ],
      buttons: ['サポート体制を見る', 'オーナーの声を見る'],
    },
    en: {
      title: '3 Reasons Franchise Owners Choose Us',
      cards: [
        {
          number: '01',
          title: 'Japanese Curry Is Going Global',
          description:
            'Following sushi and ramen, Japanese curry is winning attention worldwide as the next growth market. Demand is rising fast — now is the time to enter.',
        },
        {
          number: '02',
          title: 'Simple and Efficient Operations',
          description:
            'Streamlined operations let a small team run the business with confidence, even with no prior experience. Minimizing food waste and running costs keeps profitability steady.',
        },
        {
          number: '03',
          title: 'Multiple Revenue Streams',
          description:
            'Grow revenue with menus developed for your region and retail products such as curry buns and ready-to-eat pouches. We support you with more than 40 years of accumulated know-how.',
        },
      ],
      buttons: ['See How We Support You', 'Hear from Our Owners'],
      buttonLinks: {
        support: 'support',
        testimonials: 'testimonials',
      },
    },
  },
  header: {
    ja: {
      nav: {
        brand: '上等カレーとは',
        franchise: 'フランチャイズ事業内容',
        support: 'サポート体制',
        faq: 'よくある質問',
      },
      ariaLabels: {
        mainNav: 'メインナビゲーション',
        openMenu: 'メニューを開く',
        closeMenu: 'メニューを閉じる',
        mobileNav: 'モバイルナビゲーション',
      },
      logoAlt: '上等カレー',
    },
    en: {
      nav: {
        brand: 'About Joto Curry',
        franchise: 'Franchise Business',
        support: 'Support System',
        faq: 'FAQ',
      },
      ariaLabels: {
        mainNav: 'Main navigation',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        mobileNav: 'Mobile navigation',
      },
      logoAlt: 'Joto Curry',
    },
  },
  footer: {
    ja: {
      nav: {
        home: 'ホーム',
        brand: '上等カレーとは',
        franchise: 'フランチャイズ事業内容',
        support: 'サポート体制',
        faq: 'よくある質問',
        contact: 'お問い合わせ',
      },
      labels: {
        address: '住所:',
        contact: 'お問い合わせ:',
      },
      companyInfo: {
        postalCode: '〒541-0052',
        address: '大阪府大阪市中央区安土町3-2-16長野ビル3F',
      },
      legal: {
        privacy: 'プライバシーポリシー',
        cookie: 'Cookieについて',
      },
      ariaLabel: 'フッターナビゲーション',
      logoAlt: '上等カレー',
      copyright: '©得正 All Rights Reserved.',
    },
    en: {
      nav: {
        home: 'Home',
        brand: 'About Joto Curry',
        franchise: 'Franchise Business',
        support: 'Support System',
        faq: 'FAQ',
        contact: 'Contact',
      },
      labels: {
        address: 'Address:',
        contact: 'Contact:',
      },
      companyInfo: {
        // 郵便番号は英語表記では住所末尾に含めるため、専用行は空にする
        postalCode: '',
        address:
          '3F Nagano Building, 3-2-16 Azuchi-cho, Chuo-ku, Osaka 541-0052, Japan',
      },
      legal: {
        privacy: 'Privacy Policy',
        cookie: 'About Cookies',
      },
      ariaLabel: 'Footer navigation',
      logoAlt: 'Joto Curry',
      copyright: '© Tokumasa Co., Ltd. All Rights Reserved.',
    },
  },
  cta: {
    ja: {
      title: 'どんな小さな疑問でも、<br class="is-sm">お気軽にご相談ください。',
      questions: [
        '初期費用はどれくらい必要ですか？',
        '未経験でも運営できますか？',
        '開業までどのくらいの期間がかかりますか？',
        '収益モデルはどのようになっていますか？',
      ],
      text: '経験豊富なスタッフが、親身にお答えします。',
      button: '出店のご相談はこちら',
    },
    en: {
      title: "No question is too small — we're here to help.",
      questions: [
        'How much initial investment is required?',
        'Can I run a store with no prior experience?',
        'How long does it take to open a store?',
        'How does the revenue model work?',
      ],
      text: 'Our experienced team will answer your questions personally.',
      button: 'Talk to Us About Opening a Store',
    },
  },
  franchise: {
    page: {
      ja: {
        title: '上等カレー - フランチャイズ事業内容',
        heroTitle: 'フランチャイズ事業内容',
        heroSubtitle:
          '少人数のスタッフでも安定した利益を生む、上等カレーのフランチャイズビジネスについてご紹介します。',
      },
      en: {
        title: 'Joto Curry - Franchise Business',
        heroTitle: 'Franchise Business',
        heroSubtitle:
          'How a Joto Curry franchise generates stable profits with a small team.',
      },
    },
    mechanisms: {
      ja: {
        title: '安定した利益を生む<br class="is-sm">4つの仕組み',
        subtitle:
          '少人数のスタッフでも安定した売上をつくれるように、効率的で再現性の高い調理システムを構築しています。',
        cards: [
          {
            title: 'シンプルな調理で味の再現性を担保',
            paragraphs: [
              '調理も提供も、手順はシンプル。設備投資は少なく、スタッフの負担も軽い。ルーの決め手は、ブランドの魂「秘伝のエキス」。セントラルキッチンから完璧な状態で届きます。',
              '店舗では牛肉とスパイスを加えて仕上げるだけ。どの国でもブレない最高品質の味を再現できます。',
            ],
          },
          {
            title: '高回転運営で売上最大化',
            paragraphs: [
              'オーダーから提供までがハイスピードで可能なため、ランチタイムなどのピーク時でも回転率を上げることができます。席数が限られた立地でも、売上最大化を狙えるオペレーションです。',
            ],
          },
          {
            title: '少ないロスで収益性向上',
            paragraphs: [
              '廃棄物の量も少ないため、原価管理がしやすく、収益性の向上にもつながります。売上だけでなく利益額を見通しやすくなることで、安心して出店計画や設備投資を検討いただけます。',
            ],
          },
          {
            title: '現地メニュー開発でリピート獲得',
            paragraphs: [
              '現地の嗜好に合わせたオリジナルメニューの開発が可能です。既存メニューとの差別化や季節限定商品として、リピート促進にも活用いただけます。',
              '要望に応じて、日本の人気メニューのレシピについても共有します。',
            ],
          },
        ],
      },
      en: {
        title: '4 Systems Behind Stable Profits',
        subtitle:
          'We built our kitchen operations for efficiency and consistency, so a small team can keep sales stable.',
        cards: [
          {
            title: 'Simple Cooking, Consistent Taste',
            paragraphs: [
              'Cooking and serving procedures are simple by design, keeping kitchen investment low and staff workload light. The roux — blended with our "secret essence," the soul of the brand — arrives from our central kitchen in perfect condition.',
              'Your restaurant simply adds beef and spices to finish the curry — the same top quality, in any country.',
            ],
          },
          {
            title: 'Fast Turnover, Higher Sales',
            paragraphs: [
              'Since orders can be served at high speed, turnover can be increased even during peak times such as lunch hours. This is an operation that can maximize sales even in locations with limited seating.',
            ],
          },
          {
            title: 'Less Waste, More Profit',
            paragraphs: [
              'Since the amount of waste is also small, cost management is easier, leading to improved profitability. By making it easier to forecast not only sales but also profit amounts, you can consider store opening plans and equipment investments with confidence.',
            ],
          },
          {
            title: 'Local Menus, Repeat Customers',
            paragraphs: [
              'It is possible to develop original menus tailored to local preferences. You can use them to differentiate from existing menus or as seasonal limited products to promote repeat customers.',
              'We also share recipes for popular Japanese menus upon request.',
            ],
          },
        ],
      },
    },
    support: {
      ja: {
        title: '充実したサポート体制',
        subtitle:
          '開業前の準備からオープン後の運営まで、専門チームが一貫して伴走します。',
        blocks: [
          {
            title: '開業準備のトータルサポート',
            description:
              'エリア選定から物件選び、資金計画、融資相談、事業計画書の作成まで、開業に必要なすべての準備をサポートします。',
          },
          {
            title: '研修とトレーニングで不安をゼロに',
            description:
              'カレー作りから接客、衛生管理、数値管理まで、実店舗に近い環境での研修プログラムを実施。飲食業未経験の方でも安心してスタートできます。',
          },
          {
            title: 'オープン後も続く伴走サポート',
            description:
              'オープン後も現場コンサルティング、集客施策、メニュー改善提案、定期的な売上・数値レビューなど、継続的なサポートを提供します。',
          },
        ],
        imageAlt: '充実したサポート体制',
      },
      en: {
        title: 'Comprehensive Support System',
        subtitle:
          'A professional team will consistently accompany you from pre-opening preparation to post-opening operations.',
        blocks: [
          {
            title: 'Total Support for Opening Preparation',
            description:
              'We support all preparations necessary for opening, from area selection to property selection, financial planning, loan consultation, and business plan creation.',
          },
          {
            title: 'Zero Anxiety with Training and Education',
            description:
              'We conduct training programs in an environment close to actual stores, from curry making to customer service, hygiene management, and numerical management. Even those without experience in the food service industry can start with confidence.',
          },
          {
            title: 'Continuous Support Even After Opening',
            description:
              'Even after opening, we provide ongoing support including on-site consulting, customer acquisition strategies, menu improvement proposals, and regular sales and performance reviews.',
          },
        ],
        imageAlt: 'Comprehensive Support System',
      },
    },
    voices: {
      ja: {
        title: '出店を決めた<br class="is-sm">フランチャイズオーナーの声',
        subtitle:
          'なぜ上等カレーへの出店を決めたのか。開業前の不安や、実際の運営の手応えなどリアルな声をご紹介。',
      },
      en: {
        title: 'Voices from Franchise Owners Who Decided to Open',
        subtitle:
          'Why did they decide to open a Joto Curry franchise? We introduce real voices about pre-opening concerns and the actual operational feel.',
      },
    },
  },
  brand: {
    page: {
      ja: {
        title: '上等カレー - ブランド',
        heroTitle: '上等カレーとは',
        heroSubtitle:
          '大阪生まれ。カレー一筋、40年以上。<br>伝統の味を守りながら、時代に合わせた進化を続け、今では世界へと広がっています。',
      },
      en: {
        title: 'Joto Curry - Brand',
        heroTitle: 'About Joto Curry',
        heroSubtitle:
          'Born in Osaka. Specializing in curry for over 40 years.<br>We preserve the traditional taste, evolve with the times, and are now expanding worldwide.',
      },
    },
    origin: {
      ja: {
        title: '起源と、<br class="is-sm">味へのこだわり',
        blockTitles: [
          '原点は、一杯のカレーうどん',
          'こだわりの素材が生み出す<br class="is-sm">「上等」な味わい',
        ],
        paragraphs: [
          {
            text: '上等カレーを運営する得正は、1983年に「手打ちうどん 得正」として創業。生粋のカレー愛好家でもある創業者・瀬戸口勝幸は、名物「得正カレーうどん」を生み出しました。',
          },
          {
            text: 'この味を、もっと多くの人に、もっと手軽に届けたい——。その想いから、コンセプトはカレーうどんからカレーライスへと進化し、1995年、上等カレーの1号店が誕生しました。',
          },
          {
            text: '厳選した国産牛、玉ねぎ、こだわりのスパイス、そしてごく一部の職人だけが知る「秘伝のエキス」によって生まれる甘みとスパイスの絶妙なバランス。',
          },
          {
            text: '上等カレーはその名のとおり、「上等」と呼ぶにふさわしい本格的なカレー体験をお届けすることに、変わらぬこだわりを持ち続けています。',
          },
        ],
        imageAlt: '上等カレーの起源',
      },
      en: {
        title: 'Our Origins, Our Craft',
        blockTitles: [
          'It All Began with a Bowl of Curry Udon',
          'Premium Flavor from Carefully Chosen Ingredients',
        ],
        paragraphs: [
          {
            text: 'Tokumasa, the company behind Joto Curry, was founded in 1983 as "Handmade Udon Tokumasa." Founder Katsuyuki Setoguchi, a true curry enthusiast, created the signature "Tokumasa Curry Udon."',
          },
          {
            text: 'He wanted to bring this flavor to more people, more easily. So the concept evolved from curry udon to curry rice — and in 1995, the first Joto Curry opened its doors.',
          },
          {
            text: 'Carefully selected Japanese beef and onions. Specially blended spices. And a "secret essence" known only to a few artisans. Together, they create an exquisite balance of sweetness and spice.',
          },
          {
            text: 'True to its name — "Joto" meaning "premium" — Joto Curry remains committed to delivering an authentic curry experience worthy of the name.',
          },
        ],
        imageAlt: 'The origin of Joto Curry',
      },
    },
    unique: {
      ja: {
        title: '唯一無二の味づくり',
        imageAlts: ['カレースプーン', '食材', 'カレーペースト'],
        blocks: [
          {
            title: '甘み、スパイス、旨みが織りなす<br class="is-sm">ハーモニー',
            paragraphs: [
              'ひと口目のやさしい甘み。食べ進めるほどに広がる香り高いスパイスと深い旨み。そして最後に残る、豊かな余韻。',
              '計算し尽くされた三層の味わいが、お客様の「また食べたい」を生み出します。',
            ],
          },
          {
            title: '素材と技術が生む深いコク',
            paragraphs: [
              '厳選した国産牛と玉ねぎ。独自ブレンドのスパイス。加圧調理と低温熟成。40年以上かけて磨き上げた製法が、他では真似できない深いコクを生み出します。',
            ],
          },
          {
            title: '三人だけが知る秘伝のエキス',
            paragraphs: [
              '上等カレーの味の決め手となるのは、大阪で職人の手により丁寧に作られる秘伝のエキスです。そのレシピは創業者を含むわずか三人だけが知る門外不出のもの。',
              '秘伝のエキスは大阪でのみ製造し、各店舗へ届けられます。この徹底した管理が、世界中どの店舗でも変わらぬ本物の味を保証します。',
            ],
          },
        ],
      },
      en: {
        title: 'A Flavor Like No Other',
        imageAlts: ['Curry spoon', 'Ingredients', 'Curry paste'],
        blocks: [
          {
            title: 'A Harmony of Sweetness, Spice, and Umami',
            paragraphs: [
              'A gentle sweetness at first bite. Fragrant spices and deep umami that unfold as you eat. And a rich, lingering aftertaste.',
              'Three layers of flavor, designed down to the last detail — that is what keeps customers craving more.',
            ],
          },
          {
            title: 'Deep Richness from Ingredients and Technique',
            paragraphs: [
              'Carefully selected Japanese beef and onions. Our own spice blend. Pressure cooking and low-temperature aging. A method refined over more than 40 years creates a deep richness that cannot be replicated elsewhere.',
            ],
          },
          {
            title: 'A Secret Essence Known Only to Three',
            paragraphs: [
              "The key to Joto Curry's flavor is a secret essence, carefully crafted by artisans in Osaka. The recipe is a closely guarded secret, known only to the founder and two others.",
              'The essence is made only in Osaka and delivered to every restaurant. This tight control is what guarantees the same authentic taste, anywhere in the world.',
            ],
          },
        ],
      },
    },
    menu: {
      ja: {
        title: '幅広いニーズに応える<br class="is-sm">豊富なメニュー',
        paragraphs: [
          {
            text: '上等カレーの看板メニューは「カツカレー」。サクサクの衣とコク深い甘辛ルーの組み合わせは、国や世代を問わず高い支持を集めています。',
          },
          {
            text: 'ベースのルーは日本から供給。現地では牛肉とスパイスを加えて仕上げるだけなので、複雑な仕込みは不要です。トッピングや辛さの調整で、幅広いメニューを展開できます。さらに、地域特性に合わせたオリジナルメニューの開発もサポート。あなたの店でしか食べられない看板メニューがつくれます。',
          },
        ],
        popularTitle: '人気メニュー紹介',
        menuItems: [
          {
            name: 'カレーライス',
            category: '定番',
            alt: 'カレーライス',
          },
          {
            name: 'ほうれん草カレー',
            category: 'ヘルシー',
            alt: 'ほうれん草カレー',
          },
          {
            name: 'エビフライカレー',
            category: '定番',
            alt: 'エビフライカレー',
          },
          {
            name: 'チーズカレー',
            category: '女性人気',
            alt: 'チーズカレー',
          },
          {
            name: '温玉カレー',
            category: '定番',
            alt: '温玉カレー',
          },
          {
            name: 'カニクリームコロッケカレー',
            category: '女性人気',
            alt: 'カニクリームコロッケカレー',
          },
        ],
        imageAlt: '上等カレーのメニュー',
      },
      en: {
        title: 'A Menu for Every Market',
        paragraphs: [
          {
            text: "Joto Curry's signature dish is katsu curry. The combination of crispy breaded cutlet and rich sweet & spicy curry roux is beloved across countries and generations.",
          },
          {
            text: 'We supply the roux base from Japan; your kitchen simply adds beef and spices to finish it — no complicated preparation required. A wide range of menu items can be offered just by adjusting toppings and spice levels. We also support developing original menu items for local tastes — dishes your customers can find only at your restaurant.',
          },
        ],
        popularTitle: 'Popular Menu',
        menuItems: [
          {
            name: 'Curry Rice',
            category: 'Classic',
            alt: 'Curry Rice',
          },
          {
            name: 'Spinach Curry',
            category: 'Healthy',
            alt: 'Spinach Curry',
          },
          {
            name: 'Fried Shrimp Curry',
            category: 'Classic',
            alt: 'Fried Shrimp Curry',
          },
          {
            name: 'Cheese Curry',
            category: 'Fan Favorite',
            alt: 'Cheese Curry',
          },
          {
            name: 'Soft-Boiled Egg Curry',
            category: 'Classic',
            alt: 'Soft-Boiled Egg Curry',
          },
          {
            name: 'Creamy Crab Croquette Curry',
            category: 'Fan Favorite',
            alt: 'Creamy Crab Croquette Curry',
          },
        ],
        imageAlt: 'Joto Curry Menu',
      },
    },
    history: {
      ja: {
        title: '世界への歩み',
        intro: [
          '40年以上の実績を持つブランドだからこそ、安定したフランチャイズ運営が可能です。',
          '上等カレーのルーツは、1983年に大阪で生まれた小さなうどん店。そこから国内外へ店舗を広げ、いままさにグローバルブランドへと成長を続けています。この確かな歩みが、あなたの成功を支えます。',
        ],
        button: 'フランチャイズの<br class="is-sm">ご相談はこちら',
        timeline: [
          {
            year: '1983',
            heading: 'グルメの街・大阪で誕生',
            paragraphs: [
              '食の都・大阪で「手打ちうどん 得正」として創業。創業者のこだわりが生んだカレーうどんが評判を呼び、カレー専門店への展開を決意。',
            ],
            imageAlt: 'グルメの街・大阪で誕生',
          },
          {
            year: '1990s',
            heading: 'ナショナルブランドへと成長',
            paragraphs: [
              '1995年、カレー専門店「上等カレー」として本格的なチェーン展開を開始。大阪を中心にオフィスワーカーから口コミで人気が広がり高い支持を獲得。',
              '著名人やメディアにも取り上げられ、「大阪の名物カレー」として認知が広がりました。',
            ],
            imageAlt: 'ナショナルブランドへと成長',
          },
          {
            year: 'Now',
            heading: 'そして、グローバルブランドへ',
            paragraphs: [
              '現在、海外11店舗を展開中。モンゴル、タイ、カンボジアでの成功に続き、2025年以降、韓国、中国、シンガポール、インドネシア、フィリピン、カナダでの事業計画が進行中です。',
              '世界で成長し続けるブランドと共に、あなたも成功への一歩を踏み出しませんか。',
            ],
            imageAlt: 'そして、グローバルブランドへ',
          },
        ],
      },
      en: {
        title: 'From Osaka to the World',
        intro: [
          'Four decades of history stand behind every new restaurant.',
          'Joto Curry traces its roots to a small udon shop that opened in Osaka in 1983. It has since expanded across Japan and overseas — and that steady track record is what supports your success.',
        ],
        button: 'Talk to Us About Franchising',
        timeline: [
          {
            year: '1983',
            heading: 'Born in Osaka, the Gourmet City',
            paragraphs: [
              'Established in Osaka, Japan\'s food capital, as "Handmade Udon Tokumasa." The founder\'s curry udon proved so popular that he decided to open a restaurant devoted to curry.',
            ],
            imageAlt: 'Born in Osaka, the Gourmet City',
          },
          {
            year: '1990s',
            heading: 'Growth into a National Brand',
            paragraphs: [
              'In 1995, Joto Curry launched as a dedicated curry restaurant and began full-scale chain expansion. In Osaka, word of mouth spread among office workers, earning the brand strong local support.',
              'Featured by celebrities and media, it became widely recognized as "Osaka\'s Famous Curry."',
            ],
            imageAlt: 'Growth into a National Brand',
          },
          {
            year: 'Now',
            heading: 'Becoming a Global Brand',
            paragraphs: [
              'Currently operating 11 stores overseas. Following success in Mongolia, Thailand, and Cambodia, expansion plans for South Korea, China, Singapore, Indonesia, the Philippines, and Canada are underway from 2025 onwards.',
              'Take the first step — with a brand that keeps growing worldwide.',
            ],
            imageAlt: 'Becoming a Global Brand',
          },
        ],
      },
    },
    stores: {
      ja: {
        title: '世界の店舗',
        fallbackText: 'ストリート',
      },
      en: {
        title: 'Stores Around the World',
        fallbackText: 'Street',
      },
    },
  },
  contact: {
    page: {
      ja: {
        title: '上等カレー - お問い合わせ',
        heroTitle: 'お問い合わせ',
        heroSubtitle:
          'どんな小さな疑問でも、お気軽にご相談ください。<br>海外フランチャイズ・卸・メディア取材など、こちらからお問い合わせいただけます。',
      },
      en: {
        title: 'Joto Curry - Contact',
        heroTitle: 'Contact',
        heroSubtitle:
          'Feel free to contact us with any questions, no matter how small. You can contact us here for international franchises, wholesale, media inquiries, and more.',
      },
    },
    form: {
      ja: {
        title: 'フランチャイズに関するお問い合わせ',
        subtitle:
          '出店をご検討中の方は、下記フォームよりお気軽にご相談ください。',
        fields: {
          lastName: '姓',
          firstName: '名',
          email: 'メール',
          emailPlaceholder: 'example@example.com',
          area: '展開予定エリア',
          areaPlaceholder: '選択してください',
          areaOptions: {
            asia: 'アジア',
            europe: 'ヨーロッパ',
            americas: '南北アメリカ',
            oceania: 'オセアニア',
            other: 'その他',
          },
          purpose: 'お問い合わせ目的',
          purposePlaceholder: '選択してください',
          purposeOptions: {
            franchise: 'フランチャイズについて',
            wholesale: '卸について',
            media: 'メディア取材について',
            other: 'その他',
          },
          situation: '現在のご状況を教えてください',
          situationOptions: {
            restaurantOwner: '飲食店オーナーで、新規出店を検討',
            conversion: '既存店の業態転換を検討',
            developer: 'デベロッパーとして検討',
            individual: '個人として出店を検討',
          },
          message: 'メッセージ',
          messagePlaceholder:
            '例)出店を検討している国・エリア、オープン希望時期、ご質問などをご自由にご記入ください。',
          privacy: 'プライバシーポリシー',
          privacyAgree: 'に同意します',
          submit: '無料相談を申し込む',
        },
        messages: {
          submitting: '送信中...',
          success:
            'お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。',
          error: '送信に失敗しました。しばらく時間をおいて再度お試しください。',
          validationError: '入力内容に誤りがあります。ご確認ください。',
          errors: {
            lastName: '姓を入力してください',
            firstName: '名を入力してください',
            email: 'メールアドレスを正しく入力してください',
            area: '展開予定エリアを選択してください',
            purpose: 'お問い合わせ目的を選択してください',
            situation: '現在のご状況を選択してください',
            privacy: 'プライバシーポリシーに同意してください',
          },
        },
      },
      en: {
        title: 'Franchise Inquiry',
        subtitle:
          'If you are considering opening a store, please feel free to contact us using the form below.',
        fields: {
          lastName: 'Last Name',
          firstName: 'First Name',
          email: 'Email',
          emailPlaceholder: 'example@example.com',
          area: 'Planned Expansion Area',
          areaPlaceholder: 'Please select',
          areaOptions: {
            asia: 'Asia',
            europe: 'Europe',
            americas: 'Americas',
            oceania: 'Oceania',
            other: 'Other',
          },
          purpose: 'Inquiry Purpose',
          purposePlaceholder: 'Please select',
          purposeOptions: {
            franchise: 'About Franchise',
            wholesale: 'About Wholesale',
            media: 'About Media Coverage',
            other: 'Other',
          },
          situation: 'Please tell us about your current situation',
          situationOptions: {
            restaurantOwner: 'Restaurant owner considering new store opening',
            conversion: 'Considering business conversion of existing store',
            developer: 'Considering as developer',
            individual: 'Considering opening as individual',
          },
          message: 'Message',
          messagePlaceholder:
            'Example) Please feel free to write about the country/area you are considering for opening, desired opening time, questions, etc.',
          privacy: 'Privacy Policy',
          privacyAgree: 'I agree to the ',
          submit: 'Apply for Free Consultation',
        },
        messages: {
          submitting: 'Sending...',
          success:
            'Thank you for your inquiry. We will contact you as soon as we review your message.',
          error: 'Failed to send. Please try again later.',
          validationError: 'Please check your input.',
          errors: {
            lastName: 'Please enter your last name',
            firstName: 'Please enter your first name',
            email: 'Please enter a valid email address',
            area: 'Please select an area',
            purpose: 'Please select a purpose',
            situation: 'Please select your situation',
            privacy: 'Please agree to the privacy policy',
          },
        },
      },
    },
    // 問い合わせ者へ自動返信するメールの本文
    autoReply: {
      ja: {
        subject: '【上等カレー】お問い合わせありがとうございます',
        intro:
          'この度は上等カレーへお問い合わせいただき、誠にありがとうございます。\n以下の内容で承りました。担当者より順次ご連絡いたしますので、今しばらくお待ちくださいませ。',
        contentHeading: '───────────────\n■ お問い合わせ内容\n───────────────',
        notice:
          '※本メールは送信専用アドレスからの自動送信です。\n※お心当たりのない場合は、お手数ですが本メールを破棄してください。',
        signature:
          '───────────────\n株式会社得正 上等カレー\n〒541-0052 大阪府大阪市中央区安土町3-2-16 長野ビル3F\nTEL: 06-6926-8286\nhttps://international.tokumasa.net\n───────────────',
      },
      en: {
        subject: '【Joto Curry】Thank you for your inquiry',
        intro:
          'Thank you very much for contacting Joto Curry.\nWe have received your inquiry as shown below. A member of our team will get back to you shortly.',
        contentHeading: '───────────────\n■ Your Inquiry\n───────────────',
        notice:
          'This is an automated message sent from a send-only address.\nIf you did not submit this inquiry, please disregard this email.',
        signature:
          '───────────────\nTokumasa Co., Ltd. / Joto Curry\n3F Nagano Building, 3-2-16 Azuchi-cho, Chuo-ku, Osaka-shi, Osaka 541-0052, Japan\nTEL: +81-6-6926-8286\nhttps://international.tokumasa.net\n───────────────',
      },
    },
    faq: {
      ja: {
        title: 'よくある質問',
        subtitle:
          '初期費用やトレーニング、サポート体制など、オーナー候補の方から多く寄せられるご質問をまとめました。',
        cta: {
          title: 'お気軽にご相談ください',
          text: 'こちらにないご質問も、お気軽にご相談ください。詳細について直接お話しさせていただきます。',
          button: 'お問い合わせはこちら',
        },
      },
      en: {
        title: 'Frequently Asked Questions',
        subtitle:
          'We have compiled frequently asked questions from potential owners regarding initial costs, training, support systems, and more.',
        cta: {
          title: 'Still have questions?',
          text: 'Please feel free to contact us with any questions not listed here. We will discuss the details directly with you.',
          button: 'Contact Us',
        },
      },
    },
  },
  privacy: {
    page: {
      ja: {
        title: '上等カレー - プライバシーポリシー',
        heroTitle: 'プライバシーポリシー',
        heroSubtitle: '個人情報の取り扱いについて',
      },
      en: {
        title: 'Joto Curry - Privacy Policy',
        heroTitle: 'Privacy Policy',
        heroSubtitle: 'Handling of Personal Information',
      },
    },
    content: {
      ja: {
        intro:
          '株式会社得正（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、以下のプライバシーポリシーに基づき、個人情報を適切に取り扱います。',
        sections: [
          {
            title: '1. 個人情報の定義',
            content:
              '個人情報とは、氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報をいいます。',
          },
          {
            title: '2. 個人情報の収集',
            content:
              '当社は、お問い合わせフォームやフランチャイズ申し込みなど、お客様から直接提供いただく場合に個人情報を収集します。収集する際は、利用目的を明示し、必要最小限の範囲で収集します。',
          },
          {
            title: '3. 個人情報の利用目的',
            content:
              '当社は、収集した個人情報を以下の目的で利用します。\n・お問い合わせへの回答\n・フランチャイズに関する情報提供\n・サービスの改善\n・法令に基づく対応',
          },
          {
            title: '4. 個人情報の第三者提供',
            content:
              '当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。',
          },
          {
            title: '5. 個人情報の管理',
            content:
              '当社は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。',
          },
          {
            title: '6. 個人情報の開示・訂正・削除',
            content:
              'お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、本人確認の上、速やかに対応いたします。',
          },
          {
            title: '7. お問い合わせ',
            content:
              '個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。\n\n株式会社得正\n〒541-0052 大阪府大阪市中央区安土町3-2-16長野ビル3F\nTEL: 06-6926-8286\nEmail: kawakami@tokumasa.net',
          },
          {
            title: '8. プライバシーポリシーの変更',
            content:
              '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトにて公表します。',
          },
        ],
        lastUpdated: '最終更新日: 2024年1月',
      },
      en: {
        intro:
          'Tokumasa Co., Ltd. (hereinafter referred to as "the Company") considers the protection of personal information to be an important responsibility and handles personal information appropriately based on the following privacy policy.',
        sections: [
          {
            title: '1. Definition of Personal Information',
            content:
              'Personal information refers to information that can identify a specific individual, such as name, address, phone number, and email address.',
          },
          {
            title: '2. Collection of Personal Information',
            content:
              'The Company collects personal information when it is directly provided by customers through inquiry forms, franchise applications, etc. When collecting, we clearly state the purpose of use and collect only the minimum necessary information.',
          },
          {
            title: '3. Purpose of Use of Personal Information',
            content:
              'The Company uses collected personal information for the following purposes:\n- Responding to inquiries\n- Providing information about franchises\n- Improving services\n- Responding based on laws and regulations',
          },
          {
            title: '4. Provision of Personal Information to Third Parties',
            content:
              'The Company will not provide personal information to third parties without the consent of the customer, except as required by law.',
          },
          {
            title: '5. Management of Personal Information',
            content:
              'The Company takes appropriate security measures to prevent leakage, loss, and damage of personal information.',
          },
          {
            title:
              '6. Disclosure, Correction, and Deletion of Personal Information',
            content:
              'When a customer requests disclosure, correction, or deletion of personal information, we will respond promptly after confirming the identity.',
          },
          {
            title: '7. Contact',
            content:
              'For inquiries regarding the handling of personal information, please contact:\n\nTokumasa Co., Ltd.\n3F Nagano Building, 3-2-16 Azuchi-cho, Chuo-ku, Osaka-shi, Osaka 541-0052, Japan\nTEL: 06-6926-8286\nEmail: kawakami@tokumasa.net',
          },
          {
            title: '8. Changes to Privacy Policy',
            content:
              'The Company may change this privacy policy as necessary. Any changes will be announced on this website.',
          },
        ],
        lastUpdated: 'Last Updated: January 2024',
      },
    },
  },
  cookie: {
    page: {
      ja: {
        title: '上等カレー - Cookieについて',
        heroTitle: 'Cookieについて',
        heroSubtitle: 'Cookieの使用について',
      },
      en: {
        title: 'Joto Curry - About Cookies',
        heroTitle: 'About Cookies',
        heroSubtitle: 'About the Use of Cookies',
      },
    },
    content: {
      ja: {
        intro:
          '当ウェブサイトでは、お客様により良いサービスを提供するためにCookieを使用しています。',
        sections: [
          {
            title: '1. Cookieとは',
            content:
              'Cookieとは、ウェブサイトを閲覧した際に、お客様のコンピュータやスマートフォンに保存される小さなテキストファイルです。Cookieにより、ウェブサイトはお客様のブラウザを認識し、次回訪問時により便利なサービスを提供することができます。',
          },
          {
            title: '2. 当サイトで使用するCookie',
            content:
              '当サイトでは、以下の目的でCookieを使用しています。\n\n【必須Cookie】\nウェブサイトの基本的な機能を提供するために必要なCookieです。\n\n【分析Cookie】\nウェブサイトの利用状況を分析し、サービス改善に役立てるためのCookieです。Google Analyticsなどの第三者サービスを利用する場合があります。',
          },
          {
            title: '3. Cookieの管理',
            content:
              'お客様はブラウザの設定により、Cookieの受け入れを拒否したり、保存されたCookieを削除することができます。ただし、Cookieを無効にした場合、当ウェブサイトの一部機能が正常に動作しない場合があります。',
          },
          {
            title: '4. 第三者Cookie',
            content:
              '当サイトでは、アクセス解析やサービス改善のため、第三者が提供するサービス（Google Analytics等）を利用しています。これらのサービスは独自のCookieを使用する場合があります。',
          },
          {
            title: '5. お問い合わせ',
            content:
              'Cookieの使用に関するお問い合わせは、以下までご連絡ください。\n\n株式会社得正\n〒541-0052 大阪府大阪市中央区安土町3-2-16長野ビル3F\nTEL: 06-6926-8286\nEmail: kawakami@tokumasa.net',
          },
        ],
        lastUpdated: '最終更新日: 2024年1月',
      },
      en: {
        intro: 'This website uses cookies to provide you with better services.',
        sections: [
          {
            title: '1. What are Cookies?',
            content:
              'Cookies are small text files that are stored on your computer or smartphone when you browse a website. Cookies allow websites to recognize your browser and provide more convenient services on your next visit.',
          },
          {
            title: '2. Cookies Used on This Site',
            content:
              'We use cookies for the following purposes:\n\n【Essential Cookies】\nCookies necessary to provide basic website functionality.\n\n【Analytics Cookies】\nCookies used to analyze website usage and improve our services. We may use third-party services such as Google Analytics.',
          },
          {
            title: '3. Managing Cookies',
            content:
              'You can refuse to accept cookies or delete stored cookies through your browser settings. However, if you disable cookies, some features of this website may not function properly.',
          },
          {
            title: '4. Third-Party Cookies',
            content:
              'This site uses services provided by third parties (such as Google Analytics) for access analysis and service improvement. These services may use their own cookies.',
          },
          {
            title: '5. Contact',
            content:
              'For inquiries regarding the use of cookies, please contact:\n\nTokumasa Co., Ltd.\n3F Nagano Building, 3-2-16 Azuchi-cho, Chuo-ku, Osaka-shi, Osaka 541-0052, Japan\nTEL: 06-6926-8286\nEmail: kawakami@tokumasa.net',
          },
        ],
        lastUpdated: 'Last Updated: January 2024',
      },
    },
  },
  meta: {
    ja: {
      home: {
        title: '上等カレー | 海外フランチャイズオーナー募集',
        description:
          '大阪発の甘辛カツカレー「上等カレー」の海外フランチャイズオーナーを募集中。1983年創業の実績とシンプルなオペレーションで、未経験からでも開業できます。',
      },
      brand: {
        description:
          '1970年代から続く大阪発のカレー専門店「上等カレー」のブランドストーリー。唯一無二の味づくりと世界への歩みをご紹介します。',
      },
      franchise: {
        description:
          '上等カレーのフランチャイズ事業内容。安定した利益を生む4つの仕組み、充実したサポート体制、オーナーの声をご紹介します。',
      },
      contact: {
        description:
          '上等カレーへのお問い合わせ。海外フランチャイズ・卸・メディア取材など、お気軽にご相談ください。',
      },
      privacy: {
        description:
          '株式会社得正のプライバシーポリシー。個人情報の取り扱いについてご説明します。',
      },
      cookie: {
        description:
          '上等カレー公式サイトのCookieの使用について。Cookieの種類と管理方法をご説明します。',
      },
      notFound: {
        title: 'ページが見つかりません | 上等カレー',
        description: 'お探しのページは存在しないか、移動した可能性があります。',
        backToTop: 'トップへ戻る',
      },
    },
    en: {
      home: {
        title: 'Joto Curry | International Franchise Owners Wanted',
        description:
          "Osaka's sweet & spicy katsu curry franchise. Proven success since 1983, simple operations, and no experience required. Start your Joto Curry franchise today.",
      },
      brand: {
        description:
          'Discover the story of Joto Curry, an Osaka-born curry restaurant with roots going back to 1983. Learn about our craft and our journey from Osaka to the world.',
      },
      franchise: {
        description:
          'Joto Curry franchise business details. Learn about our 4 mechanisms for stable profits, comprehensive support system, and franchise owner testimonials.',
      },
      contact: {
        description:
          'Contact Joto Curry for international franchise, wholesale, media inquiries, and more. We welcome all inquiries.',
      },
      privacy: {
        description:
          'Privacy policy of Tokumasa Co., Ltd. explaining our handling of personal information.',
      },
      cookie: {
        description:
          'About the use of cookies on the Joto Curry official website. Types of cookies and how to manage them.',
      },
      notFound: {
        title: 'Page Not Found | Joto Curry',
        description:
          'The page you are looking for does not exist or may have been moved.',
        backToTop: 'Back to Top',
      },
    },
  },
};

type Locale = 'ja' | 'en';
type LocalizedSections = {
  [K in keyof typeof translations]: (typeof translations)[K] extends {
    ja: infer JA;
    en: infer EN;
  }
    ? { ja: JA; en: EN }
    : never;
};

/**
 * 翻訳データを取得
 * @param section - セクション名
 * @param locale - 言語（'ja' | 'en'）
 * @returns 翻訳データ
 */
export function getTranslation<T extends keyof LocalizedSections>(
  section: T,
  locale: Locale = 'ja'
): LocalizedSections[T][Locale] {
  const sectionData = translations[section] as LocalizedSections[T];
  return sectionData[locale];
}
