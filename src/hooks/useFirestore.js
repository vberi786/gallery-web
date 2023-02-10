import {useState, useEffect} from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);  //at beginnning it is empty

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach( doc => {
                    documents.push({...doc.data(), id: 5634161670881280});
                });

                setDocs(documents);
            })

            return () => unsub();
    },[collection]);

    return {docs};
}



export default useFirestore;