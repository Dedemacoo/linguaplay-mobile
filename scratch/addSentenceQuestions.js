// addSentenceQuestions.js
// Adds 3 constructSentence questions to each generated lesson (7-66)
// Run with: node addSentenceQuestions.js
const fs = require('fs');
const path = require('path');

// ── Same VOCAB as generateMissingLessons.js ────────────────────────────────
const VOCAB = {
  numbers:       [{ tr: 'Bir', ku: 'Yek', en: 'One', fr: 'Un' },{ tr: 'İki', ku: 'Du', en: 'Two', fr: 'Deux' },{ tr: 'Üç', ku: 'Sê', en: 'Three', fr: 'Trois' },{ tr: 'Dört', ku: 'Çar', en: 'Four', fr: 'Quatre' },{ tr: 'Beş', ku: 'Pênc', en: 'Five', fr: 'Cinq' },{ tr: 'On', ku: 'Deh', en: 'Ten', fr: 'Dix' }],
  days:          [{ tr: 'Pazartesi', ku: 'Duşem', en: 'Monday', fr: 'Lundi' },{ tr: 'Salı', ku: 'Sêşem', en: 'Tuesday', fr: 'Mardi' },{ tr: 'Çarşamba', ku: 'Çarşem', en: 'Wednesday', fr: 'Mercredi' },{ tr: 'Perşembe', ku: 'Pêncşem', en: 'Thursday', fr: 'Jeudi' },{ tr: 'Cuma', ku: 'În', en: 'Friday', fr: 'Vendredi' },{ tr: 'Pazar', ku: 'Yekşem', en: 'Sunday', fr: 'Dimanche' }],
  time:          [{ tr: 'Sabah', ku: 'Sibeh', en: 'Morning', fr: 'Matin' },{ tr: 'Öğle', ku: 'Nîvro', en: 'Noon', fr: 'Midi' },{ tr: 'Akşam', ku: 'Êvar', en: 'Evening', fr: 'Soir' },{ tr: 'Gece', ku: 'Şev', en: 'Night', fr: 'Nuit' },{ tr: 'Saat', ku: 'Seet', en: 'Hour', fr: 'Heure' },{ tr: 'Dakika', ku: 'Xulekan', en: 'Minute', fr: 'Minute' }],
  petAnimals:    [{ tr: 'Kedi', ku: 'Pisîk', en: 'Cat', fr: 'Chat' },{ tr: 'Köpek', ku: 'Kûçik', en: 'Dog', fr: 'Chien' },{ tr: 'Kuş', ku: 'Çivîk', en: 'Bird', fr: 'Oiseau' },{ tr: 'Balık', ku: 'Masî', en: 'Fish', fr: 'Poisson' },{ tr: 'Tavşan', ku: 'Kerguh', en: 'Rabbit', fr: 'Lapin' },{ tr: 'At', ku: 'Hesp', en: 'Horse', fr: 'Cheval' }],
  wildAnimals:   [{ tr: 'Aslan', ku: 'Şêr', en: 'Lion', fr: 'Lion' },{ tr: 'Kaplan', ku: 'Peleng', en: 'Tiger', fr: 'Tigre' },{ tr: 'Fil', ku: 'Fîl', en: 'Elephant', fr: 'Éléphant' },{ tr: 'Ayı', ku: 'Hirç', en: 'Bear', fr: 'Ours' },{ tr: 'Kurt', ku: 'Gur', en: 'Wolf', fr: 'Loup' },{ tr: 'Tilki', ku: 'Rovî', en: 'Fox', fr: 'Renard' }],
  nature:        [{ tr: 'Ağaç', ku: 'Dar', en: 'Tree', fr: 'Arbre' },{ tr: 'Çiçek', ku: 'Kulîlk', en: 'Flower', fr: 'Fleur' },{ tr: 'Dağ', ku: 'Çiya', en: 'Mountain', fr: 'Montagne' },{ tr: 'Deniz', ku: 'Deryay', en: 'Sea', fr: 'Mer' },{ tr: 'Nehir', ku: 'Çem', en: 'River', fr: 'Rivière' },{ tr: 'Orman', ku: 'Daristanê', en: 'Forest', fr: 'Forêt' }],
  fruits:        [{ tr: 'Elma', ku: 'Sêv', en: 'Apple', fr: 'Pomme' },{ tr: 'Muz', ku: 'Mûz', en: 'Banana', fr: 'Banane' },{ tr: 'Portakal', ku: 'Porteqal', en: 'Orange', fr: 'Orange' },{ tr: 'Üzüm', ku: 'Tirî', en: 'Grape', fr: 'Raisin' },{ tr: 'Çilek', ku: 'Tûtî', en: 'Strawberry', fr: 'Fraise' },{ tr: 'Armut', ku: 'Firxûn', en: 'Pear', fr: 'Poire' }],
  vegetables:    [{ tr: 'Havuç', ku: 'Gêzer', en: 'Carrot', fr: 'Carotte' },{ tr: 'Domates', ku: 'Bacanê sor', en: 'Tomato', fr: 'Tomate' },{ tr: 'Soğan', ku: 'Peyaz', en: 'Onion', fr: 'Oignon' },{ tr: 'Sarımsak', ku: 'Sîr', en: 'Garlic', fr: 'Ail' },{ tr: 'Patates', ku: 'Kartol', en: 'Potato', fr: 'Pomme de terre' },{ tr: 'Fasulye', ku: 'Fasûlê', en: 'Bean', fr: 'Haricot' }],
  drinks:        [{ tr: 'Su', ku: 'Av', en: 'Water', fr: 'Eau' },{ tr: 'Çay', ku: 'Çay', en: 'Tea', fr: 'Thé' },{ tr: 'Kahve', ku: 'Qehwe', en: 'Coffee', fr: 'Café' },{ tr: 'Süt', ku: 'Şîr', en: 'Milk', fr: 'Lait' },{ tr: 'Meyve suyu', ku: 'Ava mewê', en: 'Juice', fr: 'Jus' },{ tr: 'Limonata', ku: 'Limonata', en: 'Lemonade', fr: 'Limonade' }],
  rooms:         [{ tr: 'Mutfak', ku: 'Mitbex', en: 'Kitchen', fr: 'Cuisine' },{ tr: 'Yatak odası', ku: 'Razangeh', en: 'Bedroom', fr: 'Chambre' },{ tr: 'Banyo', ku: 'Serşok', en: 'Bathroom', fr: 'Salle de bain' },{ tr: 'Salon', ku: 'Salon', en: 'Living room', fr: 'Salon' },{ tr: 'Bahçe', ku: 'Baxçe', en: 'Garden', fr: 'Jardin' },{ tr: 'Bodrum', ku: 'Jêrxanî', en: 'Basement', fr: 'Sous-sol' }],
  furniture:     [{ tr: 'Sandalye', ku: 'Kursî', en: 'Chair', fr: 'Chaise' },{ tr: 'Masa', ku: 'Mase', en: 'Table', fr: 'Table' },{ tr: 'Yatak', ku: 'Nivîn', en: 'Bed', fr: 'Lit' },{ tr: 'Dolap', ku: 'Dolap', en: 'Wardrobe', fr: 'Armoire' },{ tr: 'Kanepe', ku: 'Kanape', en: 'Sofa', fr: 'Canapé' },{ tr: 'Kitaplık', ku: 'Pirtûkxane', en: 'Bookshelf', fr: 'Bibliothèque' }],
  kitchenItems:  [{ tr: 'Tabak', ku: 'Qap', en: 'Plate', fr: 'Assiette' },{ tr: 'Bıçak', ku: 'Kêlî', en: 'Knife', fr: 'Couteau' },{ tr: 'Kaşık', ku: 'Kevçî', en: 'Spoon', fr: 'Cuillère' },{ tr: 'Çatal', ku: 'Çêtal', en: 'Fork', fr: 'Fourchette' },{ tr: 'Bardak', ku: 'Fincane', en: 'Cup', fr: 'Tasse' },{ tr: 'Tencere', ku: 'Tencere', en: 'Pot', fr: 'Casserole' }],
  body:          [{ tr: 'Baş', ku: 'Ser', en: 'Head', fr: 'Tête' },{ tr: 'Göz', ku: 'Çav', en: 'Eye', fr: 'Œil' },{ tr: 'Kulak', ku: 'Guh', en: 'Ear', fr: 'Oreille' },{ tr: 'Ağız', ku: 'Dev', en: 'Mouth', fr: 'Bouche' },{ tr: 'El', ku: 'Dest', en: 'Hand', fr: 'Main' },{ tr: 'Bacak', ku: 'Ling', en: 'Leg', fr: 'Jambe' }],
  illness:       [{ tr: 'Hastalık', ku: 'Nexweşî', en: 'Illness', fr: 'Maladie' },{ tr: 'Baş ağrısı', ku: 'Serêşî', en: 'Headache', fr: 'Mal de tête' },{ tr: 'Ateş', ku: 'Germahî', en: 'Fever', fr: 'Fièvre' },{ tr: 'Öksürük', ku: 'Kuxik', en: 'Cough', fr: 'Toux' },{ tr: 'Nezle', ku: 'Serxweşî', en: 'Cold', fr: 'Rhume' },{ tr: 'Yara', ku: 'Birîn', en: 'Wound', fr: 'Blessure' }],
  hospital:      [{ tr: 'Hastane', ku: 'Nexweşxane', en: 'Hospital', fr: 'Hôpital' },{ tr: 'Doktor', ku: 'Doktor', en: 'Doctor', fr: 'Médecin' },{ tr: 'Hemşire', ku: 'Hemşire', en: 'Nurse', fr: 'Infirmière' },{ tr: 'İlaç', ku: 'Derman', en: 'Medicine', fr: 'Médicament' },{ tr: 'Ameliyat', ku: 'Operasyon', en: 'Operation', fr: 'Opération' },{ tr: 'Ambulans', ku: 'Ambulans', en: 'Ambulance', fr: 'Ambulance' }],
  clothes:       [{ tr: 'Gömlek', ku: 'Kiras', en: 'Shirt', fr: 'Chemise' },{ tr: 'Pantolon', ku: 'Pantol', en: 'Trousers', fr: 'Pantalon' },{ tr: 'Şapka', ku: 'Kele', en: 'Hat', fr: 'Chapeau' },{ tr: 'Ayakkabı', ku: 'Pûtin', en: 'Shoe', fr: 'Chaussure' },{ tr: 'Ceket', ku: 'Jaket', en: 'Jacket', fr: 'Veste' },{ tr: 'Çorap', ku: 'Gorîn', en: 'Sock', fr: 'Chaussette' }],
  clothingColors:[{ tr: 'Kırmızı', ku: 'Sor', en: 'Red', fr: 'Rouge' },{ tr: 'Mavi', ku: 'Şîn', en: 'Blue', fr: 'Bleu' },{ tr: 'Yeşil', ku: 'Kesk', en: 'Green', fr: 'Vert' },{ tr: 'Sarı', ku: 'Zer', en: 'Yellow', fr: 'Jaune' },{ tr: 'Beyaz', ku: 'Spî', en: 'White', fr: 'Blanc' },{ tr: 'Siyah', ku: 'Reş', en: 'Black', fr: 'Noir' }],
  market:        [{ tr: 'Pazar', ku: 'Bazar', en: 'Market', fr: 'Marché' },{ tr: 'Fiyat', ku: 'Bihay', en: 'Price', fr: 'Prix' },{ tr: 'Ucuz', ku: 'Erzan', en: 'Cheap', fr: 'Bon marché' },{ tr: 'Pahalı', ku: 'Biha', en: 'Expensive', fr: 'Cher' },{ tr: 'Satın almak', ku: 'Kirîn', en: 'Buy', fr: 'Acheter' },{ tr: 'Satmak', ku: 'Firotin', en: 'Sell', fr: 'Vendre' }],
  jobs1:         [{ tr: 'Doktor', ku: 'Doktor', en: 'Doctor', fr: 'Médecin' },{ tr: 'Öğretmen', ku: 'Mamosta', en: 'Teacher', fr: 'Professeur' },{ tr: 'Şoför', ku: 'Şofêr', en: 'Driver', fr: 'Chauffeur' },{ tr: 'Çiftçi', ku: 'Cotkar', en: 'Farmer', fr: 'Agriculteur' },{ tr: 'Mühendis', ku: 'Endezyar', en: 'Engineer', fr: 'Ingénieur' },{ tr: 'Avukat', ku: 'Parêzer', en: 'Lawyer', fr: 'Avocat' }],
  jobs2:         [{ tr: 'Yazar', ku: 'Nivîskar', en: 'Writer', fr: 'Écrivain' },{ tr: 'Sanatçı', ku: 'Hunermend', en: 'Artist', fr: 'Artiste' },{ tr: 'Mimar', ku: 'Mîmar', en: 'Architect', fr: 'Architecte' },{ tr: 'Polis', ku: 'Polîs', en: 'Police', fr: 'Police' },{ tr: 'Asker', ku: 'Efser', en: 'Soldier', fr: 'Soldat' },{ tr: 'Aşçı', ku: 'Aşpêj', en: 'Chef', fr: 'Chef' }],
  workplace:     [{ tr: 'Ofis', ku: 'Nivîsxane', en: 'Office', fr: 'Bureau' },{ tr: 'Toplantı', ku: 'Civîn', en: 'Meeting', fr: 'Réunion' },{ tr: 'Proje', ku: 'Projeh', en: 'Project', fr: 'Projet' },{ tr: 'Sunum', ku: 'Pêşkêş', en: 'Presentation', fr: 'Présentation' },{ tr: 'Maaş', ku: 'Mûçe', en: 'Salary', fr: 'Salaire' },{ tr: 'İş', ku: 'Xebat', en: 'Work', fr: 'Travail' }],
  places:        [{ tr: 'Okul', ku: 'Mekteb', en: 'School', fr: 'École' },{ tr: 'Hastane', ku: 'Nexweşxane', en: 'Hospital', fr: 'Hôpital' },{ tr: 'Otel', ku: 'Otêl', en: 'Hotel', fr: 'Hôtel' },{ tr: 'Restoran', ku: 'Xwaringeh', en: 'Restaurant', fr: 'Restaurant' },{ tr: 'Market', ku: 'Supermarket', en: 'Supermarket', fr: 'Supermarché' },{ tr: 'Kütüphane', ku: 'Pirtûkxane', en: 'Library', fr: 'Bibliothèque' }],
  transport:     [{ tr: 'Araba', ku: 'Tirimbêl', en: 'Car', fr: 'Voiture' },{ tr: 'Otobüs', ku: 'Otobûs', en: 'Bus', fr: 'Bus' },{ tr: 'Tren', ku: 'Trên', en: 'Train', fr: 'Train' },{ tr: 'Uçak', ku: 'Balafir', en: 'Airplane', fr: 'Avion' },{ tr: 'Bisiklet', ku: 'Dûpişk', en: 'Bicycle', fr: 'Vélo' },{ tr: 'Gemi', ku: 'Gemî', en: 'Ship', fr: 'Bateau' }],
  directions:    [{ tr: 'Sol', ku: 'Çep', en: 'Left', fr: 'Gauche' },{ tr: 'Sağ', ku: 'Rast', en: 'Right', fr: 'Droite' },{ tr: 'Düz', ku: 'Rasterast', en: 'Straight', fr: 'Tout droit' },{ tr: 'Yakın', ku: 'Nêzîk', en: 'Near', fr: 'Près' },{ tr: 'Uzak', ku: 'Dûr', en: 'Far', fr: 'Loin' },{ tr: 'Dönmek', ku: 'Zivirîn', en: 'Turn', fr: 'Tourner' }],
  morningRoutine:[{ tr: 'Uyanmak', ku: 'Şiyarbûn', en: 'Wake up', fr: 'Se réveiller' },{ tr: 'Yıkanmak', ku: 'Xwe şûştin', en: 'Wash', fr: 'Se laver' },{ tr: 'Giyinmek', ku: 'Cil kirin', en: 'Get dressed', fr: "S'habiller" },{ tr: 'Kahvaltı', ku: 'Taştê', en: 'Breakfast', fr: 'Petit-déjeuner' },{ tr: 'Çıkmak', ku: 'Derketin', en: 'Go out', fr: 'Sortir' },{ tr: 'Gezmek', ku: 'Gerîn', en: 'Walk around', fr: 'Se promener' }],
  schoolWords:   [{ tr: 'Ders', ku: 'Ders', en: 'Lesson', fr: 'Leçon' },{ tr: 'Kitap', ku: 'Pirtûk', en: 'Book', fr: 'Livre' },{ tr: 'Defter', ku: 'Nîşe', en: 'Notebook', fr: 'Cahier' },{ tr: 'Öğrenci', ku: 'Xwendekar', en: 'Student', fr: 'Élève' },{ tr: 'Sınıf', ku: 'Sinif', en: 'Classroom', fr: 'Classe' },{ tr: 'Sınav', ku: 'Imtîhan', en: 'Exam', fr: 'Examen' }],
  eveningRoutine:[{ tr: 'Yemek pişirmek', ku: 'Xwarin çêkirin', en: 'Cook', fr: 'Cuisiner' },{ tr: 'TV izlemek', ku: 'Televizyon temaşekirin', en: 'Watch TV', fr: 'Regarder la télé' },{ tr: 'Okumak', ku: 'Xwendin', en: 'Read', fr: 'Lire' },{ tr: 'Oynamak', ku: 'Lîztin', en: 'Play', fr: 'Jouer' },{ tr: 'Uyumak', ku: 'Razanê', en: 'Sleep', fr: 'Dormir' },{ tr: 'Temizlemek', ku: 'Paqijkirin', en: 'Clean', fr: 'Nettoyer' }],
  emotions:      [{ tr: 'Mutlu', ku: 'Şad', en: 'Happy', fr: 'Heureux' },{ tr: 'Üzgün', ku: 'Xemgîn', en: 'Sad', fr: 'Triste' },{ tr: 'Kızgın', ku: 'Hêrsbûyî', en: 'Angry', fr: 'En colère' },{ tr: 'Korkmuş', ku: 'Tirsiyayî', en: 'Scared', fr: 'Effrayé' },{ tr: 'Şaşırmış', ku: 'Matmayî', en: 'Surprised', fr: 'Surpris' },{ tr: 'Sıkılmış', ku: 'Bêzar', en: 'Bored', fr: 'Ennuyé' }],
  personality:   [{ tr: 'Nazik', ku: 'Dilovanî', en: 'Kind', fr: 'Gentil' },{ tr: 'Akıllı', ku: 'Jîr', en: 'Smart', fr: 'Intelligent' },{ tr: 'Cesur', ku: 'Dilêş', en: 'Brave', fr: 'Courageux' },{ tr: 'Dürüst', ku: 'Rast', en: 'Honest', fr: 'Honnête' },{ tr: 'Çalışkan', ku: 'Birêkûpêk', en: 'Hardworking', fr: 'Travailleur' },{ tr: 'Sabırlı', ku: 'Bîrdar', en: 'Patient', fr: 'Patient' }],
  reactions:     [{ tr: 'Harika', ku: 'Ecêb', en: 'Wonderful', fr: 'Merveilleux' },{ tr: 'Aferin', ku: 'Aferin', en: 'Well done', fr: 'Bravo' },{ tr: 'Tamam', ku: 'Baş e', en: 'OK', fr: "D'accord" },{ tr: 'Olmaz', ku: 'Nabe', en: 'No way', fr: 'Pas question' },{ tr: 'Kesinlikle', ku: 'Bê guman', en: 'Definitely', fr: 'Certainement' },{ tr: 'Belki', ku: 'Dibe', en: 'Maybe', fr: 'Peut-être' }],
  movementVerbs: [{ tr: 'Gitmek', ku: 'Çûyîn', en: 'Go', fr: 'Aller' },{ tr: 'Gelmek', ku: 'Hatin', en: 'Come', fr: 'Venir' },{ tr: 'Koşmak', ku: 'Bezan', en: 'Run', fr: 'Courir' },{ tr: 'Yürümek', ku: 'Meşîn', en: 'Walk', fr: 'Marcher' },{ tr: 'Uçmak', ku: 'Firîn', en: 'Fly', fr: 'Voler' },{ tr: 'Atlamak', ku: 'Bazdan', en: 'Jump', fr: 'Sauter' }],
  stateVerbs:    [{ tr: 'Oturmak', ku: 'Rûniştin', en: 'Sit', fr: "S'asseoir" },{ tr: 'Durmak', ku: 'Rawestin', en: 'Stand', fr: 'Se lever' },{ tr: 'Uzanmak', ku: 'Razanê', en: 'Lie down', fr: "S'allonger" },{ tr: 'Beklemek', ku: 'Hêvîkirin', en: 'Wait', fr: 'Attendre' },{ tr: 'Düşünmek', ku: 'Ramandin', en: 'Think', fr: 'Penser' },{ tr: 'Bakmak', ku: 'Mêze kirin', en: 'Look', fr: 'Regarder' }],
  dailyVerbs:    [{ tr: 'Yemek yemek', ku: 'Xwarin', en: 'Eat', fr: 'Manger' },{ tr: 'İçmek', ku: 'Vexwarin', en: 'Drink', fr: 'Boire' },{ tr: 'Uyumak', ku: 'Razanê', en: 'Sleep', fr: 'Dormir' },{ tr: 'Konuşmak', ku: 'Axaftin', en: 'Talk', fr: 'Parler' },{ tr: 'Yazmak', ku: 'Nivîsîn', en: 'Write', fr: 'Écrire' },{ tr: 'Okumak', ku: 'Xwendin', en: 'Read', fr: 'Lire' }],
  pastTense:     [{ tr: 'Gitti', ku: 'Çû', en: 'Went', fr: 'Est allé' },{ tr: 'Geldi', ku: 'Hat', en: 'Came', fr: 'Est venu' },{ tr: 'Yedi', ku: 'Xwar', en: 'Ate', fr: 'A mangé' },{ tr: 'İçti', ku: 'Vexwar', en: 'Drank', fr: 'A bu' },{ tr: 'Yaptı', ku: 'Kir', en: 'Did', fr: 'A fait' },{ tr: 'Söyledi', ku: 'Got', en: 'Said', fr: 'A dit' }],
  futureTense:   [{ tr: 'Gidecek', ku: 'Dê biçe', en: 'Will go', fr: 'Ira' },{ tr: 'Gelecek', ku: 'Dê bê', en: 'Will come', fr: 'Viendra' },{ tr: 'Yiyecek', ku: 'Dê bixwe', en: 'Will eat', fr: 'Mangera' },{ tr: 'Yapacak', ku: 'Dê bike', en: 'Will do', fr: 'Fera' },{ tr: 'Yazacak', ku: 'Dê binivîse', en: 'Will write', fr: 'Écrira' },{ tr: 'Okuyacak', ku: 'Dê bixwîne', en: 'Will read', fr: 'Lira' }],
  imperatives:   [{ tr: 'Git!', ku: 'Biçe!', en: 'Go!', fr: 'Va!' },{ tr: 'Gel!', ku: 'Were!', en: 'Come!', fr: 'Viens!' },{ tr: 'Ye!', ku: 'Bixwe!', en: 'Eat!', fr: 'Mange!' },{ tr: 'Otur!', ku: 'Rûne!', en: 'Sit!', fr: 'Assieds-toi!' },{ tr: 'Dur!', ku: 'Raweste!', en: 'Stop!', fr: 'Arrête!' },{ tr: 'Konuş!', ku: 'Biaxive!', en: 'Talk!', fr: 'Parle!' }],
  schoolSupplies:[{ tr: 'Kitap', ku: 'Pirtûk', en: 'Book', fr: 'Livre' },{ tr: 'Kalem', ku: 'Qelem', en: 'Pen', fr: 'Stylo' },{ tr: 'Defter', ku: 'Nîşe', en: 'Notebook', fr: 'Cahier' },{ tr: 'Cetvel', ku: 'Silav', en: 'Ruler', fr: 'Règle' },{ tr: 'Çanta', ku: 'Çente', en: 'Bag', fr: 'Sac' },{ tr: 'Silgi', ku: 'Eraser', en: 'Eraser', fr: 'Gomme' }],
  subjects:      [{ tr: 'Matematik', ku: 'Matematîk', en: 'Math', fr: 'Mathématiques' },{ tr: 'Fen', ku: 'Zanist', en: 'Science', fr: 'Sciences' },{ tr: 'Tarih', ku: 'Dîrok', en: 'History', fr: 'Histoire' },{ tr: 'Coğrafya', ku: 'Erdnasî', en: 'Geography', fr: 'Géographie' },{ tr: 'Müzik', ku: 'Muzîk', en: 'Music', fr: 'Musique' },{ tr: 'Sanat', ku: 'Huner', en: 'Art', fr: 'Art' }],
  classroomWords:[{ tr: 'Tahta', ku: 'Lûle', en: 'Blackboard', fr: 'Tableau' },{ tr: 'El kaldırmak', ku: 'Dest bilindkirin', en: 'Raise hand', fr: 'Lever la main' },{ tr: 'Soru sormak', ku: 'Pirsîn', en: 'Ask', fr: 'Demander' },{ tr: 'Cevaplamak', ku: 'Bersivdan', en: 'Answer', fr: 'Répondre' },{ tr: 'Anlamak', ku: 'Têgihiştin', en: 'Understand', fr: 'Comprendre' },{ tr: 'Tekrar etmek', ku: 'Dubare kirin', en: 'Repeat', fr: 'Répéter' }],
  vacation:      [{ tr: 'Plaj', ku: 'Deşt', en: 'Beach', fr: 'Plage' },{ tr: 'Dağ', ku: 'Çiya', en: 'Mountain', fr: 'Montagne' },{ tr: 'Şehir', ku: 'Bajar', en: 'City', fr: 'Ville' },{ tr: 'Ada', ku: 'Girav', en: 'Island', fr: 'Île' },{ tr: 'Şelale', ku: 'Şelale', en: 'Waterfall', fr: 'Cascade' },{ tr: 'Tatil', ku: 'Betlanê', en: 'Holiday', fr: 'Vacances' }],
  hotel:         [{ tr: 'Oda', ku: 'Jûr', en: 'Room', fr: 'Chambre' },{ tr: 'Resepsiyon', ku: 'Sermaşok', en: 'Reception', fr: 'Réception' },{ tr: 'Anahtar', ku: 'Kilît', en: 'Key', fr: 'Clé' },{ tr: 'Banyo', ku: 'Serşok', en: 'Bathroom', fr: 'Salle de bain' },{ tr: 'Rezervasyon', ku: 'Rezervasyon', en: 'Reservation', fr: 'Réservation' },{ tr: 'Hesap', ku: 'Hesab', en: 'Bill', fr: 'Facture' }],
  travelPlan:    [{ tr: 'Pasaport', ku: 'Pasaport', en: 'Passport', fr: 'Passeport' },{ tr: 'Vize', ku: 'Vîze', en: 'Visa', fr: 'Visa' },{ tr: 'Havalimanı', ku: 'Balafirgeha', en: 'Airport', fr: 'Aéroport' },{ tr: 'Bavul', ku: 'Çente', en: 'Suitcase', fr: 'Valise' },{ tr: 'Bilet', ku: 'Bilêt', en: 'Ticket', fr: 'Billet' },{ tr: 'Tur', ku: 'Tur', en: 'Tour', fr: 'Tour' }],
  sports:        [{ tr: 'Futbol', ku: 'Futbol', en: 'Football', fr: 'Football' },{ tr: 'Tenis', ku: 'Tenîs', en: 'Tennis', fr: 'Tennis' },{ tr: 'Yüzme', ku: 'Senet', en: 'Swimming', fr: 'Natation' },{ tr: 'Koşu', ku: 'Bezan', en: 'Running', fr: 'Course' },{ tr: 'Basketbol', ku: 'Basketbol', en: 'Basketball', fr: 'Basketball' },{ tr: 'Voleybol', ku: 'Voleybol', en: 'Volleyball', fr: 'Volleyball' }],
  musicArt:      [{ tr: 'Müzik', ku: 'Muzîk', en: 'Music', fr: 'Musique' },{ tr: 'Şarkı', ku: 'Kilam', en: 'Song', fr: 'Chanson' },{ tr: 'Enstrüman', ku: 'Wesayit', en: 'Instrument', fr: 'Instrument' },{ tr: 'Resim', ku: 'Xêzkirin', en: 'Painting', fr: 'Peinture' },{ tr: 'Dans', ku: 'Dans', en: 'Dance', fr: 'Danse' },{ tr: 'Tiyatro', ku: 'Şano', en: 'Theater', fr: 'Théâtre' }],
  leisure:       [{ tr: 'Okuma', ku: 'Xwendin', en: 'Reading', fr: 'Lecture' },{ tr: 'Oyun', ku: 'Lîstik', en: 'Game', fr: 'Jeu' },{ tr: 'Film', ku: 'Film', en: 'Movie', fr: 'Film' },{ tr: 'Seyahat', ku: 'Geşt', en: 'Travel', fr: 'Voyage' },{ tr: 'Yemek yapmak', ku: 'Pijandina xwarinê', en: 'Cooking', fr: 'Cuisine' },{ tr: 'Bahçecilik', ku: 'Baxçekarî', en: 'Gardening', fr: 'Jardinage' }],
  seasons:       [{ tr: 'İlkbahar', ku: 'Biharê', en: 'Spring', fr: 'Printemps' },{ tr: 'Yaz', ku: 'Havîn', en: 'Summer', fr: 'Été' },{ tr: 'Sonbahar', ku: 'Payîz', en: 'Autumn', fr: 'Automne' },{ tr: 'Kış', ku: 'Zivistan', en: 'Winter', fr: 'Hiver' },{ tr: 'Sıcak', ku: 'Germ', en: 'Hot', fr: 'Chaud' },{ tr: 'Soğuk', ku: 'Sar', en: 'Cold', fr: 'Froid' }],
  weather:       [{ tr: 'Yağmur', ku: 'Baran', en: 'Rain', fr: 'Pluie' },{ tr: 'Kar', ku: 'Berf', en: 'Snow', fr: 'Neige' },{ tr: 'Güneş', ku: 'Tavê', en: 'Sun', fr: 'Soleil' },{ tr: 'Rüzgar', ku: 'Ba', en: 'Wind', fr: 'Vent' },{ tr: 'Bulut', ku: 'Ewr', en: 'Cloud', fr: 'Nuage' },{ tr: 'Fırtına', ku: 'Bager', en: 'Storm', fr: 'Tempête' }],
  geography:     [{ tr: 'Kıta', ku: 'Parzemîn', en: 'Continent', fr: 'Continent' },{ tr: 'Ülke', ku: 'Welat', en: 'Country', fr: 'Pays' },{ tr: 'Nehir', ku: 'Çem', en: 'River', fr: 'Rivière' },{ tr: 'Göl', ku: 'Gol', en: 'Lake', fr: 'Lac' },{ tr: 'Okyanus', ku: 'Okyanûs', en: 'Ocean', fr: 'Océan' },{ tr: 'Çöl', ku: 'Çol', en: 'Desert', fr: 'Désert' }],
  friendship:    [{ tr: 'Arkadaş', ku: 'Heval', en: 'Friend', fr: 'Ami' },{ tr: 'Tanışmak', ku: 'Nasîn', en: 'Meet', fr: 'Rencontrer' },{ tr: 'Arkadaşlık', ku: 'Hevaltî', en: 'Friendship', fr: 'Amitié' },{ tr: 'Sevmek', ku: 'Hezdikirin', en: 'Like', fr: 'Aimer' },{ tr: 'Yardım etmek', ku: 'Alîkarî kirin', en: 'Help', fr: 'Aider' },{ tr: 'Paylaşmak', ku: 'Parvedan', en: 'Share', fr: 'Partager' }],
  invitations:   [{ tr: 'Davet', ku: 'Vexwendin', en: 'Invitation', fr: 'Invitation' },{ tr: 'Parti', ku: 'Şahî', en: 'Party', fr: 'Fête' },{ tr: 'Hediye', ku: 'Diyarî', en: 'Gift', fr: 'Cadeau' },{ tr: 'Düğün', ku: 'Dawet', en: 'Wedding', fr: 'Mariage' },{ tr: 'Kabul etmek', ku: 'Qebûlkirin', en: 'Accept', fr: 'Accepter' },{ tr: 'Reddetmek', ku: 'Red kirin', en: 'Reject', fr: 'Refuser' }],
  celebrations:  [{ tr: 'Doğum günü', ku: 'Bûroz', en: 'Birthday', fr: 'Anniversaire' },{ tr: 'Yeni yıl', ku: 'Sersalê', en: 'New Year', fr: 'Nouvel An' },{ tr: 'Bayram', ku: 'Cejna', en: 'Holiday', fr: 'Fête nationale' },{ tr: 'Tebrikler', ku: 'Pîroz be', en: 'Congratulations', fr: 'Félicitations' },{ tr: 'Mutlu ol', ku: 'Bixweş be', en: 'Be happy', fr: 'Sois heureux' },{ tr: 'Eğlen', ku: 'Xweş were', en: 'Have fun', fr: 'Amuse-toi' }],
  conjunctions:  [{ tr: 'Ve', ku: 'Û', en: 'And', fr: 'Et' },{ tr: 'Ama', ku: 'Lê', en: 'But', fr: 'Mais' },{ tr: 'Veya', ku: 'An', en: 'Or', fr: 'Ou' },{ tr: 'Çünkü', ku: 'Ji ber ku', en: 'Because', fr: 'Parce que' },{ tr: 'Eğer', ku: 'Eger', en: 'If', fr: 'Si' },{ tr: 'Fakat', ku: 'Belê', en: 'However', fr: 'Cependant' }],
  questionWords: [{ tr: 'Ne', ku: 'Çi', en: 'What', fr: 'Quoi' },{ tr: 'Kim', ku: 'Kî', en: 'Who', fr: 'Qui' },{ tr: 'Ne zaman', ku: 'Kengî', en: 'When', fr: 'Quand' },{ tr: 'Nerede', ku: 'Li ku', en: 'Where', fr: 'Où' },{ tr: 'Nasıl', ku: 'Çawa', en: 'How', fr: 'Comment' },{ tr: 'Neden', ku: 'Çima', en: 'Why', fr: 'Pourquoi' }],
  prepositions:  [{ tr: 'İçinde', ku: 'Di...de', en: 'In', fr: 'Dans' },{ tr: 'Üstünde', ku: 'Li ser', en: 'On', fr: 'Sur' },{ tr: 'Altında', ku: 'Li jêr', en: 'Under', fr: 'Sous' },{ tr: 'Yanında', ku: 'Li rex', en: 'Beside', fr: 'À côté' },{ tr: 'Önünde', ku: 'Li pêş', en: 'In front', fr: 'Devant' },{ tr: 'Arkasında', ku: 'Li pişt', en: 'Behind', fr: 'Derrière' }],
  opinions:      [{ tr: 'Bence', ku: 'Bi min ra', en: 'I think', fr: 'Je pense' },{ tr: 'Bana göre', ku: 'Li gor min', en: 'In my opinion', fr: 'À mon avis' },{ tr: 'İyi', ku: 'Baş', en: 'Good', fr: 'Bien' },{ tr: 'Kötü', ku: 'Xirab', en: 'Bad', fr: 'Mauvais' },{ tr: 'Doğru', ku: 'Rast', en: 'Correct', fr: 'Correct' },{ tr: 'Yanlış', ku: 'Şaş', en: 'Wrong', fr: 'Incorrect' }],
  discussion:    [{ tr: 'Katılmak', ku: 'Razî bûn', en: 'Agree', fr: "Être d'accord" },{ tr: 'Katılmamak', ku: 'Razî nebûn', en: 'Disagree', fr: "Pas d'accord" },{ tr: 'Evet ama', ku: 'Erê lê', en: 'Yes but', fr: 'Oui mais' },{ tr: 'Kesinlikle', ku: 'Bê guman', en: 'Definitely', fr: 'Certainement' },{ tr: 'Sanmıyorum', ku: 'Ez nafikirim', en: "I don't think so", fr: 'Je ne crois pas' },{ tr: 'Haklısın', ku: 'Tu maf î', en: 'You are right', fr: 'Tu as raison' }],
  media:         [{ tr: 'Haber', ku: 'Nûçe', en: 'News', fr: 'Nouvelles' },{ tr: 'Gazete', ku: 'Rojname', en: 'Newspaper', fr: 'Journal' },{ tr: 'Radyo', ku: 'Radyo', en: 'Radio', fr: 'Radio' },{ tr: 'Sosyal medya', ku: 'Medyaya civakî', en: 'Social media', fr: 'Réseaux sociaux' },{ tr: 'Yayın', ku: 'Weşan', en: 'Broadcast', fr: 'Diffusion' },{ tr: 'Duyuru', ku: 'Ragihandin', en: 'Announcement', fr: 'Annonce' }],
  proverbs:      [{ tr: 'Atasözü', ku: 'Gotinên pêşiyan', en: 'Proverb', fr: 'Proverbe' },{ tr: 'Bilgelik', ku: 'Zanistê', en: 'Wisdom', fr: 'Sagesse' },{ tr: 'Tavsiye', ku: 'Şîret', en: 'Advice', fr: 'Conseil' },{ tr: 'Söz', ku: 'Sozname', en: 'Promise', fr: 'Promesse' },{ tr: 'Hikaye', ku: 'Çîrok', en: 'Story', fr: 'Histoire' },{ tr: 'Anlam', ku: 'Wate', en: 'Meaning', fr: 'Sens' }],
  tales:         [{ tr: 'Masal', ku: 'Çîroka pêşiyan', en: 'Tale', fr: 'Conte' },{ tr: 'Kahraman', ku: 'Qehremanê', en: 'Hero', fr: 'Héros' },{ tr: 'Prenses', ku: 'Prenses', en: 'Princess', fr: 'Princesse' },{ tr: 'Ejderha', ku: 'Ejderha', en: 'Dragon', fr: 'Dragon' },{ tr: 'Sihir', ku: 'Sehrê', en: 'Magic', fr: 'Magie' },{ tr: 'Hazine', ku: 'Hazîne', en: 'Treasure', fr: 'Trésor' }],
  traditions:    [{ tr: 'Gelenek', ku: 'Kevneşopî', en: 'Tradition', fr: 'Tradition' },{ tr: 'Tören', ku: 'Ayîn', en: 'Ceremony', fr: 'Cérémonie' },{ tr: 'Kültür', ku: 'Çand', en: 'Culture', fr: 'Culture' },{ tr: 'Miras', ku: 'Mîras', en: 'Heritage', fr: 'Patrimoine' },{ tr: 'Festival', ku: 'Festival', en: 'Festival', fr: 'Festival' },{ tr: 'Müzik', ku: 'Muzîk', en: 'Music', fr: 'Musique' }],
};

