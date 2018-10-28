import {firebaseDatabase} from '../database/firebase'

export default class FirebaseService {
  static getDataList = (nodePath, callback) => {

    let query = firebaseDatabase.ref(nodePath).orderByKey()
                                
    query.on('value', dataSnapshot => {
      let items = [];
      dataSnapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item['key'] = childSnapshot.key;
        items.push(item);
      });
      items.reverse()
      callback(items);
    });
    return query;
  };
  static pushData = (node, objToSubmit) => {
    const ref = firebaseDatabase.ref(node).push()
    const id = firebaseDatabase.ref(node).push().key
    ref.set(objToSubmit)
    return id
  }

}