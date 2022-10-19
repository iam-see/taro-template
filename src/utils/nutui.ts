import type { App } from 'vue';

import { Button, Toast,Grid,GridItem ,Icon} from "@nutui/nutui-taro";
export function setupNutui(app:App){
app.use(Button)
	.use(Toast)
	.use(Grid)
	.use(GridItem)
	.use(Icon)
}