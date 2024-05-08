import { RealState } from "../../types/real-state";

export const DEFAULT_IMAGE = 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A0d37867b-d0a8-44b7-8c62-a1c73809e34e?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1'

export const realStates: RealState[] = [
  {
    id: '1',
    owner: 'Ricardo M',
    location: 'Perez Zeledón',
    description: '2 bed, 2 bath house with small front yard. Beautiful blueish color.',
    listingPrice: 500000,
    isPublished: true,
    photoUrl: DEFAULT_IMAGE
  },
  {
    id: '2',
    owner: 'Ricardo M',
    location: 'Perez Zeledón',
    description: '2 bed, 2 bath house with small front yard. Beautiful blueish color.',
    listingPrice: 500000,
    isPublished: false,
    photoUrl: DEFAULT_IMAGE
  },
  {
    id: '3',
    owner: 'Rodolfo Rojas',
    location: 'San Carlos',
    description: '2 bed, 2 bath house with small front yard. Beautiful blueish color.',
    listingPrice: 500000,
    isPublished: true,
    photoUrl: DEFAULT_IMAGE
  }
]