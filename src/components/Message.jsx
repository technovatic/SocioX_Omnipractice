// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const profiles = [
  {
    id: 1,
    name: 'Mihika Yadav',
    handle: '@MihikaTries',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/4218/4218292.png', 
    chats: [
      { sender: 'Mihika', message: 'Hi there!', date: '2024-06-01' },
      { sender: 'You', message: 'Hello! How are you?', date: '2024-06-01' },
      { sender: 'Mihika', message: 'I am good, what about you?', date: '2024-06-01' },
      { sender: 'You', message: 'I am doing well, thanks!', date: '2024-06-01' },
      { sender: 'Mihika', message: 'Great to hear!', date: '2024-06-01' },
      { sender: 'You', message: 'What are you up to?', date: '2024-06-01' },
      { sender: 'Mihika', message: 'Just working on some projects.', date: '2024-06-01' },
    ],
  },
  {
    id: 2,
    name: 'Sheetal Jain',
    handle: '@Sheetal2205',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/4218/4218292.png', 
    chats: [
      { sender: 'Sheetal', message: 'Hey there!', date: '2024-05-25' },
      { sender: 'You', message: 'Hi Sheetal!', date: '2024-05-25' },
      { sender: 'Sheetal', message: 'I was just going through your X account.', date: '2024-05-25' },
      { sender: 'You', message: 'Oh nice! What did you think?', date: '2024-05-25' },
      { sender: 'Sheetal', message: 'It\'s pretty interesting!', date: '2024-05-25' },
      { sender: 'You', message: 'Thank you!', date: '2024-05-25' },
      { sender: 'Sheetal', message: 'You\'re welcome!', date: '2024-05-25' },
    ],
  },
  {
    id: 3,
    name: 'Nitesh Singh',
    handle: '@nitesh_singh5',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/145/145867.png', 
    verified: true,
    chats: [
      { sender: 'Nitesh', message: 'Hey Notes!', date: '2024-03-17' },
      { sender: 'You', message: 'Hi Nitesh!', date: '2024-03-17' },
      { sender: 'Nitesh', message: 'Vishal here, nice to meet you.', date: '2024-03-17' },
      { sender: 'You', message: 'Nice to meet you too!', date: '2024-03-17' },
      { sender: 'Nitesh', message: 'What\'s up?', date: '2024-03-17' },
      { sender: 'You', message: 'Just working on some stuff.', date: '2024-03-17' },
      { sender: 'Nitesh', message: 'Cool!', date: '2024-03-17' },
    ],
  },
  {
    id: 4,
    name: 'Berkay',
    handle: '@cankiranberkay',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/145/145867.png', 
    chats: [
      { sender: 'Berkay', message: 'You sent a link.', date: '2023-12-08' },
      { sender: 'You', message: 'Yes, check it out.', date: '2023-12-08' },
      { sender: 'Berkay', message: 'Looks interesting!', date: '2023-12-08' },
      { sender: 'You', message: 'Glad you like it!', date: '2023-12-08' },
      { sender: 'Berkay', message: 'Thanks for sharing.', date: '2023-12-08' },
      { sender: 'You', message: 'No problem!', date: '2023-12-08' },
      { sender: 'Berkay', message: 'Have a great day!', date: '2023-12-08' },
    ],
  },
  {
    id: 5,
    name: 'Rithik Roshan',
    handle: '@krizzzz',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 
    chats: [
      { sender: 'Ruthwik', message: 'Hey there!', date: '2024-02-20' },
      { sender: 'You', message: 'Hi Ruthwik!', date: '2024-02-20' },
      { sender: 'Ruthwik', message: 'How is everything going?', date: '2024-02-20' },
      { sender: 'You', message: 'All good here!', date: '2024-02-20' },
      { sender: 'Ruthwik', message: 'Great to know!', date: '2024-02-20' },
    ],
  },
  {
    id: 6,
    name: 'Arjun Varma',
    handle: '@arjunvarma',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    chats: [
      { sender: 'Arjun', message: 'Hello!', date: '2024-04-15' },
      { sender: 'You', message: 'Hi Arjun!', date: '2024-04-15' },
      { sender: 'Arjun', message: 'Long time no see.', date: '2024-04-15' },
      { sender: 'You', message: 'Yes, been a while.', date: '2024-04-15' },
      { sender: 'Arjun', message: 'Let\'s catch up soon.', date: '2024-04-15' },
    ],
  },
  {
    id: 7,
    name: 'Saanvi Kapoor',
    handle: '@saanvikapoor',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
    chats: [
      { sender: 'Saanvi', message: 'Hi!', date: '2024-05-01' },
      { sender: 'You', message: 'Hello Saanvi!', date: '2024-05-01' },
      { sender: 'Saanvi', message: 'How have you been?', date: '2024-05-01' },
      { sender: 'You', message: 'I\'ve been good. How about you?', date: '2024-05-01' },
      { sender: 'Saanvi', message: 'Doing well, thanks!', date: '2024-05-01' },
    ],
  },
  {
    id: 8,
    name: 'Virendra Kapoor',
    handle: '@virzzkapoor',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
    chats: [
      { sender: 'Viru', message: 'Hi!', date: '2024-05-01' },
      { sender: 'You', message: 'Hello Brother', date: '2024-05-01' },
      { sender: 'Viru', message: 'Congratulations on UPSC Result?', date: '2024-05-01' },
      { sender: 'You', message: 'Thank you I have scored AIR 30', date: '2024-05-01' },
      { sender: 'Viru', message: 'Thats Amazing All the Best', date: '2024-05-01' },
    ],
  },
  {
    id: 9,
    name: 'Ronita Chaudhary',
    handle: '@RoniBikerz',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
    chats: [
      { sender: 'Ronita', message: 'I have purchase New Bike', date: '2024-05-01' },
      { sender: 'You', message: 'Wow, Congrats which model and which bike', date: '2024-05-01' },
      { sender: 'Ronita', message: 'Kawasaki Ninja 250', date: '2024-05-01' },
      { sender: 'You', message: 'Lets have a ride on this weekend', date: '2024-05-01' },
      { sender: 'Ronita', message: 'Sure Lets do it', date: '2024-05-01' },
    ],
  },
];

