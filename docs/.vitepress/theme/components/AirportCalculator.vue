<template>
  <div class="calculator-container">
    <div class="calc-header">
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span style="font-size: 1.5rem;">⚡</span>
        <div>
          <h3 style="margin: 0; font-size: 1.25rem; font-weight: 700; color: #0f172a;">魔戒智能选型计算器 · 30秒精准匹配</h3>
          <p style="margin: 0.2rem 0 0 0; font-size: 0.85rem; color: #64748b;">拒绝盲目踩坑，根据您的核心业务需求与预算，由算法实时测算最佳机场服务商</p>
        </div>
      </div>
      <span class="calc-badge">AI MATCH ENGINE</span>
    </div>

    <!-- Step 1: 核心需求 -->
    <div class="calc-section">
      <div class="calc-label">1. 您的核心主用场景是？</div>
      <div class="options-grid">
        <div
          v-for="s in scenarioOptions"
          :key="s.id"
          :class="['option-card', selectedScenario === s.id ? 'active' : '']"
          @click="selectedScenario = s.id"
        >
          <span class="opt-icon">{{ s.icon }}</span>
          <div class="opt-content">
            <div class="opt-title">{{ s.title }}</div>
            <div class="opt-desc">{{ s.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: 预算倾向 -->
    <div class="calc-section">
      <div class="calc-label">2. 您的预算与周期偏好？</div>
      <div class="chips-row">
        <button
          v-for="b in budgetOptions"
          :key="b.id"
          :class="['chip-btn', selectedBudget === b.id ? 'chip-active' : '']"
          @click="selectedBudget = b.id"
        >
          {{ b.label }}
        </button>
      </div>
    </div>

    <!-- Step 3: 终端设备 -->
    <div class="calc-section">
      <div class="calc-label">3. 主要使用设备与系统？</div>
      <div class="chips-row">
        <button
          v-for="d in deviceOptions"
          :key="d.id"
          :class="['chip-btn', selectedDevice === d.id ? 'chip-active' : '']"
          @click="selectedDevice = d.id"
        >
          {{ d.label }}
        </button>
      </div>
    </div>

    <!-- Results Box -->
    <div class="results-box">
      <div class="results-header">
        <span style="font-size: 0.95rem; font-weight: 700; color: #0f172a;">🎯 匹配测算推荐结果</span>
        <span style="font-size: 0.8rem; color: #059669; font-weight: 600;">基准库：42家已核验服务商</span>
      </div>

      <div class="result-card">
        <div class="result-top">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="match-score">匹配度 {{ bestMatch.score }}%</span>
              <span class="result-name">{{ bestMatch.name }}</span>
              <span class="result-tag">{{ bestMatch.lineType }}</span>
            </div>
            <div class="result-desc">{{ bestMatch.reason }}</div>
          </div>
          <div class="result-price-box">
            <div class="price-val">{{ bestMatch.recommendedPackage.price }}</div>
            <div class="price-cycle">{{ bestMatch.recommendedPackage.cycle }}</div>
          </div>
        </div>

        <div class="result-features">
          <span v-for="(feat, i) in bestMatch.features" :key="i" class="feat-pill">
            ✓ {{ feat }}
          </span>
        </div>

        <div class="result-actions">
          <a
            :href="bestMatch.affLink"
            target="_blank"
            rel="nofollow sponsored noopener"
            class="calc-cta-btn"
          >
            <span>立即前往 {{ bestMatch.name }} 选购</span>
            <span>→</span>
          </a>
          <a :href="'/reviews/' + bestMatch.slug" class="calc-review-link">
            查阅万字实测报告
          </a>
          <span v-if="bestMatch.promoCode" class="calc-promo-tag">
            优惠码: <code>{{ bestMatch.promoCode }}</code>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const selectedScenario = ref('ai');
const selectedBudget = ref('balanced');
const selectedDevice = ref('win');

const scenarioOptions = [
  { id: 'ai', icon: '🤖', title: 'AI 生产力 (ChatGPT / Claude)', desc: '需低欺诈分住宅原生IP，防1020封号' },
  { id: 'streaming', icon: '🎬', title: '流媒体追剧 (Netflix / Disney+)', desc: '需晚高峰高带宽、4K非自制剧全解锁' },
  { id: 'business', icon: '💼', title: '外贸跨境 / TikTok 直播推流', desc: '需极低丢包、独享专线与固定静态IP' },
  { id: 'gaming', icon: '🎮', title: '海外外服游戏联机 (Apex / Steam)', desc: '需Full-Cone NAT、往返延迟低于40ms' },
  { id: 'budget', icon: '📚', title: '日常浏览 / 查阅学术资料', desc: '追求极低月均成本、轻量稳定防断流' }
];

const budgetOptions = [
  { id: 'budget', label: '💰 预算敏感 (月均 < 10元)' },
  { id: 'balanced', label: '⚖️ 均衡主力 (15~35元/月)' },
  { id: 'permanent', label: '♾️ 不限时永久包 (买断制)' },
  { id: 'custom', label: '🚀 企业高阶定制 (50元+/月)' }
];

const deviceOptions = [
  { id: 'win', label: 'Windows (Clash / v2rayN)' },
  { id: 'mac', label: 'macOS (Apple Silicon)' },
  { id: 'ios', label: 'iPhone / iPad (小火箭)' },
  { id: 'android', label: 'Android (FlClash / v2rayNG)' },
  { id: 'router', label: '软路由 (全屋无感代理)' },
  { id: 'app', label: '新手专属客户端 (下载即用)' }
];

const bestMatch = computed(() => {
  // Scenario 1: Permanent traffic pack
  if (selectedBudget.value === 'permanent') {
    return {
      name: '光速云',
      slug: 'guangsu-cloud-iepl-vless',
      score: 99,
      lineType: 'IEPL 内网专线',
      reason: '业内独创「致敬斯诺克147永久套餐」，247GB不过期买断制，无月租清零焦虑，轻度查资料与长备用首选。',
      recommendedPackage: { price: '¥147', cycle: '247GB 不过期一次性' },
      features: ['2020老牌运营', 'VLESS协议', '不限同时在线设备', '多国节点覆盖'],
      affLink: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
      promoCode: 'AMM'
    };
  }

  // Scenario 2: Budget under 10
  if (selectedBudget.value === 'budget') {
    return {
      name: '光速云 · 轻量版',
      slug: 'guangsu-cloud-iepl-vless',
      score: 96,
      lineType: 'IEPL 专线',
      reason: '年付折合约 8 元/月，享受纯正内网专线与 VLESS 架构，性价比超越同价位普通公网中转。',
      recommendedPackage: { price: '¥8 / 月', cycle: '年付 ¥99 (69GB/月)' },
      features: ['全节点晚高峰不卡', '支持自研客户端', '支持Clash/小火箭导入', '优惠码 AMM'],
      affLink: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
      promoCode: 'AMM'
    };
  }

  // Scenario 3: Easy App for Newbies
  if (selectedDevice.value === 'app') {
    return {
      name: '飞猫云',
      slug: 'feimao-cloud-app-review',
      score: 95,
      lineType: '专属免配置客户端',
      reason: '专属定制客户端下载登录即用，免除手动导入订阅链接与规则配置繁琐，极适合非技术新手。',
      recommendedPackage: { price: '¥7 / 月起', cycle: '年付学生版 ¥84' },
      features: ['一键智能连接', '自动优选节点', '支持4K流媒体', '优惠码 flycat888'],
      affLink: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
      promoCode: 'flycat888'
    };
  }

  // Scenario 4: Cross-border Commerce or Gaming
  if (selectedScenario.value === 'business' || selectedBudget.value === 'custom') {
    return {
      name: '光速云 · 定制版',
      slug: 'guangsu-cloud-iepl-vless',
      score: 98,
      lineType: '全球 IPLC 独享专线',
      reason: '为跨境企业与外贸团队分配专属原生 IP 与独立带宽，彻底规避亚马逊店铺关联与 TikTok 直播黑屏风控。',
      recommendedPackage: { price: '¥680 / 月', cycle: '500GB 独享带宽' },
      features: ['7x24小时一对一技术运维', '独享原生IP', '超低抖动', '支持对公账单'],
      affLink: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
      promoCode: 'AMM'
    };
  }

  // Default balanced master: 光速云极速版 / 暮光加速
  if (selectedScenario.value === 'gaming') {
    return {
      name: '暮光加速',
      slug: 'muguang-speed-bgp-review',
      score: 94,
      lineType: 'BGP 智能调度专线',
      reason: 'BGP 智能路由与专线级出口，往返抖动极低，晚高峰实测 509Mbps，电竞外服联机极低丢包。',
      recommendedPackage: { price: '¥20 / 月', cycle: '基础版 120GB/月' },
      features: ['全平台兼容', '多设备并发', '7x24真人客服', '优惠码 muguang5555'],
      affLink: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
      promoCode: 'muguang5555'
    };
  }

  // Balanced default (ChatGPT/Streaming)
  return {
    name: '光速云 · 极速版',
    slug: 'guangsu-cloud-iepl-vless',
    score: 98,
    lineType: 'IEPL 内网专线 + 原生IP',
    reason: '配备高纯净原生 IP 资源池，原生解锁 ChatGPT、Claude 3.5 Sonnet 与 Netflix 4K 全区，晚高峰实测高达 529Mbps。',
    recommendedPackage: { price: '¥25 / 月', cycle: '168GB 高速流量' },
    features: ['晚高峰 22ms 极速实测', '全平台客户端适配', '不限设备数量', '专属优惠码 AMM'],
    affLink: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    promoCode: 'AMM'
  };
});
</script>

<style scoped>
.calculator-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.75rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
}

.calc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
}

