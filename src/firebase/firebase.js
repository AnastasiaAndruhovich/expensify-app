import firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID,
};

firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider, database as default}


/*
const printExpenses = () => {
    database.ref('expenses').once('value').then(snapshot => {
        const expenses = []
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })

        console.log(expenses)
    })

}

database.ref().on('value', printExpenses)


/!*
database.ref('expenses').push({
    description: 'test1',
    note: 'note1',
    amount: 34,
    createdAt: '1212121212112'
})
*!/





/!*database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
})

setTimeout(() => {
    database.ref('age').set(12)
}, 3500)

database.ref().set({
    name: 'Anastasia Andruhovich',
    age: 22,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'IBA Group'
    },
    location: {
        city: 'Minsk',
        country: 'Belarus'
    },
    isSingle: true
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('This failed. ', e)
})

database.ref('location/city').once('value').then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
}).catch((e) => {
    console.log('error', e)
})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Google',
    'location/city': 'Gomel'
})*!/

// database.ref('isSingle).remove().then(() => {
//     console.log('Data was removed')
// }).catch((e) => {
//     console.log('error', e)
// })
*/
