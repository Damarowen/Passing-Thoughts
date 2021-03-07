export function getNewExpirationTime() {
    return Date.now() + 15 * 1000;
  }
  
  let nextId = 0;
  export function generateId() {
    nextId += 1;
    const result = nextId;
    return result;
  }