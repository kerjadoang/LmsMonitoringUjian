import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  headSubtitle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral60,
    fontFamily: Fonts.SemiBoldPoppins,
    marginBottom: 16,
  },
  headerOnSearchingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  headCancelTitle: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primary.base,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 21,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  cardIcon: {
    marginRight: 12,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
  },
  cardRoleTitle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark.neutral60,
    fontFamily: Fonts.RegularPoppins,
  },
  cardOnlineTitle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.success.base,
    fontFamily: Fonts.RegularPoppins,
  },
  badgeContainer: {
    backgroundColor: Colors.success.light2,
    borderRadius: 20,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeTitle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.success.base,
    fontFamily: Fonts.RegularPoppins,
  },
  noDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  noDataIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 12,
  },
  noDataTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    marginBottom: 6,
  },
  noDataDescription: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral60,
    fontFamily: Fonts.RegularPoppins,
    textAlign: 'center',
  },
  swipeUpContainer: {
    padding: 16,
  },
  swipeUpMoreUserCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  swipeUpEditGroupCardTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.RegularPoppins,
    color: Colors.dark.neutral100,
    marginLeft: 12,
  },
});
