import React from "react";
import styled from "styled-components";

export const StyleComponents = () => {
	return (
		<SContainer>
			<STitle>StylesComponentsです</STitle>
			<SButton>ボタン</SButton>
		</SContainer>
	);
};

const SContainer = styled.div`
	padding: 2rem;
	background-color: green;
	border-radius: 8px;
`;

const STitle = styled.p`
	color: #2c3e50;
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;

const SButton = styled.button`
	background-color: #3498db;
	color: white;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background-color: #2980b9;
	}
`;
