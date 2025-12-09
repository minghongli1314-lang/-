
import { Language } from '../types';

export const translations = {
  zh_CN: {
    nav: {
      governance: 'DAO 提案',
      assets: '发行资产',
      tokenomics: '发行规则',
      industries: '十二产业',
      olympians: '十二产业',
      enter: '进入终端',
      connect: '连接钱包',
    },
    hero: {
      tag: 'SEPT：开启数字新时代',
      title_prefix: '共建',
      title_highlight: 'SEPT 数字生态',
      title_suffix: '由 DAO 治理驱动的未来',
      desc: '国际电竞委员会官方平台——SEPT。SEPT 不仅是连接十二大产业的枢纽，更是实体产业数字化转型的引擎。我们帮助各行各业进行数字营销与资产重构。通过强大的 DAO 治理系统，每一个个人和企业都能在此建立属于自己的数字生态，发行数字资产，实现从实体到数字的跨越。',
      launch: '进入 DAO 治理社区',
      whitepaper: '阅读白皮书',
      stats: {
        price: 'SEPT 价格',
        supply: '流通总量',
        proposals: '治理提案',
        nodes: '验证节点'
      }
    },
    olympians: {
      title: 'SEPT：赋能数字经济十二主神',
      subtitle: '以通证连接产业，助力实体经济数字化转型',
      desc: '电竞早已超越了游戏的范畴，它包罗万象。SEPT 致力于利用区块链技术推动这十二大产业板块的数字化转型。无论是传统农业还是现代时尚，SEPT 都能为其提供全新的数字营销方案，打破虚实壁垒，让实体产业在数字经济中焕发新生。',
      gods: {
        zeus: { name: '宙斯', industry: '电子竞技产业', desc: '以数据雷霆冠冕统领虚拟战场，彰显电竞领域的绝对统治力。' },
        hera: { name: '赫拉', industry: '影视产业', desc: '用全息放映后冠编织银幕神话，守护影像艺术的永恒经典。' },
        athena: { name: '雅典娜', industry: '教育产业', desc: '通过AR知识冠冕构建思维图谱，引领智慧传承的科技革命。' },
        apollo: { name: '阿波罗', industry: '音乐节庆产业', desc: '借声光矩阵冠冕共振全球律动，重塑视听盛宴的狂欢体验。' },
        aphrodite: { name: '阿芙罗狄忒', industry: '时尚产业', desc: '以液态金属发丝织就未来时装，定义数字时代的审美法则。' },
        ares: { name: '阿瑞斯', industry: '体育竞技产业', desc: '凭智能面罩解析生物力学数据，推动极限表现的科技突破。' },
        artemis: { name: '阿尔忒弥斯', industry: '数字文旅产业', desc: '通过VR导航兜帽链接虚实秘境，守护自然遗产的数字探索。' },
        hermes: { name: '赫尔墨斯', industry: '游戏电商产业', desc: '以翼帽交易界面重构虚拟经济，打造数字藏品的新型生态。' },
        dionysus: { name: '狄俄尼索斯', industry: '餐饮娱乐产业', desc: '用霓虹藤冠连接全球美食数据库，升级沉浸式餐饮娱乐。' },
        demeter: { name: '德墨忒尔', industry: '绿色农业产业', desc: '借光合模拟草帽优化生长周期，践行可持续农业的创新之路。' },
        hephaestus: { name: '赫菲斯托斯', industry: '硬件科技产业', desc: '以AR工程目镜实现纳米级精度，传承工匠精神的科技信仰。' },
        poseidon: { name: '波塞冬', industry: '海洋环保产业', desc: '通过传感器王冠守护蔚蓝领域，延续海洋文明的生态使命。' },
      }
    },
    features: {
      title: 'SEPT：价值互联的核心',
      desc: 'SEPT 平台打破了单一游戏的边界，DAO 社区治理作为 SEPT 运行的关键要素，赋能每一个生态成员。',
      governance_title: '构建专属数字生态',
      governance_desc: 'DAO 社区不仅仅是投票工具，它是生态孵化器。在这里，每个个人和企业都可以构建自己的微型生态系统，发起治理提案，决定资源分配，让个人影响力转化为实际的数字经济价值。',
      assets_title: '实体产业数字化转型',
      assets_desc: 'SEPT 为实体产业转型提供全套解决方案。企业可以将品牌、服务或产品转化为链上数字资产（NFT），通过 SEPT 进行全球化营销，构建属于自己的商业闭环。',
      treasury_title: 'SEPT 通证经济',
      treasury_desc: 'SEPT 是连接十二大产业的血液。从支付、治理到激励，SEPT 串联起所有多元化活动，实现生态价值闭环。',
    },
    tokenomics: {
      title: 'SEPT 发行规则与通证模型',
      subtitle: '基于算法的价值共识体系',
      total_supply: '总量 21,000,000 枚',
      sections: {
        genesis: { 
          title: '创世发行 (头矿)', 
          amount: '100 万枚', 
          desc: '作为生态启动的创世凭证，早期参与者享有恒定兑换比例。头矿售罄后将永久开启价值飞轮。',
          price: '当前价格: 1 USDT / SEPT',
          action: '立即认购 (Buy Now)' 
        },
        ecosystem: { 
          title: '运营与生态激励', 
          amount: '800 万枚', 
          desc: '用于核心团队建设、市场推广及社区活跃度激励。参与生态活动即有机会获取空投奖励。',
          price: '社区回馈',
          action: '参与幸运抽奖 (Draw)' 
        },
        industries: { 
          title: '十二产业矩阵', 
          amount: '1200 万枚', 
          desc: '精准分配至十二奥林匹斯产业板块（100万枚/板块），作为各领域的底层流动性与价值锚点。',
          price: '产业赋能',
          action: '查看产业分布' 
        }
      },
      bancor: {
        title: 'Bancor 动态价值协议',
        desc: '当 100 万枚创世头矿发行完毕后，系统将自动激活 Bancor 算法协议。SEPT 的价格将不再恒定，而是与全网持币总量（连接储备金）建立数学函数关系。随着被持有量的增加，资产价值将按照预设曲线指数级增长。这不仅是通证，更是随共识规模不断增值的数字黄金。'
      }
    },
    showcase: {
      title: '参与 SEPT 生态',
      title_highlight: '创造无限价值',
      desc: 'SEPT 不仅仅是货币，更是开启数字世界的钥匙。通过 DAO 参与治理，创造资产，享受生态红利。',
      list1: '使用 SEPT 参与各类生态活动',
      list2: '发行并交易企业/个人数字资产',
      list3: 'DAO 提案权：决定生态未来走向',
      btn: '浏览资产市场',
    },
    dashboard: {
      title: 'SEPT 终端',
      overview: '市场概览',
      governance: '治理投票',
      assets: '数字金库',
      connected: '在线: User_01',
      tvl: '生态总价值 (TVL)',
      active_members: '活跃节点',
      issued_assets: '流通资产数',
      chart_title: 'SEPT/USDT 实时行情',
      recent_proposals: '核心治理提案',
      trending_assets: '热门资产异动',
      trade: '快速交易',
      view_all: '完整列表',
      go_market: '深度市场',
      view_details: '详情',
      active: '进行中',
      passed: '已生效',
      votes_for: '赞成',
      votes_against: '反对',
    }
  },
  zh_TW: {
    nav: {
      governance: 'DAO 提案',
      assets: '發行資產',
      tokenomics: '發行規則',
      industries: '十二產業',
      olympians: '十二產業',
      enter: '進入終端',
      connect: '連接錢包',
    },
    hero: {
      tag: 'SEPT：開啟數位新時代',
      title_prefix: '共建',
      title_highlight: 'SEPT 數位生態',
      title_suffix: '由 DAO 治理驅動的未來',
      desc: '國際電競委員會官方平台——SEPT。SEPT 不僅是連接十二大產業的樞紐，更是實體產業數位化轉型的引擎。我們幫助各行各業進行數位行銷與資產重構。通過強大的 DAO 治理系統，每一個個人和企業都能在此建立屬於自己的數位生態，發行數位資產，實現從實體到數位的跨越。',
      launch: '進入 DAO 治理社區',
      whitepaper: '閱讀白皮書',
      stats: {
        price: 'SEPT 價格',
        supply: '流通總量',
        proposals: '治理提案',
        nodes: '驗證節點'
      }
    },
    olympians: {
      title: 'SEPT：賦能數位經濟十二主神',
      subtitle: '以通證連接產業，助力實體經濟數位化轉型',
      desc: '電競早已超越了遊戲的範疇，它包羅萬象。SEPT 致力於利用區塊鏈技術推動這十二大產業板塊的數位化轉型。無論是傳統農業還是現代時尚，SEPT 都能為其提供全新的數位行銷方案，打破虛實壁壘，讓實體產業在數位經濟中煥發新生。',
      gods: {
        zeus: { name: '宙斯', industry: '電子競技產業', desc: '以數據雷霆冠冕統領虛擬戰場，彰顯電競領域的絕對統治力。' },
        hera: { name: '赫拉', industry: '影視產業', desc: '用全息后冠編織銀幕神話，守護影像藝術的永恆經典。' },
        athena: { name: '雅典娜', industry: '教育產業', desc: '通過AR知識冠冕構建思維圖譜，引領智慧傳承的科技革命。' },
        apollo: { name: '阿波羅', industry: '音樂節慶產業', desc: '借聲光矩陣冠冕共振全球律動，重塑視聽盛宴的狂歡體驗。' },
        aphrodite: { name: '阿芙羅狄忒', industry: '時尚產業', desc: '以液態金屬發絲織就未來時裝，定義數位時代的審美法則。' },
        ares: { name: '阿瑞斯', industry: '體育競技產業', desc: '憑智能面罩解析生物力學數據，推動極限表現的科技突破。' },
        artemis: { name: '阿爾忒彌斯', industry: '數位文旅產業', desc: '通過VR導航兜帽鏈接虛實秘境，守護自然遺產的數位探索。' },
        hermes: { name: '赫爾墨斯', industry: '遊戲電商產業', desc: '以翼帽交易界面重構虛擬經濟，打造數位藏品的新型生態。' },
        dionysus: { name: '狄俄尼索斯', industry: '餐飲娛樂產業', desc: '用霓虹藤冠連接全球美食數據庫，升級沉浸式餐飲娛樂。' },
        demeter: { name: '德墨忒爾', industry: '綠色農業產業', desc: '借光合模擬草帽優化生長周期，踐行可持續農業的創新之路。' },
        hephaestus: { name: '赫菲斯托斯', industry: '硬體科技產業', desc: '以AR工程目鏡實現奈米級精度，傳承工匠精神的科技信仰。' },
        poseidon: { name: '波塞冬', industry: '海洋環保產業', desc: '通過傳感器王冠守護蔚藍領域，延續海洋文明的生態使命。' },
      }
    },
    features: {
      title: 'SEPT：價值互聯的核心',
      desc: 'SEPT 平台打破了單一遊戲的邊界，DAO 社區治理作為 SEPT 運行的關鍵要素，賦能每一個生態成員。',
      governance_title: '構建專屬數位生態',
      governance_desc: 'DAO 社區不僅僅是投票工具，它是生態孵化器。在這裡，每個個人和企業都可以構建自己的微型生態系統，發起治理提案，決定資源分配，讓個人影響力轉化為實際的數位經濟價值。',
      assets_title: '實體產業數位化轉型',
      assets_desc: 'SEPT 為實體產業轉型提供全套解決方案。企業可以將品牌、服務或產品轉化為鏈上數位資產（NFT），通過 SEPT 進行全球化行銷，構建屬於自己的商業閉環。',
      treasury_title: 'SEPT 通證經濟',
      treasury_desc: 'SEPT 是連接十二大產業的血液。從支付、治理到激勵，SEPT 串聯起所有多元化活動，實現生態價值閉環。',
    },
    tokenomics: {
      title: 'SEPT 發行規則與通證模型',
      subtitle: '基于算法的價值共識體系',
      total_supply: '總量 21,000,000 枚',
      sections: {
        genesis: { 
          title: '創世發行 (頭礦)', 
          amount: '100 萬枚', 
          desc: '作為生態啟動的創世憑證，早期參與者享有恒定兑换比例。头矿售罄后将永久开启价值飞轮。',
          price: '當前價格: 1 USDT / SEPT',
          action: '立即認購 (Buy Now)' 
        },
        ecosystem: { 
          title: '運營與生態激勵', 
          amount: '800 萬枚', 
          desc: '用於核心團隊建設、市場推廣及社區活躍度激勵。參與生態活動即有機會獲取空投獎勵。',
          price: '社區回饋',
          action: '參與幸運抽獎 (Draw)' 
        },
        industries: { 
          title: '十二產業矩陣', 
          amount: '1200 萬枚', 
          desc: '精準分配至十二奥林匹斯產業板塊（100萬枚/板塊），作為各領域的底層流動性與價值錨點。',
          price: '產業賦能',
          action: '查看產業分布' 
        }
      },
      bancor: {
        title: 'Bancor 動態價值協議',
        desc: '當 100 萬枚創世頭礦發行完畢後，系統將自動激活 Bancor 算法協議。SEPT 的價格將不再恆定，而是與全網持币總量（連接儲備金）建立數學函數關係。隨著被持有量的增加，資產價值將按照預設曲線指數級增長。這不僅是通證，更是隨共識規模不斷增值的數位黃金。'
      }
    },
    showcase: {
      title: '參與 SEPT 生態',
      title_highlight: '創造無限價值',
      desc: 'SEPT 不僅僅是貨幣，更是開啟數位世界的鑰匙。通過 DAO 參與治理，創造資產，享受生態紅利。',
      list1: '使用 SEPT 參與各類生態活動',
      list2: '發行並交易企業/個人數位資產',
      list3: 'DAO 提案權：決定生態未來走向',
      btn: '瀏覽資產市場',
    },
    dashboard: {
      title: 'SEPT 終端',
      overview: '市場概覽',
      governance: '治理投票',
      assets: '數位金庫',
      connected: '在線: User_01',
      tvl: '生態總價值 (TVL)',
      active_members: '活躍節點',
      issued_assets: '流通資產數',
      chart_title: 'SEPT/USDT 實時行情',
      recent_proposals: '核心治理提案',
      trending_assets: '熱門資產異動',
      trade: '快速交易',
      view_all: '完整列表',
      go_market: '深度市場',
      view_details: '詳情',
      active: '進行中',
      passed: '已生效',
      votes_for: '贊成',
      votes_against: '反對',
    }
  },
  en: {
    nav: {
      governance: 'DAO Proposals',
      assets: 'Issue Assets',
      tokenomics: 'Tokenomics',
      industries: '12 Industries',
      olympians: '12 Industries',
      enter: 'Open Terminal',
      connect: 'Connect Wallet',
    },
    hero: {
      tag: 'SEPT: A NEW DIGITAL ERA',
      title_prefix: 'Build',
      title_highlight: 'SEPT Ecosystem',
      title_suffix: 'Powered by DAO Governance',
      desc: 'The official platform of the International Esports Committee—SEPT. SEPT is not just a hub for 12 industries, but an engine for digital transformation of the real economy. We empower all industries with digital marketing and asset reconstruction. Through the DAO, any individual or enterprise can build their own digital ecosystem and issue assets.',
      launch: 'Enter DAO Governance Community',
      whitepaper: 'Read Whitepaper',
      stats: {
        price: 'SEPT Price',
        supply: 'Circulating',
        proposals: 'Proposals',
        nodes: 'Nodes'
      }
    },
    olympians: {
      title: 'SEPT: Empowering the 12 Olympians',
      subtitle: 'Connecting Industries via Token to Transform Real Economy',
      desc: 'Esports encompasses a vast array of sectors. SEPT facilitates the digital transformation of these 12 industries using blockchain. From traditional agriculture to modern fashion, SEPT provides new digital marketing solutions, breaking barriers between virtual and real to revitalize physical industries.',
      gods: {
        zeus: { name: 'Zeus', industry: 'Esports Industry', desc: 'Wielding data thunderbolts to rule the virtual battlefield, demonstrating absolute dominance in the esports realm.' },
        hera: { name: 'Hera', industry: 'Film & TV Industry', desc: 'Weaving screen myths with a holographic crown, guarding the eternal classics of cinematic art.' },
        athena: { name: 'Athena', industry: 'Education Industry', desc: 'Building a mind map with an AR knowledge crown, leading the technological revolution of wisdom inheritance.' },
        apollo: { name: 'Apollo', industry: 'Music & Festival', desc: 'Resonating global rhythms with a sound-light matrix crown, reshaping the carnival experience of audiovisual feasts.' },
        aphrodite: { name: 'Aphrodite', industry: 'Fashion Industry', desc: 'Weaving future fashion with liquid metal hair, defining the aesthetic laws of the digital age.' },
        ares: { name: 'Ares', industry: 'Sports Industry', desc: 'Analyzing biomechanical data with smart masks, driving technological breakthroughs in extreme performance.' },
        artemis: { name: 'Artemis', industry: 'Digital Tourism', desc: 'Linking virtual and real secrets with a VR navigation hood, guarding the digital exploration of natural heritage.' },
        hermes: { name: 'Hermes', industry: 'Game E-commerce', desc: 'Reconstructing the virtual economy with a winged-hat trading interface, creating a new ecosystem for digital collectibles.' },
        dionysus: { name: 'Dionysus', industry: 'Dining & Entertainment', desc: 'Connecting the global food database with a neon vine crown, upgrading immersive dining and entertainment.' },
        demeter: { name: 'Demeter', industry: 'Green Agriculture', desc: 'Optimizing growth cycles with a photosynthetic simulation hat, practicing the innovative path of sustainable agriculture.' },
        hephaestus: { name: 'Hephaestus', industry: 'Hardware Tech', desc: 'Achieving nanoscale precision with AR engineering goggles, inheriting the technological faith of craftsmanship.' },
        poseidon: { name: 'Poseidon', industry: 'Ocean Eco Industry', desc: 'Guarding the blue realm with a sensor crown, continuing the ecological mission of marine civilization.' },
      }
    },
    features: {
      title: 'SEPT: Core of Value',
      desc: 'The SEPT platform breaks the boundaries of single games. DAO community governance is a key factor in SEPT, empowering every ecosystem member.',
      governance_title: 'Build Your Digital Ecosystem',
      governance_desc: 'DAO is an ecosystem incubator. Here, every individual and enterprise can build their own micro-ecosystem, launch governance proposals, and decide resource allocation, turning influence into economic value.',
      assets_title: 'Digital Transformation of Entities',
      assets_desc: 'SEPT offers a full suite of solutions for transforming physical industries. Enterprises can tokenize brands, services, or products as on-chain assets (NFTs) for global marketing and business loops.',
      treasury_title: 'SEPT Token Economy',
      treasury_desc: 'SEPT is the lifeblood connecting the 12 industries. From payments and governance to incentives, SEPT links all diversified activities, closing the ecological value loop.',
    },
    tokenomics: {
      title: 'SEPT Issuance & Tokenomics',
      subtitle: 'Algorithm-Based Value Consensus System',
      total_supply: 'Total Supply 21,000,000',
      sections: {
        genesis: { 
          title: 'Genesis Issue (Head Mine)', 
          amount: '1,000,000', 
          desc: 'As the genesis certificate for ecosystem startup, early participants enjoy a fixed exchange rate. After sell-out, the value flywheel spins permanently.',
          price: 'Price: 1 USDT / SEPT',
          action: 'Buy Genesis Now' 
        },
        ecosystem: { 
          title: 'Ops & Eco Incentives', 
          amount: '8,000,000', 
          desc: 'Reserved for core team building, marketing, and community activity incentives. Join ecosystem events to win airdrop rewards.',
          price: 'Community Rewards',
          action: 'Enter Lucky Draw' 
        },
        industries: { 
          title: '12 Industry Matrix', 
          amount: '12,000,000', 
          desc: 'Precisely allocated to the 12 Olympian industry sectors (1M/sector) as underlying liquidity and value anchors.',
          price: 'Industry Power',
          action: 'View Distribution' 
        }
      },
      bancor: {
        title: 'Bancor Dynamic Value Protocol',
        desc: 'Once the 1M Genesis Head Mine is distributed, the system automatically activates the Bancor algorithm. The price of SEPT will no longer be fixed but mathematically coupled to the total held volume (connector balance). As holding volume increases, asset value grows exponentially according to the preset curve. This is not just a token, but digital gold that appreciates with consensus scale.'
      }
    },
    showcase: {
      title: 'Join the SEPT Ecosystem',
      title_highlight: 'Create Infinite Value',
      desc: 'SEPT is not just currency, it is the key to opening the digital world. Participate in DAO governance, create assets, and enjoy ecological dividends.',
      list1: 'Use SEPT to join ecosystem activities',
      list2: 'Issue and trade enterprise/personal assets',
      list3: 'DAO Proposal Rights: Shape the future',
      btn: 'Browse Marketplace',
    },
    dashboard: {
      title: 'SEPT Console',
      overview: 'Market Overview',
      governance: 'Gov Voting',
      assets: 'Digital Vault',
      connected: 'Online: User_01',
      tvl: 'Eco Total Value (TVL)',
      active_members: 'Active Nodes',
      issued_assets: 'Circulating Assets',
      chart_title: 'SEPT/USDT Real-time',
      recent_proposals: 'Core Governance Proposals',
      trending_assets: 'Top Movers',
      trade: 'Swap Now',
      view_all: 'Full List',
      go_market: 'Deep Market',
      view_details: 'Details',
      active: 'Active',
      passed: 'Passed',
      votes_for: 'For',
      votes_against: 'Against',
    }
  }
};
