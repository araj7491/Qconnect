import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Edit2, Mail, Calendar, BookOpen, Users, MessageSquare, Award, Settings } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const stats = [
    { label: 'Study Groups', value: '5', icon: <Users className="text-primary-500" size={24} /> },
    { label: 'Discussions', value: '23', icon: <MessageSquare className="text-primary-500" size={24} /> },
    { label: 'Resources', value: '12', icon: <BookOpen className="text-primary-500" size={24} /> },
    { label: 'Achievements', value: '8', icon: <Award className="text-primary-500" size={24} /> },
  ];

  const recentActivity = [
    { type: 'group', content: 'Joined "Advanced Data Structures" study group', time: '2 hours ago' },
    { type: 'discussion', content: 'Posted in "React Hooks Discussion"', time: '5 hours ago' },
    { type: 'resource', content: 'Shared "JavaScript Best Practices" document', time: '1 day ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src={user?.avatar || 'https://via.placeholder.com/150'}
                alt={user?.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
              <button
                className="absolute bottom-0 right-0 p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                onClick={() => {/* TODO: Implement avatar upload */}}
              >
                <Edit2 size={16} />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-neutral-900 mb-2">{user?.name}</h1>
                  <div className="flex items-center text-neutral-600 space-x-4">
                    <span className="flex items-center">
                      <Mail size={16} className="mr-1" />
                      {user?.email}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      Joined January 2024
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center"
                >
                  <Settings size={16} className="mr-2" />
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </div>
              <p className="mt-4 text-neutral-600">
                Passionate about learning and sharing knowledge. Currently focused on web development and data structures.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    </div>
                    <div className="p-3 bg-primary-50 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - About & Skills */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">About</h2>
                {isEditing ? (
                  <textarea
                    className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    rows={4}
                    placeholder="Tell us about yourself..."
                    defaultValue="Passionate about learning and sharing knowledge. Currently focused on web development and data structures."
                  />
                ) : (
                  <p className="text-neutral-600">
                    Passionate about learning and sharing knowledge. Currently focused on web development and data structures.
                  </p>
                )}
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Skills & Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Data Structures', 'Algorithms'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Right Column - Recent Activity */}
          <div>
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-primary-50 rounded-lg">
                        {activity.type === 'group' && <Users className="text-primary-500" size={16} />}
                        {activity.type === 'discussion' && <MessageSquare className="text-primary-500" size={16} />}
                        {activity.type === 'resource' && <BookOpen className="text-primary-500" size={16} />}
                      </div>
                      <div>
                        <p className="text-neutral-900">{activity.content}</p>
                        <p className="text-sm text-neutral-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;