
firebase.initializeApp({ apiKey: "AIzaSyAuiPj8cmroirg2p88bJJUea8HUYbi5w5g", authDomain: "treasure-hunt0504.firebaseapp.com", projectId: "treasure-hunt0504" });
const auth = firebase.auth();
const db = firebase.firestore();
let score = 1000, streak = 0, userId, hint1Used = false;
const scoreDisplay = document.getElementById('scoreDisplay');
const streakDisplay = document.getElementById('streakDisplay');
let selectedWords = [];

auth.onAuthStateChanged(async u => {
  if (!u) { location.href = "login.html"; return }
  userId = u.uid;
  const d = await db.collection("users").doc(userId).get();
  if (d.exists) {
    score = d.data().score || 1000;
    streak = d.data().streak || 0;
    scoreDisplay.textContent = score;
    streakDisplay.textContent = streak;
  }
});

function addWord(word, element) {
  if (element && !element.classList.contains('used')) {
    selectedWords.push(word);
    element.classList.add('used');
    updateSentence();
  }
}

function updateSentence() {
  const builder = document.getElementById('sentenceBuilder');
  const placeholder = document.getElementById('placeholder');
  if (selectedWords.length > 0) {
    if (placeholder) placeholder.style.display = 'none';
    builder.innerHTML = '';
    selectedWords.forEach((w, i) => {
      const span = document.createElement('span');
      span.className = 'selected-word';
      span.textContent = w.toUpperCase();
      span.onclick = () => removeWord(i);
      builder.appendChild(span);
    });
    document.getElementById('submitBtn').disabled = false;
  } else {
    if (placeholder) placeholder.style.display = 'block';
    builder.innerHTML = '<p style="color:rgba(255,255,255,0.5);font-style:italic" id="placeholder">Click words above to build the command...</p>';
    document.getElementById('submitBtn').disabled = true;
  }
}

function removeWord(idx) {
  const word = selectedWords[idx];
  selectedWords.splice(idx, 1);
  document.querySelectorAll('.word-chip').forEach(chip => {
    if (chip.textContent.toLowerCase() === word.toLowerCase()) {
      chip.classList.remove('used');
    }
  });
  updateSentence();
}

function clearSentence() {
  selectedWords = [];
  document.querySelectorAll('.word-chip').forEach(c => c.classList.remove('used'));
  updateSentence();
}

async function useHint(n) {
  if (n === 1 && !hint1Used) {
    hint1Used = true;
    score -= 150;
    document.getElementById('hint1Box').classList.add('show');
    document.getElementById('hint1Btn').disabled = true;
    scoreDisplay.textContent = score;
    await db.collection("users").doc(userId).update({ score });
  }
}

async function showAnswer() {
  score -= 400;
  document.getElementById('answerBox').classList.add('show');
  document.getElementById('answerBtn').disabled = true;
  scoreDisplay.textContent = score;
  await db.collection("users").doc(userId).update({ score });
}

async function checkAnswer() {
  const ans = selectedWords.join(' ').toLowerCase();
  const fb = document.getElementById('feedback');
  if (ans === 'release the kraken') {
    fb.textContent = "PERFECT! The Kraken awakens!";
    fb.className = 'feedback show success';
    if (!hint1Used) {
      streak++;
      score += 200;
      showBonus('+200 COMBO BONUS!');
    }
    scoreDisplay.textContent = score;
    streakDisplay.textContent = streak;
    await db.collection("users").doc(userId).update({ score, streak, lastPage: 'clue3.html' });
    setTimeout(() => location.href = 'clue3.html', 2000);
  } else {
    streak = 0;
    score -= 50;
    fb.textContent = "Wrong order! Try again!";
    fb.className = 'feedback show error';
    scoreDisplay.textContent = score;
    streakDisplay.textContent = 0;
    await db.collection("users").doc(userId).update({ score, streak: 0 });
    setTimeout(() => fb.classList.remove('show'), 2000);
  }
}

function showBonus(msg) {
  const bp = document.getElementById('bonusPopup');
  bp.textContent = msg;
  bp.classList.add('show');
  setTimeout(() => bp.classList.remove('show'), 2000);
}

window.logout = async () => { await auth.signOut(); location.href = "login.html" };

