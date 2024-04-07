interface Classname {
  [key: string]: boolean;
}

function cn(classes: Classname) {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
}

export default cn;
