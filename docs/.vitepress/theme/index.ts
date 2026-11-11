import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './style.css';

import SpeedtestCard from './components/SpeedtestCard.vue';
import UnlockMatrix from './components/UnlockMatrix.vue';
import NetworkTopology from './components/NetworkTopology.vue';
import AffiliateButton from './components/AffiliateButton.vue';
import BrandFilter from './components/BrandFilter.vue';
import AirportCalculator from './components/AirportCalculator.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SpeedtestCard', SpeedtestCard);
    app.component('UnlockMatrix', UnlockMatrix);
    app.component('NetworkTopology', NetworkTopology);
    app.component('AffiliateButton', AffiliateButton);
    app.component('BrandFilter', BrandFilter);
    app.component('AirportCalculator', AirportCalculator);
  }
} satisfies Theme;
