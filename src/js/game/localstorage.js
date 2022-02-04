const saveData = (key, value) => localStorage.setItem(key, value);

const getSavedData = (key) => localStorage.getItem(key);

export {
  saveData,
  getSavedData,
}
