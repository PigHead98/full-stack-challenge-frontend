const prepareDataList = (value: string) => {
  const [getTitle] = value.split("\n");
  const title = getTitle.substring(0, 50);
  const description = value.substring(title.length);

  return {
    title,
    description,
    value,
  };
};

export const CommonHelper = {
  prepareDataList,
};
