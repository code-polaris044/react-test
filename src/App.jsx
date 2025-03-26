import { useState, useEffect } from 'react';
import { ColorMessage } from "./components/ColoredMessage";

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
			<h1 style={ { color: "red" }}>こんにちは</h1>
			<ColorMessage color="blue">元気ですか</ColorMessage>
			<ColorMessage color="pink">元気ですよ</ColorMessage>
			<button type="button" onClick={onClickButton} >ボタン</button>
			<p>{num}</p>
		</>
	);
}

