const rgbSelector = /rgb([\s\S]*?)[)]/gs;

// Converts a single string
export const rgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.replace(/[^\d,.]/g, '').split(',');

  return '#' + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
};

// Scans JSX element(s) for rgb expressions and replaces with hex equivalent
export const replaceAllRgbWithHex = (data: JSX.Element[] | JSX.Element) => {
  return Array.isArray(data)
    ? data.map(item => item.props.children.map((str: string) => _replace(str)))
    : Object.values(data).map(item => item?.children?.map((str: string) => _replace(str)));
};

const _replace = (str: string) => {
  if (typeof str === 'string' && str.includes(`rgb(`)) {
    str = str.replace(rgbSelector, rgbToHex(str));
  }

  return str;
};
