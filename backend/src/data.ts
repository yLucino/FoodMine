export const sample_foods: any[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 9,
    cookTime: '30-40',
    favorite: false,
    origins: ['italia', 'Europa'],
    imageUrl: 'assets/food01.png',
    tags: ['FastFood', 'Pizza'],
  },
  {
    id: '2',
    name: 'X-Egg',
    price: 5,
    cookTime: '10-15',
    favorite: true,
    origins: ['Brazil', 'America'],
    imageUrl: 'assets/food02.png',
    tags: ['FastFood', 'Hamburge', 'Lunch'],
  },
  {
    id: '3',
    name: 'Hot Dog',
    price: 6,
    cookTime: '5-10',
    favorite: true,
    origins: ['EUA', 'America'],
    imageUrl: 'assets/food03.png',
    tags: ['FastFood', 'Houselike', 'Lunch'],
  }
]

export const sample_tags: any[] = [
  { name: 'All', count: 3 },
  { name: 'FastFood', count: 3 },
  { name: 'Pizza', count: 1 },
  { name: 'Lunch', count: 2 },
  { name: 'SlowFood', count: 0 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 0 },
  { name: 'Soup', count: 0 },
];

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Luciano Chiodini",
    email: "chiodiniluciano@gmail.com",
    password: "224322",
    address: "Brazil",
    isAdmin: false,
  },
];