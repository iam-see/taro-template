import { createApp } from 'vue';

import './app.scss';
import { setupStore } from './store';
import { setupNutui } from './utils';

const app = createApp({
	onShow(options) {},
	// 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

setupStore(app);
setupNutui(app);

export default app;
