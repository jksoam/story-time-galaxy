
import React, { useState } from 'react';
import { User, Heart, Image, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Young Storyteller',
    age: 8,
    bio: 'I love creating magical stories about adventures, friendship, and amazing creatures!',
    avatar: '',
    storiesCount: 12,
    likesReceived: 156,
    favoriteTheme: 'Adventure'
  });

  const [editForm, setEditForm] = useState(profile);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
    toast({
      title: "Profile updated! ✨",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            My Profile
          </h1>
          <p className="text-gray-600">Your storytelling journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                  {profile.avatar ? (
                    <img 
                      src={profile.avatar} 
                      alt={profile.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-white" />
                  )}
                </div>
                
                {!isEditing ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">{profile.name}</h2>
                    <p className="text-indigo-600 font-medium mb-3">Age {profile.age}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{profile.bio}</p>
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</Label>
                      <Input
                        id="name"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        className="text-center"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-sm font-semibold text-gray-700">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={editForm.age}
                        onChange={(e) => setEditForm({...editForm, age: parseInt(e.target.value) || 0})}
                        className="text-center"
                        min="1"
                        max="18"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-sm font-semibold text-gray-700">Bio</Label>
                      <textarea
                        id="bio"
                        value={editForm.bio}
                        onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none text-sm"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSave}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                      >
                        Save
                      </Button>
                      <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100 mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">My Story Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Image className="h-5 w-5 text-pink-600" />
                    <span className="font-medium text-gray-700">Stories Written</span>
                  </div>
                  <span className="text-2xl font-bold text-pink-600">{profile.storiesCount}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-gray-700">Likes Received</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">{profile.likesReceived}</span>
                </div>
                
                <div className="p-3 bg-indigo-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Favorite Theme</p>
                  <p className="font-bold text-indigo-600">{profile.favoriteTheme}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Stories */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">My Recent Stories</h3>
              
              <div className="space-y-4">
                {[
                  { title: "The Magic Forest Adventure", likes: 15, date: "2 days ago" },
                  { title: "My Pet Dragon", likes: 23, date: "5 days ago" },
                  { title: "The Superhero Banana", likes: 18, date: "1 week ago" },
                  { title: "Space Cat Adventure", likes: 31, date: "1 week ago" }
                ].map((story, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div>
                      <h4 className="font-semibold text-gray-800">{story.title}</h4>
                      <p className="text-sm text-gray-500">{story.date}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-pink-600">
                      <Heart className="h-4 w-4" />
                      <span className="font-medium">{story.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Story Achievements 🏆</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-yellow-50 rounded-xl text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <h4 className="font-semibold text-gray-800">First Story</h4>
                  <p className="text-sm text-gray-600">Shared your first adventure</p>
                </div>
                
                <div className="p-4 bg-pink-50 rounded-xl text-center">
                  <div className="text-3xl mb-2">❤️</div>
                  <h4 className="font-semibold text-gray-800">Loved by Many</h4>
                  <p className="text-sm text-gray-600">Received 100+ likes</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-xl text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-semibold text-gray-800">Storyteller</h4>
                  <p className="text-sm text-gray-600">Written 10+ stories</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-xl text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold text-gray-800">Creative Writer</h4>
                  <p className="text-sm text-gray-600">Used images in stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
