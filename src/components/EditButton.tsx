import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";
import type { CSSProperties } from "react";

const style: CSSProperties = {
	width: "100px",
	padding: "6px",
	borderRadius: "8px",
};

export const EditButton = (): JSX.Element => {
	const { isAdmin }: { isAdmin: boolean } = useContext(AdminFlagContext);
	//管理でない時に、ボタンを非活性
	const contextValue: {
		isAdmin: boolean;
		setIsAdmin: (value: boolean) => void;
	} = useContext(AdminFlagContext);
	console.log(contextValue);

	return (
		<button type='submit' disabled={!isAdmin} style={style}>
			編集2
		</button>
	);
};
