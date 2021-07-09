import './index.css'

const TabItem = props => {
  const {tabDetails, updateProjectList, isClicked} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    updateProjectList(tabId)
  }

  const style = isClicked ? 'selected-button' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`${style} tab-btn`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
