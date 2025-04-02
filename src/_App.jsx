import { useState, useEffect } from "react";
import { ColorMessage } from "./components/_ColoredMessage";
import { CssModules } from "./components/_CssModules";
import { StyledJsx } from "./components/_StyledJsx";
import { StyleComponents } from "./components/_StyleComponents";
import { Emotion } from "./components/_Emotion";
import { TailwindCss } from "./components/_TailWindcss";

export const App = () => {
	console.log("レンダリング");
	const [num, setNum] = useState(0);

	useEffect(() => {
		alert(`現在の数値: ${num}`);
	}, [num]);

	const onClickButton = () => {
		setNum((prev) => prev + 1);
	};

	return (
		<>
			<h1 style={{ color: "red" }}>こんにちは</h1>
			<ColorMessage color='blue'>元気ですか</ColorMessage>
			<ColorMessage color='pink'>元気ですよ</ColorMessage>
			<button type='button' onClick={onClickButton}>
				ボタン
			</button>
			<p>{num}</p>
			<CssModules />
			<StyledJsx />
			<StyleComponents />
			<Emotion />
			<TailwindCss />
		</>
	);
};
