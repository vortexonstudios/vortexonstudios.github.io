/* ==========================================
   MARKET IS FINE — WEBSITE SCRIPTS
   Voretexon Studios © 2026
   ========================================== */

// ============================
// TRANSLATIONS (10 Languages)
// ============================
const translations = {
    tr: {
        nav_about: "Hakkında",
        nav_features: "Özellikler",
        nav_events: "Olaylar",
        nav_gallery: "Galeri",
        nav_charity: "Sosyal Sorumluluk",
        nav_steam: "Steam",
        hero_badge: "MART 2026'DA ÇIKIYOR",
        hero_tagline: "Market İyi. Peki ya Vicdan?",
        hero_desc: "Dışarıda kıyamet koparken içeride \"her şey yolundaymış\" gibi davranmaya çalıştığınız bir market işletme simülasyonu.",
        hero_wishlist: "İstek Listesine Ekle",
        hero_explore: "Olayları Keşfet",
        cd_days: "GÜN", cd_hours: "SAAT", cd_mins: "DAKİKA", cd_secs: "SANİYE",
        about_tag: "OYUN HAKKINDA",
        about_title: "Sadece Bir Market Değil, Bir Toplumun Aynası.",
        about_lead: "Çoğu simülasyon oyunu size \"nasıl daha fazla kâr edilir?\" diye sorar. Market is Fine ise size şunu soruyor:",
        about_quote: "\"Her şey yıkılırken kâr etmenin bedeli nedir?\"",
        about_p1: "Sıradan bir bakkal gibi başlayacaksınız. Rafları dolduracak, barkod okutacak ve para üstü vereceksiniz. Ancak dışarıdaki kaos dükkanın camlarına vurduğunda, haber bültenleri ülkenin nefesini kestiğinde asıl oyun başlayacak.",
        features_tag: "ÖNE ÇIKAN ÖZELLİKLER",
        features_title: "Kaosun İçinde Yönetim",
        feature1_title: "Haber Odaklı Oynanış",
        feature1_desc: "Dükkanınızın köşesindeki o küçük televizyon, oyunun kaderini belirleyen en büyük güçtür. Dinamik gündem her şeyi değiştirir.",
        feature2_title: "Stok Manipülasyonu",
        feature2_desc: "Kıtlık haberini önceden alıp stokçuluk yaparak servet mi kazanacaksınız? Yoksa mahalleliyi mağdur etmemek için fiyatları sabit mi tutacaksınız?",
        feature3_title: "Vicdan vs. Cüzdan",
        feature3_desc: "Ülkece yaşanan büyük bir yas olduğunda dükkanın ışıkları söner. O gün kepenkleri açıp para kazanmaya çalışmak, vereceğiniz en zor karar olabilir.",
        feature4_title: "Kaosun Ekonomisi",
        feature4_desc: "Enflasyon, devalüasyon ve tedarik zinciri krizleri anlık olarak etiketlerinize yansır. Müşterileriniz sadece birer \"NPC\" değil, bu hikayenin mağdurlarıdır.",
        events_tag: "OLAYLAR",
        events_title: "Gerçek Dünyadan Esinlenen Krizler",
        events_subtitle: "Her bir olay, gerçek hayattan esinlenmiş toplumsal bir krizi temsil eder. 15 farklı senaryo ile karşılaşacaksınız.",
        video_title: "Oyun İçi Event Sahnesi",
        video_title2: "Event Gün Sonu Sahnesi",
        gallery_tag: "GALERİ",
        gallery_title: "Ekran Görüntüleri",
        charity_title: "Sosyal Sorumluluk",
        charity_desc: "Bu oyunun gelirinin bir kısmı şehit ailelerine bağışlanacaktır. Çünkü bazı bedeller, parayla ödenmez.",
        charity_motto: "\"Kazanılan paralar harcanır, raflar tekrar dolar ama incitilen onurlar ve kaybedilen canlar asla geri gelmez.\"",
        footer_tagline: "Market İyi. Peki ya Vicdan?",
        footer_nav: "Navigasyon",
        footer_follow: "Bizi Takip Edin",
        footer_rights: "Tüm hakları saklıdır."
    },
    en: {
        nav_about: "About",
        nav_features: "Features",
        nav_events: "Events",
        nav_gallery: "Gallery",
        nav_charity: "Social Impact",
        nav_steam: "Steam",
        hero_badge: "COMING MARCH 2026",
        hero_tagline: "The Market is Fine. But what about the Conscience?",
        hero_desc: "A market management simulation where you pretend \"everything is okay\" while the world burns outside.",
        hero_wishlist: "Add to Wishlist",
        hero_explore: "Explore Events",
        cd_days: "DAYS", cd_hours: "HOURS", cd_mins: "MINUTES", cd_secs: "SECONDS",
        about_tag: "ABOUT THE GAME",
        about_title: "Not Just a Shop. A Mirror of Society.",
        about_lead: "Most simulation games ask you: \"How can I profit more?\" Market is Fine asks you:",
        about_quote: "\"What is the cost of profit when everything collapses?\"",
        about_p1: "You start as an ordinary shopkeeper. You fill shelves, scan barcodes, and give change. But the real game begins when the chaos outside bangs against your storefront window, and breaking news takes the breath away from the entire country.",
        features_tag: "KEY FEATURES",
        features_title: "Management in Chaos",
        feature1_title: "News-Based Gameplay",
        feature1_desc: "That small TV in the corner of your shop is the most powerful force determining the game's destiny. Dynamic headlines change everything.",
        feature2_title: "Stock Manipulation",
        feature2_desc: "Will you foresee a shortage, hoard stocks, and make a fortune? Or will you keep prices stable to avoid crushing your neighbors?",
        feature3_title: "Conscience vs. Wallet",
        feature3_desc: "During moments of great national mourning, the shop's lights go out. Raising the shutters to make money on such a day might be the hardest decision you ever make.",
        feature4_title: "The Economy of Chaos",
        feature4_desc: "Inflation, devaluation, and supply chain crises are instantly reflected on your price tags. Your customers are not just \"NPCs\"; they are the victims of this story.",
        events_tag: "EVENTS",
        events_title: "Crises Inspired by the Real World",
        events_subtitle: "Each event represents a social crisis inspired by real life. You'll face 15 different scenarios.",
        video_title: "In-Game Event Scene",
        video_title2: "Event End of Day Scene",
        gallery_tag: "GALLERY",
        gallery_title: "Screenshots",
        charity_title: "Social Impact",
        charity_desc: "A portion of this game's revenue will be donated to the families of fallen soldiers. Because some debts cannot be paid with money.",
        charity_motto: "\"The money earned is spent, the shelves are refilled, but wounded dignity and lost lives never return.\"",
        footer_tagline: "The Market is Fine. But what about the Conscience?",
        footer_nav: "Navigation",
        footer_follow: "Follow Us",
        footer_rights: "All rights reserved."
    },
    de: {
        nav_about: "Über", nav_features: "Merkmale", nav_events: "Ereignisse", nav_gallery: "Galerie", nav_charity: "Soziale Verantwortung", nav_steam: "Steam",
        hero_badge: "ERSCHEINT MÄRZ 2026",
        hero_tagline: "Der Markt läuft gut. Aber was ist mit dem Gewissen?",
        hero_desc: "Eine Marktsimulation, in der Sie so tun, als sei alles in Ordnung, während draußen die Welt untergeht.",
        hero_wishlist: "Zur Wunschliste", hero_explore: "Ereignisse erkunden",
        cd_days: "TAGE", cd_hours: "STUNDEN", cd_mins: "MINUTEN", cd_secs: "SEKUNDEN",
        about_tag: "ÜBER DAS SPIEL",
        about_title: "Nicht nur ein Laden, ein Spiegel der Gesellschaft.",
        about_lead: "Die meisten Simulationsspiele fragen: \"Wie maximiert man den Profit?\" Market is Fine fragt hingegen:",
        about_quote: "\"Was ist der Preis des Profits, wenn alles zusammenbricht?\"",
        about_p1: "Sie beginnen wie ein gewöhnlicher Ladenbesitzer. Regale auffüllen, Barcodes scannen und Wechselgeld herausgeben. Doch das eigentliche Spiel beginnt erst, wenn das Chaos von draußen gegen die Schaufenster schlägt.",
        features_tag: "HAUPTMERKMALE", features_title: "Management im Chaos",
        feature1_title: "Nachrichtenbasiertes Gameplay", feature1_desc: "Der kleine Fernseher in der Ecke Ihres Ladens ist die stärkste Kraft, die das Schicksal des Spiels bestimmt.",
        feature2_title: "Lager-Manipulation", feature2_desc: "Werden Sie eine Knappheit vorhersehen, Lagerbestände horten und ein Vermögen machen? Oder werden Sie die Preise stabil halten?",
        feature3_title: "Gewissen vs. Geldbeutel", feature3_desc: "Bei Staatstrauer erlöschen die Lichter des Ladens. An solchen Tagen die Rollläden zu öffnen könnte die schwerste Entscheidung sein.",
        feature4_title: "Die Ökonomie des Chaos", feature4_desc: "Inflation, Währungsabwertung und Störungen in der Lieferkette spiegeln sich sofort in Ihren Preisschildern wider.",
        events_tag: "EREIGNISSE", events_title: "Von der Realität inspirierte Krisen",
        events_subtitle: "Jedes Ereignis repräsentiert eine gesellschaftliche Krise, inspiriert vom realen Leben. Sie werden 15 verschiedenen Szenarien begegnen.",
        video_title: "In-Game Event-Szene", video_title2: "Event-Tagesabschluss-Szene", gallery_tag: "GALERIE", gallery_title: "Screenshots",
        charity_title: "Soziale Verantwortung",
        charity_desc: "Ein Teil der Einnahmen dieses Spiels wird an die Familien gefallener Soldaten gespendet. Denn manche Schulden kann man nicht mit Geld bezahlen.",
        charity_motto: "\"Das verdiente Geld wird ausgegeben, die Regale werden wieder gefüllt, aber verletzte Würde und verlorene Leben kehren niemals zurück.\"",
        footer_tagline: "Der Markt läuft gut. Aber was ist mit dem Gewissen?",
        footer_nav: "Navigation", footer_follow: "Folgen Sie uns", footer_rights: "Alle Rechte vorbehalten."
    },
    fr: {
        nav_about: "À Propos", nav_features: "Caractéristiques", nav_events: "Événements", nav_gallery: "Galerie", nav_charity: "Impact Social", nav_steam: "Steam",
        hero_badge: "SORTIE MARS 2026",
        hero_tagline: "Le Marché va bien. Mais qu'en est-il de la Conscience ?",
        hero_desc: "Une simulation de gestion où vous feignez que \"tout va bien\" alors que l'apocalypse gronde à l'extérieur.",
        hero_wishlist: "Ajouter à la liste", hero_explore: "Explorer les événements",
        cd_days: "JOURS", cd_hours: "HEURES", cd_mins: "MINUTES", cd_secs: "SECONDES",
        about_tag: "À PROPOS DU JEU",
        about_title: "Pas qu'un magasin. Un miroir de la société.",
        about_lead: "La plupart des jeux de simulation vous demandent : \"Comment faire plus de profit ?\" Market is Fine vous pose cette question :",
        about_quote: "\"Quel est le prix du profit quand tout s'effondre ?\"",
        about_p1: "Vous commencez comme un épicier ordinaire. Remplir les rayons, scanner les codes-barres et rendre la monnaie. Mais le véritable jeu commence lorsque le chaos frappe à la vitrine de votre magasin.",
        features_tag: "CARACTÉRISTIQUES", features_title: "Gestion dans le Chaos",
        feature1_title: "Gameplay basé sur l'actualité", feature1_desc: "La petite télévision dans le coin de votre magasin est la force majeure qui détermine le destin du jeu.",
        feature2_title: "Manipulation des Stocks", feature2_desc: "Allez-vous anticiper une pénurie et stocker massivement ? Ou maintenir les prix stables pour ne pas accabler vos voisins ?",
        feature3_title: "Conscience vs Portefeuille", feature3_desc: "Lors d'un grand deuil national, les lumières du magasin s'éteignent. Ouvrir le rideau ce jour-là pourrait être la décision la plus difficile.",
        feature4_title: "L'Économie du Chaos", feature4_desc: "L'inflation, la dévaluation et les crises se reflètent instantanément sur vos étiquettes de prix. Vos clients sont les victimes de cette histoire.",
        events_tag: "ÉVÉNEMENTS", events_title: "Crises inspirées du monde réel",
        events_subtitle: "Chaque événement représente une crise sociale inspirée de la vie réelle. Vous affronterez 15 scénarios différents.",
        video_title: "Scène d'événement en jeu", video_title2: "Scène de fin de journée", gallery_tag: "GALERIE", gallery_title: "Captures d'écran",
        charity_title: "Impact Social",
        charity_desc: "Une partie des revenus de ce jeu sera reversée aux familles de soldats tombés au combat. Car certaines dettes ne se paient pas avec de l'argent.",
        charity_motto: "\"L'argent gagné est dépensé, les rayons se remplissent à nouveau, mais la dignité blessée et les vies perdues ne reviennent jamais.\"",
        footer_tagline: "Le Marché va bien. Mais qu'en est-il de la Conscience ?",
        footer_nav: "Navigation", footer_follow: "Suivez-nous", footer_rights: "Tous droits réservés."
    },
    ja: {
        nav_about: "ゲーム紹介", nav_features: "特徴", nav_events: "イベント", nav_gallery: "ギャラリー", nav_charity: "社会貢献", nav_steam: "Steam",
        hero_badge: "2026年3月発売予定",
        hero_tagline: "市場は順調です。では、良心はどうですか？",
        hero_desc: "外の世界が崩壊しつつある中で、店内だけは「万事順調」であるかのように振る舞うマーケット経営シミュレーション。",
        hero_wishlist: "ウィッシュリストに追加", hero_explore: "イベントを探索",
        cd_days: "日", cd_hours: "時間", cd_mins: "分", cd_secs: "秒",
        about_tag: "ゲーム紹介",
        about_title: "単なる店ではない。社会を映し出す鏡。",
        about_lead: "多くのシミュレーションゲームは問いかけます。「どうすればもっと利益を出せるか？」 しかし、Market is Fineはこう問いかけます：",
        about_quote: "「全てが崩れ去ろうとしている時、利益を得る代償とは何か？」",
        about_p1: "あなたは平凡な店主としてスタートします。棚を補充し、バーコードを読み取り、お釣りを渡す日々。しかし、外の混沌が店のショーウィンドウを叩いた時、本当のゲームが始まります。",
        features_tag: "主な特徴", features_title: "混沌の中の経営",
        feature1_title: "ニュース連動型ゲームプレイ", feature1_desc: "店の隅にある小さなテレビこそが、このゲームの運命を決定づける最大の力です。",
        feature2_title: "在庫操作", feature2_desc: "不足を予見して買い占めを行い、富を築きますか？それとも価格を据え置きますか？",
        feature3_title: "良心 vs 財布", feature3_desc: "国全体が喪に服す時、店の明かりは消えます。そんな日にシャッターを開けることは最も困難な決断になるかもしれません。",
        feature4_title: "混沌の経済学", feature4_desc: "インフレ、通貨の暴落、サプライチェーンの危機は即座に商品の値札に反映されます。",
        events_tag: "イベント", events_title: "現実世界に触発された危機",
        events_subtitle: "各イベントは実生活に触発された社会的危機を表しています。15の異なるシナリオに直面します。",
        video_title: "ゲーム内イベントシーン", video_title2: "イベント一日の終わりのシーン", gallery_tag: "ギャラリー", gallery_title: "スクリーンショット",
        charity_title: "社会貢献",
        charity_desc: "このゲームの収益の一部は、戦没者の遺族に寄付されます。お金では返せない恩があるからです。",
        charity_motto: "「稼いだお金は使われ、棚は再び満たされる。しかし、傷つけられた尊厳と失われた命は二度と戻らない。」",
        footer_tagline: "市場は順調です。では、良心はどうですか？",
        footer_nav: "ナビゲーション", footer_follow: "フォロー", footer_rights: "All rights reserved."
    },
    ko: {
        nav_about: "소개", nav_features: "특징", nav_events: "이벤트", nav_gallery: "갤러리", nav_charity: "사회공헌", nav_steam: "Steam",
        hero_badge: "2026년 3월 출시 예정",
        hero_tagline: "시장은 평화롭습니다. 하지만 양심은 안녕하십니까?",
        hero_desc: "바깥세상이 멸망해가는 와중에도 안에서는 \"모든 게 괜찮은 척\" 연기해야 하는 마켓 경영 시뮬레이션.",
        hero_wishlist: "위시리스트에 추가", hero_explore: "이벤트 탐색",
        cd_days: "일", cd_hours: "시간", cd_mins: "분", cd_secs: "초",
        about_tag: "게임 소개",
        about_title: "단순한 상점이 아닙니다. 사회를 비추는 거울입니다.",
        about_lead: "대부분의 시뮬레이션 게임은 묻습니다. \"어떻게 하면 더 많은 돈을 벌 수 있을까?\" 하지만 Market is Fine은 묻습니다:",
        about_quote: "\"모든 것이 무너져 내릴 때, 이윤을 추구하는 대가는 무엇인가?\"",
        about_p1: "당신은 평범한 가게 주인으로 시작합니다. 진열대를 채우고, 바코드를 찍고, 거스름돈을 건네줍니다. 하지만 바깥의 혼돈이 쇼윈도를 두드릴 때 진짜 게임이 시작됩니다.",
        features_tag: "주요 특징", features_title: "혼돈 속의 경영",
        feature1_title: "뉴스 중심의 게임플레이", feature1_desc: "가게 구석에 놓인 작은 TV는 게임의 운명을 결정하는 가장 강력한 힘입니다.",
        feature2_title: "재고 조작", feature2_desc: "물자 부족을 미리 예측해 사재기로 큰돈을 버시겠습니까? 아니면 가격을 동결하시겠습니까?",
        feature3_title: "양심 vs 지갑", feature3_desc: "국가적 애도 기간에 가게의 불은 꺼집니다. 그런 날 셔터를 올리는 것이 가장 힘든 결정이 될 수 있습니다.",
        feature4_title: "혼돈의 경제학", feature4_desc: "인플레이션, 화폐 가치 하락, 공급망의 위기는 즉각적으로 가격표에 반영됩니다.",
        events_tag: "이벤트", events_title: "현실 세계에서 영감을 받은 위기",
        events_subtitle: "각 이벤트는 실제 생활에서 영감을 받은 사회적 위기를 나타냅니다. 15가지 다른 시나리오에 직면하게 됩니다.",
        video_title: "게임 내 이벤트 장면", video_title2: "이벤트 하루 마감 장면", gallery_tag: "갤러리", gallery_title: "스크린샷",
        charity_title: "사회 공헌",
        charity_desc: "이 게임 수익의 일부는 전사자 유가족에게 기부됩니다. 돈으로 갚을 수 없는 빚이 있기 때문입니다.",
        charity_motto: "\"벌어들인 돈은 쓰이고, 진열대는 다시 채워지지만, 상처받은 존엄과 잃어버린 생명은 결코 돌아오지 않습니다.\"",
        footer_tagline: "시장은 평화롭습니다. 하지만 양심은 안녕하십니까?",
        footer_nav: "탐색", footer_follow: "팔로우", footer_rights: "All rights reserved."
    },
    ru: {
        nav_about: "Об игре", nav_features: "Особенности", nav_events: "События", nav_gallery: "Галерея", nav_charity: "Благотворительность", nav_steam: "Steam",
        hero_badge: "ВЫХОД В МАРТЕ 2026",
        hero_tagline: "Рынок в порядке. А как же совесть?",
        hero_desc: "Симулятор управления магазином, где вы делаете вид, что «все в порядке», пока мир снаружи рушится.",
        hero_wishlist: "В список желаний", hero_explore: "Изучить события",
        cd_days: "ДНЕЙ", cd_hours: "ЧАСОВ", cd_mins: "МИНУТ", cd_secs: "СЕКУНД",
        about_tag: "ОБ ИГРЕ",
        about_title: "Не просто магазин. Зеркало общества.",
        about_lead: "Большинство симуляторов спрашивают: «Как заработать больше?» Market is Fine задает другой вопрос:",
        about_quote: "«Какова цена прибыли, когда все вокруг рушится?»",
        about_p1: "Вы начинаете как обычный владелец лавки. Заполняете полки, сканируете штрих-коды и выдаете сдачу. Но настоящая игра начинается, когда хаос стучится в вашу витрину.",
        features_tag: "ОСОБЕННОСТИ", features_title: "Управление в хаосе",
        feature1_title: "Геймплей на основе новостей", feature1_desc: "Маленький телевизор в углу вашего магазина — самая могущественная сила, определяющая судьбу игры.",
        feature2_title: "Манипуляции с запасами", feature2_desc: "Предугадаете ли вы дефицит, чтобы придержать товар и сколотить состояние? Или сохраните цены стабильными?",
        feature3_title: "Совесть vs Кошелёк", feature3_desc: "В моменты общенационального траура свет в магазине гаснет. Поднять жалюзи ради заработка может стать самым трудным решением.",
        feature4_title: "Экономика хаоса", feature4_desc: "Инфляция, девальвация и кризисы поставок мгновенно отражаются на ваших ценниках.",
        events_tag: "СОБЫТИЯ", events_title: "Кризисы, вдохновленные реальными событиями",
        events_subtitle: "Каждое событие представляет социальный кризис, вдохновленный реальной жизнью. Вас ждут 15 различных сценариев.",
        video_title: "Игровая сцена события", video_title2: "Сцена конца дня", gallery_tag: "ГАЛЕРЕЯ", gallery_title: "Скриншоты",
        charity_title: "Благотворительность",
        charity_desc: "Часть доходов от этой игры будет передана семьям павших солдат. Потому что некоторые долги нельзя оплатить деньгами.",
        charity_motto: "«Заработанные деньги тратятся, полки снова наполняются, но раненое достоинство и потерянные жизни никогда не вернутся.»",
        footer_tagline: "Рынок в порядке. А как же совесть?",
        footer_nav: "Навигация", footer_follow: "Подписаться", footer_rights: "Все права защищены."
    },
    zh: {
        nav_about: "关于", nav_features: "特色", nav_events: "事件", nav_gallery: "画廊", nav_charity: "社会责任", nav_steam: "Steam",
        hero_badge: "2026年3月发售",
        hero_tagline: "市场安好。但良心呢？",
        hero_desc: '一款当世界分崩离析时，仍需假装"一切安好"的超市经营模拟游戏。',
        hero_wishlist: "加入愿望单", hero_explore: "探索事件",
        cd_days: "天", cd_hours: "小时", cd_mins: "分钟", cd_secs: "秒",
        about_tag: "关于游戏",
        about_title: "不仅仅是一家商店，更是社会的镜子。",
        about_lead: '大多数模拟游戏会问你："如何赚更多的钱？" 而Market is Fine则在问你：',
        about_quote: '"当一切都在崩溃时，赚钱的代价是什么？"',
        about_p1: "你将从一个普通的杂货店老板开始。填满货架，扫描条形码，找零。然而，当外部的混乱冲击着商店的橱窗时，真正的游戏才刚刚开始。",
        features_tag: "游戏特色", features_title: "混乱中的经营",
        feature1_title: "以新闻为导向的玩法", feature1_desc: "你商店角落里的那台小电视，是决定游戏命运的最强大力量。",
        feature2_title: "库存操纵", feature2_desc: "你会提前囤积居奇、发家致富吗？还是为了不让邻居受苦而保持价格稳定？",
        feature3_title: "良心与钱包", feature3_desc: "当国家发生重大悲剧时，商店的灯光会熄灭。在那一天拉开卷帘门可能是最艰难的决定。",
        feature4_title: "混乱经济学", feature4_desc: "通货膨胀、货币贬值和供应链危机都会瞬间反映在你的价格标签上。",
        events_tag: "事件", events_title: "源自现实世界的危机",
        events_subtitle: "每个事件都代表一个源自现实生活的社会危机。你将面对15个不同的场景。",
        video_title: "游戏内事件场景", video_title2: "事件结束日场景", gallery_tag: "画廊", gallery_title: "游戏截图",
        charity_title: "社会责任",
        charity_desc: "这款游戏的部分收入将捐赠给阵亡将士的家属。因为有些债务无法用金钱偿还。",
        charity_motto: '"赚到的钱会被花掉，货架会重新填满，但受伤的尊严和失去的生命永远不会回来。"',
        footer_tagline: "市场安好。但良心呢？",
        footer_nav: "导航", footer_follow: "关注我们", footer_rights: "版权所有。"
    },
    es: {
        nav_about: "Acerca de", nav_features: "Características", nav_events: "Eventos", nav_gallery: "Galería", nav_charity: "Impacto Social", nav_steam: "Steam",
        hero_badge: "LANZAMIENTO MARZO 2026",
        hero_tagline: "El Mercado va Bien. ¿Pero qué hay de la Conciencia?",
        hero_desc: "Un simulador de gestión donde finges que \"todo va bien\" mientras el mundo se desmorona afuera.",
        hero_wishlist: "Añadir a lista de deseos", hero_explore: "Explorar eventos",
        cd_days: "DÍAS", cd_hours: "HORAS", cd_mins: "MINUTOS", cd_secs: "SEGUNDOS",
        about_tag: "SOBRE EL JUEGO",
        about_title: "No solo una tienda. Un espejo de la sociedad.",
        about_lead: "La mayoría de los juegos de simulación preguntan: \"¿Cómo puedo obtener más beneficios?\" Market is Fine pregunta:",
        about_quote: "\"¿Cuál es el precio del beneficio cuando todo se derrumba?\"",
        about_p1: "Empiezas como un tendero corriente. Rellenas estanterías, escaneas códigos de barras y das el cambio. Pero el verdadero juego comienza cuando el caos exterior golpea tu escaparate.",
        features_tag: "CARACTERÍSTICAS", features_title: "Gestión en el Caos",
        feature1_title: "Jugabilidad basada en noticias", feature1_desc: "Esa pequeña televisión en la esquina de tu tienda es la fuerza más poderosa que determina el destino del juego.",
        feature2_title: "Manipulación de Stock", feature2_desc: "¿Preverás la escasez y acapararás existencias? ¿O mantendrás los precios estables para no aplastar a tus vecinos?",
        feature3_title: "Conciencia vs. Cartera", feature3_desc: "Durante un gran luto nacional, las luces de la tienda se apagan. Levantar la persiana ese día podría ser la decisión más difícil.",
        feature4_title: "La Economía del Caos", feature4_desc: "La inflación, la devaluación y las crisis se reflejan instantáneamente en tus etiquetas de precios.",
        events_tag: "EVENTOS", events_title: "Crisis inspiradas en el mundo real",
        events_subtitle: "Cada evento representa una crisis social inspirada en la vida real. Te enfrentarás a 15 escenarios diferentes.",
        video_title: "Escena de evento en el juego", video_title2: "Escena de fin de día", gallery_tag: "GALERÍA", gallery_title: "Capturas de pantalla",
        charity_title: "Impacto Social",
        charity_desc: "Una parte de los ingresos de este juego se donará a las familias de soldados caídos. Porque hay deudas que no se pagan con dinero.",
        charity_motto: "\"El dinero ganado se gasta, las estanterías se rellenan, pero la dignidad herida y las vidas perdidas nunca regresan.\"",
        footer_tagline: "El Mercado va Bien. ¿Pero qué hay de la Conciencia?",
        footer_nav: "Navegación", footer_follow: "Síguenos", footer_rights: "Todos los derechos reservados."
    },
    it: {
        nav_about: "Informazioni", nav_features: "Caratteristiche", nav_events: "Eventi", nav_gallery: "Galleria", nav_charity: "Impatto Sociale", nav_steam: "Steam",
        hero_badge: "IN USCITA MARZO 2026",
        hero_tagline: "Il Mercato va Bene. Ma la Coscienza?",
        hero_desc: "Una simulazione gestionale in cui devi fingere che \"tutto vada bene\" mentre fuori scoppia l'apocalisse.",
        hero_wishlist: "Aggiungi alla lista desideri", hero_explore: "Esplora gli eventi",
        cd_days: "GIORNI", cd_hours: "ORE", cd_mins: "MINUTI", cd_secs: "SECONDI",
        about_tag: "SUL GIOCO",
        about_title: "Non solo un negozio. Uno specchio della società.",
        about_lead: "La maggior parte dei giochi di simulazione chiede: \"Come posso guadagnare di più?\" Market is Fine invece chiede:",
        about_quote: "\"Qual è il prezzo del profitto quando tutto crolla?\"",
        about_p1: "Inizi come un normale negoziante. Riempi gli scaffali, scansioni i codici a barre e dai il resto. Ma il vero gioco inizia quando il caos esterno bussa alla vetrina del tuo negozio.",
        features_tag: "CARATTERISTICHE", features_title: "Gestione nel Caos",
        feature1_title: "Gameplay basato sulle notizie", feature1_desc: "Quella piccola TV nell'angolo del tuo negozio è la forza più potente che determina il destino del gioco.",
        feature2_title: "Manipolazione delle Scorte", feature2_desc: "Prevedrai la carenza e farai scorta? O manterrai i prezzi stabili per non schiacciare i tuoi vicini?",
        feature3_title: "Coscienza vs Portafoglio", feature3_desc: "Durante un grande lutto nazionale, le luci del negozio si spengono. Alzare la serranda quel giorno potrebbe essere la decisione più difficile.",
        feature4_title: "L'Economia del Caos", feature4_desc: "Inflazione, svalutazione e crisi si riflettono istantaneamente sui tuoi cartellini dei prezzi.",
        events_tag: "EVENTI", events_title: "Crisi ispirate al mondo reale",
        events_subtitle: "Ogni evento rappresenta una crisi sociale ispirata alla vita reale. Affronterai 15 scenari diversi.",
        video_title: "Scena evento in gioco", video_title2: "Scena di fine giornata", gallery_tag: "GALLERIA", gallery_title: "Screenshot",
        charity_title: "Impatto Sociale",
        charity_desc: "Una parte dei ricavi di questo gioco sarà devoluta alle famiglie dei soldati caduti. Perché ci sono debiti che non si pagano con il denaro.",
        charity_motto: "\"I soldi guadagnati vengono spesi, gli scaffali si riempiono di nuovo, ma la dignità ferita e le vite perse non tornano mai indietro.\"",
        footer_tagline: "Il Mercato va Bene. Ma la Coscienza?",
        footer_nav: "Navigazione", footer_follow: "Seguici", footer_rights: "Tutti i diritti riservati."
    }
};

