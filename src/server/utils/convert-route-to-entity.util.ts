const mapping: Record<string, string> = {
  delegates: 'delegate',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
