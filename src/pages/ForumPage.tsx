import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card, { CardBody, CardHeader, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Search, Filter, MessageSquare, ThumbsUp, MessageCircle, 
  Eye, ArrowUp, ArrowDown, Award, Plus
} from 'lucide-react';

interface ForumPost {
  id: string;
  title: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  votes: number;
  replies: number;
  views: number;
  tags: string[];
  createdAt: string;
  userVoted?: 'up' | 'down' | null;
}

const SAMPLE_POSTS: ForumPost[] = [
  {
    id: '1',
    title: 'Understanding recursive functions in JavaScript',
    category: 'Computer Science',
    author: {
      name: 'Alice Johnson',
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    content: 'I\'ve been trying to understand recursive functions in JavaScript but I\'m having trouble with the concept. Can someone explain how the call stack works with recursion, preferably with a simple example?',
    votes: 24,
    replies: 8,
    views: 156,
    tags: ['javascript', 'programming', 'recursion'],
    createdAt: '2 hours ago',
    userVoted: 'up',
  },
  {
    id: '2',
    title: 'Help with calculus limit problem',
    category: 'Mathematics',
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/40?img=3',
    },
    content: 'I\'m trying to solve this limit: lim(x→∞) (1 + 2/x)^x. I know the answer should be e², but I\'m not sure how to get there step by step. Any help would be appreciated!',
    votes: 15,
    replies: 5,
    views: 89,
    tags: ['calculus', 'limits', 'mathematics'],
    createdAt: '5 hours ago',
    userVoted: null,
  },
  {
    id: '3',
    title: 'Book recommendations for quantum physics',
    category: 'Physics',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/40?img=5',
    },
    content: 'I\'m an undergraduate physics student interested in quantum mechanics. Can anyone recommend some beginner-friendly books that explain the concepts clearly without oversimplifying?',
    votes: 32,
    replies: 12,
    views: 210,
    tags: ['physics', 'quantum-mechanics', 'books'],
    createdAt: '1 day ago',
    userVoted: 'down',
  },
  {
    id: '4',
    title: 'Tips for writing an effective research paper',
    category: 'Academic Skills',
    author: {
      name: 'David Park',
      avatar: 'https://i.pravatar.cc/40?img=7',
    },
    content: 'I\'m working on my first major research paper and feeling overwhelmed. Does anyone have tips for organizing research, structuring the paper, and maintaining focus throughout the writing process?',
    votes: 41,
    replies: 15,
    views: 287,
    tags: ['research', 'writing', 'academic'],
    createdAt: '2 days ago',
    userVoted: null,
  },
];

const CATEGORIES = [
  'All Topics',
  'Computer Science',
  'Mathematics',
  'Physics',
  'Biology',
  'Chemistry',
  'Engineering',
  'Literature',
  'History',
  'Economics',
  'Academic Skills',
];

const ForumPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [posts, setPosts] = useState(SAMPLE_POSTS);
  const [sortBy, setSortBy] = useState<'popular' | 'recent' | 'unanswered'>('popular');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All Topics' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'popular') return b.votes - a.votes;
    if (sortBy === 'recent') {
      // This is a simplification, in a real app you'd compare actual dates
      return a.createdAt.includes('hour') ? -1 : 1;
    }
    // unanswered
    return a.replies - b.replies;
  });

  const handleVote = (id: string, direction: 'up' | 'down') => {
    setPosts(posts.map(post => {
      if (post.id !== id) return post;
      
      let newVotes = post.votes;
      let newUserVoted = post.userVoted;
      
      if (post.userVoted === direction) {
        // Undo vote
        newVotes = direction === 'up' ? newVotes - 1 : newVotes + 1;
        newUserVoted = null;
      } else if (post.userVoted === null) {
        // New vote
        newVotes = direction === 'up' ? newVotes + 1 : newVotes - 1;
        newUserVoted = direction;
      } else {
        // Change vote direction
        newVotes = direction === 'up' ? newVotes + 2 : newVotes - 2;
        newUserVoted = direction;
      }
      
      return { ...post, votes: newVotes, userVoted: newUserVoted };
    }));
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
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Discussion Forum</h1>
          <p className="text-neutral-600">
            Ask questions, share knowledge, and engage in academic discussions.
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
              placeholder="Search discussions..."
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
              <span>Ask Question</span>
            </Button>
          </div>
        </motion.div>
        
        {/* Category & Sorting */}
        <motion.div 
          className="mb-8 flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Categories */}
          <div className="overflow-x-auto flex-grow">
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
          </div>
          
          {/* Sorting Options */}
          <div className="flex space-x-2 shrink-0">
            {[
              { value: 'popular', label: 'Popular' },
              { value: 'recent', label: 'Recent' },
              { value: 'unanswered', label: 'Unanswered' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value as any)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  sortBy === option.value
                    ? 'bg-secondary-500 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Forum Posts */}
        <div className="space-y-4">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.05) }}
            >
              <Card hover>
                <CardBody className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Voting Sidebar */}
                    <div className="p-4 flex md:flex-col items-center justify-center gap-2 border-b md:border-b-0 md:border-r border-neutral-200 bg-neutral-50 md:w-20">
                      <button 
                        onClick={() => handleVote(post.id, 'up')}
                        className={`p-1 rounded ${post.userVoted === 'up' ? 'bg-success-100 text-success-700' : 'text-neutral-500 hover:bg-neutral-200'}`}
                      >
                        <ArrowUp size={20} />
                      </button>
                      <span className="font-bold text-lg">{post.votes}</span>
                      <button 
                        onClick={() => handleVote(post.id, 'down')}
                        className={`p-1 rounded ${post.userVoted === 'down' ? 'bg-error-100 text-error-700' : 'text-neutral-500 hover:bg-neutral-200'}`}
                      >
                        <ArrowDown size={20} />
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 flex-grow">
                      <div className="flex items-center mb-2">
                        <span className="text-xs px-2 py-1 bg-primary-100 text-primary-800 rounded-full mr-2">
                          {post.category}
                        </span>
                        <span className="text-xs text-neutral-500">
                          Posted {post.createdAt}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-neutral-600 mb-4 line-clamp-2">{post.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full mr-2" />
                          <span className="text-sm font-medium">{post.author.name}</span>
                          {index === 0 && (
                            <span className="ml-2 flex items-center text-xs text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">
                              <Award size={12} className="mr-1" />
                              Top Contributor
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-neutral-500 text-sm">
                          <span className="flex items-center">
                            <MessageCircle size={16} className="mr-1" />
                            {post.replies}
                          </span>
                          <span className="flex items-center">
                            <Eye size={16} className="mr-1" />
                            {post.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">No discussions found</h3>
            <p className="text-neutral-600 mb-6">Try adjusting your filters or be the first to start a discussion.</p>
            <Button>Ask a Question</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumPage;