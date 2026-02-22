export interface Service {
  id: string
  title: string
  shortDesc: string
  fullDesc: string
  features: string[]
  icon: string
  category: string
}

export const services: Service[] = [
  {
    id: 'seo',
    title: 'SEO',
    shortDesc: 'Dominate search rankings and drive organic traffic with data-driven SEO strategies.',
    fullDesc: 'Our SEO experts optimize your digital presence across all search engines. We conduct comprehensive keyword research, implement on-page and technical optimizations, build high-quality backlinks, and continuously monitor performance. Our strategies are tailored to your industry and competitive landscape, ensuring sustainable growth in organic visibility.',
    features: [
      'Technical SEO Audit & Optimization',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Link Building & Authority',
      'Content Strategy',
      'Monthly Reporting & Analytics',
    ],
    icon: '🔍',
    category: 'Digital Marketing',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    shortDesc: 'Build authentic communities and drive engagement across all major social platforms.',
    fullDesc: 'We create compelling social media strategies that resonate with your target audience. From content creation and community management to paid advertising and influencer partnerships, we ensure your brand stays relevant and engaging. Our data-driven approach optimizes every campaign for maximum ROI.',
    features: [
      'Content Calendar & Strategy',
      'Creative Content Production',
      'Community Management',
      'Paid Social Advertising',
      'Influencer Partnerships',
      'Analytics & Reporting',
    ],
    icon: '📱',
    category: 'Digital Marketing',
  },
  {
    id: 'pr',
    title: 'PR & Press',
    shortDesc: 'Elevate your brand narrative and secure premium media coverage.',
    fullDesc: 'Our PR specialists craft compelling brand stories and secure high-impact media placements. We build relationships with journalists, manage crisis communications, and amplify your brand message across traditional and digital media. Every campaign is designed to enhance your brand reputation and credibility.',
    features: [
      'Press Release Writing & Distribution',
      'Media Relations',
      'Crisis Communication',
      'Brand Storytelling',
      'Media Monitoring',
      'Reputation Management',
    ],
    icon: '📰',
    category: 'Public Relations',
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    shortDesc: 'Connect with authentic voices and reach highly engaged audiences.',
    fullDesc: 'We identify, negotiate, and manage relationships with influencers aligned with your brand values. From micro-influencers to mega creators, we design partnerships that generate authentic engagement and drive conversions. Our network spans multiple industries and demographics.',
    features: [
      'Influencer Discovery & Vetting',
      'Campaign Strategy & Planning',
      'Negotiation & Contracts',
      'Content Collaboration',
      'Performance Tracking',
      'ROI Analysis',
    ],
    icon: '⭐',
    category: 'Creator Marketing',
  },
  {
    id: 'linkedin-youtube',
    title: 'LinkedIn & YouTube Marketing',
    shortDesc: 'Master B2B and video content strategies for maximum visibility.',
    fullDesc: 'Leverage the power of professional networking and video content. We develop B2B strategies that position your brand as an industry leader on LinkedIn, and create compelling video content for YouTube that builds authority and drives subscriptions. Both platforms require specialized expertise—we provide it.',
    features: [
      'LinkedIn Strategy & Content',
      'Video Script Writing',
      'YouTube Channel Optimization',
      'B2B Lead Generation',
      'Thought Leadership',
      'Channel Growth Strategy',
    ],
    icon: '🎥',
    category: 'Content Marketing',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDesc: 'Generate high-quality leads and build a sustainable sales pipeline.',
    fullDesc: 'Our lead generation experts use a mix of inbound and outbound strategies to fill your pipeline with qualified prospects. From targeted advertising and landing page optimization to email campaigns and sales enablement, we focus on quantity and quality. Every lead is tracked and optimized for conversion.',
    features: [
      'Landing Page Design & Optimization',
      'Email Campaign Management',
      'Lead Scoring & Nurturing',
      'Paid Advertising (Google, FB, LinkedIn)',
      'CRM Integration',
      'Conversion Tracking',
    ],
    icon: '📊',
    category: 'Sales & Growth',
  },
  {
    id: 'podcast-production',
    title: 'Podcast Production',
    shortDesc: 'Create engaging audio content that builds loyal audiences.',
    fullDesc: 'From concept to distribution, we handle every aspect of podcast production. Our team manages recording, editing, artwork design, and platform optimization. Whether you\'re starting a branded podcast or scaling an existing show, we ensure professional quality and consistent growth.',
    features: [
      'Podcast Strategy & Planning',
      'Professional Recording & Editing',
      'Show Artwork & Branding',
      'Platform Distribution',
      'Guest Booking & Management',
      'Listener Growth Strategy',
    ],
    icon: '🎙️',
    category: 'Audio Content',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortDesc: 'Build fast, beautiful, and conversion-optimized websites.',
    fullDesc: 'Our development team creates custom websites that are visually stunning and conversion-focused. We combine modern design with technical excellence, ensuring optimal performance, security, and scalability. Every site is built for growth and user experience.',
    features: [
      'Custom Website Design',
      'Responsive Development',
      'E-Commerce Solutions',
      'CMS Implementation',
      'Performance Optimization',
      'SEO-Friendly Architecture',
    ],
    icon: '🌐',
    category: 'Web Development',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'Create intuitive digital experiences that delight users.',
    fullDesc: 'Our design-first approach ensures every digital touchpoint is user-centered and visually compelling. From wireframes and prototypes to final design systems, we create interfaces that users love. We combine research, strategy, and creativity to deliver exceptional results.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Design Systems',
      'Usability Testing',
      'Interactive Prototypes',
    ],
    icon: '🎨',
    category: 'Design',
  },
  {
    id: 'product-shoot',
    title: 'Product Shoot',
    shortDesc: 'Professional product photography that showcases your offerings.',
    fullDesc: 'Our professional photographers and stylists create stunning product imagery that drives sales. From studio photography to lifestyle shots, we understand how to highlight product benefits and create emotionally compelling content.',
    features: [
      'Studio Photography Setup',
      'Lifestyle Product Shoots',
      '360° Product Imaging',
      'Post-Processing & Editing',
      'Content Licensing',
      'Visual Asset Management',
    ],
    icon: '📸',
    category: 'Content Production',
  },
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
}
