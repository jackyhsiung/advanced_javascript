function myQuerySelectorAll(selector) {
  const result = []
  traverse(document.documentElement, selector, result)
  return result
}

function traverse(node, selector, result) {
  if (!node) return 
  if (node.matches(selector)) result.push(node)
  for (let child of node.children) {
    traverse(child, selector, result)
  }
}