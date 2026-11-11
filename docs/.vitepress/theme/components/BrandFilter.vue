<template>
  <div style="margin: 2rem 0;">
    <!-- Controls Bar -->
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; align-items: center; background: #f8fafc; padding: 1.25rem; border-radius: 10px; border: 1px solid #e2e8f0;">
      <div style="flex: 1; min-width: 240px;">
        <input
          v-model="keyword"
          type="text"
          placeholder="🔍 快速检索机场名称、协议 (VLESS/IEPL)、单价或特性..."
          style="width: 100%; padding: 0.65rem 1rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.92rem; outline: none; background: #fff; transition: border-color 0.2s;"
        />
      </div>

      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button
          v-for="f in filterTabs"
          :key="f.key"
          @click="activeFilter = f.key"
          :class="['filter-btn', activeFilter === f.key ? 'filter-btn-active' : '']"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <!-- Metadata Row -->
    <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.85rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        共检索到 <strong style="color: #0f172a; font-weight: 700;">{{ filteredBrands.length }}</strong> 家主流服务商
        <span v-if="activeFilter !== 'all'" style="margin-left: 0.5rem; color: #2563eb;">(已应用筛选)</span>
      </div>
      <div style="display: flex; gap: 0.75rem; align-items: center; font-size: 0.8rem;">
        <span>🟢 包含晚高峰实测图 (17家)</span>
        <span>🔵 官方技术规格核验 (25家)</span>
      </div>
    </div>

    <!-- Responsive Table -->
    <div class="brand-table-wrapper" style="width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
      <table class="brand-table" style="width: 100%; min-width: 980px;">
        <thead>
          <tr>
            <th style="min-width: 95px; text-align: center; white-space: nowrap;">推荐序</th>
            <th style="min-width: 145px; white-space: nowrap;">品牌名称</th>
            <th style="min-width: 130px; white-space: nowrap;">起步价格</th>
            <th style="min-width: 135px; white-space: nowrap;">线路特性</th>
            <th style="min-width: 125px; white-space: nowrap;">协议支持</th>
            <th style="min-width: 165px; white-space: nowrap;">流媒体与 AI</th>
            <th style="min-width: 110px; text-align: center; white-space: nowrap;">数据状态</th>
            <th style="min-width: 120px; text-align: center; white-space: nowrap;">操作入口</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="b in filteredBrands" :key="b.id">
            <!-- 推荐序 -->
            <td style="text-align: center; vertical-align: middle; white-space: nowrap;">
              <span v-if="b.isPrimary" class="rank-badge rank-primary">⭐ 主推 #1</span>
              <span v-else-if="b.isTop10" class="rank-badge rank-top">TOP {{ b.rank }}</span>
              <span v-else class="rank-badge rank-normal">#{{ b.rank }}</span>
            </td>

            <!-- 品牌名称 -->
            <td style="vertical-align: middle; white-space: nowrap;">
              <a :href="'/reviews/' + b.slug" class="brand-name-link">
                {{ b.name }}
              </a>
              <div v-if="b.promoCode" class="promo-pill">
                券: {{ b.promoCode }}
              </div>
            </td>

            <!-- 起步价格 -->
            <td style="vertical-align: middle; white-space: nowrap;">
              <span class="price-text">{{ b.entryPrice }}</span>
            </td>

            <!-- 线路特性 -->
            <td style="vertical-align: middle; white-space: nowrap;">
              <span class="line-text">{{ b.lineType }}</span>
            </td>

            <!-- 协议支持 -->
            <td style="vertical-align: middle; white-space: nowrap;">
              <span class="protocol-text">{{ b.protocol }}</span>
            </td>

            <!-- 流媒体与 AI -->
            <td style="vertical-align: middle; white-space: nowrap;">
              <div class="unlock-pills-wrap">
                <span v-if="b.unlock.chatgpt === '支持'" class="pill-tag pill-green">GPT 原生</span>
                <span v-else class="pill-tag pill-amber">GPT 部分</span>
                <span class="pill-tag pill-blue">4K 奈飞</span>
              </div>
            </td>

            <!-- 数据状态 -->
            <td style="text-align: center; vertical-align: middle; white-space: nowrap;">
              <span v-if="b.hasSpeedtestImage" class="status-pill status-measured">
                🟢 实测图包
              </span>
              <span v-else class="status-pill status-spec">
                🔵 架构核验
              </span>
            </td>

            <!-- 操作入口 -->
            <td style="text-align: center; vertical-align: middle; white-space: nowrap;">
              <a :href="'/reviews/' + b.slug" class="brand-table-action-btn">
                <span>评测报告</span>
                <span>→</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { BRANDS } from '../../data/brands';

