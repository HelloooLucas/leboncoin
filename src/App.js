import React, { useState } from 'react';

import { Login, Messages } from './scenes';
import { Nav } from './components';

function App() {
	const [username, setUsername] = useState('');
  	return (
		<>
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
