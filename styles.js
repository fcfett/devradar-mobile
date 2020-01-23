export const colors = {
  primary: '#7d40e7',
  white: '#fff',
  grey: '#666',
  greyMedium: '#999',
  black: '#000',
  textDark: '#333',
  textLight: '#fff'
};

export const shadow = ({
  color = colors.black,
  radius = 2,
  height = 4,
  width = 4,
  elevation = 20
}) => ({
  elevation,
  shadowColor: color,
  shadowRadius: radius,
  shadowOffset: {
    width,
    height
  }
});

export default {
  colors,
  shadow
};
