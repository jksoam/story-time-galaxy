
import React, { useState, useEffect } from 'react';
import StoryCard from '../components/Story/StoryCard';
import { useToast } from '@/hooks/use-toast';

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

const Feed = () => {
  const { toast } = useToast();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockStories: Story[] = [
      {
        id: '1',
        title: 'The Magic Forest Adventure',
        content: 'Today I went to the forest behind my house and found a talking squirrel! His name was Nutkin and he showed me where the fairies live. They had tiny houses made of flower petals and they invited me for tea. We had acorn cookies and dewdrop lemonade. It was the best adventure ever!',
        imageUrl: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=600&fit=crop',
        author: {
          name: 'Emma',
          age: 8,
          avatar: undefined
        },
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        likes: 15,
        comments: 3,
        isLiked: false
      },
      {
        id: '2',
        title: 'My Pet Dragon',
        content: 'I found a tiny dragon in my backyard! He\'s only as big as my hand and he breathes rainbow fire. I named him Sparkles and he loves to eat marshmallows. He sleeps in a shoebox next to my bed and purrs like a kitten. Mom says he\'s just a lizard, but I know he\'s magical!',
        imageUrl: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=600&fit=crop',
        author: {
          name: 'Alex',
          age: 7,
          avatar: undefined
        },
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        likes: 23,
        comments: 7,
        isLiked: true
      },
      {
        id: '3',
        title: 'The Superhero Banana',
        content: 'At lunch today, my banana started talking to me! It said it was Captain Potassium and it needed my help to save the fruit bowl from the evil vegetables. We had an epic battle against the broccoli army. In the end, we all became friends and decided to make a delicious smoothie together!',
        imageUrl: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=800&h=600&fit=crop',
        author: {
          name: 'Maya',
          age: 6,
          avatar: undefined
        },
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        likes: 18,
        comments: 5,
        isLiked: false
      },
      {
        id: '4',
        title: 'Space Cat Adventure',
        content: 'My cat Whiskers told me a secret - he\'s actually an astronaut from the Cat Planet! Last night he took me on his invisible spaceship to visit his home. All the cats there wear tiny space helmets and they have a giant ball of yarn that\'s actually their moon. We played zero-gravity fetch and ate freeze-dried fish treats!',
        imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop',
        author: {
          name: 'Lucas',
          age: 9,
          avatar: undefined
        },
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        likes: 31,
        comments: 9,
        isLiked: false
      }
    ];

    setTimeout(() => {
      setStories(mockStories);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLike = (storyId: string) => {
    setStories(prev => 
      prev.map(story => 
        story.id === storyId 
          ? { ...story, isLiked: !story.isLiked, likes: story.isLiked ? story.likes - 1 : story.likes + 1 }
          : story
      )
    );
    
    toast({
      title: "Story liked!",
      description: "Your reaction has been shared with the author.",
    });
  };

  const handleComment = (storyId: string) => {
    toast({
      title: "Comment feature coming soon!",
      description: "We're working on making conversations even better.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Amazing Stories
          </h1>
          <p className="text-gray-600">Discover wonderful adventures from young storytellers</p>
        </div>

        <div className="space-y-6">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onLike={handleLike}
              onComment={handleComment}
            />
          ))}
        </div>

        {stories.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-pink-100">
              <Heart className="h-16 w-16 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No stories yet</h3>
              <p className="text-gray-600">Be the first to share an amazing adventure!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
