import { memo } from "react";

const style = {
	height: "200px",
	backgroundColor: "wheat",
};

export const Child4 = memo(() => {
	console.log("Child4 レンダリング");

	return (
		<div style={style}>
			<p>Child4</p>
		</div>
	);
});
