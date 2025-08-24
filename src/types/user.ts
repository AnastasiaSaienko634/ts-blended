export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  phone: string;
  website: string;
}