const Message = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [visibleDates, setVisibleDates] = useState({});
  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    const newStatuses = {};
    profiles.forEach(profile => {
      newStatuses[profile.id] = Math.random() < 0.5 ? 'online' : 'offline';
    });
    setStatuses(newStatuses);
  }, []);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() || file) {
      const newMessage = {
        sender: 'You',
        message,
        date: new Date().toISOString().split('T')[0],
      };
      setSelectedProfile(prevState => ({
        ...prevState,
        chats: [...prevState.chats, newMessage],
      }));
      setMessage('');
      setFile(null);
    }
  };

  const toggleDateVisibility = (index) => {
    setVisibleDates(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:flex-row">
      <div className="w-full h-full md:w-2/5 bg-gray-300 p-4 mb-4 md:mb-0 md:mr-4">
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search Direct Messages"
            className="w-full p-2 border border-gray-300 rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded">🔍</button>
        </div>
        <ul>
          {filteredProfiles.map(profile => (
            <li
              key={profile.id}
              className={`p-2 mb-2 cursor-pointer ${selectedProfile?.id === profile.id ? 'bg-blue-200' : 'bg-white'} rounded`}
              onClick={() => setSelectedProfile(profile)}
            >
              <div className="flex items-center">
                <img src={profile.profilePicture} alt={profile.name} className="w-10 h-10 rounded-full mr-2" />
                <div className="flex flex-col">
                  <div className="font-bold text-left">{profile.name}</div>
                  <div className="text-sm text-gray-500 text-left">{profile.handle}</div>
                </div>
                <div className="ml-auto flex items-center">
                  <span className={`w-3 h-3 rounded-full ${statuses[profile.id] === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-3/5 p-4 flex flex-col">
        {selectedProfile ? (
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-4 bg-gray-700 p-2 rounded">
              <div className="flex items-center">
                <img src={selectedProfile.profilePicture} alt={selectedProfile.name} className="w-12 h-12 rounded-full mr-2" />
                <div>
                  <div className="flex items-center">
                    <div className="font-bold text-xl text-white">{selectedProfile.name}</div>
                    {selectedProfile.verified && <span className="ml-2 text-blue-500">✔️</span>}
                  </div>
                  <div className="text-sm text-gray-300">{selectedProfile.handle}</div>
                </div>
              </div>
              <div className="flex items-center">
                <button className="ml-2 p-2 bg-green-500 text-white rounded">📞</button>
                <button className="ml-2 p-2 bg-red-500 text-white rounded">🎥</button>
                <button className="ml-2 p-2 bg-blue-500 text-white rounded">🔍</button>
              </div>
            </div>
            <div className="mb-4">
              {selectedProfile.chats.map((chat, index) => (
                <div key={index} className="mb-2 flex" onClick={() => toggleDateVisibility(index)}>
                  <div className={`inline-block p-2 rounded ${chat.sender === 'You' ? 'bg-green-500 text-white ml-auto' : 'bg-blue-500 text-white mr-auto'}`}>
                    {chat.message}
                  </div>
                  {visibleDates[index] && (
                    <div className="text-gray-400 text-sm">{chat.date}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-gray-800 flex-grow">Select a profile to view messages</div>
        )}
        {selectedProfile && (
          <div className="p-4 bg-gray-800 flex items-center">
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file" className="mr-2 cursor-pointer">📷</label>
            <button className="mr-2 p-2 bg-white rounded">GIF</button>
            <button className="mr-2 p-2 bg-white rounded">😊</button>
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded mr-2"
              placeholder="Start a new message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={handleSendMessage}
            >
              ➤
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;