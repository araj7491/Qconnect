import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Users, BookOpen, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';

const StudyGroupsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const studyGroups = [
    {
      id: 1,
      name: 'Computer Science Fundamentals',
      description: 'A group for discussing core CS concepts and problem-solving strategies.',
      members: 45,
      topics: 12,
      icon: <BookOpen className="text-primary-500" size={24} />,
    },
    {
      id: 2,
      name: 'Data Structures & Algorithms',
      description: 'Deep dive into DSA concepts, practice problems, and interview preparation.',
      members: 78,
      topics: 24,
      icon: <MessageSquare className="text-primary-500" size={24} />,
    },
    {
      id: 3,
      name: 'Web Development',
      description: 'Learn and discuss modern web development technologies and best practices.',
      members: 92,
      topics: 31,
      icon: <Users className="text-primary-500" size={24} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Study Groups</h1>
            <p className="text-neutral-600">
              Join study groups to collaborate with peers and enhance your learning.
            </p>
          </div>
          <Button
            variant="primary"
            className="mt-4 md:mt-0"
            onClick={() => {/* TODO: Implement create group */}}
          >
            <Plus size={20} className="mr-2" />
            Create Group
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-neutral-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search study groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Study Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <CardBody>
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary-50 rounded-lg">
                      {group.icon}
                    </div>
                    <Button variant="ghost" size="sm">
                      Join
                    </Button>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">
                    {group.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {group.description}
                  </p>
                  <div className="flex items-center text-sm text-neutral-500">
                    <Users size={16} className="mr-1" />
                    <span className="mr-4">{group.members} members</span>
                    <MessageSquare size={16} className="mr-1" />
                    <span>{group.topics} topics</span>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StudyGroupsPage;