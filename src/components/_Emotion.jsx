/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "styled-components";

export const Emotion = () => {
	//scssの書き方
	const containerStyle = css`
		padding: 2rem;
		background-color: #e9e9e9;
		border-radius: 8px;
	`;
	//インラインスタイルの書き方
	const titleStyle = css({
		color: "#2c3e50",
		fontSize: "1.2rem",
		marginBottom: "1rem",
	});

	return (
		<div css={containerStyle}>
			<p css={titleStyle}>emotionです</p>
			<SButton>ボタン</SButton>
		</div>
	);
};

const SButton = styled.button`
	background-color: blue;
	color: white;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background-color: #2980b9;
	}
`;
