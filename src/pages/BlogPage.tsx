import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Tax Implications for East African Businesses in 2024',
    excerpt: 'A comprehensive guide to navigating the complex tax landscape for businesses operating in East Africa, with insights into new regulations and opportunities.',
    content: `The tax landscape in East Africa is evolving rapidly, presenting both challenges and opportunities for businesses. In 2024, several key changes have been implemented across the region that business owners need to be aware of.

First, let's examine the new digital service tax regulations that have been rolled out across Kenya, Uganda, and Rwanda. These regulations specifically target businesses operating in the digital economy, including e-commerce platforms, digital content creators, and online service providers.

The harmonization of tax policies across the East African Community (EAC) has also brought significant changes to how businesses operate across borders. This includes standardized VAT rates and simplified cross-border trade procedures.

Key considerations for businesses include:

1. Digital Service Tax Compliance
- Understanding the scope of digital services
- Registration requirements
- Payment procedures and deadlines

2. Cross-Border Trade
- Harmonized customs procedures
- Simplified tax documentation
- Regional tax treaties

3. Small Business Considerations
- Tax incentives for SMEs
- Simplified tax filing procedures
- Available tax exemptions

4. Future Outlook
- Upcoming tax policy changes
- Regional integration impacts
- Technology adoption in tax administration

Businesses should work closely with qualified tax professionals to ensure compliance while maximizing available benefits under the new regulations.`,
    author: 'Herve Clister Muvunyi',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Taxation',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2000',
    tags: ['Taxation', 'East Africa', 'Business', 'Compliance']
  },
  {
    id: '2',
    title: 'ESG Reporting: A New Era for African Businesses',
    excerpt: 'Exploring the growing importance of Environmental, Social, and Governance (ESG) reporting in African business contexts and its impact on investment.',
    content: `Environmental, Social, and Governance (ESG) reporting has become increasingly crucial for African businesses seeking to attract international investment and demonstrate their commitment to sustainable practices.

The rise of ESG consciousness in Africa reflects a global shift towards sustainable business practices. Companies across the continent are now recognizing that strong ESG performance can lead to better access to capital, improved stakeholder relations, and long-term business sustainability.

Key aspects of ESG reporting in Africa include:

1. Environmental Considerations
- Carbon footprint measurement
- Resource conservation
- Waste management practices
- Climate change adaptation

2. Social Impact
- Community engagement
- Labor practices
- Health and safety
- Diversity and inclusion

3. Governance Standards
- Board composition
- Anti-corruption measures
- Risk management
- Stakeholder engagement

4. Implementation Strategies
- Data collection frameworks
- Reporting standards
- Verification processes
- Stakeholder communication

Companies should focus on developing robust ESG frameworks that align with international standards while considering local contexts and challenges.`,
    author: 'Herve Clister Muvunyi',
    date: 'March 12, 2024',
    readTime: '6 min read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000',
    tags: ['ESG', 'Sustainability', 'Investment', 'Africa']
  },
  {
    id: '3',
    title: 'Digital Transformation in Financial Services: East African Perspective',
    excerpt: 'How digital technologies are reshaping financial services in East Africa, from mobile banking to blockchain applications.',
    content: `The digital transformation of financial services in East Africa continues to accelerate, driven by increasing mobile penetration, changing consumer preferences, and technological innovation.

Mobile money services have been at the forefront of this transformation, with East Africa leading the world in mobile money adoption. This success story has paved the way for more sophisticated digital financial services.

Key trends and developments include:

1. Mobile Banking Evolution
- Advanced features and capabilities
- Integration with traditional banking
- Cross-border functionality
- Security enhancements

2. Emerging Technologies
- Blockchain applications
- AI in financial services
- Cloud computing adoption
- API integration

3. Regulatory Framework
- Digital banking regulations
- Consumer protection
- Data privacy requirements
- Cross-border considerations

4. Future Opportunities
- Digital lending platforms
- Investment apps
- Insurance technology
- Payment solutions

Financial institutions must stay ahead of these trends while ensuring security and compliance.`,
    author: 'Herve Clister Muvunyi',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000',
    tags: ['Digital Transformation', 'FinTech', 'Banking', 'Innovation']
  },
  {
    id: '4',
    title: 'Strategic Financial Planning for NGOs in East Africa',
    excerpt: 'Essential strategies for non-profit organizations to maintain financial sustainability while maximizing social impact.',
    content: `Effective financial planning is crucial for NGOs operating in East Africa to ensure sustainable operations and maximize social impact. This comprehensive guide explores key strategies and best practices.

Financial sustainability remains one of the biggest challenges facing NGOs in East Africa. A strategic approach to financial planning can help organizations better serve their communities while maintaining operational stability.

Key areas of focus include:

1. Funding Diversification
- Grant management
- Income-generating activities
- Donor relationships
- Community contributions

2. Financial Management
- Budgeting processes
- Cost control measures
- Cash flow management
- Risk assessment

3. Compliance and Reporting
- Donor requirements
- Regulatory compliance
- Impact measurement
- Transparency practices

4. Capacity Building
- Staff training
- Systems development
- Process improvement
- Knowledge management

NGOs must balance their social mission with financial sustainability to ensure long-term success.`,
    author: 'Herve Clister Muvunyi',
    date: 'March 8, 2024',
    readTime: '9 min read',
    category: 'Non-Profit',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=2000',
    tags: ['NGO', 'Financial Planning', 'Sustainability', 'Impact']
  },
  {
    id: '5',
    title: 'Audit Innovation: Embracing Technology in Modern Auditing',
    excerpt: 'How technological advancements are transforming audit practices and improving efficiency in financial assurance.',
    content: `The audit profession is undergoing significant transformation through the adoption of innovative technologies. These changes are reshaping how audits are conducted and improving their effectiveness.

Modern audit practices leverage advanced technologies to enhance accuracy, efficiency, and insight generation. This evolution is particularly relevant in the East African context, where digital adoption is rapidly increasing.

Key technological innovations include:

1. Data Analytics
- Advanced analysis techniques
- Pattern recognition
- Risk assessment
- Predictive analytics

2. Automation Tools
- Process automation
- Document analysis
- Transaction testing
- Report generation

3. Cloud Solutions
- Remote auditing
- Real-time collaboration
- Data security
- Access management

4. Emerging Technologies
- AI applications
- Blockchain integration
- Machine learning
- Natural language processing

Firms must adapt to these changes while maintaining audit quality and professional standards.`,
    author: 'Herve Clister Muvunyi',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Audit',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
    tags: ['Audit', 'Technology', 'Innovation', 'Efficiency']
  },
  {
    id: '6',
    title: 'Real Estate Investment Trends in East Africa 2024',
    excerpt: 'Analysis of current trends and opportunities in the East African real estate market, including emerging sectors and investment strategies.',
    content: `The East African real estate market continues to evolve, presenting new opportunities and challenges for investors. Understanding current trends is crucial for making informed investment decisions.

The region's real estate sector is experiencing significant transformation, driven by urbanization, demographic changes, and economic growth. These factors are creating new investment opportunities across various property segments.

Key market trends include:

1. Commercial Real Estate
- Office space evolution
- Retail transformation
- Industrial development
- Mixed-use projects

2. Residential Market
- Affordable housing
- Smart homes
- Green buildings
- Urban development

3. Investment Vehicles
- REITs development
- Property funds
- Joint ventures
- Alternative financing

4. Market Dynamics
- Price trends
- Demand patterns
- Regulatory changes
- Infrastructure impact

Investors should consider both opportunities and risks when developing their real estate strategies.`,
    author: 'Herve Clister Muvunyi',
    date: 'March 3, 2024',
    readTime: '7 min read',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000',
    tags: ['Real Estate', 'Investment', 'Market Trends', 'East Africa']
  },
  {
    id: '7',
    title: 'Risk Management Strategies for East African Businesses',
    excerpt: 'Comprehensive approach to identifying, assessing, and mitigating business risks in the East African context.',
    content: `Effective risk management is essential for businesses operating in East Africa's dynamic environment. A structured approach to risk management can help organizations protect value and seize opportunities.

Risk management in East Africa requires understanding both global best practices and local context. Organizations must develop strategies that address unique regional challenges while maintaining international standards.

Key risk management areas include:

1. Strategic Risks
- Market dynamics
- Competition
- Political factors
- Economic conditions

2. Operational Risks
- Process efficiency
- Technology
- Human resources
- Supply chain

3. Financial Risks
- Currency exposure
- Credit management
- Liquidity
- Market risks

4. Compliance Risks
- Regulatory changes
- Legal requirements
- Industry standards
- Environmental compliance

Organizations should regularly review and update their risk management frameworks.`,
    author: 'Herve Clister Muvunyi',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'Risk Management',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000',
    tags: ['Risk Management', 'Business Strategy', 'Compliance', 'East Africa']
  },
  {
    id: '8',
    title: 'Sustainable Finance: Opportunities in East Africa',
    excerpt: 'Exploring the growing sustainable finance sector in East Africa and its potential for businesses and investors.',
    content: `Sustainable finance is gaining momentum in East Africa, offering new opportunities for businesses and investors while promoting environmental and social responsibility.

The growth of sustainable finance in East Africa reflects global trends toward responsible investment and sustainable development. This shift is creating new opportunities while addressing pressing environmental and social challenges.

Key aspects include:

1. Green Finance
- Renewable energy
- Sustainable agriculture
- Clean technology
- Conservation projects

2. Social Impact
- Financial inclusion
- Healthcare financing
- Education funding
- Community development

3. Market Development
- Green bonds
- Impact investing
- Sustainable lending
- ESG integration

4. Policy Framework
- Regulatory support
- Incentive structures
- Reporting standards
- International alignment

Organizations should consider how sustainable finance can support their growth while contributing to sustainable development.`,
    author: 'Herve Clister Muvunyi',
    date: 'February 25, 2024',
    readTime: '7 min read',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000',
    tags: ['Sustainable Finance', 'Green Investment', 'Impact', 'Development']
  }
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-military-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-military-900 mb-12">Latest Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-military-900/90 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-military-500 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-military-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-military-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-sm text-military-600 bg-military-50 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-military-600 hover:text-military-800 transition-colors"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

export { blogPosts }