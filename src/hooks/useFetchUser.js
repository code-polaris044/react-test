import { useState } from "react";
import axios from "axios"; // 正しいインポート方法

// 必要な型定義（TypeScriptを使用する場合）
// interface ApiUser {
//   id: number;
//   firstname: string;
//   lastname: string;
//   age: number;
// }

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

export const useFetchUsers = () => {
	const [userList, setUserList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const onClickFetchUser = () => {
		setIsLoading(true);
		setIsError(false);

		axios
			.get("http://localhost:5001/users/9")
			.then((result) => {
				const users = result.data.map((user) => ({
					id: user.id,
					name: `${user.lastname} ${user.firstname}`,
					age: user.age,
				}));
				setUserList(users);
			})
			.catch((error) => {
				console.error("ユーザー取得エラー:", error);
				setIsError(true);
			})
			.finally(() => setIsLoading(false));
	};

	return { userList, onClickFetchUser, isLoading, isError };
};
