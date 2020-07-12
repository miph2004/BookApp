/* eslint-disable no-unused-vars */
import {Dimensions} from 'react-native';
const W = Dimensions.get('window').width;
const w = Dimensions.get('window').width / 2;
const h = Dimensions.get('window').height;
const Styles = {
  ViewDangNhap: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  TextRight: {
    color: '#555',
  },
  TextRightBottom: {
    color: '#000',
    fontSize: 17,
  },
  ViewRight: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  ViewIconRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ViewIconLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  InforAccountGeneral: {
    marginTop: 2,
  },
  InfoAccText: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    padding: 10,
  },
  InfoAccView: {
    backgroundColor: '#FFF',
  },
  ButtomLogout: {
    margin: 7,
    marginTop: 30,
    backgroundColor: '#000',
    padding: 15,
  },
  TextButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },
  ButtomSave: {
    margin: 10,
    padding: 10,
    width: 100,
    backgroundColor: 'red',
  },
  TextSave: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  ViewCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fce38a',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 15,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
  },
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewOptionMenu: {
    marginTop: 10,
  },
  ViewOptionMenuItem: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  ViewBookLikes: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 15,
  },
  ViewBook: {
    flexDirection: 'column',
    flex: 1,
    color: 'red',
    borderBottomWidth: 5,
    borderBottomColor: '#DDD',
    height: 200,
  },
  imgBook: {
    padding: 10,
    width: 90,
    height: 130,
  },
  ViewImg: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ViewText: {
    paddingLeft: 15,
    paddingTop: 10,
    width: 150,
    height: 100,
  },
  nameBook: {
    fontSize: 12,
  },
  priceBook: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  childCatalogContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 15,
    right: 10,
  },
  viewContentCatalog: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginRight: 10,
  },
  viewCatalog: {
    width: 100,
  },
  viewContentBook: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  pageHeader: {
    backgroundColor: 'blue',
    width: 412,
    height: 60,
    flexDirection: 'row',
  },
  touchBackIcon: {
    height: 45,
    width: 50,
  },
  x: {
    flexDirection: 'row',
  },
  goBackIcon: {
    marginLeft: 10,
    marginTop: 15,
  },
  headerContainer: {
    backgroundColor: '#fce38a',
    height: 60,
    opacity: 1,
  },
  headerText: {
    marginTop: 24,
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  costContainer: {
    flex: 1,
    backgroundColor: '#b1bbc7',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  btnCart: {
    width: '90%',
    marginLeft: 20,
    borderRadius: 10,
  },
  linearGradient: {
    height: (W * 3) / 8,
    borderRadius: 40,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  linearGradienth2: {
    height: (W * 3) / 14,
    borderRadius: 40,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  catalogButton: {
    marginBottom: 7,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 60,
    widht: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  tagComponent: {
    borderRadius: 40,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
};
export default Styles;