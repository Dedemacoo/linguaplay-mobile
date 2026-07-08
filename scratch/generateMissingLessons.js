// generateMissingLessons.js
// Generates missing lessons k7-k66 (Kurdish), e7-e66 (English), f7-f66 (French), t7-t66 (Turkish)
// Run with: node generateMissingLessons.js
const fs = require('fs');
const path = require('path');

// ──────────────────────────────────────────────────────────────────────────────
// Vocabulary database: { tr: Turkish, ku: Kurdish, en: English, fr: French, tr2: Turkish (same) }
// ──────────────────────────────────────────────────────────────────────────────
const VOCAB = {
  // ─── UNIT 3: Sayılar ve Zaman ────────────────────────────────────────────
  numbers: [
    { tr: 'Bir', ku: 'Yek', en: 'One', fr: 'Un', icon: '1️⃣' },
    { tr: 'İki', ku: 'Du', en: 'Two', fr: 'Deux', icon: '2️⃣' },
    { tr: 'Üç', ku: 'Sê', en: 'Three', fr: 'Trois', icon: '3️⃣' },
    { tr: 'Dört', ku: 'Çar', en: 'Four', fr: 'Quatre', icon: '4️⃣' },
    { tr: 'Beş', ku: 'Pênc', en: 'Five', fr: 'Cinq', icon: '5️⃣' },
    { tr: 'Altı', ku: 'Şeş', en: 'Six', fr: 'Six', icon: '6️⃣' },
    { tr: 'Yedi', ku: 'Heft', en: 'Seven', fr: 'Sept', icon: '7️⃣' },
    { tr: 'Sekiz', ku: 'Heşt', en: 'Eight', fr: 'Huit', icon: '8️⃣' },
    { tr: 'Dokuz', ku: 'Neh', en: 'Nine', fr: 'Neuf', icon: '9️⃣' },
    { tr: 'On', ku: 'Deh', en: 'Ten', fr: 'Dix', icon: '🔟' },
  ],
  days: [
    { tr: 'Pazartesi', ku: 'Duşem', en: 'Monday', fr: 'Lundi', icon: '📅' },
    { tr: 'Salı', ku: 'Sêşem', en: 'Tuesday', fr: 'Mardi', icon: '📅' },
    { tr: 'Çarşamba', ku: 'Çarşem', en: 'Wednesday', fr: 'Mercredi', icon: '📅' },
    { tr: 'Perşembe', ku: 'Pêncşem', en: 'Thursday', fr: 'Jeudi', icon: '📅' },
    { tr: 'Cuma', ku: 'În', en: 'Friday', fr: 'Vendredi', icon: '📅' },
    { tr: 'Cumartesi', ku: 'Şemî', en: 'Saturday', fr: 'Samedi', icon: '📅' },
    { tr: 'Pazar', ku: 'Yekşem', en: 'Sunday', fr: 'Dimanche', icon: '🌞' },
  ],
  time: [
    { tr: 'Saat', ku: 'Seet', en: 'Hour', fr: 'Heure', icon: '🕐' },
    { tr: 'Dakika', ku: 'Xulekan', en: 'Minute', fr: 'Minute', icon: '⏱️' },
    { tr: 'Sabah', ku: 'Sibeh', en: 'Morning', fr: 'Matin', icon: '🌅' },
    { tr: 'Öğle', ku: 'Nîvro', en: 'Noon', fr: 'Midi', icon: '☀️' },
    { tr: 'Akşam', ku: 'Êvar', en: 'Evening', fr: 'Soir', icon: '🌆' },
    { tr: 'Gece', ku: 'Şev', en: 'Night', fr: 'Nuit', icon: '🌙' },
  ],
  // ─── UNIT 4: Hayvanlar ve Doğa ───────────────────────────────────────────
  petAnimals: [
    { tr: 'Kedi', ku: 'Pisîk', en: 'Cat', fr: 'Chat', icon: '🐱' },
    { tr: 'Köpek', ku: 'Kûçik', en: 'Dog', fr: 'Chien', icon: '🐶' },
    { tr: 'Kuş', ku: 'Çivîk', en: 'Bird', fr: 'Oiseau', icon: '🐦' },
    { tr: 'Balık', ku: 'Masî', en: 'Fish', fr: 'Poisson', icon: '🐟' },
    { tr: 'Tavşan', ku: 'Kerguh', en: 'Rabbit', fr: 'Lapin', icon: '🐰' },
    { tr: 'At', ku: 'Hesp', en: 'Horse', fr: 'Cheval', icon: '🐴' },
  ],
  wildAnimals: [
    { tr: 'Aslan', ku: 'Şêr', en: 'Lion', fr: 'Lion', icon: '🦁' },
    { tr: 'Kaplan', ku: 'Peleng', en: 'Tiger', fr: 'Tigre', icon: '🐯' },
    { tr: 'Fil', ku: 'Fîl', en: 'Elephant', fr: 'Éléphant', icon: '🐘' },
    { tr: 'Ayı', ku: 'Hirç', en: 'Bear', fr: 'Ours', icon: '🐻' },
    { tr: 'Kurt', ku: 'Gur', en: 'Wolf', fr: 'Loup', icon: '🐺' },
    { tr: 'Tilki', ku: 'Rovî', en: 'Fox', fr: 'Renard', icon: '🦊' },
  ],
  nature: [
    { tr: 'Ağaç', ku: 'Dar', en: 'Tree', fr: 'Arbre', icon: '🌳' },
    { tr: 'Çiçek', ku: 'Kulîlk', en: 'Flower', fr: 'Fleur', icon: '🌸' },
    { tr: 'Dağ', ku: 'Çiya', en: 'Mountain', fr: 'Montagne', icon: '⛰️' },
    { tr: 'Deniz', ku: 'Deryay', en: 'Sea', fr: 'Mer', icon: '🌊' },
    { tr: 'Nehir', ku: 'Çem', en: 'River', fr: 'Rivière', icon: '🏞️' },
    { tr: 'Orman', ku: 'Daristanê', en: 'Forest', fr: 'Forêt', icon: '🌲' },
  ],
  // ─── UNIT 5: Yiyecek ve İçecek ───────────────────────────────────────────
  fruits: [
    { tr: 'Elma', ku: 'Sêv', en: 'Apple', fr: 'Pomme', icon: '🍎' },
    { tr: 'Muz', ku: 'Mûz', en: 'Banana', fr: 'Banane', icon: '🍌' },
    { tr: 'Portakal', ku: 'Porteqal', en: 'Orange', fr: 'Orange', icon: '🍊' },
    { tr: 'Üzüm', ku: 'Tirî', en: 'Grape', fr: 'Raisin', icon: '🍇' },
    { tr: 'Çilek', ku: 'Tûtî', en: 'Strawberry', fr: 'Fraise', icon: '🍓' },
    { tr: 'Armut', ku: 'Firxûn', en: 'Pear', fr: 'Poire', icon: '🍐' },
  ],
  vegetables: [
    { tr: 'Havuç', ku: 'Gêzer', en: 'Carrot', fr: 'Carotte', icon: '🥕' },
    { tr: 'Domates', ku: 'Bacanê sor', en: 'Tomato', fr: 'Tomate', icon: '🍅' },
    { tr: 'Soğan', ku: 'Peyaz', en: 'Onion', fr: 'Oignon', icon: '🧅' },
    { tr: 'Sarımsak', ku: 'Sîr', en: 'Garlic', fr: 'Ail', icon: '🧄' },
    { tr: 'Patates', ku: 'Kartol', en: 'Potato', fr: 'Pomme de terre', icon: '🥔' },
    { tr: 'Fasulye', ku: 'Fasûlê', en: 'Bean', fr: 'Haricot', icon: '🫘' },
  ],
  drinks: [
    { tr: 'Su', ku: 'Av', en: 'Water', fr: 'Eau', icon: '💧' },
    { tr: 'Çay', ku: 'Çay', en: 'Tea', fr: 'Thé', icon: '🍵' },
    { tr: 'Kahve', ku: 'Qehwe', en: 'Coffee', fr: 'Café', icon: '☕' },
    { tr: 'Süt', ku: 'Şîr', en: 'Milk', fr: 'Lait', icon: '🥛' },
    { tr: 'Meyve suyu', ku: 'Ava mewê', en: 'Juice', fr: 'Jus', icon: '🧃' },
    { tr: 'Limonata', ku: 'Limonata', en: 'Lemonade', fr: 'Limonade', icon: '🍋' },
  ],
  // ─── UNIT 6: Ev ve Eşyalar ───────────────────────────────────────────────
  rooms: [
    { tr: 'Mutfak', ku: 'Mitbex', en: 'Kitchen', fr: 'Cuisine', icon: '🍳' },
    { tr: 'Yatak odası', ku: 'Razangeh', en: 'Bedroom', fr: 'Chambre', icon: '🛏️' },
    { tr: 'Banyo', ku: 'Serşok', en: 'Bathroom', fr: 'Salle de bain', icon: '🚿' },
    { tr: 'Salon', ku: 'Salon', en: 'Living room', fr: 'Salon', icon: '🛋️' },
    { tr: 'Bahçe', ku: 'Baxçe', en: 'Garden', fr: 'Jardin', icon: '🌿' },
    { tr: 'Bodrum', ku: 'Jêrxanî', en: 'Basement', fr: 'Sous-sol', icon: '🏚️' },
  ],
  furniture: [
    { tr: 'Sandalye', ku: 'Kursî', en: 'Chair', fr: 'Chaise', icon: '🪑' },
    { tr: 'Masa', ku: 'Mase', en: 'Table', fr: 'Table', icon: '🪞' },
    { tr: 'Yatak', ku: 'Nivîn', en: 'Bed', fr: 'Lit', icon: '🛏️' },
    { tr: 'Dolap', ku: 'Dolap', en: 'Wardrobe', fr: 'Armoire', icon: '🗄️' },
    { tr: 'Kanepe', ku: 'Kanape', en: 'Sofa', fr: 'Canapé', icon: '🛋️' },
    { tr: 'Kitaplık', ku: 'Pirtûkxane', en: 'Bookshelf', fr: 'Bibliothèque', icon: '📚' },
  ],
  kitchenItems: [
    { tr: 'Tabak', ku: 'Qap', en: 'Plate', fr: 'Assiette', icon: '🍽️' },
    { tr: 'Bıçak', ku: 'Kêlî', en: 'Knife', fr: 'Couteau', icon: '🔪' },
    { tr: 'Kaşık', ku: 'Kevçî', en: 'Spoon', fr: 'Cuillère', icon: '🥄' },
    { tr: 'Çatal', ku: 'Çêtal', en: 'Fork', fr: 'Fourchette', icon: '🍴' },
    { tr: 'Bardak', ku: 'Fincane', en: 'Cup', fr: 'Tasse', icon: '☕' },
    { tr: 'Tencere', ku: 'Tencere', en: 'Pot', fr: 'Casserole', icon: '🫕' },
  ],
  // ─── UNIT 7: Vücut ve Sağlık ─────────────────────────────────────────────
  body: [
    { tr: 'Baş', ku: 'Ser', en: 'Head', fr: 'Tête', icon: '🗣️' },
    { tr: 'Göz', ku: 'Çav', en: 'Eye', fr: 'Œil', icon: '👁️' },
    { tr: 'Kulak', ku: 'Guh', en: 'Ear', fr: 'Oreille', icon: '👂' },
    { tr: 'Ağız', ku: 'Dev', en: 'Mouth', fr: 'Bouche', icon: '👄' },
    { tr: 'El', ku: 'Dest', en: 'Hand', fr: 'Main', icon: '✋' },
    { tr: 'Bacak', ku: 'Ling', en: 'Leg', fr: 'Jambe', icon: '🦵' },
  ],
  illness: [
    { tr: 'Hastalık', ku: 'Nexweşî', en: 'Illness', fr: 'Maladie', icon: '🤒' },
    { tr: 'Baş ağrısı', ku: 'Serêşî', en: 'Headache', fr: 'Mal de tête', icon: '🤕' },
    { tr: 'Ateş', ku: 'Germahî', en: 'Fever', fr: 'Fièvre', icon: '🌡️' },
    { tr: 'Öksürük', ku: 'Kuxik', en: 'Cough', fr: 'Toux', icon: '😷' },
    { tr: 'Nezle', ku: 'Serxweşî', en: 'Cold', fr: 'Rhume', icon: '🤧' },
    { tr: 'Yara', ku: 'Birîn', en: 'Wound', fr: 'Blessure', icon: '🩹' },
  ],
  hospital: [
    { tr: 'Hastane', ku: 'Nexweşxane', en: 'Hospital', fr: 'Hôpital', icon: '🏥' },
    { tr: 'Doktor', ku: 'Doktor', en: 'Doctor', fr: 'Médecin', icon: '👨‍⚕️' },
    { tr: 'Hemşire', ku: 'Hemşire', en: 'Nurse', fr: 'Infirmière', icon: '👩‍⚕️' },
    { tr: 'İlaç', ku: 'Derman', en: 'Medicine', fr: 'Médicament', icon: '💊' },
    { tr: 'Ameliyat', ku: 'Operasyon', en: 'Operation', fr: 'Opération', icon: '🔬' },
    { tr: 'Ambulans', ku: 'Ambulans', en: 'Ambulance', fr: 'Ambulance', icon: '🚑' },
  ],
  // ─── UNIT 8: Giysiler ────────────────────────────────────────────────────
  clothes: [
    { tr: 'Gömlek', ku: 'Kiras', en: 'Shirt', fr: 'Chemise', icon: '👕' },
    { tr: 'Pantolon', ku: 'Pantol', en: 'Trousers', fr: 'Pantalon', icon: '👖' },
    { tr: 'Şapka', ku: 'Kele', en: 'Hat', fr: 'Chapeau', icon: '🎩' },
    { tr: 'Ayakkabı', ku: 'Pûtin', en: 'Shoe', fr: 'Chaussure', icon: '👟' },
    { tr: 'Ceket', ku: 'Jaket', en: 'Jacket', fr: 'Veste', icon: '🧥' },
    { tr: 'Çorap', ku: 'Gorîn', en: 'Sock', fr: 'Chaussette', icon: '🧦' },
  ],
  clothingColors: [
    { tr: 'Kırmızı', ku: 'Sor', en: 'Red', fr: 'Rouge', icon: '🔴' },
    { tr: 'Mavi', ku: 'Şîn', en: 'Blue', fr: 'Bleu', icon: '🔵' },
    { tr: 'Yeşil', ku: 'Kesk', en: 'Green', fr: 'Vert', icon: '🟢' },
    { tr: 'Sarı', ku: 'Zer', en: 'Yellow', fr: 'Jaune', icon: '🟡' },
    { tr: 'Beyaz', ku: 'Spî', en: 'White', fr: 'Blanc', icon: '⚪' },
    { tr: 'Siyah', ku: 'Reş', en: 'Black', fr: 'Noir', icon: '⚫' },
  ],
  market: [
    { tr: 'Pazar', ku: 'Bazar', en: 'Market', fr: 'Marché', icon: '🛒' },
    { tr: 'Fiyat', ku: 'Bihay', en: 'Price', fr: 'Prix', icon: '💰' },
    { tr: 'Ucuz', ku: 'Erzan', en: 'Cheap', fr: 'Bon marché', icon: '🏷️' },
    { tr: 'Pahalı', ku: 'Biha', en: 'Expensive', fr: 'Cher', icon: '💸' },
    { tr: 'Satın almak', ku: 'Kirîn', en: 'Buy', fr: 'Acheter', icon: '🛍️' },
    { tr: 'Satmak', ku: 'Firotin', en: 'Sell', fr: 'Vendre', icon: '💼' },
  ],
  // ─── UNIT 9: Meslekler ───────────────────────────────────────────────────
  jobs1: [
    { tr: 'Doktor', ku: 'Doktor', en: 'Doctor', fr: 'Médecin', icon: '👨‍⚕️' },
    { tr: 'Öğretmen', ku: 'Mamosta', en: 'Teacher', fr: 'Professeur', icon: '👩‍🏫' },
    { tr: 'Şoför', ku: 'Şofêr', en: 'Driver', fr: 'Chauffeur', icon: '🚘' },
    { tr: 'Çiftçi', ku: 'Cotkar', en: 'Farmer', fr: 'Agriculteur', icon: '🧑‍🌾' },
    { tr: 'Mühendis', ku: 'Endezyar', en: 'Engineer', fr: 'Ingénieur', icon: '👷' },
    { tr: 'Avukat', ku: 'Parêzer', en: 'Lawyer', fr: 'Avocat', icon: '⚖️' },
  ],
  jobs2: [
    { tr: 'Yazar', ku: 'Nivîskar', en: 'Writer', fr: 'Écrivain', icon: '✍️' },
    { tr: 'Sanatçı', ku: 'Hunermend', en: 'Artist', fr: 'Artiste', icon: '🎨' },
    { tr: 'Mimar', ku: 'Mîmar', en: 'Architect', fr: 'Architecte', icon: '🏛️' },
    { tr: 'Polis', ku: 'Polîs', en: 'Police', fr: 'Police', icon: '👮' },
    { tr: 'Asker', ku: 'Efser', en: 'Soldier', fr: 'Soldat', icon: '💂' },
    { tr: 'Aşçı', ku: 'Aşpêj', en: 'Chef', fr: 'Chef', icon: '👨‍🍳' },
  ],
  workplace: [
    { tr: 'Ofis', ku: 'Nivîsxane', en: 'Office', fr: 'Bureau', icon: '🏢' },
    { tr: 'Toplantı', ku: 'Civîn', en: 'Meeting', fr: 'Réunion', icon: '🤝' },
    { tr: 'Proje', ku: 'Projeh', en: 'Project', fr: 'Projet', icon: '📋' },
    { tr: 'Sunum', ku: 'Pêşkêş', en: 'Presentation', fr: 'Présentation', icon: '📊' },
    { tr: 'Maaş', ku: 'Mûçe', en: 'Salary', fr: 'Salaire', icon: '💵' },
    { tr: 'İş', ku: 'Xebat', en: 'Work', fr: 'Travail', icon: '💼' },
  ],
  // ─── UNIT 10: Şehir ve Ulaşım ────────────────────────────────────────────
  places: [
    { tr: 'Okul', ku: 'Mekteb', en: 'School', fr: 'École', icon: '🏫' },
    { tr: 'Hastane', ku: 'Nexweşxane', en: 'Hospital', fr: 'Hôpital', icon: '🏥' },
    { tr: 'Otel', ku: 'Otêl', en: 'Hotel', fr: 'Hôtel', icon: '🏨' },
    { tr: 'Restoran', ku: 'Xwaringeh', en: 'Restaurant', fr: 'Restaurant', icon: '🍽️' },
    { tr: 'Market', ku: 'Supermarket', en: 'Supermarket', fr: 'Supermarché', icon: '🛒' },
    { tr: 'Kütüphane', ku: 'Pirtûkxane', en: 'Library', fr: 'Bibliothèque', icon: '📚' },
  ],
  transport: [
    { tr: 'Araba', ku: 'Tirimbêl', en: 'Car', fr: 'Voiture', icon: '🚗' },
    { tr: 'Otobüs', ku: 'Otobûs', en: 'Bus', fr: 'Bus', icon: '🚌' },
    { tr: 'Tren', ku: 'Trên', en: 'Train', fr: 'Train', icon: '🚂' },
    { tr: 'Uçak', ku: 'Balafir', en: 'Airplane', fr: 'Avion', icon: '✈️' },
    { tr: 'Bisiklet', ku: 'Dûpişk', en: 'Bicycle', fr: 'Vélo', icon: '🚲' },
    { tr: 'Gemi', ku: 'Gemî', en: 'Ship', fr: 'Bateau', icon: '🚢' },
  ],
  directions: [
    { tr: 'Sol', ku: 'Çep', en: 'Left', fr: 'Gauche', icon: '⬅️' },
    { tr: 'Sağ', ku: 'Rast', en: 'Right', fr: 'Droite', icon: '➡️' },
    { tr: 'Düz', ku: 'Rasterast', en: 'Straight', fr: 'Tout droit', icon: '⬆️' },
    { tr: 'Yakın', ku: 'Nêzîk', en: 'Near', fr: 'Près', icon: '📍' },
    { tr: 'Uzak', ku: 'Dûr', en: 'Far', fr: 'Loin', icon: '🗺️' },
    { tr: 'Dönmek', ku: 'Zivirîn', en: 'Turn', fr: 'Tourner', icon: '🔄' },
  ],
  // ─── UNIT 11: Günlük Rutinler ─────────────────────────────────────────────
  morningRoutine: [
    { tr: 'Uyanmak', ku: 'Şiyarbûn', en: 'Wake up', fr: 'Se réveiller', icon: '⏰' },
    { tr: 'Yıkanmak', ku: 'Xwe şûştin', en: 'Wash', fr: 'Se laver', icon: '🚿' },
    { tr: 'Giyinmek', ku: 'Cil kirin', en: 'Get dressed', fr: 'S\'habiller', icon: '👕' },
    { tr: 'Kahvaltı', ku: 'Taştê', en: 'Breakfast', fr: 'Petit-déjeuner', icon: '🍳' },
    { tr: 'Çıkmak', ku: 'Derketin', en: 'Go out', fr: 'Sortir', icon: '🚪' },
    { tr: 'Gezmek', ku: 'Gerîn', en: 'Walk around', fr: 'Se promener', icon: '🚶' },
  ],
  schoolWords: [
    { tr: 'Ders', ku: 'Ders', en: 'Lesson', fr: 'Leçon', icon: '📖' },
    { tr: 'Kitap', ku: 'Pirtûk', en: 'Book', fr: 'Livre', icon: '📚' },
    { tr: 'Defter', ku: 'Nîşe', en: 'Notebook', fr: 'Cahier', icon: '📓' },
    { tr: 'Öğrenci', ku: 'Xwendekar', en: 'Student', fr: 'Élève', icon: '👨‍🎓' },
    { tr: 'Sınıf', ku: 'Sinif', en: 'Classroom', fr: 'Classe', icon: '🏫' },
    { tr: 'Sınav', ku: 'Imtîhan', en: 'Exam', fr: 'Examen', icon: '📝' },
  ],
  eveningRoutine: [
    { tr: 'Yemek pişirmek', ku: 'Xwarin çêkirin', en: 'Cook', fr: 'Cuisiner', icon: '🍲' },
    { tr: 'TV izlemek', ku: 'Televizyon temaşekirin', en: 'Watch TV', fr: 'Regarder la télé', icon: '📺' },
    { tr: 'Okumak', ku: 'Xwendin', en: 'Read', fr: 'Lire', icon: '📖' },
    { tr: 'Oynamak', ku: 'Lîztin', en: 'Play', fr: 'Jouer', icon: '🎮' },
    { tr: 'Uyumak', ku: 'Razanê', en: 'Sleep', fr: 'Dormir', icon: '😴' },
    { tr: 'Temizlemek', ku: 'Paqijkirin', en: 'Clean', fr: 'Nettoyer', icon: '🧹' },
  ],
  // ─── UNIT 12: Duygular ───────────────────────────────────────────────────
  emotions: [
    { tr: 'Mutlu', ku: 'Şad', en: 'Happy', fr: 'Heureux', icon: '😊' },
    { tr: 'Üzgün', ku: 'Xemgîn', en: 'Sad', fr: 'Triste', icon: '😢' },
    { tr: 'Kızgın', ku: 'Hêrsbûyî', en: 'Angry', fr: 'En colère', icon: '😡' },
    { tr: 'Korkmuş', ku: 'Tirsiyayî', en: 'Scared', fr: 'Effrayé', icon: '😨' },
    { tr: 'Şaşırmış', ku: 'Matmayî', en: 'Surprised', fr: 'Surpris', icon: '😲' },
    { tr: 'Sıkılmış', ku: 'Bêzar', en: 'Bored', fr: 'Ennuyé', icon: '😑' },
  ],
  personality: [
    { tr: 'Nazik', ku: 'Dilovanî', en: 'Kind', fr: 'Gentil', icon: '🤗' },
    { tr: 'Akıllı', ku: 'Jîr', en: 'Smart', fr: 'Intelligent', icon: '🧠' },
    { tr: 'Cesur', ku: 'Dilêş', en: 'Brave', fr: 'Courageux', icon: '🦸' },
    { tr: 'Dürüst', ku: 'Rast', en: 'Honest', fr: 'Honnête', icon: '✅' },
    { tr: 'Çalışkan', ku: 'Birêkûpêk', en: 'Hardworking', fr: 'Travailleur', icon: '💪' },
    { tr: 'Sabırlı', ku: 'Bîrdar', en: 'Patient', fr: 'Patient', icon: '⏳' },
  ],
  reactions: [
    { tr: 'Harika', ku: 'Ecêb', en: 'Wonderful', fr: 'Merveilleux', icon: '🌟' },
    { tr: 'Aferin', ku: 'Aferin', en: 'Well done', fr: 'Bravo', icon: '👏' },
    { tr: 'Tamam', ku: 'Baş e', en: 'OK', fr: 'D\'accord', icon: '👍' },
    { tr: 'Olmaz', ku: 'Nabe', en: 'No way', fr: 'Pas question', icon: '❌' },
    { tr: 'Kesinlikle', ku: 'Bê guman', en: 'Definitely', fr: 'Certainement', icon: '💯' },
    { tr: 'Belki', ku: 'Dibe', en: 'Maybe', fr: 'Peut-être', icon: '🤔' },
  ],
  // ─── UNIT 13: Fiiller 1 ───────────────────────────────────────────────────
  movementVerbs: [
    { tr: 'Gitmek', ku: 'Çûyîn', en: 'Go', fr: 'Aller', icon: '🚶' },
    { tr: 'Gelmek', ku: 'Hatin', en: 'Come', fr: 'Venir', icon: '🏃' },
    { tr: 'Koşmak', ku: 'Bezan', en: 'Run', fr: 'Courir', icon: '🏃‍♂️' },
    { tr: 'Yürümek', ku: 'Meşîn', en: 'Walk', fr: 'Marcher', icon: '🚶‍♂️' },
    { tr: 'Uçmak', ku: 'Firîn', en: 'Fly', fr: 'Voler', icon: '✈️' },
    { tr: 'Atlamak', ku: 'Bazdan', en: 'Jump', fr: 'Sauter', icon: '🤸' },
  ],
  stateVerbs: [
    { tr: 'Oturmak', ku: 'Rûniştin', en: 'Sit', fr: 'S\'asseoir', icon: '🪑' },
    { tr: 'Durmak', ku: 'Rawestin', en: 'Stand', fr: 'Se lever', icon: '🧍' },
    { tr: 'Uzanmak', ku: 'Razanê', en: 'Lie down', fr: 'S\'allonger', icon: '😴' },
    { tr: 'Beklemek', ku: 'Hêvîkirin', en: 'Wait', fr: 'Attendre', icon: '⏳' },
    { tr: 'Düşünmek', ku: 'Ramandin', en: 'Think', fr: 'Penser', icon: '💭' },
    { tr: 'Bakmak', ku: 'Mêze kirin', en: 'Look', fr: 'Regarder', icon: '👀' },
  ],
  dailyVerbs: [
    { tr: 'Yemek yemek', ku: 'Xwarin', en: 'Eat', fr: 'Manger', icon: '🍽️' },
    { tr: 'İçmek', ku: 'Vexwarin', en: 'Drink', fr: 'Boire', icon: '🥤' },
    { tr: 'Uyumak', ku: 'Razanê', en: 'Sleep', fr: 'Dormir', icon: '😴' },
    { tr: 'Konuşmak', ku: 'Axaftin', en: 'Talk', fr: 'Parler', icon: '🗣️' },
    { tr: 'Yazmak', ku: 'Nivîsîn', en: 'Write', fr: 'Écrire', icon: '✍️' },
    { tr: 'Okumak', ku: 'Xwendin', en: 'Read', fr: 'Lire', icon: '📖' },
  ],
  // ─── UNIT 14: Fiiller 2 ───────────────────────────────────────────────────
  pastTense: [
    { tr: 'Gitti', ku: 'Çû', en: 'Went', fr: 'Est allé', icon: '🚶' },
    { tr: 'Geldi', ku: 'Hat', en: 'Came', fr: 'Est venu', icon: '🏃' },
    { tr: 'Yedi', ku: 'Xwar', en: 'Ate', fr: 'A mangé', icon: '🍽️' },
    { tr: 'İçti', ku: 'Vexwar', en: 'Drank', fr: 'A bu', icon: '🥤' },
    { tr: 'Yaptı', ku: 'Kir', en: 'Did', fr: 'A fait', icon: '✅' },
    { tr: 'Söyledi', ku: 'Got', en: 'Said', fr: 'A dit', icon: '💬' },
  ],
  futureTense: [
    { tr: 'Gidecek', ku: 'Dê biçe', en: 'Will go', fr: 'Ira', icon: '🚶' },
    { tr: 'Gelecek', ku: 'Dê bê', en: 'Will come', fr: 'Viendra', icon: '🏃' },
    { tr: 'Yiyecek', ku: 'Dê bixwe', en: 'Will eat', fr: 'Mangera', icon: '🍽️' },
    { tr: 'Yapacak', ku: 'Dê bike', en: 'Will do', fr: 'Fera', icon: '🔧' },
    { tr: 'Yazacak', ku: 'Dê binivîse', en: 'Will write', fr: 'Écrira', icon: '✍️' },
    { tr: 'Okuyacak', ku: 'Dê bixwîne', en: 'Will read', fr: 'Lira', icon: '📖' },
  ],
  imperatives: [
    { tr: 'Git!', ku: 'Biçe!', en: 'Go!', fr: 'Va!', icon: '🚶' },
    { tr: 'Gel!', ku: 'Were!', en: 'Come!', fr: 'Viens!', icon: '🏃' },
    { tr: 'Ye!', ku: 'Bixwe!', en: 'Eat!', fr: 'Mange!', icon: '🍽️' },
    { tr: 'Otur!', ku: 'Rûne!', en: 'Sit!', fr: 'Assieds-toi!', icon: '🪑' },
    { tr: 'Dur!', ku: 'Raweste!', en: 'Stop!', fr: 'Arrête!', icon: '🛑' },
    { tr: 'Konuş!', ku: 'Biaxive!', en: 'Talk!', fr: 'Parle!', icon: '🗣️' },
  ],
  // ─── UNIT 15: Eğitim ──────────────────────────────────────────────────────
  schoolSupplies: [
    { tr: 'Kitap', ku: 'Pirtûk', en: 'Book', fr: 'Livre', icon: '📚' },
    { tr: 'Kalem', ku: 'Qelem', en: 'Pen', fr: 'Stylo', icon: '✏️' },
    { tr: 'Defter', ku: 'Nîşe', en: 'Notebook', fr: 'Cahier', icon: '📓' },
    { tr: 'Cetvel', ku: 'Silav', en: 'Ruler', fr: 'Règle', icon: '📏' },
    { tr: 'Çanta', ku: 'Çente', en: 'Bag', fr: 'Sac', icon: '🎒' },
    { tr: 'Silgi', ku: 'Eraser', en: 'Eraser', fr: 'Gomme', icon: '🩹' },
  ],
  subjects: [
    { tr: 'Matematik', ku: 'Matematîk', en: 'Math', fr: 'Mathématiques', icon: '🔢' },
    { tr: 'Fen', ku: 'Zanist', en: 'Science', fr: 'Sciences', icon: '🔬' },
    { tr: 'Tarih', ku: 'Dîrok', en: 'History', fr: 'Histoire', icon: '📜' },
    { tr: 'Coğrafya', ku: 'Erdnasî', en: 'Geography', fr: 'Géographie', icon: '🌍' },
    { tr: 'Müzik', ku: 'Muzîk', en: 'Music', fr: 'Musique', icon: '🎵' },
    { tr: 'Sanat', ku: 'Huner', en: 'Art', fr: 'Art', icon: '🎨' },
  ],
  classroomWords: [
    { tr: 'Tahta', ku: 'Lûle', en: 'Blackboard', fr: 'Tableau', icon: '📋' },
    { tr: 'El kaldırmak', ku: 'Dest bilindkirin', en: 'Raise hand', fr: 'Lever la main', icon: '✋' },
    { tr: 'Soru sormak', ku: 'Pirsîn', en: 'Ask', fr: 'Demander', icon: '❓' },
    { tr: 'Cevaplamak', ku: 'Bersivdan', en: 'Answer', fr: 'Répondre', icon: '💬' },
    { tr: 'Anlamak', ku: 'Têgihiştin', en: 'Understand', fr: 'Comprendre', icon: '💡' },
    { tr: 'Tekrar etmek', ku: 'Dubare kirin', en: 'Repeat', fr: 'Répéter', icon: '🔄' },
  ],
  // ─── UNIT 16: Tatil ve Seyahat ────────────────────────────────────────────
  vacation: [
    { tr: 'Plaj', ku: 'Deşt', en: 'Beach', fr: 'Plage', icon: '🏖️' },
    { tr: 'Dağ', ku: 'Çiya', en: 'Mountain', fr: 'Montagne', icon: '⛰️' },
    { tr: 'Şehir', ku: 'Bajar', en: 'City', fr: 'Ville', icon: '🏙️' },
    { tr: 'Ada', ku: 'Girav', en: 'Island', fr: 'Île', icon: '🏝️' },
    { tr: 'Şelale', ku: 'Şelale', en: 'Waterfall', fr: 'Cascade', icon: '💧' },
    { tr: 'Tatil', ku: 'Betlanê', en: 'Holiday', fr: 'Vacances', icon: '🌴' },
  ],
  hotel: [
    { tr: 'Oda', ku: 'Jûr', en: 'Room', fr: 'Chambre', icon: '🛏️' },
    { tr: 'Resepsiyon', ku: 'Sermaşok', en: 'Reception', fr: 'Réception', icon: '🏨' },
    { tr: 'Anahtar', ku: 'Kilît', en: 'Key', fr: 'Clé', icon: '🔑' },
    { tr: 'Banyo', ku: 'Serşok', en: 'Bathroom', fr: 'Salle de bain', icon: '🚿' },
    { tr: 'Rezervasyon', ku: 'Rezervasyon', en: 'Reservation', fr: 'Réservation', icon: '📅' },
    { tr: 'Hesap', ku: 'Hesab', en: 'Bill', fr: 'Facture', icon: '🧾' },
  ],
  travelPlan: [
    { tr: 'Pasaport', ku: 'Pasaport', en: 'Passport', fr: 'Passeport', icon: '🛂' },
    { tr: 'Vize', ku: 'Vîze', en: 'Visa', fr: 'Visa', icon: '📋' },
    { tr: 'Havalimanı', ku: 'Balafirgeha', en: 'Airport', fr: 'Aéroport', icon: '✈️' },
    { tr: 'Bavul', ku: 'Çente', en: 'Suitcase', fr: 'Valise', icon: '🧳' },
    { tr: 'Bilet', ku: 'Bilêt', en: 'Ticket', fr: 'Billet', icon: '🎫' },
    { tr: 'Tur', ku: 'Tur', en: 'Tour', fr: 'Tour', icon: '🗺️' },
  ],
  // ─── UNIT 17: Hobiler ─────────────────────────────────────────────────────
  sports: [
    { tr: 'Futbol', ku: 'Futbol', en: 'Football', fr: 'Football', icon: '⚽' },
    { tr: 'Tenis', ku: 'Tenîs', en: 'Tennis', fr: 'Tennis', icon: '🎾' },
    { tr: 'Yüzme', ku: 'Senet', en: 'Swimming', fr: 'Natation', icon: '🏊' },
    { tr: 'Koşu', ku: 'Bezan', en: 'Running', fr: 'Course', icon: '🏃' },
    { tr: 'Basketbol', ku: 'Basketbol', en: 'Basketball', fr: 'Basketball', icon: '🏀' },
    { tr: 'Voleybol', ku: 'Voleybol', en: 'Volleyball', fr: 'Volleyball', icon: '🏐' },
  ],
  musicArt: [
    { tr: 'Müzik', ku: 'Muzîk', en: 'Music', fr: 'Musique', icon: '🎵' },
    { tr: 'Şarkı', ku: 'Kilam', en: 'Song', fr: 'Chanson', icon: '🎤' },
    { tr: 'Enstrüman', ku: 'Wesayit', en: 'Instrument', fr: 'Instrument', icon: '🎸' },
    { tr: 'Resim', ku: 'Xêzkirin', en: 'Painting', fr: 'Peinture', icon: '🎨' },
    { tr: 'Dans', ku: 'Dans', en: 'Dance', fr: 'Danse', icon: '💃' },
    { tr: 'Tiyatro', ku: 'Şano', en: 'Theater', fr: 'Théâtre', icon: '🎭' },
  ],
  leisure: [
    { tr: 'Okuma', ku: 'Xwendin', en: 'Reading', fr: 'Lecture', icon: '📖' },
    { tr: 'Oyun', ku: 'Lîstik', en: 'Game', fr: 'Jeu', icon: '🎮' },
    { tr: 'Film', ku: 'Film', en: 'Movie', fr: 'Film', icon: '🎬' },
    { tr: 'Seyahat', ku: 'Geşt', en: 'Travel', fr: 'Voyage', icon: '✈️' },
    { tr: 'Yemek yapmak', ku: 'Pijandina xwarinê', en: 'Cooking', fr: 'Cuisine', icon: '🍳' },
    { tr: 'Bahçecilik', ku: 'Baxçekarî', en: 'Gardening', fr: 'Jardinage', icon: '🌱' },
  ],
  // ─── UNIT 18: Doğa ve Çevre ──────────────────────────────────────────────
  seasons: [
    { tr: 'İlkbahar', ku: 'Biharê', en: 'Spring', fr: 'Printemps', icon: '🌸' },
    { tr: 'Yaz', ku: 'Havîn', en: 'Summer', fr: 'Été', icon: '☀️' },
    { tr: 'Sonbahar', ku: 'Payîz', en: 'Autumn', fr: 'Automne', icon: '🍂' },
    { tr: 'Kış', ku: 'Zivistan', en: 'Winter', fr: 'Hiver', icon: '❄️' },
    { tr: 'Sıcak', ku: 'Germ', en: 'Hot', fr: 'Chaud', icon: '🌡️' },
    { tr: 'Soğuk', ku: 'Sar', en: 'Cold', fr: 'Froid', icon: '🧊' },
  ],
  weather: [
    { tr: 'Yağmur', ku: 'Baran', en: 'Rain', fr: 'Pluie', icon: '🌧️' },
    { tr: 'Kar', ku: 'Berf', en: 'Snow', fr: 'Neige', icon: '❄️' },
    { tr: 'Güneş', ku: 'Tavê', en: 'Sun', fr: 'Soleil', icon: '☀️' },
    { tr: 'Rüzgar', ku: 'Ba', en: 'Wind', fr: 'Vent', icon: '💨' },
    { tr: 'Bulut', ku: 'Ewr', en: 'Cloud', fr: 'Nuage', icon: '☁️' },
    { tr: 'Fırtına', ku: 'Bager', en: 'Storm', fr: 'Tempête', icon: '⛈️' },
  ],
  geography: [
    { tr: 'Kıta', ku: 'Parzemîn', en: 'Continent', fr: 'Continent', icon: '🌍' },
    { tr: 'Ülke', ku: 'Welat', en: 'Country', fr: 'Pays', icon: '🏳️' },
    { tr: 'Nehir', ku: 'Çem', en: 'River', fr: 'Rivière', icon: '🏞️' },
    { tr: 'Göl', ku: 'Gol', en: 'Lake', fr: 'Lac', icon: '🏞️' },
    { tr: 'Okyanus', ku: 'Okyanûs', en: 'Ocean', fr: 'Océan', icon: '🌊' },
    { tr: 'Çöl', ku: 'Çol', en: 'Desert', fr: 'Désert', icon: '🏜️' },
  ],
  // ─── UNIT 19: Sosyal Hayat ────────────────────────────────────────────────
  friendship: [
    { tr: 'Arkadaş', ku: 'Heval', en: 'Friend', fr: 'Ami', icon: '🤝' },
    { tr: 'Tanışmak', ku: 'Nasîn', en: 'Meet', fr: 'Rencontrer', icon: '👋' },
    { tr: 'Arkadaşlık', ku: 'Hevaltî', en: 'Friendship', fr: 'Amitié', icon: '💛' },
    { tr: 'Sevmek', ku: 'Hezdikirin', en: 'Like', fr: 'Aimer', icon: '❤️' },
    { tr: 'Yardım etmek', ku: 'Alîkarî kirin', en: 'Help', fr: 'Aider', icon: '🆘' },
    { tr: 'Paylaşmak', ku: 'Parvedan', en: 'Share', fr: 'Partager', icon: '🤲' },
  ],
  invitations: [
    { tr: 'Davet', ku: 'Vexwendin', en: 'Invitation', fr: 'Invitation', icon: '💌' },
    { tr: 'Parti', ku: 'Şahî', en: 'Party', fr: 'Fête', icon: '🎉' },
    { tr: 'Hediye', ku: 'Diyarî', en: 'Gift', fr: 'Cadeau', icon: '🎁' },
    { tr: 'Düğün', ku: 'Dawet', en: 'Wedding', fr: 'Mariage', icon: '💍' },
    { tr: 'Kabul etmek', ku: 'Qebûlkirin', en: 'Accept', fr: 'Accepter', icon: '✅' },
    { tr: 'Reddetmek', ku: 'Red kirin', en: 'Reject', fr: 'Refuser', icon: '❌' },
  ],
  celebrations: [
    { tr: 'Doğum günü', ku: 'Bûroz', en: 'Birthday', fr: 'Anniversaire', icon: '🎂' },
    { tr: 'Yeni yıl', ku: 'Sersalê', en: 'New Year', fr: 'Nouvel An', icon: '🎆' },
    { tr: 'Bayram', ku: 'Cejna', en: 'Holiday', fr: 'Fête nationale', icon: '🎊' },
    { tr: 'Tebrikler', ku: 'Pîroz be', en: 'Congratulations', fr: 'Félicitations', icon: '🎊' },
    { tr: 'Mutlu ol', ku: 'Bixweş be', en: 'Be happy', fr: 'Sois heureux', icon: '😊' },
    { tr: 'Eğlen', ku: 'Xweş were', en: 'Have fun', fr: 'Amuse-toi', icon: '🎈' },
  ],
  // ─── UNIT 20: İleri Gramer ────────────────────────────────────────────────
  conjunctions: [
    { tr: 'Ve', ku: 'Û', en: 'And', fr: 'Et', icon: '➕' },
    { tr: 'Ama', ku: 'Lê', en: 'But', fr: 'Mais', icon: '↔️' },
    { tr: 'Veya', ku: 'An', en: 'Or', fr: 'Ou', icon: '🔀' },
    { tr: 'Çünkü', ku: 'Ji ber ku', en: 'Because', fr: 'Parce que', icon: '💡' },
    { tr: 'Eğer', ku: 'Eger', en: 'If', fr: 'Si', icon: '❓' },
    { tr: 'Fakat', ku: 'Belê', en: 'However', fr: 'Cependant', icon: '⚠️' },
  ],
  questionWords: [
    { tr: 'Ne', ku: 'Çi', en: 'What', fr: 'Quoi', icon: '❓' },
    { tr: 'Kim', ku: 'Kî', en: 'Who', fr: 'Qui', icon: '👤' },
    { tr: 'Ne zaman', ku: 'Kengî', en: 'When', fr: 'Quand', icon: '⏰' },
    { tr: 'Nerede', ku: 'Li ku', en: 'Where', fr: 'Où', icon: '📍' },
    { tr: 'Nasıl', ku: 'Çawa', en: 'How', fr: 'Comment', icon: '🤔' },
    { tr: 'Neden', ku: 'Çima', en: 'Why', fr: 'Pourquoi', icon: '💭' },
  ],
  prepositions: [
    { tr: 'İçinde', ku: 'Di...de', en: 'In', fr: 'Dans', icon: '📦' },
    { tr: 'Üstünde', ku: 'Li ser', en: 'On', fr: 'Sur', icon: '⬆️' },
    { tr: 'Altında', ku: 'Li jêr', en: 'Under', fr: 'Sous', icon: '⬇️' },
    { tr: 'Yanında', ku: 'Li rex', en: 'Beside', fr: 'À côté', icon: '↔️' },
    { tr: 'Önünde', ku: 'Li pêş', en: 'In front', fr: 'Devant', icon: '⬆️' },
    { tr: 'Arkasında', ku: 'Li pişt', en: 'Behind', fr: 'Derrière', icon: '⬇️' },
  ],
  // ─── UNIT 21: İleri İletişim ─────────────────────────────────────────────
  opinions: [
    { tr: 'Bence', ku: 'Bi min ra', en: 'I think', fr: 'Je pense', icon: '💭' },
    { tr: 'Bana göre', ku: 'Li gor min', en: 'In my opinion', fr: 'À mon avis', icon: '🗣️' },
    { tr: 'İyi', ku: 'Baş', en: 'Good', fr: 'Bien', icon: '👍' },
    { tr: 'Kötü', ku: 'Xirab', en: 'Bad', fr: 'Mauvais', icon: '👎' },
    { tr: 'Doğru', ku: 'Rast', en: 'Correct', fr: 'Correct', icon: '✅' },
    { tr: 'Yanlış', ku: 'Şaş', en: 'Wrong', fr: 'Incorrect', icon: '❌' },
  ],
  discussion: [
    { tr: 'Katılmak', ku: 'Razî bûn', en: 'Agree', fr: 'Être d\'accord', icon: '🤝' },
    { tr: 'Katılmamak', ku: 'Razî nebûn', en: 'Disagree', fr: 'Pas d\'accord', icon: '🙅' },
    { tr: 'Evet ama', ku: 'Erê lê', en: 'Yes but', fr: 'Oui mais', icon: '⚖️' },
    { tr: 'Kesinlikle', ku: 'Bê guman', en: 'Definitely', fr: 'Certainement', icon: '💯' },
    { tr: 'Sanmıyorum', ku: 'Ez nafikirim', en: 'I don\'t think so', fr: 'Je ne crois pas', icon: '🤔' },
    { tr: 'Haklısın', ku: 'Tu maf î', en: 'You are right', fr: 'Tu as raison', icon: '✅' },
  ],
  media: [
    { tr: 'Haber', ku: 'Nûçe', en: 'News', fr: 'Nouvelles', icon: '📰' },
    { tr: 'Gazete', ku: 'Rojname', en: 'Newspaper', fr: 'Journal', icon: '📄' },
    { tr: 'Radyo', ku: 'Radyo', en: 'Radio', fr: 'Radio', icon: '📻' },
    { tr: 'Sosyal medya', ku: 'Medyaya civakî', en: 'Social media', fr: 'Réseaux sociaux', icon: '📱' },
    { tr: 'Yayın', ku: 'Weşan', en: 'Broadcast', fr: 'Diffusion', icon: '📡' },
    { tr: 'Duyuru', ku: 'Ragihandin', en: 'Announcement', fr: 'Annonce', icon: '📢' },
  ],
  // ─── UNIT 22: Kültür ─────────────────────────────────────────────────────
  proverbs: [
    { tr: 'Atasözü', ku: 'Gotinên pêşiyan', en: 'Proverb', fr: 'Proverbe', icon: '📜' },
    { tr: 'Bilgelik', ku: 'Zanistê', en: 'Wisdom', fr: 'Sagesse', icon: '🦉' },
    { tr: 'Tavsiye', ku: 'Şîret', en: 'Advice', fr: 'Conseil', icon: '💡' },
    { tr: 'Söz', ku: 'Sozname', en: 'Promise', fr: 'Promesse', icon: '🤝' },
    { tr: 'Hikaye', ku: 'Çîrok', en: 'Story', fr: 'Histoire', icon: '📖' },
    { tr: 'Anlam', ku: 'Wate', en: 'Meaning', fr: 'Sens', icon: '💭' },
  ],
  tales: [
    { tr: 'Masal', ku: 'Çîroka pêşiyan', en: 'Tale', fr: 'Conte', icon: '🧚' },
    { tr: 'Kahraman', ku: 'Qehremanê', en: 'Hero', fr: 'Héros', icon: '🦸' },
    { tr: 'Prenses', ku: 'Prenses', en: 'Princess', fr: 'Princesse', icon: '👸' },
    { tr: 'Ejderha', ku: 'Ejderha', en: 'Dragon', fr: 'Dragon', icon: '🐉' },
    { tr: 'Sihir', ku: 'Sehrê', en: 'Magic', fr: 'Magie', icon: '✨' },
    { tr: 'Hazine', ku: 'Hazîne', en: 'Treasure', fr: 'Trésor', icon: '💎' },
  ],
  traditions: [
    { tr: 'Gelenek', ku: 'Kevneşopî', en: 'Tradition', fr: 'Tradition', icon: '🏛️' },
    { tr: 'Tören', ku: 'Ayîn', en: 'Ceremony', fr: 'Cérémonie', icon: '🎊' },
    { tr: 'Kültür', ku: 'Çand', en: 'Culture', fr: 'Culture', icon: '🌐' },
    { tr: 'Miras', ku: 'Mîras', en: 'Heritage', fr: 'Patrimoine', icon: '🏺' },
    { tr: 'Festival', ku: 'Festival', en: 'Festival', fr: 'Festival', icon: '🎪' },
    { tr: 'Müzik', ku: 'Muzîk', en: 'Music', fr: 'Musique', icon: '🎶' },
  ],
};

