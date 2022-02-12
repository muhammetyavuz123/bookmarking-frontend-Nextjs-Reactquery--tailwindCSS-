type products = {
  _id: string;
  title: string;
  description: string;
  count: number;
  price: number;
  photos: string[];
  hasMore: any;
};
type product = {
  _id: string;
  title: string;
  description: string;
  count: number;
  price: number;
  photos: string[];
  createdAt: string;
};

type order = {
  _id: string;
  adress: string;
  items: {
    _id: string;
    photos: string;
    title: string;
    description: string;
  };
  user: {
    _id: string;
    role: string;
    email: string;
  };
};
