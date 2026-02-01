export const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`data saved. key: ${key}`);
  } catch (err) {
    console.error(`Error saving data to local storage: ${err.message}`);
  }
};

export const loadFromStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      console.log(`Key: "${key}" not found in storage`);
      return null;
    }

    const data = JSON.parse(item);
    return data;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    return null;
  }
};

export const clearStorage = () => {
  localStorage.clear();
};
