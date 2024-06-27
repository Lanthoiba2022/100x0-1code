type User123 = {
    id: string;
    name: string;
  }
  
  type Users = Record<string, User123>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); 