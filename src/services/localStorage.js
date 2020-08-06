export const saveStorage = (key, entry) => {
  let formattedEntry = entry;

  if (typeof entry === 'object') {
    formattedEntry = JSON.stringify(entry);
  }

  localStorage.setItem(key, formattedEntry);
};

export const loadStorage = (key) => {
  if (key === 'user') return JSON.parse(localStorage.getItem(key));
  return localStorage.getItem(key);
};

export const deleteStorage = (key) => {
  localStorage.removeItem(key);
};
