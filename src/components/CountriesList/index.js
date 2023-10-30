import './index.css'
import {Button} from './styledComponents'

const CountriesList = props => {
  const {Details, clickOnVisitBtn} = props
  const {id, name, isVisited} = Details
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickVisitBtn = () => {
    clickOnVisitBtn(id)
  }

  return (
    <>
      <li className="list-item">
        <p className="para">{name}</p>
        {isVisited ? (
          <p className="text">{text}</p>
        ) : (
          <Button type="button" bgColor={isVisited} onClick={onClickVisitBtn}>
            {text}
          </Button>
        )}
      </li>
      <hr className="line" />
    </>
  )
}
export default CountriesList
