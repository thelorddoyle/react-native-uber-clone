function getCurrentRouteName(): string | null {
  const tag = "[getCurrentRouteNameSync] "
  const navState = getStore().getState().nav
  const currentRoute = getActiveRouteState(navState)
  console.log(tag + " currentRoute > ", currentRoute)
  return currentRoute && currentRoute.routeName ? currentRoute.routeName : null
}