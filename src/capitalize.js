const capitalize = (text) => {
  if (text.length === 0) {
    return text;
  }
  const [firstChar, ...restChars] = text;
  return `${firstChar.toUpperCase()}${restChars.join('')}`;
  };

  export default capitalize;