const LESSON_PLAN = [
  { num: 7, vocabKey: 'numbers' },{ num: 8, vocabKey: 'days' },{ num: 9, vocabKey: 'time' },
  { num: 10, vocabKey: 'petAnimals' },{ num: 11, vocabKey: 'wildAnimals' },{ num: 12, vocabKey: 'nature' },
  { num: 13, vocabKey: 'fruits' },{ num: 14, vocabKey: 'vegetables' },{ num: 15, vocabKey: 'drinks' },
  { num: 16, vocabKey: 'rooms' },{ num: 17, vocabKey: 'furniture' },{ num: 18, vocabKey: 'kitchenItems' },
  { num: 19, vocabKey: 'body' },{ num: 20, vocabKey: 'illness' },{ num: 21, vocabKey: 'hospital' },
  { num: 22, vocabKey: 'clothes' },{ num: 23, vocabKey: 'clothingColors' },{ num: 24, vocabKey: 'market' },
  { num: 25, vocabKey: 'jobs1' },{ num: 26, vocabKey: 'jobs2' },{ num: 27, vocabKey: 'workplace' },
  { num: 28, vocabKey: 'places' },{ num: 29, vocabKey: 'transport' },{ num: 30, vocabKey: 'directions' },
  { num: 31, vocabKey: 'morningRoutine' },{ num: 32, vocabKey: 'schoolWords' },{ num: 33, vocabKey: 'eveningRoutine' },
  { num: 34, vocabKey: 'emotions' },{ num: 35, vocabKey: 'personality' },{ num: 36, vocabKey: 'reactions' },
  { num: 37, vocabKey: 'movementVerbs' },{ num: 38, vocabKey: 'stateVerbs' },{ num: 39, vocabKey: 'dailyVerbs' },
  { num: 40, vocabKey: 'pastTense' },{ num: 41, vocabKey: 'futureTense' },{ num: 42, vocabKey: 'imperatives' },
  { num: 43, vocabKey: 'schoolSupplies' },{ num: 44, vocabKey: 'subjects' },{ num: 45, vocabKey: 'classroomWords' },
  { num: 46, vocabKey: 'vacation' },{ num: 47, vocabKey: 'hotel' },{ num: 48, vocabKey: 'travelPlan' },
  { num: 49, vocabKey: 'sports' },{ num: 50, vocabKey: 'musicArt' },{ num: 51, vocabKey: 'leisure' },
  { num: 52, vocabKey: 'seasons' },{ num: 53, vocabKey: 'weather' },{ num: 54, vocabKey: 'geography' },
  { num: 55, vocabKey: 'friendship' },{ num: 56, vocabKey: 'invitations' },{ num: 57, vocabKey: 'celebrations' },
  { num: 58, vocabKey: 'conjunctions' },{ num: 59, vocabKey: 'questionWords' },{ num: 60, vocabKey: 'prepositions' },
  { num: 61, vocabKey: 'opinions' },{ num: 62, vocabKey: 'discussion' },{ num: 63, vocabKey: 'media' },
  { num: 64, vocabKey: 'proverbs' },{ num: 65, vocabKey: 'tales' },{ num: 66, vocabKey: 'traditions' },
];