const langMeta = {
    tr: { flag: "🇹🇷", name: "TR" },
    en: { flag: "🇬🇧", name: "EN" },
    de: { flag: "🇩🇪", name: "DE" },
    fr: { flag: "🇫🇷", name: "FR" },
    ja: { flag: "🇯🇵", name: "JA" },
    ko: { flag: "🇰🇷", name: "KO" },
    ru: { flag: "🇷🇺", name: "RU" },
    zh: { flag: "🇨🇳", name: "ZH" },
    es: { flag: "🇪🇸", name: "ES" },
    it: { flag: "🇮🇹", name: "IT" }
};

// ============================
// EVENT DATA
// ============================
const eventsData = {
    tr: [
        { num: 1, emoji: "🍬", title: "Pasta Malzemesi Skandalı", product: "ŞEKER", desc: "Lüks araç içinde burnuna beyaz toz çekerken görüntülenen şahıs, maddenin 'pasta malzemesi' olduğunu iddia etti. Marketlerde bu ürüne talep patladı." },
        { num: 2, emoji: "🍭", title: "Jelibon Rezervi", product: "JELİBON", desc: "Yerin 400 metre altında devasa bir 'Jelibon Rezervi' keşfedildiği açıklandı. Vatandaşlar yatırım yapmak için marketlere akın ediyor!" },
        { num: 3, emoji: "🥤", title: "Boykot Protestosu", product: "KOLA", desc: "Kalabalıklar kasalarla gazlı içecek alıp sokaklara döküyor! 'Onların malını satın alıp ziyan ederek batıracağız' diyorlar." },
        { num: 4, emoji: "🍅", title: "Hain Manavlar", product: "SEBZE", desc: "Hükûmet fahiş fiyatla domates biber satanlara karşı düğmeye bastı. Devlet çadırlarında ucuza sebze satışı başladı." },
        { num: 5, emoji: "🕯️", title: "Kadın Cinayeti", product: "YAS GÜNÜ", desc: "Bugün dükkan kapalı. Bir kadının 'Yaşamak istiyorum' çığlığının duyulmadığı bir dünyada, ticaretin hiçbir değeri yoktur." },
        { num: 6, emoji: "🛢️", title: "Sarı Altın Savaşları", product: "YAĞ", desc: "Marketler savaş alanına dönmüş durumda. İnsanlar 5 litrelik ayçiçek yağı alabilmek için birbirini eziyor." },
        { num: 7, emoji: "🇹🇷", title: "İhanet Tasarısı", product: "MİLLİ YAS", desc: "Bazı bedeller, parayla ödenmez. Bugün dükkan kapandı. Kasa sayılmadı. Kâr hesaplanmadı." },
        { num: 8, emoji: "🏚️", title: "Deprem Çantası", product: "BİSKÜVİ & SU", desc: "Ünlü profesörden korkutan açıklama: 'Eli kulağında!' Milyonlar bisküvi ve su stoklamak için marketlere hücum etti." },
        { num: 9, emoji: "🌿", title: "Şifa Niyeti", product: "KOLONYA & NANE", desc: "Hastanelerde randevu sistemi çöktü, doktorlar yurt dışına gitti! Vatandaş çareyi 'kocakarı ilaçlarında' arıyor." },
        { num: 10, emoji: "☕", title: "Enercii Kahvesi", product: "KAHVE", desc: "Sosyal medyanın kraliçesi 'Enerciii' diyerek içtiği kahve yok satıyor. Herkes o fenomen gibi hissetmek istiyor!" },
        { num: 11, emoji: "🕯️", title: "Romantik Akşam Yemeği", product: "MUM", desc: "Elektrik kesintisi 'tasarruf tedbiri' olarak sunuldu. Vatandaş 19. yüzyıl teknolojisine dönmek için mum arıyor." },
        { num: 12, emoji: "🥑", title: "Zengin Menüsü", product: "AVOKADO & SOMON", desc: "Gençler neden ev alamıyor? 'Avokado tost yedikleri için!' Avokado tanesi bir öğrencinin günlük harçlığı kadar." },
        { num: 13, emoji: "🧻", title: "Büyük Kağıt Krizi", product: "TUVALET KAĞIDI", desc: "Selüloz krizi! 32'li tuvalet kağıdı paketi adeta bir yatırım aracı oldu. 'Çeyrek altın yerine tuvalet kağıdı al!'" },
        { num: 14, emoji: "🐾", title: "Dostlar Sağ Olsun", product: "MAMA", desc: "İnsanlar kendinden kısıyor ama evcil hayvanından kesmiyor. 'Ben aç yatarım ama onu aç bırakmam' diyorlar." },
        { num: 15, emoji: "🥩", title: "Ne Yediğimiz Belli Değil", product: "KIYMA & SUCUK", desc: "'Yüzde yüz dana eti' diye satılan ürünlerde tek tırnaklı hayvan, kanatlı eti, hatta soya ve talaş tespit edildi." }
    ],
    en: [
        { num: 1, emoji: "🍬", title: "The Bio-Hack Craze", product: "SUGAR", desc: "A tech guru claims that pure glucose, snorted in micro-doses, unlocks 'God Mode' in the brain. The FDA warns it's just baking sugar, but tech bros are raiding supermarkets!" },
        { num: 2, emoji: "🍭", title: "The CBD Gummy Loophole", product: "GUMMY BEARS", desc: "A rumor spreads that gummy bears contain unregulated 'relaxing agents' due to a manufacturing error. Teens and stressed workers are buying every bag in sight!" },
        { num: 3, emoji: "🥤", title: "The Woke Brand War", product: "SODA", desc: "The Culture War has reached aisle 5! Patriots are buying crates of soda just to film themselves pouring it into the gutter. Sales are up, but the streets are sticky." },
        { num: 4, emoji: "🍅", title: "The Salad Crisis", product: "VEGETABLES", desc: "The Great Salad Shortage! Supermarkets are rationing tomatoes: Two per customer! Black markets for fresh veggies are popping up online. A salad is now a status symbol." },
        { num: 5, emoji: "🕯️", title: "The Opioid Ghost", product: "DAY OF MOURNING", desc: "No market update today. Right in front of our store, a young man collapsed. Another victim of the city's opioid epidemic. Bystanders just stepped over him." },
        { num: 6, emoji: "🛢️", title: "The Freedom Fry Panic", product: "OIL", desc: "Major fast-food chains might stop serving fries due to a global cooking oil shortage. Americans are hoarding gallons of cooking oil!" },
        { num: 7, emoji: "🇺🇸", title: "The January 6th Echo", product: "NATIONAL MOURNING", desc: "Democracy was attacked in its own house. We don't sell patriotism on a shelf, but today we close to remember that freedom isn't free." },
        { num: 8, emoji: "🏚️", title: "The Prepper's Feast", product: "BISCUITS & WATER", desc: "A leaked Pentagon report suggests geopolitical tensions are at an all-time high. 'The Bunker Mentality' has taken over suburbia. Doomsday bunker kits sell out!" },
        { num: 9, emoji: "🌿", title: "The Horse Paste Cure", product: "HERBAL TEA", desc: "A famous podcaster claimed 'Lemon Extract and Peppermint Oil' cures the new flu strain. Pharmacies are flooded. The herbal tea aisle is empty!" },
        { num: 10, emoji: "☕", title: "The $7 Latte Factor", product: "COFFEE", desc: "A billionaire says: 'Stop drinking fancy coffees and you'll be a millionaire!' Meanwhile, he owns 5 yachts. Sales of instant coffee skyrocketed." },
        { num: 11, emoji: "🕯️", title: "The Grid Failure", product: "CANDLES", desc: "The power grid has failed... again. In the richest country in the world, and we are freezing in the dark. Texans stock up on candles and blankets." },
        { num: 12, emoji: "🥑", title: "The Avocado Toast Meme", product: "AVOCADO & SALMON", desc: "A real estate mogul says Gen Z can't afford homes because of 'Avocado Toast.' A single avocado costs more than some people's hourly wage." },
        { num: 13, emoji: "🧻", title: "The Great Toilet Paper Panic", product: "TOILET PAPER", desc: "Rumors triggered 'Panic Buying 2.0'. Shoppers are fighting over the last pack. Fistfights in aisle 7. Toilet paper is the new currency!" },
        { num: 14, emoji: "🐾", title: "The Fur Baby Economy", product: "PET FOOD", desc: "Birth rates are down, Pet ownership is up! Families are buying premium organic kibble while eating instant noodles themselves." },
        { num: 15, emoji: "🥩", title: "The Horsemeat Scandal", product: "MEAT", desc: "DNA tests confirm that the 'Premium Beef Lasagna' might actually be racing horse. Trust in the meat industry has collapsed. What are we eating?" }
    ]
};

