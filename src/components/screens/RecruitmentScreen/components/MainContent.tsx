import { ChildrenListItem } from '../../../common/ChildrenList'
import { recruitmentItems } from '../../../../constants/recruitment'
import { CardItem } from '../../../common/CardItem'

export const MainContent: React.FC = () => {
  return (
    <div className="py-5">
      <div className="container mx-auto pt-5">
        <div className="grid grid-cols-3">
          <ChildrenListItem
            of={recruitmentItems}
            render={(item, _) => (
              <div className="col-span-3 sm:col-span-1 relative px-[15px] ">
                <CardItem
                  title={item.title}
                  image={item.image}
                  date={item.date}
                  day={item.day}
                  month={item.month}
                  numberOfComment={item.numberOfComment}
                  description={item.description}
                  view={item.view}
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}
