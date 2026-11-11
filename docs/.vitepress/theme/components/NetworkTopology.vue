<template>
  <div class="observatory-card">
    <div class="observatory-header">
      <div class="observatory-title">
        <span>🗺️</span>
        <span>{{ currentBrandName }} 网络链路拓扑解析</span>
      </div>
      <span class="observatory-badge badge-spec">INFRASTRUCTURE PATH</span>
    </div>

    <pre style="background: transparent; color: #38bdf8; font-size: 0.85rem; line-height: 1.6; margin: 0; padding: 0; overflow-x: auto;">
=============================================================================
│  [终端用户]  (Windows / macOS / iOS / Android / 软路由)
│       │
│       ▼  (加密传输: {{ currentProtocol }} | 强混淆防主动探测)
│  [国内中转入口]  &lt;-- {{ currentLineType }} | 隐藏真实IP | BGP智能路由
│       │
│       ════════════ (内网专线跨境直连, 物理隔绝公网防火墙 QoS)
│       │
│       ▼
│  [海外落地机房]  (香港 / 东京 / 新加坡 / 洛杉矶 原生IP出口)
│       │
│       ├─▶ [ChatGPT / Claude / Gemini] (原生住宅/商业IP解锁)
│       ├─▶ [Netflix / Disney+ / YouTube 4K] (全区CDN低延迟加速)
│       └─▶ [外贸出海 / TikTok跨境直播 / 电商多店铺] (低抖动网络保障)
=============================================================================
    </pre>

    <div style="margin-top: 1rem; font-size: 0.8rem; color: #94a3b8;">
      💡 <strong>架构评述</strong>：{{ currentSummary }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { BRANDS } from '../../data/brands';

const props = defineProps<{
  slug?: string;
  brandName?: string;
  protocol?: string;
  lineType?: string;
  summary?: string;
}>();

const brand = computed(() => {
  if (props.slug) return BRANDS.find(b => b.slug === props.slug || b.id === props.slug);
  return null;
});

const currentBrandName = computed(() => props.brandName || brand.value?.name || '机场');
const currentProtocol = computed(() => props.protocol || brand.value?.protocol || 'VLESS / Shadowsocks');
const currentLineType = computed(() => props.lineType || brand.value?.lineType || 'BGP 智能中继优化');
const currentSummary = computed(() => props.summary || '通过国内高可用入口智能路由至海外落地机房，优化主流流媒体与日常国际互联网访问。');
</script>
