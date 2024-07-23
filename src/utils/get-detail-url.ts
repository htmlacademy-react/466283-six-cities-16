export const getDetailUrl = (url: string, id: string): string => {
  url = url.replace(':id', id);
  return url;
};
