module.exports = function check(str, bracketsConfig) {
  const brackets = [];
  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case '[': brackets.push('['); break;
      case '{': brackets.push('{'); break;
      case '(': brackets.push('('); break;
      case '<': brackets.push('<'); break;
      case ']': if (brackets.at(-1) === '[') brackets.pop();
      else return false; break;
      case '}': if (brackets.at(-1) === '{') brackets.pop();
      else return false; break;
      case ')': if (brackets.at(-1) === '(') brackets.pop();
      else return false; break;
      case '>': if (brackets.at(-1) === '<') brackets.pop();
      else return false; break;
      default: return false;
    }
  }
  if (brackets.length === 0) return true;
  return false;
}
