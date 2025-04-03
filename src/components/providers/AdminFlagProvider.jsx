import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
	const { childeren } = props;

	//動作確認のために適当なオブジェクトを定義
	const sampleObj = { sampleValue: "テスト" };

	return (
		<AdminFlagContext.Provider value={sampleObj}>
			{childeren}
		</AdminFlagContext.Provider>
	);
};
