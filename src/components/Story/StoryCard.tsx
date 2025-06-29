
import React, { useState } from 'react';
import { Heart, Message, Share, User } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  author: {
    name: string;
    age: number;
    avatar?: string;
  };
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

interface StoryCardProps {
  story: Story;
  onLike: (storyId: string) => void;
  onComment: (storyId: string) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onLike, onComment }) => {
  const [isLiked, setIsLiked] = useState(story.isLiked);
  const [likeCount, setLikeCount] = useState(story.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    onLike(story.id);
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const posted = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - posted.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-pink-100">
      {/* Author Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
            {story.author.avatar ? (
              <img 
                src={story.author.avatar} 
                alt={story.author.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 text-white" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{story.author.name}</h3>
            <p className="text-sm text-gray-500">Age {story.author.age} • {formatTimeAgo(story.timestamp)}</p>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{story.title}</h2>
        
        {story.imageUrl && (
          <div className="mb-4 rounded-xl overflow-hidden">
            <img 
              src={story.imageUrl} 
              alt={story.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <p className="text-gray-700 leading-relaxed text-base">{story.content}</p>
      </div>

      {/* Actions */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              isLiked 
                ? 'bg-pink-100 text-pink-600 hover:bg-pink-200' 
                : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-pink-600' : ''}`} />
            <span className="font-medium">{likeCount}</span>
          </button>

          <button
            onClick={() => onComment(story.id)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            <Message className="h-5 w-5" />
            <span className="font-medium">{story.comments}</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200">
            <Share className="h-5 w-5" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
