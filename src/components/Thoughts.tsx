import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const Thoughts: React.FC = () => {
  const featuredPost: BlogPost = {
    id: '1',
    title: 'The Art of Minimal Design',
    excerpt: 'Exploring the principles of minimalism in modern design and how less can truly be more. Understanding the balance between functionality and aesthetics.',
    category: 'Design',
    date: 'Dec 2024',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    featured: true
  };

  const recentPosts: BlogPost[] = [
    {
      id: '2',
      title: 'Building Scalable Frontend Architectures',
      excerpt: 'A deep dive into modern frontend architecture patterns and how to structure applications for long-term maintainability and growth.',
      category: 'Technology',
      date: 'Nov 2024',
      readTime: '8 min read',
      image: '/api/placeholder/400/300'
    },
    {
      id: '3',
      title: 'The Psychology of User Experience',
      excerpt: 'Understanding how users think and behave, and how we can design interfaces that feel intuitive and natural to use.',
      category: 'UX',
      date: 'Oct 2024',
      readTime: '6 min read',
      image: '/api/placeholder/400/300'
    },
    {
      id: '4',
      title: 'React Performance Optimization',
      excerpt: 'Practical techniques for optimizing React applications, from component design to state management and beyond.',
      category: 'Technology',
      date: 'Sep 2024',
      readTime: '12 min read',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <section id="thoughts" className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Thoughts on Design, Technology, and Building Better Digital Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of insights, learnings, and perspectives from the intersection of design and technology.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-gray-500 text-sm">
                  {featuredPost.category} • {featuredPost.date} • {featuredPost.readTime}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <a 
                href="#" 
                className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200 border-b border-gray-300 hover:border-gray-500"
              >
                Read more
              </a>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900">
              Recent Posts
            </h3>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 border-b border-gray-300 hover:border-gray-500"
            >
              View all posts
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="text-gray-500 text-sm">
                    {post.category} • {post.date} • {post.readTime}
                  </div>
                  
                  <h4 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
