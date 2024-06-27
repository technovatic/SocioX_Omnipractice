/* eslint-disable no-unused-vars */
import React from 'react';

const Post = () => {
  return (
      <div class="bg-white border rounded-lg shadow-sm p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
    <div className="flex items-start space-x-3">
    <img
      className="w-12 h-12 rounded-full"
      src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
      alt="User Avatar"
    />
    <div className="flex-1">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-base lg:text-lg xl:text-xl">Dhanian</span>
        <span className="text-gray-500 text-sm lg:text-base xl:text-lg">@e_opore</span>
        <span className="text-gray-500 text-sm lg:text-base xl:text-lg">· 15h</span>
      </div>
      <p className="mt-1 text-sm lg:text-base xl:text-lg">
        Essential VS Code Extensions for Front-End Development in 2024
        <br /><br />
        These extensions will make you a Pro and make you a Superhero in the market.
        <br /><br />
        To get them:
        <br />
        • Like and repost
        <br />
        • Follow me so that I can DM you
        <br />
        • Reply Extension
      </p>
      <img
        className="mt-3 rounded-lg w-full"
        src="https://code.visualstudio.com/assets/updates/1_58/terminal-editor-grid.png"
        alt="Post Image"
      />
      <div className="flex justify-between mt-3 text-gray-500 text-sm lg:text-base xl:text-lg">
        <div className="flex items-center space-x-1 hover:text-blue-500">
          <i className="far fa-comment"></i>
          <span>88</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-green-500">
          <i className="fas fa-retweet"></i>
          <span>61</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-red-500">
          <i className="far fa-heart"></i>
          <span>220</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-gray-700">
          <i className="fas fa-chart-bar"></i>
          <span>14K</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-gray-700">
          <i className="far fa-bookmark"></i>
        </div>
        <div className="flex items-center space-x-1 hover:text-gray-700">
          <i className="fas fa-share"></i>
        </div>
      </div>
    </div>
  </div>
</div>

const PostWithoutImage = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start space-x-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
          alt="User Avatar"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">vishal</span>
            <span className="text-gray-500">@creatovatic</span>
            <span className="text-gray-500">· 8h</span>
          </div>
          <p className="mt-1">
            Yes, Twitter is fun with followers.
            <br /><br />
            If youre in tech, say hi,
            <br /><br />
            lets connect... 😊
          </p>
          <div className="flex justify-between mt-3 text-gray-500">
            <div className="flex items-center space-x-1 hover:text-blue-500">
              <i className="far fa-comment"></i>
              <span>349</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-green-500">
              <i className="fas fa-retweet"></i>
              <span>7</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-red-500">
              <i className="far fa-heart"></i>
              <span>459</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-chart-bar"></i>
              <span>36K</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="far fa-bookmark"></i>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-share"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostAnushka = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start space-x-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
          alt="User Avatar"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">Anushka</span>
            <span className="text-gray-500">@ai_anushka</span>
            <span className="text-gray-500">· 2h</span>
          </div>
          <p className="mt-1">
            AI is transforming the future of technology. Its exciting to see how machine learning and deep learning are making breakthroughs every day!
            <br /><br />
            #AI #MachineLearning #DeepLearning
          </p>
          <div className="flex justify-between mt-3 text-gray-500">
            <div className="flex items-center space-x-1 hover:text-blue-500">
              <i className="far fa-comment"></i>
              <span>120</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-green-500">
              <i className="fas fa-retweet"></i>
              <span>54</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-red-500">
              <i className="far fa-heart"></i>
              <span>340</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-chart-bar"></i>
              <span>12K</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="far fa-bookmark"></i>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-share"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostHarpreet = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start space-x-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
          alt="User Avatar"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">Harpreet</span>
            <span className="text-gray-500">@green_harpreet</span>
            <span className="text-gray-500">· 6h</span>
          </div>
          <p className="mt-1">
            Trees are the lungs of our planet. Plant more trees and help combat climate change. Every small step counts.
            <br /><br />
            #ClimateChange #GoGreen #TreePlantation
          </p>
          <div className="flex justify-between mt-3 text-gray-500">
            <div className="flex items-center space-x-1 hover:text-blue-500">
              <i className="far fa-comment"></i>
              <span>89</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-green-500">
              <i className="fas fa-retweet"></i>
              <span>30</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-red-500">
              <i className="far fa-heart"></i>
              <span>190</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-chart-bar"></i>
              <span>8K</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="far fa-bookmark"></i>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-share"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostRashid = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start space-x-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
          alt="User Avatar"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">Rashid</span>
            <span className="text-gray-500">@startup_rashid</span>
            <span className="text-gray-500">· 1d</span>
          </div>
          <p className="mt-1">
            Startups are the heart of innovation. If you have a dream, chase it. The journey might be tough but its worth it.
            <br /><br />
            #StartupLife #Entrepreneurship #Innovation
          </p>
          <div className="flex justify-between mt-3 text-gray-500">
            <div className="flex items-center space-x-1 hover:text-blue-500">
              <i className="far fa-comment"></i>
              <span>145</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-green-500">
              <i className="fas fa-retweet"></i>
              <span>75</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-red-500">
              <i className="far fa-heart"></i>
              <span>320</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-chart-bar"></i>
              <span>18K</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="far fa-bookmark"></i>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700">
              <i className="fas fa-share"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="w-full max-w-xl">
        {/* Post input and action buttons section */}
        <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-center space-x-3 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
              alt="User Avatar"
            />
            <input
              type="text"
              placeholder="What is happening?!"
              className="flex-1 border-none rounded-lg p-2 outline-none bg-gray-100"
            />
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Post</button>
          </div>
          
          {/* Action buttons */}
          <div className="flex space-x-4 mt-4 text-blue-500">
            <button className="flex flex-col items-center hover:text-blue-700">
              <i className="fas fa-image fa-1x"></i>
            </button>
            <button className="flex flex-col items-center hover:text-blue-700">
              <i className="fas fa-gift fa-1x"></i>
            </button>
            <button className="flex flex-col items-center hover:text-blue-700">
              <i className="fas fa-poll fa-1x"></i>
            </button>
            <button className="flex flex-col items-center hover:text-blue-700">
              <i className="fas fa-smile fa-1x"></i>
            </button>
            <button className="flex flex-col items-center hover:text-blue-700">
              <i className="fas fa-camera fa-1x"></i>
            </button>
            <button className="flex flex-col items-center hover:text-blue-700">
              <i className="fas fa-map-marker-alt fa-1x"></i>
            </button>
          </div>
        </div>

        {/* Post components */}
        <Post />
        <PostWithoutImage />
        <PostAnushka />
        <PostHarpreet />
        <PostRashid />
      </div>
    </div>
  );
};

export default Dashboard;
