import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';
import { FileText, Download, Upload, Star, Filter, BookOpen, Video, FileCode, Presentation, Users, Clock, TrendingUp, Award } from 'lucide-react';

const PublicResourcesPage: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [resourcesRef, resourcesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredResources = [
    {
      title: 'Complete Calculus Notes - Semester 1',
      type: 'PDF Notes',
      subject: 'Mathematics',
      author: 'Sarah Johnson',
      downloads: 5432,
      rating: 4.8,
      size: '15 MB',
      icon: <FileText className="text-blue-500" size={24} />,
      description: 'Comprehensive notes covering limits, derivatives, and integration'
    },
    {
      title: 'Data Structures Video Lectures',
      type: 'Video Series',
      subject: 'Computer Science',
      author: 'Prof. Michael Chen',
      downloads: 8901,
      rating: 4.9,
      size: '2.3 GB',
      icon: <Video className="text-red-500" size={24} />,
      description: '20+ hours of detailed explanations with coding examples'
    },
    {
      title: 'Organic Chemistry Lab Manual',
      type: 'Lab Guide',
      subject: 'Chemistry',
      author: 'Dr. Emily Watson',
      downloads: 3210,
      rating: 4.7,
      size: '8 MB',
      icon: <BookOpen className="text-green-500" size={24} />,
      description: 'Step-by-step procedures for all standard experiments'
    },
    {
      title: 'Python Projects Collection',
      type: 'Code Repository',
      subject: 'Programming',
      author: 'Dev Community',
      downloads: 12543,
      rating: 4.9,
      size: '45 MB',
      icon: <FileCode className="text-purple-500" size={24} />,
      description: '50+ beginner to advanced Python projects with solutions'
    },
    {
      title: 'Physics Formula Sheets',
      type: 'Quick Reference',
      subject: 'Physics',
      author: 'Study Group Alpha',
      downloads: 6789,
      rating: 4.6,
      size: '3 MB',
      icon: <FileText className="text-orange-500" size={24} />,
      description: 'All essential formulas for mechanics, thermodynamics, and E&M'
    },
    {
      title: 'Business Case Studies',
      type: 'Presentation Pack',
      subject: 'Business',
      author: 'MBA Collective',
      downloads: 4567,
      rating: 4.8,
      size: '25 MB',
      icon: <Presentation className="text-indigo-500" size={24} />,
      description: 'Real-world case studies with analysis frameworks'
    }
  ];

  const resourceCategories = [
    { name: 'Lecture Notes', count: 15234, icon: <FileText size={20} /> },
    { name: 'Video Tutorials', count: 8456, icon: <Video size={20} /> },
    { name: 'Practice Problems', count: 23456, icon: <BookOpen size={20} /> },
    { name: 'Lab Manuals', count: 5678, icon: <FileText size={20} /> },
    { name: 'Project Files', count: 12345, icon: <FileCode size={20} /> },
    { name: 'Presentations', count: 7890, icon: <Presentation size={20} /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90"></div>
        <div 
          className="relative min-h-[500px] flex items-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
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
                Qconnect Resources Hub
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Access thousands of study materials, notes, and educational resources shared by students and educators. Download, share, and contribute to our growing knowledge base.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/register">
                  <Button size="lg" variant="primary" className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400">
                    Access Resources
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Upload & Share
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
              Your Complete Resource Library
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Everything you need for academic success in one place
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Download size={32} className="text-primary-500" />, 
                title: 'Instant Downloads', 
                description: 'Get study materials instantly with one-click downloads' 
              },
              { 
                icon: <Upload size={32} className="text-primary-500" />, 
                title: 'Share Knowledge', 
                description: 'Upload your notes and help thousands of students' 
              },
              { 
                icon: <Filter size={32} className="text-primary-500" />, 
                title: 'Smart Filtering', 
                description: 'Find exactly what you need with advanced filters' 
              },
              { 
                icon: <Star size={32} className="text-primary-500" />, 
                title: 'Quality Rated', 
                description: 'Community-verified resources with ratings and reviews' 
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

      {/* Featured Resources */}
      <section className="py-16 bg-neutral-50" ref={resourcesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={resourcesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Featured Resources
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={resourcesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Top-rated materials handpicked by our community
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={resourcesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
              >
                <Card hover className="h-full">
                  <CardBody>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        {resource.icon}
                        <div className="ml-3">
                          <h3 className="font-semibold text-lg">{resource.title}</h3>
                          <p className="text-sm text-neutral-500">{resource.type} • {resource.size}</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-neutral-600 mb-3">{resource.description}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {resource.subject}
                      </span>
                      <div className="flex items-center text-sm text-neutral-500">
                        <Star size={14} className="text-yellow-500 mr-1" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span>By {resource.author}</span>
                      <span className="flex items-center">
                        <Download size={14} className="mr-1" />
                        {resource.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/register">
              <Button size="lg" variant="primary">
                Browse All Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white" ref={categoriesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Resource Categories
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore resources organized by type
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {resourceCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={categoriesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.05 + (index * 0.05) }}
              >
                <Card hover className="text-center">
                  <CardBody>
                    <div className="flex justify-center mb-2 text-primary-500">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{category.name}</h4>
                    <p className="text-xs text-neutral-500">{category.count.toLocaleString()} items</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '100K+', label: 'Resources Available' },
              { value: '50K+', label: 'Active Contributors' },
              { value: '1M+', label: 'Downloads This Month' },
              { value: '4.8/5', label: 'Average Rating' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Share Your Knowledge</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Help thousands of students by sharing your study materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: <Upload size={40} className="text-primary-500" />, 
                title: 'Upload Resources', 
                description: 'Share your notes, assignments, and study materials' 
              },
              { 
                icon: <Users size={40} className="text-primary-500" />, 
                title: 'Help Others Learn', 
                description: 'Your resources can help students worldwide' 
              },
              { 
                icon: <Award size={40} className="text-primary-500" />, 
                title: 'Earn Recognition', 
                description: 'Get credits and badges for quality contributions' 
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Accessing Premium Resources</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Qconnect today and unlock access to our complete library of study materials.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button 
                size="lg" 
                variant="primary" 
                className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400"
              >
                Get Started Free
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

export default PublicResourcesPage;