const LANGS = [
  { prefix: 'k', field: 'ku', audioLang: 'tr',    file: 'kurdishContent.ts',  and: 'û',  iSee: ['Ez', 'dibînim'], thisIs: ['Ev', 'e'] },
  { prefix: 'e', field: 'en', audioLang: 'en-US', file: 'englishContent.ts',  and: 'and', iSee: ['I', 'see'],      thisIs: ['This', 'is'] },
  { prefix: 'f', field: 'fr', audioLang: 'fr-FR', file: 'frenchContent.ts',   and: 'et',  iSee: ['Je', 'vois'],    thisIs: ["C'est"] },
  { prefix: 't', field: 'tr', audioLang: 'tr-TR', file: 'turkishContent.ts',  and: 've',  iSee: ['Ben', 'görüyorum'], thisIs: ['Bu', 'bir'] },
];

// Shuffle helper
function shuffle(arr) { return arr.map(v => [Math.random(), v]).sort((a,b) => a[0]-b[0]).map(v=>v[1]); }

// Build the 3 constructSentence questions for a lesson
function buildSentenceQuestions(lang, lessonPlan, startQNum) {
  const { prefix, field, audioLang, and, iSee, thisIs } = lang;
  const { num, vocabKey } = lessonPlan;
  const id = `${prefix}${num}`;
  const vocab = VOCAB[vocabKey];
  const v = (i) => vocab[i % vocab.length][field]; // safe access
  const tr = (i) => vocab[i % vocab.length].tr;
  let qn = startQNum;

  const questions = [];

  // ── Q1: "X ve Y" → "[x-foreign] [and] [y-foreign]" ─────────────────────
  const q1Answer = [v(0), and, v(1)];
  const q1Distractors = shuffle([v(2), v(3), v(4)]).slice(0, 2);
  const q1Options = shuffle([...q1Answer.filter(w => !iSee.concat(thisIs).includes(w)), ...q1Distractors]);
  questions.push({
    id: `${id}q${qn++}`,
    type: 'constructSentence',
    prompt: `Şu cümleyi çevir: "${tr(0)} ve ${tr(1)}"`,
    options: q1Options,
    correctIndex: 0,
    correctAnswer: q1Answer,
    audioText: q1Answer.join(' '),
    audioLang,
  });

  // ── Q2: "Ben X görüyorum" → "I see X" / "Ez X dibînim" ──────────────────
  const q2Word = v(2);
  const q2Answer = iSee.length === 2
    ? [iSee[0], q2Word, iSee[1]]   // Ez [word] dibînim  /  I see [word]  /  Je vois [word]
    : [...iSee, q2Word];            // Ben [word] görüyorum  etc.
  // For French "Je vois X", iSee = ['Je', 'vois']  → ['Je', 'vois', word]
  const q2Distractors = shuffle([v(0), v(1), v(4)]).filter(w => w !== q2Word).slice(0, 2);
  const q2Options = shuffle([...iSee, q2Word, ...q2Distractors]);
  questions.push({
    id: `${id}q${qn++}`,
    type: 'constructSentence',
    prompt: `Şu cümleyi çevir: "Ben ${tr(2)} görüyorum"`,
    options: q2Options,
    correctIndex: 0,
    correctAnswer: q2Answer,
    audioText: q2Answer.join(' '),
    audioLang,
  });

  // ── Q3: "Bu bir X" → "This is X" / "Ev X e" / "C'est X" ────────────────
  const q3Word = v(3);
  const q3Answer = thisIs.length === 1
    ? [thisIs[0], q3Word]           // C'est [word]
    : thisIs.length === 2 && thisIs[1] === 'e'
      ? [thisIs[0], q3Word, thisIs[1]]  // Ev [word] e
      : [...thisIs, q3Word];           // This is [word] / Bu bir [word]
  const q3Distractors = shuffle([v(0), v(1), v(5)]).filter(w => w !== q3Word).slice(0, 2);
  const q3Options = shuffle([...thisIs, q3Word, ...q3Distractors]);
  questions.push({
    id: `${id}q${qn++}`,
    type: 'constructSentence',
    prompt: `Şu cümleyi çevir: "Bu bir ${tr(3)}"`,
    options: q3Options,
    correctIndex: 0,
    correctAnswer: q3Answer,
    audioText: q3Answer.join(' '),
    audioLang,
  });

  return questions;
}

