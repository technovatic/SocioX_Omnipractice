/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaRegComment, FaRetweet, FaHeart, FaComments, FaChartBar, FaBookmark, FaShare } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const articles = [
    {
      title: "Lok Sabha session highlights: INDIA bloc leaders huddle at Kharge's house",
      source: "Hindustan Times",
      time: "1 hour ago",
      
    },
    {
      title: "‘If Afghanistan winning matches in T20 World Cup is a dream, I don’t want to wake up’ – Afghan fans celebrate their glorious march into semifinals",
      source: "The Times of India",
      time: "12 hours ago",
    
    },
    {
      title: "5G spectrum auction: Telcos place bids worth around Rs 11,000 crore on day 1",
      source: "Deccan Herald",
      time: "1 hour ago",
    }
  ];

  const podcasts = [
    {
      title: "Tesla Faces Legal Showdown Over Musk's $56 Billion Pay Package and Billion-Dollar Legal Fees",
      time: "20 hours ago",
      duration: "7 min",
      description: "Tesla Faces Legal Showdown Over Musk's $56 Billion Pay Package and Billion-Dollar Legal Fees"
    },
    {
      title: "Tesla Showdown: Shareholder's Legal Team Demands $1.44 Billion Fee for Musk Pay Case",
      time: "1 day ago",
      duration: "8 min",
      description: "In a heated legal battle, Tesla shareholder Richard Tornetta's legal team has made a bold demand for $1.44 billion in fees after successfully challenging Elon Musk’s controversial 2018..."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-2 border-black px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="bg-cover bg-center h-32" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/05/56/98/92/360_F_556989229_lBBasUTWiFGKyhyeUXiFcQSY0IJYAKRv.jpg)' }}></div>
      
      <div className="flex -mt-12 px-4 sm:px-6">
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-black"
          src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
          alt="Profile"
        />
        <div className="ml-4 flex flex-col justify-center">
          <div className="flex items-end">
            <h1 className="text-lg sm:text-xl font-semibold mt-8">Vishal Kelur</h1>
            <p className="text-gray-600 ml-2">@Creatovatic5</p>
          </div>
          <div className="mt-2 flex space-x-6">
            <div>
              <span className="font-semibold">974</span> Following
            </div>
            <div>
              <span className="font-semibold">393</span> Followers
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 px-4 text-gray-600">
        <div>
          <p>Full Stack Web Developer</p>
          <p>Hubli, Karnataka, India</p>
          <a href="https://iridescent-beignet-23d19c.netlify.app/" className="text-blue-500">https://iridescent-beignet-23d19c.netlify.app/</a>
        </div>
        <p>Joined January 2024</p>
      </div>
      
      {/* Navigation Tabs */}
      <div className="mt-10 border-b">
        <nav className="flex justify-around text-xs sm:text-sm md:text-base">
          <button onClick={() => setActiveTab('posts')} className={`pb-2 ${activeTab === 'posts' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}>Posts</button>
          <button onClick={() => setActiveTab('replies')} className={`pb-2 ${activeTab === 'replies' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}>Replies</button>
          <button onClick={() => setActiveTab('podcasts')} className={`pb-2 ${activeTab === 'podcasts' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}>Podcasts</button>
          <button onClick={() => setActiveTab('articles')} className={`pb-2 ${activeTab === 'articles' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}>Articles</button>
          <button onClick={() => setActiveTab('media')} className={`pb-2 ${activeTab === 'media' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}>Media</button>
          <button onClick={() => setActiveTab('likes')} className={`pb-2 ${activeTab === 'likes' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}>Likes</button>
        </nav>
      </div>

      {/* Content Section */}
      <div className="mt-5 px-4">
        {activeTab === 'posts' && (
          <div id="posts">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="flex space-x-3 border-b py-4">
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
                  alt="Profile"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-semibold">Vishal Kelur</span> <span className="text-gray-600">@VKelur52715</span> <span className="text-gray-600">· {index * 18 + 1}s</span>
                    </div>
                    <div className="text-gray-600">•••</div>
                  </div>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  </p>
                  <div className="flex justify-between mt-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaRegComment className="w-5 h-5" />
                      <span>75</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaRetweet className="w-5 h-5" />
                      <span>59</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaHeart className="w-5 h-5" />
                      <span>220</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaChartBar className="w-5 h-5" />
                      <span>25K</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaBookmark className="w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaShare className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'replies' && (
          <div id="replies">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="flex space-x-3 border-b py-4">
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
                  alt="Profile"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                  <FaComments className="w-5 h-5 text-pink-500" />
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
                      alt="Reply Profile"
                    />
                    <span className="font-semibold">devleader</span>
                    <span className="text-blue-500"></span>
                    <span className="text-gray-600">Replied to your post</span>
                  </div>
                  <p className="mt-1">AI is next revolution of 21st century</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'podcasts' && (
          <div id="podcasts">
            {podcasts.map((podcast, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <h2 className="font-semibold text-lg">{podcast.title}</h2>
                <p className="text-sm text-gray-600">{podcast.time} · {podcast.duration}</p>
                <p className="mt-2">{podcast.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'articles' && (
          <div id="articles">
            {articles.map((article, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <h2 className="font-semibold text-lg">{article.title}</h2>
                <p className="text-sm text-gray-600">{article.source} · {article.time}</p>
                {article.imageUrl && (
                  <img
                    className="w-full mt-2 rounded-lg"
                    src={article.imageUrl}
                    alt={article.title}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'media' && (
          <div id="media" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array(10).fill(0).map((_, index) => (
              <img
                key={index}
                className="w-full h-32 object-cover"
                src={`https://picsum.photos/200/300?random=${index}`}
                alt={`Random ${index}`}
              />
            ))}
          </div>
        )}

        {activeTab === 'likes' && (
          <div id="likes">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="flex space-x-3 border-b py-4">
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
                  alt="Profile"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <FaHeart className="w-5 h-5 text-pink-500" />
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
                      alt="Like Profile"
                    />
                    <span className="font-semibold">likegiver</span>
                    <span className="text-blue-500">✔</span>
                    <span className="text-gray-600">liked your post</span>
                  </div>
                  <p className="mt-1">Great content!</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
