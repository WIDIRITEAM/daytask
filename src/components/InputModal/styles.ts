import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: Platform.OS === 'android' ? 1 : 20,
    paddingVertical: Platform.OS === 'android' ? 5 : 12,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: '85%',
    fontSize: 16,
    
  },
  closeIcon: {
    width: 20,
    height: 20
  },
  titleTaskModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  inputsModalContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
  }
});