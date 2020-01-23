import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export default StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: colors.white
  },
  callout: {
    width: 240,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  name: {
    fontWeight: '700',
    fontSize: 16
  },
  bio: {
    color: colors.grey,
    marginVertical: 5
  },
  searchForm: {
    //position: 'absolute',
    //bottom: 0,
    height: 50,
    //left: 20,
    //right: 20,
    //flex: 0,
    zIndex: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: colors.white,
    color: colors.textDark,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    elevation: 2
  },
  searchButton: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 25,
    shadowColor: colors.black,
    marginLeft: 10,
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    elevation: 2
  }
});
