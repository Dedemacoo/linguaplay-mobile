/**
 * generateSpDeIt.js
 * İspanyolca (s7-s66), Almanca (g7-g66), İtalyanca (i7-i66) derslerini üretir.
 * node scratch/generateSpDeIt.js
 */
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

// ── VOCAB: tr/es/de/it ─────────────────────────────────────────────────────
const VOCAB = {
  numbers:       [{ tr:'Bir',ku:'Yek',en:'One',fr:'Un',es:'Uno',de:'Eins',it:'Uno' },{ tr:'İki',ku:'Du',en:'Two',fr:'Deux',es:'Dos',de:'Zwei',it:'Due' },{ tr:'Üç',ku:'Sê',en:'Three',fr:'Trois',es:'Tres',de:'Drei',it:'Tre' },{ tr:'Dört',ku:'Çar',en:'Four',fr:'Quatre',es:'Cuatro',de:'Vier',it:'Quattro' },{ tr:'Beş',ku:'Pênc',en:'Five',fr:'Cinq',es:'Cinco',de:'Fünf',it:'Cinque' },{ tr:'On',ku:'Deh',en:'Ten',fr:'Dix',es:'Diez',de:'Zehn',it:'Dieci' }],
  days:          [{ tr:'Pazartesi',ku:'Duşem',en:'Monday',fr:'Lundi',es:'Lunes',de:'Montag',it:'Lunedì' },{ tr:'Salı',ku:'Sêşem',en:'Tuesday',fr:'Mardi',es:'Martes',de:'Dienstag',it:'Martedì' },{ tr:'Çarşamba',ku:'Çarşem',en:'Wednesday',fr:'Mercredi',es:'Miércoles',de:'Mittwoch',it:'Mercoledì' },{ tr:'Perşembe',ku:'Pêncşem',en:'Thursday',fr:'Jeudi',es:'Jueves',de:'Donnerstag',it:'Giovedì' },{ tr:'Cuma',ku:'În',en:'Friday',fr:'Vendredi',es:'Viernes',de:'Freitag',it:'Venerdì' },{ tr:'Pazar',ku:'Yekşem',en:'Sunday',fr:'Dimanche',es:'Domingo',de:'Sonntag',it:'Domenica' }],
  time:          [{ tr:'Sabah',ku:'Sibeh',en:'Morning',fr:'Matin',es:'Mañana',de:'Morgen',it:'Mattina' },{ tr:'Öğle',ku:'Nîvro',en:'Noon',fr:'Midi',es:'Mediodía',de:'Mittag',it:'Mezzogiorno' },{ tr:'Akşam',ku:'Êvar',en:'Evening',fr:'Soir',es:'Tarde',de:'Abend',it:'Sera' },{ tr:'Gece',ku:'Şev',en:'Night',fr:'Nuit',es:'Noche',de:'Nacht',it:'Notte' },{ tr:'Saat',ku:'Seet',en:'Hour',fr:'Heure',es:'Hora',de:'Stunde',it:'Ora' },{ tr:'Dakika',ku:'Xulekan',en:'Minute',fr:'Minute',es:'Minuto',de:'Minute',it:'Minuto' }],
  petAnimals:    [{ tr:'Kedi',ku:'Pisîk',en:'Cat',fr:'Chat',es:'Gato',de:'Katze',it:'Gatto' },{ tr:'Köpek',ku:'Kûçik',en:'Dog',fr:'Chien',es:'Perro',de:'Hund',it:'Cane' },{ tr:'Kuş',ku:'Çivîk',en:'Bird',fr:'Oiseau',es:'Pájaro',de:'Vogel',it:'Uccello' },{ tr:'Balık',ku:'Masî',en:'Fish',fr:'Poisson',es:'Pez',de:'Fisch',it:'Pesce' },{ tr:'Tavşan',ku:'Kerguh',en:'Rabbit',fr:'Lapin',es:'Conejo',de:'Hase',it:'Coniglio' },{ tr:'At',ku:'Hesp',en:'Horse',fr:'Cheval',es:'Caballo',de:'Pferd',it:'Cavallo' }],
  wildAnimals:   [{ tr:'Aslan',ku:'Şêr',en:'Lion',fr:'Lion',es:'León',de:'Löwe',it:'Leone' },{ tr:'Kaplan',ku:'Peleng',en:'Tiger',fr:'Tigre',es:'Tigre',de:'Tiger',it:'Tigre' },{ tr:'Fil',ku:'Fîl',en:'Elephant',fr:'Éléphant',es:'Elefante',de:'Elefant',it:'Elefante' },{ tr:'Ayı',ku:'Hirç',en:'Bear',fr:'Ours',es:'Oso',de:'Bär',it:'Orso' },{ tr:'Kurt',ku:'Gur',en:'Wolf',fr:'Loup',es:'Lobo',de:'Wolf',it:'Lupo' },{ tr:'Tilki',ku:'Rovî',en:'Fox',fr:'Renard',es:'Zorro',de:'Fuchs',it:'Volpe' }],
  nature:        [{ tr:'Ağaç',ku:'Dar',en:'Tree',fr:'Arbre',es:'Árbol',de:'Baum',it:'Albero' },{ tr:'Çiçek',ku:'Kulîlk',en:'Flower',fr:'Fleur',es:'Flor',de:'Blume',it:'Fiore' },{ tr:'Dağ',ku:'Çiya',en:'Mountain',fr:'Montagne',es:'Montaña',de:'Berg',it:'Montagna' },{ tr:'Deniz',ku:'Deryay',en:'Sea',fr:'Mer',es:'Mar',de:'Meer',it:'Mare' },{ tr:'Nehir',ku:'Çem',en:'River',fr:'Rivière',es:'Río',de:'Fluss',it:'Fiume' },{ tr:'Orman',ku:'Daristanê',en:'Forest',fr:'Forêt',es:'Bosque',de:'Wald',it:'Bosco' }],
  fruits:        [{ tr:'Elma',ku:'Sêv',en:'Apple',fr:'Pomme',es:'Manzana',de:'Apfel',it:'Mela' },{ tr:'Muz',ku:'Mûz',en:'Banana',fr:'Banane',es:'Plátano',de:'Banane',it:'Banana' },{ tr:'Portakal',ku:'Porteqal',en:'Orange',fr:'Orange',es:'Naranja',de:'Orange',it:'Arancia' },{ tr:'Üzüm',ku:'Tirî',en:'Grape',fr:'Raisin',es:'Uva',de:'Traube',it:'Uva' },{ tr:'Çilek',ku:'Tûtî',en:'Strawberry',fr:'Fraise',es:'Fresa',de:'Erdbeere',it:'Fragola' },{ tr:'Armut',ku:'Firxûn',en:'Pear',fr:'Poire',es:'Pera',de:'Birne',it:'Pera' }],
  vegetables:    [{ tr:'Havuç',ku:'Gêzer',en:'Carrot',fr:'Carotte',es:'Zanahoria',de:'Karotte',it:'Carota' },{ tr:'Domates',ku:'Bacanê sor',en:'Tomato',fr:'Tomate',es:'Tomate',de:'Tomate',it:'Pomodoro' },{ tr:'Soğan',ku:'Peyaz',en:'Onion',fr:'Oignon',es:'Cebolla',de:'Zwiebel',it:'Cipolla' },{ tr:'Sarımsak',ku:'Sîr',en:'Garlic',fr:'Ail',es:'Ajo',de:'Knoblauch',it:'Aglio' },{ tr:'Patates',ku:'Kartol',en:'Potato',fr:'Pomme de terre',es:'Patata',de:'Kartoffel',it:'Patata' },{ tr:'Fasulye',ku:'Fasûlê',en:'Bean',fr:'Haricot',es:'Judía',de:'Bohne',it:'Fagiolo' }],
  drinks:        [{ tr:'Su',ku:'Av',en:'Water',fr:'Eau',es:'Agua',de:'Wasser',it:'Acqua' },{ tr:'Çay',ku:'Çay',en:'Tea',fr:'Thé',es:'Té',de:'Tee',it:'Tè' },{ tr:'Kahve',ku:'Qehwe',en:'Coffee',fr:'Café',es:'Café',de:'Kaffee',it:'Caffè' },{ tr:'Süt',ku:'Şîr',en:'Milk',fr:'Lait',es:'Leche',de:'Milch',it:'Latte' },{ tr:'Meyve suyu',ku:'Ava mewê',en:'Juice',fr:'Jus',es:'Zumo',de:'Saft',it:'Succo' },{ tr:'Limonata',ku:'Limonata',en:'Lemonade',fr:'Limonade',es:'Limonada',de:'Limonade',it:'Limonata' }],
  rooms:         [{ tr:'Mutfak',ku:'Mitbex',en:'Kitchen',fr:'Cuisine',es:'Cocina',de:'Küche',it:'Cucina' },{ tr:'Yatak odası',ku:'Razangeh',en:'Bedroom',fr:'Chambre',es:'Dormitorio',de:'Schlafzimmer',it:'Camera' },{ tr:'Banyo',ku:'Serşok',en:'Bathroom',fr:'Salle de bain',es:'Baño',de:'Badezimmer',it:'Bagno' },{ tr:'Salon',ku:'Salon',en:'Living room',fr:'Salon',es:'Salón',de:'Wohnzimmer',it:'Salotto' },{ tr:'Bahçe',ku:'Baxçe',en:'Garden',fr:'Jardin',es:'Jardín',de:'Garten',it:'Giardino' },{ tr:'Bodrum',ku:'Jêrxanî',en:'Basement',fr:'Sous-sol',es:'Sótano',de:'Keller',it:'Cantina' }],
  furniture:     [{ tr:'Sandalye',ku:'Kursî',en:'Chair',fr:'Chaise',es:'Silla',de:'Stuhl',it:'Sedia' },{ tr:'Masa',ku:'Mase',en:'Table',fr:'Table',es:'Mesa',de:'Tisch',it:'Tavolo' },{ tr:'Yatak',ku:'Nivîn',en:'Bed',fr:'Lit',es:'Cama',de:'Bett',it:'Letto' },{ tr:'Dolap',ku:'Dolap',en:'Wardrobe',fr:'Armoire',es:'Armario',de:'Schrank',it:'Armadio' },{ tr:'Kanepe',ku:'Kanape',en:'Sofa',fr:'Canapé',es:'Sofá',de:'Sofa',it:'Divano' },{ tr:'Kitaplık',ku:'Pirtûkxane',en:'Bookshelf',fr:'Bibliothèque',es:'Estantería',de:'Bücherregal',it:'Libreria' }],
  kitchenItems:  [{ tr:'Tabak',ku:'Qap',en:'Plate',fr:'Assiette',es:'Plato',de:'Teller',it:'Piatto' },{ tr:'Bıçak',ku:'Kêlî',en:'Knife',fr:'Couteau',es:'Cuchillo',de:'Messer',it:'Coltello' },{ tr:'Kaşık',ku:'Kevçî',en:'Spoon',fr:'Cuillère',es:'Cuchara',de:'Löffel',it:'Cucchiaio' },{ tr:'Çatal',ku:'Çêtal',en:'Fork',fr:'Fourchette',es:'Tenedor',de:'Gabel',it:'Forchetta' },{ tr:'Bardak',ku:'Fincane',en:'Cup',fr:'Tasse',es:'Taza',de:'Tasse',it:'Tazza' },{ tr:'Tencere',ku:'Tencere',en:'Pot',fr:'Casserole',es:'Olla',de:'Topf',it:'Pentola' }],
  body:          [{ tr:'Baş',ku:'Ser',en:'Head',fr:'Tête',es:'Cabeza',de:'Kopf',it:'Testa' },{ tr:'Göz',ku:'Çav',en:'Eye',fr:'Œil',es:'Ojo',de:'Auge',it:'Occhio' },{ tr:'Kulak',ku:'Guh',en:'Ear',fr:'Oreille',es:'Oreja',de:'Ohr',it:'Orecchio' },{ tr:'Ağız',ku:'Dev',en:'Mouth',fr:'Bouche',es:'Boca',de:'Mund',it:'Bocca' },{ tr:'El',ku:'Dest',en:'Hand',fr:'Main',es:'Mano',de:'Hand',it:'Mano' },{ tr:'Bacak',ku:'Ling',en:'Leg',fr:'Jambe',es:'Pierna',de:'Bein',it:'Gamba' }],
  illness:       [{ tr:'Hastalık',ku:'Nexweşî',en:'Illness',fr:'Maladie',es:'Enfermedad',de:'Krankheit',it:'Malattia' },{ tr:'Baş ağrısı',ku:'Serêşî',en:'Headache',fr:'Mal de tête',es:'Dolor de cabeza',de:'Kopfschmerzen',it:'Mal di testa' },{ tr:'Ateş',ku:'Germahî',en:'Fever',fr:'Fièvre',es:'Fiebre',de:'Fieber',it:'Febbre' },{ tr:'Öksürük',ku:'Kuxik',en:'Cough',fr:'Toux',es:'Tos',de:'Husten',it:'Tosse' },{ tr:'Nezle',ku:'Serxweşî',en:'Cold',fr:'Rhume',es:'Resfriado',de:'Erkältung',it:'Raffreddore' },{ tr:'Yara',ku:'Birîn',en:'Wound',fr:'Blessure',es:'Herida',de:'Wunde',it:'Ferita' }],
  hospital:      [{ tr:'Hastane',ku:'Nexweşxane',en:'Hospital',fr:'Hôpital',es:'Hospital',de:'Krankenhaus',it:'Ospedale' },{ tr:'Doktor',ku:'Doktor',en:'Doctor',fr:'Médecin',es:'Médico',de:'Arzt',it:'Medico' },{ tr:'Hemşire',ku:'Hemşire',en:'Nurse',fr:'Infirmière',es:'Enfermero',de:'Krankenschwester',it:'Infermiere' },{ tr:'İlaç',ku:'Derman',en:'Medicine',fr:'Médicament',es:'Medicina',de:'Medizin',it:'Medicina' },{ tr:'Ameliyat',ku:'Operasyon',en:'Operation',fr:'Opération',es:'Operación',de:'Operation',it:'Operazione' },{ tr:'Ambulans',ku:'Ambulans',en:'Ambulance',fr:'Ambulance',es:'Ambulancia',de:'Krankenwagen',it:'Ambulanza' }],
  clothes:       [{ tr:'Gömlek',ku:'Kiras',en:'Shirt',fr:'Chemise',es:'Camisa',de:'Hemd',it:'Camicia' },{ tr:'Pantolon',ku:'Pantol',en:'Trousers',fr:'Pantalon',es:'Pantalón',de:'Hose',it:'Pantaloni' },{ tr:'Şapka',ku:'Kele',en:'Hat',fr:'Chapeau',es:'Sombrero',de:'Hut',it:'Cappello' },{ tr:'Ayakkabı',ku:'Pûtin',en:'Shoe',fr:'Chaussure',es:'Zapato',de:'Schuh',it:'Scarpa' },{ tr:'Ceket',ku:'Jaket',en:'Jacket',fr:'Veste',es:'Chaqueta',de:'Jacke',it:'Giacca' },{ tr:'Çorap',ku:'Gorîn',en:'Sock',fr:'Chaussette',es:'Calcetín',de:'Socke',it:'Calzino' }],
  clothingColors:[{ tr:'Kırmızı',ku:'Sor',en:'Red',fr:'Rouge',es:'Rojo',de:'Rot',it:'Rosso' },{ tr:'Mavi',ku:'Şîn',en:'Blue',fr:'Bleu',es:'Azul',de:'Blau',it:'Blu' },{ tr:'Yeşil',ku:'Kesk',en:'Green',fr:'Vert',es:'Verde',de:'Grün',it:'Verde' },{ tr:'Sarı',ku:'Zer',en:'Yellow',fr:'Jaune',es:'Amarillo',de:'Gelb',it:'Giallo' },{ tr:'Beyaz',ku:'Spî',en:'White',fr:'Blanc',es:'Blanco',de:'Weiß',it:'Bianco' },{ tr:'Siyah',ku:'Reş',en:'Black',fr:'Noir',es:'Negro',de:'Schwarz',it:'Nero' }],
  market:        [{ tr:'Pazar',ku:'Bazar',en:'Market',fr:'Marché',es:'Mercado',de:'Markt',it:'Mercato' },{ tr:'Fiyat',ku:'Bihay',en:'Price',fr:'Prix',es:'Precio',de:'Preis',it:'Prezzo' },{ tr:'Ucuz',ku:'Erzan',en:'Cheap',fr:'Bon marché',es:'Barato',de:'Billig',it:'Economico' },{ tr:'Pahalı',ku:'Biha',en:'Expensive',fr:'Cher',es:'Caro',de:'Teuer',it:'Caro' },{ tr:'Satın almak',ku:'Kirîn',en:'Buy',fr:'Acheter',es:'Comprar',de:'Kaufen',it:'Comprare' },{ tr:'Satmak',ku:'Firotin',en:'Sell',fr:'Vendre',es:'Vender',de:'Verkaufen',it:'Vendere' }],
  jobs1:         [{ tr:'Doktor',ku:'Doktor',en:'Doctor',fr:'Médecin',es:'Médico',de:'Arzt',it:'Medico' },{ tr:'Öğretmen',ku:'Mamosta',en:'Teacher',fr:'Professeur',es:'Profesor',de:'Lehrer',it:'Insegnante' },{ tr:'Şoför',ku:'Şofêr',en:'Driver',fr:'Chauffeur',es:'Conductor',de:'Fahrer',it:'Autista' },{ tr:'Çiftçi',ku:'Cotkar',en:'Farmer',fr:'Agriculteur',es:'Agricultor',de:'Bauer',it:'Agricoltore' },{ tr:'Mühendis',ku:'Endezyar',en:'Engineer',fr:'Ingénieur',es:'Ingeniero',de:'Ingenieur',it:'Ingegnere' },{ tr:'Avukat',ku:'Parêzer',en:'Lawyer',fr:'Avocat',es:'Abogado',de:'Anwalt',it:'Avvocato' }],
  jobs2:         [{ tr:'Yazar',ku:'Nivîskar',en:'Writer',fr:'Écrivain',es:'Escritor',de:'Schriftsteller',it:'Scrittore' },{ tr:'Sanatçı',ku:'Hunermend',en:'Artist',fr:'Artiste',es:'Artista',de:'Künstler',it:'Artista' },{ tr:'Mimar',ku:'Mîmar',en:'Architect',fr:'Architecte',es:'Arquitecto',de:'Architekt',it:'Architetto' },{ tr:'Polis',ku:'Polîs',en:'Police',fr:'Police',es:'Policía',de:'Polizist',it:'Poliziotto' },{ tr:'Asker',ku:'Efser',en:'Soldier',fr:'Soldat',es:'Soldado',de:'Soldat',it:'Soldato' },{ tr:'Aşçı',ku:'Aşpêj',en:'Chef',fr:'Chef',es:'Chef',de:'Koch',it:'Cuoco' }],
  workplace:     [{ tr:'Ofis',ku:'Nivîsxane',en:'Office',fr:'Bureau',es:'Oficina',de:'Büro',it:'Ufficio' },{ tr:'Toplantı',ku:'Civîn',en:'Meeting',fr:'Réunion',es:'Reunión',de:'Besprechung',it:'Riunione' },{ tr:'Proje',ku:'Projeh',en:'Project',fr:'Projet',es:'Proyecto',de:'Projekt',it:'Progetto' },{ tr:'Sunum',ku:'Pêşkêş',en:'Presentation',fr:'Présentation',es:'Presentación',de:'Präsentation',it:'Presentazione' },{ tr:'Maaş',ku:'Mûçe',en:'Salary',fr:'Salaire',es:'Salario',de:'Gehalt',it:'Stipendio' },{ tr:'İş',ku:'Xebat',en:'Work',fr:'Travail',es:'Trabajo',de:'Arbeit',it:'Lavoro' }],
  places:        [{ tr:'Okul',ku:'Mekteb',en:'School',fr:'École',es:'Escuela',de:'Schule',it:'Scuola' },{ tr:'Hastane',ku:'Nexweşxane',en:'Hospital',fr:'Hôpital',es:'Hospital',de:'Krankenhaus',it:'Ospedale' },{ tr:'Otel',ku:'Otêl',en:'Hotel',fr:'Hôtel',es:'Hotel',de:'Hotel',it:'Albergo' },{ tr:'Restoran',ku:'Xwaringeh',en:'Restaurant',fr:'Restaurant',es:'Restaurante',de:'Restaurant',it:'Ristorante' },{ tr:'Market',ku:'Supermarket',en:'Supermarket',fr:'Supermarché',es:'Supermercado',de:'Supermarkt',it:'Supermercato' },{ tr:'Kütüphane',ku:'Pirtûkxane',en:'Library',fr:'Bibliothèque',es:'Biblioteca',de:'Bibliothek',it:'Biblioteca' }],
  transport:     [{ tr:'Araba',ku:'Tirimbêl',en:'Car',fr:'Voiture',es:'Coche',de:'Auto',it:'Auto' },{ tr:'Otobüs',ku:'Otobûs',en:'Bus',fr:'Bus',es:'Autobús',de:'Bus',it:'Autobus' },{ tr:'Tren',ku:'Trên',en:'Train',fr:'Train',es:'Tren',de:'Zug',it:'Treno' },{ tr:'Uçak',ku:'Balafir',en:'Airplane',fr:'Avion',es:'Avión',de:'Flugzeug',it:'Aereo' },{ tr:'Bisiklet',ku:'Dûpişk',en:'Bicycle',fr:'Vélo',es:'Bicicleta',de:'Fahrrad',it:'Bicicletta' },{ tr:'Gemi',ku:'Gemî',en:'Ship',fr:'Bateau',es:'Barco',de:'Schiff',it:'Nave' }],
  directions:    [{ tr:'Sol',ku:'Çep',en:'Left',fr:'Gauche',es:'Izquierda',de:'Links',it:'Sinistra' },{ tr:'Sağ',ku:'Rast',en:'Right',fr:'Droite',es:'Derecha',de:'Rechts',it:'Destra' },{ tr:'Düz',ku:'Rasterast',en:'Straight',fr:'Tout droit',es:'Recto',de:'Geradeaus',it:'Dritto' },{ tr:'Yakın',ku:'Nêzîk',en:'Near',fr:'Près',es:'Cerca',de:'Nah',it:'Vicino' },{ tr:'Uzak',ku:'Dûr',en:'Far',fr:'Loin',es:'Lejos',de:'Weit',it:'Lontano' },{ tr:'Dönmek',ku:'Zivirîn',en:'Turn',fr:'Tourner',es:'Girar',de:'Abbiegen',it:'Girare' }],
  morningRoutine:[{ tr:'Uyanmak',ku:'Şiyarbûn',en:'Wake up',fr:'Se réveiller',es:'Despertar',de:'Aufwachen',it:'Svegliarsi' },{ tr:'Yıkanmak',ku:'Xwe şûştin',en:'Wash',fr:'Se laver',es:'Lavarse',de:'Waschen',it:'Lavarsi' },{ tr:'Giyinmek',ku:'Cil kirin',en:'Get dressed',fr:"S'habiller",es:'Vestirse',de:'Anziehen',it:'Vestirsi' },{ tr:'Kahvaltı',ku:'Taştê',en:'Breakfast',fr:'Petit-déjeuner',es:'Desayuno',de:'Frühstück',it:'Colazione' },{ tr:'Çıkmak',ku:'Derketin',en:'Go out',fr:'Sortir',es:'Salir',de:'Rausgehen',it:'Uscire' },{ tr:'Gezmek',ku:'Gerîn',en:'Walk around',fr:'Se promener',es:'Pasear',de:'Spazieren',it:'Passeggiare' }],
  schoolWords:   [{ tr:'Ders',ku:'Ders',en:'Lesson',fr:'Leçon',es:'Lección',de:'Lektion',it:'Lezione' },{ tr:'Kitap',ku:'Pirtûk',en:'Book',fr:'Livre',es:'Libro',de:'Buch',it:'Libro' },{ tr:'Defter',ku:'Nîşe',en:'Notebook',fr:'Cahier',es:'Cuaderno',de:'Heft',it:'Quaderno' },{ tr:'Öğrenci',ku:'Xwendekar',en:'Student',fr:'Élève',es:'Estudiante',de:'Schüler',it:'Studente' },{ tr:'Sınıf',ku:'Sinif',en:'Classroom',fr:'Classe',es:'Clase',de:'Klasse',it:'Classe' },{ tr:'Sınav',ku:'Imtîhan',en:'Exam',fr:'Examen',es:'Examen',de:'Prüfung',it:'Esame' }],
  eveningRoutine:[{ tr:'Yemek pişirmek',ku:'Xwarin çêkirin',en:'Cook',fr:'Cuisiner',es:'Cocinar',de:'Kochen',it:'Cucinare' },{ tr:'TV izlemek',ku:'Televizyon temaşekirin',en:'Watch TV',fr:'Regarder la télé',es:'Ver la tele',de:'Fernsehen',it:'Guardare la TV' },{ tr:'Okumak',ku:'Xwendin',en:'Read',fr:'Lire',es:'Leer',de:'Lesen',it:'Leggere' },{ tr:'Oynamak',ku:'Lîztin',en:'Play',fr:'Jouer',es:'Jugar',de:'Spielen',it:'Giocare' },{ tr:'Uyumak',ku:'Razanê',en:'Sleep',fr:'Dormir',es:'Dormir',de:'Schlafen',it:'Dormire' },{ tr:'Temizlemek',ku:'Paqijkirin',en:'Clean',fr:'Nettoyer',es:'Limpiar',de:'Putzen',it:'Pulire' }],
  emotions:      [{ tr:'Mutlu',ku:'Şad',en:'Happy',fr:'Heureux',es:'Feliz',de:'Glücklich',it:'Felice' },{ tr:'Üzgün',ku:'Xemgîn',en:'Sad',fr:'Triste',es:'Triste',de:'Traurig',it:'Triste' },{ tr:'Kızgın',ku:'Hêrsbûyî',en:'Angry',fr:'En colère',es:'Enfadado',de:'Wütend',it:'Arrabbiato' },{ tr:'Korkmuş',ku:'Tirsiyayî',en:'Scared',fr:'Effrayé',es:'Asustado',de:'Ängstlich',it:'Spaventato' },{ tr:'Şaşırmış',ku:'Matmayî',en:'Surprised',fr:'Surpris',es:'Sorprendido',de:'Überrascht',it:'Sorpreso' },{ tr:'Sıkılmış',ku:'Bêzar',en:'Bored',fr:'Ennuyé',es:'Aburrido',de:'Gelangweilt',it:'Annoiato' }],
  personality:   [{ tr:'Nazik',ku:'Dilovanî',en:'Kind',fr:'Gentil',es:'Amable',de:'Freundlich',it:'Gentile' },{ tr:'Akıllı',ku:'Jîr',en:'Smart',fr:'Intelligent',es:'Inteligente',de:'Klug',it:'Intelligente' },{ tr:'Cesur',ku:'Dilêş',en:'Brave',fr:'Courageux',es:'Valiente',de:'Mutig',it:'Coraggioso' },{ tr:'Dürüst',ku:'Rast',en:'Honest',fr:'Honnête',es:'Honesto',de:'Ehrlich',it:'Onesto' },{ tr:'Çalışkan',ku:'Birêkûpêk',en:'Hardworking',fr:'Travailleur',es:'Trabajador',de:'Fleißig',it:'Laborioso' },{ tr:'Sabırlı',ku:'Bîrdar',en:'Patient',fr:'Patient',es:'Paciente',de:'Geduldig',it:'Paziente' }],
  reactions:     [{ tr:'Harika',ku:'Ecêb',en:'Wonderful',fr:'Merveilleux',es:'Maravilloso',de:'Wunderbar',it:'Meraviglioso' },{ tr:'Aferin',ku:'Aferin',en:'Well done',fr:'Bravo',es:'Muy bien',de:'Gut gemacht',it:'Bravo' },{ tr:'Tamam',ku:'Baş e',en:'OK',fr:"D'accord",es:'De acuerdo',de:'In Ordnung',it:'Va bene' },{ tr:'Olmaz',ku:'Nabe',en:'No way',fr:'Pas question',es:'De ningún modo',de:'Auf keinen Fall',it:'Assolutamente no' },{ tr:'Kesinlikle',ku:'Bê guman',en:'Definitely',fr:'Certainement',es:'Definitivamente',de:'Definitiv',it:'Assolutamente' },{ tr:'Belki',ku:'Dibe',en:'Maybe',fr:'Peut-être',es:'Quizás',de:'Vielleicht',it:'Forse' }],
  movementVerbs: [{ tr:'Gitmek',ku:'Çûyîn',en:'Go',fr:'Aller',es:'Ir',de:'Gehen',it:'Andare' },{ tr:'Gelmek',ku:'Hatin',en:'Come',fr:'Venir',es:'Venir',de:'Kommen',it:'Venire' },{ tr:'Koşmak',ku:'Bezan',en:'Run',fr:'Courir',es:'Correr',de:'Laufen',it:'Correre' },{ tr:'Yürümek',ku:'Meşîn',en:'Walk',fr:'Marcher',es:'Caminar',de:'Gehen',it:'Camminare' },{ tr:'Uçmak',ku:'Firîn',en:'Fly',fr:'Voler',es:'Volar',de:'Fliegen',it:'Volare' },{ tr:'Atlamak',ku:'Bazdan',en:'Jump',fr:'Sauter',es:'Saltar',de:'Springen',it:'Saltare' }],
  stateVerbs:    [{ tr:'Oturmak',ku:'Rûniştin',en:'Sit',fr:"S'asseoir",es:'Sentarse',de:'Sitzen',it:'Sedersi' },{ tr:'Durmak',ku:'Rawestin',en:'Stand',fr:'Se lever',es:'Pararse',de:'Stehen',it:'Stare in piedi' },{ tr:'Uzanmak',ku:'Razanê',en:'Lie down',fr:"S'allonger",es:'Tumbarse',de:'Liegen',it:'Sdraiarsi' },{ tr:'Beklemek',ku:'Hêvîkirin',en:'Wait',fr:'Attendre',es:'Esperar',de:'Warten',it:'Aspettare' },{ tr:'Düşünmek',ku:'Ramandin',en:'Think',fr:'Penser',es:'Pensar',de:'Denken',it:'Pensare' },{ tr:'Bakmak',ku:'Mêze kirin',en:'Look',fr:'Regarder',es:'Mirar',de:'Schauen',it:'Guardare' }],
  dailyVerbs:    [{ tr:'Yemek yemek',ku:'Xwarin',en:'Eat',fr:'Manger',es:'Comer',de:'Essen',it:'Mangiare' },{ tr:'İçmek',ku:'Vexwarin',en:'Drink',fr:'Boire',es:'Beber',de:'Trinken',it:'Bere' },{ tr:'Uyumak',ku:'Razanê',en:'Sleep',fr:'Dormir',es:'Dormir',de:'Schlafen',it:'Dormire' },{ tr:'Konuşmak',ku:'Axaftin',en:'Talk',fr:'Parler',es:'Hablar',de:'Reden',it:'Parlare' },{ tr:'Yazmak',ku:'Nivîsîn',en:'Write',fr:'Écrire',es:'Escribir',de:'Schreiben',it:'Scrivere' },{ tr:'Okumak',ku:'Xwendin',en:'Read',fr:'Lire',es:'Leer',de:'Lesen',it:'Leggere' }],
  pastTense:     [{ tr:'Gitti',ku:'Çû',en:'Went',fr:'Est allé',es:'Fue',de:'Ging',it:'Andò' },{ tr:'Geldi',ku:'Hat',en:'Came',fr:'Est venu',es:'Vino',de:'Kam',it:'Venne' },{ tr:'Yedi',ku:'Xwar',en:'Ate',fr:'A mangé',es:'Comió',de:'Aß',it:'Mangiò' },{ tr:'İçti',ku:'Vexwar',en:'Drank',fr:'A bu',es:'Bebió',de:'Trank',it:'Bevve' },{ tr:'Yaptı',ku:'Kir',en:'Did',fr:'A fait',es:'Hizo',de:'Tat',it:'Fece' },{ tr:'Söyledi',ku:'Got',en:'Said',fr:'A dit',es:'Dijo',de:'Sagte',it:'Disse' }],
  futureTense:   [{ tr:'Gidecek',ku:'Dê biçe',en:'Will go',fr:'Ira',es:'Irá',de:'Wird gehen',it:'Andrà' },{ tr:'Gelecek',ku:'Dê bê',en:'Will come',fr:'Viendra',es:'Vendrá',de:'Wird kommen',it:'Verrà' },{ tr:'Yiyecek',ku:'Dê bixwe',en:'Will eat',fr:'Mangera',es:'Comerá',de:'Wird essen',it:'Mangerà' },{ tr:'Yapacak',ku:'Dê bike',en:'Will do',fr:'Fera',es:'Hará',de:'Wird machen',it:'Farà' },{ tr:'Yazacak',ku:'Dê binivîse',en:'Will write',fr:'Écrira',es:'Escribirá',de:'Wird schreiben',it:'Scriverà' },{ tr:'Okuyacak',ku:'Dê bixwîne',en:'Will read',fr:'Lira',es:'Leerá',de:'Wird lesen',it:'Leggerà' }],
  imperatives:   [{ tr:'Git!',ku:'Biçe!',en:'Go!',fr:'Va!',es:'¡Ve!',de:'Geh!',it:'Vai!' },{ tr:'Gel!',ku:'Were!',en:'Come!',fr:'Viens!',es:'¡Ven!',de:'Komm!',it:'Vieni!' },{ tr:'Ye!',ku:'Bixwe!',en:'Eat!',fr:'Mange!',es:'¡Come!',de:'Iss!',it:'Mangia!' },{ tr:'Otur!',ku:'Rûne!',en:'Sit!',fr:'Assieds-toi!',es:'¡Siéntate!',de:'Sitz!',it:'Siediti!' },{ tr:'Dur!',ku:'Raweste!',en:'Stop!',fr:'Arrête!',es:'¡Para!',de:'Halt!',it:'Fermati!' },{ tr:'Konuş!',ku:'Biaxive!',en:'Talk!',fr:'Parle!',es:'¡Habla!',de:'Rede!',it:'Parla!' }],
  schoolSupplies:[{ tr:'Kitap',ku:'Pirtûk',en:'Book',fr:'Livre',es:'Libro',de:'Buch',it:'Libro' },{ tr:'Kalem',ku:'Qelem',en:'Pen',fr:'Stylo',es:'Bolígrafo',de:'Stift',it:'Penna' },{ tr:'Defter',ku:'Nîşe',en:'Notebook',fr:'Cahier',es:'Cuaderno',de:'Heft',it:'Quaderno' },{ tr:'Cetvel',ku:'Silav',en:'Ruler',fr:'Règle',es:'Regla',de:'Lineal',it:'Righello' },{ tr:'Çanta',ku:'Çente',en:'Bag',fr:'Sac',es:'Mochila',de:'Tasche',it:'Borsa' },{ tr:'Silgi',ku:'Eraser',en:'Eraser',fr:'Gomme',es:'Goma',de:'Radiergummi',it:'Gomma' }],
  subjects:      [{ tr:'Matematik',ku:'Matematîk',en:'Math',fr:'Mathématiques',es:'Matemáticas',de:'Mathematik',it:'Matematica' },{ tr:'Fen',ku:'Zanist',en:'Science',fr:'Sciences',es:'Ciencias',de:'Wissenschaft',it:'Scienze' },{ tr:'Tarih',ku:'Dîrok',en:'History',fr:'Histoire',es:'Historia',de:'Geschichte',it:'Storia' },{ tr:'Coğrafya',ku:'Erdnasî',en:'Geography',fr:'Géographie',es:'Geografía',de:'Geographie',it:'Geografia' },{ tr:'Müzik',ku:'Muzîk',en:'Music',fr:'Musique',es:'Música',de:'Musik',it:'Musica' },{ tr:'Sanat',ku:'Huner',en:'Art',fr:'Art',es:'Arte',de:'Kunst',it:'Arte' }],
  classroomWords:[{ tr:'Tahta',ku:'Lûle',en:'Blackboard',fr:'Tableau',es:'Pizarra',de:'Tafel',it:'Lavagna' },{ tr:'El kaldırmak',ku:'Dest bilindkirin',en:'Raise hand',fr:'Lever la main',es:'Levantar la mano',de:'Hand heben',it:'Alzare la mano' },{ tr:'Soru sormak',ku:'Pirsîn',en:'Ask',fr:'Demander',es:'Preguntar',de:'Fragen',it:'Chiedere' },{ tr:'Cevaplamak',ku:'Bersivdan',en:'Answer',fr:'Répondre',es:'Responder',de:'Antworten',it:'Rispondere' },{ tr:'Anlamak',ku:'Têgihiştin',en:'Understand',fr:'Comprendre',es:'Entender',de:'Verstehen',it:'Capire' },{ tr:'Tekrar etmek',ku:'Dubare kirin',en:'Repeat',fr:'Répéter',es:'Repetir',de:'Wiederholen',it:'Ripetere' }],
  vacation:      [{ tr:'Plaj',ku:'Deşt',en:'Beach',fr:'Plage',es:'Playa',de:'Strand',it:'Spiaggia' },{ tr:'Dağ',ku:'Çiya',en:'Mountain',fr:'Montagne',es:'Montaña',de:'Berg',it:'Montagna' },{ tr:'Şehir',ku:'Bajar',en:'City',fr:'Ville',es:'Ciudad',de:'Stadt',it:'Città' },{ tr:'Ada',ku:'Girav',en:'Island',fr:'Île',es:'Isla',de:'Insel',it:'Isola' },{ tr:'Şelale',ku:'Şelale',en:'Waterfall',fr:'Cascade',es:'Cascada',de:'Wasserfall',it:'Cascata' },{ tr:'Tatil',ku:'Betlanê',en:'Holiday',fr:'Vacances',es:'Vacaciones',de:'Urlaub',it:'Vacanza' }],
  hotel:         [{ tr:'Oda',ku:'Jûr',en:'Room',fr:'Chambre',es:'Habitación',de:'Zimmer',it:'Camera' },{ tr:'Resepsiyon',ku:'Sermaşok',en:'Reception',fr:'Réception',es:'Recepción',de:'Empfang',it:'Reception' },{ tr:'Anahtar',ku:'Kilît',en:'Key',fr:'Clé',es:'Llave',de:'Schlüssel',it:'Chiave' },{ tr:'Banyo',ku:'Serşok',en:'Bathroom',fr:'Salle de bain',es:'Baño',de:'Badezimmer',it:'Bagno' },{ tr:'Rezervasyon',ku:'Rezervasyon',en:'Reservation',fr:'Réservation',es:'Reservación',de:'Reservierung',it:'Prenotazione' },{ tr:'Hesap',ku:'Hesab',en:'Bill',fr:'Facture',es:'Cuenta',de:'Rechnung',it:'Conto' }],
  travelPlan:    [{ tr:'Pasaport',ku:'Pasaport',en:'Passport',fr:'Passeport',es:'Pasaporte',de:'Reisepass',it:'Passaporto' },{ tr:'Vize',ku:'Vîze',en:'Visa',fr:'Visa',es:'Visado',de:'Visum',it:'Visto' },{ tr:'Havalimanı',ku:'Balafirgeha',en:'Airport',fr:'Aéroport',es:'Aeropuerto',de:'Flughafen',it:'Aeroporto' },{ tr:'Bavul',ku:'Çente',en:'Suitcase',fr:'Valise',es:'Maleta',de:'Koffer',it:'Valigia' },{ tr:'Bilet',ku:'Bilêt',en:'Ticket',fr:'Billet',es:'Billete',de:'Ticket',it:'Biglietto' },{ tr:'Tur',ku:'Tur',en:'Tour',fr:'Tour',es:'Tour',de:'Tour',it:'Tour' }],
  sports:        [{ tr:'Futbol',ku:'Futbol',en:'Football',fr:'Football',es:'Fútbol',de:'Fußball',it:'Calcio' },{ tr:'Tenis',ku:'Tenîs',en:'Tennis',fr:'Tennis',es:'Tenis',de:'Tennis',it:'Tennis' },{ tr:'Yüzme',ku:'Senet',en:'Swimming',fr:'Natation',es:'Natación',de:'Schwimmen',it:'Nuoto' },{ tr:'Koşu',ku:'Bezan',en:'Running',fr:'Course',es:'Carrera',de:'Laufen',it:'Corsa' },{ tr:'Basketbol',ku:'Basketbol',en:'Basketball',fr:'Basketball',es:'Baloncesto',de:'Basketball',it:'Pallacanestro' },{ tr:'Voleybol',ku:'Voleybol',en:'Volleyball',fr:'Volleyball',es:'Voleibol',de:'Volleyball',it:'Pallavolo' }],
  musicArt:      [{ tr:'Müzik',ku:'Muzîk',en:'Music',fr:'Musique',es:'Música',de:'Musik',it:'Musica' },{ tr:'Şarkı',ku:'Kilam',en:'Song',fr:'Chanson',es:'Canción',de:'Lied',it:'Canzone' },{ tr:'Enstrüman',ku:'Wesayit',en:'Instrument',fr:'Instrument',es:'Instrumento',de:'Instrument',it:'Strumento' },{ tr:'Resim',ku:'Xêzkirin',en:'Painting',fr:'Peinture',es:'Pintura',de:'Gemälde',it:'Pittura' },{ tr:'Dans',ku:'Dans',en:'Dance',fr:'Danse',es:'Baile',de:'Tanz',it:'Danza' },{ tr:'Tiyatro',ku:'Şano',en:'Theater',fr:'Théâtre',es:'Teatro',de:'Theater',it:'Teatro' }],
  leisure:       [{ tr:'Okuma',ku:'Xwendin',en:'Reading',fr:'Lecture',es:'Lectura',de:'Lesen',it:'Lettura' },{ tr:'Oyun',ku:'Lîstik',en:'Game',fr:'Jeu',es:'Juego',de:'Spiel',it:'Gioco' },{ tr:'Film',ku:'Film',en:'Movie',fr:'Film',es:'Película',de:'Film',it:'Film' },{ tr:'Seyahat',ku:'Geşt',en:'Travel',fr:'Voyage',es:'Viaje',de:'Reise',it:'Viaggio' },{ tr:'Yemek yapmak',ku:'Pijandina xwarinê',en:'Cooking',fr:'Cuisine',es:'Cocinar',de:'Kochen',it:'Cucinare' },{ tr:'Bahçecilik',ku:'Baxçekarî',en:'Gardening',fr:'Jardinage',es:'Jardinería',de:'Gartenarbeit',it:'Giardinaggio' }],
  seasons:       [{ tr:'İlkbahar',ku:'Biharê',en:'Spring',fr:'Printemps',es:'Primavera',de:'Frühling',it:'Primavera' },{ tr:'Yaz',ku:'Havîn',en:'Summer',fr:'Été',es:'Verano',de:'Sommer',it:'Estate' },{ tr:'Sonbahar',ku:'Payîz',en:'Autumn',fr:'Automne',es:'Otoño',de:'Herbst',it:'Autunno' },{ tr:'Kış',ku:'Zivistan',en:'Winter',fr:'Hiver',es:'Invierno',de:'Winter',it:'Inverno' },{ tr:'Sıcak',ku:'Germ',en:'Hot',fr:'Chaud',es:'Caliente',de:'Heiß',it:'Caldo' },{ tr:'Soğuk',ku:'Sar',en:'Cold',fr:'Froid',es:'Frío',de:'Kalt',it:'Freddo' }],
  weather:       [{ tr:'Yağmur',ku:'Baran',en:'Rain',fr:'Pluie',es:'Lluvia',de:'Regen',it:'Pioggia' },{ tr:'Kar',ku:'Berf',en:'Snow',fr:'Neige',es:'Nieve',de:'Schnee',it:'Neve' },{ tr:'Güneş',ku:'Tavê',en:'Sun',fr:'Soleil',es:'Sol',de:'Sonne',it:'Sole' },{ tr:'Rüzgar',ku:'Ba',en:'Wind',fr:'Vent',es:'Viento',de:'Wind',it:'Vento' },{ tr:'Bulut',ku:'Ewr',en:'Cloud',fr:'Nuage',es:'Nube',de:'Wolke',it:'Nuvola' },{ tr:'Fırtına',ku:'Bager',en:'Storm',fr:'Tempête',es:'Tormenta',de:'Sturm',it:'Tempesta' }],
  geography:     [{ tr:'Kıta',ku:'Parzemîn',en:'Continent',fr:'Continent',es:'Continente',de:'Kontinent',it:'Continente' },{ tr:'Ülke',ku:'Welat',en:'Country',fr:'Pays',es:'País',de:'Land',it:'Paese' },{ tr:'Nehir',ku:'Çem',en:'River',fr:'Rivière',es:'Río',de:'Fluss',it:'Fiume' },{ tr:'Göl',ku:'Gol',en:'Lake',fr:'Lac',es:'Lago',de:'See',it:'Lago' },{ tr:'Okyanus',ku:'Okyanûs',en:'Ocean',fr:'Océan',es:'Océano',de:'Ozean',it:'Oceano' },{ tr:'Çöl',ku:'Çol',en:'Desert',fr:'Désert',es:'Desierto',de:'Wüste',it:'Deserto' }],
  friendship:    [{ tr:'Arkadaş',ku:'Heval',en:'Friend',fr:'Ami',es:'Amigo',de:'Freund',it:'Amico' },{ tr:'Tanışmak',ku:'Nasîn',en:'Meet',fr:'Rencontrer',es:'Conocerse',de:'Kennenlernen',it:'Conoscersi' },{ tr:'Arkadaşlık',ku:'Hevaltî',en:'Friendship',fr:'Amitié',es:'Amistad',de:'Freundschaft',it:'Amicizia' },{ tr:'Sevmek',ku:'Hezdikirin',en:'Like',fr:'Aimer',es:'Querer',de:'Mögen',it:'Amare' },{ tr:'Yardım etmek',ku:'Alîkarî kirin',en:'Help',fr:'Aider',es:'Ayudar',de:'Helfen',it:'Aiutare' },{ tr:'Paylaşmak',ku:'Parvedan',en:'Share',fr:'Partager',es:'Compartir',de:'Teilen',it:'Condividere' }],
  invitations:   [{ tr:'Davet',ku:'Vexwendin',en:'Invitation',fr:'Invitation',es:'Invitación',de:'Einladung',it:'Invito' },{ tr:'Parti',ku:'Şahî',en:'Party',fr:'Fête',es:'Fiesta',de:'Party',it:'Festa' },{ tr:'Hediye',ku:'Diyarî',en:'Gift',fr:'Cadeau',es:'Regalo',de:'Geschenk',it:'Regalo' },{ tr:'Düğün',ku:'Dawet',en:'Wedding',fr:'Mariage',es:'Boda',de:'Hochzeit',it:'Matrimonio' },{ tr:'Kabul etmek',ku:'Qebûlkirin',en:'Accept',fr:'Accepter',es:'Aceptar',de:'Annehmen',it:'Accettare' },{ tr:'Reddetmek',ku:'Red kirin',en:'Reject',fr:'Refuser',es:'Rechazar',de:'Ablehnen',it:'Rifiutare' }],
  celebrations:  [{ tr:'Doğum günü',ku:'Bûroz',en:'Birthday',fr:'Anniversaire',es:'Cumpleaños',de:'Geburtstag',it:'Compleanno' },{ tr:'Yeni yıl',ku:'Sersalê',en:'New Year',fr:'Nouvel An',es:'Año Nuevo',de:'Neujahr',it:'Capodanno' },{ tr:'Bayram',ku:'Cejna',en:'Holiday',fr:'Fête nationale',es:'Fiesta',de:'Feiertag',it:'Festa nazionale' },{ tr:'Tebrikler',ku:'Pîroz be',en:'Congratulations',fr:'Félicitations',es:'Felicitaciones',de:'Glückwunsch',it:'Congratulazioni' },{ tr:'Mutlu ol',ku:'Bixweş be',en:'Be happy',fr:'Sois heureux',es:'Sé feliz',de:'Sei glücklich',it:'Sii felice' },{ tr:'Eğlen',ku:'Xweş were',en:'Have fun',fr:'Amuse-toi',es:'Diviértete',de:'Viel Spaß',it:'Divertiti' }],
  conjunctions:  [{ tr:'Ve',ku:'Û',en:'And',fr:'Et',es:'Y',de:'Und',it:'E' },{ tr:'Ama',ku:'Lê',en:'But',fr:'Mais',es:'Pero',de:'Aber',it:'Ma' },{ tr:'Veya',ku:'An',en:'Or',fr:'Ou',es:'O',de:'Oder',it:'O' },{ tr:'Çünkü',ku:'Ji ber ku',en:'Because',fr:'Parce que',es:'Porque',de:'Weil',it:'Perché' },{ tr:'Eğer',ku:'Eger',en:'If',fr:'Si',es:'Si',de:'Wenn',it:'Se' },{ tr:'Fakat',ku:'Belê',en:'However',fr:'Cependant',es:'Sin embargo',de:'Jedoch',it:'Tuttavia' }],
  questionWords: [{ tr:'Ne',ku:'Çi',en:'What',fr:'Quoi',es:'Qué',de:'Was',it:'Cosa' },{ tr:'Kim',ku:'Kî',en:'Who',fr:'Qui',es:'Quién',de:'Wer',it:'Chi' },{ tr:'Ne zaman',ku:'Kengî',en:'When',fr:'Quand',es:'Cuándo',de:'Wann',it:'Quando' },{ tr:'Nerede',ku:'Li ku',en:'Where',fr:'Où',es:'Dónde',de:'Wo',it:'Dove' },{ tr:'Nasıl',ku:'Çawa',en:'How',fr:'Comment',es:'Cómo',de:'Wie',it:'Come' },{ tr:'Neden',ku:'Çima',en:'Why',fr:'Pourquoi',es:'Por qué',de:'Warum',it:'Perché' }],
  prepositions:  [{ tr:'İçinde',ku:'Di...de',en:'In',fr:'Dans',es:'En',de:'In',it:'In' },{ tr:'Üstünde',ku:'Li ser',en:'On',fr:'Sur',es:'Sobre',de:'Auf',it:'Su' },{ tr:'Altında',ku:'Li jêr',en:'Under',fr:'Sous',es:'Bajo',de:'Unter',it:'Sotto' },{ tr:'Yanında',ku:'Li rex',en:'Beside',fr:'À côté',es:'Al lado',de:'Neben',it:'Accanto' },{ tr:'Önünde',ku:'Li pêş',en:'In front',fr:'Devant',es:'Delante',de:'Vor',it:'Davanti' },{ tr:'Arkasında',ku:'Li pişt',en:'Behind',fr:'Derrière',es:'Detrás',de:'Hinter',it:'Dietro' }],
  opinions:      [{ tr:'Bence',ku:'Bi min ra',en:'I think',fr:'Je pense',es:'Creo que',de:'Ich denke',it:'Penso che' },{ tr:'Bana göre',ku:'Li gor min',en:'In my opinion',fr:'À mon avis',es:'En mi opinión',de:'Meiner Meinung',it:'A mio parere' },{ tr:'İyi',ku:'Baş',en:'Good',fr:'Bien',es:'Bien',de:'Gut',it:'Bene' },{ tr:'Kötü',ku:'Xirab',en:'Bad',fr:'Mauvais',es:'Malo',de:'Schlecht',it:'Cattivo' },{ tr:'Doğru',ku:'Rast',en:'Correct',fr:'Correct',es:'Correcto',de:'Richtig',it:'Corretto' },{ tr:'Yanlış',ku:'Şaş',en:'Wrong',fr:'Incorrect',es:'Incorrecto',de:'Falsch',it:'Sbagliato' }],
  discussion:    [{ tr:'Katılmak',ku:'Razî bûn',en:'Agree',fr:"Être d'accord",es:'Estar de acuerdo',de:'Zustimmen',it:'Essere d\'accordo' },{ tr:'Katılmamak',ku:'Razî nebûn',en:'Disagree',fr:"Pas d'accord",es:'No estar de acuerdo',de:'Widersprechen',it:'Non essere d\'accordo' },{ tr:'Evet ama',ku:'Erê lê',en:'Yes but',fr:'Oui mais',es:'Sí pero',de:'Ja aber',it:'Sì ma' },{ tr:'Kesinlikle',ku:'Bê guman',en:'Definitely',fr:'Certainement',es:'Definitivamente',de:'Definitiv',it:'Certamente' },{ tr:'Sanmıyorum',ku:'Ez nafikirim',en:"I don't think so",fr:'Je ne crois pas',es:'No lo creo',de:'Ich glaube nicht',it:'Non credo' },{ tr:'Haklısın',ku:'Tu maf î',en:'You are right',fr:'Tu as raison',es:'Tienes razón',de:'Du hast recht',it:'Hai ragione' }],
  media:         [{ tr:'Haber',ku:'Nûçe',en:'News',fr:'Nouvelles',es:'Noticias',de:'Nachrichten',it:'Notizie' },{ tr:'Gazete',ku:'Rojname',en:'Newspaper',fr:'Journal',es:'Periódico',de:'Zeitung',it:'Giornale' },{ tr:'Radyo',ku:'Radyo',en:'Radio',fr:'Radio',es:'Radio',de:'Radio',it:'Radio' },{ tr:'Sosyal medya',ku:'Medyaya civakî',en:'Social media',fr:'Réseaux sociaux',es:'Redes sociales',de:'Soziale Medien',it:'Social media' },{ tr:'Yayın',ku:'Weşan',en:'Broadcast',fr:'Diffusion',es:'Difusión',de:'Sendung',it:'Trasmissione' },{ tr:'Duyuru',ku:'Ragihandin',en:'Announcement',fr:'Annonce',es:'Anuncio',de:'Ankündigung',it:'Annuncio' }],
  proverbs:      [{ tr:'Atasözü',ku:'Gotinên pêşiyan',en:'Proverb',fr:'Proverbe',es:'Proverbio',de:'Sprichwort',it:'Proverbio' },{ tr:'Bilgelik',ku:'Zanistê',en:'Wisdom',fr:'Sagesse',es:'Sabiduría',de:'Weisheit',it:'Saggezza' },{ tr:'Tavsiye',ku:'Şîret',en:'Advice',fr:'Conseil',es:'Consejo',de:'Rat',it:'Consiglio' },{ tr:'Söz',ku:'Sozname',en:'Promise',fr:'Promesse',es:'Promesa',de:'Versprechen',it:'Promessa' },{ tr:'Hikaye',ku:'Çîrok',en:'Story',fr:'Histoire',es:'Historia',de:'Geschichte',it:'Storia' },{ tr:'Anlam',ku:'Wate',en:'Meaning',fr:'Sens',es:'Significado',de:'Bedeutung',it:'Significato' }],
  tales:         [{ tr:'Masal',ku:'Çîroka pêşiyan',en:'Tale',fr:'Conte',es:'Cuento',de:'Märchen',it:'Favola' },{ tr:'Kahraman',ku:'Qehremanê',en:'Hero',fr:'Héros',es:'Héroe',de:'Held',it:'Eroe' },{ tr:'Prenses',ku:'Prenses',en:'Princess',fr:'Princesse',es:'Princesa',de:'Prinzessin',it:'Principessa' },{ tr:'Ejderha',ku:'Ejderha',en:'Dragon',fr:'Dragon',es:'Dragón',de:'Drache',it:'Drago' },{ tr:'Sihir',ku:'Sehrê',en:'Magic',fr:'Magie',es:'Magia',de:'Magie',it:'Magia' },{ tr:'Hazine',ku:'Hazîne',en:'Treasure',fr:'Trésor',es:'Tesoro',de:'Schatz',it:'Tesoro' }],
  traditions:    [{ tr:'Gelenek',ku:'Kevneşopî',en:'Tradition',fr:'Tradition',es:'Tradición',de:'Tradition',it:'Tradizione' },{ tr:'Tören',ku:'Ayîn',en:'Ceremony',fr:'Cérémonie',es:'Ceremonia',de:'Zeremonie',it:'Cerimonia' },{ tr:'Kültür',ku:'Çand',en:'Culture',fr:'Culture',es:'Cultura',de:'Kultur',it:'Cultura' },{ tr:'Miras',ku:'Mîras',en:'Heritage',fr:'Patrimoine',es:'Herencia',de:'Erbe',it:'Eredità' },{ tr:'Festival',ku:'Festival',en:'Festival',fr:'Festival',es:'Festival',de:'Festival',it:'Festival' },{ tr:'Müzik',ku:'Muzîk',en:'Music',fr:'Musique',es:'Música',de:'Musik',it:'Musica' }],
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

const LESSON_TITLES = [
  '', '', '', '', '', '', '',
  'Sayılar', 'Günler ve Aylar', 'Saatler',
  'Evcil Hayvanlar', 'Vahşi Hayvanlar', 'Doğa',
  'Meyveler', 'Sebzeler', 'İçecekler',
  'Odalar', 'Mobilyalar', 'Mutfak Eşyaları',
  'Vücut Bölümleri', 'Hastalıklar', 'Hastanede',
  'Kıyafetler', 'Renklerle Giyim', 'Pazarda',
  'Meslekler 1', 'Meslekler 2', 'İş Yerinde',
  'Mekanlar', 'Taşıtlar', 'Yön Sorma',
  'Sabah Rutini', 'İş ve Okul', 'Akşam Rutini',
  'Hisler', 'Karakter Özellikleri', 'Tepkiler',
  'Hareket Fiilleri', 'Durum Fiilleri', 'Günlük Fiiller',
  'Geçmiş Zaman', 'Gelecek Zaman', 'Emir Kipleri',
  'Okul Eşyaları', 'Dersler', 'Sınıfta',
  'Tatil Yerleri', 'Otelde', 'Seyahat Planı',
  'Spor', 'Müzik ve Sanat', 'Boş Zaman',
  'Mevsimler', 'Hava Durumu', 'Coğrafya',
  'Arkadaşlık', 'Davetler', 'Kutlamalar',
  'Bağlaçlar', 'Soru Kelimeleri', 'Edatlar',
  'Fikir Belirtme', 'Tartışma', 'Haberler',
  'Atasözleri', 'Masallar', 'Gelenekler',
];
const LESSON_DESCS = ['', '', '', '', '', '', '',
  'Sayıları öğren', 'Haftanın günleri', 'Zamanı ifade et',
  'Evdeki hayvanlar', 'Yabani hayvanlar', 'Doğadaki varlıklar',
  'Tatlı meyveler', 'Sağlıklı sebzeler', 'Sıvılar ve içkiler',
  'Evdeki odalar', 'Ev mobilyaları', 'Mutfak malzemeleri',
  'Vücudun parçaları', 'Sağlık sorunları', 'Sağlık ortamı',
  'Giyim türleri', 'Renk ve kıyafet', 'Alışveriş kelimeleri',
  'Temel meslekler', 'İleri meslekler', 'Ofis ve iş hayatı',
  'Şehirdeki yerler', 'Ulaşım araçları', 'Yol tarifi ver',
  'Sabah aktiviteleri', 'Okul kelimeleri', 'Akşam aktiviteleri',
  'Duygu ifadeleri', 'Kişilik ifadeleri', 'Günlük tepkiler',
  'Hareket ifade eden fiiller', 'Durum ifade eden fiiller', 'Günlük kullanılan fiiller',
  'Geçmiş zaman kullanımı', 'Gelecek zaman kullanımı', 'Emir cümleleri',
  'Okul malzemeleri', 'Okul dersleri', 'Sınıf aktiviteleri',
  'Tatil mekanları', 'Otel kelimeleri', 'Seyahat hazırlıkları',
  'Spor aktiviteleri', 'Sanat ve müzik', 'Hobi ve eğlence',
  'Yılın mevsimleri', 'Hava koşulları', 'Coğrafi kavramlar',
  'Dostluk ifadeleri', 'Davet ve etkinlik', 'Özel günler',
  'Bağlama kelimeleri', 'Soru sözcükleri', 'Yer ifadeleri',
  'Görüş ifade etme', 'Tartışma dili', 'Medya ve iletişim',
  'Bilge sözler', 'Efsane ve masal', 'Kültür ve adet',
];
const LESSON_ICONS = ['','','','','','','',
  '1️⃣','📅','⏰','🐶','🦁','🌳','🍎','🥕','☕','🏠','🛋️','🍽️',
  '💪','🤒','🏥','👕','👗','🛍️','👨‍⚕️','👩‍🏫','🏢','🏙️','🚗','🗺️',
  '🌅','🏫','🌃','😊','🧠','😲','🏃‍♂️','🧘','🗣️','⏪','⏩','❗',
  '🎒','📚','👩‍🎓','🏖️','🏨','🧳','⚽','🎸','🎮','🍂','🌦️','🌍',
  '🤝','💌','🎉','🔗','❓','➕','💡','🗣️','📰','📜','🦄','🎭',
];

const LANGS = [
  { prefix: 's', field: 'es', audioLang: 'es-ES', file: 'spanishContent.ts', and: 'y',   iSee: ['Yo', 'veo'],   thisIs: ['Esto', 'es'] },
  { prefix: 'g', field: 'de', audioLang: 'de-DE', file: 'germanContent.ts',  and: 'und', iSee: ['Ich', 'sehe'], thisIs: ['Das', 'ist'] },
  { prefix: 'i', field: 'it', audioLang: 'it-IT', file: 'italianContent.ts', and: 'e',   iSee: ['Io', 'vedo'],  thisIs: ['Questo', 'è'] },
];

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function buildLesson(lang, plan) {
  const { prefix, field, audioLang } = lang;
  const { num, vocabKey } = plan;
  const id = `${prefix}${num}`;
  const vocab = VOCAB[vocabKey];
  if (!vocab) return null;
  const questions = [];
  let qn = 1;

  // 6 flashcards
  for (let i = 0; i < Math.min(6, vocab.length); i++) {
    const w = vocab[i];
    questions.push({ id: `${id}q${qn++}`, type: 'flashcard', prompt: w.tr, options: [], correctIndex: 0, audioText: w[field], audioLang, imageOptions: [] });
  }
  // 3 multipleChoice
  for (let i = 0; i < 3 && i < vocab.length; i++) {
    const w = vocab[i];
    const wrongs = vocab.filter((_, j) => j !== i).map(x => x.tr).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = shuffle([w.tr, ...wrongs]);
    questions.push({ id: `${id}q${qn++}`, type: 'multipleChoice', prompt: `"${w[field]}" kelimesinin Türkçe anlamı nedir?`, options: opts, correctIndex: opts.indexOf(w.tr), audioText: w[field], audioLang });
  }
  // 2 translate
  for (let i = 0; i < 2 && i < vocab.length; i++) {
    const w = vocab[i + (vocab.length > 4 ? 3 : 0)] || vocab[i];
    const wrongs = vocab.filter((_, j) => j !== vocab.indexOf(w)).map(x => x[field]).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = shuffle([w[field], ...wrongs]);
    questions.push({ id: `${id}q${qn++}`, type: 'translate', prompt: `"${w.tr}" nasıl söylenir?`, options: opts, correctIndex: opts.indexOf(w[field]), audioText: w[field], audioLang });
  }
  // 3 constructSentence
  const { and, iSee, thisIs } = lang;
  const v = (i) => vocab[i % vocab.length][field];
  const vtr = (i) => vocab[i % vocab.length].tr;
  // Q1: A and B
  const q1 = [v(0), and, v(1)];
  const q1d = shuffle([v(2), v(3), v(4)]).slice(0, 2);
  questions.push({ id: `${id}q${qn++}`, type: 'constructSentence', prompt: `Şu cümleyi çevir: "${vtr(0)} ve ${vtr(1)}"`, options: shuffle([...new Set([...q1, ...q1d])]), correctIndex: 0, correctAnswer: q1, audioText: q1.join(' '), audioLang });
  // Q2: I see X
  const q2w = v(2);
  const q2 = [...iSee, q2w];
  const q2d = shuffle([v(0), v(1), v(4)]).filter(w => w !== q2w).slice(0, 2);
  questions.push({ id: `${id}q${qn++}`, type: 'constructSentence', prompt: `Şu cümleyi çevir: "Ben ${vtr(2)} görüyorum"`, options: shuffle([...new Set([...iSee, q2w, ...q2d])]), correctIndex: 0, correctAnswer: q2, audioText: q2.join(' '), audioLang });
  // Q3: This is X
  const q3w = v(3);
  const q3 = thisIs.length === 1 ? [thisIs[0], q3w] : thisIs[1] === 'e' ? [thisIs[0], q3w, thisIs[1]] : [...thisIs, q3w];
  const q3d = shuffle([v(0), v(1), v(5)]).filter(w => w !== q3w).slice(0, 2);
  questions.push({ id: `${id}q${qn++}`, type: 'constructSentence', prompt: `Şu cümleyi çevir: "Bu bir ${vtr(3)}"`, options: shuffle([...new Set([...thisIs, q3w, ...q3d])]), correctIndex: 0, correctAnswer: q3, audioText: q3.join(' '), audioLang });

  return { id, title: LESSON_TITLES[num], description: LESSON_DESCS[num], icon: LESSON_ICONS[num], xpReward: 20, questions };
}

for (const lang of LANGS) {
  const filePath = path.join(dataDir, lang.file);
  let content = fs.readFileSync(filePath, 'utf8');
  const newLessons = LESSON_PLAN.map(plan => buildLesson(lang, plan)).filter(Boolean);
  const insertion = newLessons.map(l => `  ${JSON.stringify(l, null, 2).replace(/^/gm, '  ').trim()}`).join(',\n  ');
  content = content.replace(/\];\s*$/, `,\n  ${insertion}\n];\n`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${lang.file}: ${newLessons.length} ders eklendi (${lang.prefix}7-${lang.prefix}66)`);
}
console.log('\n🎉 İspanyolca, Almanca, İtalyanca dersleri oluşturuldu!');