// German events
eventsData.de = [
    { num: 1, emoji: "🍬", title: "Der Puderzucker-Skandal", product: "ZUCKER", desc: "Ein Politiker wird auf einer Party beim Konsumieren eines weißen Pulvers gefilmt. Seine Ausrede? 'Es war nur Puderzucker für meine Waffeln!'" },
    { num: 2, emoji: "🍭", title: "Das Gummibärchen-Wunder", product: "GUMMIBÄRCHEN", desc: "Ein Start-up behauptet, bunte Gummibärchen ersetzen Impfungen und heilen Burnout durch 'Quantenenergie'. Die Regale sind leer!" },
    { num: 3, emoji: "🥤", title: "Der Cola-Boykott", product: "COLA", desc: "Aktivisten kaufen kistenweise Cola, um sie öffentlich in den Gulli zu kippen! 'Wir kaufen es, um sie zu ruinieren!' Eine seltsame Logik." },
    { num: 4, emoji: "🍅", title: "Die Gemüse-Mafia", product: "GEMÜSE", desc: "'Gierflation'! Die Regierung macht Jagd auf 'Wucher-Preise'. Tomaten werden wie Gold gehandelt. Eine Gurke kostet bald so viel wie ein Döner!" },
    { num: 5, emoji: "🕯️", title: "Femizid", product: "TRAUERTAG", desc: "Heute keine Börsennachrichten. Vor einer Stunde wurde eine Frau von ihrem Ex-Partner angegriffen. Das System hat versagt." },
    { num: 6, emoji: "🛢️", title: "Das flüssige Gold", product: "ÖL", desc: "Hamsterkauf-Alarm! Sonnenblumenöl ist ausgegangen. Rationierung: 'Nur eine Flasche pro Haushalt!' Die Deutschen prügeln sich in Gang 4." },
    { num: 7, emoji: "🇩🇪", title: "Angriff auf die Demokratie", product: "NATIONALE TRAUER", desc: "Ein geplanter Umsturz wurde verhindert. Hunderttausende gehen auf die Straße, um die Demokratie zu verteidigen. 'Nie wieder ist jetzt!'" },
    { num: 8, emoji: "🏚️", title: "Der Notvorrat", product: "KEKSE & WASSER", desc: "Das Bundesamt warnt vor einem möglichen Blackout im Winter. Die 'German Angst' ist zurück. Regale mit Dosenbrot und Wasser sind leergefegt." },
    { num: 9, emoji: "🌿", title: "Apotheken-Sterben", product: "KRÄUTERTEE", desc: "Es gibt keine Antibiotika und keinen Fiebersaft mehr für Kinder. Verzweifelte Eltern stürmen die Supermärkte. Kamillentee wird wie ein Medikament gehandelt." },
    { num: 10, emoji: "☕", title: "Finanz-Gurus", product: "KAFFEE", desc: "'Komm in die Gruppe!' Ein selbsternannter Finanz-Guru auf TikTok sagt: 'Trinkt billigen Instant-Kaffee und investiert den Rest in mein Coaching!'" },
    { num: 11, emoji: "🕯️", title: "Die Heizungshammer", product: "KERZEN", desc: "Der Winter kommt, und das Gas ist teuer. Die Regierung empfiehlt: 'Ziehen Sie einen zweiten Pullover an.' Ein 'Teelicht-Ofen' soll die Wohnung heizen." },
    { num: 12, emoji: "🥑", title: "Generation Avocado", product: "AVOCADO", desc: "Der Wohnungsmarkt ist kaputt, aber der Schuldige ist gefunden: Die Avocado! 'Die Jugend kauft keine Häuser, weil sie zu viel Avocado-Toast isst.'" },
    { num: 13, emoji: "🧻", title: "Das Klopapier-Trauma", product: "TOILETTENPAPIER", desc: "Es geht wieder los! Die Leute prügeln sich um die letzte XXL-Packung. Deutschland und sein Papier — eine neurotische Liebesgeschichte." },
    { num: 14, emoji: "🐾", title: "Hunde statt Kinder", product: "TIERFUTTER", desc: "Deutschland stirbt aus, aber die Hundezahlen explodieren! Familien sparen am Essen für sich selbst, kaufen aber Bio-Premium-Futter für den Hund." },
    { num: 15, emoji: "🥩", title: "Gammelfleisch-Skandal", product: "FLEISCH", desc: "Das 'Premium-Rindfleisch' ist eigentlich altes Pferdefleisch oder Abfall. Umetikettiert und neu verpackt. Das Vertrauen ist weg." }
];