.calc-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  background: #eff6ff;
  color: #2563eb;
  border-radius: 6px;
  letter-spacing: 0.05em;
  font-family: monospace;
}

.calc-section {
  margin-bottom: 1.5rem;
}

.calc-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}

.option-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.85rem;
  background: #f8fafc;
  cursor: pointer;
  transition: all 0.2s ease;
}

.option-card:hover {
  border-color: #93c5fd;
  background: #fff;
}

.option-card.active {
  border-color: #2563eb;
  background: #eff6ff;
  box-shadow: 0 0 0 1px #2563eb;
}

.opt-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.opt-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #0f172a;
}

.opt-desc {
  font-size: 0.76rem;
  color: #64748b;
  margin-top: 0.2rem;
  line-height: 1.4;
}

.chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip-btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  cursor: pointer;
  transition: all 0.15s ease;
}

.chip-btn:hover {
  background: #f8fafc;
}

.chip-btn.chip-active {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}

.results-box {
  margin-top: 1.75rem;
  border-top: 2px dashed #e2e8f0;
  padding-top: 1.5rem;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.result-card {
  background: #0b1120;
  border: 1px solid #1e293b;
  border-radius: 10px;
  padding: 1.5rem;
  color: #f8fafc;
}

.result-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 1rem;
}

