import { storage as firebaseStorage } from 'firebase';

export function upload (settings) {
  const {
    file,
    ref,
    onProgress,
    onError,
    onComplete,
  } = settings;

  const completeRef = `${ref}/${file.name}`;

  const storageRef = firebaseStorage().ref(completeRef);

  const task = storageRef.put(file);

  task.on('state_changed', (snapshot) => {
    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

    if (onProgress) {
      onProgress(percentage)
    }
  }, (error) => {
    if (onError) {
      onError(error);
    }
  }, () => {
    storageRef.getDownloadURL().then((url) => {
      if (onComplete) {
        onComplete(url);
      }
    })
  })
}