// French events
eventsData.fr = [
    { num: 1, emoji: "🍬", title: "Le Scandale de la Poudre", product: "SUCRE", desc: "Un ministre filmé avec une poudre blanche en soirée. Sa défense ? 'Ce n'était que du sucre glace pour une pâtisserie, je suis un gourmand !'" },
    { num: 2, emoji: "🍭", title: "Le Miracle Bio", product: "BONBONS", desc: "Une start-up affirme que ces bonbons gélifiés soignent la dépression grâce aux 'énergies quantiques'. La France est en folie ésotérique!" },
    { num: 3, emoji: "🥤", title: "Le Boycott Anti-Impérialiste", product: "COLA", desc: "Les syndicats appellent au boycott du géant américain de soda. Les manifestants achètent des packs entiers pour les vider dans la Seine!" },
    { num: 4, emoji: "🍅", title: "La Colère des Paysans", product: "LÉGUMES", desc: "Les tracteurs bloquent Paris ! Les agriculteurs accusent la grande distribution. Une tomate française coûte plus cher qu'un litre de vin rouge." },
    { num: 5, emoji: "🕯️", title: "Le Silence des Pantoufles", product: "JOUR DE DEUIL", desc: "Pas de journal économique. Il y a une heure, devant notre vitrine, une femme est tombée sous les coups de son ex-conjoint. Personne n'a bougé." },
    { num: 6, emoji: "🛢️", title: "L'Or Jaune", product: "HUILE", desc: "Pénurie générale ! La guerre à l'Est a coupé les robinets d'huile de tournesol. 'Une par foyer !' Les Français se battent dans les allées." },
    { num: 7, emoji: "🇫🇷", title: "Le 49.3", product: "DEUIL NATIONAL", desc: "Le gouvernement a passé la loi en force, sans vote. Les syndicats coupent l'électricité, les raffineries sont bloquées. La démocratie tremble." },
    { num: 8, emoji: "🏚️", title: "L'Effondrement", product: "BISCUITS & EAU", desc: "La peur du 'Blackout' total a saisi la nation. Les 'Survivalistes' ne sont plus des marginaux. Les Parisiens vident les rayons d'eau et de biscuits secs." },
    { num: 9, emoji: "🌿", title: "Désert Médical", product: "TISANE", desc: "Les Urgences sont en grève illimitée. Il n'y a plus de médecins de garde. Les huiles essentielles et le citron s'arrachent comme des lingots d'or." },
    { num: 10, emoji: "☕", title: "Le Café Parisien", product: "CAFÉ", desc: "Le petit noir devient un luxe ! Une influenceuse conseille : 'Arrêtez le café, buvez de l'eau chaude !' Ruée sur le café soluble bas de gamme." },
    { num: 11, emoji: "🕯️", title: "La Sobriété Énergétique", product: "BOUGIES", desc: "Le Président demande de la 'Sobriété Énergétique'. Traduction : coupures d'électricité et pulls à col roulé. Le rayon bougies est dévalisé." },
    { num: 12, emoji: "🥑", title: "Les Bobos et l'Avocat", product: "AVOCAT", desc: "L'immobilier flambe, mais le coupable est trouvé : Les toasts à l'avocat ! Un éditorialiste accuse la jeunesse de tout dépenser en 'Brunchs'." },
    { num: 13, emoji: "🧻", title: "La Psychose du Papier", product: "PAPIER TOILETTE", desc: "Le traumatisme du confinement refait surface ! On se bat dans les rayons. La dignité humaine tient à une feuille de cellulose." },
    { num: 14, emoji: "🐾", title: "Les Bébés à Fourrure", product: "CROQUETTES", desc: "La France ne fait plus d'enfants, mais elle adopte des chiens ! Les gens se privent de dessert, mais achètent des croquettes Premium pour 'Loulou'." },
    { num: 15, emoji: "🥩", title: "Le Scandale des Lasagnes", product: "VIANDE", desc: "Des tests révèlent que la viande de bœuf 'Origine France' est en fait du cheval importé. La confiance dans la filière viande est morte." }
];

