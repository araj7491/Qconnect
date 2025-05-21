import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';
import { BookOpen, Users, MessageSquare, FileText, Award, Zap, LightbulbIcon, Network } from 'lucide-react';

const HomePage: React.FC = () => {
  const [featureRef, featureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90"></div>
        <div 
          className="relative min-h-[600px] flex items-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Welcome to Qconnect
              </motion.h1>
              <motion.p 
                className="text-xl text-black/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Connect, Collaborate, and Grow Together! Join the revolutionary peer-to-peer learning platform that empowers students to learn collaboratively.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/register">
                  <Button size="lg" variant="primary" className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400">
                    Get Started
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50" ref={featureRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={featureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Choose Qconnect?
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our platform offers everything you need to enhance your learning experience through collaboration.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Users size={40} className="text-primary-500" />, 
                title: 'Collaborative Study Groups', 
                description: 'Create or join subject-wise study groups to learn with peers who share your academic interests.' 
              },
              { 
                icon: <MessageSquare size={40} className="text-primary-500" />, 
                title: 'Interactive Forums', 
                description: 'Discuss concepts, share doubts, and get answers in real-time from the community.' 
              },
              { 
                icon: <FileText size={40} className="text-primary-500" />, 
                title: 'Resource Sharing', 
                description: 'Upload and access notes, assignments, and project materials from fellow students.' 
              },
              { 
                icon: <Award size={40} className="text-primary-500" />, 
                title: 'Recognition System', 
                description: 'Get recognized for your contributions through upvotes and community ratings.' 
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <Card hover className="h-full">
                  <CardBody className="flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">How Qconnect Works</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our platform makes collaborative learning simple and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                icon: <Users size={32} className="text-primary-500" />, 
                title: 'Join the Community', 
                description: 'Create your account and complete your profile with your academic interests.' 
              },
              { 
                step: '02', 
                icon: <BookOpen size={32} className="text-primary-500" />, 
                title: 'Find Your Study Group', 
                description: 'Browse and join subject-specific study groups or create your own.' 
              },
              { 
                step: '03', 
                icon: <Zap size={32} className="text-primary-500" />, 
                title: 'Collaborate & Learn', 
                description: 'Participate in discussions, share resources, and grow together.' 
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 right-0 text-6xl font-bold text-neutral-100">{step.step}</div>
                <Card className="h-full relative">
                  <CardBody>
                    <div className="mb-4 text-primary-500">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-900 text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Active Students' },
              { value: '500+', label: 'Study Groups' },
              { value: '50+', label: 'Subjects Covered' },
              { value: '100K+', label: 'Resources Shared' },
            ].map((stat, index) => (
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

      {/* Testimonials */}
      <section className="py-16 bg-neutral-50" ref={testimonialRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of students who've transformed their learning experience with Qconnect.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Computer Science Student',
                image: 'https://i.pravatar.cc/150?img=1',
                text: 'Qconnect transformed how I study. I found a group of CS majors who help each other with complex programming concepts. My grades have improved significantly!',
              },
              {
                name: 'Michael Chen',
                role: 'Biology Major',
                image: 'https://i.pravatar.cc/150?img=3',
                text: 'The interactive forums helped me understand complex biology concepts. Being able to share diagrams and get immediate feedback has been invaluable.',
              },
              {
                name: 'Aisha Patel',
                role: 'Engineering Student',
                image: 'https://i.pravatar.cc/150?img=5',
                text: 'As an engineering student, I needed a place to collaborate on projects. Qconnect provided exactly that - now my team can share resources and ideas seamlessly.',
              },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <Card hover className="h-full">
                  <CardBody>
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-neutral-600 italic">"{testimonial.text}"</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already benefiting from collaborative learning on Qconnect.
          </p>
          <Link to="/register">
            <Button 
              size="lg" 
              variant="primary" 
              className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;