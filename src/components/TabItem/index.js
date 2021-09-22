// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, activeTabs, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickTabItem = () => {
    activeTabs(tabId)
  }

  const activeTabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-items">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
