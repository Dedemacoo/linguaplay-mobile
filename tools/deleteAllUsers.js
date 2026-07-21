const { initializeApp, refreshToken } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

const firebaseRefreshToken = process.env.FIREBASE_REFRESH_TOKEN;

// Firebase Admin SDK'yı refresh token ile başlat
initializeApp({
  credential: refreshToken({
    type: 'authorized_user',
    client_id: '563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com',
    client_secret: 'j9iVZfS8uo51D--0btwdYYnl',
    refresh_token: firebaseRefreshToken
  }),
  projectId: 'lingumapp'
});

const auth = getAuth();

async function deleteAllUsers() {
  console.log('🔥 Tüm Firebase Auth kullanıcıları siliniyor...');
  let totalDeleted = 0;
  let pageToken;

  do {
    const listResult = await auth.listUsers(1000, pageToken);
    
    if (listResult.users.length === 0) {
      console.log('Silinecek kullanıcı bulunamadı.');
      break;
    }

    const uids = listResult.users.map(user => user.uid);
    console.log(`${uids.length} kullanıcı bulundu:`);
    listResult.users.forEach(u => console.log(`  - ${u.email || u.uid}`));

    // Auth kullanıcılarını sil
    const deleteResult = await auth.deleteUsers(uids);
    console.log(`  ✅ ${deleteResult.successCount} kullanıcı silindi, ${deleteResult.failureCount} hata`);

    totalDeleted += deleteResult.successCount;
    pageToken = listResult.pageToken;

  } while (pageToken);

  console.log(`\n✅ Toplam ${totalDeleted} kullanıcı başarıyla silindi!`);
  console.log('ℹ️  Firestore dokümanları için Firebase Console\'dan manuel olarak silebilirsiniz.');
  process.exit(0);
}

deleteAllUsers().catch(err => {
  console.error('❌ Hata:', err.message);
  process.exit(1);
});
