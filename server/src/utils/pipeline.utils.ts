const pipeline = (...steps) => async input => {
  let result = input;
  for (const step of steps) result = await step(result);
  return result;
};

export default pipeline;
