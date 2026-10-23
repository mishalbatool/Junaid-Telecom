export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  itemCount: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  categoryFilter: 'audio' | 'chargers' | 'cases' | 'power' | 'accessories';
  description: string;
  image: string;
  highlight: string;
  whatsappMessage: string;
}

export interface RepairService {
  id: string;
  title: string;
  description: string;
  turnaround: string;
  icon: string;
  features: string[];
}

export interface TrustPillar {
  title: string;
  description: string;
  icon: string;
}
