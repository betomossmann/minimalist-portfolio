export interface Portfolio {
  id: number
  title: string
  imgUrl: string
  stack: string[]
  link: string
}

export const portfolios: Portfolio[] = [
  {
    id: 0o1,
    title: 'Node Clean API',
    imgUrl: '',
    stack: ['Node', 'Typescript', 'TDD', 'DDD', 'SOLID'],
    link: ''
  },
  {
    id: 0o2,
    title: 'Clean React',
    imgUrl: '',
    stack: ['React', 'Typescript', 'TDD', 'DDD', 'SOLID'],
    link: ''
  },
  {
    id: 0o3,
    title: 'Portfolio Fancy',
    imgUrl: '',
    stack: ['NextJS', 'Typescript', 'TDD', 'DDD', 'SOLID'],
    link: ''
  },
]