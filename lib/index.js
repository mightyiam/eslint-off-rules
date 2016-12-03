module.exports = (rules) => {
  return rules.reduce((config, rule) => {
    if (typeof rule !== 'string') throw new TypeError()
    config[rule] = 'off'
    return config
  }, {})
}
