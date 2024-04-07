interface Classname {
  [key: string]: boolean;
}

export function cn(classes: Classname) {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
}
