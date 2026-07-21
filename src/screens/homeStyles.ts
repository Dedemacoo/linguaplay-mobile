import { StyleSheet } from 'react-native';

export const getHomeStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  navigationFabContainer: {
    position: 'absolute',
    right: 20,
    bottom: 130,
    gap: 12,
    alignItems: 'center',
    zIndex: 99,
  },
  navFabButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  floatingMascotContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  aiModalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  aiModalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
    backgroundColor: '#0F172A',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  aiModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  aiModalHeaderText: {
    marginLeft: 15
  },
  aiModalTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  aiModalSubtitle: {
    color: '#2DD4BF',
    fontSize: 14
  },
  aiInfoCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10
  },
  aiInfoTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 5
  },
  aiInfoText: {
    color: '#94A3B8'
  },
  aiActionButton: {
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20
  },
  aiActionButtonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
