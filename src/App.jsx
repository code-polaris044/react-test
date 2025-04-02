import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
	//管理者フラグ
	const [isAdmin, setIsAdmin] = useState(false);

	//切り替え押下時
	const onClickSwitch = () => setIsAdmin(!isAdmin);

	return (
		<div>
			{/*管理者フラグがtrueの時とそれ以外のときで文字出し分け */}
			{isAdmin ? <sapn>管理者です</sapn> : <sapn>管理者以外です</sapn>}
			<button type='submit' onClick={onClickSwitch}>
				切り替え
			</button>
			<Card isAdmin={isAdmin} />
		</div>
	);
};
