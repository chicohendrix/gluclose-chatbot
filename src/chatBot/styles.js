import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  incomingMsgBox: {
    backgroundColor: 'lightblue',
    maxWidth: '80%',
    borderRadius: 10,
    padding: 2,
    alignSelf: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 0.1,
    borderColor: 'grey',
  },
  incomingMsgText: {color: 'black', fontSize: 25},

  sentMsgBox: {
    backgroundColor: 'green',
    maxWidth: '70%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 20,
  },

  sentMsgText: {color: '#fff', fontSize: 25},

  typeMsgContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    bottom: -40,
  },

  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: 'grey',
    padding: 8,
    width: '80%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  sendBtn: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  sendTxt: {color: 'white'},
});

export default styles;