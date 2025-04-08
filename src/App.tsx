import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = (): JSX.Element => {
	//管理者フラグ
	// const [isAdmin, setIsAdmin] = useState(false);
	const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

	//切り替え押下時
	const onClickSwitch = (): void => setIsAdmin(!isAdmin);

	return (
		<div>
			{/*管理者フラグがtrueの時とそれ以外のときで文字出し分け */}
			{isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
			<button type='submit' onClick={onClickSwitch}>
				切り替え
			</button>
			<Card />
		</div>
	);
};
