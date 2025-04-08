// import React, { Fragment } from 'react';
// import { createRoot } from 'react-dom/client';
// import { App } from './App';

// export default App;

// createRoot(document.getElementById('root')).render(<App />);

import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
	<AdminFlagProvider>
		<App />
	</AdminFlagProvider>
);
