// LocalStorage privacy manager for user data
export const saveLocalData = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(`lifeforge_${key}`, JSON.stringify(value));
  }
};

export const getLocalData = (key) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(`lifeforge_${key}`);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const clearLocalData = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
