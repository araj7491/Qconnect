import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';
import { Users, Clock, BookOpen, Target, Award, MessageCircle, Calendar, TrendingUp } from 'lucide-react';

const PublicStudyGroupsPage: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [groupsRef, groupsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const popularGroups = [
    {
      name: 'Advanced Calculus Study Circle',
      subject: 'Mathematics',
      members: 234,
      meetingTime: 'Mon & Wed, 6:00 PM',
      level: 'Advanced',
      description: 'Deep dive into differential equations and multivariable calculus',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Data Structures & Algorithms',
      subject: 'Computer Science',
      members: 456,
      meetingTime: 'Tue & Thu, 7:00 PM',
      level: 'Intermediate',
      description: 'Master coding interviews with hands-on practice sessions',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Organic Chemistry Warriors',
      subject: 'Chemistry',
      members: 189,
      meetingTime: 'Daily, 5:00 PM',
      level: 'All Levels',
      description: 'Conquer organic chemistry together with peer support',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Physics Problem Solvers',
      subject: 'Physics',
      members: 312,
      meetingTime: 'Weekends, 3:00 PM',
      level: 'Intermediate',
      description: 'Tackle challenging physics problems collaboratively',
      image: 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Literature Discussion Circle',
      subject: 'English Literature',
      members: 178,
      meetingTime: 'Fridays, 8:00 PM',
      level: 'All Levels',
      description: 'Analyze classic and contemporary literature together',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Biology Study Squad',
      subject: 'Biology',
      members: 267,
      meetingTime: 'Mon, Wed, Fri, 4:00 PM',
      level: 'Beginner',
      description: 'From cells to ecosystems - learn biology fundamentals',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90"></div>
        <div 
          className="relative min-h-[500px] flex items-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
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
                Study Groups at Qconnect
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join subject-specific study groups where students collaborate, share knowledge, and achieve academic excellence together. Learning is better when you're not alone.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/register">
                  <Button size="lg" variant="primary" className="bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400">
                    Join Study Groups
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Sign In to Continue
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
              How Study Groups Work
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our study groups are designed to foster collaborative learning and peer support
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Users size={32} className="text-primary-500" />, 
                title: 'Find Your Group', 
                description: 'Browse groups by subject, difficulty level, or schedule' 
              },
              { 
                icon: <Calendar size={32} className="text-primary-500" />, 
                title: 'Schedule Sessions', 
                description: 'Join regular study sessions that fit your timetable' 
              },
              { 
                icon: <MessageCircle size={32} className="text-primary-500" />, 
                title: 'Collaborate Online', 
                description: 'Chat, video call, and share screens during sessions' 
              },
              { 
                icon: <TrendingUp size={32} className="text-primary-500" />, 
                title: 'Track Progress', 
                description: 'Monitor your learning goals and achievements' 
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

      {/* Popular Study Groups */}
      <section className="py-16 bg-neutral-50" ref={groupsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={groupsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Popular Study Groups
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={groupsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore some of our most active and successful study groups
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularGroups.map((group, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={groupsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
              >
                <Card hover className="h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={group.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardBody>
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {group.subject}
                      </span>
                      <span className="inline-block px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full ml-2">
                        {group.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{group.description}</p>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span>{group.members} members</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{group.meetingTime}</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/register">
              <Button size="lg" variant="primary">
                View All Study Groups
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white" ref={benefitsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Benefits of Joining Study Groups
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: <Target size={40} className="text-primary-500" />, 
                title: 'Improved Understanding', 
                description: 'Explain concepts to peers and learn from different perspectives' 
              },
              { 
                icon: <Award size={40} className="text-primary-500" />, 
                title: 'Better Grades', 
                description: 'Students in study groups typically achieve 20% higher grades' 
              },
              { 
                icon: <Users size={40} className="text-primary-500" />, 
                title: 'Networking', 
                description: 'Build lasting friendships and professional connections' 
              },
              { 
                icon: <BookOpen size={40} className="text-primary-500" />, 
                title: 'Shared Resources', 
                description: 'Access notes, practice problems, and study materials from peers' 
              },
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-neutral-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Study Group?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up today and start learning with peers who share your academic goals.
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

export default PublicStudyGroupsPage;