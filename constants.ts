import { Event } from './types';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Space {
  id: string;
  name: string;
  city: string;
  address: string;
  image: string;
  type: string;
  capacity: number;
  description: string;
  amenities: string[];
  price: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export const EVENTS_DATA: Event[] = [
  {
    id: '1',
    title: 'Youth Perspectives on Shared Spaces',
    description: 'In September 2023, 10 young people aged 16-18 from Belfast curated a photo exhibition showcasing how public spaces like parks, restaurants, and buses shape their experiences of community relations. The event featured their reflections on growing up in the city and how shared spaces influence intergroup interactions.',
    dateRange: '19/09-19/10',
    images: [
      'https://picsum.photos/seed/belfast1/800/600',
      'https://picsum.photos/seed/belfast2/800/600'
    ],
    location: 'Belfast',
    category: 'Exhibition'
  },
  {
    id: '2',
    title: 'Shared Spaces Through Young Eyes',
    description: 'Held in June 2024, this exhibition presented photographs and narratives from youth in Bradford, exploring how shared public environments affect social cohesion and their sense of belonging in a multicultural city.',
    dateRange: '19/09-19/10',
    images: [
      'https://picsum.photos/seed/bradford1/800/600',
      'https://picsum.photos/seed/bradford2/800/600'
    ],
    location: 'Bradford',
    category: 'Exhibition'
  },
  {
    id: '3',
    title: 'Peachtree Shared Space Demonstration Project Launch',
    description: 'A temporary transformation of three blocks on Peachtree Street in Atlanta to test shared space concepts. The project aimed to prioritize pedestrians and assess how reduced vehicle dominance could enhance urban vibrancy and inform final design decisions.',
    dateRange: '19/09-19/10',
    images: [
      'https://picsum.photos/seed/atlanta1/800/600',
      'https://picsum.photos/seed/atlanta2/800/600'
    ],
    location: 'Atlanta',
    category: 'Urban Planning'
  },
  {
    id: '4',
    title: 'Findings from the Shared Spaces Project',
    description: 'A physical exhibition was held to present findings from the Shared Spaces Project, including youth photography and interviews. The event highlighted how public spaces impact youth perceptions of community relations in Belfast.',
    dateRange: '19/09-19/10',
    images: [
      'https://picsum.photos/seed/conf1/800/600',
      'https://picsum.photos/seed/conf2/800/600'
    ],
    location: 'Belfast',
    category: 'Presentation'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: '1',
    name: 'Jane Cooper',
    role: 'Lead Urban Planner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '2',
    name: 'Courtney Henry',
    role: 'Community Specialist',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '3',
    name: 'Devon Lane',
    role: 'Design Coordinator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '4',
    name: 'Jerome Bell',
    role: 'Research Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '5',
    name: 'Esther Howard',
    role: 'City Scout Leader',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '6',
    name: 'Savanah Nguyen',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '7',
    name: 'Darrell Steward',
    role: 'Inclusive Design Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '8',
    name: 'Ralph Edwards',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const SPACES_DATA: Space[] = [
  {
    id: '1',
    name: 'The Foundry',
    city: 'Belfast',
    address: '12 Cathedral Quarter, Belfast',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Creative Hub',
    capacity: 45,
    description: 'Nestled in the heart of the Cathedral Quarter, The Foundry is a vibrant open-plan space designed for creative professionals and digital nomads. With exposed brick walls, abundant natural light, and modular furniture, it encourages serendipitous collaboration.',
    amenities: ['High-speed WiFi', 'Coffee Bar', 'Meeting Rooms', 'Print Station', 'Pet Friendly'],
    price: '$25/day'
  },
  {
    id: '2',
    name: 'Ormeau Loft',
    city: 'Belfast',
    address: '88 Ormeau Road, Belfast',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Quiet Focus',
    capacity: 20,
    description: 'A sanctuary for deep work. The Ormeau Loft offers sound-dampened individual pods and a silent library zone, perfect for writers, researchers, and anyone needing undistracted focus time.',
    amenities: ['Silent Zones', 'Ergonomic Chairs', 'Tea Station', 'Lockers', 'Monitor Rentals'],
    price: '$30/day'
  },
  {
    id: '3',
    name: 'Peachtree Station',
    city: 'Atlanta',
    address: '1200 Peachtree St NE, Atlanta',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Enterprise Suite',
    capacity: 120,
    description: 'Located in Midtown Atlanta, Peachtree Station provides fully furnished private office suites for growing teams. Access premium amenities including boardroom facilities, a dedicated reception, and panoramic city views.',
    amenities: ['Private Suites', 'Boardrooms', 'Receptionist', 'Mail Handling', 'Gym Access'],
    price: 'Custom'
  },
  {
    id: '4',
    name: 'Midtown Collective',
    city: 'Atlanta',
    address: '45 14th St, Atlanta',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Co-working',
    capacity: 60,
    description: 'A bustling hub for startups and freelancers. Midtown Collective features large communal tables, breakout areas, and an event stage for pitch nights and workshops. Energy and innovation happen here.',
    amenities: ['Event Stage', 'Communal Kitchen', 'Bike Storage', 'Showers', 'Networking Events'],
    price: '$35/day'
  },
  {
    id: '5',
    name: 'Bradford Mill',
    city: 'Bradford',
    address: 'Lister Mills, Bradford',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Artist Studios',
    capacity: 35,
    description: 'Converted from a historic textile mill, this space offers messy/wet studios for visual artists, sculptors, and makers. High ceilings and industrial charm provide the perfect backdrop for creation.',
    amenities: ['Washout Sinks', 'Natural Light', 'Gallery Wall', 'Loading Dock', '24/7 Access'],
    price: '$200/mo'
  },
  {
    id: '6',
    name: 'City Park Hub',
    city: 'Bradford',
    address: 'Centenary Square, Bradford',
    image: 'https://images.unsplash.com/photo-1568992687947-86c22da06649?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Meeting Center',
    capacity: 50,
    description: 'Overlooking Centenary Square, this modern facility is optimized for meetings, workshops, and training sessions. Flexible room configurations and top-tier AV equipment ensure your events run smoothly.',
    amenities: ['AV Equipment', 'Catering Service', 'Video Conferencing', 'Whiteboards', 'Lounge Area'],
    price: '$50/hr'
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: 'FlexPass',
    price: '20',
    description: 'Perfect for digital nomads and students who need a reliable, inspiring place to work occasionally.',
    features: [
      'Shared workspaces during business hours',
      'High-speed fiber internet',
      'Community events and networking opportunities',
      'Access to open-source design kits',
      'Unlimited coffee & tea'
    ]
  },
  {
    name: 'Dedicated Desk Pro',
    price: '60',
    description: 'Your own personal spot in the collective. Leave your monitor, store your gear, and settle in.',
    features: [
      '24/7 Building Access',
      'Fixed personal desk with ergonomic chair',
      'Lockable storage unit',
      '5 hours of meeting room credits/month',
      'Mail and package handling'
    ]
  },
  {
    name: 'DedicatedDesk Pro',
    price: '120',
    description: 'For small teams and artists requiring more space and privacy while staying connected to the hub.',
    features: [
      'Private enclosed workspace',
      'Priority access to exhibition spaces',
      'Unlimited meeting room usage',
      'Quarterly zine feature',
      'One-on-one mentorship sessions'
    ]
  }
];