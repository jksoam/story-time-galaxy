
import React, { useState } from 'react';
import { Image, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface StoryFormProps {
  onSubmit: (story: { title: string; content: string; imageUrl?: string }) => void;
}

const StoryForm: React.FC<StoryFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    
    try {
      await onSubmit({
        title: title.trim(),
        content: content.trim(),
        imageUrl: imageUrl.trim() || undefined
      });
      
      // Reset form
      setTitle('');
      setContent('');
      setImageUrl('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-xl">
          <Heart className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Share Your Story</h2>
          <p className="text-gray-600">Tell the world about your amazing adventure!</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-semibold text-gray-700">
            Story Title
          </Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's your story called?"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
            <Image className="h-4 w-4" />
            <span>Story Image (optional)</span>
          </Label>
          <Input
            id="imageUrl"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/your-image.jpg"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content" className="text-sm font-semibold text-gray-700">
            Your Story
          </Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Once upon a time..."
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none transition-all duration-200"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !title.trim() || !content.trim()}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Publishing...' : 'Share Your Story'}
        </Button>
      </form>
    </div>
  );
};

export default StoryForm;
