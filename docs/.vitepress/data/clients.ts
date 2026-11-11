// 魔戒博客 (mojieblog.world) - 客户端数据库单源
export interface ClientItem {
  id: string;
  name: string;
  category: 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'router';
  categoryLabel: string;
  kernel: string;
  features: string[];
  recommended: boolean;
  pricing: 'Free' | 'Paid';
  docLink: string;
  downloadSource: string;
}

export const CLIENTS: ClientItem[] = [
  // Windows
  {
    id: 'clash-verge-rev-win',
    name: 'Clash Verge Rev (Windows)',
    category: 'windows',
    categoryLabel: 'Windows 电脑',
    kernel: 'Mihomo (Clash.Meta)',
    features: ['TUN 虚拟网卡模式', '订阅批量管理与自动测速', '可视化分流规则覆写', '轻量内存占用'],
    recommended: true,
    pricing: 'Free',
    docLink: '/clients/clash-verge-rev-tutorial',
    downloadSource: 'GitHub Releases'
  },
  {
    id: 'v2rayn-win',
    name: 'v2rayN',
    category: 'windows',
    categoryLabel: 'Windows 电脑',
    kernel: 'Xray / sing-box / Mihomo',
    features: ['全协议兼容 (VLESS/Reality/Trojan/Hysteria2)', '深层参数精细调节', '自定义路由分流规则', '轻量无需安装'],
    recommended: true,
    pricing: 'Free',
    docLink: '/clients/v2rayn-complete-guide',
    downloadSource: 'GitHub Releases'
  },
  {
    id: 'flclash-win',
    name: 'FlClash',
    category: 'windows',
    categoryLabel: 'Windows 电脑',
    kernel: 'Mihomo',
    features: ['Flutter 现代轻奢界面', '极简交互', '多平台统一体验'],
    recommended: false,
    pricing: 'Free',
    docLink: '/clients/',
    downloadSource: 'GitHub Releases'
  },
  {
    id: 'hiddify-win',
    name: 'Hiddify Next',
    category: 'windows',
    categoryLabel: 'Windows 电脑',
    kernel: 'sing-box',
    features: ['自动化节点优选', '极简傻瓜式连接', '多协议原生支持'],
    recommended: false,
    pricing: 'Free',
    docLink: '/clients/',
    downloadSource: 'GitHub Releases'
  },

  // iOS
  {
    id: 'shadowrocket-ios',
    name: 'Shadowrocket (小火箭)',
    category: 'ios',
    categoryLabel: 'iPhone / iPad',
    kernel: 'Shadowrocket 内核',
    features: ['全协议支持', '扫码与订阅一键导入', '按域名/IP精细分流', '国内访问直连防封锁'],
    recommended: true,
    pricing: 'Paid',
    docLink: '/clients/shadowrocket-ios-setup',
    downloadSource: '非国区 App Store ($2.99)'
  },
  {
    id: 'stash-ios',
    name: 'Stash',
    category: 'ios',
    categoryLabel: 'iPhone / iPad',
    kernel: 'Clash 规则体系',
    features: ['Clash 订阅完美兼容', '按策略组切换节点', '重写脚本与去广告'],
    recommended: true,
    pricing: 'Paid',
    docLink: '/clients/',
    downloadSource: '非国区 App Store'
  },
  {
    id: 'quantumult-x-ios',
    name: 'Quantumult X (圈 X)',
    category: 'ios',
    categoryLabel: 'iPhone / iPad',
    kernel: 'Quantumult X 内核',
    features: ['极客级脚本扩展', '多维度分流与重写', '丰富图标与统计'],
    recommended: false,
    pricing: 'Paid',
    docLink: '/clients/',
    downloadSource: '非国区 App Store'
  },

  // Android
  {
    id: 'v2rayng-android',
    name: 'v2rayNG',
    category: 'android',
    categoryLabel: 'Android 安卓',
    kernel: 'Xray',
    features: ['安卓经典首选', '多节点批量延迟测试', '按应用绕过分流'],
    recommended: true,
    pricing: 'Free',
    docLink: '/clients/',
    downloadSource: 'GitHub / Google Play'
  },
  {
    id: 'flclash-android',
    name: 'FlClash (Android)',
    category: 'android',
    categoryLabel: 'Android 安卓',
    kernel: 'Mihomo',
    features: ['Material Design 3 风格', 'Clash 规则订阅', '现代动画'],
    recommended: true,
    pricing: 'Free',
    docLink: '/clients/',
    downloadSource: 'GitHub Releases'
  },

  // macOS
  {
    id: 'clash-verge-rev-mac',
    name: 'Clash Verge Rev (macOS)',
    category: 'macos',
    categoryLabel: 'macOS 苹果电脑',
    kernel: 'Mihomo (支持 Apple Silicon & Intel)',
    features: ['原生适配 M1/M2/M3/M4', '全局系统代理与 TUN 模式', '暗色模式'],
    recommended: true,
    pricing: 'Free',
    docLink: '/clients/clash-verge-rev-tutorial',
    downloadSource: 'GitHub Releases'
  },

  // 软路由
  {
    id: 'openclash-router',
    name: 'OpenClash',
    category: 'router',
    categoryLabel: '软路由 / OpenWrt',
    kernel: 'Mihomo / Clash Core',
    features: ['全屋设备无感科学上网', '智能 DNS 劫持防护', '旁路由/主路由全适配'],
    recommended: true,
    pricing: 'Free',
    docLink: '/clients/openclash-router-guide',
    downloadSource: 'OpenWrt 插件源 / GitHub'
  }
];
