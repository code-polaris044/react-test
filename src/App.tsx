import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUser";

// コンポーネントの型定義
export const App = () => {
	// useFetchUsersから正しい値を取得
	const { userList, onClickFetchUser, isLoading, isError } = useFetchUsers();

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
