#  PIRATE TREASURE HUNT - SETUP GUIDE

##  3 STEPS TO GET STARTED

### STEP 1: Install Dependencies (2 minutes)
```bash
npm install
```

### STEP 2: Setup Firebase (10 minutes)

**A. Create Firebase Project:**
1. Go to https://console.firebase.google.com/
2. Click "Add Project" or "Create Project"
3. Name it: `pirate-treasure-hunt`
4. Click Continue (disable Google Analytics if asked)

**B. Enable Authentication:**
1. In Firebase Console  Click "Authentication"
2. Click "Get Started"
3. Click "Email/Password"  Toggle ON  Save

**C. Create Database:**
1. Click "Firestore Database"
2. Click "Create Database"
3. Select "Start in test mode"  Next
4. Choose location (e.g., us-central)  Enable

**D. Get Your Config:**
1. Click gear icon   Project Settings
2. Scroll to "Your apps"  Click web icon `</>`
3. Register app (name: Treasure Hunt)
4. **COPY** the firebaseConfig object

**E. Update Your Project:**
1. Open `src/config.js`
2. Replace the placeholder values with your Firebase config
3. Save the file

### STEP 3: Run the App (1 minute)
```bash
npm run dev
```

Open: http://localhost:5173

---

##  TEST IT

1. **Register**: Create account with any email
2. **Login**: Sign in
3. **Play Clue 1**: Answer is `neptunescompass`
4. **Play Clue 2**: Answer is `davy jones`  
5. **Win!**: Complete all clues

---

##  Troubleshooting

**"npm: command not found"**
 Install Node.js from https://nodejs.org/

**"Firebase error"**
 Check `src/config.js` has YOUR Firebase credentials
 Verify Auth & Firestore are enabled in Firebase Console

**Login not working**
 Press F12, check Console tab for errors
 Make sure Email/Password is enabled in Firebase Auth

---

##  Deploy to Vercel (Optional)

```bash
npm run build
npm i -g vercel
vercel
```

Add Firebase credentials as environment variables in Vercel dashboard.

---

##  Project Structure

```
 index.html - Landing page
 login.html - Auth system  
 clue1.html - First clue
 clue2.html - Second clue
 final.html - Victory page
 deadEnd1.html - Wrong path
 src/ - All JavaScript logic
 assets/css/ - Modern styling
```

---

##  Game Answers (for testing)

- **Clue 1**: `neptunescompass`
- **Clue 2**: `davy jones`

---

##  What's Done

Your project now has:
-  Modern UI with animations
-  Firebase authentication
-  Working game logic
-  Progress tracking
-  All pages styled
-  Vercel deployment config

---

##  IMPORTANT

**The ONLY thing you must do is add your Firebase credentials to `src/config.js`**

Everything else is ready to go!

---

**Total Setup Time: ~15 minutes**

Let's go, Captain! 
