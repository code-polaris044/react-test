import { useState } from "react";
// import axios from "axios";
import { useFetchUsers } from "./hooks/useFetchUser";
import { User } from "./types/user"; // 型をインポート

// コンポーネントの型定義
export const App: React.FC = () => {
	// 状態の型を明示的に定義
	const { userList, onClickFetchUser } = useFetchUsers();
	console.log(userList);

	// const [userList, setUserList] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	// APIから取得するデータの型
	type ApiUser = {
		id: number;
		firstname: string;
		lastname: string;
		age: number;
	};

	// const onClickFetchUser = (): void => {
	// 	setIsLoading(true);
	// 	setIsError(false);

	// 	axios
	// 		.get<ApiUser[]>("http://localhost:5001/users/9")
	// 		.then((result) => {
	// 			const users: User[] = result.data.map((user) => ({
	// 				id: user.id,
	// 				name: `${user.lastname} ${user.firstname}`,
	// 				age: user.age,
	// 			}));
	// 			setUserList(users);
	// 		})
	// 		.catch(() => setIsError(true))
	// 		.finally(() => setIsLoading(false));
	// };

	return (
		<div>
			<button type='submit' onClick={onClickFetchUser}>
				ユーザー取得
			</button>
			{isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
			{isLoading ? (
				<p>データ取得中...</p>
			) : (
				userList.map((user) => (
					<p key={user.id}>{`${user.id}: ${user.name}: (${user.age})`}</p>
				))
			)}
		</div>
	);
};

export default App;
