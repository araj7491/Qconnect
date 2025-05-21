import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, MessageSquare, ThumbsUp, MessageCircle, Clock, Tag } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';

const ForumPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Computer Science',
    'Mathematics',
    'Physics',
    'Biology',
    'Chemistry',
    'Engineering',
    'Literature',
    'History',
    'Economics',
  ];

  const discussions = [
    {
      id: 1,
      title: 'Understanding React Hooks and Their Use Cases',
      category: 'Computer Science',
      author: 'Sarah Johnson',
      replies: 12,
      views: 245,
      likes: 18,
      lastActivity: '2 hours ago',
      tags: ['React', 'JavaScript', 'Web Development'],
    },
    {
      id: 2,
      title: 'Help with Calculus Integration Techniques',
      category: 'Mathematics',
      author: 'Michael Chen',
      replies: 8,
      views: 156,
      likes: 12,
      lastActivity: '4 hours ago',
      tags: ['Calculus', 'Integration', 'Mathematics'],
    },
    {
      id: 3,
      title: 'Quantum Mechanics: Wave-Particle Duality Explained',
      category: 'Physics',
      author: 'David Wilson',
      replies: 15,
      views: 312,
      likes: 24,
      lastActivity: '1 day ago',
      tags: ['Physics', 'Quantum Mechanics', 'Science'],
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
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Forum</h1>
            <p className="text-neutral-600">
              Join discussions, ask questions, and share knowledge with the community.
            </p>
          </div>
          <Button
            variant="primary"
            className="mt-4 md:mt-0"
            onClick={() => {/* TODO: Implement new discussion */}}
          >
            <Plus size={20} className="mr-2" />
            New Discussion
          </Button>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-neutral-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="flex overflow-x-auto pb-2 space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {discussions.map((discussion, index) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <CardBody>
                  <div className="flex flex-col md:flex-row md:items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {discussion.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {discussion.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-neutral-500">
                        <span className="mr-4">Posted by {discussion.author}</span>
                        <span className="mr-4">in {discussion.category}</span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {discussion.lastActivity}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <div className="flex items-center text-neutral-500">
                        <MessageCircle size={16} className="mr-1" />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className="flex items-center text-neutral-500">
                        <ThumbsUp size={16} className="mr-1" />
                        <span>{discussion.likes}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
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

export default ForumPage;