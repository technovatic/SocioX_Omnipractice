// Import necessary functions from Firebase
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// Initialize Firebase Auth
const auth = getAuth();

// Define the Handlesignup function
const Handlesignup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // Send verification email
            sendEmailVerification(user)
                .then(() => {
                    console.log("Verification email sent");
                })
                .catch((error) => {
                    console.error("Error sending verification email:", error.message);
                });
        })
        .catch((error) => {
            console.error("Error during sign up:", error.message);
        });
};

// Export the Handlesignup function
export default Handlesignup;
