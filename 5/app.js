import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { upload } from "./upload.js";

const firebaseConfig = {
  apiKey: "AIzaSyDm1K5fgF_L9zbFUdd-IR-vacvtiWU9xsk",
  authDomain: "uploader-d899f.firebaseapp.com",
  projectId: "uploader-d899f",
  storageBucket: "uploader-d899f.appspot.com",
  messagingSenderId: "821308702535",
  appId: "1:821308702535:web:c1f6d2fc6bc3d46ce55662",
};

initializeApp(firebaseConfig);

const storage = getStorage();

// -----------------------------------------------------

upload("#file", {
  multi: true,
  accept: [".png", ".jpg", ".jpeg", ".gif", ".svg"],
  onUpload(files, blocks) {
    files.forEach((file, index) => {
      const storageRef = ref(storage, `images/${file.name}`);
      const task = uploadBytesResumable(storageRef, file);

      task.on(
        "state_changed",
        (snapshot) => {
          const progress =
            ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(
              0
            ) + "%";

          const block = blocks[index].querySelector(".preview-info-progress");
          block.textContent = progress;
          block.style.width = progress;
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(storageRef).then((url) => {
            console.log(url);
          });
        }
      );
    });
  },
});
