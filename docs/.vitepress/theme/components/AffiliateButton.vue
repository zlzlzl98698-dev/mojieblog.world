<template>
  <div class="affiliate-box">
    <div style="font-size: 0.95rem; font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">
      🚀 访问 {{ currentBrandName }} 官方认证入口
    </div>

    <div v-if="currentPromoCode" style="margin-bottom: 0.75rem; font-size: 0.88rem; color: #b45309; background: #fef3c7; display: inline-block; padding: 0.25rem 0.75rem; border-radius: 4px; border: 1px solid #fde68a;">
      🎁 专属优惠码：<code style="font-weight: 700; color: #b45309; background: transparent;">{{ currentPromoCode }}</code>（结算时填入享额外折扣）
    </div>

    <div>
      <a
        :href="currentUrl"
        target="_blank"
        rel="nofollow sponsored noopener"
        class="aff-btn"
      >
        <span>前往 {{ currentBrandName }} 官网注册选购</span>
        <span>→</span>
      </a>
    </div>

    <div class="aff-disclaimer">
      ⚖️ <strong>合规透明提示</strong>：本链接为推广赞助外链（已配置 <code>rel="sponsored"</code>）。通过该链接注册购买可能为魔戒博客带来运营返利，用于支持服务器与测速节点采购支出，<strong>绝不增加您的任何实际支付费用</strong>。请理性按需消费。
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { BRANDS } from '../../data/brands';

const props = defineProps<{
  slug?: string;
  brandName?: string;
  url?: string;
  promoCode?: string;
}>();

const brand = computed(() => {
  if (props.slug) return BRANDS.find(b => b.slug === props.slug || b.id === props.slug);
  return null;
});

const currentBrandName = computed(() => props.brandName || brand.value?.name || '官方');
const currentUrl = computed(() => props.url || brand.value?.affiliateUrl || 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y');
const currentPromoCode = computed(() => props.promoCode !== undefined ? props.promoCode : (brand.value?.promoCode || ''));
</script>
