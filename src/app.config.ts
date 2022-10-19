export default defineAppConfig({
	pages: ['pages/index/index', 'pages/cart/index', 'pages/user/index'],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: '小怪兽的阁楼',
		navigationBarTextStyle: 'black',
	},
	tabBar: {
		color: '#626567',
		selectedColor: '#1296db',
		backgroundColor: '#FBFBFB',
		borderStyle: 'white',
		// custom: true, //有闪动，无法使用自定义底栏
		list: [
			{
				pagePath: 'pages/index/index',
				selectedIconPath: 'images/tabbar/home-on.png',
				iconPath: 'images/tabbar/home.png',
				text: '首页',
			},
			{
				pagePath: 'pages/cart/index',
				selectedIconPath: 'images/tabbar/cart-on.png',
				iconPath: 'images/tabbar/cart.png',
				text: '购物车',
			},
			{
				pagePath: 'pages/user/index',
				selectedIconPath: 'images/tabbar/user-on.png',
				iconPath: 'images/tabbar/user.png',
				text: '我的',
			},
		],
	},
	networkTimeout: {
		request: 10000,
		downloadFile: 10000,
	},
	debug: true,
});
