
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryForm from '../components/Story/StoryForm';
import { useToast } from '@/hooks/use-toast';

const Create = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStorySubmit = async (storyData: { title: string; content: string; imageUrl?: string }) => {
    console.log('New story submitted:', storyData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Story published! 🎉",
      description: "Your amazing story is now live for everyone to enjoy!",
    });

    // Navigate back to feed after successful submission
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Create Your Story
          </h1>
          <p className="text-gray-600">Share your imagination with the world!</p>
        </div>

        <StoryForm onSubmit={handleStorySubmit} />
        
        <div className="mt-8 bg-white rounded-2xl shadow-md p-6 border border-purple-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Story Tips ✨</h3>
          <div className="space-y-2 text-gray-600">
            <p>• Start with "Once upon a time..." or "Yesterday I discovered..."</p>
            <p>• Use your imagination - anything is possible in your story!</p>
            <p>• Include colorful details about characters and places</p>
            <p>• Add a picture to bring your story to life</p>
            <p>• Remember to be kind and positive in your stories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