// Japanese events
eventsData.ja = [
    { num: 1, emoji: "🍬", title: "疑惑の白い粉", product: "砂糖", desc: "国民的アイドルがパーティーで白い粉を吸引する動画が流出。事務所は『高級な粉砂糖。彼はただの甘党』と苦しい釈明。" },
    { num: 2, emoji: "🍭", title: "奇跡のグミ", product: "グミ", desc: "『量子力学を応用したグミで、うつ病から貧困まで治る』と宣伝。老後の資金を崩して箱買いする高齢者が急増。" },
    { num: 3, emoji: "🥤", title: "コーラ・ボイコット", product: "コーラ", desc: "SNSで大炎上！海外メーカーが日本の食文化を侮辱したとして、コーラをケース買いし排水溝に流すパフォーマンスが拡散。" },
    { num: 4, emoji: "🍅", title: "野菜の値段", product: "野菜", desc: "値上げの秋。トマト1個がガソリン1リットルと同じ値段に。特売の野菜を求めて早朝から高齢者が長蛇の列。" },
    { num: 5, emoji: "🕯️", title: "無関心な目撃者", product: "追悼の日", desc: "店の目の前で女性が通り魔に襲われた。通行人はスマホで動画を撮るばかりで、誰も助けようとしなかった。" },
    { num: 6, emoji: "🛢️", title: "オイル・ショック", product: "食用油", desc: "令和のオイルショック？サラダ油が消えるという噂が拡散。唐揚げが作れなくなる恐怖が日本人をパニックに。" },
    { num: 7, emoji: "🇯🇵", title: "黙祷", product: "国民追悼", desc: "国中が静まり返っています。あまりにも大きな悲劇に、言葉が見つかりません。今はただ、祈ることしかできません。" },
    { num: 8, emoji: "🏚️", title: "巨大地震注意報", product: "ビスケット＆水", desc: "気象庁が『巨大地震注意報』を発表。防災意識の高い市民が水、乾パン、缶詰を買い占めている。生き残るための準備。" },
    { num: 9, emoji: "🌿", title: "医療崩壊", product: "ハーブティー", desc: "医療崩壊。救急車を呼んでも搬送先が見つかりません。『レモンと緑茶が効く』というデマが拡散し、棚は空っぽ。" },
    { num: 10, emoji: "☕", title: "ラテ・マネー", product: "コーヒー", desc: "投資家が『スタバを我慢すれば億万長者になれる』と発言し炎上。激安のインスタントコーヒーが飛ぶように売れている。" },
    { num: 11, emoji: "🕯️", title: "節電要請", product: "ろうそく", desc: "電力需給が逼迫。政府は『計画停電』の可能性を示唆。ハイテク国家日本が、まるで江戸時代に戻ったよう。" },
    { num: 12, emoji: "🥑", title: "アボカド世代", product: "アボカド", desc: "『アボカドトーストを食べるのをやめれば家が買える』という主張が話題。家は高すぎて買えないが、アボカドなら買える。" },
    { num: 13, emoji: "🧻", title: "トイレットペーパー騒動", product: "トイレットペーパー", desc: "デマが社会を麻痺させている！ビットコインより確実な資産、それはトイレットペーパー。普段は礼儀正しい日本人が奪い合い。" },
    { num: 14, emoji: "🐾", title: "ペットは家族", product: "ペットフード", desc: "出生数は過去最低だがペット市場はバブル！自分は半額の弁当を食べても、犬には最高級のオーガニックフードを与える。" },
    { num: 15, emoji: "🥩", title: "食品偽装", product: "肉", desc: "最高級『国産牛』が実は安い輸入肉や成型肉だったことが判明。『私たちが食べていたのは肉ではなくスポンジだったのか。』" }
];

