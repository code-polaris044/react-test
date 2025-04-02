const style = {
	width: "100px",
	padding: "6px",
	boderRadius: "8px",
};

export const EditButton = (props) => {
	const { isAdmin } = props;
	//管理でない時に、ボタンを非活性

	return (
		<button type='submit' disabled={!isAdmin}>
			編集
		</button>
	);
};
