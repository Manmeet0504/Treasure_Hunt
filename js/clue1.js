
firebase.initializeApp({ apiKey: "AIzaSyAuiPj8cmroirg2p88bJJUea8HUYbi5w5g", authDomain: "treasure-hunt0504.firebaseapp.com", projectId: "treasure-hunt0504" });
const auth = firebase.auth();
const db = firebase.firestore();
let score = 1000, streak = 0, userId, hint1Used = false, hint2Used = false;
const scoreDisplay = document.getElementById('scoreDisplay');
const streakDisplay = document.getElementById('streakDisplay');
const correctAnswer = 'compass';

auth.onAuthStateChanged(async u => {
  if (!u) { location.href = "login.html"; return }
  userId = u.uid;
  const d = await db.collection("users").doc(userId).get();
  if (d.exists) {
    score = d.data().score || 1000;
    streak = d.data().streak || 0;
    scoreDisplay.textContent = " " + score;
    streakDisplay.textContent = " " + streak;
  }
});

function selectOption(opt) {
  document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  document.querySelector('[onclick*="' + opt + '"]').classList.add('selected');
  document.getElementById('submitBtn').disabled = false;
}

async function useHint(n) {
  if (n === 1 && !hint1Used) {
    hint1Used = true;
    score -= 100;
    document.getElementById('hint1Box').classList.add('show');
    document.getElementById('hint1Btn').disabled = true;
  } else if (n === 2 && !hint2Used) {
    hint2Used = true;
    score -= 200;
    document.getElementById('hint2Box').classList.add('show');
    document.getElementById('hint2Btn').disabled = true;
  }
  scoreDisplay.textContent = " " + score;
  await db.collection("users").doc(userId).update({ score });
}

async function showAnswer() {
  score -= 300;
  document.getElementById('answerBox').classList.add('show');
  document.getElementById('answerBtn').disabled = true;
  document.getElementById('hint1Btn').disabled = true;
  scoreDisplay.textContent = " " + score;
  await db.collection("users").doc(userId).update({ score });
}

async function checkAnswer() {
  const sel = document.querySelector('.option-card.selected');
  if (!sel) return;
  const ans = sel.getAttribute('onclick').match(/"([^"]+)"/)[1];
  const fb = document.getElementById('feedback');
  if (ans === correctAnswer) {
    fb.textContent = " CORRECT! The compass points the way!";
    fb.className = 'feedback show success';
    if (!hint1Used && !hint2Used) {
      streak++;
      score += 150;
      showBonus(' +150 COMBO BONUS!');
    }
    scoreDisplay.textContent = " " + score;
    streakDisplay.textContent = " " + streak;
    await db.collection("users").doc(userId).update({ score, streak, lastPage: 'clue2.html' });
    setTimeout(() => location.href = 'clue2.html', 2000);
  } else {
    streak = 0;
    score -= 50;
    fb.textContent = " Wrong! Try again!";
    fb.className = 'feedback show error';
    scoreDisplay.textContent = " " + score;
    streakDisplay.textContent = " 0";
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