// Korean events
eventsData.ko = [
    { num: 1, emoji: "🍬", title: "의혹의 분말", product: "설탕", desc: "국민 아이돌이 파티에서 흰 가루를 흡입하는 장면이 유출! 소속사는 '고급 분말 설탕. 그냥 달달한 거 좋아하는 겁니다'라고 해명." },
    { num: 2, emoji: "🍭", title: "기적의 젤리", product: "젤리", desc: "'양자역학을 이용한 젤리가 우울증부터 취업난까지 치료한다'는 광고. 노후자금을 깨서 박스째 사는 어르신 급증." },
    { num: 3, emoji: "🥤", title: "콜라 보이콧", product: "콜라", desc: "SNS 대폭발! 해외 음료 기업이 한국 문화를 모욕했다며 콜라를 박스째 사서 하수구에 버리는 퍼포먼스가 확산." },
    { num: 4, emoji: "🍅", title: "금 같은 채소", product: "채소", desc: "물가 폭등의 가을. 토마토 한 개가 휘발유 1리터 가격과 동일. 특가 채소를 사려는 어르신들이 이른 아침부터 장사진." },
    { num: 5, emoji: "🕯️", title: "무관심한 목격자", product: "추모의 날", desc: "가게 바로 앞에서 여성이 칼에 찔렸습니다. 지나가던 사람들은 핸드폰으로 동영상을 찍기만 하고, 아무도 도우려 하지 않았습니다." },
    { num: 6, emoji: "🛢️", title: "기름 대란", product: "식용유", desc: "식용유가 사라진다는 SNS 루머가 확산. 치킨을 못 먹게 될지도 모른다는 공포가 한국인을 패닉에 빠뜨렸다." },
    { num: 7, emoji: "🇰🇷", title: "묵념", product: "국가 추모", desc: "온 나라가 멈추었습니다. 너무나 큰 비극 앞에 할 말을 잃었습니다. 지금은 그저 기도할 수밖에 없습니다." },
    { num: 8, emoji: "🏚️", title: "지진 주의보", product: "비스킷 & 물", desc: "기상청이 거대 지진 주의보를 발표. 방재 의식이 높은 시민들이 물과 건빵, 통조림을 사재기하고 있다. 생존을 위한 준비." },
    { num: 9, emoji: "🌿", title: "의료 붕괴", product: "허브차", desc: "의료 붕괴. 구급차를 불러도 이송할 병원이 없습니다. '레몬과 녹차가 효과 있다'는 가짜뉴스가 퍼지며 매대는 텅 비었다." },
    { num: 10, emoji: "☕", title: "라떼 머니", product: "커피", desc: "투자 전문가가 '스타벅스를 참으면 억만장자가 될 수 있다'고 발언, 논란 폭발. 초저가 인스턴트 커피가 불티나게 팔리고 있다." },
    { num: 11, emoji: "🕯️", title: "절전 요청", product: "양초", desc: "전력수급이 위기! 정부는 '순환 정전'의 가능성을 시사. IT 강국 대한민국이 마치 조선시대로 돌아간 듯." },
    { num: 12, emoji: "🥑", title: "아보카도 세대", product: "아보카도", desc: "'아보카도 토스트 먹는 거 그만두면 집을 살 수 있다'는 주장이 화제. 집은 너무 비싸서 못 사지만, 아보카도는 살 수 있다." },
    { num: 13, emoji: "🧻", title: "휴지 대란", product: "화장지", desc: "가짜뉴스가 사회를 마비시켰다! 비트코인보다 확실한 자산, 바로 화장지. 평소 예의 바른 한국인들도 서로 빼앗는 중." },
    { num: 14, emoji: "🐾", title: "반려동물은 가족", product: "사료", desc: "출생률은 역대 최저지만 반려동물 시장은 호황! 자신은 반값 도시락을 먹으면서 강아지에게는 최고급 유기농 사료를 먹인다." },
    { num: 15, emoji: "🥩", title: "식품 위조", product: "고기", desc: "최고급 '한우'가 실은 값싼 수입육이나 성형 고기였다는 사실이 밝혀졌다. '우리가 먹고 있던 건 고기가 아니라 스펀지였나.'" }
];

