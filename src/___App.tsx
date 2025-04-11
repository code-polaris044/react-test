import { useEffect, useState } from "react";
import { ListItem } from "./components/Listitem";
import axios from "axios";
import type { User } from "./types/user";

export const App = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		axios.get<User[]>("http://localhost:5001/users/8-1").then((res) => {
			setUsers(res.data);
		});
	}, []);

	return (
		<div>
			{users.map((user) => (
				<ListItem
					key={user.id}
					id={user.id}
					name={user.name}
					age={user.age}
					personalColor={user.personalColor}
				/>
			))}
		</div>
	);
};
