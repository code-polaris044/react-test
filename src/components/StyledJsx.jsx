export const StyledJsx = () => {
	return (
		<>
			<div className='jsx-container'>
				<p className='jsx-title'>Styleed JSXです</p>
				<button type='submit' className='jsx-btn'>
					ボタン
				</button>
			</div>

			<style jsx>{`
				.jsx-container {
					padding: 2rem;
					background-color: red;
					border-radius: 8px;
				}
				.jsx-title {
					color: pink;
					font-size: 1.2rem;
					margin-bottom: 1rem;
				}
				.jsx-btn {
					background-color: #3498db;
					color: white;
					padding: 0.5rem 1rem;
					border: none;
					border-radius: 4px;
					cursor: pointer;
				}
				.jsx-btnhover {
					background-color: #2980b9;
				}
			`}</style>
		</>
	);
};
