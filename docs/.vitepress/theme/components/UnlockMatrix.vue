<template>
  <div class="observatory-card">
    <div class="observatory-header">
      <div class="observatory-title">
        <span>🎬</span>
        <span>{{ currentBrandName }} 流媒体与 AI 解锁矩阵</span>
      </div>
      <span class="observatory-badge badge-spec">SERVICE AVAILABILITY</span>
    </div>

    <div class="unlock-grid">
      <div class="unlock-cell">
        <span class="unlock-service">ChatGPT / OpenAI</span>
        <span :class="['status-tag', getTagClass(currentUnlock.chatgpt)]">{{ currentUnlock.chatgpt }}</span>
      </div>
      <div class="unlock-cell">
        <span class="unlock-service">Claude 3.5 Sonnet</span>
        <span :class="['status-tag', getTagClass(currentUnlock.claude)]">{{ currentUnlock.claude }}</span>
      </div>
      <div class="unlock-cell">
        <span class="unlock-service">Google Gemini</span>
        <span :class="['status-tag', getTagClass(currentUnlock.gemini)]">{{ currentUnlock.gemini }}</span>
      </div>
      <div class="unlock-cell">
        <span class="unlock-service">Netflix (奈飞全区)</span>
        <span :class="['status-tag', getTagClass(currentUnlock.netflix)]">{{ currentUnlock.netflix }}</span>
      </div>
      <div class="unlock-cell">
        <span class="unlock-service">Disney+</span>
        <span :class="['status-tag', getTagClass(currentUnlock.disney)]">{{ currentUnlock.disney }}</span>
      </div>
      <div class="unlock-cell">
        <span class="unlock-service">YouTube 4K/8K</span>
        <span :class="['status-tag', getTagClass(currentUnlock.youtube)]">{{ currentUnlock.youtube }}</span>
      </div>
    </div>

    <!-- Optional unlock screenshots -->
    <div v-if="currentImages && currentImages.length" style="margin-top: 1.25rem; border-top: 1px solid #1e293b; padding-top: 1rem;">
      <div style="font-size: 0.85rem; color: #38bdf8; margin-bottom: 0.75rem; font-weight: 600;">
        📸 流媒体与AI工具原生解锁实测截图 ({{ currentImages.length }} 张存档):
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem;">
        <img
          v-for="(img, i) in currentImages"
          :key="i"
          :src="img"
          :alt="currentBrandName + ' 解锁截图 ' + (i + 1)"
          style="border-radius: 6px; border: 1px solid #334155; width: 100%; object-fit: cover; max-height: 220px;"
          loading="lazy"
        />
      </div>
    </div>

    <div style="margin-top: 0.85rem; font-size: 0.78rem; color: #64748b; text-align: right;">
      [测试工具: RegionRestrictionCheck | 实际解锁受节点动态风控影响]
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { BRANDS } from '../../data/brands';

interface UnlockStatus {
  chatgpt: string;
  claude: string;
  gemini: string;
  netflix: string;
  disney: string;
  youtube: string;
}

const props = defineProps<{
  slug?: string;
  brandName?: string;
  unlock?: UnlockStatus;
  images?: string[];
}>();

const brand = computed(() => {
  if (props.slug) return BRANDS.find(b => b.slug === props.slug || b.id === props.slug);
  return null;
});

const currentBrandName = computed(() => props.brandName || brand.value?.name || '机场');
const currentUnlock = computed(() => props.unlock || brand.value?.unlock || {
  chatgpt: '待核实',
  claude: '待核实',
  gemini: '视节点而定',
  netflix: '待核实',
  disney: '待核实',
  youtube: '支持'
});
const currentImages = computed(() => props.images || brand.value?.unlockImages || []);

function getTagClass(status: string): string {
  if (!status) return 'status-no';
  if (status.includes('支持') || status.includes('解锁') || status.includes('4K')) return 'status-yes';
  if (status.includes('部分') || status.includes('视节点')) return 'status-partial';
  return 'status-no';
}
</script>