// ──────────────────────────────────────────────────────────────────────────────
// Lesson plan: maps lesson number to { vocabKey, title, description, icon }
// ──────────────────────────────────────────────────────────────────────────────
const LESSON_PLAN = [
  // Unit 3: Sayılar ve Zaman
  { num: 7, vocabKey: 'numbers', title: 'Sayılar', description: 'Sayıları öğren', icon: '1️⃣' },
  { num: 8, vocabKey: 'days', title: 'Günler ve Aylar', description: 'Haftanın günleri', icon: '📅' },
  { num: 9, vocabKey: 'time', title: 'Saatler', description: 'Zamanı ifade et', icon: '⏰' },
  // Unit 4: Hayvanlar ve Doğa
  { num: 10, vocabKey: 'petAnimals', title: 'Evcil Hayvanlar', description: 'Evdeki hayvanlar', icon: '🐶' },
  { num: 11, vocabKey: 'wildAnimals', title: 'Vahşi Hayvanlar', description: 'Yabani hayvanlar', icon: '🦁' },
  { num: 12, vocabKey: 'nature', title: 'Doğa', description: 'Doğadaki varlıklar', icon: '🌳' },
  // Unit 5: Yiyecek ve İçecek
  { num: 13, vocabKey: 'fruits', title: 'Meyveler', description: 'Tatlı meyveler', icon: '🍎' },
  { num: 14, vocabKey: 'vegetables', title: 'Sebzeler', description: 'Sağlıklı sebzeler', icon: '🥕' },
  { num: 15, vocabKey: 'drinks', title: 'İçecekler', description: 'Sıvılar ve içkiler', icon: '☕' },
  // Unit 6: Ev ve Eşyalar
  { num: 16, vocabKey: 'rooms', title: 'Odalar', description: 'Evdeki odalar', icon: '🏠' },
  { num: 17, vocabKey: 'furniture', title: 'Mobilyalar', description: 'Ev mobilyaları', icon: '🛋️' },
  { num: 18, vocabKey: 'kitchenItems', title: 'Mutfak Eşyaları', description: 'Mutfak malzemeleri', icon: '🍽️' },
  // Unit 7: Vücut ve Sağlık
  { num: 19, vocabKey: 'body', title: 'Vücut Bölümleri', description: 'Vücudun parçaları', icon: '💪' },
  { num: 20, vocabKey: 'illness', title: 'Hastalıklar', description: 'Sağlık sorunları', icon: '🤒' },
  { num: 21, vocabKey: 'hospital', title: 'Hastanede', description: 'Sağlık ortamı', icon: '🏥' },
  // Unit 8: Giysiler
  { num: 22, vocabKey: 'clothes', title: 'Kıyafetler', description: 'Giyim türleri', icon: '👕' },
  { num: 23, vocabKey: 'clothingColors', title: 'Renklerle Giyim', description: 'Renk ve kıyafet', icon: '👗' },
  { num: 24, vocabKey: 'market', title: 'Pazarda', description: 'Alışveriş kelimeleri', icon: '🛍️' },
  // Unit 9: Meslekler
  { num: 25, vocabKey: 'jobs1', title: 'Meslekler 1', description: 'Temel meslekler', icon: '👨‍⚕️' },
  { num: 26, vocabKey: 'jobs2', title: 'Meslekler 2', description: 'İleri meslekler', icon: '👩‍🏫' },
  { num: 27, vocabKey: 'workplace', title: 'İş Yerinde', description: 'Ofis ve iş hayatı', icon: '🏢' },
  // Unit 10: Şehir ve Ulaşım
  { num: 28, vocabKey: 'places', title: 'Mekanlar', description: 'Şehirdeki yerler', icon: '🏙️' },
  { num: 29, vocabKey: 'transport', title: 'Taşıtlar', description: 'Ulaşım araçları', icon: '🚗' },
  { num: 30, vocabKey: 'directions', title: 'Yön Sorma', description: 'Yol tarifi ver', icon: '🗺️' },
  // Unit 11: Günlük Rutinler
  { num: 31, vocabKey: 'morningRoutine', title: 'Sabah Rutini', description: 'Sabah aktiviteleri', icon: '🌅' },
  { num: 32, vocabKey: 'schoolWords', title: 'İş ve Okul', description: 'Okul kelimeleri', icon: '🏫' },
  { num: 33, vocabKey: 'eveningRoutine', title: 'Akşam Rutini', description: 'Akşam aktiviteleri', icon: '🌃' },
  // Unit 12: Duygular
  { num: 34, vocabKey: 'emotions', title: 'Hisler', description: 'Duygu ifadeleri', icon: '😊' },
  { num: 35, vocabKey: 'personality', title: 'Karakter Özellikleri', description: 'Kişilik ifadeleri', icon: '🧠' },
  { num: 36, vocabKey: 'reactions', title: 'Tepkiler', description: 'Günlük tepkiler', icon: '😲' },
  // Unit 13: Fiiller 1
  { num: 37, vocabKey: 'movementVerbs', title: 'Hareket Fiilleri', description: 'Hareket ifade eden fiiller', icon: '🏃‍♂️' },
  { num: 38, vocabKey: 'stateVerbs', title: 'Durum Fiilleri', description: 'Durum ifade eden fiiller', icon: '🧘' },
  { num: 39, vocabKey: 'dailyVerbs', title: 'Günlük Fiiller', description: 'Günlük kullanılan fiiller', icon: '🗣️' },
  // Unit 14: Fiiller 2
  { num: 40, vocabKey: 'pastTense', title: 'Geçmiş Zaman', description: 'Geçmiş zaman kullanımı', icon: '⏪' },
  { num: 41, vocabKey: 'futureTense', title: 'Gelecek Zaman', description: 'Gelecek zaman kullanımı', icon: '⏩' },
  { num: 42, vocabKey: 'imperatives', title: 'Emir Kipleri', description: 'Emir cümleleri', icon: '❗' },
  // Unit 15: Eğitim
  { num: 43, vocabKey: 'schoolSupplies', title: 'Okul Eşyaları', description: 'Okul malzemeleri', icon: '🎒' },
  { num: 44, vocabKey: 'subjects', title: 'Dersler', description: 'Okul dersleri', icon: '📚' },
  { num: 45, vocabKey: 'classroomWords', title: 'Sınıfta', description: 'Sınıf aktiviteleri', icon: '👩‍🎓' },
  // Unit 16: Tatil ve Seyahat
  { num: 46, vocabKey: 'vacation', title: 'Tatil Yerleri', description: 'Tatil mekanları', icon: '🏖️' },
  { num: 47, vocabKey: 'hotel', title: 'Otelde', description: 'Otel kelimeleri', icon: '🏨' },
  { num: 48, vocabKey: 'travelPlan', title: 'Seyahat Planı', description: 'Seyahat hazırlıkları', icon: '🧳' },
  // Unit 17: Hobiler
  { num: 49, vocabKey: 'sports', title: 'Spor', description: 'Spor aktiviteleri', icon: '⚽' },
  { num: 50, vocabKey: 'musicArt', title: 'Müzik ve Sanat', description: 'Sanat ve müzik', icon: '🎸' },
  { num: 51, vocabKey: 'leisure', title: 'Boş Zaman', description: 'Hobi ve eğlence', icon: '🎮' },
  // Unit 18: Doğa ve Çevre
  { num: 52, vocabKey: 'seasons', title: 'Mevsimler', description: 'Yılın mevsimleri', icon: '🍂' },
  { num: 53, vocabKey: 'weather', title: 'Hava Durumu', description: 'Hava koşulları', icon: '🌦️' },
  { num: 54, vocabKey: 'geography', title: 'Coğrafya', description: 'Coğrafi kavramlar', icon: '🌍' },
  // Unit 19: Sosyal Hayat
  { num: 55, vocabKey: 'friendship', title: 'Arkadaşlık', description: 'Dostluk ifadeleri', icon: '🤝' },
  { num: 56, vocabKey: 'invitations', title: 'Davetler', description: 'Davet ve etkinlik', icon: '💌' },
  { num: 57, vocabKey: 'celebrations', title: 'Kutlamalar', description: 'Özel günler', icon: '🎉' },
  // Unit 20: İleri Gramer
  { num: 58, vocabKey: 'conjunctions', title: 'Bağlaçlar', description: 'Bağlama kelimeleri', icon: '🔗' },
  { num: 59, vocabKey: 'questionWords', title: 'Soru Kelimeleri', description: 'Soru sözcükleri', icon: '❓' },
  { num: 60, vocabKey: 'prepositions', title: 'Edatlar', description: 'Yer ifadeleri', icon: '➕' },
  // Unit 21: İleri İletişim
  { num: 61, vocabKey: 'opinions', title: 'Fikir Belirtme', description: 'Görüş ifade etme', icon: '💡' },
  { num: 62, vocabKey: 'discussion', title: 'Tartışma', description: 'Tartışma dili', icon: '🗣️' },
  { num: 63, vocabKey: 'media', title: 'Haberler', description: 'Medya ve iletişim', icon: '📰' },
  // Unit 22: Kültür
  { num: 64, vocabKey: 'proverbs', title: 'Atasözleri', description: 'Bilge sözler', icon: '📜' },
  { num: 65, vocabKey: 'tales', title: 'Masallar', description: 'Efsane ve masal', icon: '🦄' },
  { num: 66, vocabKey: 'traditions', title: 'Gelenekler', description: 'Kültür ve adet', icon: '🎭' },
];

