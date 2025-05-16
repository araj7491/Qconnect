import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card, { CardBody, CardHeader, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Users, Search, Filter, Plus, Star, ArrowUpRight, BookOpen } from 'lucide-react';

const CATEGORIES = [
  'All Categories',
  'Computer Science',
  'Mathematics',
  'Physics',
  'Biology',
  'Chemistry',
  'Engineering',
  'Literature',
  'History',
  'Economics',
  'Psychology',
];

interface StudyGroup {
  id: string;
  name: string;
  category: string;
  members: number;
  topics: number;
  description: string;
  rating: number;
  isJoined: boolean;
}

const STUDY_GROUPS: StudyGroup[] = [
  {
    id: '1',
    name: 'Algorithms & Data Structures',
    category: 'Computer Science',
    members: 256,
    topics: 45,
    description: 'A collaborative group for learning and discussing algorithms and data structures concepts.',
    rating: 4.8,
    isJoined: true,
  },
  {
    id: '2',
    name: 'Calculus Help Center',
    category: 'Mathematics',
    members: 189,
    topics: 32,
    description: 'Get help with calculus problems, derivatives, integrals, and more.',
    rating: 4.6,
    isJoined: false,
  },
  {
    id: '3',
    name: 'Physics Enthusiasts',
    category: 'Physics',
    members: 143,
    topics: 28,
    description: 'Explore physics concepts from mechanics to quantum physics with fellow enthusiasts.',
    rating: 4.7,
    isJoined: true,
  },
  {
    id: '4',
    name: 'Web Development Club',
    category: 'Computer Science',
    members: 312,
    topics: 56,
    description: 'Learn and collaborate on web development projects, from frontend to backend.',
    rating: 4.9,
    isJoined: false,
  },
  {
    id: '5',
    name: 'Organic Chemistry Study Group',
    category: 'Chemistry',
    members: 128,
    topics: 24,
    description: 'Master organic chemistry concepts through collaborative discussions and problem-solving.',
    rating: 4.5,
    isJoined: false,
  },
  {
    id: '6',
    name: 'Literary Analysis Circle',
    category: 'Literature',
    members: 97,
    topics: 35,
    description: 'Discuss and analyze classic and contemporary literature from around the world.',
    rating: 4.4,
    isJoined: false,
  },
];

const StudyGroupsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [groups, setGroups] = useState(STUDY_GROUPS);

  const filteredGroups = groups.filter(group => {
    const matchesCategory = selectedCategory === 'All Categories' || group.category === selectedCategory;
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          group.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleJoin = (id: string) => {
    setGroups(groups.map(group => 
      group.id === id ? { ...group, isJoined: !group.isJoined } : group
    ));
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Study Groups</h1>
          <p className="text-neutral-600">
            Connect with peers, share knowledge, and collaborate on academic topics.
          </p>
        </motion.div>

        {/* Actions Row */}
        <motion.div 
          className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search study groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              <span>Filter</span>
            </Button>
            <Button 
              className="flex items-center gap-2"
            >
              <Plus size={16} />
              <span>Create Group</span>
            </Button>
          </div>
        </motion.div>
        
        {/* Category Selection */}
        <motion.div 
          className="mb-8 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex space-x-2 pb-2">
            {CATEGORIES.map((category, index) => (
              <button
                key={index}
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
        </motion.div>
        
        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.05) }}
            >
              <Card hover className="h-full flex flex-col">
                <CardHeader className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{group.name}</h3>
                    <p className="text-sm text-primary-600">{group.category}</p>
                  </div>
                  <span className="flex items-center text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    <Star size={14} className="mr-1" />
                    {group.rating}
                  </span>
                </CardHeader>
                <CardBody className="flex-grow">
                  <p className="text-neutral-600 mb-4">{group.description}</p>
                  <div className="flex justify-between text-sm text-neutral-500 mb-2">
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {group.members} members
                    </span>
                    <span className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      {group.topics} topics
                    </span>
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between items-center">
                  <Button 
                    variant={group.isJoined ? 'outline' : 'primary'}
                    onClick={() => toggleJoin(group.id)}
                  >
                    {group.isJoined ? 'Leave Group' : 'Join Group'}
                  </Button>
                  <Button 
                    variant="text" 
                    className="flex items-center gap-1"
                  >
                    <span>View</span>
                    <ArrowUpRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">No study groups found</h3>
            <p className="text-neutral-600 mb-6">Try adjusting your filters or create a new group.</p>
            <Button>Create New Study Group</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyGroupsPage;