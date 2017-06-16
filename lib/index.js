const beforeTimeout = (promise, timeout = 0) => {
  const error = 'Timeout occured before promise was resolved';
  const wait = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(error)), timeout),
  );
  return Promise.race([wait, promise]);
};

export default beforeTimeout;
