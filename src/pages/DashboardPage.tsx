import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import { BookOpen, Users, MessageSquare, FileText, Bell, Calendar, Star, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const recentActivities = [
    { type: 'comment', content: 'Alice replied to your question about calculus', time: '10 minutes ago' },
    { type: 'upvote', content: 'Your answer in "JavaScript Fundamentals" was upvoted', time: '1 hour ago' },
    { type: 'group', content: 'You were added to "Advanced Data Structures" group', time: '2 hours ago' },
    { type: 'resource', content: 'New study material was added to "Physics 101"', time: '5 hours ago' },
  ];

  const upcomingEvents = [
    { title: 'Group Study: Linear Algebra', date: 'Today, 4:00 PM', joined: true },
    { title: 'Python Workshop', date: 'Tomorrow, 2:00 PM', joined: false },
    { title: 'Biology Quiz Preparation', date: 'Wed, Jul 15, 6:00 PM', joined: true },
  ];

  const popularGroups = [
    { name: 'Computer Science 101', members: 256, topics: 45 },
    { name: 'Calculus Help Center', members: 189, topics: 32 },
    { name: 'Physics Enthusiasts', members: 143, topics: 28 },
  ];

  const savedResources = [
    { title: 'Complete Guide to React Hooks', type: 'PDF', saved: '2 days ago' },
    { title: 'Linear Algebra Cheat Sheet', type: 'Document', saved: '1 week ago' },
    { title: 'Python Data Structures Tutorial', type: 'Video', saved: '2 weeks ago' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-neutral-900">Welcome back, {user?.username}!</h1>
            <p className="text-neutral-500">Here's what's happening in your learning journey.</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-2 mt-4 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                3
              </span>
            </div>
            <Calendar size={20} />
            <Star size={20} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[
                { icon: <Users size={20} />, label: 'Study Groups', value: '5', color: 'bg-primary-500' },
                { icon: <MessageSquare size={20} />, label: 'Discussions', value: '18', color: 'bg-secondary-500' },
                { icon: <FileText size={20} />, label: 'Resources', value: '24', color: 'bg-accent-500' },
                { icon: <Star size={20} />, label: 'Contributions', value: '12', color: 'bg-success-500' },
              ].map((stat, index) => (
                <Card key={index}>
                  <CardBody className="p-4">
                    <div className={`w-8 h-8 rounded-full ${stat.color} text-white flex items-center justify-center mb-2`}>
                      {stat.icon}
                    </div>
                    <p className="text-neutral-500 text-sm">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </CardBody>
                </Card>
              ))}
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Recent Activity</h2>
                  <Link to="/activity" className="text-sm text-primary-600 hover:text-primary-700">
                    View all
                  </Link>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-neutral-200">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="p-4 hover:bg-neutral-50">
                        <div className="flex">
                          <div className="mr-3">
                            {activity.type === 'comment' && <MessageSquare size={18} className="text-primary-500" />}
                            {activity.type === 'upvote' && <Star size={18} className="text-secondary-500" />}
                            {activity.type === 'group' && <Users size={18} className="text-accent-500" />}
                            {activity.type === 'resource' && <FileText size={18} className="text-success-500" />}
                          </div>
                          <div>
                            <p className="text-neutral-800">{activity.content}</p>
                            <p className="text-neutral-500 text-sm">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Upcoming Events</h2>
                  <Link to="/events" className="text-sm text-primary-600 hover:text-primary-700">
                    View calendar
                  </Link>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-neutral-200">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="p-4 hover:bg-neutral-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-neutral-800">{event.title}</p>
                            <p className="text-neutral-500 text-sm flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {event.date}
                            </p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${event.joined ? 'bg-success-100 text-success-700' : 'bg-neutral-100 text-neutral-700'}`}>
                            {event.joined ? 'Joined' : 'Not joined'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Study Groups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Popular Study Groups</h2>
                  <Link to="/study-groups" className="text-sm text-primary-600 hover:text-primary-700">
                    Browse all
                  </Link>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-neutral-200">
                    {popularGroups.map((group, index) => (
                      <div key={index} className="p-4 hover:bg-neutral-50">
                        <div>
                          <p className="font-medium text-neutral-800">{group.name}</p>
                          <div className="flex justify-between text-sm text-neutral-500">
                            <span>{group.members} members</span>
                            <span>{group.topics} topics</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Saved Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Saved Resources</h2>
                  <Link to="/resources" className="text-sm text-primary-600 hover:text-primary-700">
                    View all
                  </Link>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-neutral-200">
                    {savedResources.map((resource, index) => (
                      <div key={index} className="p-4 hover:bg-neutral-50">
                        <div className="flex items-start">
                          <div className="mr-3">
                            <Bookmark size={18} className="text-primary-500" />
                          </div>
                          <div>
                            <p className="font-medium text-neutral-800">{resource.title}</p>
                            <div className="flex justify-between text-sm text-neutral-500">
                              <span>{resource.type}</span>
                              <span>Saved {resource.saved}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;