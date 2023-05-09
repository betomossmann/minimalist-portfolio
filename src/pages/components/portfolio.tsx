import { portfolios } from '../data/portfolio'
import PortfolioItem from '../components/portfolio-item'

function Portfolio() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {portfolios.map(project => (
          <PortfolioItem 
            key={project.id}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
