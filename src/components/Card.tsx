import { EditButton } from "./EditButton";
import type { CSSProperties } from "react";

const style: CSSProperties = {
	width: "300px",
	height: "200px",
	margin: "8px",
	backgroundColor: "#e9dbd0",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
};

export const Card = () => {
	//propsとして管理者フラグを受け取る
	// const { isAdmin } = props;

	return (
		<div style={style}>
			<p>山田太郎</p>
			{/* <EditButton isAdmin={isAdmin} /> */}
			<EditButton />
		</div>
	);
};