// Russian events
eventsData.ru = [
    { num: 1, emoji: "🍬", title: "Подозрительный порошок", product: "САХАР", desc: "Видео с вечеринки, где известный блогер вдыхает белый порошок, слили в сеть. Его менеджер заявляет: 'Это была элитная сахарная пудра. Он просто сладкоежка!'" },
    { num: 2, emoji: "🍭", title: "Чудо-мармелад", product: "МАРМЕЛАД", desc: "'Квантовые мармеладки, которые лечат депрессию, бедность и облысение!' — гласит реклама. Пенсионеры тратят последние сбережения на коробки мармелада." },
    { num: 3, emoji: "🥤", title: "Бойкот колы", product: "КОЛА", desc: "Скандал в соцсетях! Зарубежный гигант напитков оскорбил русскую культуру. Патриоты скупают колу ящиками и выливают в канализацию!" },
    { num: 4, emoji: "🍅", title: "Золотые овощи", product: "ОВОЩИ", desc: "Осеннее безумие цен. Один помидор стоит как литр бензина. Пенсионеры стоят в очередях с рассвета за уценёнными овощами." },
    { num: 5, emoji: "🕯️", title: "Равнодушные свидетели", product: "ДЕНЬ ТРАУРА", desc: "Прямо перед магазином на женщину напали с ножом. Прохожие снимали на телефоны, но никто не пришёл на помощь." },
    { num: 6, emoji: "🛢️", title: "Масляная паника", product: "МАСЛО", desc: "В соцсетях разлетелся слух, что подсолнечное масло исчезнет. Ужас от невозможности жарить пирожки погрузил народ в панику." },
    { num: 7, emoji: "🇷🇺", title: "Минута молчания", product: "НАЦИОНАЛЬНЫЙ ТРАУР", desc: "Вся страна замерла. Перед лицом слишком большой трагедии слов не найти. Сейчас мы можем только молиться." },
    { num: 8, emoji: "🏚️", title: "Сейсмическая тревога", product: "ПЕЧЕНЬЕ И ВОДА", desc: "МЧС объявило предупреждение о возможном крупном землетрясении. Бдительные граждане скупают воду, сухари и тушёнку. Подготовка к выживанию." },
    { num: 9, emoji: "🌿", title: "Крах медицины", product: "ТРАВЯНОЙ ЧАЙ", desc: "Медицина рушится. Скорую вызвал — ехать некуда. 'Лимон и зелёный чай помогут!' — фейк разлетелся по сети, полки опустели." },
    { num: 10, emoji: "☕", title: "Латте-деньги", product: "КОФЕ", desc: "Инвестор заявил: 'Откажитесь от Старбакса — станете миллионерами!' Скандал! Дешёвый растворимый кофе разлетается как горячие пирожки." },
    { num: 11, emoji: "🕯️", title: "Запрос на экономию", product: "СВЕЧИ", desc: "Электроэнергии критически не хватает. Правительство намекает на 'плановые отключения'. Высокотехнологичная Россия как будто вернулась в XIX век." },
    { num: 12, emoji: "🥑", title: "Поколение авокадо", product: "АВОКАДО", desc: "'Перестаньте есть авокадо-тосты — и сможете купить квартиру!' Квартира слишком дорога, зато авокадо ещё можно себе позволить." },
    { num: 13, emoji: "🧻", title: "Туалетная паника", product: "ТУАЛЕТНАЯ БУМАГА", desc: "Фейк парализовал общество! Более надёжный актив, чем биткоин — туалетная бумага. Обычно вежливые русские дерутся за последнюю пачку." },
    { num: 14, emoji: "🐾", title: "Питомец — это семья", product: "КОРМ ДЛЯ ЖИВОТНЫХ", desc: "Рождаемость на историческом минимуме, а рынок зоотоваров на пике! Сами едят дошираки, но собаке — только органический премиум-корм." },
    { num: 15, emoji: "🥩", title: "Пищевой подлог", product: "МЯСО", desc: "Выяснилось, что 'элитная мраморная говядина' — это дешёвое импортное или формованное мясо. 'Мы ели не мясо, а губку?'" }
];

// Chinese events
eventsData.zh = [
    { num: 1, emoji: "🍬", title: "可疑粉末", product: "糖", desc: "某国民偶像在派对上吸入白色粉末的视频被泄露。经纪公司声明：'那是高级糖粉。他只是个甜食爱好者！'" },
    { num: 2, emoji: "🍭", title: "奇迹软糖", product: "软糖", desc: "'量子力学软糖，能治抑郁症到贫穷的一切！'广告这样宣传。老年人纷纷拿出养老金整箱购买。" },
    { num: 3, emoji: "🥤", title: "可乐抵制", product: "可乐", desc: "社交媒体大爆炸！外国饮料巨头侮辱了中国文化。爱国者成箱购买可乐然后倒进下水道！" },
    { num: 4, emoji: "🍅", title: "黄金蔬菜", product: "蔬菜", desc: "秋季物价疯涨。一个番茄的价格等于一升汽油。老人们从黎明开始排队抢购特价蔬菜。" },
    { num: 5, emoji: "🕯️", title: "冷漠的旁观者", product: "哀悼日", desc: "就在商店门前，一名女性被持刀袭击。路人纷纷拿出手机拍视频，却没有人伸出援手。" },
    { num: 6, emoji: "🛢️", title: "食用油恐慌", product: "食用油", desc: "社交媒体上疯传食用油将消失的谣言。无法炸油条的恐惧让人民陷入恐慌。" },
    { num: 7, emoji: "🇨🇳", title: "默哀", product: "全国哀悼", desc: "整个国家陷入沉默。面对如此巨大的悲剧，找不到任何言语。现在我们只能祈祷。" },
    { num: 8, emoji: "🏚️", title: "地震警报", product: "饼干和水", desc: "地震局发布大地震预警。有防灾意识的市民正在抢购水、压缩饼干和罐头。为生存做准备。" },
    { num: 9, emoji: "🌿", title: "医疗崩溃", product: "草药茶", desc: "医疗体系崩溃。叫了急救车却找不到接收医院。'柠檬和绿茶有效！'的假消息疯传，货架被抢空。" },
    { num: 10, emoji: "☕", title: "拿铁财富", product: "咖啡", desc: "投资专家说：'戒掉星巴克就能成为亿万富翁！'引发争议风暴。超低价速溶咖啡像热饼一样畅销。" },
    { num: 11, emoji: "🕯️", title: "节电要求", product: "蜡烛", desc: "电力供应严重不足。政府暗示可能'轮流停电'。高科技中国仿佛回到了煤油灯时代。" },
    { num: 12, emoji: "🥑", title: "牛油果一代", product: "牛油果", desc: "'不吃牛油果吐司就能买房！'这一说法引发热议。房子买不起，但至少牛油果还买得起。" },
    { num: 13, emoji: "🧻", title: "厕纸恐慌", product: "卫生纸", desc: "假新闻让社会陷入瘫痪！比比特币更可靠的资产就是卫生纸。平时文明礼貌的人们也开始互相争抢。" },
    { num: 14, emoji: "🐾", title: "宠物即家人", product: "宠物粮", desc: "出生率创历史新低，但宠物市场一片繁荣！自己吃半价盒饭，却给狗买最高级的有机食品。" },
    { num: 15, emoji: "🥩", title: "食品造假", product: "肉类", desc: "最高级'国产牛肉'实际上是廉价进口肉或成型肉。'我们吃的不是肉，而是海绵吗？'" }
];

// Spanish events
eventsData.es = [
    { num: 1, emoji: "🍬", title: "El Polvo Sospechoso", product: "AZÚCAR", desc: "Un ídolo nacional fue filmado inhalando polvo blanco en una fiesta. Su agencia declara: '¡Era azúcar glas premium. Simplemente es goloso!'" },
    { num: 2, emoji: "🍭", title: "Las Gominolas Milagrosas", product: "GOMINOLAS", desc: "'¡Gominolas cuánticas que curan desde la depresión hasta la pobreza!' Ancianos gastan sus ahorros comprando cajas enteras." },
    { num: 3, emoji: "🥤", title: "El Boicot a la Cola", product: "COLA", desc: "¡Explosión en redes sociales! Un gigante extranjero de bebidas insulta la cultura española. ¡Patriotas compran cola por cajas para tirarla al desagüe!" },
    { num: 4, emoji: "🍅", title: "Verduras de Oro", product: "VERDURAS", desc: "Locura de precios otoñal. Un tomate cuesta lo mismo que un litro de gasolina. Los ancianos hacen cola desde el amanecer por verduras rebajadas." },
    { num: 5, emoji: "🕯️", title: "Testigos Indiferentes", product: "DÍA DE LUTO", desc: "Justo frente a la tienda, una mujer fue apuñalada. Los transeúntes sacaron sus teléfonos para grabar videos, pero nadie intentó ayudar." },
    { num: 6, emoji: "🛢️", title: "Pánico del Aceite", product: "ACEITE", desc: "Rumores en redes de que el aceite de girasol desaparecerá. ¡El terror de no poder freír tortillas ha sumido al pueblo en el pánico!" },
    { num: 7, emoji: "🇪🇸", title: "Minuto de Silencio", product: "DUELO NACIONAL", desc: "Todo el país se ha detenido. Ante una tragedia tan grande, no hay palabras. Ahora solo podemos rezar." },
    { num: 8, emoji: "🏚️", title: "Alerta Sísmica", product: "GALLETAS Y AGUA", desc: "Protección Civil emite alerta de terremoto. Los ciudadanos con conciencia preventiva acaparan agua, galletas y conservas. Preparación para sobrevivir." },
    { num: 9, emoji: "🌿", title: "Colapso Sanitario", product: "TÉ DE HIERBAS", desc: "Colapso médico. Llamas a la ambulancia y no hay hospital disponible. 'El limón y el té verde funcionan' — el bulo se viraliza, los estantes vacíos." },
    { num: 10, emoji: "☕", title: "Dinero del Latte", product: "CAFÉ", desc: "Un experto en inversiones dice: '¡Deja el Starbucks y serás millonario!' Escándalo viral. El café instantáneo barato se vende como churros." },
    { num: 11, emoji: "🕯️", title: "Petición de Ahorro", product: "VELAS", desc: "La energía escasea críticamente. El gobierno insinúa 'apagones rotativos'. La España tecnológica parece volver a la época de las velas." },
    { num: 12, emoji: "🥑", title: "Generación Aguacate", product: "AGUACATE", desc: "'¡Deja de comer tostadas de aguacate y podrás comprarte un piso!' El piso es demasiado caro, pero al menos el aguacate sí se puede comprar." },
    { num: 13, emoji: "🧻", title: "Pánico del Papel", product: "PAPEL HIGIÉNICO", desc: "¡Las noticias falsas han paralizado la sociedad! El activo más seguro, más que el bitcoin: papel higiénico. Hasta los más educados se pelean." },
    { num: 14, emoji: "🐾", title: "La Mascota es Familia", product: "COMIDA PARA MASCOTAS", desc: "La natalidad en mínimos históricos, ¡pero el mercado de mascotas en auge! Comen menú del día barato pero compran pienso orgánico premium para el perro." },
    { num: 15, emoji: "🥩", title: "Fraude Alimentario", product: "CARNE", desc: "La 'ternera premium nacional' resulta ser carne importada barata o carne procesada. '¿Lo que comíamos no era carne sino esponja?'" }
];

