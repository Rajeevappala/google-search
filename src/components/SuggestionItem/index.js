// Write your code here

const SuggestionItem = props => {
  const {propsEle} = props
  const {suggestion} = propsEle

  return (
    <li>
      <p>{suggestion}</p>
    </li>
  )
}

export default SuggestionItem
