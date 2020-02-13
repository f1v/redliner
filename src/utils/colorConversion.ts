const rgbSelector = /rgb([\s\S]*?)[)]/gs;

// Converts a single string (binary shifting - https://ryanclark.me/rgb-to-hex-via-binary-shifting/)
export const rgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.replace(/[^\d,.]/g, '').split(',');

  return '#' + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
};

// Scans JSX element(s) for rgb expressions and replaces with hex equivalent
export const replaceAllRgbWithHex = (arr: JSX.Element[] | JSX.Element) => {
  if (Array.isArray(arr)) {
    return arr.map(item => {
      return item.props.children.map((str: string) => {
        return _replace(str);
      });
    });
  } else {
    return Object.values(arr).map(item => {
      return item?.children?.map((str: string) => {
        return _replace(str);
      });
    });
  }
};

const _replace = (str: string) => {
  if (typeof str === 'string' && str.includes(`rgb(`)) {
    str = str.replace(rgbSelector, rgbToHex(str));
  }

  return str;
};
