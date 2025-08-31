import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/ui/Button';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import { 
  BookOpen, Users, MessageSquare, FileText, Award, Zap, 
  Clock, TrendingUp, Shield, Globe, Sparkles, Target,
  CheckCircle, ArrowRight, Star, Download, Video, 
  Calendar, Brain, Laptop, GraduationCap, HelpCircle
} from 'lucide-react';

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

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 opacity-95"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-secondary-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div 
          className="relative min-h-[700px] flex items-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="text-secondary-400 mr-2" size={20} />
                <span className="text-white text-sm font-medium">Join 10,000+ students already learning together</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Transform Your Learning with <span className="text-secondary-400">Qconnect</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The ultimate peer-to-peer learning platform where students collaborate, share knowledge, and achieve academic excellence together.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/register">
                  <Button size="lg" variant="primary" className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                    Start Learning Free
                    <ArrowRight className="ml-2 inline" size={20} />
                  </Button>
                </Link>
                <Link to="/study-groups">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 text-lg">
                    Explore Features
                  </Button>
                </Link>
              </motion.div>

              <motion.div 
                className="flex flex-wrap items-center gap-6 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={20} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={20} />
                  <span>Instant access</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={20} />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 bg-white" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Everything You Need to Excel
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Qconnect brings together all the tools and resources you need for academic success in one comprehensive platform.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-blue-500" size={48} />,
                title: 'Study Groups',
                description: 'Join or create subject-specific study groups with peers who share your academic goals.',
                features: ['Video conferencing', 'Shared whiteboards', 'Schedule management', 'Progress tracking'],
                link: '/study-groups',
                color: 'blue'
              },
              {
                icon: <MessageSquare className="text-green-500" size={48} />,
                title: 'Discussion Forums',
                description: 'Get instant help from a community of learners and experts across all subjects.',
                features: ['24/7 support', 'Expert answers', 'Upvoting system', 'Topic following'],
                link: '/forum',
                color: 'green'
              },
              {
                icon: <FileText className="text-purple-500" size={48} />,
                title: 'Resource Library',
                description: 'Access thousands of study materials, notes, and resources shared by students.',
                features: ['PDF downloads', 'Video tutorials', 'Practice tests', 'Study guides'],
                link: '/resources',
                color: 'purple'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <Card hover className="h-full group cursor-pointer">
                  <CardBody className="p-8">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-neutral-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-neutral-600">
                          <CheckCircle className={`text-${service.color}-500 mr-2`} size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button variant="outline" className={`w-full border-${service.color}-500 text-${service.color}-500 hover:bg-${service.color}-50`}>
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section className="py-20 bg-neutral-50" ref={featureRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={featureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Students Choose Qconnect
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover the features that make Qconnect the preferred learning platform for thousands of students worldwide.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Brain size={32} className="text-primary-500" />, 
                title: 'AI-Powered Matching', 
                description: 'Get matched with study partners based on your learning style and goals.' 
              },
              { 
                icon: <Shield size={32} className="text-primary-500" />, 
                title: 'Safe Environment', 
                description: 'Moderated content and verified users ensure a safe learning space.' 
              },
              { 
                icon: <Globe size={32} className="text-primary-500" />, 
                title: 'Global Community', 
                description: 'Connect with students from universities worldwide.' 
              },
              { 
                icon: <Target size={32} className="text-primary-500" />, 
                title: 'Goal Tracking', 
                description: 'Set and track your academic goals with progress analytics.' 
              },
              { 
                icon: <Video size={32} className="text-primary-500" />, 
                title: 'Live Sessions', 
                description: 'Join live study sessions and virtual classrooms.' 
              },
              { 
                icon: <Calendar size={32} className="text-primary-500" />, 
                title: 'Smart Scheduling', 
                description: 'Automated scheduling that works with your timetable.' 
              },
              { 
                icon: <Award size={32} className="text-primary-500" />, 
                title: 'Gamification', 
                description: 'Earn points, badges, and rewards for active participation.' 
              },
              { 
                icon: <Laptop size={32} className="text-primary-500" />, 
                title: 'Multi-Platform', 
                description: 'Access Qconnect on web, mobile, and tablet devices.' 
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + (index * 0.05) }}
              >
                <Card hover className="h-full">
                  <CardBody className="text-center p-6">
                    <div className="mb-4 flex justify-center p-3 bg-primary-50 rounded-lg w-fit mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-neutral-600 text-sm">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-20 bg-white" ref={processRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Your Journey to Academic Success
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Getting started with Qconnect is simple. Follow these steps to begin your collaborative learning journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                icon: <GraduationCap size={40} className="text-primary-500" />, 
                title: 'Sign Up Free', 
                description: 'Create your account in seconds with your email or social login.',
                color: 'bg-blue-50'
              },
              { 
                step: '02', 
                icon: <Target size={40} className="text-primary-500" />, 
                title: 'Set Your Goals', 
                description: 'Tell us about your subjects, interests, and learning objectives.',
                color: 'bg-green-50'
              },
              { 
                step: '03', 
                icon: <Users size={40} className="text-primary-500" />, 
                title: 'Join Groups', 
                description: 'Get matched with study groups or browse and join existing ones.',
                color: 'bg-purple-50'
              },
              { 
                step: '04', 
                icon: <TrendingUp size={40} className="text-primary-500" />, 
                title: 'Start Learning', 
                description: 'Collaborate, share resources, and track your progress.',
                color: 'bg-orange-50'
              },
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-neutral-300" size={24} />
                  </div>
                )}
                <Card className="h-full">
                  <CardBody className="text-center p-6">
                    <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-3xl font-bold text-primary-600">{step.step}</span>
                    </div>
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-neutral-600 text-sm">{step.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50" ref={benefitsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">
                Achieve More with Collaborative Learning
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Studies show that students who engage in collaborative learning perform 20% better than those who study alone. Here's what you can achieve with Qconnect:
              </p>
              <div className="space-y-4">
                {[
                  { percentage: '85%', text: 'of students report improved grades' },
                  { percentage: '92%', text: 'feel more confident in their subjects' },
                  { percentage: '78%', text: 'save time on assignments and projects' },
                  { percentage: '95%', text: 'recommend Qconnect to their peers' },
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="flex-shrink-0 w-20">
                      <span className="text-2xl font-bold text-primary-600">{stat.percentage}</span>
                    </div>
                    <div className="flex-grow">
                      <div className="h-4 bg-neutral-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                          initial={{ width: 0 }}
                          animate={benefitsInView ? { width: stat.percentage } : {}}
                          transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        />
                      </div>
                      <p className="text-sm text-neutral-600 mt-1">{stat.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students collaborating" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Active Now</p>
                    <p className="text-sm text-neutral-500">2,341 students online</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-primary-900 text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Qconnect by the Numbers
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join a thriving community of learners making a difference
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Active Students', icon: <Users size={30} /> },
              { value: '500+', label: 'Study Groups', icon: <BookOpen size={30} /> },
              { value: '100K+', label: 'Resources Shared', icon: <FileText size={30} /> },
              { value: '4.9/5', label: 'Average Rating', icon: <Star size={30} /> },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="flex justify-center mb-3 text-secondary-400">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-neutral-50" ref={testimonialRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Success Stories from Our Community
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hear from students who've transformed their academic journey with Qconnect
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Computer Science, MIT',
                image: 'https://i.pravatar.cc/150?img=1',
                text: 'Qconnect transformed how I study. I found a group of CS majors who help each other with complex programming concepts. My grades have improved significantly!',
                rating: 5,
                improvement: '+23% Grade Improvement'
              },
              {
                name: 'Michael Chen',
                role: 'Pre-Med, Stanford',
                image: 'https://i.pravatar.cc/150?img=3',
                text: 'The interactive forums helped me understand complex biology concepts. Being able to share diagrams and get immediate feedback has been invaluable.',
                rating: 5,
                improvement: 'MCAT Score: 520'
              },
              {
                name: 'Aisha Patel',
                role: 'Engineering, Berkeley',
                image: 'https://i.pravatar.cc/150?img=5',
                text: 'As an engineering student, I needed a place to collaborate on projects. Qconnect provided exactly that - now my team can share resources and ideas seamlessly.',
                rating: 5,
                improvement: 'Dean\'s List 3 Semesters'
              },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <Card hover className="h-full">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full mr-4 border-2 border-primary-200"
                      />
                      <div className="flex-grow">
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    
                    <p className="text-neutral-600 italic mb-4">"{testimonial.text}"</p>
                    
                    <div className="bg-green-50 rounded-lg px-3 py-2 inline-block">
                      <span className="text-green-700 font-semibold text-sm">{testimonial.improvement}</span>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: 'Is Qconnect really free?',
                  answer: 'Yes! Qconnect offers a comprehensive free tier with access to study groups, forums, and basic resources. Premium features are available for advanced users.'
                },
                {
                  question: 'How do I find the right study group?',
                  answer: 'Our AI-powered matching system suggests groups based on your subjects, schedule, and learning style. You can also browse and join groups manually.'
                },
                {
                  question: 'Are the resources verified for quality?',
                  answer: 'All resources are community-reviewed and rated. We also have a moderation team that ensures content quality and accuracy.'
                },
                {
                  question: 'Can I create my own study group?',
                  answer: 'Absolutely! You can create public or private study groups, set schedules, and invite specific members.'
                },
                {
                  question: 'Is my data safe on Qconnect?',
                  answer: 'We take privacy seriously. Your data is encrypted, never sold to third parties, and you have full control over your privacy settings.'
                }
              ].map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <HelpCircle className="text-primary-500 mr-2" size={20} />
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600 ml-7">{faq.answer}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Academic Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Join thousands of students who are already achieving more through collaborative learning.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link to="/register">
              </Link>
              <Link to="/login">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
                >
                  Sign In
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <Clock className="mr-2" size={20} />
                <span>Setup in 30 seconds</span>
              </div>
              <div className="flex items-center">
                <Shield className="mr-2" size={20} />
                <span>100% secure</span>
              </div>
              <div className="flex items-center">
                <Download className="mr-2" size={20} />
                <span>Instant access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;