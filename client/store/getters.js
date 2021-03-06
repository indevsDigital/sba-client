const pkg = state => state.pkg
const app = state => state.app
const device = state => state.app.device
const authenticated = state => state.app.auth
const sidebar = state => state.app.sidebar
const effect = state => state.app.effect
const menuitems = state => state.menu.items
const componententry = state => {
  return state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}

export {
  pkg,
  app,
  device,
  authenticated,
  sidebar,
  effect,
  menuitems,
  componententry
}
