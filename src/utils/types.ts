export type CSSProperty = Omit<keyof CSSStyleDeclaration, number>;

export type CSSPropertyIndex = {
  [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P];
};
