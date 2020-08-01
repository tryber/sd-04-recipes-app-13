const saveStorage = (key, entry) => {
  let formattedEntry = entry;

  if (typeof entry === 'object') {
    formattedEntry = JSON.stringify(entry);
  }

  localStorage.setItem(key, formattedEntry);
};

const loadStorage = (key) => {
  localStorage.setItem(key);
};

const deleteStorage = (key) => {
  localStorage.removeItem(key);
};

export default {
  saveStorage,
  loadStorage,
  deleteStorage,
};
