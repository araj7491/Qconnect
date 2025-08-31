import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';
import { MessageSquare, ThumbsUp, Eye, Clock, TrendingUp, Users, Award, HelpCircle, BookOpen, Code, Beaker, Calculator } from 'lucide-react';

const PublicForumPage: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [topicsRef, topicsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const popularTopics = [
    {
      category: 'Mathematics',
      icon: <Calculator className="text-blue-500" size={24} />,
      discussions: [
        { title: 'Help with Calculus Integration Techniques', replies: 45, views: 1234, time: '2 hours ago', solved: true },
        { title: 'Linear Algebra: Eigenvalues and Eigenvectors', replies: 23, views: 567, time: '5 hours ago', solved: false },
        { title: 'Probability Theory Question - Bayes Theorem', replies: 67, views: 2341, time: '1 day ago', solved: true },
      ]
    },
    {
      category: 'Computer Science',
      icon: <Code className="text-green-500" size={24} />,
      discussions: [
        { title: 'Dynamic Programming Approach for Knapsack Problem', replies: 89, views: 3456, time: '3 hours ago', solved: true },
        { title: 'Understanding Time Complexity of Recursive Functions', replies: 34, views: 892, time: '6 hours ago', solved: false },
        { title: 'Best Practices for Database Design', replies: 56, views: 1890, time: '1 day ago', solved: true },
      ]
    },
    {
      category: 'Physics',
      icon: <Beaker className="text-purple-500" size={24} />,
      discussions: [
        { title: 'Quantum Mechanics: Wave Function Collapse', replies: 78, views: 2567, time: '4 hours ago', solved: false },
        { title: 'Thermodynamics Problem - Heat Engine Efficiency', replies: 45, views: 1234, time: '8 hours ago', solved: true },
        { title: 'Special Relativity and Time Dilation', replies: 92, views: 4321, time: '2 days ago', solved: true },
      ]
    },
  ];

  const forumStats = [
    { value: '50K+', label: 'Active Discussions' },
    { value: '200K+', label: 'Helpful Answers' },
    { value: '95%', label: 'Questions Answered' },
    { value: '24/7', label: 'Community Support' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90"></div>
        <div 
          className="relative min-h-[500px] flex items-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Qconnect Forums
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Get instant help from a community of learners. Ask questions, share knowledge, and discover solutions together in our vibrant academic forums.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/register">
                  <Button size="lg" variant="primary" className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400">
                    Join the Discussion
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Sign In to Post
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Use Qconnect Forums?
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our forums provide a supportive environment for academic discussions and problem-solving
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <HelpCircle size={32} className="text-primary-500" />, 
                title: 'Ask Questions', 
                description: 'Post your doubts and get detailed explanations from peers' 
              },
              { 
                icon: <ThumbsUp size={32} className="text-primary-500" />, 
                title: 'Vote & Rank', 
                description: 'Upvote helpful answers and build your reputation' 
              },
              { 
                icon: <Award size={32} className="text-primary-500" />, 
                title: 'Earn Recognition', 
                description: 'Get badges and points for contributing quality content' 
              },
              { 
                icon: <TrendingUp size={32} className="text-primary-500" />, 
                title: 'Track Trending', 
                description: 'Follow hot topics and trending discussions in your field' 
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <Card hover className="h-full">
                  <CardBody className="text-center">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-neutral-600 text-sm">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16 bg-neutral-50" ref={topicsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={topicsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Active Discussions
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={topicsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore recent discussions across various subjects
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {popularTopics.map((topic, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={topicsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <Card className="h-full">
                  <CardBody>
                    <div className="flex items-center mb-4">
                      {topic.icon}
                      <h3 className="text-xl font-semibold ml-2">{topic.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {topic.discussions.map((discussion, dIndex) => (
                        <div key={dIndex} className="border-b border-neutral-200 pb-3 last:border-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-sm font-medium text-neutral-900 flex-1">
                              {discussion.title}
                              {discussion.solved && (
                                <span className="ml-2 inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                                  Solved
                                </span>
                              )}
                            </h4>
                          </div>
                          <div className="flex items-center text-xs text-neutral-500 space-x-4">
                            <span className="flex items-center">
                              <MessageSquare size={14} className="mr-1" />
                              {discussion.replies} replies
                            </span>
                            <span className="flex items-center">
                              <Eye size={14} className="mr-1" />
                              {discussion.views} views
                            </span>
                            <span className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {discussion.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/register">
              <Button size="lg" variant="primary">
                View All Discussions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-900 text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {forumStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">How Forums Work</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Getting help is easy with our intuitive forum system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { 
                step: '01', 
                title: 'Post Your Question', 
                description: 'Create a detailed post with your academic query' 
              },
              { 
                step: '02', 
                title: 'Get Responses', 
                description: 'Receive answers from knowledgeable peers' 
              },
              { 
                step: '03', 
                title: 'Discuss & Clarify', 
                description: 'Engage in discussions to deepen understanding' 
              },
              { 
                step: '04', 
                title: 'Mark as Solved', 
                description: 'Accept the best answer to help future students' 
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary-100 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Academic Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your questions answered and help others learn. Be part of Qconnect's supportive forum community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button 
                size="lg" 
                variant="primary" 
                className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400"
              >
                Start Asking Questions
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicForumPage;