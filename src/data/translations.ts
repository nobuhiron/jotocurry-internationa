/**
 * 翻訳データ
 * indexページ用の日本語・英語の翻訳データ
 */

export const translations = {
  hero: {
    ja: {
      badge: '海外フランチャイズオーナー募集中',
      title: '大阪発の<br class="is-sm">甘辛カツカレーを、<br>あなたの街で。',
      features: [
        '✔ 40年の実績',
        '✔︎ シンプル運営',
        '✔︎ 未経験からスタート可能',
      ],
      description:
        'シンプルなオペレーションで展開できる<br>日本カレーのフランチャイズビジネス。',
      buttons: {
        primary: 'まずは無料オンライン相談',
        secondary: '詳細資料をダウンロード',
      },
    },
    en: {
      badge: 'Franchise Owners Wanted',
      title: "Osaka's Sweet & Spicy Katsu Curry,<br>in Your City.",
      features: [
        '✔ 40 Years of Experience',
        '✔ Simple Operations',
        '✔ No Experience Required',
      ],
      description:
        'A simple operation to expand<br>Japanese curry franchise business.',
      buttons: {
        primary: 'Free Online Consultation',
        secondary: 'Download Detailed Materials',
      },
    },
  },
  about: {
    ja: {
      title: '大阪生まれの甘辛カレーは、<br>今、世界へ広がっています。',
      description:
        '日本の食文化、特にカツカレーを世界に広めることをミッションとして、2004年に「TOKUMASA INTERNATIONAL」を設立しました。日本カレーは、寿司やラーメンに続く、世界で注目される日本の食文化です。この機会に、ぜひフランチャイズオーナーとして、あなたの街で上等カレーを展開してみませんか。',
      button: 'まずは無料オンライン相談',
    },
    en: {
      title: "Osaka's Sweet & Spicy Curry is Now Spreading Worldwide.",
      description:
        'With the mission of spreading Japanese food culture, especially katsu curry, to the world, we established "TOKUMASA INTERNATIONAL" in 2004. Japanese curry is a Japanese food culture that is attracting attention worldwide, following sushi and ramen. Why not take this opportunity to become a franchise owner and expand Joto Curry in your city?',
      button: 'Free Online Consultation',
    },
  },
  brandPower: {
    ja: {
      title: '数字が証明する上等カレーのブランド力',
      description:
        '40年で築いた確かな実績。これらの数字は、高い回転数による安定した収益と、グローバル展開による将来の成長性を裏付けています。',
      stats: {
        meals: {
          value: '5000',
          unit: '食',
          label: '1日の平均提供食数',
        },
        domesticStores: {
          unit: '店舗',
          label: '国内展開店舗数',
        },
        overseasStores: {
          unit: '店舗',
          label: '海外展開店舗数',
        },
      },
      button: 'ブランドストーリーを見る',
    },
    en: {
      title: "Numbers Prove Joto Curry's Brand Power",
      description:
        'Solid achievements built over 40 years. These numbers demonstrate stable revenue from high turnover and future growth potential through global expansion.',
      stats: {
        meals: {
          unit: 'meals',
          label: 'Average Daily Meals Served',
        },
        domesticStores: {
          unit: 'stores',
          label: 'Domestic Stores',
        },
        overseasStores: {
          unit: 'stores',
          label: 'Overseas Stores',
        },
      },
      button: 'View Brand Story',
    },
  },
  reasons: {
    ja: {
      title: 'フランチャイズオーナーに<br class="is-sm">選ばれる3つの理由',
      cards: [
        {
          number: '01',
          title: '世界的な日本カレー人気',
          description:
            '日本カレーは、寿司やラーメンに続く成長市場として、世界中で注目されています。今こそ、この機会を逃さないでください。',
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
            '地域に合わせたメニュー開発や、カレーパン、レトルトなどの物販展開により、収益を最大化。40年の実績に基づくノウハウでサポートします。',
        },
      ],
      buttons: ['サポート体制を見る', 'オーナーの声を見る'],
    },
    en: {
      title: '3 Reasons Why Franchise Owners Choose Us',
      cards: [
        {
          number: '01',
          title: 'Global Popularity of Japanese Curry',
          description:
            "Japanese curry is attracting attention worldwide as a growing market following sushi and ramen. Don't miss this opportunity now.",
        },
        {
          number: '02',
          title: 'Simple and Efficient Operations',
          description:
            'Small-scale, efficient operations that even inexperienced people can manage with confidence. Reduce food waste and costs to achieve stable profits.',
        },
        {
          number: '03',
          title: 'Maximize Revenue with Diverse Expansion',
          description:
            'Maximize revenue through menu development tailored to local regions and product sales such as curry bread and retort products. We support you with know-how based on 40 years of experience.',
        },
      ],
      buttons: ['View Support System', 'View Owner Voices'],
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
        contact: '問い合わせ:',
      },
      companyInfo: {
        postalCode: '〒541-0052',
        address: '大阪府大阪市中央区安土町3-2-16長野ビル3F',
      },
      legal: {
        privacy: 'プライバシーポリシー',
        cookie: 'cookieについて',
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
        postalCode: '〒541-0052',
        address:
          '3F Nagano Building, 3-2-16 Azuchi-cho, Chuo-ku, Osaka-shi, Osaka 541-0052, Japan',
      },
      legal: {
        privacy: 'Privacy Policy',
        cookie: 'About Cookies',
      },
      ariaLabel: 'Footer navigation',
      logoAlt: 'Joto Curry',
      copyright: '© Tokumasa All Rights Reserved.',
    },
  },
  cta: {
    ja: {
      title: 'どんな小さな疑問でも、お気軽にご相談ください。',
      questions: [
        '初期投資は具体的にいくら必要?',
        '未経験でも本当に運営できる?',
        '開業までどのくらいの期間がかかる?',
        '実際の収益モデルはどうなっている?',
      ],
      text: '経験豊富なスタッフが、親身にお答えします。',
      button: '出店のご相談はこちら',
    },
    en: {
      title:
        'Feel free to consult with us about any questions, no matter how small.',
      questions: [
        'How much initial investment is required?',
        'Can I really operate without experience?',
        'How long does it take to open?',
        'What is the actual revenue model?',
      ],
      text: 'Our experienced staff will answer your questions with care.',
      button: 'Consultation for Opening a Store',
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
          "We introduce Joto Curry's franchise business that generates stable profits even with a small number of staff.",
      },
    },
    mechanisms: {
      ja: {
        title: '安定した利益を生む4つの仕組み',
        subtitle:
          '少人数のスタッフでも安定した売上をつくれるように、効率的で再現性の高い調理システムを構築しています。',
        cards: [
          {
            title: 'シンプルな調理で味の再現性を担保',
            description:
              '厨房設備投資や店舗スタッフへの負担を軽減できるシンプルで再現性のある調理と提供手順。ブランドの魂である『秘伝のエキス』を調合したルーは、セントラルキッチンから完璧な状態で供給されます。店舗では温めるだけで、どの国でもブレない最高品質の味を再現できます。',
          },
          {
            title: '高回転運営で売上最大化',
            description:
              'オーダーから提供までがハイスピードで可能なため、ランチタイムなどのピーク時でも回転率を上げることができます。席数が限られた立地でも、売上最大化を狙えるオペレーションです。',
          },
          {
            title: '少ないロスで収益性向上',
            description:
              '廃棄物の量も少ないため、原価管理がしやすく、収益性の向上にもつながります。売上だけでなく利益額を見通しやすくなることで、安心して出店計画や設備投資を検討いただけます。',
          },
          {
            title: '現地メニュー開発でリピート獲得',
            description:
              '現地の嗜好に合わせたオリジナルメニューの開発が可能です。既存メニューとの差別化や季節限定商品として、リピート促進にも活用いただけます。要望に応じて、日本の人気メニューのレシピについても共有します。',
          },
        ],
      },
      en: {
        title: '4 Mechanisms for Stable Profits',
        subtitle:
          'We have built an efficient and highly reproducible cooking system that enables stable sales even with a small number of staff.',
        cards: [
          {
            title: 'Guaranteed Taste Reproducibility with Simple Cooking',
            description:
              'Simple and reproducible cooking and serving procedures that reduce the burden of kitchen equipment investment and store staff. The roux blended with the "secret extract," the soul of the brand, is supplied from the central kitchen in perfect condition. At the store, just by heating it, you can reproduce the highest quality taste that never varies in any country.',
          },
          {
            title: 'Maximize Sales with High Turnover Operations',
            description:
              'Since orders can be served at high speed, turnover can be increased even during peak times such as lunch hours. This is an operation that can maximize sales even in locations with limited seating.',
          },
          {
            title: 'Improved Profitability with Low Waste',
            description:
              'Since the amount of waste is also small, cost management is easier, leading to improved profitability. By making it easier to forecast not only sales but also profit amounts, you can consider store opening plans and equipment investments with confidence.',
          },
          {
            title: 'Repeat Customers with Local Menu Development',
            description:
              'It is possible to develop original menus tailored to local preferences. You can use them to differentiate from existing menus or as seasonal limited products to promote repeat customers. We also share recipes for popular Japanese menus upon request.',
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
            title: 'Ongoing Support After Opening',
            description:
              'After opening, we provide continuous support including on-site consulting, customer acquisition strategies, menu improvement proposals, and regular sales and numerical reviews.',
          },
        ],
        imageAlt: 'Comprehensive Support System',
      },
    },
    voices: {
      ja: {
        title: '出店を決めたフランチャイズオーナーの声',
        subtitle:
          'なぜ上等カレーへの出店を決めたのか。開業前の不安や、実際の運営の手応えなどリアルな声をご紹介。',
        testimonials: [
          {
            text: 'テキストテキスト',
            storeName: '店舗名店舗名店舗名',
          },
          {
            text: 'テキストテキスト',
            storeName: '店舗名店舗名店舗名',
          },
          {
            text: 'テキストテキスト',
            storeName: '店舗名店舗名店舗名',
          },
        ],
      },
      en: {
        title: 'Voices from Franchise Owners Who Decided to Open',
        subtitle:
          'Why did they decide to open a Joto Curry franchise? We introduce real voices about pre-opening concerns and the actual operational feel.',
        testimonials: [
          {
            text: 'Testimonial text',
            storeName: 'Store Name Store Name',
          },
          {
            text: 'Testimonial text',
            storeName: 'Store Name Store Name',
          },
          {
            text: 'Testimonial text',
            storeName: 'Store Name Store Name',
          },
        ],
      },
    },
  },
  brand: {
    page: {
      ja: {
        title: '上等カレー - ブランド',
        heroTitle: '上等カレーとは',
        heroSubtitle:
          '1970年代から続く大阪発のカレー専門店。伝統的な味を守りながら、時代に合わせた進化を続け、今では世界へと広がっています。',
      },
      en: {
        title: 'Joto Curry - Brand',
        heroTitle: 'About Joto Curry',
        heroSubtitle:
          'A curry specialty restaurant from Osaka that has continued since the 1970s. While preserving traditional flavors, we continue to evolve with the times and have now spread worldwide.',
      },
    },
    origin: {
      ja: {
        title: '上等カレーの起源と<br class="is-sm">味へのこだわり',
        blockTitles: [
          '原点は、一杯のカレーうどん',
          'こだわりの素材と職人技が生む、<br class="is-sm">"上等"な味わい',
        ],
        paragraphs: [
          {
            text: '上等カレーを運営すると得正は、1983年に「手打ちうどん 得正」として創業。生粋のカレー愛好家でもある創業者・瀬戸口勝幸は、名物「得正カレーうどん」を生み出しました。',
          },
          {
            text: 'この味を、もっと多くの人に、もっと手軽かつスピーディに届けたい——。その想いから、コンセプトはカレーうどんからカレーライスへと進化し、1995年、上等カレーの1号店が誕生しました。',
          },
          {
            text: '厳選した国産牛、玉ねぎ、こだわりのスパイス、そしてごく一部の職人だけが知る“秘伝エキス”によって生まれる甘みとスパイスの絶妙なバランス。',
          },
          {
            text: '上等カレーはその名のとおり、「上等」と呼ぶにふさわしい本格的なカレー体験をお届けすることに、変わらぬこだわりを持ち続けています。',
          },
        ],
        imageAlt: '上等カレーの起源',
      },
      en: {
        title: 'The Origin of Joto Curry and Our Commitment to Flavor',
        blockTitles: ['Origin of Curry Udon', 'Popularity of Curry Udon'],
        paragraphs: [
          {
            text: 'The origin of Joto Curry began with curry udon. By combining traditional udon with our uniquely developed curry soup, we opened up a new world of flavors.',
          },
          {
            text: 'This curry udon was loved by many customers and became the foundation of Joto Curry.',
          },
          {
            text: 'Our commitment to flavor is passed down through the hands of experienced chefs. Carefully finishing each pot and taking time to bring out the flavors. This traditional method continues unchanged to this day.',
          },
          {
            text: 'The curry made with care and attention is characterized by its deep flavor and rich aroma.',
          },
        ],
        imageAlt: 'The origin of Joto Curry',
      },
    },
    unique: {
      ja: {
        title: '唯一無二の味づくり',
        blocks: [
          {
            title: '甘み、スパイス、旨みが織り成す<br class="is-sm">ハーモニー',
            text: 'ひと口目のやさしい甘み。 食べ進めるほどに広がる香り高いスパイスと深い旨み。 そして最後に残る、豊かな余韻。 計算し尽くされた三層の味わいが、 お客様の「また食べたい」を生み出します。',
          },
          {
            title: '素材と技術が生む深いコク',
            text: '厳選した国産牛と玉ねぎ。 独自ブレンドのスパイス。 加圧調理と低温熟成。 40年かけて完成させた製法が、 他では真似できない深いコクを生み出します。 この確立された製法により、 未経験でも本格的な味を安定して提供できます。。',
          },
          {
            title: '三人だけが知る秘伝のエキス',
            text: '上等カレーの味の決め手となるのは、大阪で職人の手により丁寧に作られる秘伝のエキスです。そのレシピは創業者を含むわずか三人だけが知る門外不出のもの。甘味、辛味、旨味が絶妙に調和したこの味こそが、上等カレーの真髄です。この厳格な品質管理が、すべての店舗で 変わらぬ本物の味を保証します。',
          },
        ],
      },
      en: {
        title: 'Unique Flavor Creation',
        blocks: [
          {
            title: 'Carefully Selected Spices, Made with Care',
            text: "The secret of Joto Curry's flavor lies in carefully selected spices. Spices chosen from around the world are blended in our unique formulation. By taking time to simmer slowly, deep flavors and rich aromas are created.",
          },
          {
            title: 'Perfection in 4 Sheets',
            text: 'The recipe for Joto Curry is compiled into 4 sheets. Simple yet filled with commitment to each step. These 4 sheets are the key to achieving the same flavor at stores around the world.',
          },
          {
            title: 'Passed Down from Person to Person',
            text: 'The flavor of Joto Curry is passed down not only through recipes but through the skills and passion of experienced chefs. From senior to junior, and to the next generation. This tradition continues to be passed down to this day.',
          },
        ],
      },
    },
    menu: {
      ja: {
        title: '幅広いニーズに応える豊富なメニュー',
        paragraphs: [
          {
            text: '上等カレーの看板メニューは「カツカレー」。サクサクの衣とコク深い甘辛ルーの組み合わせは、 国や世代を問わず高い支持を集めています。',
          },
          {
            text: '基本のカレーをベースに、複雑な仕込みは不要。 トッピングや辛さ調整だけで、お客様に豊富な選択肢を提供できます。 シンプルなオペレーションで、効率的な店舗運営が可能です。さらに、地域特性に合わせたオリジナルメニューの開発もサポート。 あなたの店舗ならではの強みを生み出せます。',
          },
        ],
        popularTitle: '人気メニュー紹介',
        menuItems: [
          {
            name: 'エビフライカレー',
            category: '定番',
            alt: 'エビフライカレー',
          },
          { name: 'チーズカレー', category: '女性人気', alt: 'チーズカレー' },
          { name: 'オムカレー', category: 'カテゴリー名', alt: 'オムカレー' },
          {
            name: 'グリーンカレー',
            category: 'カテゴリー名',
            alt: 'グリーンカレー',
          },
          {
            name: 'エビフライカレー',
            category: 'カテゴリー名',
            alt: 'エビフライカレー',
          },
          {
            name: 'エビフライカレー',
            category: 'カテゴリー名',
            alt: 'エビフライカレー',
          },
        ],
        imageAlt: '上等カレーのメニュー',
      },
      en: {
        title: 'Rich Menu to Meet Diverse Needs',
        description:
          'Joto Curry offers a rich menu to meet the diverse needs of our customers. From traditional katsu curry to new flavors, you can enjoy a wide lineup.',
        popularTitle: 'Popular Menu',
        menuItems: [
          {
            name: 'Shrimp Fry Curry',
            category: 'Classic',
            alt: 'Shrimp Fry Curry',
          },
          {
            name: 'Cheese Curry',
            category: 'Popular with Women',
            alt: 'Cheese Curry',
          },
          { name: 'Omelet Curry', category: 'Category', alt: 'Omelet Curry' },
          { name: 'Green Curry', category: 'Category', alt: 'Green Curry' },
          {
            name: 'Shrimp Fry Curry',
            category: 'Category',
            alt: 'Shrimp Fry Curry',
          },
          {
            name: 'Shrimp Fry Curry',
            category: 'Category',
            alt: 'Shrimp Fry Curry',
          },
        ],
        imageAlt: 'Joto Curry Menu',
      },
    },
    history: {
      ja: {
        title: '上等カレーの世界への歩み',
        intro:
          '40年以上の実績を持つブランドだからこそ、安定したフランチャイズ運営が可能です。1983年、大阪の小さな店舗から始まった上等カレーは、 今や国内外に展開するグローバルブランドへ。この確かな成長の歴史が、あなたの成功を支えます。',
        button: 'フランチャイズのご相談はこちら',
        timeline: [
          {
            year: '1983',
            heading: 'グルメの街。大阪で誕生',
            description:
              '食の都・大阪・大阪で「手打ちうどん 得正」として創業。創業者のこだわりが生んだカレーうどんが評判を呼び、カレー専門店への展開を決意。',
            imageAlt: 'グルメの街。大阪で誕生',
          },
          {
            year: '1990s',
            heading: 'ナショナルブランドへと成長',
            description:
              '1995年、カレー専門店「上等カレー」として本格的なチェーン展開を開始。食道楽の街、大阪を中心にオフィスワーカーから口コミで人気が広がり高い支持を獲得。著名人やメディアにも取り上げられ、「大阪の名物カレー」として認知が広がりました。',
            imageAlt: 'グルメの街。大阪で誕生',
          },
          {
            year: 'Now',
            heading: '大阪から生まれた一杯は、世界各地へ。',
            description:
              '現在、海外11店舗を展開中。モンゴル、タイ、カンボジアでの成功に続き、2025年以降、韓国、中国、シンガポール、インドネシア、フィリピン、カナダでの事業計画が進行中です。世界で成長し続けるブランドと共に、あなたも成功への一歩を踏み出しませんか。',
            imageAlt: '大阪から生まれた一杯は、世界各地へ。',
          },
        ],
      },
      en: {
        title: "Joto Curry's Journey to the World",
        intro:
          'With over 40 years of experience, stable franchise operations are possible. Joto Curry, which started as a small shop in Osaka in 1983, has now grown into a global brand expanding both domestically and internationally. This steady growth history supports your success.',
        button: 'Consultation for Franchise',
        timeline: [
          {
            year: '1983',
            heading: 'Born in Osaka, the Gourmet City',
            description:
              'Established in Osaka, the food capital, as "Handmade Udon Tokumasa." The curry udon created by the founder\'s commitment gained popularity, leading to the decision to expand into a curry specialty restaurant.',
            imageAlt: 'Born in Osaka, the Gourmet City',
          },
          {
            year: '1990s',
            heading: 'Growth into a National Brand',
            description:
              'In 1995, we began full-scale chain expansion as the curry specialty restaurant "Joto Curry." Centered in Osaka, the food-loving city, popularity spread through word of mouth among office workers, gaining high support. Featured by celebrities and media, recognition spread as "Osaka\'s Famous Curry."',
            imageAlt: 'Born in Osaka, the Gourmet City',
          },
          {
            year: 'Now',
            heading: 'A Bowl Born in Osaka Spreads Worldwide',
            description:
              'Currently operating 11 stores overseas. Following success in Mongolia, Thailand, and Cambodia, business plans for South Korea, China, Singapore, Indonesia, the Philippines, and Canada are underway from 2025 onwards. Why not take a step toward success together with a brand that continues to grow worldwide?',
            imageAlt: 'A Bowl Born in Osaka Spreads Worldwide',
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
          'どんな小さな疑問でも、お気軽にご相談ください。海外フランチャイズ・卸・メディア取材など、こちらからお問い合わせいただけます。',
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
          privacyAgree: 'I agree to the',
          submit: 'Apply for Free Consultation',
        },
      },
    },
    faq: {
      ja: {
        title: 'フランチャイズ出店に関するよくある質問',
        subtitle:
          '初期費用やトレーニング、サポート体制など、オーナー候補の方から多く寄せられるご質問をまとめました。',
        cta: {
          title: 'まだ質問がありますか?',
          text: 'こちらにないご質問も、お気軽にご相談ください。詳細について直接お話しさせていただきます。',
          button: '問い合わせをする',
        },
      },
      en: {
        title: 'Frequently Asked Questions About Franchise Store Opening',
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
};

/**
 * 翻訳データを取得
 * @param section - セクション名
 * @param locale - 言語（'ja' | 'en'）
 * @returns 翻訳データ
 */
export function getTranslation<T extends keyof typeof translations>(
  section: T,
  locale: 'ja' | 'en' = 'ja'
): (typeof translations)[T][typeof locale] {
  return translations[section][locale];
}
