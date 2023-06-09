export interface Timeline {
  id: number
  year: string
  title: string
  duration: string
  details: string
}

export const timelines: Timeline[] = [
  {
    id: 0o1,
    year: 'Today',
    title: 'Solo Indie Developer',
    duration: '4 years',
    details: 'As a indie full-stack developer passionate about building innovative digital solutions. With a meticulous methodology and custom coding skills, I craft meaningful tools, experiences, and content for clients from the ground up. My goal is to empower individuals and organizations with imaginative technical solutions that truly resonate.'
  },
  {
    id: 0o2,
    year: '2020',
    title: 'bachelor of information technology - Harvard',
    duration: '5 years',
    details: 'He received his A.B. summa cum laude in information technology from Harvard College'
  },
  {
    id: 0o3,
    year: '2011',
    title: 'First Line of Code',
    duration: 'The beginning',
    details: 'I wrote my first "Hello World" started this journey into digital craftsmanship. As someone who had only ever identified as a blue collar worker, I could have never fathomed the doors that would open as a result of this one small act.'
  }
]