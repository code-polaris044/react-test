import type { FC } from "react";
import type { User } from "./../types/user";

// export const ListItem = (props: User) => {
export const ListItem: FC<User> = (props) => {
	// const { id, name, age, personalColor } = props;
	//デフォルト値の入力(FCが設定してない場合)
	const { id, name, age, personalColor = "gray" } = props;

	return (
		<p style={{ color: personalColor }}>
			{id} : {name}({age})
		</p>
	);
};

//defaultProps非推奨
// ListItem.defaultProps = {
// 	personalColor: "grey",
// };
