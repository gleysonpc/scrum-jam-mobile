export const colors = {
  primary: '#0082ff',
  secondary: '#50c8a8',
  danger: '#c0392b',
  backgroundDark: '#212032',
  backgroundMedium: '#2a2c3f',
  backgroundLight: '#606074',
  white: '#FFF',
};

export const components = {
  label: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: colors.backgroundLight,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: colors.white,
    fontSize: 20,
    marginBottom: 15,
  },
  button: {
    height: 45,
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  buttonText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
  },
};