// ── Main: inject into each content file ──────────────────────────────────────
const dataDir = path.join(__dirname, '..', 'src', 'data');

for (const lang of LANGS) {
  const filePath = path.join(dataDir, lang.file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = 0;

  for (const plan of LESSON_PLAN) {
    const id = `${lang.prefix}${plan.num}`;

    // Find how many questions this lesson already has (max qNum)
    const qNumRegex = new RegExp(`"id":\\s*"${id}q(\\d+)"`, 'g');
    let maxQ = 0;
    let m;
    while ((m = qNumRegex.exec(content)) !== null) {
      const n = parseInt(m[1]);
      if (n > maxQ) maxQ = n;
    }
    const startQNum = maxQ + 1;

    // Build the 3 new questions
    const newQs = buildSentenceQuestions(lang, plan, startQNum);

    // Find the closing `}` of this lesson (before the next lesson `{` or before `];`)
    // Strategy: find `"id": "${id}"` then find the lesson's closing bracket
    // We inject before the last `]` of the lesson's questions array
    //
    // The lesson looks like:
    //   {
    //     "id": "k7",
    //     ...
    //     "questions": [ ..., { last question } ]
    //   }
    //
    // We need to add questions before the closing `]\n  }` of the lesson object.
    // Pattern: the last question ends with `}` and then we see `\n    ]\n  }`
    const lessonCloseRegex = new RegExp(
      `("id":\\s*"${id}"[\\s\\S]*?)(\\n\\s*\\]\\n\\s*\\})`,
      ''
    );
    const qsJson = newQs.map(q => JSON.stringify(q, null, 10)
      .replace(/^/gm, '      ')  // indent
      .trim()
    );
    const injection = qsJson.map(q => `,\n      ${q}`).join('');

    const newContent = content.replace(lessonCloseRegex, `$1${injection}$2`);
    if (newContent !== content) {
      content = newContent;
      changed++;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${lang.file}: Added sentence questions to ${changed} lessons`);
}

console.log('\n🎉 constructSentence questions added to all lessons!');
