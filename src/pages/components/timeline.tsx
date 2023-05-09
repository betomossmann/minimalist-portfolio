import { timelines } from '../data/timeline'
import TimelineItem from './timeline-item'

function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
        {timelines.map(timeline => (
          <TimelineItem
            key={timeline.id}
            year={timeline.year}
            title={timeline.title}
            duration={timeline.duration}
            details={timeline.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline
