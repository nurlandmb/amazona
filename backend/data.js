import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nurlan',
      email: 'nzt.dmb@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'Basir',
      email: 'basir@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    },
  ],
  products: [
    {
      name: 'Nike slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Adidas fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Nike slim pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pant',
    },
    {
      name: 'Adidas slim pant',
      slug: 'adidas-slim-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pant',
    },
  ],
};

export default data;
