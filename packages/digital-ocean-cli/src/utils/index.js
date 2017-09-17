const guard = async (callback) => {
  try {
    await callback();
    process.exit(0);
  } catch (error) {
    console.error(error.stack);
    process.exit(1);
  }
};


export {
  guard,
};
