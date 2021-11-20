const modules = {};

const files = require.context('.', true, /\.(vue)$/);
files.keys().forEach(key => {
  const component = files(key).default;
  modules[`${component.name}`] = component;
});

export default modules;
