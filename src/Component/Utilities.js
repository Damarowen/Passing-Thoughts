export function getNewExpirationTime() {
  //*15 detik
    return Date.now() + 15 * 1000;
  }
  
  let nextId = 0;
  export function generateId() {
    nextId += 1;
    const result = nextId;
    return result;
  }