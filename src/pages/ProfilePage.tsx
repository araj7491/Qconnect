import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  User, Mail, Award, Calendar, BookOpen, MessageSquare, 
  FileText, Star, Settings, Edit, ExternalLink 
} from 'lucide-react';

interface TabProps {
  label: string;
  count?: number;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, count, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 border-b-2 font-medium ${
      active 
        ? 'border-primary-500 text-primary-600' 
        : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
    }`}
  >
    {label}
    {count !== undefined && (
      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
        active ? 'bg-primary-100 text-primary-800' : 'bg-neutral-100 text-neutral-700'
      }`}>
        {count}
      </span>
    )}
  </button>
);

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  const userStats = {
    posts: 24,
    comments: 128,
    groups: 5,
    resources: 12,
    contributions: 47,
    reputation: 780,
    joined: 'March 2023',
    badges: [
      { name: 'Top Contributor', description: 'Awarded for exceptional contributions', icon: 'award' },
      { name: 'Problem Solver', description: 'Solved 50+ problems', icon: 'check-circle' },
      { name: 'Helpful Guide', description: 'Provided 100+ helpful answers', icon: 'life-buoy' },
    ],
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-6">
            <CardBody className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="relative mb-4 md:mb-0 md:mr-6">
                  <img 
                    src={user?.avatar || 'https://via.placeholder.com/120'} 
                    alt="Profile" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <button className="absolute bottom-0 right-0 bg-primary-500 text-white p-1.5 rounded-full shadow-sm hover:bg-primary-600 transition-colors">
                    <Edit size={18} />
                  </button>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-neutral-900">{user?.username}</h1>
                      <p className="text-neutral-500 flex items-center">
                        <Mail size={16} className="mr-1" />
                        {user?.email}
                      </p>
                    </div>
                    
                    <div className="flex mt-3 md:mt-0 space-x-3">
                      <Button
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Settings size={16} />
                        <span>Edit Profile</span>
                      </Button>
                      <Button
                        className="flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        <span>Share Profile</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-2 bg-neutral-100 rounded-lg">
                      <p className="text-sm text-neutral-600">Reputation</p>
                      <p className="text-xl font-bold text-primary-700">{userStats.reputation}</p>
                    </div>
                    <div className="text-center p-2 bg-neutral-100 rounded-lg">
                      <p className="text-sm text-neutral-600">Contributions</p>
                      <p className="text-xl font-bold text-primary-700">{userStats.contributions}</p>
                    </div>
                    <div className="text-center p-2 bg-neutral-100 rounded-lg">
                      <p className="text-sm text-neutral-600">Groups</p>
                      <p className="text-xl font-bold text-primary-700">{userStats.groups}</p>
                    </div>
                    <div className="text-center p-2 bg-neutral-100 rounded-lg">
                      <p className="text-sm text-neutral-600">Joined</p>
                      <p className="text-xl font-bold text-primary-700">{userStats.joined}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        {/* Tabs Navigation */}
        <motion.div
          className="border-b border-neutral-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex overflow-x-auto">
            <Tab
              label="Overview"
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            />
            <Tab
              label="Posts"
              count={userStats.posts}
              active={activeTab === 'posts'}
              onClick={() => setActiveTab('posts')}
            />
            <Tab
              label="Comments"
              count={userStats.comments}
              active={activeTab === 'comments'}
              onClick={() => setActiveTab('comments')}
            />
            <Tab
              label="Groups"
              count={userStats.groups}
              active={activeTab === 'groups'}
              onClick={() => setActiveTab('groups')}
            />
            <Tab
              label="Resources"
              count={userStats.resources}
              active={activeTab === 'resources'}
              onClick={() => setActiveTab('resources')}
            />
          </div>
        </motion.div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="mb-6">
                <CardHeader>
                  <h2 className="text-lg font-semibold">About</h2>
                </CardHeader>
                <CardBody>
                  <p className="text-neutral-600 mb-4">
                    Computer Science student passionate about web development and AI. 
                    I enjoy helping others understand complex programming concepts 
                    and collaborating on interesting projects.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Web Development', 'Machine Learning', 'Algorithms', 'Data Science', 'UX Design'].map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git'].map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              {/* Recent Activity */}
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Recent Activity</h2>
                  <Button variant="text" className="text-primary-600">View All</Button>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-neutral-200">
                    {[
                      { icon: <MessageSquare size={16} />, action: 'Answered a question about React hooks', time: '2 hours ago' },
                      { icon: <BookOpen size={16} />, action: 'Joined the "Advanced JavaScript" study group', time: '1 day ago' },
                      { icon: <Star size={16} />, action: 'Received 5 upvotes on your calculus solution', time: '2 days ago' },
                      { icon: <FileText size={16} />, action: 'Shared a resource: "Python Data Science Cheatsheet"', time: '3 days ago' },
                    ].map((activity, index) => (
                      <div key={index} className="p-4 flex">
                        <div className="mr-3 text-primary-500">{activity.icon}</div>
                        <div>
                          <p className="text-neutral-800">{activity.action}</p>
                          <p className="text-neutral-500 text-sm">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Badges */}
              <Card className="mb-6">
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Badges</h2>
                  <Button variant="text" className="text-primary-600">View All</Button>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-neutral-200">
                    {userStats.badges.map((badge, index) => (
                      <div key={index} className="p-4 flex">
                        <div className="mr-3 bg-yellow-100 text-yellow-700 p-2 rounded-full">
                          <Award size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-800">{badge.name}</p>
                          <p className="text-neutral-500 text-sm">{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
              
              {/* Study Groups */}
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Study Groups</h2>
                  <Button variant="text" className="text-primary-600">View All</Button>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-neutral-200">
                    {[
                      { name: 'Algorithms & Data Structures', members: 256 },
                      { name: 'Web Development Club', members: 312 },
                      { name: 'Physics Enthusiasts', members: 143 },
                    ].map((group, index) => (
                      <div key={index} className="p-4">
                        <p className="font-medium text-neutral-800">{group.name}</p>
                        <p className="text-neutral-500 text-sm">{group.members} members</p>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        )}
        
        {activeTab !== 'overview' && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">
              Coming Soon
            </h3>
            <p className="text-neutral-600 mb-6">
              This section is under development. Check back later!
            </p>
            <Button onClick={() => setActiveTab('overview')}>
              Go back to Overview
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;