/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const allUsers = [
  {
    name: "Pyjama Associate",
    username: "@Pyjamahrassociate",
    description: "A #TwitterBot that Tweets Pyjama Associate.",
    verified: false,
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    automated: true
  },
  {
    name: "Rohit Ranjan Kumar",
    username: "@RRK_coder",
    description: "Upcoming Data Analyst @Latentview | Follow for Job & Internship Opportunities | @amazon MLSS'23 | 2X Expert @Kaggle | Ex-Intern @HiCounselor_US ,@PearlThoughts1",
    verified: true,
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png"
  },
  {
    name: "ai Nukala",
    username: "@sAINuk_",
    description: "Product at G2. Built @QueryAi_net. Exploring Food Tech. AI Podcaster",
    verified: false,
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png"
  },
  {
    name: "Shiva Rapolu",
    username: "@shivarapolu01",
    description: "Loves Iron Man and Jarvis | Sharing Insights on leveraging AI, Tech talks & Entrepreneurship | Podcast Lover",
    verified: true,
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png"
  },
  {
    name: "Hemant",
    username: "@may_hemant",
    description: "Software Engineer 👨‍💻 | Computer Vision Guy | AR VR 😎 | Deep Learning on Edge Device | Part-Time Full Stack Developer",
    verified: false,
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png"
  },
  {
    name: "John Doe",
    username: "@john_doe",
    description: "Tech Enthusiast | Blogger | Speaker",
    verified: true,
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png"
  },
  {
    name: "Jane Smith",
    username: "@jane_smith",
    description: "Digital Marketer | SEO Specialist | Content Creator",
    verified: true,
    avatar: "https://cdn-icons-png.flaticon.com/512/4218/4218292.png"
  },
  {
    name: "Alan Turing",
    username: "@alan_turing",
    description: "Father of Computer Science | Mathematician | Cryptanalyst",
    verified: false,
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png"
  },
  {
    name: "Ada Lovelace",
    username: "@ada_lovelace",
    description: "First Computer Programmer | Mathematician | Writer",
    verified: true,
    avatar: "https://cdn-icons-png.flaticon.com/512/4218/4218292.png"
  },
  {
    name: "Grace Hopper",
    username: "@grace_hopper",
    description: "Computer Scientist | United States Navy Rear Admiral | Inventor of COBOL",
    verified: true,
    avatar: "https://cdn-icons-png.flaticon.com/512/4218/4218292.png"
  }
];

const randomUsers = [
  {
    name: "Petar Ivanov",
    username: "@petar_ivanov",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "Practical JavaScript & Software Design tips helping you...",
  },
  {
    name: "Lucky Kumar",
    username: "@lucky_kumar",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "Software Engineer @Google | Youtuber",
  },
  {
    name: "Raj Vikramaditya",
    username: "@raj_vikramaditya",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "SWE-III @ Google | takeUforward",
  },
  {
    name: "Deeksha Pandey",
    username: "@deeksha_pandey",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "SWE at Google | LinkedIn Top Voice'2024 | 150k+ followers",
  },
  {
    name: "Rohit Sharma",
    username: "@hitman_sharma",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "SWE at LinkedIn | LinkedIn Top Voice'2023 | 10k+ followers",
  },
  {
    name: "Virat Kohli",
    username: "@virat_cricketer",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "SDE at Flipkart | LinkedIn Top Analyst'2023 | 100k+ followers",
  },
  {
    name: "Akanksha",
    username: "@Aku_patel",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "DevOps Engineer at Myntra | LinkedIn Top Content Creator'2021 | 250k followers",
  },
  {
    name: "Namrata Deshmukh",
    username: "@namra_desmukh",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "Civil Engineer at L & T | MTech in Water Resource Management",
  },
  {
    name: "Avijnya",
    username: "@avi_cutiest",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "PCB Designer at Samsung",
  },
  {
    name: "Rishabh Shetty",
    username: "@rishabh_actor",
    avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
    description: "Sandalwood Film Actor",
  }
];

const Sidebar = () => {
  return (
    <div className="shadow-md rounded-lg p-4 bg-gray-100 mt-4 mr-4 ml-0 sm:ml-5">
      <h3 className="text-xl font-semibold mb-4">Other Similar Profiles</h3>
      {randomUsers.map((user, index) => (
        <div key={index} className="flex items-center mb-4">
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1 text-left">
            <h4 className="font-bold">{user.name}</h4>
            <p className="text-sm text-gray-600">{user.username}</p>
            <button className="mt-2 px-4 py-1 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Follower = () => {
  const [view, setView] = useState('Following');

  const getUsers = () => {
    switch (view) {
      case 'Verified Followers':
        return allUsers.filter(user => user.verified);
      case 'Followers':
        return allUsers;
      case 'Following':
      default:
        return allUsers;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row ml-6">
      <div className="flex-1 max-w-full mx-4 sm:mx-6 mt-4 px-4 border-l border-r border-gray-300 bg-gray-50">
        <div className="flex justify-around border-b mb-4">
          <button
            onClick={() => setView('Verified Followers')}
            className={`py-2 ${view === 'Verified Followers' ? 'text-black font-semibold border-b-2 border-blue-500' : 'text-gray-600 hover:text-black border-b-2 border-transparent hover:border-blue-500'}`}
          >
            Verified Followers
          </button>
          <button
            onClick={() => setView('Followers')}
            className={`py-2 ${view === 'Followers' ? 'text-black font-semibold border-b-2 border-blue-500' : 'text-gray-600 hover:text-black border-b-2 border-transparent hover:border-blue-500'}`}
          >
            Followers
          </button>
          <button
            onClick={() => setView('Following')}
            className={`py-2 ${view === 'Following' ? 'text-black font-semibold border-b-2 border-blue-500' : 'text-gray-600 hover:text-black border-b-2 border-transparent hover:border-blue-500'}`}
          >
            Following
          </button>
        </div>
        <div className="mt-4">
          {getUsers().map((user, index) => (
            <div key={index} className="flex items-center p-4 border-b">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
              <div className="flex-1 text-left">
                <div className="flex items-center justify-start mb-1">
                  <h4 className="font-bold">{user.name}</h4>
                  {user.verified && (
                    <svg
                      className="ml-1 w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.25 12l-2.656 2.02.49 3.24-3.176-.798L16 22.5l-2.178-2.038-2.178 2.038-1.482-4.038-3.176.798.49-3.24L1.75 12 4.406 9.98l-.49-3.24 3.176.798L8 1.5l2.178 2.038L12.356 1.5 13.838 5.54l3.176-.798-.49 3.24L22.25 12zm-7.1-3.176L12 13.5l-3.15-3.176L10 9l2 2.5 2-2.5 1.15 1.824z"/>
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-600">{user.username}</p>
                <p className="text-sm mt-1">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Follower;