.match-score {
  font-size: 0.75rem;
  font-weight: 700;
  background: #064e3b;
  color: #34d399;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.result-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
}

.result-tag {
  font-size: 0.75rem;
  background: #1e293b;
  color: #38bdf8;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.result-desc {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 0.5rem;
  line-height: 1.6;
}

.result-price-box {
  text-align: right;
  flex-shrink: 0;
}

.price-val {
  font-size: 1.5rem;
  font-weight: 800;
  color: #f59e0b;
  font-family: monospace;
}

.price-cycle {
  font-size: 0.78rem;
  color: #94a3b8;
}

.result-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.feat-pill {
  font-size: 0.78rem;
  background: #131d33;
  color: #38bdf8;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #1e293b;
}

.result-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid #1e293b;
}

.calc-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #2563eb;
  color: #fff !important;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.calc-cta-btn:hover {
  background: #1d4ed8;
}

.calc-review-link {
  font-size: 0.85rem;
  color: #94a3b8;
  text-decoration: underline;
}

.calc-review-link:hover {
  color: #ffffff;
}

.calc-promo-tag {
  font-size: 0.8rem;
  color: #fbbf24;
  margin-left: auto;
}

.calc-promo-tag code {
  color: #fbbf24;
  background: #78350f;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
}

@media (max-width: 640px) {
  .result-top {
    flex-direction: column;
  }
  .result-price-box {
    text-align: left;
    margin-top: 0.5rem;
  }
}
</style>