// Italian events
eventsData.it = [
    { num: 1, emoji: "🍬", title: "La Polvere Sospetta", product: "ZUCCHERO", desc: "Un idolo nazionale filmato mentre inala polvere bianca a una festa. La sua agenzia dichiara: 'Era zucchero a velo premium. È solo un goloso!'" },
    { num: 2, emoji: "🍭", title: "Le Caramelle Miracolose", product: "CARAMELLE", desc: "'Caramelle quantistiche che curano dalla depressione alla povertà!' Anziani spendono i risparmi di una vita comprando scatole intere." },
    { num: 3, emoji: "🥤", title: "Il Boicottaggio della Cola", product: "COLA", desc: "Esplosione sui social! Un gigante straniero delle bevande ha insultato la cultura italiana. Patrioti comprano cola a casse per versarla nello scarico!" },
    { num: 4, emoji: "🍅", title: "Verdure d'Oro", product: "VERDURA", desc: "Follia dei prezzi autunnale. Un pomodoro costa quanto un litro di benzina. Gli anziani fanno la fila dall'alba per le verdure scontate." },
    { num: 5, emoji: "🕯️", title: "Testimoni Indifferenti", product: "GIORNO DI LUTTO", desc: "Proprio davanti al negozio, una donna è stata accoltellata. I passanti hanno tirato fuori i telefoni per filmare, ma nessuno ha provato ad aiutare." },
    { num: 6, emoji: "🛢️", title: "Il Panico dell'Olio", product: "OLIO", desc: "Sui social si diffonde la voce che l'olio di girasole sparirà. Il terrore di non poter friggere le arancine ha gettato il popolo nel panico!" },
    { num: 7, emoji: "🇮🇹", title: "Minuto di Silenzio", product: "LUTTO NAZIONALE", desc: "Tutto il paese si è fermato. Di fronte a una tragedia così grande, non ci sono parole. Ora possiamo solo pregare." },
    { num: 8, emoji: "🏚️", title: "Allerta Sismica", product: "BISCOTTI E ACQUA", desc: "La Protezione Civile emette allerta terremoto. I cittadini con coscienza preventiva accaparrano acqua, biscotti e conserve. Preparazione per sopravvivere." },
    { num: 9, emoji: "🌿", title: "Collasso Sanitario", product: "TISANA", desc: "Collasso medico. Chiami l'ambulanza e non c'è ospedale disponibile. 'Limone e tè verde funzionano!' — la bufala diventa virale, scaffali vuoti." },
    { num: 10, emoji: "☕", title: "I Soldi del Latte Macchiato", product: "CAFFÈ", desc: "Un esperto di investimenti dice: 'Smetti con lo Starbucks e diventerai milionario!' Scandalo virale. Il caffè istantaneo economico va a ruba." },
    { num: 11, emoji: "🕯️", title: "Richiesta di Risparmio", product: "CANDELE", desc: "L'energia scarseggia criticamente. Il governo suggerisce 'blackout a rotazione'. L'Italia tecnologica sembra tornare all'epoca delle candele." },
    { num: 12, emoji: "🥑", title: "Generazione Avocado", product: "AVOCADO", desc: "'Smetti di mangiare toast all'avocado e potrai comprare casa!' La casa è troppo cara, ma almeno l'avocado si può ancora comprare." },
    { num: 13, emoji: "🧻", title: "Panico della Carta", product: "CARTA IGIENICA", desc: "Le fake news hanno paralizzato la società! L'asset più sicuro del bitcoin: carta igienica. Anche i più educati si azzuffano per l'ultimo pacco." },
    { num: 14, emoji: "🐾", title: "L'Animale è Famiglia", product: "CIBO PER ANIMALI", desc: "La natalità ai minimi storici, ma il mercato degli animali in boom! Mangiano pasta e tonno ma comprano crocchette bio premium per il cane." },
    { num: 15, emoji: "🥩", title: "Frode Alimentare", product: "CARNE", desc: "La 'vitella premium nazionale' si rivela essere carne importata economica o carne lavorata. 'Quello che mangiavamo non era carne ma spugna?'" }
];

// ============================
// GLOBAL STATE
// ============================
let currentLang = 'tr';
let currentEventPage = 0;
const EVENTS_PER_PAGE = 3;

// ============================
// DOM READY
// ============================
document.addEventListener('DOMContentLoaded', function () {
    var inits = [
        ['Navbar', initNavbar],
        ['Language', initLanguage],
        ['Countdown', initCountdown],
        ['Events', initEvents],
        ['Gallery', initGallery],
        ['ScrollReveal', initScrollReveal],
        ['SmoothScroll', initSmoothScroll],
        ['MobileMenu', initMobileMenu]
    ];
    for (var i = 0; i < inits.length; i++) {
        try {
            inits[i][1]();
        } catch (e) {
            console.error('Init ' + inits[i][0] + ' failed:', e);
        }
    }
});

// ============================
// NAVBAR
// ============================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ============================
// LANGUAGE SYSTEM
// ============================
function initLanguage() {
    const btn = document.getElementById('langBtn');
    const selector = document.getElementById('langSelector');
    const dropdown = document.getElementById('langDropdown');

    // Toggle dropdown on button click
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        selector.classList.toggle('open');
    });

    // Handle language option clicks via event delegation
    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        const option = e.target.closest('.lang-option');
        if (option) {
            const lang = option.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
                selector.classList.remove('open');
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!selector.contains(e.target)) {
            selector.classList.remove('open');
        }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            selector.classList.remove('open');
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Update flag and name
    document.getElementById('langFlag').textContent = langMeta[lang].flag;
    document.getElementById('langName').textContent = langMeta[lang].name;

    // Update active option
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Rebuild events
    currentEventPage = 0;
    renderEvents();

    // Update videos based on language
    var trailerVideo = document.getElementById('trailerVideo');
    var endDayVideo = document.getElementById('endDayVideo');
    if (lang !== 'tr') {
        if (trailerVideo) {
            trailerVideo.querySelector('source').src = 'assets/video/ingilizce%20trailer.mp4';
            trailerVideo.load();
        }
        if (endDayVideo) {
            endDayVideo.querySelector('source').src = 'assets/video/ingilizce%20G%C3%BCn%20Sonu.mp4';
            endDayVideo.load();
        }
    } else {
        if (trailerVideo) {
            trailerVideo.querySelector('source').src = 'assets/video/trailer.mp4';
            trailerVideo.load();
        }
        if (endDayVideo) {
            endDayVideo.querySelector('source').src = 'assets/video/G%C3%BCn%20Sonu.mp4';
            endDayVideo.load();
        }
    }

    // Update HTML lang
    document.documentElement.lang = lang;
}

// ============================
// COUNTDOWN
// ============================
function initCountdown() {
    const target = new Date('2026-03-15T00:00:00').getTime();

    function update() {
        const now = Date.now();
        const diff = Math.max(0, target - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
        document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
        document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// ============================
// EVENTS CAROUSEL
// ============================
function initEvents() {
    renderEvents();

    document.getElementById('eventPrev').addEventListener('click', () => {
        const events = eventsData[currentLang] || eventsData.en;
        const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
        currentEventPage = (currentEventPage - 1 + totalPages) % totalPages;
        renderEvents();
    });

    document.getElementById('eventNext').addEventListener('click', () => {
        const events = eventsData[currentLang] || eventsData.en;
        const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
        currentEventPage = (currentEventPage + 1) % totalPages;
        renderEvents();
    });

    // Touch/drag support
    let startX = 0;
    let isDragging = false;
    const track = document.getElementById('eventsTrack');

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) document.getElementById('eventNext').click();
            else document.getElementById('eventPrev').click();
        }
    });
}

function renderEvents() {
    const events = eventsData[currentLang] || eventsData.en;
    const track = document.getElementById('eventsTrack');
    const dotsContainer = document.getElementById('eventsDots');
    const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

    // Render all cards
    track.innerHTML = events.map(ev => `
        <div class="event-card">
            <div class="event-number">${ev.num}</div>
            <div class="event-emoji">${ev.emoji}</div>
            <h3 class="event-title">${ev.title}</h3>
            <div class="event-product">${ev.product}</div>
            <p class="event-desc">${ev.desc}</p>
        </div>
    `).join('');

    // Calculate offset
    const cardWidth = 340; // 320 + 20 gap
    const offset = currentEventPage * EVENTS_PER_PAGE * cardWidth;
    track.style.transform = `translateX(-${offset}px)`;

    // Render dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = `events-dot${i === currentEventPage ? ' active' : ''}`;
        dot.addEventListener('click', () => {
            currentEventPage = i;
            renderEvents();
        });
        dotsContainer.appendChild(dot);
    }
}

// ============================
// GALLERY LIGHTBOX
// ============================
function initGallery() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const items = document.querySelectorAll('.gallery-item');
    const images = Array.from(items).map(item => item.querySelector('img').src);
    let currentIndex = 0;

    items.forEach((item, idx) => {
        item.addEventListener('click', () => {
            currentIndex = idx;
            lightboxImg.src = images[currentIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.getElementById('lightboxPrev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    });

    document.getElementById('lightboxNext').addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
        if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================
// SCROLL REVEAL
// ============================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    // First: mark all reveal elements as hidden (so they can animate in)
    reveals.forEach(el => {
        el.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    reveals.forEach(el => observer.observe(el));
}

// ============================
// SMOOTH SCROLL
// ============================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('open');
            }
        });
    });
}

// ============================
// MOBILE MENU
// ============================
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}
