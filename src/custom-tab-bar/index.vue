<template>
	<view class="tab-bar">
		<view
			class="tab-bar-item"
			:class="{ 'tab-bar-item-active': index === tabbarStore.activeTabIndex }"
			v-for="(item, index) in list"
			:key="index"
			@tap="switchTab(item.pagePath, index)"
		>
			<image
				:src="
					index === tabbarStore.activeTabIndex
						? item.selectedIconPath
						: item.iconPath
				"
			/>
			<view>{{ item.text }}</view>
		</view>
	</view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { useTabbarStore } from '../store';

const tabbarStore = useTabbarStore();

const list = [
	{
		pagePath: '/pages/index/index',
		text: '首页',
		iconPath: '/images/home.png',
		selectedIconPath: '../images/home-on.png',
	},
	{
		pagePath: '/pages/cart/index',
		text: '购物车',
		iconPath: '../images/cart.png',
		selectedIconPath: '../images/cart-on.png',
	},
	{
		pagePath: '/pages/user/index',
		text: '个人中心',
		iconPath: '../images/user.png',
		selectedIconPath: '../images/user-on.png',
	},
];

function switchTab(url, index) {
	tabbarStore.activeTabIndex = index;
	Taro.switchTab({ url });
}
</script>
<style lang="scss">
.tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	background: #fff;
	display: flex;
	padding-bottom: env(safe-area-inset-bottom);
	border-top: 1px solid #c1bebe;
}
.tab-bar-item {
	flex: 1;
	color: #707070;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	image {
		width: 28px;
		height: 28px;
	}
}
.tab-bar-item-active {
	color: #1296db;
}
</style>
