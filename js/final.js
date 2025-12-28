firebase.initializeApp({ apiKey: "AIzaSyAuiPj8cmroirg2p88bJJUea8HUYbi5w5g", authDomain: "treasure-hunt0504.firebaseapp.com", projectId: "treasure-hunt0504" });
const auth = firebase.auth();
const db = firebase.firestore();

function createStars() { const c = document.getElementById('stars'); for (let i = 0; i < 100; i++) { const s = document.createElement('div'); s.className = 'star'; s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%'; s.style.width = s.style.height = Math.random() * 3 + 'px'; s.style.animationDelay = Math.random() * 3 + 's'; c.appendChild(s) } } createStars(); function launchFireworks() { const c = document.getElementById('fireworks'); for (let i = 0; i < 30; i++) { setTimeout(() => { const x = Math.random() * window.innerWidth, y = Math.random() * window.innerHeight / 2; for (let j = 0; j < 20; j++) { const f = document.createElement('div'); f.className = 'firework'; f.style.left = x + 'px'; f.style.top = y + 'px'; f.style.background = ['#fbbf24', '#ec4899', '#a855f7', '#3b82f6', '#22c55e'][Math.floor(Math.random() * 5)]; f.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px'); f.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px'); c.appendChild(f); setTimeout(() => f.remove(), 1000) } }, i * 200) } } setTimeout(() => {
  localStorage.setItem('currentPage', 'final.html'); const storedScore = localStorage.getItem('gameScore') || '0'; const storedStreak = localStorage.getItem('gameStreak') || '0'; const score = parseInt(storedScore); const streak = parseInt(storedStreak); let treasure, msg, rank, icon; if (score >= 800) { treasure = 'LEGENDARY TREASURE'; msg = 'MAGNIFICENT! Ye be a true Pirate Lord! Jack Sparrow himself would tip his hat to ye! The legendary treasure of Captain Henry Morgan is yours - untold riches beyond imagination!'; rank = 'Pirate Lord'; icon = ''; document.getElementById('name').className = 'treasure-name legendary'; launchFireworks() } else if (score >= 500) { treasure = 'EPIC TREASURE'; msg = 'EXCELLENT! A worthy pirate indeed! Ye found the treasure of the Spanish Galleon - chests overflowing with doubloons and jewels!'; rank = 'Captain'; icon = ''; document.getElementById('name').className = 'treasure-name epic' } else if (score >= 200) { treasure = 'RARE TREASURE'; msg = 'WELL DONE! Not bad, matey! Ye discovered a buried cache of silver pieces - enough to live comfortably for years!'; rank = 'First Mate'; icon = ''; document.getElementById('name').className = 'treasure-name rare' } else { treasure = 'COMMON TREASURE'; msg = 'Ahoy! Ye found some treasure, but many hints were needed. A small chest of coins - better than nothing, savvy?'; rank = 'Sailor'; icon = ''; document.getElementById('name').className = 'treasure-name common' } const chestHTML = '<div class="treasure-chest ' + (score >= 800 ? 'legendary-chest' : score >= 500 ? 'epic-chest' : score >= 200 ? 'rare-chest' : 'common-chest') + '"><div class="chest-lid"><div class="treasure-glow-inner"></div></div><div class="chest-body"><div class="chest-lock"></div></div><div class="coins"><div class="coin"></div><div class="coin"></div><div class="coin"></div><div class="coin"></div></div></div>'; document.getElementById('icon').innerHTML = chestHTML;
  document.getElementById('icon').style.fontSize = 'initial'; document.getElementById('name').textContent = treasure; document.getElementById('finalScore').textContent = '' + score; document.getElementById('message').textContent = msg; document.getElementById('scoreValue').textContent = score; document.getElementById('streakValue').textContent = streak; document.getElementById('rankValue').textContent = rank
}, 500); async function loadLeaderboard() {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const usersSnapshot = await db.collection('users').orderBy('score', 'desc').limit(10).get();

    if (usersSnapshot.empty) {
      document.getElementById('leaderboardContent').innerHTML = '<p class="loading-text">No players yet!</p>';
      return;
    }

    let tableHTML = '<table class="leaderboard-table"><thead><tr><th>Rank</th><th>Player</th><th>Score</th></tr></thead><tbody>';
    let rank = 1;
    usersSnapshot.forEach(doc => {
      const userData = doc.data();
      const isCurrentUser = doc.id === currentUser.uid;
      const playerEmail = userData.email || 'Anonymous';
      const playerName = playerEmail.split('@')[0];

      const medal = rank === 1 ? '' : rank === 2 ? '' : rank === 3 ? '' : '';
      const rankClass = 'rank-' + rank;
      const rowClass = isCurrentUser ? 'leaderboard-row current-user' : 'leaderboard-row';

      tableHTML += <tr class="+rowClass+">
        <td class="rank +rankClass+">+medal+#+rank+</td>
        <td class="player-name">+playerName+(isCurrentUser ? ' (You)' : '')+</td>
        <td class="score-cell">+( userData.score || 0)+</td>
      </tr>;

      rank++;
    });

    tableHTML += '</tbody></table>';
    document.getElementById('leaderboardContent').innerHTML = tableHTML;
  } catch (error) {
    console.error('Leaderboard error:', error);
    document.getElementById('leaderboardContent').innerHTML = '<p class="loading-text">Failed to load leaderboard</p>';
  }
}

setTimeout(() => {
  loadLeaderboard();
}, 1000);

window.replay = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      await db.collection('users').doc(user.uid).update({
        score: 1000,
        streak: 0,
        lastPage: 'clue1.html'
      });
    }
  } catch (e) {
    console.log('Reset error:', e);
  }
  localStorage.setItem('gameScore', '1000');
  localStorage.setItem('gameStreak', '0');
  localStorage.setItem('currentPage', 'clue1.html');
  location.href = 'clue1.html'
}; window.logout = () => { localStorage.clear(); location.href = 'login.html' };
