import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '魔戒博客 | mojieblog.world',
  description: '专业科学上网与网络加速可观测性智库，提供42家机场深度评测、晚高峰节点测速、流媒体与AI解锁实测及全平台客户端指南。',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://mojieblog.world'
  },
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { name: 'keywords', content: '魔戒博客, 机场推荐, 科学上网, 梯子推荐, IEPL专线, IPLC专线, Clash教程, Shadowrocket, VLESS Reality, 光速云' }],
    ['meta', { property: 'og:site_name', content: '魔戒博客' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '魔戒博客 | 42家机场万字深度评测与网络加速技术智库' }],
    ['meta', { property: 'og:description', content: '基于真实晚高峰测速、流媒体解锁测试与底层协议解剖，拒绝虚构数据，提供权威科学上网选型方案。' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': '魔戒博客',
      'url': 'https://mojieblog.world',
      'description': '专业科学上网与网络加速可观测性智库',
      'publisher': {
        '@type': 'Organization',
        'name': '魔戒博客实验室',
        'url': 'https://mojieblog.world'
      }
    })]
  ],
  transformHead({ pageData }) {
    const relPath = pageData.relativePath;
    let canonicalUrl = 'https://mojieblog.world/';
    if (relPath === 'index.md') {
      canonicalUrl = 'https://mojieblog.world/';
    } else if (relPath.endsWith('/index.md')) {
      canonicalUrl = `https://mojieblog.world/${relPath.replace(/index\.md$/, '')}`;
    } else {
      canonicalUrl = `https://mojieblog.world/${relPath.replace(/\.md$/, '')}`;
    }

    const is404 = relPath === '404.md' || relPath === '404.html';
    const isHome = relPath === 'index.md';
    const isCategoryIndex = relPath.endsWith('/index.md');

    const headTags: any[] = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:image', content: 'https://mojieblog.world/avatar.jpg' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageData.title || '魔戒博客' }],
      ['meta', { name: 'twitter:description', content: pageData.description || '专业科学上网与网络加速可观测性智库' }],
      ['meta', { name: 'twitter:image', content: 'https://mojieblog.world/avatar.jpg' }]
    ];

    // Robots 索引控制
    if (is404) {
      headTags.push(['meta', { name: 'robots', content: 'noindex, nofollow' }]);
      return headTags;
    } else {
      headTags.push(['meta', { name: 'robots', content: 'index, follow' }]);
    }

    // 文章时效性与作者元数据
    if (!isHome && !is404) {
      headTags.push(
        ['meta', { property: 'article:published_time', content: '2026-01-01T00:00:00+08:00' }],
        ['meta', { property: 'article:modified_time', content: '2026-11-11T20:30:00+08:00' }],
        ['meta', { property: 'article:author', content: '魔戒博客技术实验室' }]
      );
    }

    // Section 栏目映射（用于 BreadcrumbList 路径展开）
    const sectionMap: Record<string, { name: string; url: string }> = {
      'recommendations': { name: '42家机场推荐', url: 'https://mojieblog.world/recommendations/' },
      'benchmarks': { name: '深度性能横评', url: 'https://mojieblog.world/benchmarks/' },
      'free-nodes': { name: '免费节点与安全', url: 'https://mojieblog.world/free-nodes/' },
      'faq': { name: '机场百科FAQ', url: 'https://mojieblog.world/faq/' },
      'risk-radar': { name: '跑路预警雷达', url: 'https://mojieblog.world/risk-radar/' },
      'free-trial': { name: '免费试用精选', url: 'https://mojieblog.world/free-trial/' },
      'brands': { name: '42家品牌库', url: 'https://mojieblog.world/brands/' },
      'topics': { name: '六大技术专题', url: 'https://mojieblog.world/topics/airport-selection-guide' },
      'clients': { name: '客户端教程库', url: 'https://mojieblog.world/clients/' },
      'comparisons': { name: '横向横评PK', url: 'https://mojieblog.world/comparisons/guangsu-vs-muguang-speed-battle' },
      'streaming-ai': { name: 'AI与流媒体解锁', url: 'https://mojieblog.world/streaming-ai/chatgpt-plus-native-ip-solution' },
      'cross-border': { name: '跨境出海加速', url: 'https://mojieblog.world/cross-border/tiktok-live-streaming-network-setup' },
      'reviews': { name: '机场深度评测', url: 'https://mojieblog.world/reviews/' }
    };

    const firstSegment = relPath.split('/')[0];
    const sectionInfo = sectionMap[firstSegment];

    // 1. 栏目/聚合页 Schema: CollectionPage + BreadcrumbList
    if (isCategoryIndex && sectionInfo) {
      const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': pageData.title,
        'description': pageData.description,
        'url': canonicalUrl,
        'publisher': {
          '@type': 'Organization',
          'name': '魔戒博客',
          'url': 'https://mojieblog.world'
        }
      };
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://mojieblog.world/' },
          { '@type': 'ListItem', 'position': 2, 'name': sectionInfo.name, 'item': canonicalUrl }
        ]
      };
      headTags.push(
        ['script', { type: 'application/ld+json' }, JSON.stringify(collectionSchema)],
        ['script', { type: 'application/ld+json' }, JSON.stringify(breadcrumbSchema)]
      );
    } else if (!isHome && !is404) {
      // 2. 正式文章/评测页 Schema: Article + BreadcrumbList (3层)
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': pageData.title,
        'description': pageData.description,
        'url': canonicalUrl,
        'datePublished': '2026-01-01T00:00:00+08:00',
        'dateModified': '2026-11-11T20:30:00+08:00',
        'author': {
          '@type': 'Organization',
          'name': '魔戒博客技术实验室',
          'url': 'https://mojieblog.world'
        },
        'publisher': {
          '@type': 'Organization',
          'name': '魔戒博客',
          'url': 'https://mojieblog.world',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://mojieblog.world/avatar.jpg'
          }
        }
      };
      const breadcrumbItems: any[] = [
        { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://mojieblog.world/' }
      ];
      if (sectionInfo) {
        breadcrumbItems.push({ '@type': 'ListItem', 'position': 2, 'name': sectionInfo.name, 'item': sectionInfo.url });
        breadcrumbItems.push({ '@type': 'ListItem', 'position': 3, 'name': pageData.title, 'item': canonicalUrl });
      } else {
        breadcrumbItems.push({ '@type': 'ListItem', 'position': 2, 'name': pageData.title, 'item': canonicalUrl });
      }

      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbItems
      };

      headTags.push(
        ['script', { type: 'application/ld+json' }, JSON.stringify(articleSchema)],
        ['script', { type: 'application/ld+json' }, JSON.stringify(breadcrumbSchema)]
      );
    }

    // 3. FAQ 页面专用 FAQPage Schema (仅在包含真实FAQ的页面输出)
    if (relPath === 'faq/index.md') {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '节点全部超时（Timeout）或延迟 -1 是怎么回事？如何快速排查？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '超过90%的超时是由于本地系统时间与网络标准时间偏差超过90秒触发AEAD时间戳防重放校验失败，或7890代理端口冲突导致。通过Windows右下角时钟同步时间、重启网络栈即可快速自愈。'
            }
          },
          {
            '@type': 'Question',
            'name': '究竟什么是“机场”？专线与普通公网中转有什么区别？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '“机场”源自Shadowsocks纸飞机图标，指提供批量海外网络加速节点的商业集群。IEPL物理专线通过运营商内网点对点光缆传输，物理上完全不经过公网GFW，因此晚高峰零丢包、抗敏感期封锁。'
            }
          },
          {
            '@type': 'Question',
            'name': '规则分流（Rule）与全局代理（Global）模式有什么区别？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '规则分流模式智能判断：国内微信、淘宝走直连不耗流量，海外受限网站走专线；全局模式将所有请求无差别导向海外出口，容易导致国内App严重卡顿并触发异地登录风控。日常使用应始终保持规则分流。'
            }
          },
          {
            '@type': 'Question',
            'name': '官网打不开是跑路了吗？如何鉴别与挽回资金损失？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '官网前端打不开多为域名被国内阻断，只要客户端内节点测速仍有响应就不是跑路。若确认官方群组解散且节点断网超48小时，可通过支付宝或微信账单发起交易争议与商户备付金冻结投诉退款。'
            }
          },
          {
            '@type': 'Question',
            'name': '为什么手机挂着代理微信会弹异地登录安全警告？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '这是因为发生了DNS泄露或开启了全局模式，国内域名被解析到海外CDN节点。在Clash中启用Fake-IP模式并配置223.5.5.5国内DNS即可彻底根除。'
            }
          }
        ]
      };
      headTags.push(['script', { type: 'application/ld+json' }, JSON.stringify(faqSchema)]);
    }

    return headTags;
  },
  markdown: {
    config: (md) => {
      const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };
      md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        const hrefIndex = tokens[idx].attrIndex('href');
        if (hrefIndex >= 0) {
          const href = tokens[idx].attrs[hrefIndex][1];
          if (/^https?:\/\//i.test(href) && !href.includes('mojieblog.world')) {
            tokens[idx].attrSet('target', '_blank');
            tokens[idx].attrSet('rel', 'nofollow sponsored noopener');
          }
        }
        return defaultRender(tokens, idx, options, env, self);
      };
    }
  },
  themeConfig: {
    siteTitle: '魔戒博客 mojieblog.world',
    logo: '/avatar.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '42家机场推荐',
        items: [
          { text: '推荐中枢与智能选型', link: '/recommendations/' },
          { text: '💰 平民高性价比专线 (8元档)', link: '/recommendations/best-budget-airports' },
          { text: '⚡ 顶级 IEPL/IPLC 物理专线', link: '/recommendations/best-dedicated-iepl-airports' },
          { text: '🎬 Netflix / Disney+ 4K 解锁', link: '/recommendations/best-streaming-unlock-airports' },
          { text: '🤖 ChatGPT / Claude 纯净原生 IP', link: '/recommendations/best-ai-productivity-airports' },
          { text: '♾️ 不限时永久买断流量包', link: '/recommendations/best-no-expiration-airports' }
        ]
      },
      {
        text: '深度性能评测',
        items: [
          { text: '42家实验室性能横评中枢', link: '/benchmarks/' },
          { text: '📶 晚高峰 Ping 延迟与抖动总排', link: '/benchmarks/latency-jitter-ranking-2026' },
          { text: '🚀 千兆宽带吞吐与超售率实测', link: '/benchmarks/peak-hours-bandwidth-throughput' },
          { text: '🛡️ VLESS-Reality VS SS 协议对比', link: '/benchmarks/protocol-efficiency-vless-vs-ss' },
          { text: '🔍 出口 IP 纯净度与欺诈分抽检', link: '/benchmarks/native-ip-purity-audit' },
          { text: '⏱️ 客服响应 SLA 与退款透明度', link: '/benchmarks/customer-service-sla-audit' }
        ]
      },
      {
        text: '免费节点与试用',
        items: [
          { text: '🌐 免费节点防范白皮书 (中枢)', link: '/free-nodes/' },
          { text: '每日免费订阅可用性测评', link: '/free-nodes/free-clash-v2ray-nodes-daily' },
          { text: '中间人窃密与安全风险深度揭密', link: '/free-nodes/free-node-security-risks-mitm' },
          { text: '为什么免费节点几小时就失效？', link: '/free-nodes/why-free-nodes-expire-so-fast' },
          { text: '断网急救备用节点配置方案', link: '/free-nodes/emergency-backup-nodes-guide' },
          { text: '免费节点 VS 8元专线终极算账', link: '/free-nodes/free-nodes-vs-budget-airports' },
          { text: '🎁 免费试用与退款精选 (中枢)', link: '/free-trial/' },
          { text: '2026 支持试用机场清单', link: '/free-trial/top-airports-with-free-trials-2026' },
          { text: '24 小时无理由退款良心盘点', link: '/free-trial/money-back-guarantee-safety-rules' },
          { text: '警惕免费试用自动扣费陷阱', link: '/free-trial/free-trial-auto-renewal-traps' },
          { text: '全网 1 元试用体验包横评', link: '/free-trial/1-yuan-test-packages-roundup' },
          { text: '从 0 元试用到 147 永久买断', link: '/free-trial/convert-trial-to-permanent-value' }
        ]
      },
      {
        text: '跑路预警与FAQ',
        items: [
          { text: '🚨 跑路预警雷达与红黑榜 (中枢)', link: '/risk-radar/' },
          { text: '跑路前兆自检清单：10个危险信号', link: '/risk-radar/exit-scam-warning-signs-checklist' },
          { text: '魔戒黑榜：跑路服务商曝光台', link: '/risk-radar/blacklisted-airports-hall-of-shame' },
          { text: '机场跑路后 5 分钟灾后恢复 SOP', link: '/risk-radar/post-scam-emergency-disaster-recovery' },
          { text: '老牌稳健机场的基因密码', link: '/risk-radar/how-to-choose-non-scam-airports' },
          { text: '拒不退款如何发起支付争议维权', link: '/risk-radar/refund-rights-dispute-resolution' },
          { text: '✈️ 科学上网 100 问 FAQ (中枢)', link: '/faq/' },
          { text: '节点全部超时 Timeout 自愈排查', link: '/faq/connection-timeout-troubleshooting' },
          { text: '究竟什么是机场？底层原理图解', link: '/faq/what-is-airport-and-how-it-works' },
          { text: '规则分流 VS 全局代理深度辨析', link: '/faq/rule-mode-vs-global-mode' },
          { text: '官网打不开是跑路了吗？挽损指南', link: '/faq/airport-running-away-compensation' },
          { text: '国内 App 提示异地登录防泄露', link: '/faq/dns-leak-and-domestic-app-warning' }
        ]
      },
      {
        text: '技术专题库',
        items: [
          { text: '六大技术专题支柱总览', link: '/topics/airport-selection-guide' },
          { text: '专题一：机场选型避坑', link: '/topics/airport-selection-guide' },
          { text: '专题二：专线协议智库', link: '/topics/dedicated-lines-protocols' },
          { text: '专题三：全平台客户端指南', link: '/topics/client-ecosystem-mastery' },
          { text: '专题四：流媒体与AI解锁', link: '/topics/streaming-ai-unlock' },
          { text: '专题五：跨境出海与推流', link: '/topics/cross-border-commerce' },
          { text: '专题六：安全合规审计', link: '/topics/security-privacy-audit' },
          { text: '核心横向横评 PK 专区', link: '/comparisons/guangsu-vs-muguang-speed-battle' },
          { text: '跨境出海高客单专区', link: '/cross-border/tiktok-live-streaming-network-setup' },
          { text: '客户端配置与进阶实操', link: '/clients/' },
          { text: '6000 篇蜂巢内链拓扑', link: '/architecture/knowledge-graph-matrix' }
        ]
      },
      { text: '42家品牌库', link: '/brands/' }
    ],
    sidebar: {
      '/recommendations/': [
        {
          text: '🎯 42家机场推荐矩阵',
          items: [
            { text: '2026 年度推荐全景中枢', link: '/recommendations/' },
            { text: '💰 平民高性价比专线推荐 (8元档)', link: '/recommendations/best-budget-airports' },
            { text: '⚡ 顶级 IEPL/IPLC 专线推荐', link: '/recommendations/best-dedicated-iepl-airports' },
            { text: '🎬 Netflix 与 Disney+ 4K 解锁', link: '/recommendations/best-streaming-unlock-airports' },
            { text: '🤖 ChatGPT 与 Claude 原生 IP', link: '/recommendations/best-ai-productivity-airports' },
            { text: '♾️ 不限时永久买断流量包', link: '/recommendations/best-no-expiration-airports' },
            { text: '⭐ 第一主推：光速云万字评测', link: '/reviews/guangsu-cloud-iepl-vless' },
            { text: '📊 42 家机场品牌库检索', link: '/brands/' }
          ]
        }
      ],
      '/benchmarks/': [
        {
          text: '🔬 42家深度评测中枢',
          items: [
            { text: '实验室深度横评全景中枢', link: '/benchmarks/' },
            { text: '📶 晚高峰延迟与 Jitter 榜单', link: '/benchmarks/latency-jitter-ranking-2026' },
            { text: '🚀 千兆宽带吞吐与超售率实测', link: '/benchmarks/peak-hours-bandwidth-throughput' },
            { text: '🛡️ VLESS-Reality VS SS 协议对比', link: '/benchmarks/protocol-efficiency-vless-vs-ss' },
            { text: '🔍 出口 IP 纯净度与欺诈分抽检', link: '/benchmarks/native-ip-purity-audit' },
            { text: '⏱️ 客服响应 SLA 与退款透明度', link: '/benchmarks/customer-service-sla-audit' },
            { text: '⭐ 光速云 529M 测速卡片', link: '/reviews/guangsu-cloud-iepl-vless' }
          ]
        }
      ],
      '/free-nodes/': [
        {
          text: '🌐 免费节点与安全防护',
          items: [
            { text: '公共免费节点安全防范白皮书', link: '/free-nodes/' },
            { text: '每日免费 Clash 节点可用性测评', link: '/free-nodes/free-clash-v2ray-nodes-daily' },
            { text: '免费节点暗藏杀机：中间人窃密', link: '/free-nodes/free-node-security-risks-mitm' },
            { text: '为什么免费节点几小时就失效？', link: '/free-nodes/why-free-nodes-expire-so-fast' },
            { text: '断网急救备用节点配置方案', link: '/free-nodes/emergency-backup-nodes-guide' },
            { text: '免费节点 VS 8元专线终极算账', link: '/free-nodes/free-nodes-vs-budget-airports' },
            { text: '💡 推荐升级：光速云 8 元专线', link: '/reviews/guangsu-cloud-iepl-vless' }
          ]
        }
      ],
      '/faq/': [
        {
          text: '❓ 机场 100 问百科 FAQ',
          items: [
            { text: '网络加速 100 问 FAQ 智库', link: '/faq/' },
            { text: '节点全部超时 Timeout 自愈排查', link: '/faq/connection-timeout-troubleshooting' },
            { text: '究竟什么是机场？原理图解', link: '/faq/what-is-airport-and-how-it-works' },
            { text: '规则分流 VS 全局代理深度辨析', link: '/faq/rule-mode-vs-global-mode' },
            { text: '官网打不开是跑路了吗？挽损指南', link: '/faq/airport-running-away-compensation' },
            { text: '国内 App 提示异地登录避坑', link: '/faq/dns-leak-and-domestic-app-warning' },
            { text: '⚡ 省心免维护：光速云专线', link: '/reviews/guangsu-cloud-iepl-vless' }
          ]
        }
      ],
      '/risk-radar/': [
        {
          text: '🚨 跑路预警雷达与红黑榜',
          items: [
            { text: '失联预警雷达与红黑榜曝光台', link: '/risk-radar/' },
            { text: '跑路前兆自检清单：10 个致命信号', link: '/risk-radar/exit-scam-warning-signs-checklist' },
            { text: '魔戒黑榜：跑路服务商耻辱柱', link: '/risk-radar/blacklisted-airports-hall-of-shame' },
            { text: '机场跑路后 5 分钟灾后恢复 SOP', link: '/risk-radar/post-scam-emergency-disaster-recovery' },
            { text: '老牌稳健机场的基因密码', link: '/risk-radar/how-to-choose-non-scam-airports' },
            { text: '拒不退款如何发起支付争议维权', link: '/risk-radar/refund-rights-dispute-resolution' },
            { text: '🛡️ 白名单标杆：光速云 5 年运营', link: '/reviews/guangsu-cloud-iepl-vless' }
          ]
        }
      ],
      '/free-trial/': [
        {
          text: '🎁 免费试用与尝鲜避坑',
          items: [
            { text: '支持试用与退款精选大集合', link: '/free-trial/' },
            { text: '2026 支持免费试用机场清单', link: '/free-trial/top-airports-with-free-trials-2026' },
            { text: '支持 24 小时无理由退款盘点', link: '/free-trial/money-back-guarantee-safety-rules' },
            { text: '警惕免费试用背后的扣款陷阱', link: '/free-trial/free-trial-auto-renewal-traps' },
            { text: '全网 1 元试用体验包深度横评', link: '/free-trial/1-yuan-test-packages-roundup' },
            { text: '从 0 元试用到 147 永久买断', link: '/free-trial/convert-trial-to-permanent-value' },
            { text: '💎 极速尝鲜：光速云 8元/月', link: '/reviews/guangsu-cloud-iepl-vless' }
          ]
        }
      ],
      '/comparisons/': [
        {
          text: '⚔️ 核心横向横评 PK',
          items: [
            { text: '光速云 VS 暮光加速 晚高峰PK', link: '/comparisons/guangsu-vs-muguang-speed-battle' },
            { text: '真专线还是假中转？IEPL与BGP拆解', link: '/comparisons/iepl-dedicated-vs-bgp-tunnel' },
            { text: '月均8元档平民机场大乱斗', link: '/comparisons/budget-airport-8-yuan-tier-pk' },
            { text: '不限时永久流量包深度精算', link: '/comparisons/no-expiration-permanent-traffic-pack' },
            { text: '专属客户端 VS Clash Verge', link: '/comparisons/custom-app-vs-clash-verge' }
          ]
        }
      ],
      '/streaming-ai/': [
        {
          text: '🤖 AI 与流媒体高转化专区',
          items: [
            { text: 'ChatGPT Plus 绑卡与 1020 破解', link: '/streaming-ai/chatgpt-plus-native-ip-solution' },
            { text: 'Claude 3.5 防封号与纯净专线', link: '/streaming-ai/claude-35-sonnet-ban-prevention' },
            { text: 'Netflix 4K 非自制剧全区解锁', link: '/streaming-ai/netflix-full-region-4k-hdr-unlock' },
            { text: 'Google Gemini 区域限制提示突破', link: '/streaming-ai/gemini-advanced-country-restriction' },
            { text: 'IP 欺诈分与 Scamalytics 自测', link: '/streaming-ai/streaming-ip-fraud-score-test' }
          ]
        }
      ],
      '/cross-border/': [
        {
          text: '💼 跨境出海与 TikTok 直播高客单专区',
          items: [
            { text: 'TikTok 跨境直播推流防黑屏指南', link: '/cross-border/tiktok-live-streaming-network-setup' },
            { text: '亚马逊多店铺防关联网络架构', link: '/cross-border/amazon-store-anti-association-ip' },
            { text: 'TikTok 0 播放网络原因深度诊断', link: '/cross-border/tiktok-zero-views-network-troubleshooting' },
            { text: '外贸 B2B 客户开发网络规范', link: '/cross-border/foreign-trade-b2b-customer-development' },
            { text: '企业级 600元档 IPLC 定制专线横评', link: '/cross-border/enterprise-dedicated-iplc-bandwidth' }
          ]
        }
      ],
      '/reviews/': [
        {
          text: '⭐ 主推第一梯队',
          items: [
            { text: '光速云 (老牌IEPL/VLESS主推)', link: '/reviews/guangsu-cloud-iepl-vless' },
            { text: '暮光加速 (BGP智能调度)', link: '/reviews/muguang-speed-bgp-review' },
            { text: '飞猫云 (专属客户端易用)', link: '/reviews/feimao-cloud-app-review' },
            { text: '微风网络 (高性价比IEPL)', link: '/reviews/weifeng-cloud-iepl-test' },
            { text: '大佬云 (轻量稳定)', link: '/reviews/dalaoyun-speed-guide' },
            { text: '星岛梦 (亚太优化)', link: '/reviews/xingdaomeng-airport-review' },
            { text: '二猫云 (大带宽实测)', link: '/reviews/ermaoyun-speedtest-benchmark' },
            { text: '无忧链接 (多协议支持)', link: '/reviews/wuyou-link-proxy-evaluation' },
            { text: '唯兔云 (低延迟中转)', link: '/reviews/weitu-cloud-iepl-review' },
            { text: 'Firefly (VIP专线)', link: '/reviews/firefly-vip-airport-guide' }
          ]
        },
        {
          text: '🔍 17家实测数据机场',
          items: [
            { text: '宇宙云 (延迟实测报告)', link: '/reviews/yuzhou-cloud-latency-report' },
            { text: 'U1S1 (测速实测报告)', link: '/reviews/u1s1-cloud-speedtest-review' },
            { text: '灵猫网络 (多设备测试)', link: '/reviews/lingmao-network-multi-device' },
            { text: '极连云 (IEPL线路测试)', link: '/reviews/jilian-cloud-iepl-evaluation' },
            { text: '光年梯 (高带宽稳定性)', link: '/reviews/guangnian-ladder-stability-test' },
            { text: '一翻云 (节点性能评测)', link: '/reviews/yifan-cloud-speedtest-benchmark' },
            { text: 'SOGO 云 (Shadowsocks实测)', link: '/reviews/sogo-cloud-shadowsocks-review' },
            { text: '可信云 (中继性能实测)', link: '/reviews/kexin-cloud-iepl-speed-test' },
            { text: '速界 (加速性能报告)', link: '/reviews/sujie-accelerator-performance' }
          ]
        },
        {
          text: '🌐 更多重点综合评测',
          items: [
            { text: 'WgetCloud (高端专线)', link: '/reviews/wgetcloud-premium-iplc-review' },
            { text: '白月光 (多地区节点)', link: '/reviews/baiyueguang-multi-region-nodes' },
            { text: 'FlyingBird (IPLC零倍率)', link: '/reviews/flyingbird-iplc-zero-multiplier' },
            { text: 'CyberGuard (隐私审计)', link: '/reviews/cyberguard-proxy-privacy-audit' },
            { text: '青云梯 (企业级专线)', link: '/reviews/qingyunti-enterprise-iplc-benchmark' },
            { text: '龙猫云 (跨境提速)', link: '/reviews/longmaoyun-cross-border-speed' },
            { text: '全部42家品牌完整库', link: '/brands/' }
          ]
        }
      ],
      '/topics/': [
        {
          text: '六大专题万字支柱',
          items: [
            { text: '专题一：机场综合选型与防坑避雷', link: '/topics/airport-selection-guide' },
            { text: '专题二：专线与网络协议技术智库', link: '/topics/dedicated-lines-protocols' },
            { text: '专题三：全平台客户端实操指南', link: '/topics/client-ecosystem-mastery' },
            { text: '专题四：流媒体与 AI 原生解锁', link: '/topics/streaming-ai-unlock' },
            { text: '专题五：跨境出海与游戏低延迟加速', link: '/topics/cross-border-commerce' },
            { text: '专题六：避坑防跑路与安全合规审计', link: '/topics/security-privacy-audit' }
          ]
        }
      ],
      '/clients/': [
        {
          text: '客户端教程库',
          items: [
            { text: '客户端总览与快速导航', link: '/clients/' },
            { text: 'Clash Verge Rev 核心进阶', link: '/clients/clash-verge-rev-tutorial' },
            { text: 'v2rayN 多协议终极实操', link: '/clients/v2rayn-complete-guide' },
            { text: 'Shadowrocket 小火箭 iOS 指南', link: '/clients/shadowrocket-ios-setup' },
            { text: 'OpenClash 软路由全屋代理', link: '/clients/openclash-router-guide' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索评测与知识库',
                buttonAriaLabel: '搜索评测与知识库'
              },
              modal: {
                noResultsText: '无法找到相关评测或技术文章',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    footer: {
      message: '声明：本站提供之内容仅作网络可观测性技术研究与学术探讨之用。部分外链含推广赞助标识（rel="sponsored"），绝不影响客观评测基准。',
      copyright: 'Copyright © 2026 魔戒博客 (mojieblog.world) · 专业科学上网与网络加速实验室'
    }
  }
});
