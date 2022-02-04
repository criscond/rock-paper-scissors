const createElement = ({ htmlTag, className = null, id = null, ariaLabel = null, role = null }) => {
  const element = document.createElement(htmlTag);

  if (className) {
    element.className = className;
  }

  if (id) {
    element.id = id;
  }

  if (ariaLabel) {
    element.ariaLabel = ariaLabel;
  }

  if (role) {
    element.setAttribute('role', role);
  }

  return element;
}

export { createElement };