// Language configs
const LANGS = [
  { key: 'ku', prefix: 'k', audioLang: 'tr', label: 'Kürtçe', foreignField: 'ku', file: 'kurdishContent.ts', exportName: 'kurdishContent' },
  { key: 'en', prefix: 'e', audioLang: 'en-US', label: 'İngilizce', foreignField: 'en', file: 'englishContent.ts', exportName: 'englishContent' },
  { key: 'fr', prefix: 'f', audioLang: 'fr-FR', label: 'Fransızca', foreignField: 'fr', file: 'frenchContent.ts', exportName: 'frenchContent' },
  { key: 'tr', prefix: 't', audioLang: 'tr-TR', label: 'Türkçe', foreignField: 'tr', file: 'turkishContent.ts', exportName: 'turkishContent' },
];

function buildLesson(langConfig, lessonPlan) {
  const { prefix, audioLang, foreignField } = langConfig;
  const { num, vocabKey, title, description, icon } = lessonPlan;
  const id = `${prefix}${num}`;
  const vocab = VOCAB[vocabKey];
  const questions = [];
  let qNum = 1;

  // 1. Flashcards (first 6 words)
  for (let i = 0; i < Math.min(6, vocab.length); i++) {
    const word = vocab[i];
    questions.push({
      id: `${id}q${qNum++}`,
      type: 'flashcard',
      prompt: word.tr,
      options: [],
      correctIndex: 0,
      audioText: word[foreignField],
      audioLang,
      imageOptions: [word.icon],
    });
  }

  // 2. MultipleChoice (target→Turkish, foreign word given, pick Turkish)
  for (let i = 0; i < Math.min(3, vocab.length); i++) {
    const word = vocab[i];
    const wrongs = vocab.filter((_, j) => j !== i).map(w => w.tr).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [word.tr, ...wrongs].sort(() => Math.random() - 0.5);
    const ci = opts.indexOf(word.tr);
    questions.push({
      id: `${id}q${qNum++}`,
      type: 'multipleChoice',
      prompt: `"${word[foreignField]}" kelimesinin Türkçe anlamı nedir?`,
      options: opts,
      correctIndex: ci,
      audioText: word[foreignField],
      audioLang,
    });
  }

  // 3. Translate (Turkish→target, "nasıl söylenir?")
  for (let i = 0; i < Math.min(2, vocab.length); i++) {
    const word = vocab[i + (vocab.length > 4 ? 3 : 0)];
    if (!word) continue;
    const wrongs = vocab.filter((_, j) => j !== vocab.indexOf(word)).map(w => w[foreignField]).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [word[foreignField], ...wrongs].sort(() => Math.random() - 0.5);
    const ci = opts.indexOf(word[foreignField]);
    questions.push({
      id: `${id}q${qNum++}`,
      type: 'translate',
      prompt: `"${word.tr}" nasıl söylenir?`,
      options: opts,
      correctIndex: ci,
      audioText: word[foreignField],
      audioLang,
    });
  }

  return {
    id,
    title,
    description,
    icon,
    xpReward: 20,
    questions,
  };
}

// Generate and append to each language file
const dataDir = path.join(__dirname, '..', 'src', 'data');

for (const langConfig of LANGS) {
  const filePath = path.join(dataDir, langConfig.file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the closing of the array (last `];` or last `];\n`)
  const closingPattern = /\];\s*$/;
  const match = content.match(closingPattern);
  if (!match) {
    console.error(`Cannot find closing for ${langConfig.file}`);
    continue;
  }

  const newLessons = [];
  for (const plan of LESSON_PLAN) {
    const lesson = buildLesson(langConfig, plan);
    newLessons.push(JSON.stringify(lesson, null, 2).replace(/"([^"]+)":/g, '"$1":'));
  }

  const newContent = content.replace(closingPattern, `,\n  ${newLessons.join(',\n  ')}\n];`);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ ${langConfig.file}: Added lessons ${LESSON_PLAN[0].num}-${LESSON_PLAN[LESSON_PLAN.length-1].num} (${LESSON_PLAN.length} lessons)`);
}

console.log('\n🎉 All missing lessons generated!');