const keyword = ref('');
const activeFilter = ref('all');

const filterTabs = [
  { key: 'all', label: '全部 42 家' },
  { key: 'measured', label: '🟢 包含实测图 (17家)' },
  { key: 'top10', label: '⭐ TOP 10 核心梯队' },
  { key: 'iepl', label: '⚡ IEPL/IPLC 专线' },
  { key: 'budget', label: '💰 平民月付/低价' }
];

const filteredBrands = computed(() => {
  return BRANDS.filter(b => {
    // text search
    if (keyword.value.trim()) {
      const q = keyword.value.toLowerCase().trim();
      const match =
        b.name.toLowerCase().includes(q) ||
        b.protocol.toLowerCase().includes(q) ||
        b.lineType.toLowerCase().includes(q) ||
        b.entryPrice.toLowerCase().includes(q) ||
        (b.promoCode && b.promoCode.toLowerCase().includes(q));
      if (!match) return false;
    }

    // tab filter
    if (activeFilter.value === 'measured') return b.hasSpeedtestImage;
    if (activeFilter.value === 'top10') return b.isTop10;
    if (activeFilter.value === 'iepl') return b.lineType.includes('专线') || b.lineType.includes('IEPL') || b.lineType.includes('IPLC');
    if (activeFilter.value === 'budget') return b.entryPrice.includes('8') || b.entryPrice.includes('7') || b.entryPrice.includes('5') || b.entryPrice.includes('15') || b.entryPrice.includes('20');

    return true;
  });
});
</script>

<style scoped>
.filter-btn {
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  font-size: 0.84rem;
  font-weight: 600;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.filter-btn:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
}

.filter-btn-active {
  background: #2563eb !important;
  color: #ffffff !important;
  border-color: #2563eb !important;
}

.brand-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 1.25rem 0;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
  background: #ffffff;
}

.brand-table {
  width: 100%;
  min-width: 900px;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.9rem;
  text-align: left;
}

.brand-table th {
  background: #f8fafc;
  color: #1e293b;
  font-weight: 700;
  padding: 0.9rem 0.85rem;
  border-bottom: 2px solid #cbd5e1;
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 2;
}

.brand-table td {
  padding: 0.85rem 0.85rem;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  white-space: nowrap;
}

.brand-table tr:hover {
  background: #f8fafc;
}

.rank-badge {
  display: inline-block;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
  line-height: 1.2;
}

.rank-primary {
  background: #fef3c7;
  color: #b45309;
  border: 1px solid #fde68a;
  box-shadow: 0 1px 2px rgba(180, 83, 9, 0.1);
}

.rank-top {
  background: #e0f2fe;
  color: #0369a1;
  border: 1px solid #bae6fd;
}

.rank-normal {
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #e2e8f0;
}

.brand-name-link {
  font-weight: 700;
  color: #0f172a;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-block;
}

.brand-name-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

.promo-pill {
  font-size: 0.75rem;
  color: #059669;
  background: #ecfdf5;
  display: inline-block;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  border: 1px solid #a7f3d0;
  margin-top: 0.2rem;
  line-height: 1.2;
}

.price-text {
  font-weight: 700;
  color: #dc2626;
  font-size: 0.9rem;
  font-family: monospace;
}

.line-text {
  font-size: 0.85rem;
  color: #334155;
}

.protocol-text {
  font-size: 0.85rem;
  color: #475569;
  font-family: monospace;
}

.unlock-pills-wrap {
  display: inline-flex;
  gap: 0.35rem;
  align-items: center;
  white-space: nowrap;
}

.pill-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  line-height: 1.3;
}

.pill-green {
  background: #ecfdf5;
  color: #059669;
  border: 1px solid #a7f3d0;
}

.pill-amber {
  background: #fffbeb;
  color: #d97706;
  border: 1px solid #fde68a;
}

.pill-blue {
  background: #f0f9ff;
  color: #0284c7;
  border: 1px solid #bae6fd;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  white-space: nowrap;
}

.status-measured {
  background: #ecfdf5;
  color: #059669;
  border: 1px solid #a7f3d0;
}

.status-spec {
  background: #f0f9ff;
  color: #0284c7;
  border: 1px solid #bae6fd;
}

.brand-table-action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  white-space: nowrap;
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff !important;
  background: #2563eb;
  text-decoration: none !important;
  transition: all 0.15s ease;
  box-shadow: 0 1px 2px rgba(37, 99, 235, 0.2);
}

.brand-table-action-btn:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(37, 99, 235, 0.3);
}
</style>
