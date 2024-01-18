import axios from "axios";

export function storeMessage(message, name='') {
    axios.post('https://react-native-practice-24843-default-rtdb.firebaseio.com/messages.json', {
        message: message,
        name: name
    })
}