//import { initializeApp } from "firebase/app";
import {initializeApp} from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import { projectFirestore } from "./firebase/config";

const app = initializeApp(projectFirestore);
const db = getFirestore(app);

export function addJob(job) {
  async function addJobToFirestore() {
    try {
      const data = {
        id: job.id,
        title: job.title,
        description: job.description,
        salary: job.salary,
        date_of_creation: Timestamp.fromDate(new Date().getTime()),
        years_of_experience: job.years_of_experience
      };
      await setDoc(doc(db, "jobs"), data);
    } catch (error) {
      console.error(error);
    }
  }

  return { addJobToFirestore };
}
