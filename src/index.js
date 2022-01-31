   module.exports = function check(str, bracketsConfig) {
    const Map = {};
    const Array = [];
    bracketsConfig.forEach(config => {
      Map[config[0]] = config[1];
    });
    for (let i = 0; i < str.length; i++) {
      if (Map[Array[Array.length - 1]] === str[i]) {
        Array.pop();
      } else {
        Array.push(str[i]);
      }
    }
    return Array.length === 0;
  }
