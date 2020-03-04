import React, { useState } from 'react';

import { Login, Messages } from './scenes';
import { Nav } from './components';
import { GlobalStyle } from './style';

function App() {
	const [username, setUsername] = useState('Lucas');
  	return (
		<>
			<GlobalStyle />
			{
				username ? 
					<>
						<Nav username={username} setUsername={setUsername} />
						<Messages username={username} />
					</>
				: <Login setUsername={setUsername} />
			}
		</>
	);
}

export default App;
