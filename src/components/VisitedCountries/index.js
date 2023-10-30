import './index.css'

const VisitedCountries = props => {
  const {details, onClickRemove} = props
  const {id, name, imageUrl, isVisited} = details

  const onClickRemoveBtn = () => {
    onClickRemove(id)
  }

  return (
    <>
      {isVisited ? (
        <li className="visited-list">
          <img src={imageUrl} className="image" alt="thumbnail" />
          <div className="btn-county">
            <p className="name">{name}</p>
            <button
              type="button"
              className="remove-btn"
              onClick={onClickRemoveBtn}
            >
              Remove
            </button>
          </div>
        </li>
      ) : null}
    </>
  )
}
export default VisitedCountries
