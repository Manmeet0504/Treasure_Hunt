
firebase.initializeApp({
  apiKey: 'AIzaSyAuiPj8cmroirg2p88bJJUea8HUYbi5w5g',
  authDomain: 'treasure-hunt0504.firebaseapp.com',
  projectId: 'treasure-hunt0504',
  storageBucket: 'treasure-hunt0504.firebasestorage.app',
  messagingSenderId: '196677296556',
  appId: '1:196677296556:web:e0d4da0cd849a49e6fda09'
});

const auth = firebase.auth();
const db = firebase.firestore();

function createStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = star.style.height = Math.random() * 3 + 'px';
    star.style.animationDelay = Math.random() * 3 + 's';
    container.appendChild(star);
  }
}
createStars();

function showTab(tab) {
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
  if (tab === 'login') {
    loginTab.classList.add('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  } else {
    registerTab.classList.add('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }
  errorMsg.classList.remove('show');
  successMsg.classList.remove('show');
}

function showContinueModal(location, score, lastPage, uid) {
  document.getElementById('modalLocation').textContent = location;
  document.getElementById('modalScore').textContent = score;
  document.getElementById('continueModal').classList.add('show');

  document.getElementById('btnContinue').onclick = () => {
    window.location.href = lastPage;
  };

  document.getElementById('btnRestart').onclick = async () => {
    await db.collection('users').doc(uid).update({
      score: 1000,
      streak: 0,
      lastPage: 'clue1.html'
    });
    window.location.href = 'clue1.html';
  };
}

async function handleLogin() {
  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  if (!email || !password) {
    errorMsg.textContent = 'Please enter email and password';
    errorMsg.classList.add('show');
    return;
  }

  try {
    await auth.signInWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    const userDoc = await db.collection('users').doc(user.uid).get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      const lastPage = userData.lastPage || 'clue1.html';

      if (lastPage !== 'clue1.html' && lastPage !== 'index.html') {
        const pageNum = lastPage.match(/clue(\d+)/);
        const pageName = pageNum ? 'Clue ' + pageNum[1] : lastPage.replace('.html', '');
        showContinueModal(pageName, userData.score || 1000, lastPage, user.uid);
      } else {
        location.href = 'clue1.html';
      }
    } else {
      await db.collection('users').doc(user.uid).set({
        email: email,
        score: 1000,
        streak: 0,
        lastPage: 'clue1.html',
        createdAt: new Date()
      });
      location.href = 'clue1.html';
    }
  } catch (error) {
    errorMsg.textContent = error.code === 'auth/user-not-found' ? 'User not found! Please register.' :
      error.code === 'auth/wrong-password' ? 'Wrong password!' :
        'Login failed: ' + error.message;
    errorMsg.classList.add('show');
  }
}

async function handleRegister() {
  const email = registerEmail.value.trim();
  const password = registerPassword.value;
  const confirm = confirmPassword.value;

  if (!email || !password || !confirm) {
    errorMsg.textContent = 'Please fill all fields';
    errorMsg.classList.add('show');
    return;
  }

  if (password !== confirm) {
    errorMsg.textContent = 'Passwords do not match!';
    errorMsg.classList.add('show');
    return;
  }

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection('users').doc(userCredential.user.uid).set({
      email: email,
      score: 1000,
      streak: 0,
      lastPage: 'clue1.html',
      createdAt: new Date()
    });
    successMsg.textContent = 'Account created! Redirecting...';
    successMsg.classList.add('show');
    setTimeout(() => location.href = 'clue1.html', 1500);
  } catch (error) {
    errorMsg.textContent = error.code === 'auth/email-already-in-use' ? 'Email already registered!' :
      'Registration failed: ' + error.message;
    errorMsg.classList.add('show');
  }
}

loginEmail.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleLogin();
});

loginPassword.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleLogin();
});

confirmPassword.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleRegister();
});

