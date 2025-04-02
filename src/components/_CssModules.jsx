import classes from "./../sass/CssModules.module.scss";

export const CssModules = () => {
	return (
		<div className={classes.wrap}>
			<p className={classes.text}>CSS moduleです</p>
			<button type='submit' className={classes.button}>
				ボタン
			</button>
		</div>
	);
};
