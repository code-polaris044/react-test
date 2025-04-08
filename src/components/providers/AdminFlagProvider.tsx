import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface AdminFlagContextType {
	isAdmin: boolean;
	setIsAdmin: (value: boolean) => void;
}

export const AdminFlagContext = createContext<AdminFlagContextType>({
	isAdmin: false,
	setIsAdmin: () => {},
});

interface AdminFlagProviderProps {
	children: ReactNode;
}

export const AdminFlagProvider = (props: AdminFlagProviderProps) => {
	const { children } = props;

	//動作確認のために適当なオブジェクトを定義
	// const sampleObj = { sampleValue: "テスト" };

	//管理者フラグ
	const [isAdmin, setIsAdmin] = useState(false);

	return (
		<AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
			{children}
		</AdminFlagContext.Provider>
	);
};
