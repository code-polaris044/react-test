import { useEffect, useState } from "react";
import { ListItem } from "./components/Listitem";
import axios from "axios";

type User = {
	id: number;
	name: string;
	age: number;
	personalColor: string;
};

export const App = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		axios.get<User[]>("https://example.com/users").then((res) => {
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
