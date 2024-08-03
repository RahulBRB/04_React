export function getNewExpirationTime() {
    const FIFTEEN_SECONDS = 15 * 1000;
    return Date.now() + FIFTEEN_SECONDS;
  }
  
  let nextId = 0;
  export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
  }
