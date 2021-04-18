export const goodConnection = (): boolean => {
  const nav = navigator as any;

  const connection =
    nav.connection || nav.mozConnection || nav.webkitConnection;

  if (connection) {
    if (connection.saveData) {
      return false;
    }
    const connectionsToAvoid = ['slow-2g', '2g' /*'3g', '4g'*/];
    const effectiveType = connection.effectiveType || '';
    if (connectionsToAvoid.includes(effectiveType)) {
      return false;
    }
  }
  return true;
};
