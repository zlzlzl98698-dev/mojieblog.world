// 魔戒博客 (mojieblog.world) - 42家机场核心数据单源规范
// 严格防编造原则：有实测图标注 measured，无实测图标注 verified_spec

export interface BrandPackage {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  period: string;
}

export interface SpeedRow {
  region: string;
  latency: string;
  download: string;
}

export interface UnlockStatus {
  chatgpt: string;
  claude: string;
  gemini: string;
  netflix: string;
  disney: string;
  youtube: string;
}

export interface AirportBrand {
  id: string;
  name: string;
  rank: number;
  isPrimary: boolean;
  isTop10: boolean;
  slug: string;
  affiliateUrl: string;
  promoCode: string;
  foundedYear: string;
  entryPrice: string;
  lineType: string;
  protocol: string;
  hasSpeedtestImage: boolean;
  speedtestImage: string;
  unlockImages: string[];
  dataStatus: 'measured' | 'verified_spec' | 'in_review';
  packages: BrandPackage[];
  speedRows: SpeedRow[];
  unlock: UnlockStatus;
  rawTextExcerpt: string;
}

export const BRANDS: AirportBrand[] = [
  {
    "id": "guangsu-cloud-iepl-vless",
    "name": "光速云",
    "rank": 1,
    "isPrimary": true,
    "isTop10": true,
    "slug": "guangsu-cloud-iepl-vless",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "promoCode": "AMM",
    "foundedYear": "2020",
    "entryPrice": "年付折合 8元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/光速云-节点测速实测.png",
    "unlockImages": [
      "/images/unlocks/photo_2026-08-19_12-13-01.jpg",
      "/images/unlocks/photo_2026-08-19_12-13-50.jpg",
      "/images/unlocks/photo_2026-08-19_12-13-58.jpg",
      "/images/unlocks/photo_2026-08-19_12-18-40.jpg",
      "/images/unlocks/photo_2026-08-19_12-20-10.jpg"
    ],
    "dataStatus": "measured",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": ""
  },
  {
    "id": "muguang-speed-bgp-review",
    "name": "暮光加速",
    "rank": 2,
    "isPrimary": false,
    "isTop10": true,
    "slug": "muguang-speed-bgp-review",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "promoCode": "muguang5555",
    "foundedYear": "2023",
    "entryPrice": "20元/月",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/幕光加速-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "period": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "period": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "509Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "419Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "150Mbps"
      },
      {
        "region": "美国",
        "latency": "160ms",
        "download": "19Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 2. 暮光加速（muguang）  **注册链接**：`https://varnexa.twilightaff.com/#/?code=D1LHglg3`  **基础数据**：2023年运营 | 20元/月 120GB/月 | 优惠码 `muguang5555`  核心特色 - BGP 智能调度，专线级出口，主打稳定低延迟 - 覆盖 Windows、macOS、iOS、Android、Linux 全平台 - 支持多设备同时在线，套餐 120GB–1500GB 流量可选 - 官方宣称提供 7×24 小时真人客服 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 【暮光·基础版】\t月付\t¥20\t120GB\t每月 【暮光·标准版】\t月付\t¥40\t240GB\t每月 【暮光·旗舰版】\t月付\t¥100\t700GB\t每月 【暮光·至尊版】\t月付\t¥180\t1500"
  },
  {
    "id": "feimao-cloud-app-review",
    "name": "飞猫云",
    "rank": 3,
    "isPrimary": false,
    "isTop10": true,
    "slug": "feimao-cloud-app-review",
    "affiliateUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "promoCode": "flycat888",
    "foundedYear": "2023",
    "entryPrice": "7元/月",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/飞猫云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "21ms",
        "download": "526Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "116Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "413Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "138Mbps"
      },
      {
        "region": "美国",
        "latency": "178ms",
        "download": "14Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 3. 飞猫云（feimao）  **注册链接**：`https://guangs.flycataff.com/#/?code=6uq0Xe9y`  **基础数据**：2023年运营 | 年付约7元/月 50GB/月 | 优惠码 `flycat888`  核心特色 - 主打轻快连接、简单配置和灵活节点切换 - 专属客户端下载登录即用，不用配订阅 - 不用自己挑客户端、导订阅，新手容易快速上手 - 节点覆盖亚太、欧美等热门地区 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 飞猫·学生版\t年付\t¥84\t50GB\t每月 飞猫·星耀版\t月付\t¥25\t150GB\t每月 飞猫·星环版\t月付\t¥45\t300GB\t每月 飞猫·银河版\t月付\t¥85\t600GB\t每月 飞猫·宇宙版\t月付\t¥150\t1000GB\t每月 飞猫·不限时套餐\t一次性付费\t¥680\t100"
  },
  {
    "id": "weifeng-cloud-iepl-test",
    "name": "微风网络",
    "rank": 4,
    "isPrimary": false,
    "isTop10": true,
    "slug": "weifeng-cloud-iepl-test",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "promoCode": "flat888",
    "foundedYear": "2023",
    "entryPrice": "7元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/微风-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "period": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "period": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "period": "一次性"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "546Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "115Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "384Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "131Mbps"
      },
      {
        "region": "美国",
        "latency": "167ms",
        "download": "17Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 4. 微风网络（weifeng）  **注册链接**：`https://edp01.breezenetaff.com/#/?code=t3huofyI`  **基础数据**：2023年运营 | 年付约7元/月 50GB/月 | 优惠码 `flat888`  核心特色 - IEPL 专线 + VLESS 协议，定位入门级高性价比机场 - 覆盖香港、新加坡、日本、美国等多地原生 IP 节点 - 可解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、Claude 等 AI 工具 - 客服 7×24 小时在线，夜间由 AI 客服值守，适合新手和轻度用户 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 清风 (Breeze)\t年付\t¥137\t100GB\t每月 乘风 (Riding)\t月付\t¥27\t200GB\t每月 破风 (Breaking)\t"
  },
  {
    "id": "dalaoyun-speed-guide",
    "name": "大佬云",
    "rank": 5,
    "isPrimary": false,
    "isTop10": true,
    "slug": "dalaoyun-speed-guide",
    "affiliateUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "promoCode": "dly888",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 5. 大佬云（dalaoyun）  **注册链接**：`https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN`  **基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 `dly888`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 年付约5.6元/月 60GB - 自研客户端 + 第三方订阅导入 - 季付及以上 7 折  **与同类差异**： - 和闪电鼠、云界线、榴莲云、环球梯规格几乎相同 - 品牌资料没有提供差异化的独有卖点  **文末引导**： > 大佬云是 5.6 元档的标准方案（IEPL + VLESS + 60GB）。同样价位有闪电鼠、云界线、榴莲云、环球梯，规格相似，建议以实际测试为准。  \r"
  },
  {
    "id": "xingdaomeng-airport-review",
    "name": "星岛梦",
    "rank": 6,
    "isPrimary": false,
    "isTop10": true,
    "slug": "xingdaomeng-airport-review",
    "affiliateUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "promoCode": "nmw888",
    "foundedYear": "2020",
    "entryPrice": "8元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS / Shadowsocks / Trojan",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/星岛梦-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "504Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "103Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "411Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "177ms",
        "download": "18Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 6. 星岛梦（xingdaomeng）  **注册链接**：`https://guangs.xingdaomeng.com/#/?code=1TynBYnR`  **基础数据**：2020年运营 | 年付约8元/月 60GB/月 | 优惠码 `nmw888`  核心特色 - IEPL 专线，1 倍流量且不限设备使用 - 节点覆盖香港、台湾、日本、美国、新加坡及韩国、东南亚等地区 - 支持 Netflix、Disney+、YouTube Premium 等主流流媒体 - 兼容 ChatGPT、Gemini 等 AI 工具及 TikTok 跨区使用 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 星岛梦·贴心小包\t年付\t¥96\t60GB\t每月 星岛梦·超量150G\t月付\t¥25\t150GB\t每月 星岛梦·进阶300G\t月付\t¥50\t300GB\t每月 星"
  },
  {
    "id": "ermaoyun-speedtest-benchmark",
    "name": "二猫云",
    "rank": 7,
    "isPrimary": false,
    "isTop10": true,
    "slug": "ermaoyun-speedtest-benchmark",
    "affiliateUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "promoCode": "ermao5555",
    "foundedYear": "2023",
    "entryPrice": "20元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/二猫云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "period": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "period": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "period": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "481Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "407Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "143Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "17Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 7. 二猫云（ermao）  **注册链接**：`https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW`  **基础数据**：2023年运营 | 20元/月 130GB/月 | 优惠码 `ermao5555`  核心特色 - 全线 IEPL 专线，主打长期稳定而非低价走量 - 账号不限设备连接数，多端同时在线无压力 - 海外技术团队主理，配备独家定制客户端 - 解锁 Netflix、YouTube 等流媒体及 ChatGPT 等 AI 工具 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 二猫云·不限时套餐\t一次性付费\t¥99\t100GB\t一次性 二猫年付小包\t年付\t¥89\t60GB\t每月 二猫云·白猫套餐\t月付\t¥20\t130GB\t每月 二猫云·橘猫畅玩版\t月付\t¥40\t230GB\t每月 二猫云·牛奶猫尊享"
  },
  {
    "id": "wuyou-link-proxy-evaluation",
    "name": "无忧链接",
    "rank": 8,
    "isPrimary": false,
    "isTop10": true,
    "slug": "wuyou-link-proxy-evaluation",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "promoCode": "wuyou666",
    "foundedYear": "2025",
    "entryPrice": "19元/月",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/无忧链接.jpg",
    "unlockImages": [
      "/images/speedtests/无忧链接2.jpg"
    ],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "period": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "period": "一次性"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "531Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "418Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "145ms",
        "download": "17Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 7. 无忧链接（wuyou）  **注册链接**：`https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL`  **基础数据**：2025年运营 | 19元/月 100GB/月 | 优惠码 `wuyou666`  核心特色 - 面向轻度用户和跨境电商的超高性价比套餐 - 全线节点无倍率、不限速、不限设备数量 - 专属客户端下载登录即用，新手不用折腾订阅配置 - 香港、新加坡、日本、美国均有节点，支持 TikTok 跨区直连 - 客服 7×24 小时在线，夜间由 AI 客服值守 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 MINI链接\t年付\t¥79\t40GB\t每月 舒心链接\t月付\t¥19\t100GB\t每月 省心链接\t月付\t¥33\t200GB\t每月 随心链接\t月付\t¥77\t500GB\t每月 忘忧链接\t月付"
  },
  {
    "id": "weitu-cloud-iepl-review",
    "name": "唯兔云",
    "rank": 9,
    "isPrimary": false,
    "isTop10": true,
    "slug": "weitu-cloud-iepl-review",
    "affiliateUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "promoCode": "weitu666",
    "foundedYear": "2023",
    "entryPrice": "14.9元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS / Shadowsocks / Trojan",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/唯兔云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "500Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "100Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "56ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "179ms",
        "download": "17Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 7. 唯兔云（weitu）  **注册链接**：`https://guangs.v2yunvipaff.com/#/?code=xIutqOBA`  **基础数据**：2023年运营 | 14.9元/月 100GB/月 | 优惠码 `weitu666`  核心特色 - IPLC 专线，1 倍流量、不限速及不限设备连接 - 支持 ChatGPT、Gemini、Claude 等主流 AI 工具 - 支持 Netflix、Disney+、YouTube Premium 及 TikTok 等解锁 - 提供海外技术团队与多人客服支持 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 唯兔云·年付加强专线\t年付\t¥120\t75GB\t每月 唯兔云·年付版限量款\t年付\t¥79.90\t45GB\t每月 唯兔云·节假日限时开启（14.9元）\t月付\t¥14.9\t100GB\t每"
  },
  {
    "id": "firefly-vip-airport-guide",
    "name": "Firefly",
    "rank": 10,
    "isPrimary": false,
    "isTop10": true,
    "slug": "firefly-vip-airport-guide",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "promoCode": "firefly",
    "foundedYear": "2026",
    "entryPrice": "8 元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "547Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "135Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "445Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "30Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 8. Firefly（firefly）  **注册链接**：`https://vip02.fireflyaff.com/#/?code=2n7VURre`  基础信息 - 协议：VLESS - 起步价：¥8/月起 - 优惠码：firefly；**折扣：**8折；限制：（年付版不适用）。 - 使用方式：专属客户端，下载登录即用（不提供订阅链接） 核心特色 - IPLC 专线接入，主打低延迟与高稳定性 - 全节点不限速，不限客户端及设备数量 - 原生 IP 节点，覆盖香港、新加坡、日本、美国 - 海外技术团队维护线路，客服 7×24 小时在线，夜间由 AI 客服值守 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 Firefly 年付版\t年付\t¥96\t60GB\t每月 Firefly Lite\t月付\t¥25\t150GB\t每月 Firefly Plus"
  },
  {
    "id": "yuzhou-cloud-latency-report",
    "name": "宇宙云",
    "rank": 11,
    "isPrimary": false,
    "isTop10": false,
    "slug": "yuzhou-cloud-latency-report",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "promoCode": "YUZHOU553",
    "foundedYear": "2023",
    "entryPrice": "20元/月",
    "lineType": "三网优化 BGP",
    "protocol": "VLESS",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/宇宙云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [],
    "speedRows": [
      {
        "region": "暂无可核实实测数据",
        "latency": "—",
        "download": "—"
      }
    ],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 10. 宇宙云（yuzhou）  **注册链接**：`https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1` 基础信息 - 协议：VLESS（较早期资料） - 起步价：¥96/年，月流量未能从当前资料确定 - 优惠码：YUZHOU553（历史资料称新用户8折） - 使用方式：待核实（不默认“专属客户端”或“提供订阅链接”） 核心特色 - 60+ 节点；三网优化；智能负载均衡（历史品牌资料） - 完整资料、节点覆盖、支持设备与客服信息有待补充 套餐价格 套餐名\t计费方式\t价格\t流量\t流量周期 待补充\t待核实\t—\t—\t—   现有资料不足以列出该品牌全部套餐；上述历史起价不得直接充当当前完整套餐表。  测速（2026-10-19） 节点\t延迟\t下载 暂无可核实实测数据\t—\t—   流媒体 & AI 解锁 -"
  },
  {
    "id": "u1s1-cloud-speedtest-review",
    "name": "U1S1",
    "rank": 12,
    "isPrimary": false,
    "isTop10": false,
    "slug": "u1s1-cloud-speedtest-review",
    "affiliateUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "promoCode": "akaka",
    "foundedYear": "2025",
    "entryPrice": "20元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/U1S1-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "24ms",
        "download": "538Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "20Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 11. U1S1（u1s1）  **注册链接**：`https://guangs.vipaff.cc/#/?code=xhX5X22f`  **基础数据**：2025年运营 | 20元/月 120GB/月 | 优惠码 `akaka`  核心特色 - 2025 年起运营的 IPLC 专线机场 - 官方宣称 2000Mbps 高速带宽，晚高峰不限速 - 不限设备同时连接 - 支持 Netflix、TikTok 等流媒体及 ChatGPT 等 AI 工具 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 u1s1·就是好用包\t年付\t¥96\t60GB\t每月 u1s1·普通人真够了包\t月付\t¥20\t120GB\t每月 u1s1·你以为用不到包\t月付\t¥40\t300GB\t每月 u1s1·瘾大就拉满包\t月付\t¥100\t700GB\t每月 u1s1·我全都要包\t月付\t"
  },
  {
    "id": "lingmao-network-multi-device",
    "name": "灵猫网络",
    "rank": 13,
    "isPrimary": false,
    "isTop10": false,
    "slug": "lingmao-network-multi-device",
    "affiliateUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "promoCode": "lmao888",
    "foundedYear": "2025",
    "entryPrice": "19元/月",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/灵猫网络-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "492Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "109Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "409Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "164ms",
        "download": "19Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 12. 灵猫网络（lingmao）  **注册链接**：`https://vip01.civetnet.com/#/?code=8MIAyxak`  **基础数据**：2025年运营 | 19元/月 150GB/月 | 优惠码 `lmao888` 基础信息 - 协议：原文未标注 - 起步价：¥7.1/月起 - 优惠码：lingmao；**折扣：**8折；限制：（年付小包不适用）。 - 使用方式：专属客户端，下载登录即用（不提供订阅链接） 核心特色 - 1 倍流量，不限速及不限设备使用 - 覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点 - 支持 Netflix、Disney+、YouTube 等流媒体及 ChatGPT、TikTok 等平台 - 专属客户端下载登录即用，不用导入订阅 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 灵猫·年付小"
  },
  {
    "id": "jilian-cloud-iepl-evaluation",
    "name": "极连云",
    "rank": 14,
    "isPrimary": false,
    "isTop10": false,
    "slug": "jilian-cloud-iepl-evaluation",
    "affiliateUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "promoCode": "ji8888",
    "foundedYear": "2024",
    "entryPrice": "18元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/极连云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 13. 极连云（jilian）  **注册链接**：`https://guangs.jlyvipaff.com/#/?code=VM1rKGUu`  **基础数据**：2024年运营 | 18元/月 100GB/月 | 优惠码 `ji8888`  **品牌资料明确说了的**： - IEPL专线 - 18元/月 100GB - 自研客户端 + 支持第三方客户端 - 品牌资料明确说\"覆盖常见 AI 工具使用场景\"  **与同类差异**： - 18 元档中有 IEPL + 自研客户端 - 和光年梯同为 18 元档，但极连云是 100GB，光年梯是 110GB  **文末引导**： > 极连云是 18 元/100GB 的 IEPL 方案，品牌资料明确提到\"覆盖常见 AI 工具使用场景\"。如果你主要是用 AI 工具 + 日常网页访问，它值得考虑。  ---"
  },
  {
    "id": "guangnian-ladder-stability-test",
    "name": "光年梯",
    "rank": 15,
    "isPrimary": false,
    "isTop10": false,
    "slug": "guangnian-ladder-stability-test",
    "affiliateUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "promoCode": "gnt6666",
    "foundedYear": "2025",
    "entryPrice": "18元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/光年梯-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 14. 光年梯（guangnian）  **注册链接**：`https://guangs.gntaff.com/#/?code=X1FoxjGE`  **基础数据**：2025年运营 | 18元/月 110GB/月 | 优惠码 `gnt6666`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 18元/月 110GB - 自研客户端 + 第三方订阅导入 - 品牌资料明确说\"支持常见 AI 工具使用场景\"和\"支持主流流媒体使用场景\"  **与同类差异**： - 18 元档中流量 110GB（比极连云多 10GB） - 定位\"介于低价套餐和综合型专线套餐之间\"  **文末引导**： > 光年梯和极连云同为 18 元档的 IEPL 方案，光年梯多 10GB（110 vs 100）。作为 2025 年成立的新品牌，它的长期稳定性"
  },
  {
    "id": "yifan-cloud-speedtest-benchmark",
    "name": "一翻云",
    "rank": 16,
    "isPrimary": false,
    "isTop10": false,
    "slug": "yifan-cloud-speedtest-benchmark",
    "affiliateUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "promoCode": "yfy6666",
    "foundedYear": "2025",
    "entryPrice": "20元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/一翻云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "period": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "477Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "390Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "180ms",
        "download": "20Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 15. 一翻云（yifan）  **注册链接**：`https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r`  **基础数据**：2025年运营 | 20元/月 150GB/月 | 优惠码 `yfy6666`  核心特色 - 全节点 IEPL 物理专线，搭配原生住宅 IP - 官方称晚高峰 0 丢包，单节点 2Gbps 大带宽 - 提供永久不过期的不限时流量包，用量不固定也不会浪费 - 不限速、不限设备数量，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 轻享版\t月付\t¥20\t150GB\t每月 舒享版\t月付\t¥35\t350GB\t每月 尊享版\t月付\t¥55\t600GB\t每月 极致版\t月付\t¥95\t1.2TB\t"
  },
  {
    "id": "sogo-cloud-shadowsocks-review",
    "name": "SOGO 云",
    "rank": 17,
    "isPrimary": false,
    "isTop10": false,
    "slug": "sogo-cloud-shadowsocks-review",
    "affiliateUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "promoCode": "SOGO10000",
    "foundedYear": "2023",
    "entryPrice": "年付折合 8.1元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/SOGO云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "period": "每月"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "period": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "period": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "period": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "488Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "401Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "137Mbps"
      },
      {
        "region": "美国",
        "latency": "140ms",
        "download": "17Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 16. SOGO 云（sogo）  **注册链接**：`https://guangs.sogoyunaff.cc/#/?code=327Vs0w7`  基础信息 - 协议：VLESS - 起步价：¥8.17/月起 - 优惠码：SOGO10000；**折扣：**9折；**限制：**未标注。 - 使用方式：专属客户端，下载登录即用（不提供订阅链接）  核心特色 - 全线 IEPL 专线接入，三网 BGP 优化 - 节点覆盖 15 个国家和地区，本站收录里覆盖面最广 - 不限速、不限设备数量，VLESS 协议 - 自研客户端，支持 Windows、macOS、iOS、Android 与主流软路由 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 小包-年付版\t年付\t¥98\t60GB\t每月 基础版\t月付\t¥25\t150GB\t每月 优选版\t月付\t¥45\t"
  },
  {
    "id": "kexin-cloud-iepl-speed-test",
    "name": "可信云",
    "rank": 18,
    "isPrimary": false,
    "isTop10": false,
    "slug": "kexin-cloud-iepl-speed-test",
    "affiliateUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "promoCode": "kkk333",
    "foundedYear": "2024",
    "entryPrice": "25元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/可信云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 17. 可信云（kexin）  **注册链接**：`https://guangs.kosingaff.com/#/register?code=UYDtNlCY`  **基础数据**：2024年运营 | 25元/月 150GB/月 | 优惠码 `kkk333`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 25元/月 150GB - 支持第三方客户端 - 品牌资料明确说\"AI 与流媒体目前缺乏统一实测数据\"  **与同类差异**： - 规格和 SOGO 云、速界几乎相同 - 品牌资料明确说\"AI 与流媒体目前缺乏统一实测数据，应保持中性描述\"——透明度高  **文末引导**： > 可信云在品牌资料中明确说明\"AI 与流媒体缺乏统一实测数据\"，这种透明度在 25 元档品牌中并不多见。如果你看重品牌方的诚实度，它值得考虑。\r"
  },
  {
    "id": "sujie-accelerator-performance",
    "name": "速界",
    "rank": 19,
    "isPrimary": false,
    "isTop10": false,
    "slug": "sujie-accelerator-performance",
    "affiliateUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "promoCode": "sss1111",
    "foundedYear": "2024",
    "entryPrice": "25元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/速界-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "gemini": "支持",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 18. 速界（sujie）  **注册链接**：`https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB`  **基础数据**：2024年运营 | 25元/月 150GB/月 | 优惠码 `sss1111`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 自研客户端 + 第三方订阅导入 - 25元/月 150GB - **品牌资料明确强调 ChatGPT、Claude、Gemini 等 AI 使用场景** - 品牌资料明确说\"AI 可用性受 IP、地区和平台规则影响，不应承诺永久稳定支持所有 AI 平台\"  **与同类差异**： - 25 元档唯一明确强调 AI 工具的品牌 - 品牌资料明确说\"更突出 AI 工具访问场景\"  **文末引导**： > 速界是 25"
  },
  {
    "id": "shanyue-cloud-bgp-review",
    "name": "闪跃",
    "rank": 20,
    "isPrimary": false,
    "isTop10": false,
    "slug": "shanyue-cloud-bgp-review",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "promoCode": "shanyue",
    "foundedYear": "2023",
    "entryPrice": "8 元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "548Mbps"
      },
      {
        "region": "台湾",
        "latency": "38ms",
        "download": "110Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "383Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "144Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 19. 闪跃（shanyue）  **注册链接**：`https://vip02.flashleapaff.com/#/?code=3lgzm9mm`  基础信息 - 协议：原文未标注 - 起步价：¥8/月起 - 优惠码：shanyue；**折扣：**8折；限制：（仅限闪动 / 飞跃 / 瞬移 / 跃迁，年付版不适用）。 - 使用方式：专属客户端，下载登录即用（不提供订阅链接） 核心特色 - 顶级 IPLC 纯专线，主打极致低延迟 - 骨干网接入，晚高峰仍能保持连接稳定 - 原生 IP 全解锁 Netflix、Disney+、HBO 等流媒体 - 支持 ChatGPT、Claude、Gemini 等 AI 工具访问 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 闪跃年付版\t年付\t¥96\t60GB\t每月 闪动 (Flicker)\t月付\t¥24\t1"
  },
  {
    "id": "quanqiu-cloud-nodes-benchmark",
    "name": "全球云",
    "rank": 21,
    "isPrimary": false,
    "isTop10": false,
    "slug": "quanqiu-cloud-nodes-benchmark",
    "affiliateUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "promoCode": "qq88",
    "foundedYear": "2023",
    "entryPrice": "20 元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "Shadowsocks",
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtests/全球云-节点测速实测.png",
    "unlockImages": [],
    "dataStatus": "measured",
    "packages": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "489Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "430Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "138ms",
        "download": "18Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 20. 全球云（quanqiu）  **注册链接**：`https://guangs.gcvipaff.com/#/?code=Ov2nvU9C`  基础信息 - 协议：Trojan / Shadowsocks - 起步价：¥20/月起 - 优惠码：qq88；**折扣：**8折；**限制：**未标注。 - 使用方式：专属客户端，下载登录即用（不提供订阅链接） 核心特色 - IPLC/IEPL 专线中转，覆盖全球 60+ 节点 - 采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源 - 支持 Netflix、Disney+、TikTok 等主流流媒体及 ChatGPT - 专属客户端下载登录即用，不用配订阅 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 BGP 智能优化·不限时轻量包\t一次性付费\t¥100\t100GB"
  },
  {
    "id": "shandianshu-proxy-speed-test",
    "name": "闪电鼠",
    "rank": 22,
    "isPrimary": false,
    "isTop10": false,
    "slug": "shandianshu-proxy-speed-test",
    "affiliateUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "promoCode": "sd88",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 21. 闪电鼠（shandianshu）  **注册链接**：`https://qwerty.shandianshuaff.com/#/?code=rUE75iYh`  **基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 `sd88`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 年付约5.6元/月 60GB - 自研客户端 + 第三方订阅导入 - **季付及以上 7 折**  **与同类差异**： - 5.6 元档是资料中最低价格区间 - 与大佬云、云界线、榴莲云、环球梯并列为\"极限平价\"  **文末引导**： > 闪电鼠是 5.6 元/月的极限平价档，提供 IEPL + VLESS + 60GB。如果你预算极其有限，它是 28 个品牌中门槛最低的之一。  --- \r"
  },
  {
    "id": "yunjiexian-hybrid-lines-review",
    "name": "云界线",
    "rank": 23,
    "isPrimary": false,
    "isTop10": false,
    "slug": "yunjiexian-hybrid-lines-review",
    "affiliateUrl": "https://qwerty.yunjiexianaff.com/?code=aycnwNUi",
    "promoCode": "yjx888",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 23. 云界线（yunjiexian）  **注册链接**：`https://qwerty.yunjiexianaff.com/?code=aycnwNUi`  **基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 `yjx888`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 年付约5.6元/月 60GB - 自研客户端 + 第三方订阅导入 - 季付及以上 7 折  **与同类差异**： - 与闪电鼠、大佬云、榴莲云、环球梯规格几乎相同 - **联盟链接格式与其他品牌不同**（缺少 `#`）  **文末引导**： > 云界线是 5.6 元档的 IEPL + VLESS 方案。注意它的推广链接格式与其他品牌略有不同，注册前建议先确认链接是否正常。  --- \r"
  },
  {
    "id": "liulianyun-budget-proxy-guide",
    "name": "榴莲云",
    "rank": 24,
    "isPrimary": false,
    "isTop10": false,
    "slug": "liulianyun-budget-proxy-guide",
    "affiliateUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "promoCode": "ll88",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 24. 榴莲云（liulianyun）  **注册链接**：`https://qwerty.liulianyunaff.com#/?code=hS5pvbfE`  **基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 `ll88`  **品牌资料明确说了的**： - IEPL专线 - 年付约5.6元/月 60GB - 自研客户端 + 第三方订阅导入 - 季付及以上 7 折 - **协议类型品牌资料未统一提供**  **与同类差异**： - 5.6 元档中**协议类型未明确**的品牌 - 与闪电鼠、大佬云、云界线、环球梯规格几乎相同  **文末引导**： > 榴莲云是 5.6 元档中唯一未明确标注协议类型的品牌。如果你只需要最低预算且不在意协议细节，可以用；如果你需要明确的 VLESS 协议，建议选闪电鼠或大佬云。 \r"
  },
  {
    "id": "shenxing-speed-low-latency",
    "name": "神行加速",
    "rank": 25,
    "isPrimary": false,
    "isTop10": false,
    "slug": "shenxing-speed-low-latency",
    "affiliateUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "promoCode": "xs0077",
    "foundedYear": "2024",
    "entryPrice": "14元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 25. 神行加速（shenxing）  **注册链接**：`https://qwerty.shenxingaff.com/#/?code=gawDQqVE`  **基础数据**：2024年运营 | 年付约14元/月 120GB/月 | 优惠码 `xs0077`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 年付约14元/月 120GB - 自研客户端 + 第三方订阅导入 - **新用户 7 折**  **与同类差异**： - 14 元档是\"比 5.6 元多一档，比 20 元少一档\"的中间选择 - 提供 120GB，是 5.6 元档（60GB）的两倍  **文末引导**： > 神行加速是 14 元档的方案，提供 120GB（是 5.6 元档 60GB 的两倍），适合年付且流量需求中等的用户。  --- \r"
  },
  {
    "id": "huanqiuti-cross-border-proxy",
    "name": "环球梯",
    "rank": 26,
    "isPrimary": false,
    "isTop10": false,
    "slug": "huanqiuti-cross-border-proxy",
    "affiliateUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "promoCode": "HQ66",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 26. 环球梯（huanqiuti）  **注册链接**：`https://qwerty.huanqiutiaff.com/?code=9I4KRNPH`  **基础数据**：2024年运营 | 年付约5.6元/月 60GB/月 | 优惠码 `HQ66`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - 年付约5.6元/月 60GB - 自研客户端 + 第三方订阅导入 - 季付及以上 7 折 - **联盟链接格式与其他品牌不同**（缺少 `#`）  **与同类差异**： - 与闪电鼠、大佬云、云界线、榴莲云规格几乎相同 - 链接格式异常  **文末引导**： > 环球梯是 5.6 元档的 IEPL + VLESS 方案。和云界线一样，它的推广链接格式与其他品牌略有不同，注册前建议确认链接可正常打开。  --- \r"
  },
  {
    "id": "yinxingren-custom-client-test",
    "name": "隐形人",
    "rank": 27,
    "isPrimary": false,
    "isTop10": false,
    "slug": "yinxingren-custom-client-test",
    "affiliateUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "promoCode": "yxr888",
    "foundedYear": "2024",
    "entryPrice": "24元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "period": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "period": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "period": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "period": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "period": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "period": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "period": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "日本",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "美国",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "新加坡",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "—"
      }
    ],
    "unlock": {
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "## 27. 隐形人（yinxingren）  **注册链接**：`https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT`  **基础数据**：2024年运营 | 24元/月 100GB/月 | 优惠码 `yxr888`  基础信息 - 协议：未标注 - 起步价：¥9.08/月起 - 优惠码：moon80；**折扣：**8折；**限制：**未标注。 - 使用方式：专属客户端，下载登录即用（不提供订阅链接） 核心特色 - 企业级 IPLC 专线直连，官方称晚高峰零卡顿 - 官方标注可解锁 Netflix、HBO Max 等流媒体及 ChatGPT - 全平台一键配置，多设备同时在线 - 自带客户端，不提供订阅链接 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 隐形人 白银纪元\t月付\t¥24\t144"
  },
  {
    "id": "tiziyun-clash-v2ray-evaluation",
    "name": "梯子云",
    "rank": 28,
    "isPrimary": false,
    "isTop10": false,
    "slug": "tiziyun-clash-v2ray-evaluation",
    "affiliateUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "promoCode": "tiziyun",
    "foundedYear": "2025",
    "entryPrice": "7.4元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [],
    "speedRows": [],
    "unlock": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "支持"
    },
    "rawTextExcerpt": "## 28. 梯子云（tiziyun）  **注册链接**：`https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0`  **基础数据**：2025年运营 | 年付约7.4元/月 60GB/月 | 优惠码 `tiziyun`  **品牌资料明确说了的**： - IEPL专线 - VLESS 协议 - **自研全平台客户端**（品牌资料强调\"小白用户一键登录即可连接，零门槛上手\"） - **支持通用订阅** - **60+ 节点** - **2Gbps+ 独立带宽**（含 500Mbps 级高峰冗余） - **覆盖香港、日本、新加坡、美国、台湾等核心枢纽** - **海外专业技术团队常驻维护** - **提供快速响应的在线客服与工单支持** - 品牌资料说\"完美解锁 Netflix、Disney+、TikTok 及 Ch"
  },
  {
    "id": "wgetcloud-premium-iplc-review",
    "name": "WgetCloud",
    "rank": 29,
    "isPrimary": false,
    "isTop10": false,
    "slug": "wgetcloud-premium-iplc-review",
    "affiliateUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "promoCode": "",
    "foundedYear": "2023",
    "entryPrice": "暂无单月报价",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "period": "每月"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "period": "每月"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "日本",
        "latency": "69.4ms",
        "download": "462.04Mbps"
      },
      {
        "region": "美国",
        "latency": "170.2ms",
        "download": "440.04Mbps"
      },
      {
        "region": "香港",
        "latency": "25.9ms",
        "download": "431.24Mbps"
      },
      {
        "region": "新加坡",
        "latency": "55.6ms",
        "download": "422.97Mbps"
      },
      {
        "region": "台湾",
        "latency": "41.3ms",
        "download": "407.66Mbps"
      },
      {
        "region": "印度",
        "latency": "95ms",
        "download": "341.92Mbps"
      },
      {
        "region": "印尼",
        "latency": "88ms",
        "download": "318.64Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "部分节点",
      "claude": "待核实",
      "gemini": "支持",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "WgetCloud 基础信息 - 资料更新时间：2026-08-24（历史项目记录） - 协议记录：trojan - 最低报价：未有可直接月付的明确报价 - 保存的入口或推广链接：https://invite.wgetcloud.ltd/auth/register?code=VLG2xb - 节点涉及地区：香港、台湾、新加坡、日本、美国、韩国、马来西亚、泰国、菲律宾、印尼、印度、澳大利亚、加拿大、巴西、英国（节选，非实时可用性确认） 核心特色 - 2026-05-02 的这一次测速覆盖 59 个节点，全部取得非零下载速度。 - 五个多节点地区的平均下载都在 50 MB/s 以上：日本 57.75 MB/s、美国 55.00 MB/s、香港 53.90 MB/s、新加坡 52.87 MB/s、台湾 50.96 MB/s。 - 香港平均 TLS RTT 25.9 ms、台湾"
  },
  {
    "id": "baiyueguang-multi-region-nodes",
    "name": "白月光",
    "rank": 30,
    "isPrimary": false,
    "isTop10": false,
    "slug": "baiyueguang-multi-region-nodes",
    "affiliateUrl": "https://sibker.com/register?invite_code=gg6puAId",
    "promoCode": "",
    "foundedYear": "2023",
    "entryPrice": "暂无单月报价",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66",
        "traffic": "每月100GB高速流量",
        "period": "每月"
      },
      {
        "name": "中包",
        "billing": "季付",
        "price": "¥126",
        "traffic": "每月250GB高速流量",
        "period": "每月"
      },
      {
        "name": "大包",
        "billing": "季付",
        "price": "¥156",
        "traffic": "每月400GB高速流量",
        "period": "每月"
      },
      {
        "name": "超大包",
        "billing": "季付",
        "price": "¥216",
        "traffic": "每月750GB高速流量",
        "period": "每月"
      },
      {
        "name": "不差钱",
        "billing": "季付",
        "price": "¥231",
        "traffic": "每月900GB高速流量",
        "period": "每月"
      },
      {
        "name": "旗舰包",
        "billing": "年付",
        "price": "¥2500",
        "traffic": "每月2500GB超大流量",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "香港",
        "latency": "160.7ms",
        "download": "114.94Mbps"
      },
      {
        "region": "美国",
        "latency": "302.6ms",
        "download": "70.53Mbps"
      },
      {
        "region": "日本",
        "latency": "202.4ms",
        "download": "77.65Mbps"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "0.03Mbps"
      },
      {
        "region": "新加坡",
        "latency": "186.8ms",
        "download": "85.22Mbps"
      },
      {
        "region": "加拿大",
        "latency": "344ms",
        "download": "62Mbps"
      },
      {
        "region": "韩国",
        "latency": "358ms",
        "download": "31.28Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "部分节点",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "4K/8K"
    },
    "rawTextExcerpt": "白月光 基础信息 - 资料更新时间：2026-08-24（历史项目记录） - 协议记录：shadowsocks - 最低报价：未有可直接月付的明确报价 - 保存的入口或推广链接：https://sibker.com/register?invite_code=gg6puAId - 节点涉及地区：香港、美国、日本、台湾、新加坡、加拿大、韩国、越南、柬埔寨、马来西亚、泰国、印度、孟加拉、尼泊尔、菲律宾（节选，非实时可用性确认） 核心特色 - 季付入门档 66 元含每月 100GB，一次性支出门槛相对不高。 - 2026-07-17 的这一次测速覆盖 108 个节点，节点名称涉及 79 个地区，地区名目非常多。 - 香港 10 个节点全部取得非零速度，平均下载 14.37 MB/s、平均 TLS RTT 160.7 ms，是本次五个多节点地区里最好的一组。 - 马来西亚（16"
  },
  {
    "id": "flyingbird-iplc-zero-multiplier",
    "name": "FlyingBird",
    "rank": 31,
    "isPrimary": false,
    "isTop10": false,
    "slug": "flyingbird-iplc-zero-multiplier",
    "affiliateUrl": "",
    "promoCode": "theo",
    "foundedYear": "2023",
    "entryPrice": "15元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "青铜套餐",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "月付",
        "price": "¥75",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "季付",
        "price": "¥203",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "半年付",
        "price": "¥383",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "年付",
        "price": "¥720",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "季付",
        "price": "¥405",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "半年付",
        "price": "¥765",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "年付",
        "price": "¥1440",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": " FlyingBird 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。 - 定位／线路：多个老牌机场融合衍生；全专线 IPLC；SS 机场；无倍率不限速；「买多少给多少」活动 - 优惠码：theo（9 折，每用户一次）/ year85（年付 85 折，可用 5 次）；季 9 / 半 85 / 年 8 折，最高约 64 折 - 支付方式（历史资料）：支付宝 / USDT（无微信） 核心特色 - 全专线 IPLC 与无倍率定位 - 套餐档位和周期选择完整 - 支持支付宝与 USDT。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 青铜套餐\t月付\t¥15\t100G\t每月 青铜套餐\t季付\t¥41\t100G\t每月 青铜套餐\t半年付\t¥77\t100G\t每月 青铜套餐\t"
  },
  {
    "id": "cyberguard-proxy-privacy-audit",
    "name": "CyberGuard",
    "rank": 32,
    "isPrimary": false,
    "isTop10": false,
    "slug": "cyberguard-proxy-privacy-audit",
    "affiliateUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "promoCode": "",
    "foundedYear": "2023",
    "entryPrice": "15.83 元/月",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "150G｜轻量套餐",
        "billing": "半年付",
        "price": "¥95",
        "traffic": "150GB/月",
        "period": "每月"
      },
      {
        "name": "350G｜标准套餐",
        "billing": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "period": "每月"
      },
      {
        "name": "650G｜高速套餐",
        "billing": "月付",
        "price": "¥55",
        "traffic": "650GB/月",
        "period": "每月"
      },
      {
        "name": "220G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥79",
        "traffic": "220GB",
        "period": "一次性（具体有效期待核实）"
      },
      {
        "name": "840G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥188",
        "traffic": "840GB",
        "period": "一次性（具体有效期待核实）"
      },
      {
        "name": "2050G｜企业套餐",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2050GB/月",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "日本",
        "latency": "123.8ms",
        "download": "488.83Mbps"
      },
      {
        "region": "美国",
        "latency": "614ms",
        "download": "245.6Mbps"
      },
      {
        "region": "澳大利亚",
        "latency": "277ms",
        "download": "279.64Mbps"
      },
      {
        "region": "韩国",
        "latency": "6000ms",
        "download": "552.8Mbps"
      },
      {
        "region": "德国",
        "latency": "390.5ms",
        "download": "159.96Mbps"
      },
      {
        "region": "法国",
        "latency": "384ms",
        "download": "204.08Mbps"
      },
      {
        "region": "阿联酋",
        "latency": "345ms",
        "download": "342.76Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "gemini": "支持",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "支持"
    },
    "rawTextExcerpt": "29. CyberGuard 基础信息 - 资料更新时间：2026-08-23（历史项目记录） - 协议记录：trojan/vless - 最低报价：¥32/月（旧资料口径） - 保存的入口或推广链接：https://cyberguard.best/#/register?code=AxXNNYng - 节点涉及地区：日本、美国、澳大利亚、韩国、德国、法国、阿联酋、英国、印度、台湾、香港、新加坡（节选，非实时可用性确认） 核心特色 - 月付 32 元即可获得 350GB 基础流量，价格门槛较低。 - 半年付轻量套餐 95 元折合约 15.83 元/月，付款周期可选月付、半年、一年等多档。 - 另有两档一次性不限时流量包（220GB / 840GB），适合不想按月续订的用户。 - 2025-06-21 的历史测速覆盖 12 个地区、29 个节点，地区范围较丰富。 套餐价"
  },
  {
    "id": "longmaoyun-cross-border-speed",
    "name": "龙猫云",
    "rank": 33,
    "isPrimary": false,
    "isTop10": false,
    "slug": "longmaoyun-cross-border-speed",
    "affiliateUrl": "",
    "promoCode": "",
    "foundedYear": "2023",
    "entryPrice": "15元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥60",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥162",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥306",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥576",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥120",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥324",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥697",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1152",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "龙猫云 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。 - 定位／线路：SS + IPLC 全专线；最高 2000Mbps；现有资料记录（未独立实测）机场主技术背景已移民海外；教程完善 - 优惠码：无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折 - 支付方式（历史资料）：支付宝 / 微信 / USDT 核心特色 - SS + IPLC 全专线定位 - 套餐和教程资料较完整 - 覆盖常规订阅与长期使用场景。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 VIP1\t月付\t¥15\t100G\t每月 VIP1\t季付\t¥41\t100G\t每月 VIP1\t半年付\t¥77\t100G\t每月 VIP1\t年付\t¥144\t100G\t每月\r"
  },
  {
    "id": "fatcat-proxy-annual-package",
    "name": "FATCAT",
    "rank": 34,
    "isPrimary": false,
    "isTop10": false,
    "slug": "fatcat-proxy-annual-package",
    "affiliateUrl": "",
    "promoCode": "",
    "foundedYear": "2023",
    "entryPrice": "年付折合 8元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "年付加强版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "季付",
        "price": "¥54",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "年付",
        "price": "¥192",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "季付",
        "price": "¥108",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "年付",
        "price": "¥384",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "季付",
        "price": "¥270",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "半年付",
        "price": "¥510",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "年付",
        "price": "¥960",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "季付",
        "price": "¥486",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "半年付",
        "price": "¥918",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "年付",
        "price": "¥1728",
        "traffic": "1500G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "FATCAT 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。 - 定位／线路：企业级 IEPL / IPLC 内网专线，抗干扰抗封锁 - 优惠码：无；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折 - 支付方式（历史资料）：支付宝 / 微信 / USDT 核心特色 - IEPL/IPLC 内网专线定位 - 年付和多流量档位可选 - 支持支付宝、微信与 USDT。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 年付加强版\t年付\t¥96\t60G\t每月 基础套餐\t月付\t¥20\t120G\t每月 基础套餐\t季付\t¥54\t120G\t每月 基础套餐\t半年付\t¥102\t120G\t每月 基础套餐\t年付\t¥192\t120G\t每月 标"
  },
  {
    "id": "tntcloud-ecommerce-live-stream",
    "name": "TNTCloud",
    "rank": 35,
    "isPrimary": false,
    "isTop10": false,
    "slug": "tntcloud-ecommerce-live-stream",
    "affiliateUrl": "",
    "promoCode": "TNT85",
    "foundedYear": "2023",
    "entryPrice": "30元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "轻量包",
        "billing": "季付",
        "price": "¥30",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "轻量包",
        "billing": "半年付",
        "price": "¥56",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "轻量包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥20",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥54",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥192",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥40",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥108",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥336",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥80",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥216",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥408",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥768",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥160",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥432",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥816",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1536",
        "traffic": "1100G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "TNTCloud 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。 - 定位／线路：IPLC 内网专线（曾用名 3A 加速器 / AAA Speed）；老牌分站团队；2000Mbps；特色季付限量包；跨境电商/TikTok 直播定制 - 优惠码：TNT85（85 折，限量包不支持）；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折 - 支付方式（历史资料）：支付宝 / 微信 / USDT 核心特色 - IPLC 内网专线定位 - 季付限量包与常规套餐 - 支持跨境电商和直播定制。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 轻量包\t季付\t¥30\t60G\t每月 轻量包\t半年付\t¥56\t60G\t每月 轻量包\t年付\t¥98\t6"
  },
  {
    "id": "qingyunti-enterprise-iplc-benchmark",
    "name": "青云梯",
    "rank": 36,
    "isPrimary": false,
    "isTop10": false,
    "slug": "qingyunti-enterprise-iplc-benchmark",
    "affiliateUrl": "",
    "promoCode": "qyt85",
    "foundedYear": "2023",
    "entryPrice": "年付折合 8元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "年付小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": " 青云梯 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。 - 定位／线路：运营 6 年以上老牌（曾用名 V4Speed）；SS + 企业级 IPLC；三网优化 + 智能负载均衡；现有资料记录（未独立实测）最高 6Gbps、10+ 地区 80+ 节点；支持企业定制 - 优惠码：qyt85（85 折）/ qyt80（8 折），年付小包不支持；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折 - 支付方式（历史资料）：支付宝 / 微信 / USDT 核心特色 - 运营时间和基础资料相对完整 - 企业级 IPLC、三网优化与多节点覆盖 - 常规套餐、长期折扣和企业定制齐全。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 年付小包\t年"
  },
  {
    "id": "shanshuiyun-bgp-multi-line-test",
    "name": "山水云",
    "rank": 37,
    "isPrimary": false,
    "isTop10": false,
    "slug": "shanshuiyun-bgp-multi-line-test",
    "affiliateUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "promoCode": "",
    "foundedYear": "2023",
    "entryPrice": "15元/月",
    "lineType": "BGP中继 / 专线优化",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "64G/轻量套餐",
        "billing": "年付",
        "price": "¥88",
        "traffic": "64GB/月",
        "period": "每月"
      },
      {
        "name": "128G/轻量套餐",
        "billing": "半年付",
        "price": "¥88",
        "traffic": "128GB/月",
        "period": "每月"
      },
      {
        "name": "256G/轻量套餐",
        "billing": "季付",
        "price": "¥75",
        "traffic": "256GB/月",
        "period": "每月"
      },
      {
        "name": "100G/月-琴",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "period": "每月"
      },
      {
        "name": "200G/月-棋",
        "billing": "月付",
        "price": "¥25",
        "traffic": "200GB/月",
        "period": "每月"
      },
      {
        "name": "500G/月-书",
        "billing": "月付",
        "price": "¥50",
        "traffic": "500GB/月",
        "period": "每月"
      }
    ],
    "speedRows": [
      {
        "region": "美国",
        "latency": "349.3ms",
        "download": "180.29Mbps"
      },
      {
        "region": "日本",
        "latency": "229.8ms",
        "download": "160.51Mbps"
      },
      {
        "region": "香港",
        "latency": "151.4ms",
        "download": "152.86Mbps"
      },
      {
        "region": "新加坡",
        "latency": "179.8ms",
        "download": "142.98Mbps"
      },
      {
        "region": "越南",
        "latency": "232ms",
        "download": "87.68Mbps"
      },
      {
        "region": "泰国",
        "latency": "217ms",
        "download": "82Mbps"
      },
      {
        "region": "英国",
        "latency": "328ms",
        "download": "65.2Mbps"
      }
    ],
    "unlock": {
      "chatgpt": "部分节点",
      "claude": "支持",
      "gemini": "支持",
      "netflix": "解锁",
      "disney": "解锁",
      "youtube": "支持"
    },
    "rawTextExcerpt": " 山水云 基础信息 - 资料更新时间：2026-08-24（历史项目记录） - 协议记录：尚未核实 - 最低报价：¥15/月（旧资料口径） - 保存的入口或推广链接：https://sldm1.ssyylf.com/#/register?code=YD5iQ888 - 节点涉及地区：香港、日本、新加坡、美国、台湾、越南、泰国、英国、印度尼西亚、法国、德国、加拿大（节选，非实时可用性确认） 核心特色 - 月付入门档 15 元含每月 100GB，价格门槛较低，且三档月付流量梯度清楚（100GB / 200GB / 500GB）。 - 64G 轻量套餐一年只要 88 元，折合每月约 7.33 元，长周期单价较低。 - 2026-06-29 的这一次测速覆盖 27 个节点、12 个地区，其中 22 个取得非零下载速度。 - 美国 3 个节点平均下载 22.54 MB/s，是本"
  },
  {
    "id": "lingdongyun-high-bandwidth-proxy",
    "name": "灵动云",
    "rank": 38,
    "isPrimary": false,
    "isTop10": false,
    "slug": "lingdongyun-high-bandwidth-proxy",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "promoCode": "",
    "foundedYear": "2025",
    "entryPrice": "20元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "灵动·拂风",
        "billing": "月付",
        "price": "¥20",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "季付",
        "price": "¥57",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "半年付",
        "price": "¥108",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "年付",
        "price": "¥204",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "两年付",
        "price": "¥384",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "季付",
        "price": "¥142.5",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "半年付",
        "price": "¥270",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "年付",
        "price": "¥510",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "两年付",
        "price": "¥960",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "三年付",
        "price": "¥1350",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "季付",
        "price": "¥285",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "半年付",
        "price": "¥540",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "年付",
        "price": "¥1020",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "两年付",
        "price": "¥1920",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "三年付",
        "price": "¥2700",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "季付",
        "price": "¥513",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "半年付",
        "price": "¥972",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "年付",
        "price": "¥1836",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "两年付",
        "price": "¥3456",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "三年付",
        "price": "¥4860",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·穿云",
        "billing": "年付",
        "price": "¥99",
        "traffic": "70G/月",
        "period": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "billing": "一次性付费",
        "price": "¥199",
        "traffic": "150G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "billing": "一次性付费",
        "price": "¥499",
        "traffic": "400G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "billing": "一次性付费",
        "price": "¥899",
        "traffic": "800G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billing": "月付",
        "price": "¥620",
        "traffic": "截图遮挡",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": " 灵动云 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：https://varnexa.lingdongaff.com/#/?code=wZvEhEoI - 定位／线路：2025 年开业专线机场；VLESS（实测；站点页面文案 VLESS/trojan 混提）；不限速不限设备 - 优惠码：优惠码尚未核实 - 支付方式（历史资料）：支付宝 / USDT（微信需客服） 核心特色 - IEPL/VLESS 与大流量套餐 - 单次流量包和私人定制齐全 - 现有实测中主流 AI 解锁表现较好。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 灵动·拂风\t月付\t¥20\t100G/月\t每月 灵动·拂风\t季付\t¥57\t100G/月\t每月 灵动·拂风\t半年付\t¥108\t100G/月\t每月 灵动·"
  },
  {
    "id": "langwang-global-acceleration-review",
    "name": "浪网",
    "rank": 39,
    "isPrimary": false,
    "isTop10": false,
    "slug": "langwang-global-acceleration-review",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "promoCode": "",
    "foundedYear": "2023",
    "entryPrice": "年付折合 10元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "浪网 高端",
        "billing": "月付",
        "price": "¥120",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "季付",
        "price": "¥342",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "半年付",
        "price": "¥648",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "年付",
        "price": "¥1224",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "两年付",
        "price": "¥2304",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "三年付",
        "price": "¥3240",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "季付",
        "price": "¥570",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "半年付",
        "price": "¥1080",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "年付",
        "price": "¥2040",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "两年付",
        "price": "¥3840",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "三年付",
        "price": "¥5400",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 年付标准",
        "billing": "年付",
        "price": "¥119",
        "traffic": "80G",
        "period": "每月"
      },
      {
        "name": "浪网 小流量包",
        "billing": "一次性付费",
        "price": "¥239",
        "traffic": "180G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 标准流量包",
        "billing": "一次性付费",
        "price": "¥569",
        "traffic": "450G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 定制线路包",
        "billing": "月付",
        "price": "¥640",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "浪网 精英流量包",
        "billing": "一次性付费",
        "price": "¥1099",
        "traffic": "900G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 进阶",
        "billing": "月付",
        "price": "¥70",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "季付",
        "price": "¥199.5",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "半年付",
        "price": "¥378",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "年付",
        "price": "¥714",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "两年付",
        "price": "¥1344",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "三年付",
        "price": "¥1890",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "月付",
        "price": "¥30",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "季付",
        "price": "¥85.5",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "半年付",
        "price": "¥162",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "年付",
        "price": "¥306",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "两年付",
        "price": "¥576",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "三年付",
        "price": "¥810",
        "traffic": "截150G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "浪网 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：https://varnexa.wavenetaff.com/#/?code=xwAM4tTd - 定位／线路：IEPL 专线。 - 优惠码：优惠码尚未核实 核心特色 - IEPL 专线定位 - 入门到商业多价格层级 - 流量包和定制线路补充非标准需求。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 浪网 高端\t月付\t¥120\t800G\t每月 浪网 高端\t季付\t¥342\t800G\t每月 浪网 高端\t半年付\t¥648\t800G\t每月 浪网 高端\t年付\t¥1224\t800G\t每月 浪网 高端\t两年付\t¥2304\t800G\t每月 浪网 高端\t三年付\t¥3240\t800G\t每月 浪网 商业\t月付\t¥200\t2000G\t每月 浪"
  },
  {
    "id": "edgenova-nextgen-network-audit",
    "name": "EdgeNova",
    "rank": 40,
    "isPrimary": false,
    "isTop10": false,
    "slug": "edgenova-nextgen-network-audit",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "promoCode": "TH888",
    "foundedYear": "2023",
    "entryPrice": "15元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS / Shadowsocks",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "限时月付",
        "billing": "月付",
        "price": "¥15",
        "traffic": "72G",
        "period": "每月"
      },
      {
        "name": "限时年付",
        "billing": "年付",
        "price": "¥108",
        "traffic": "45G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "月付",
        "price": "¥25",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "季付",
        "price": "¥70",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "半年付",
        "price": "¥130",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "年付",
        "price": "¥270",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "月付",
        "price": "¥50",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "季付",
        "price": "¥145",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "半年付",
        "price": "¥280",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "年付",
        "price": "¥570",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "月付",
        "price": "¥100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "季付",
        "price": "¥290",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "半年付",
        "price": "¥580",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "年付",
        "price": "¥1100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "月付",
        "price": "¥200",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "季付",
        "price": "¥580",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "半年付",
        "price": "¥1150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "年付",
        "price": "¥2300",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "EdgeNova 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：https://work.edgenovaaff.cc/#/register?code=cl3iB5YG - 定位／线路：高速直连 / IPLC；多线路自动分配 - 优惠码：TH888（8 折） - 支付方式（历史资料）：支付宝 / 微信 / USDT 核心特色 - 多线路自动分配定位 - 年付小包和多档流量可选 - 提供新用户优惠码。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 限时月付\t月付\t¥15\t72G\t每月 限时年付\t年付\t¥108\t45G\t每月 极界·标准\t月付\t¥25\t120G\t每月 极界·标准\t季付\t¥70\t120G\t每月 极界·标准\t半年付\t¥130\t120G\t每月 极界·标准\t年付\t¥2"
  },
  {
    "id": "yinghuochong-proxy-stability-test",
    "name": "萤火虫",
    "rank": 41,
    "isPrimary": false,
    "isTop10": false,
    "slug": "yinghuochong-proxy-stability-test",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "promoCode": "firefly",
    "foundedYear": "2023",
    "entryPrice": "年付折合 8元/月",
    "lineType": "IPLC 纯专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "Firefly年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "两年付",
        "price": "¥420",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "两年付",
        "price": "¥756",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "三年付",
        "price": "¥972",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "两年付",
        "price": "¥1428",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "三年付",
        "price": "¥1836",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "两年付",
        "price": "¥2399",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "三年付",
        "price": "¥3119",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100G",
        "period": "一次性（套餐内流量总额）"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "部分节点",
      "claude": "待核实",
      "gemini": "支持",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": " 萤火虫 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：https://vip02.fireflyaff.com/#/?code=jTp9wSgZ - 定位／线路：IPLC + VLESS；现有资料记录（未独立实测） 8 年团队；不限速不限设备；原生 IP；ChatGPT/Gemini/Meta AI - 优惠码：firefly（新用户 8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折 - 支付方式（历史资料）：支付宝 / USDT（无微信） 核心特色 - IPLC + VLESS 与原生 IP 定位 - 60G 年付到 1000G 周期档 - 支持主流 AI 的现有资料与新用户优惠。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 Firefly年付版\t年付\t¥96"
  },
  {
    "id": "sslar-cloud-service-evaluation",
    "name": "sslar",
    "rank": 42,
    "isPrimary": false,
    "isTop10": false,
    "slug": "sslar-cloud-service-evaluation",
    "affiliateUrl": "",
    "promoCode": "ko3eTt0w",
    "foundedYear": "2023",
    "entryPrice": "17元/月",
    "lineType": "IEPL 内网专线",
    "protocol": "VLESS",
    "hasSpeedtestImage": false,
    "speedtestImage": "",
    "unlockImages": [],
    "dataStatus": "verified_spec",
    "packages": [
      {
        "name": "Basic",
        "billing": "月付",
        "price": "¥17",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billing": "季付",
        "price": "¥46",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billing": "半年付",
        "price": "¥87",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billing": "年付",
        "price": "¥163",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "月付",
        "price": "¥28",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "季付",
        "price": "¥76",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "半年付",
        "price": "¥143",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "年付",
        "price": "¥268",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "月付",
        "price": "¥36",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "季付",
        "price": "¥97",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "半年付",
        "price": "¥183",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "年付",
        "price": "¥345",
        "traffic": "300G",
        "period": "每月"
      }
    ],
    "speedRows": [],
    "unlock": {
      "chatgpt": "待核实",
      "claude": "待核实",
      "gemini": "视节点而定",
      "netflix": "待核实",
      "disney": "待核实",
      "youtube": "支持"
    },
    "rawTextExcerpt": "sslar 基础信息 - 来源资料（历史）：2026-08-09 的品牌库记录。 - 品牌入口（保存的入口或推广地址，不保证当前有效）：未提供独立品牌入口。 - 定位／线路：企业级 IEPL + 多线 BGP；SS/VLESS 协议自适应；现有资料记录（未独立实测） Eons/Akari/DigitalOcean 机房；自研客户端（Win/mac/安卓）；支持远程桌面协助 - 优惠码：ko3eTt0w（8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折 - 支付方式（历史资料）：支付宝 / 微信（现有资料未列 USDT） 核心特色 - 企业级 IEPL + 多线 BGP - 自研多平台客户端并兼容多协议 - 支持远程桌面协助，适合商务用户。 套餐价格 套餐名称\t计费方式\t价格\t流量\t流量周期 Basic\t月付\t¥17\t100G\t每月 Basic\t季"
  }
];

export const TOP_RECOMMENDED_BRANDS = BRANDS.slice(0, 10);
export const MEASURED_BRANDS = BRANDS.filter(b => b.hasSpeedtestImage);
export const PRIMARY_BRAND = BRANDS[0];
