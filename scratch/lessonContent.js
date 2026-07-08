"use strict";
// Lesson content for all supported languages
// Each lesson has multiple questions with different types
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonsByLanguage = void 0;
exports.lessonsByLanguage = {
    // =====================================================
    // KURDISH (Kurmancî) — 6 lessons
    // =====================================================
    kurdish: [
        { id: 'k1', title: 'Temeller 1', description: 'Kürtçe temel kelimeler: yiyecek, su, hayvanlar', icon: '🥚', xpReward: 15, questions: [
                { id: 'k1q1', type: 'multipleChoice', prompt: '"Su" kelimesinin Kürtçesi (Kurmancî) nedir?', options: ['Av', 'Nan', 'Goşt', 'Şîr'], correctIndex: 0, audioText: 'Av', audioLang: 'tr' },
                { id: 'k1q2', type: 'multipleChoice', prompt: '"Ekmek" kelimesinin Kürtçesi nedir?', options: ['Şîr', 'Nan', 'Mast', 'Av'], correctIndex: 1, audioText: 'Nan', audioLang: 'tr' },
                { id: 'k1q3', type: 'translate', prompt: '"Sêv" kelimesinin Türkçe anlamı nedir?', options: ['Portakal', 'Muz', 'Elma', 'Üzüm'], correctIndex: 2, audioText: 'Sêv', audioLang: 'tr' },
                { id: 'k1q4', type: 'multipleChoice', prompt: '"Süt" kelimesinin Kürtçesi nedir?', options: ['Goşt', 'Av', 'Nan', 'Şîr'], correctIndex: 3, audioText: 'Şîr', audioLang: 'tr' },
                { id: 'k1q5', type: 'translate', prompt: '"Goşt" ne demektir?', options: ['Sebze', 'Et', 'Balık', 'Tavuk'], correctIndex: 1, audioText: 'Goşt', audioLang: 'tr' },
                { id: 'k1q6', type: 'multipleChoice', prompt: '"Masî" kelimesi neyi ifade eder?', options: ['Kuş', 'Balık', 'Kedi', 'Köpek'], correctIndex: 1, audioText: 'Masî', audioLang: 'tr' },
                { id: 'k1q7', type: 'translate', prompt: '"Mirîşk" ne demektir?', options: ['İnek', 'Koyun', 'Tavuk', 'Keçi'], correctIndex: 2, audioText: 'Mirîşk', audioLang: 'tr' },
            ] },
        { id: 'k2', title: 'Alfabe ve Sesler', description: 'Kürtçe alfabe harfleri ve sesler', icon: '🔤', xpReward: 15, questions: [
                { id: 'k2q1', type: 'multipleChoice', prompt: 'Kürtçede "ê" harfi hangi Türkçe sese benzer?', options: ['a', 'e uzun', 'ı', 'u'], correctIndex: 1, audioText: 'ê sesi', audioLang: 'tr' },
                { id: 'k2q2', type: 'translate', prompt: '"Xwendin" kelimesinin anlamı nedir?', options: ['Yazmak', 'Çizmek', 'Okumak', 'Konuşmak'], correctIndex: 2, audioText: 'Xwendin', audioLang: 'tr' },
                { id: 'k2q3', type: 'multipleChoice', prompt: 'Kürtçe alfabesinde kaç harf vardır?', options: ['26', '28', '31', '29'], correctIndex: 2 },
                { id: 'k2q4', type: 'translate', prompt: '"Nivîsîn" ne demektir?', options: ['Okumak', 'Yazmak', 'Çizmek', 'Silmek'], correctIndex: 1, audioText: 'Nivîsîn', audioLang: 'tr' },
                { id: 'k2q5', type: 'multipleChoice', prompt: '"W" harfi Kürtçede nasıl okunur?', options: ['V gibi', 'W gibi (İngilizce)', 'B gibi', 'F gibi'], correctIndex: 1 },
                { id: 'k2q6', type: 'translate', prompt: '"Peyv" ne demektir?', options: ['Harf', 'Cümle', 'Kelime', 'Paragraf'], correctIndex: 2, audioText: 'Peyv', audioLang: 'tr' },
                { id: 'k2q7', type: 'multipleChoice', prompt: '"Q" harfi Kürtçede hangi harfe benzer?', options: ['K (arka boğaz)', 'G', 'H', 'C'], correctIndex: 0 },
            ] },
        { id: 'k3', title: 'Temeller 2', description: 'Doğa, ev ve vücut bölümleri', icon: '🍎', xpReward: 15, questions: [
                { id: 'k3q1', type: 'translate', prompt: '"Mala min" ne demektir?', options: ['Aile', 'Evim', 'Köyüm', 'Şehrim'], correctIndex: 1, audioText: 'Mala min', audioLang: 'tr' },
                { id: 'k3q2', type: 'multipleChoice', prompt: '"Dar" kelimesinin anlamı nedir?', options: ['Taş', 'Su', 'Ağaç', 'Çiçek'], correctIndex: 2, audioText: 'Dar', audioLang: 'tr' },
                { id: 'k3q3', type: 'translate', prompt: '"Dest" ne demektir?', options: ['Ayak', 'Baş', 'El', 'Göz'], correctIndex: 2, audioText: 'Dest', audioLang: 'tr' },
                { id: 'k3q4', type: 'multipleChoice', prompt: '"Çav" kelimesi ne anlama gelir?', options: ['Kulak', 'Ağız', 'Göz', 'Burun'], correctIndex: 2, audioText: 'Çav', audioLang: 'tr' },
                { id: 'k3q5', type: 'translate', prompt: '"Roj" ne demektir?', options: ['Ay', 'Yıldız', 'Gün/Güneş', 'Bulut'], correctIndex: 2, audioText: 'Roj', audioLang: 'tr' },
                { id: 'k3q6', type: 'multipleChoice', prompt: '"Bahoz" kelimesi neyi ifade eder?', options: ['Yağmur', 'Kar', 'Fırtına', 'Rüzgar'], correctIndex: 2, audioText: 'Bahoz', audioLang: 'tr' },
                { id: 'k3q7', type: 'translate', prompt: '"Şev" ne demektir?', options: ['Sabah', 'Öğle', 'Gece', 'Akşam'], correctIndex: 2, audioText: 'Şev', audioLang: 'tr' },
            ] },
        { id: 'k4', title: 'Selamlaşma', description: 'Kürtçe selamlaşma ve kibar ifadeler', icon: '👋', xpReward: 20, questions: [
                { id: 'k4q1', type: 'translate', prompt: '"Rojbaş" ne demektir?', options: ['İyi geceler', 'Günaydın/İyi günler', 'Hoşça kal', 'Nasılsın'], correctIndex: 1, audioText: 'Rojbaş', audioLang: 'tr' },
                { id: 'k4q2', type: 'multipleChoice', prompt: '"Spas" kelimesi ne anlama gelir?', options: ['Merhaba', 'Güle güle', 'Teşekkür ederim', 'Özür dilerim'], correctIndex: 2, audioText: 'Spas', audioLang: 'tr' },
                { id: 'k4q3', type: 'translate', prompt: '"Xatirê te" ne demektir?', options: ['Günaydın', 'Merhaba', 'Hoşça kal', 'Nasılsın'], correctIndex: 2, audioText: 'Xatirê te', audioLang: 'tr' },
                { id: 'k4q4', type: 'multipleChoice', prompt: '"Tu çawa yî?" ne demektir?', options: ['Adın ne?', 'Nasılsın?', 'Nerelisin?', 'Kaç yaşındasın?'], correctIndex: 1, audioText: 'Tu çawa yî?', audioLang: 'tr' },
                { id: 'k4q5', type: 'translate', prompt: '"Navê min ..." ne demektir?', options: ['Evim ...', 'Adım ...', 'Yaşım ...', 'Şehrim ...'], correctIndex: 1, audioText: 'Navê min', audioLang: 'tr' },
                { id: 'k4q6', type: 'multipleChoice', prompt: '"Bibexşîne" ne anlama gelir?', options: ['Teşekkürler', 'Evet', 'Özür dilerim/Affedersiniz', 'Hayır'], correctIndex: 2, audioText: 'Bibexşîne', audioLang: 'tr' },
                { id: 'k4q7', type: 'translate', prompt: '"Erê" ne demektir?', options: ['Hayır', 'Belki', 'Evet', 'Tamam'], correctIndex: 2, audioText: 'Erê', audioLang: 'tr' },
            ] },
        { id: 'k5', title: 'Aile', description: 'Aile bireyleri Kürtçe', icon: '👨‍👩‍👧', xpReward: 20, questions: [
                { id: 'k5q1', type: 'translate', prompt: '"Dê" ne demektir?', options: ['Baba', 'Anne', 'Kardeş', 'Teyze'], correctIndex: 1, audioText: 'Dê', audioLang: 'tr' },
                { id: 'k5q2', type: 'multipleChoice', prompt: '"Bav" kelimesi kimi ifade eder?', options: ['Dede', 'Amca', 'Baba', 'Ağabey'], correctIndex: 2, audioText: 'Bav', audioLang: 'tr' },
                { id: 'k5q3', type: 'translate', prompt: '"Bira" ne demektir?', options: ['Kız kardeş', 'Erkek kardeş', 'Kuzen', 'Yeğen'], correctIndex: 1, audioText: 'Bira', audioLang: 'tr' },
                { id: 'k5q4', type: 'multipleChoice', prompt: '"Xwişk" kimi ifade eder?', options: ['Anne', 'Hala', 'Kız kardeş', 'Teyze'], correctIndex: 2, audioText: 'Xwişk', audioLang: 'tr' },
                { id: 'k5q5', type: 'translate', prompt: '"Bapîr" ne demektir?', options: ['Büyükanne', 'Amca', 'Dede/Büyükbaba', 'Dayı'], correctIndex: 2, audioText: 'Bapîr', audioLang: 'tr' },
                { id: 'k5q6', type: 'multipleChoice', prompt: '"Dapîr" kimi ifade eder?', options: ['Teyze', 'Büyükanne', 'Hala', 'Anneanne'], correctIndex: 1, audioText: 'Dapîr', audioLang: 'tr' },
                { id: 'k5q7', type: 'translate', prompt: '"Malbat" ne demektir?', options: ['Ev', 'Köy', 'Aile', 'Arkadaş'], correctIndex: 2, audioText: 'Malbat', audioLang: 'tr' },
            ] },
        { id: 'k6', title: 'Renkler ve Sayılar', description: 'Kürtçe renkler ve sayılar', icon: '🎨', xpReward: 20, questions: [
                { id: 'k6q1', type: 'translate', prompt: '"Sor" ne demektir?', options: ['Mavi', 'Yeşil', 'Kırmızı', 'Sarı'], correctIndex: 2, audioText: 'Sor', audioLang: 'tr' },
                { id: 'k6q2', type: 'multipleChoice', prompt: '"Kesk" kelimesi hangi rengi ifade eder?', options: ['Sarı', 'Mavi', 'Yeşil', 'Mor'], correctIndex: 2, audioText: 'Kesk', audioLang: 'tr' },
                { id: 'k6q3', type: 'translate', prompt: '"Yek" ne demektir?', options: ['İki', 'Üç', 'Bir', 'Dört'], correctIndex: 2, audioText: 'Yek', audioLang: 'tr' },
                { id: 'k6q4', type: 'multipleChoice', prompt: '"Didu" sayısı kaçtır?', options: ['1', '2', '3', '4'], correctIndex: 1, audioText: 'Didu', audioLang: 'tr' },
                { id: 'k6q5', type: 'translate', prompt: '"Şîn" ne demektir?', options: ['Kırmızı', 'Sarı', 'Mavi', 'Mor'], correctIndex: 2, audioText: 'Şîn', audioLang: 'tr' },
                { id: 'k6q6', type: 'multipleChoice', prompt: '"Zerd" hangi renktir?', options: ['Kırmızı', 'Yeşil', 'Beyaz', 'Sarı'], correctIndex: 3, audioText: 'Zerd', audioLang: 'tr' },
                { id: 'k6q7', type: 'translate', prompt: '"Pênc" ne demektir?', options: ['Dört', 'Altı', 'Beş', 'Yedi'], correctIndex: 2, audioText: 'Pênc', audioLang: 'tr' },
            ] },
        {
            id: "k7",
            title: "Sayılar",
            description: "Sayılar",
            icon: "1️⃣",
            xpReward: 10,
            questions: [
                { id: "k7q1", type: "multipleChoice", prompt: "\"Bir\" kelimesinin Kürtçesi nedir?", options: ["Yek", "Du", "Sê", "Çar"], correctIndex: 0, audioText: "Yek", audioLang: "tr" },
                { id: "k7q2", type: "multipleChoice", prompt: "\"İki\" kelimesinin Kürtçesi nedir?", options: ["Pênc", "Du", "Şeş", "Heft"], correctIndex: 1, audioText: "Du", audioLang: "tr" },
                { id: "k7q3", type: "multipleChoice", prompt: "\"Üç\" kelimesinin Kürtçesi nedir?", options: ["Yek", "Çar", "Sê", "Neh"], correctIndex: 2, audioText: "Sê", audioLang: "tr" },
                { id: "k7q4", type: "multipleChoice", prompt: "\"Dört\" kelimesinin Kürtçesi nedir?", options: ["Deh", "Çar", "Du", "Pênc"], correctIndex: 1, audioText: "Çar", audioLang: "tr" },
                { id: "k7q5", type: "multipleChoice", prompt: "\"Beş\" kelimesinin Kürtçesi nedir?", options: ["Pênc", "Sê", "Yek", "Şeş"], correctIndex: 0, audioText: "Pênc", audioLang: "tr" }
            ]
        },
        {
            id: "k8",
            title: "Günler ve Aylar",
            description: "Günler ve Aylar",
            icon: "📅",
            xpReward: 10,
            questions: [
                { id: "k8q1", type: "multipleChoice", prompt: "\"Pazartesi\" kelimesinin Kürtçesi nedir?", options: ["Sêşem", "Duşem", "Çarşem", "Pêncşem"], correctIndex: 1, audioText: "Duşem", audioLang: "tr" },
                { id: "k8q2", type: "multipleChoice", prompt: "\"Cuma\" kelimesinin Kürtçesi nedir?", options: ["Şemî", "Yekşem", "În", "Duşem"], correctIndex: 2, audioText: "În", audioLang: "tr" },
                { id: "k8q3", type: "multipleChoice", prompt: "\"Pazar\" kelimesinin Kürtçesi nedir?", options: ["Yekşem", "Sêşem", "În", "Şemî"], correctIndex: 0, audioText: "Yekşem", audioLang: "tr" },
                { id: "k8q4", type: "multipleChoice", prompt: "\"Gün\" kelimesinin Kürtçesi nedir?", options: ["Meh", "Sal", "Roj", "Dem"], correctIndex: 2, audioText: "Roj", audioLang: "tr" },
                { id: "k8q5", type: "multipleChoice", prompt: "\"Ay\" kelimesinin Kürtçesi nedir?", options: ["Sal", "Meh", "Hefte", "Roj"], correctIndex: 1, audioText: "Meh", audioLang: "tr" }
            ]
        },
        {
            id: "k9",
            title: "Saatler",
            description: "Saatler",
            icon: "⏰",
            xpReward: 10,
            questions: [
                { id: "k9q1", type: "multipleChoice", prompt: "\"Saat\" kelimesinin Kürtçesi nedir?", options: ["Dem", "Saet", "Roj", "Şev"], correctIndex: 1, audioText: "Saet", audioLang: "tr" },
                { id: "k9q2", type: "multipleChoice", prompt: "\"Zaman\" kelimesinin Kürtçesi nedir?", options: ["Saet", "Dem", "Sal", "Meh"], correctIndex: 1, audioText: "Dem", audioLang: "tr" },
                { id: "k9q3", type: "multipleChoice", prompt: "\"Sabah\" kelimesinin Kürtçesi nedir?", options: ["Êvar", "Şev", "Sibeh", "Nîvro"], correctIndex: 2, audioText: "Sibeh", audioLang: "tr" },
                { id: "k9q4", type: "multipleChoice", prompt: "\"Akşam\" kelimesinin Kürtçesi nedir?", options: ["Sibeh", "Şev", "Êvar", "Roj"], correctIndex: 2, audioText: "Êvar", audioLang: "tr" },
                { id: "k9q5", type: "multipleChoice", prompt: "\"Gece\" kelimesinin Kürtçesi nedir?", options: ["Êvar", "Şev", "Sibeh", "Saet"], correctIndex: 1, audioText: "Şev", audioLang: "tr" }
            ]
        },
        {
            id: "k10",
            title: "Evcil Hayvanlar",
            description: "Evcil Hayvanlar",
            icon: "🐶",
            xpReward: 10,
            questions: [
                { id: "k10q1", type: "multipleChoice", prompt: "\"Kedi\" kelimesinin Kürtçesi nedir?", options: ["Kûçik", "Pisîk", "Hesp", "Çivîk"], correctIndex: 1, audioText: "Pisîk", audioLang: "tr" },
                { id: "k10q2", type: "multipleChoice", prompt: "\"Köpek\" kelimesinin Kürtçesi nedir?", options: ["Mar", "Kûçik", "Şêr", "Pisîk"], correctIndex: 1, audioText: "Kûçik", audioLang: "tr" },
                { id: "k10q3", type: "multipleChoice", prompt: "\"At\" kelimesinin Kürtçesi nedir?", options: ["Hesp", "Çêlek", "Bizin", "Mîh"], correctIndex: 0, audioText: "Hesp", audioLang: "tr" },
                { id: "k10q4", type: "multipleChoice", prompt: "\"Kuş\" kelimesinin Kürtçesi nedir?", options: ["Masî", "Çûçik", "Kûçik", "Pisîk"], correctIndex: 1, audioText: "Çûçik", audioLang: "tr" },
                { id: "k10q5", type: "multipleChoice", prompt: "\"İnek\" kelimesinin Kürtçesi nedir?", options: ["Çêlek", "Hesp", "Ker", "Beraz"], correctIndex: 0, audioText: "Çêlek", audioLang: "tr" }
            ]
        },
        {
            id: "k11",
            title: "Vahşi Hayvanlar",
            description: "Vahşi Hayvanlar",
            icon: "🦁",
            xpReward: 10,
            questions: [
                { id: "k11q1", type: "multipleChoice", prompt: "\"Aslan\" kelimesinin Kürtçesi nedir?", options: ["Gur", "Şêr", "Hirç", "Rûvî"], correctIndex: 1, audioText: "Şêr", audioLang: "tr" },
                { id: "k11q2", type: "multipleChoice", prompt: "\"Ayı\" kelimesinin Kürtçesi nedir?", options: ["Şêr", "Mar", "Hirç", "Gur"], correctIndex: 2, audioText: "Hirç", audioLang: "tr" },
                { id: "k11q3", type: "multipleChoice", prompt: "\"Kurt\" kelimesinin Kürtçesi nedir?", options: ["Gur", "Rûvî", "Şêr", "Kûçik"], correctIndex: 0, audioText: "Gur", audioLang: "tr" },
                { id: "k11q4", type: "multipleChoice", prompt: "\"Yılan\" kelimesinin Kürtçesi nedir?", options: ["Mar", "Hirç", "Çûçik", "Masî"], correctIndex: 0, audioText: "Mar", audioLang: "tr" },
                { id: "k11q5", type: "multipleChoice", prompt: "\"Tilki\" kelimesinin Kürtçesi nedir?", options: ["Gur", "Şêr", "Rûvî", "Mar"], correctIndex: 2, audioText: "Rûvî", audioLang: "tr" }
            ]
        },
        {
            id: "k12",
            title: "Doğa",
            description: "Doğa",
            icon: "🌳",
            xpReward: 10,
            questions: [
                { id: "k12q1", type: "multipleChoice", prompt: "\"Ağaç\" kelimesinin Kürtçesi nedir?", options: ["Av", "Dar", "Çiya", "Ax"], correctIndex: 1, audioText: "Dar", audioLang: "tr" },
                { id: "k12q2", type: "multipleChoice", prompt: "\"Su\" kelimesinin Kürtçesi nedir?", options: ["Av", "Agir", "Dar", "Roj"], correctIndex: 0, audioText: "Av", audioLang: "tr" },
                { id: "k12q3", type: "multipleChoice", prompt: "\"Ateş\" kelimesinin Kürtçesi nedir?", options: ["Çiya", "Agir", "Av", "Dar"], correctIndex: 1, audioText: "Agir", audioLang: "tr" },
                { id: "k12q4", type: "multipleChoice", prompt: "\"Dağ\" kelimesinin Kürtçesi nedir?", options: ["Ax", "Av", "Çiya", "Agir"], correctIndex: 2, audioText: "Çiya", audioLang: "tr" },
                { id: "k12q5", type: "multipleChoice", prompt: "\"Toprak\" kelimesinin Kürtçesi nedir?", options: ["Dar", "Ax", "Çiya", "Av"], correctIndex: 1, audioText: "Ax", audioLang: "tr" }
            ]
        },
        {
            id: "k13",
            title: "Meyveler",
            description: "Meyveler",
            icon: "🍎",
            xpReward: 10,
            questions: [
                { id: "k13q1", type: "multipleChoice", prompt: "\"Elma\" kelimesinin Kürtçesi nedir?", options: ["Tirî", "Sêv", "Hirmî", "Zebeş"], correctIndex: 1, audioText: "Sêv", audioLang: "tr" },
                { id: "k13q2", type: "multipleChoice", prompt: "\"Armut\" kelimesinin Kürtçesi nedir?", options: ["Sêv", "Hinar", "Hirmî", "Porteqal"], correctIndex: 2, audioText: "Hirmî", audioLang: "tr" },
                { id: "k13q3", type: "multipleChoice", prompt: "\"Üzüm\" kelimesinin Kürtçesi nedir?", options: ["Tirî", "Sêv", "Mûz", "Zebeş"], correctIndex: 0, audioText: "Tirî", audioLang: "tr" },
                { id: "k13q4", type: "multipleChoice", prompt: "\"Karpuz\" kelimesinin Kürtçesi nedir?", options: ["Zebeş", "Hirmî", "Tirî", "Sêv"], correctIndex: 0, audioText: "Zebeş", audioLang: "tr" },
                { id: "k13q5", type: "multipleChoice", prompt: "\"Nar\" kelimesinin Kürtçesi nedir?", options: ["Mûz", "Zebeş", "Sêv", "Hinar"], correctIndex: 3, audioText: "Hinar", audioLang: "tr" }
            ]
        },
        {
            id: "k14",
            title: "Sebzeler",
            description: "Sebzeler",
            icon: "🥕",
            xpReward: 10,
            questions: [
                { id: "k14q1", type: "multipleChoice", prompt: "\"Soğan\" kelimesinin Kürtçesi nedir?", options: ["Sîr", "Pîvaz", "Kartol", "Xiyar"], correctIndex: 1, audioText: "Pîvaz", audioLang: "tr" },
                { id: "k14q2", type: "multipleChoice", prompt: "\"Sarımsak\" kelimesinin Kürtçesi nedir?", options: ["Pîvaz", "Sîr", "Kartol", "Bacana sor"], correctIndex: 1, audioText: "Sîr", audioLang: "tr" },
                { id: "k14q3", type: "multipleChoice", prompt: "\"Patates\" kelimesinin Kürtçesi nedir?", options: ["Kartol", "Xiyar", "Pîvaz", "Sîr"], correctIndex: 0, audioText: "Kartol", audioLang: "tr" },
                { id: "k14q4", type: "multipleChoice", prompt: "\"Domates\" kelimesinin Kürtçesi nedir?", options: ["Xiyar", "Sîr", "Firingî", "Kartol"], correctIndex: 2, audioText: "Firingî", audioLang: "tr" },
                { id: "k14q5", type: "multipleChoice", prompt: "\"Salatalık\" kelimesinin Kürtçesi nedir?", options: ["Kartol", "Xiyar", "Pîvaz", "Firingî"], correctIndex: 1, audioText: "Xiyar", audioLang: "tr" }
            ]
        },
        {
            id: "k15",
            title: "İçecekler",
            description: "İçecekler",
            icon: "☕",
            xpReward: 10,
            questions: [
                { id: "k15q1", type: "multipleChoice", prompt: "\"Çay\" kelimesinin Kürtçesi nedir?", options: ["Qehwe", "Çay", "Şîr", "Av"], correctIndex: 1, audioText: "Çay", audioLang: "tr" },
                { id: "k15q2", type: "multipleChoice", prompt: "\"Süt\" kelimesinin Kürtçesi nedir?", options: ["Şîr", "Dew", "Av", "Çay"], correctIndex: 0, audioText: "Şîr", audioLang: "tr" },
                { id: "k15q3", type: "multipleChoice", prompt: "\"Kahve\" kelimesinin Kürtçesi nedir?", options: ["Av", "Şîr", "Çay", "Qehwe"], correctIndex: 3, audioText: "Qehwe", audioLang: "tr" },
                { id: "k15q4", type: "multipleChoice", prompt: "\"Su\" kelimesinin Kürtçesi nedir?", options: ["Şîr", "Av", "Qehwe", "Dew"], correctIndex: 1, audioText: "Av", audioLang: "tr" },
                { id: "k15q5", type: "multipleChoice", prompt: "\"Ayran\" kelimesinin Kürtçesi nedir?", options: ["Dew", "Çay", "Şîr", "Qehwe"], correctIndex: 0, audioText: "Dew", audioLang: "tr" }
            ]
        },
        {
            id: "k16",
            title: "Odalar",
            description: "Odalar",
            icon: "🏠",
            xpReward: 10,
            questions: [
                { id: "k16q1", type: "multipleChoice", prompt: "\"Ev\" kelimesinin Kürtçesi nedir?", options: ["Mal", "Ode", "Derî", "Dîwar"], correctIndex: 0, audioText: "Mal", audioLang: "tr" },
                { id: "k16q2", type: "multipleChoice", prompt: "\"Oda\" kelimesinin Kürtçesi nedir?", options: ["Derî", "Dîwar", "Ode", "Mal"], correctIndex: 2, audioText: "Ode", audioLang: "tr" },
                { id: "k16q3", type: "multipleChoice", prompt: "\"Kapı\" kelimesinin Kürtçesi nedir?", options: ["Pace", "Derî", "Mal", "Ode"], correctIndex: 1, audioText: "Derî", audioLang: "tr" },
                { id: "k16q4", type: "multipleChoice", prompt: "\"Pencere\" kelimesinin Kürtçesi nedir?", options: ["Derî", "Pace", "Dîwar", "Ban"], correctIndex: 1, audioText: "Pace", audioLang: "tr" },
                { id: "k16q5", type: "multipleChoice", prompt: "\"Duvar\" kelimesinin Kürtçesi nedir?", options: ["Ban", "Mal", "Ode", "Dîwar"], correctIndex: 3, audioText: "Dîwar", audioLang: "tr" }
            ]
        },
        {
            id: "k17",
            title: "Mobilyalar",
            description: "Mobilyalar",
            icon: "🛋️",
            xpReward: 10,
            questions: [
                { id: "k17q1", type: "multipleChoice", prompt: "\"Masa\" kelimesinin Kürtçesi nedir?", options: ["Kursî", "Mase", "Nivîn", "Dolab"], correctIndex: 1, audioText: "Mase", audioLang: "tr" },
                { id: "k17q2", type: "multipleChoice", prompt: "\"Sandalye\" kelimesinin Kürtçesi nedir?", options: ["Nivîn", "Dolab", "Kursî", "Mase"], correctIndex: 2, audioText: "Kursî", audioLang: "tr" },
                { id: "k17q3", type: "multipleChoice", prompt: "\"Yatak\" kelimesinin Kürtçesi nedir?", options: ["Mase", "Nivîn", "Kursî", "Xalîç"], correctIndex: 1, audioText: "Nivîn", audioLang: "tr" },
                { id: "k17q4", type: "multipleChoice", prompt: "\"Dolap\" kelimesinin Kürtçesi nedir?", options: ["Dolab", "Mase", "Nivîn", "Kursî"], correctIndex: 0, audioText: "Dolab", audioLang: "tr" },
                { id: "k17q5", type: "multipleChoice", prompt: "\"Halı\" kelimesinin Kürtçesi nedir?", options: ["Xalîçe", "Dolab", "Kursî", "Nivîn"], correctIndex: 0, audioText: "Xalîçe", audioLang: "tr" }
            ]
        },
        {
            id: "k18",
            title: "Mutfak Eşyaları",
            description: "Mutfak Eşyaları",
            icon: "🍽️",
            xpReward: 10,
            questions: [
                { id: "k18q1", type: "multipleChoice", prompt: "\"Kaşık\" kelimesinin Kürtçesi nedir?", options: ["Kêr", "Kevçî", "Çetel", "Sênî"], correctIndex: 1, audioText: "Kevçî", audioLang: "tr" },
                { id: "k18q2", type: "multipleChoice", prompt: "\"Çatal\" kelimesinin Kürtçesi nedir?", options: ["Kevçî", "Sênî", "Çetel", "Kêr"], correctIndex: 2, audioText: "Çetel", audioLang: "tr" },
                { id: "k18q3", type: "multipleChoice", prompt: "\"Bıçak\" kelimesinin Kürtçesi nedir?", options: ["Kêr", "Çetel", "Berdax", "Sênî"], correctIndex: 0, audioText: "Kêr", audioLang: "tr" },
                { id: "k18q4", type: "multipleChoice", prompt: "\"Tabak\" kelimesinin Kürtçesi nedir?", options: ["Berdax", "Kevçî", "Kêr", "Sênî"], correctIndex: 3, audioText: "Sênî", audioLang: "tr" },
                { id: "k18q5", type: "multipleChoice", prompt: "\"Bardak\" kelimesinin Kürtçesi nedir?", options: ["Sênî", "Berdax", "Çetel", "Kêr"], correctIndex: 1, audioText: "Berdax", audioLang: "tr" }
            ]
        },
        {
            id: "k19",
            title: "Vücut Bölümleri",
            description: "Vücut Bölümleri",
            icon: "💪",
            xpReward: 10,
            questions: [
                { id: "k19q1", type: "multipleChoice", prompt: "\"Baş\" kelimesinin Kürtçesi nedir?", options: ["Çav", "Dest", "Ser", "Pê"], correctIndex: 2, audioText: "Ser", audioLang: "tr" },
                { id: "k19q2", type: "multipleChoice", prompt: "\"Göz\" kelimesinin Kürtçesi nedir?", options: ["Poz", "Çav", "Pê", "Ser"], correctIndex: 1, audioText: "Çav", audioLang: "tr" },
                { id: "k19q3", type: "multipleChoice", prompt: "\"El\" kelimesinin Kürtçesi nedir?", options: ["Dest", "Ser", "Poz", "Çav"], correctIndex: 0, audioText: "Dest", audioLang: "tr" },
                { id: "k19q4", type: "multipleChoice", prompt: "\"Ayak\" kelimesinin Kürtçesi nedir?", options: ["Ser", "Dest", "Çav", "Pê"], correctIndex: 3, audioText: "Pê", audioLang: "tr" },
                { id: "k19q5", type: "multipleChoice", prompt: "\"Burun\" kelimesinin Kürtçesi nedir?", options: ["Pê", "Poz", "Dest", "Ser"], correctIndex: 1, audioText: "Poz", audioLang: "tr" }
            ]
        },
        {
            id: "k20",
            title: "Hastalıklar",
            description: "Hastalıklar",
            icon: "🤒",
            xpReward: 10,
            questions: [
                { id: "k20q1", type: "multipleChoice", prompt: "\"Hasta\" kelimesinin Kürtçesi nedir?", options: ["Êş", "Nexweş", "Agir", "Derman"], correctIndex: 1, audioText: "Nexweş", audioLang: "tr" },
                { id: "k20q2", type: "multipleChoice", prompt: "\"Ağrı\" kelimesinin Kürtçesi nedir?", options: ["Nexweş", "Agir", "Êş", "Derman"], correctIndex: 2, audioText: "Êş", audioLang: "tr" },
                { id: "k20q3", type: "multipleChoice", prompt: "\"Ateş (vücut)\" kelimesinin Kürtçesi nedir?", options: ["Êş", "Derman", "Nexweş", "Agir"], correctIndex: 3, audioText: "Agir", audioLang: "tr" },
                { id: "k20q4", type: "multipleChoice", prompt: "\"Öksürük\" kelimesinin Kürtçesi nedir?", options: ["Kuxik", "Agir", "Êş", "Nexweş"], correctIndex: 0, audioText: "Kuxik", audioLang: "tr" },
                { id: "k20q5", type: "multipleChoice", prompt: "\"Soğuk algınlığı\" kelimesinin Kürtçesi nedir?", options: ["Agir", "Sermagirtin", "Kuxik", "Êş"], correctIndex: 1, audioText: "Sermagirtin", audioLang: "tr" }
            ]
        },
        {
            id: "k21",
            title: "Hastanede",
            description: "Hastanede",
            icon: "🏥",
            xpReward: 10,
            questions: [
                { id: "k21q1", type: "multipleChoice", prompt: "\"Hastane\" kelimesinin Kürtçesi nedir?", options: ["Nexweşxane", "Bijîşk", "Derman", "Derzî"], correctIndex: 0, audioText: "Nexweşxane", audioLang: "tr" },
                { id: "k21q2", type: "multipleChoice", prompt: "\"Doktor\" kelimesinin Kürtçesi nedir?", options: ["Hemşîre", "Bijîşk", "Derman", "Derzî"], correctIndex: 1, audioText: "Bijîşk", audioLang: "tr" },
                { id: "k21q3", type: "multipleChoice", prompt: "\"Hemşire\" kelimesinin Kürtçesi nedir?", options: ["Bijîşk", "Nexweşxane", "Hemşîre", "Derzî"], correctIndex: 2, audioText: "Hemşîre", audioLang: "tr" },
                { id: "k21q4", type: "multipleChoice", prompt: "\"İlaç\" kelimesinin Kürtçesi nedir?", options: ["Derman", "Bijîşk", "Hemşîre", "Derzî"], correctIndex: 0, audioText: "Derman", audioLang: "tr" },
                { id: "k21q5", type: "multipleChoice", prompt: "\"İğne\" kelimesinin Kürtçesi nedir?", options: ["Derman", "Nexweşxane", "Derzî", "Bijîşk"], correctIndex: 2, audioText: "Derzî", audioLang: "tr" }
            ]
        },
        {
            id: "k22",
            title: "Kıyafetler",
            description: "Kıyafetler",
            icon: "👕",
            xpReward: 10,
            questions: [
                { id: "k22q1", type: "multipleChoice", prompt: "\"Elbise\" kelimesinin Kürtçesi nedir?", options: ["Cil", "Kiras", "Pantor", "Pêlav"], correctIndex: 0, audioText: "Cil", audioLang: "tr" },
                { id: "k22q2", type: "multipleChoice", prompt: "\"Gömlek\" kelimesinin Kürtçesi nedir?", options: ["Pantor", "Cil", "Kiras", "Kum"], correctIndex: 2, audioText: "Kiras", audioLang: "tr" },
                { id: "k22q3", type: "multipleChoice", prompt: "\"Pantolon\" kelimesinin Kürtçesi nedir?", options: ["Pêlav", "Pantor", "Cil", "Kiras"], correctIndex: 1, audioText: "Pantor", audioLang: "tr" },
                { id: "k22q4", type: "multipleChoice", prompt: "\"Ayakkabı\" kelimesinin Kürtçesi nedir?", options: ["Kum", "Cil", "Pêlav", "Pantor"], correctIndex: 2, audioText: "Pêlav", audioLang: "tr" },
                { id: "k22q5", type: "multipleChoice", prompt: "\"Şapka\" kelimesinin Kürtçesi nedir?", options: ["Kiras", "Kum", "Pêlav", "Cil"], correctIndex: 1, audioText: "Kum", audioLang: "tr" }
            ]
        },
        {
            id: "k23",
            title: "Renklerle Giyim",
            description: "Renklerle Giyim",
            icon: "👗",
            xpReward: 10,
            questions: [
                { id: "k23q1", type: "multipleChoice", prompt: "\"Kırmızı elbise\" Kürtçe nasıl söylenir?", options: ["Cilê şîn", "Cilê sor", "Kirasê reş", "Pêlava spî"], correctIndex: 1, audioText: "Cilê sor", audioLang: "tr" },
                { id: "k23q2", type: "multipleChoice", prompt: "\"Siyah ayakkabı\" Kürtçe nasıl söylenir?", options: ["Pêlava reş", "Cilê sor", "Kumê spî", "Pantorê şîn"], correctIndex: 0, audioText: "Pêlava reş", audioLang: "tr" },
                { id: "k23q3", type: "multipleChoice", prompt: "\"Beyaz şapka\" Kürtçe nasıl söylenir?", options: ["Pantorê reş", "Kirasê sor", "Kumê spî", "Cilê kesk"], correctIndex: 2, audioText: "Kumê spî", audioLang: "tr" },
                { id: "k23q4", type: "multipleChoice", prompt: "\"Mavi pantolon\" Kürtçe nasıl söylenir?", options: ["Pantorê şîn", "Cilê sor", "Pêlava reş", "Kumê spî"], correctIndex: 0, audioText: "Pantorê şîn", audioLang: "tr" },
                { id: "k23q5", type: "multipleChoice", prompt: "\"Yeşil gömlek\" Kürtçe nasıl söylenir?", options: ["Cilê sor", "Kirasê kesk", "Pantorê şîn", "Pêlava reş"], correctIndex: 1, audioText: "Kirasê kesk", audioLang: "tr" }
            ]
        },
        {
            id: "k24",
            title: "Pazarda",
            description: "Pazarda",
            icon: "🛍️",
            xpReward: 10,
            questions: [
                { id: "k24q1", type: "multipleChoice", prompt: "\"Pazar\" kelimesinin Kürtçesi nedir?", options: ["Bazar", "Pere", "Biha", "Erzan"], correctIndex: 0, audioText: "Bazar", audioLang: "tr" },
                { id: "k24q2", type: "multipleChoice", prompt: "\"Para\" kelimesinin Kürtçesi nedir?", options: ["Biha", "Erzan", "Pere", "Bazar"], correctIndex: 2, audioText: "Pere", audioLang: "tr" },
                { id: "k24q3", type: "multipleChoice", prompt: "\"Pahalı\" kelimesinin Kürtçesi nedir?", options: ["Pere", "Biha", "Erzan", "Bazar"], correctIndex: 1, audioText: "Biha", audioLang: "tr" },
                { id: "k24q4", type: "multipleChoice", prompt: "\"Ucuz\" kelimesinin Kürtçesi nedir?", options: ["Erzan", "Biha", "Pere", "Bazar"], correctIndex: 0, audioText: "Erzan", audioLang: "tr" },
                { id: "k24q5", type: "multipleChoice", prompt: "\"Satın almak\" kelimesinin Kürtçesi nedir?", options: ["Firotin", "Kirîn", "Biha", "Erzan"], correctIndex: 1, audioText: "Kirîn", audioLang: "tr" }
            ]
        },
        {
            id: "k25",
            title: "Meslekler 1",
            description: "Meslekler 1",
            icon: "👨⚕️",
            xpReward: 10,
            questions: [
                { id: "k25q1", type: "multipleChoice", prompt: "\"Öğretmen\" kelimesinin Kürtçesi nedir?", options: ["Xwendekar", "Mamoste", "Karker", "Cotkar"], correctIndex: 1, audioText: "Mamoste", audioLang: "tr" },
                { id: "k25q2", type: "multipleChoice", prompt: "\"Öğrenci\" kelimesinin Kürtçesi nedir?", options: ["Mamoste", "Karker", "Xwendekar", "Cotkar"], correctIndex: 2, audioText: "Xwendekar", audioLang: "tr" },
                { id: "k25q3", type: "multipleChoice", prompt: "\"İşçi\" kelimesinin Kürtçesi nedir?", options: ["Cotkar", "Xwendekar", "Karker", "Mamoste"], correctIndex: 2, audioText: "Karker", audioLang: "tr" },
                { id: "k25q4", type: "multipleChoice", prompt: "\"Çiftçi\" kelimesinin Kürtçesi nedir?", options: ["Mamoste", "Cotkar", "Xwendekar", "Karker"], correctIndex: 1, audioText: "Cotkar", audioLang: "tr" },
                { id: "k25q5", type: "multipleChoice", prompt: "\"Yazar\" kelimesinin Kürtçesi nedir?", options: ["Nivîskar", "Karker", "Cotkar", "Mamoste"], correctIndex: 0, audioText: "Nivîskar", audioLang: "tr" }
            ]
        },
        {
            id: "k26",
            title: "Meslekler 2",
            description: "Meslekler 2",
            icon: "👩🏫",
            xpReward: 10,
            questions: [
                { id: "k26q1", type: "multipleChoice", prompt: "\"Polis\" kelimesinin Kürtçesi nedir?", options: ["Polîs", "Şofêr", "Endezyar", "Parêzer"], correctIndex: 0, audioText: "Polîs", audioLang: "tr" },
                { id: "k26q2", type: "multipleChoice", prompt: "\"Şoför\" kelimesinin Kürtçesi nedir?", options: ["Endezyar", "Polîs", "Şofêr", "Aşpêj"], correctIndex: 2, audioText: "Şofêr", audioLang: "tr" },
                { id: "k26q3", type: "multipleChoice", prompt: "\"Mühendis\" kelimesinin Kürtçesi nedir?", options: ["Aşpêj", "Endezyar", "Parêzer", "Polîs"], correctIndex: 1, audioText: "Endezyar", audioLang: "tr" },
                { id: "k26q4", type: "multipleChoice", prompt: "\"Avukat\" kelimesinin Kürtçesi nedir?", options: ["Polîs", "Şofêr", "Endezyar", "Parêzer"], correctIndex: 3, audioText: "Parêzer", audioLang: "tr" },
                { id: "k26q5", type: "multipleChoice", prompt: "\"Aşçı\" kelimesinin Kürtçesi nedir?", options: ["Parêzer", "Aşpêj", "Polîs", "Şofêr"], correctIndex: 1, audioText: "Aşpêj", audioLang: "tr" }
            ]
        },
        {
            id: 'k27',
            title: 'İş Yerinde',
            description: 'İş Yerinde',
            icon: '🏢',
            xpReward: 20,
            questions: [
                {
                    id: 'k27q1',
                    type: 'multipleChoice',
                    prompt: '"İş" kelimesinin Kürtçesi nedir?',
                    options: ['xebat', 'av', 'mal', 'pirtûk'],
                    correctIndex: 0,
                    audioText: 'xebat',
                    audioLang: 'tr'
                },
                {
                    id: 'k27q2',
                    type: 'multipleChoice',
                    prompt: '"Karker" ne demektir?',
                    options: ['Patron', 'Ofis', 'Çalışan', 'İş'],
                    correctIndex: 2,
                    audioText: 'karker',
                    audioLang: 'tr'
                },
                {
                    id: 'k27q3',
                    type: 'multipleChoice',
                    prompt: '"Ofis" kelimesinin Kürtçesi nedir?',
                    options: ['dibistan', 'kargeh', 'nexweşxane', 'mal'],
                    correctIndex: 1,
                    audioText: 'kargeh',
                    audioLang: 'tr'
                },
                {
                    id: 'k27q4',
                    type: 'multipleChoice',
                    prompt: '"Civîn" ne anlama gelir?',
                    options: ['Toplantı', 'İş', 'Çalışan', 'Müdür'],
                    correctIndex: 0,
                    audioText: 'civîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k27q5',
                    type: 'multipleChoice',
                    prompt: '"Serok" ne demektir?',
                    options: ['Kedi', 'Köpek', 'Araba', 'Patron/Başkan'],
                    correctIndex: 3,
                    audioText: 'serok',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k28',
            title: 'Mekanlar',
            description: 'Mekanlar',
            icon: '🏙️',
            xpReward: 20,
            questions: [
                {
                    id: 'k28q1',
                    type: 'multipleChoice',
                    prompt: '"Nexweşxane" ne demektir?',
                    options: ['Hastane', 'Okul', 'Park', 'Ev'],
                    correctIndex: 0,
                    audioText: 'nexweşxane',
                    audioLang: 'tr'
                },
                {
                    id: 'k28q2',
                    type: 'multipleChoice',
                    prompt: '"Okul" Kürtçe nasıl söylenir?',
                    options: ['bazar', 'nexweşxane', 'dibistan', 'derya'],
                    correctIndex: 2,
                    audioText: 'dibistan',
                    audioLang: 'tr'
                },
                {
                    id: 'k28q3',
                    type: 'multipleChoice',
                    prompt: '"Park" kelimesinin karşılığı nedir?',
                    options: ['mal', 'çiya', 'av', 'park'],
                    correctIndex: 3,
                    audioText: 'park',
                    audioLang: 'tr'
                },
                {
                    id: 'k28q4',
                    type: 'multipleChoice',
                    prompt: '"Xwaringeh" ne demektir?',
                    options: ['Hastane', 'Okul', 'Banka', 'Restoran'],
                    correctIndex: 3,
                    audioText: 'xwaringeh',
                    audioLang: 'tr'
                },
                {
                    id: 'k28q5',
                    type: 'multipleChoice',
                    prompt: '"Banka" kelimesinin Kürtçesi nedir?',
                    options: ['bank', 'pirtûkxane', 'dikan', 'mal'],
                    correctIndex: 0,
                    audioText: 'bank',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k29',
            title: 'Taşıtlar',
            description: 'Taşıtlar',
            icon: '🚗',
            xpReward: 20,
            questions: [
                {
                    id: 'k29q1',
                    type: 'multipleChoice',
                    prompt: '"Otomobil" nedir?',
                    options: ['otobus', 'erebe', 'trên', 'duçerxe'],
                    correctIndex: 1,
                    audioText: 'erebe',
                    audioLang: 'tr'
                },
                {
                    id: 'k29q2',
                    type: 'multipleChoice',
                    prompt: '"Otobüs" kelimesi nedir?',
                    options: ['otobus', 'balafir', 'erebe', 'gemî'],
                    correctIndex: 0,
                    audioText: 'otobus',
                    audioLang: 'tr'
                },
                {
                    id: 'k29q3',
                    type: 'multipleChoice',
                    prompt: '"Tren" kelimesinin karşılığı nedir?',
                    options: ['erebe', 'otobus', 'trên', 'duçerxe'],
                    correctIndex: 2,
                    audioText: 'trên',
                    audioLang: 'tr'
                },
                {
                    id: 'k29q4',
                    type: 'multipleChoice',
                    prompt: '"Balafir" ne demektir?',
                    options: ['Tren', 'Araba', 'Bisiklet', 'Uçak'],
                    correctIndex: 3,
                    audioText: 'balafir',
                    audioLang: 'tr'
                },
                {
                    id: 'k29q5',
                    type: 'multipleChoice',
                    prompt: '"Bisiklet" nasıl söylenir?',
                    options: ['duçerxe', 'trên', 'erebe', 'balafir'],
                    correctIndex: 0,
                    audioText: 'duçerxe',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k30',
            title: 'Yön Sorma',
            description: 'Yön Sorma',
            icon: '🗺️',
            xpReward: 20,
            questions: [
                {
                    id: 'k30q1',
                    type: 'multipleChoice',
                    prompt: '"Rast" ne anlama gelir?',
                    options: ['Sağ', 'Sol', 'İleri', 'Geri'],
                    correctIndex: 0,
                    audioText: 'rast',
                    audioLang: 'tr'
                },
                {
                    id: 'k30q2',
                    type: 'multipleChoice',
                    prompt: '"Sol" Kürtçe nasıl söylenir?',
                    options: ['rast', 'pêş', 'çep', 'paş'],
                    correctIndex: 2,
                    audioText: 'çep',
                    audioLang: 'tr'
                },
                {
                    id: 'k30q3',
                    type: 'multipleChoice',
                    prompt: '"Pêş" ne demektir?',
                    options: ['Geri', 'İleri', 'Sağ', 'Sol'],
                    correctIndex: 1,
                    audioText: 'pêş',
                    audioLang: 'tr'
                },
                {
                    id: 'k30q4',
                    type: 'multipleChoice',
                    prompt: '"Geri" kelimesinin karşılığı nedir?',
                    options: ['paş', 'pêş', 'rast', 'çep'],
                    correctIndex: 0,
                    audioText: 'paş',
                    audioLang: 'tr'
                },
                {
                    id: 'k30q5',
                    type: 'multipleChoice',
                    prompt: '"Li ku" ne anlama gelir?',
                    options: ['Ne zaman', 'Kim', 'Nasıl', 'Nerede'],
                    correctIndex: 3,
                    audioText: 'li ku',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k31',
            title: 'Sabah Rutini',
            description: 'Sabah Rutini',
            icon: '🌅',
            xpReward: 20,
            questions: [
                {
                    id: 'k31q1',
                    type: 'multipleChoice',
                    prompt: '"Şiyarbûn" ne demektir?',
                    options: ['Uyumak', 'Uyanmak', 'Yemek', 'İçmek'],
                    correctIndex: 1,
                    audioText: 'şiyarbûn',
                    audioLang: 'tr'
                },
                {
                    id: 'k31q2',
                    type: 'multipleChoice',
                    prompt: '"Rû şuştin" nedir?',
                    options: ['Yüz yıkamak', 'Uyanmak', 'Giyinmek', 'Kahvaltı yapmak'],
                    correctIndex: 0,
                    audioText: 'rû şuştin',
                    audioLang: 'tr'
                },
                {
                    id: 'k31q3',
                    type: 'multipleChoice',
                    prompt: '"Taştê xwarin" ne anlama gelir?',
                    options: ['Akşam yemeği', 'Uyumak', 'Çalışmak', 'Kahvaltı yapmak'],
                    correctIndex: 3,
                    audioText: 'taştê xwarin',
                    audioLang: 'tr'
                },
                {
                    id: 'k31q4',
                    type: 'multipleChoice',
                    prompt: '"Giyinmek" nasıl söylenir?',
                    options: ['derketin', 'xwarin', 'li xwe kirin', 'rûniştin'],
                    correctIndex: 2,
                    audioText: 'li xwe kirin',
                    audioLang: 'tr'
                },
                {
                    id: 'k31q5',
                    type: 'multipleChoice',
                    prompt: '"Evden çıkmak" nedir?',
                    options: ['vegeriyan malê', 'ji malê derketin', 'şiyarbûn', 'razan'],
                    correctIndex: 1,
                    audioText: 'ji malê derketin',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k32',
            title: 'İş ve Okul',
            description: 'İş ve Okul',
            icon: '🏫',
            xpReward: 20,
            questions: [
                {
                    id: 'k32q1',
                    type: 'multipleChoice',
                    prompt: '"Xebitîn" ne demektir?',
                    options: ['Çalışmak', 'Okumak', 'Oynamak', 'Uyumak'],
                    correctIndex: 0,
                    audioText: 'xebitîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k32q2',
                    type: 'multipleChoice',
                    prompt: '"Xwendin" nedir?',
                    options: ['Yazmak', 'Konuşmak', 'Okumak', 'Dinlemek'],
                    correctIndex: 2,
                    audioText: 'xwendin',
                    audioLang: 'tr'
                },
                {
                    id: 'k32q3',
                    type: 'multipleChoice',
                    prompt: '"Öğrenmek" nasıl söylenir?',
                    options: ['xwendin', 'nivîsandin', 'axaftin', 'hînbûn'],
                    correctIndex: 3,
                    audioText: 'hînbûn',
                    audioLang: 'tr'
                },
                {
                    id: 'k32q4',
                    type: 'multipleChoice',
                    prompt: '"Mamoste" ne anlama gelir?',
                    options: ['Öğrenci', 'Öğretmen', 'Müdür', 'Okul'],
                    correctIndex: 1,
                    audioText: 'mamoste',
                    audioLang: 'tr'
                },
                {
                    id: 'k32q5',
                    type: 'multipleChoice',
                    prompt: '"Öğrenci" kelimesinin karşılığı nedir?',
                    options: ['mamoste', 'pirtûk', 'xwendekar', 'pol'],
                    correctIndex: 2,
                    audioText: 'xwendekar',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k33',
            title: 'Akşam Rutini',
            description: 'Akşam Rutini',
            icon: '🌃',
            xpReward: 20,
            questions: [
                {
                    id: 'k33q1',
                    type: 'multipleChoice',
                    prompt: '"Eve dönmek" nedir?',
                    options: ['çûn kar', 'vegeriyan malê', 'şiyarbûn', 'derketin'],
                    correctIndex: 1,
                    audioText: 'vegeriyan malê',
                    audioLang: 'tr'
                },
                {
                    id: 'k33q2',
                    type: 'multipleChoice',
                    prompt: '"Şîv" ne demektir?',
                    options: ['Kahvaltı', 'Öğle yemeği', 'Akşam yemeği', 'Su'],
                    correctIndex: 2,
                    audioText: 'şîv',
                    audioLang: 'tr'
                },
                {
                    id: 'k33q3',
                    type: 'multipleChoice',
                    prompt: '"Televizyon izlemek" nasıl söylenir?',
                    options: ['li televîzyonê temaşe kirin', 'pirtûk xwendin', 'razan', 'xebitîn'],
                    correctIndex: 0,
                    audioText: 'li televîzyonê temaşe kirin',
                    audioLang: 'tr'
                },
                {
                    id: 'k33q4',
                    type: 'multipleChoice',
                    prompt: '"Razan" ne anlama gelir?',
                    options: ['Uyanmak', 'Koşmak', 'Yürümek', 'Uyumak'],
                    correctIndex: 3,
                    audioText: 'razan',
                    audioLang: 'tr'
                },
                {
                    id: 'k33q5',
                    type: 'multipleChoice',
                    prompt: '"Westiyayî" nedir?',
                    options: ['Mutlu', 'Kızgın', 'Yorgun', 'Üzgün'],
                    correctIndex: 2,
                    audioText: 'westiyayî',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k34',
            title: 'Hisler',
            description: 'Hisler',
            icon: '😊',
            xpReward: 20,
            questions: [
                {
                    id: 'k34q1',
                    type: 'multipleChoice',
                    prompt: '"Bextewar" ne demektir?',
                    options: ['Üzgün', 'Kızgın', 'Şaşkın', 'Mutlu'],
                    correctIndex: 3,
                    audioText: 'bextewar',
                    audioLang: 'tr'
                },
                {
                    id: 'k34q2',
                    type: 'multipleChoice',
                    prompt: '"Xemgîn" nedir?',
                    options: ['Üzgün', 'Mutlu', 'Korkmuş', 'Tembel'],
                    correctIndex: 0,
                    audioText: 'xemgîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k34q3',
                    type: 'multipleChoice',
                    prompt: '"Hêrsbûyî" ne anlama gelir?',
                    options: ['Mutlu', 'Kızgın', 'Üzgün', 'Zeki'],
                    correctIndex: 1,
                    audioText: 'hêrsbûyî',
                    audioLang: 'tr'
                },
                {
                    id: 'k34q4',
                    type: 'multipleChoice',
                    prompt: '"Tirsiyayî" nedir?',
                    options: ['Şaşkın', 'Mutlu', 'Kızgın', 'Korkmuş'],
                    correctIndex: 3,
                    audioText: 'tirsiyayî',
                    audioLang: 'tr'
                },
                {
                    id: 'k34q5',
                    type: 'multipleChoice',
                    prompt: '"Matmayî" ne demektir?',
                    options: ['Korkmuş', 'Üzgün', 'Şaşkın', 'Mutlu'],
                    correctIndex: 2,
                    audioText: 'matmayî',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k35',
            title: 'Karakter Özellikleri',
            description: 'Karakter Özellikleri',
            icon: '🧠',
            xpReward: 20,
            questions: [
                {
                    id: 'k35q1',
                    type: 'multipleChoice',
                    prompt: '"Baş" ne demektir?',
                    options: ['İyi', 'Kötü', 'Çalışkan', 'Tembel'],
                    correctIndex: 0,
                    audioText: 'baş',
                    audioLang: 'tr'
                },
                {
                    id: 'k35q2',
                    type: 'multipleChoice',
                    prompt: '"Xerab" nedir?',
                    options: ['İyi', 'Zeki', 'Kötü', 'Tembel'],
                    correctIndex: 2,
                    audioText: 'xerab',
                    audioLang: 'tr'
                },
                {
                    id: 'k35q3',
                    type: 'multipleChoice',
                    prompt: '"Çalışkan" nasıl söylenir?',
                    options: ['tembel', 'xebatkar', 'baş', 'xerab'],
                    correctIndex: 1,
                    audioText: 'xebatkar',
                    audioLang: 'tr'
                },
                {
                    id: 'k35q4',
                    type: 'multipleChoice',
                    prompt: '"Tembel" ne anlama gelir?',
                    options: ['Çalışkan', 'İyi', 'Kötü', 'Tembel'],
                    correctIndex: 3,
                    audioText: 'tembel',
                    audioLang: 'tr'
                },
                {
                    id: 'k35q5',
                    type: 'multipleChoice',
                    prompt: '"Zeki" kelimesinin Kürtçesi nedir?',
                    options: ['zîrek', 'tembel', 'xerab', 'tirsiyayî'],
                    correctIndex: 0,
                    audioText: 'zîrek',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k36',
            title: 'Tepkiler',
            description: 'Tepkiler',
            icon: '😲',
            xpReward: 20,
            questions: [
                {
                    id: 'k36q1',
                    type: 'multipleChoice',
                    prompt: '"Erê" ne demektir?',
                    options: ['Hayır', 'Tamam', 'Evet', 'Lütfen'],
                    correctIndex: 2,
                    audioText: 'erê',
                    audioLang: 'tr'
                },
                {
                    id: 'k36q2',
                    type: 'multipleChoice',
                    prompt: '"Na" nedir?',
                    options: ['Hayır', 'Evet', 'Teşekkürler', 'Tamam'],
                    correctIndex: 0,
                    audioText: 'na',
                    audioLang: 'tr'
                },
                {
                    id: 'k36q3',
                    type: 'multipleChoice',
                    prompt: '"Baş e" ne anlama gelir?',
                    options: ['Lütfen', 'Tamam', 'Hayır', 'Evet'],
                    correctIndex: 1,
                    audioText: 'baş e',
                    audioLang: 'tr'
                },
                {
                    id: 'k36q4',
                    type: 'multipleChoice',
                    prompt: '"Lütfen" nasıl söylenir?',
                    options: ['spas', 'baş e', 'na', 'ji kerema xwe'],
                    correctIndex: 3,
                    audioText: 'ji kerema xwe',
                    audioLang: 'tr'
                },
                {
                    id: 'k36q5',
                    type: 'multipleChoice',
                    prompt: '"Spas" ne demektir?',
                    options: ['Teşekkürler', 'Lütfen', 'Evet', 'Hayır'],
                    correctIndex: 0,
                    audioText: 'spas',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k37',
            title: 'Hareket Fiilleri',
            description: 'Hareket Fiilleri',
            icon: '🏃‍♂️',
            xpReward: 20,
            questions: [
                {
                    id: 'k37q1',
                    type: 'multipleChoice',
                    prompt: '"Yürümek" nedir?',
                    options: ['bezîn', 'ketin', 'meşiyan', 'rabûn'],
                    correctIndex: 2,
                    audioText: 'meşiyan',
                    audioLang: 'tr'
                },
                {
                    id: 'k37q2',
                    type: 'multipleChoice',
                    prompt: '"Bezîn" ne anlama gelir?',
                    options: ['Yürümek', 'Koşmak', 'Zıplamak', 'Düşmek'],
                    correctIndex: 1,
                    audioText: 'bezîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k37q3',
                    type: 'multipleChoice',
                    prompt: '"Zıplamak" nasıl söylenir?',
                    options: ['meşiyan', 'bezîn', 'hilpekîn', 'ketin'],
                    correctIndex: 2,
                    audioText: 'hilpekîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k37q4',
                    type: 'multipleChoice',
                    prompt: '"Ketin" ne demektir?',
                    options: ['Düşmek', 'Kalkmak', 'Oturmak', 'Koşmak'],
                    correctIndex: 0,
                    audioText: 'ketin',
                    audioLang: 'tr'
                },
                {
                    id: 'k37q5',
                    type: 'multipleChoice',
                    prompt: '"Rabûn" nedir?',
                    options: ['Düşmek', 'Zıplamak', 'Yürümek', 'Kalkmak'],
                    correctIndex: 3,
                    audioText: 'rabûn',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k38',
            title: 'Durum Fiilleri',
            description: 'Durum Fiilleri',
            icon: '🧘',
            xpReward: 20,
            questions: [
                {
                    id: 'k38q1',
                    type: 'multipleChoice',
                    prompt: '"Rûniştin" ne demektir?',
                    options: ['Kalkmak', 'Durmak', 'Uyumak', 'Oturmak'],
                    correctIndex: 3,
                    audioText: 'rûniştin',
                    audioLang: 'tr'
                },
                {
                    id: 'k38q2',
                    type: 'multipleChoice',
                    prompt: '"Sekinîn" nedir?',
                    options: ['Durmak', 'Oturmak', 'Beklemek', 'Düşünmek'],
                    correctIndex: 0,
                    audioText: 'sekinîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k38q3',
                    type: 'multipleChoice',
                    prompt: '"Bendê man" ne anlama gelir?',
                    options: ['Uyumak', 'Düşünmek', 'Beklemek', 'Oturmak'],
                    correctIndex: 2,
                    audioText: 'bendê man',
                    audioLang: 'tr'
                },
                {
                    id: 'k38q4',
                    type: 'multipleChoice',
                    prompt: '"Uyumak" nasıl söylenir?',
                    options: ['sekinîn', 'razan', 'bendê man', 'rûniştin'],
                    correctIndex: 1,
                    audioText: 'razan',
                    audioLang: 'tr'
                },
                {
                    id: 'k38q5',
                    type: 'multipleChoice',
                    prompt: '"Düşünmek" nedir?',
                    options: ['razan', 'sekinîn', 'bendê man', 'fikirîn'],
                    correctIndex: 3,
                    audioText: 'fikirîn',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k39',
            title: 'Günlük Fiiller',
            description: 'Günlük Fiiller',
            icon: '🗣️',
            xpReward: 20,
            questions: [
                {
                    id: 'k39q1',
                    type: 'multipleChoice',
                    prompt: '"Axaftin" ne demektir?',
                    options: ['Dinlemek', 'Konuşmak', 'Görmek', 'Yemek'],
                    correctIndex: 1,
                    audioText: 'axaftin',
                    audioLang: 'tr'
                },
                {
                    id: 'k39q2',
                    type: 'multipleChoice',
                    prompt: '"Guhdarî kirin" nedir?',
                    options: ['Konuşmak', 'İçmek', 'Görmek', 'Dinlemek'],
                    correctIndex: 3,
                    audioText: 'guhdarî kirin',
                    audioLang: 'tr'
                },
                {
                    id: 'k39q3',
                    type: 'multipleChoice',
                    prompt: '"Dîtin" ne anlama gelir?',
                    options: ['Görmek', 'Yemek', 'Dinlemek', 'Konuşmak'],
                    correctIndex: 0,
                    audioText: 'dîtin',
                    audioLang: 'tr'
                },
                {
                    id: 'k39q4',
                    type: 'multipleChoice',
                    prompt: '"Xwarin" nedir?',
                    options: ['İçmek', 'Görmek', 'Yemek', 'Konuşmak'],
                    correctIndex: 2,
                    audioText: 'xwarin',
                    audioLang: 'tr'
                },
                {
                    id: 'k39q5',
                    type: 'multipleChoice',
                    prompt: '"Vexwarin" nasıl söylenir?',
                    options: ['vexwarin', 'xwarin', 'dîtin', 'axaftin'],
                    correctIndex: 0,
                    audioText: 'vexwarin',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k40',
            title: 'Geçmiş Zaman',
            description: 'Geçmiş Zaman',
            icon: '⏪',
            xpReward: 20,
            questions: [
                {
                    id: 'k40q1',
                    type: 'multipleChoice',
                    prompt: '"Duh" ne demektir?',
                    options: ['Bugün', 'Yarın', 'Dün', 'Şimdi'],
                    correctIndex: 2,
                    audioText: 'duh',
                    audioLang: 'tr'
                },
                {
                    id: 'k40q2',
                    type: 'multipleChoice',
                    prompt: '"Ez çûm" nedir?',
                    options: ['Geldim', 'Gittim', 'Yaptım', 'Gördüm'],
                    correctIndex: 1,
                    audioText: 'ez çûm',
                    audioLang: 'tr'
                },
                {
                    id: 'k40q3',
                    type: 'multipleChoice',
                    prompt: '"Min dît" ne anlama gelir?',
                    options: ['Yaptım', 'Gittim', 'Geldim', 'Gördüm'],
                    correctIndex: 3,
                    audioText: 'min dît',
                    audioLang: 'tr'
                },
                {
                    id: 'k40q4',
                    type: 'multipleChoice',
                    prompt: '"Min kir" nedir?',
                    options: ['Yaptım', 'Gördüm', 'Geldim', 'Gittim'],
                    correctIndex: 0,
                    audioText: 'min kir',
                    audioLang: 'tr'
                },
                {
                    id: 'k40q5',
                    type: 'multipleChoice',
                    prompt: '"Ez hatim" nasıl söylenir?',
                    options: ['Gittim', 'Yaptım', 'Geldim', 'Gördüm'],
                    correctIndex: 2,
                    audioText: 'ez hatim',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k41',
            title: 'Gelecek Zaman',
            description: 'Gelecek Zaman',
            icon: '⏩',
            xpReward: 20,
            questions: [
                {
                    id: 'k41q1',
                    type: 'multipleChoice',
                    prompt: '"Sibe" ne demektir?',
                    options: ['Dün', 'Yarın', 'Bugün', 'Şimdi'],
                    correctIndex: 1,
                    audioText: 'sibe',
                    audioLang: 'tr'
                },
                {
                    id: 'k41q2',
                    type: 'multipleChoice',
                    prompt: '"Ez ê biçim" nedir?',
                    options: ['Geleceğim', 'Yapacağım', 'Gideceğim', 'Göreceğim'],
                    correctIndex: 2,
                    audioText: 'ez ê biçim',
                    audioLang: 'tr'
                },
                {
                    id: 'k41q3',
                    type: 'multipleChoice',
                    prompt: '"Ez ê bikim" ne anlama gelir?',
                    options: ['Yapacağım', 'Göreceğim', 'Gideceğim', 'Geleceğim'],
                    correctIndex: 0,
                    audioText: 'ez ê bikim',
                    audioLang: 'tr'
                },
                {
                    id: 'k41q4',
                    type: 'multipleChoice',
                    prompt: '"Ez ê bibînim" nedir?',
                    options: ['Yapacağım', 'Geleceğim', 'Gideceğim', 'Göreceğim'],
                    correctIndex: 3,
                    audioText: 'ez ê bibînim',
                    audioLang: 'tr'
                },
                {
                    id: 'k41q5',
                    type: 'multipleChoice',
                    prompt: '"Ez ê bêm" nasıl söylenir?',
                    options: ['Gideceğim', 'Yapacağım', 'Geleceğim', 'Göreceğim'],
                    correctIndex: 2,
                    audioText: 'ez ê bêm',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k42',
            title: 'Emir Kipleri',
            description: 'Emir Kipleri',
            icon: '❗',
            xpReward: 20,
            questions: [
                {
                    id: 'k42q1',
                    type: 'multipleChoice',
                    prompt: '"Were" ne demektir?',
                    options: ['Git', 'Yap', 'Gel', 'Söyle'],
                    correctIndex: 2,
                    audioText: 'were',
                    audioLang: 'tr'
                },
                {
                    id: 'k42q2',
                    type: 'multipleChoice',
                    prompt: '"Here" nedir?',
                    options: ['Gel', 'Git', 'Bak', 'Yap'],
                    correctIndex: 1,
                    audioText: 'here',
                    audioLang: 'tr'
                },
                {
                    id: 'k42q3',
                    type: 'multipleChoice',
                    prompt: '"Bike" ne anlama gelir?',
                    options: ['Söyle', 'Gel', 'Git', 'Yap'],
                    correctIndex: 3,
                    audioText: 'bike',
                    audioLang: 'tr'
                },
                {
                    id: 'k42q4',
                    type: 'multipleChoice',
                    prompt: '"Bêje" nedir?',
                    options: ['Söyle', 'Yap', 'Git', 'Gel'],
                    correctIndex: 0,
                    audioText: 'bêje',
                    audioLang: 'tr'
                },
                {
                    id: 'k42q5',
                    type: 'multipleChoice',
                    prompt: '"Binêre" nasıl söylenir?',
                    options: ['Söyle', 'Yap', 'Bak', 'Git'],
                    correctIndex: 2,
                    audioText: 'binêre',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k43',
            title: 'Okul Eşyaları',
            description: 'Okul Eşyaları',
            icon: '🎒',
            xpReward: 20,
            questions: [
                {
                    id: 'k43q1',
                    type: 'multipleChoice',
                    prompt: '"Pênûs" ne demektir?',
                    options: ['Kitap', 'Kalem', 'Defter', 'Silgi'],
                    correctIndex: 1,
                    audioText: 'pênûs',
                    audioLang: 'tr'
                },
                {
                    id: 'k43q2',
                    type: 'multipleChoice',
                    prompt: '"Pirtûk" nedir?',
                    options: ['Kalem', 'Çanta', 'Defter', 'Kitap'],
                    correctIndex: 3,
                    audioText: 'pirtûk',
                    audioLang: 'tr'
                },
                {
                    id: 'k43q3',
                    type: 'multipleChoice',
                    prompt: '"Defter" nasıl söylenir?',
                    options: ['defter', 'pênûs', 'pirtûk', 'jêbir'],
                    correctIndex: 0,
                    audioText: 'defter',
                    audioLang: 'tr'
                },
                {
                    id: 'k43q4',
                    type: 'multipleChoice',
                    prompt: '"Çente" ne anlama gelir?',
                    options: ['Silgi', 'Kalem', 'Çanta', 'Kitap'],
                    correctIndex: 2,
                    audioText: 'çente',
                    audioLang: 'tr'
                },
                {
                    id: 'k43q5',
                    type: 'multipleChoice',
                    prompt: '"Jêbir" nedir?',
                    options: ['Çanta', 'Silgi', 'Kalem', 'Defter'],
                    correctIndex: 1,
                    audioText: 'jêbir',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k44',
            title: 'Dersler',
            description: 'Dersler',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'k44q1',
                    type: 'multipleChoice',
                    prompt: '"Bîrkarî" ne demektir?',
                    options: ['Tarih', 'Matematik', 'Bilim', 'Dil'],
                    correctIndex: 1,
                    audioText: 'bîrkarî',
                    audioLang: 'tr'
                },
                {
                    id: 'k44q2',
                    type: 'multipleChoice',
                    prompt: '"Dîrok" nedir?',
                    options: ['Sanat', 'Matematik', 'Bilim', 'Tarih'],
                    correctIndex: 3,
                    audioText: 'dîrok',
                    audioLang: 'tr'
                },
                {
                    id: 'k44q3',
                    type: 'multipleChoice',
                    prompt: '"Zanyarî" ne anlama gelir?',
                    options: ['Bilim', 'Dil', 'Tarih', 'Sanat'],
                    correctIndex: 0,
                    audioText: 'zanyarî',
                    audioLang: 'tr'
                },
                {
                    id: 'k44q4',
                    type: 'multipleChoice',
                    prompt: '"Ziman" nasıl söylenir?',
                    options: ['Sanat', 'Matematik', 'Dil', 'Tarih'],
                    correctIndex: 2,
                    audioText: 'ziman',
                    audioLang: 'tr'
                },
                {
                    id: 'k44q5',
                    type: 'multipleChoice',
                    prompt: '"Huner" nedir?',
                    options: ['Dil', 'Bilim', 'Tarih', 'Sanat'],
                    correctIndex: 3,
                    audioText: 'huner',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k45',
            title: 'Sınıfta',
            description: 'Sınıfta',
            icon: '👩‍🎓',
            xpReward: 20,
            questions: [
                {
                    id: 'k45q1',
                    type: 'multipleChoice',
                    prompt: '"Pol" ne demektir?',
                    options: ['Soru', 'Sınıf', 'Cevap', 'Sınav'],
                    correctIndex: 1,
                    audioText: 'pol',
                    audioLang: 'tr'
                },
                {
                    id: 'k45q2',
                    type: 'multipleChoice',
                    prompt: '"Pirs" nedir?',
                    options: ['Sınıf', 'Cevap', 'Tahta', 'Soru'],
                    correctIndex: 3,
                    audioText: 'pirs',
                    audioLang: 'tr'
                },
                {
                    id: 'k45q3',
                    type: 'multipleChoice',
                    prompt: '"Bersiv" ne anlama gelir?',
                    options: ['Cevap', 'Soru', 'Sınav', 'Tahta'],
                    correctIndex: 0,
                    audioText: 'bersiv',
                    audioLang: 'tr'
                },
                {
                    id: 'k45q4',
                    type: 'multipleChoice',
                    prompt: '"Texte" nasıl söylenir?',
                    options: ['Sınıf', 'Soru', 'Tahta', 'Sınav'],
                    correctIndex: 2,
                    audioText: 'texte',
                    audioLang: 'tr'
                },
                {
                    id: 'k45q5',
                    type: 'multipleChoice',
                    prompt: '"Ezmûn" nedir?',
                    options: ['Tahta', 'Cevap', 'Sınav', 'Soru'],
                    correctIndex: 2,
                    audioText: 'ezmûn',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k46',
            title: 'Tatil Yerleri',
            description: 'Tatil Yerleri',
            icon: '🏖️',
            xpReward: 20,
            questions: [
                {
                    id: 'k46q1',
                    type: 'multipleChoice',
                    prompt: '"Derya" ne demektir?',
                    options: ['Dağ', 'Orman', 'Deniz', 'Köy'],
                    correctIndex: 2,
                    audioText: 'derya',
                    audioLang: 'tr'
                },
                {
                    id: 'k46q2',
                    type: 'multipleChoice',
                    prompt: '"Çiya" nedir?',
                    options: ['Orman', 'Dağ', 'Plaj', 'Deniz'],
                    correctIndex: 1,
                    audioText: 'çiya',
                    audioLang: 'tr'
                },
                {
                    id: 'k46q3',
                    type: 'multipleChoice',
                    prompt: '"Daristan" ne anlama gelir?',
                    options: ['Orman', 'Dağ', 'Deniz', 'Köy'],
                    correctIndex: 0,
                    audioText: 'daristan',
                    audioLang: 'tr'
                },
                {
                    id: 'k46q4',
                    type: 'multipleChoice',
                    prompt: '"Perav" nasıl söylenir?',
                    options: ['Köy', 'Orman', 'Dağ', 'Plaj'],
                    correctIndex: 3,
                    audioText: 'perav',
                    audioLang: 'tr'
                },
                {
                    id: 'k46q5',
                    type: 'multipleChoice',
                    prompt: '"Gund" nedir?',
                    options: ['Plaj', 'Köy', 'Deniz', 'Dağ'],
                    correctIndex: 1,
                    audioText: 'gund',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k47',
            title: 'Otelde',
            description: 'Otelde',
            icon: '🏨',
            xpReward: 10,
            questions: [
                {
                    id: 'k47q1',
                    type: 'multipleChoice',
                    prompt: '"Otel" kelimesinin Kürtçe karşılığı nedir?',
                    options: ['Bazar', 'Otêl', 'Dibistan', 'Xanî'],
                    correctIndex: 1,
                    audioText: 'Otêl',
                    audioLang: 'tr'
                },
                {
                    id: 'k47q2',
                    type: 'multipleChoice',
                    prompt: '"Anahtar" Kürtçede nasıl söylenir?',
                    options: ['Derî', 'Pacey', 'Mifte', 'Dest'],
                    correctIndex: 2,
                    audioText: 'Mifte',
                    audioLang: 'tr'
                },
                {
                    id: 'k47q3',
                    type: 'multipleChoice',
                    prompt: '"Oda" Kürtçede nedir?',
                    options: ['Ode', 'Mal', 'Bajar', 'Gund'],
                    correctIndex: 0,
                    audioText: 'Ode',
                    audioLang: 'tr'
                },
                {
                    id: 'k47q4',
                    type: 'multipleChoice',
                    prompt: '"Fatura" kelimesinin Kürtçesi nedir?',
                    options: ['Pere', 'Fature', 'Nan', 'Av'],
                    correctIndex: 1,
                    audioText: 'Fature',
                    audioLang: 'tr'
                },
                {
                    id: 'k47q5',
                    type: 'multipleChoice',
                    prompt: '"Boş" Kürtçede nasıl denir?',
                    options: ['Tije', 'Mezin', 'Biçûk', 'Vala'],
                    correctIndex: 3,
                    audioText: 'Vala',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k48',
            title: 'Seyahat Planı',
            description: 'Seyahat Planı',
            icon: '🧳',
            xpReward: 10,
            questions: [
                {
                    id: 'k48q1',
                    type: 'multipleChoice',
                    prompt: '"Seyahat" Kürtçede nedir?',
                    options: ['Rêwîtî', 'Xew', 'Xwarin', 'Lîstik'],
                    correctIndex: 0,
                    audioText: 'Rêwîtî',
                    audioLang: 'tr'
                },
                {
                    id: 'k48q2',
                    type: 'multipleChoice',
                    prompt: '"Bilet" Kürtçede nasıl denir?',
                    options: ['Pirtûk', 'Bilêt', 'Kaxez', 'Qeleme'],
                    correctIndex: 1,
                    audioText: 'Bilêt',
                    audioLang: 'tr'
                },
                {
                    id: 'k48q3',
                    type: 'multipleChoice',
                    prompt: '"Uçak" Kürtçede nedir?',
                    options: ['Trêna', 'Erebeyê', 'Balafir', 'Bisîklet'],
                    correctIndex: 2,
                    audioText: 'Balafir',
                    audioLang: 'tr'
                },
                {
                    id: 'k48q4',
                    type: 'multipleChoice',
                    prompt: '"Tren" Kürtçede nasıl denir?',
                    options: ['Trêna', 'Balafir', 'Gemî', 'Rê'],
                    correctIndex: 0,
                    audioText: 'Trêna',
                    audioLang: 'tr'
                },
                {
                    id: 'k48q5',
                    type: 'multipleChoice',
                    prompt: '"Yolcu" Kürtçede nedir?',
                    options: ['Ajokar', 'Mamoste', 'Rêwî', 'Xwendekar'],
                    correctIndex: 2,
                    audioText: 'Rêwî',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k49',
            title: 'Spor',
            description: 'Spor',
            icon: '⚽',
            xpReward: 10,
            questions: [
                {
                    id: 'k49q1',
                    type: 'multipleChoice',
                    prompt: '"Futbol" kelimesinin Kürtçe karşılığı nedir?',
                    options: ['Basketbol', 'Tenîs', 'Voleybol', 'Futbol'],
                    correctIndex: 3,
                    audioText: 'Futbol',
                    audioLang: 'tr'
                },
                {
                    id: 'k49q2',
                    type: 'multipleChoice',
                    prompt: '"Oynamak" Kürtçede nedir?',
                    options: ['Lîstin', 'Xwendin', 'Nivîsîn', 'Dîtin'],
                    correctIndex: 0,
                    audioText: 'Lîstin',
                    audioLang: 'tr'
                },
                {
                    id: 'k49q3',
                    type: 'multipleChoice',
                    prompt: '"Koşmak" Kürtçede nasıl denir?',
                    options: ['Meşîn', 'Bezîn', 'Rûniştin', 'Rabûn'],
                    correctIndex: 1,
                    audioText: 'Bezîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k49q4',
                    type: 'multipleChoice',
                    prompt: '"Kazanmak" Kürtçede nedir?',
                    options: ['Winda kirin', 'Lîstin', 'Qezenc kirin', 'Çûn'],
                    correctIndex: 2,
                    audioText: 'Qezenc kirin',
                    audioLang: 'tr'
                },
                {
                    id: 'k49q5',
                    type: 'multipleChoice',
                    prompt: '"Top" Kürtçede nasıl denir?',
                    options: ['Dîwar', 'Pêlav', 'Dest', 'Gog'],
                    correctIndex: 3,
                    audioText: 'Gog',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k50',
            title: 'Müzik ve Sanat',
            description: 'Müzik ve Sanat',
            icon: '🎸',
            xpReward: 10,
            questions: [
                {
                    id: 'k50q1',
                    type: 'multipleChoice',
                    prompt: '"Müzik" Kürtçede nedir?',
                    options: ['Wêne', 'Pirtûk', 'Muzîk', 'Deng'],
                    correctIndex: 2,
                    audioText: 'Muzîk',
                    audioLang: 'tr'
                },
                {
                    id: 'k50q2',
                    type: 'multipleChoice',
                    prompt: '"Şarkı" Kürtçede nasıl denir?',
                    options: ['Stran', 'Helbest', 'Çîrok', 'Peyv'],
                    correctIndex: 0,
                    audioText: 'Stran',
                    audioLang: 'tr'
                },
                {
                    id: 'k50q3',
                    type: 'multipleChoice',
                    prompt: '"Dans etmek" Kürtçede nedir?',
                    options: ['Xebitîn', 'Xew kirin', 'Dans kirin', 'Xwarin'],
                    correctIndex: 2,
                    audioText: 'Dans kirin',
                    audioLang: 'tr'
                },
                {
                    id: 'k50q4',
                    type: 'multipleChoice',
                    prompt: '"Resim" Kürtçede nasıl denir?',
                    options: ['Wêne', 'Deng', 'Reng', 'Av'],
                    correctIndex: 0,
                    audioText: 'Wêne',
                    audioLang: 'tr'
                },
                {
                    id: 'k50q5',
                    type: 'multipleChoice',
                    prompt: '"Sanat" Kürtçede nedir?',
                    options: ['Zanist', 'Wêje', 'Dîrok', 'Huner'],
                    correctIndex: 3,
                    audioText: 'Huner',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k51',
            title: 'Boş Zaman',
            description: 'Boş Zaman',
            icon: '🎮',
            xpReward: 10,
            questions: [
                {
                    id: 'k51q1',
                    type: 'multipleChoice',
                    prompt: '"Kitap" Kürtçede nedir?',
                    options: ['Pirtûk', 'Defter', 'Qeleme', 'Mase'],
                    correctIndex: 0,
                    audioText: 'Pirtûk',
                    audioLang: 'tr'
                },
                {
                    id: 'k51q2',
                    type: 'multipleChoice',
                    prompt: '"Okumak" Kürtçede nasıl denir?',
                    options: ['Nivîsîn', 'Xwendin', 'Dîtin', 'Girtin'],
                    correctIndex: 1,
                    audioText: 'Xwendin',
                    audioLang: 'tr'
                },
                {
                    id: 'k51q3',
                    type: 'multipleChoice',
                    prompt: '"Oyun" Kürtçede nedir?',
                    options: ['Kar', 'Xew', 'Xwarin', 'Lîstik'],
                    correctIndex: 3,
                    audioText: 'Lîstik',
                    audioLang: 'tr'
                },
                {
                    id: 'k51q4',
                    type: 'multipleChoice',
                    prompt: '"Film" kelimesinin Kürtçe karşılığı nedir?',
                    options: ['Muzîk', 'Fîlm', 'Wêne', 'Pirtûk'],
                    correctIndex: 1,
                    audioText: 'Fîlm',
                    audioLang: 'tr'
                },
                {
                    id: 'k51q5',
                    type: 'multipleChoice',
                    prompt: '"Dinlenmek" Kürtçede nasıl denir?',
                    options: ['Xebitîn', 'Bezîn', 'Bêhna xwe vedan', 'Lîstin'],
                    correctIndex: 2,
                    audioText: 'Bêhna xwe vedan',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k52',
            title: 'Mevsimler',
            description: 'Mevsimler',
            icon: '🍂',
            xpReward: 10,
            questions: [
                {
                    id: 'k52q1',
                    type: 'multipleChoice',
                    prompt: '"İlkbahar" Kürtçede nedir?',
                    options: ['Havîn', 'Payîz', 'Zivistan', 'Bihar'],
                    correctIndex: 3,
                    audioText: 'Bihar',
                    audioLang: 'tr'
                },
                {
                    id: 'k52q2',
                    type: 'multipleChoice',
                    prompt: '"Yaz" Kürtçede nasıl denir?',
                    options: ['Havîn', 'Bihar', 'Payîz', 'Zivistan'],
                    correctIndex: 0,
                    audioText: 'Havîn',
                    audioLang: 'tr'
                },
                {
                    id: 'k52q3',
                    type: 'multipleChoice',
                    prompt: '"Sonbahar" Kürtçede nedir?',
                    options: ['Havîn', 'Payîz', 'Bihar', 'Zivistan'],
                    correctIndex: 1,
                    audioText: 'Payîz',
                    audioLang: 'tr'
                },
                {
                    id: 'k52q4',
                    type: 'multipleChoice',
                    prompt: '"Kış" Kürtçede nasıl denir?',
                    options: ['Zivistan', 'Payîz', 'Havîn', 'Bihar'],
                    correctIndex: 0,
                    audioText: 'Zivistan',
                    audioLang: 'tr'
                },
                {
                    id: 'k52q5',
                    type: 'multipleChoice',
                    prompt: '"Mevsim" Kürtçede nedir?',
                    options: ['Sal', 'Demsal', 'Meh', 'Roj'],
                    correctIndex: 1,
                    audioText: 'Demsal',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k53',
            title: 'Hava Durumu',
            description: 'Hava Durumu',
            icon: '🌦️',
            xpReward: 10,
            questions: [
                {
                    id: 'k53q1',
                    type: 'multipleChoice',
                    prompt: '"Hava" Kürtçede nedir?',
                    options: ['Av', 'Agir', 'Hewa', 'Erd'],
                    correctIndex: 2,
                    audioText: 'Hewa',
                    audioLang: 'tr'
                },
                {
                    id: 'k53q2',
                    type: 'multipleChoice',
                    prompt: '"Yağmur" Kürtçede nasıl denir?',
                    options: ['Baran', 'Berf', 'Ba', 'Tav'],
                    correctIndex: 0,
                    audioText: 'Baran',
                    audioLang: 'tr'
                },
                {
                    id: 'k53q3',
                    type: 'multipleChoice',
                    prompt: '"Kar" Kürtçede nedir?',
                    options: ['Baran', 'Berf', 'Ba', 'Ewr'],
                    correctIndex: 1,
                    audioText: 'Berf',
                    audioLang: 'tr'
                },
                {
                    id: 'k53q4',
                    type: 'multipleChoice',
                    prompt: '"Rüzgar" Kürtçede nasıl denir?',
                    options: ['Baran', 'Berf', 'Tav', 'Ba'],
                    correctIndex: 3,
                    audioText: 'Ba',
                    audioLang: 'tr'
                },
                {
                    id: 'k53q5',
                    type: 'multipleChoice',
                    prompt: '"Güneş" Kürtçede nedir?',
                    options: ['Heyv', 'Stêrk', 'Tav', 'Ewr'],
                    correctIndex: 2,
                    audioText: 'Tav',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k54',
            title: 'Coğrafya',
            description: 'Coğrafya',
            icon: '🌍',
            xpReward: 10,
            questions: [
                {
                    id: 'k54q1',
                    type: 'multipleChoice',
                    prompt: '"Dünya" Kürtçede nedir?',
                    options: ['Çiya', 'Cîhan', 'Derya', 'Çem'],
                    correctIndex: 1,
                    audioText: 'Cîhan',
                    audioLang: 'tr'
                },
                {
                    id: 'k54q2',
                    type: 'multipleChoice',
                    prompt: '"Dağ" Kürtçede nasıl denir?',
                    options: ['Çiya', 'Deşt', 'Daristan', 'Çem'],
                    correctIndex: 0,
                    audioText: 'Çiya',
                    audioLang: 'tr'
                },
                {
                    id: 'k54q3',
                    type: 'multipleChoice',
                    prompt: '"Deniz" Kürtçede nedir?',
                    options: ['Gole', 'Çem', 'Kaniyê', 'Derya'],
                    correctIndex: 3,
                    audioText: 'Derya',
                    audioLang: 'tr'
                },
                {
                    id: 'k54q4',
                    type: 'multipleChoice',
                    prompt: '"Nehir" Kürtçede nasıl denir?',
                    options: ['Çem', 'Derya', 'Çiya', 'Gole'],
                    correctIndex: 0,
                    audioText: 'Çem',
                    audioLang: 'tr'
                },
                {
                    id: 'k54q5',
                    type: 'multipleChoice',
                    prompt: '"Orman" Kürtçede nedir?',
                    options: ['Çiya', 'Daristan', 'Deşt', 'Derya'],
                    correctIndex: 1,
                    audioText: 'Daristan',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k55',
            title: 'Arkadaşlık',
            description: 'Arkadaşlık',
            icon: '🤝',
            xpReward: 10,
            questions: [
                {
                    id: 'k55q1',
                    type: 'multipleChoice',
                    prompt: '"Arkadaş" Kürtçede nedir?',
                    options: ['Dijmin', 'Birayê', 'Heval', 'Xwişk'],
                    correctIndex: 2,
                    audioText: 'Heval',
                    audioLang: 'tr'
                },
                {
                    id: 'k55q2',
                    type: 'multipleChoice',
                    prompt: '"Dost" Kürtçede nasıl denir?',
                    options: ['Mêvan', 'Dost', 'Cîran', 'Rêwî'],
                    correctIndex: 1,
                    audioText: 'Dost',
                    audioLang: 'tr'
                },
                {
                    id: 'k55q3',
                    type: 'multipleChoice',
                    prompt: '"Sevgi" Kürtçede nedir?',
                    options: ['Nefret', 'Tirs', 'Şahî', 'Hezkirin'],
                    correctIndex: 3,
                    audioText: 'Hezkirin',
                    audioLang: 'tr'
                },
                {
                    id: 'k55q4',
                    type: 'multipleChoice',
                    prompt: '"Sohbet" Kürtçede nasıl denir?',
                    options: ['Sohbet', 'Şer', 'Lîstik', 'Xew'],
                    correctIndex: 0,
                    audioText: 'Sohbet',
                    audioLang: 'tr'
                },
                {
                    id: 'k55q5',
                    type: 'multipleChoice',
                    prompt: '"Yardım etmek" Kürtçede nedir?',
                    options: ['Zirar dan', 'Alîkarî kirin', 'Xebitîn', 'Bezîn'],
                    correctIndex: 1,
                    audioText: 'Alîkarî kirin',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k56',
            title: 'Davetler',
            description: 'Davetler',
            icon: '💌',
            xpReward: 10,
            questions: [
                {
                    id: 'k56q1',
                    type: 'multipleChoice',
                    prompt: '"Davet" Kürtçede nedir?',
                    options: ['Çûn', 'Vexwendin', 'Hatina', 'Rûniştin'],
                    correctIndex: 1,
                    audioText: 'Vexwendin',
                    audioLang: 'tr'
                },
                {
                    id: 'k56q2',
                    type: 'multipleChoice',
                    prompt: '"Misafir" Kürtçede nasıl denir?',
                    options: ['Mêvan', 'Xwedî', 'Heval', 'Dost'],
                    correctIndex: 0,
                    audioText: 'Mêvan',
                    audioLang: 'tr'
                },
                {
                    id: 'k56q3',
                    type: 'multipleChoice',
                    prompt: '"Düğün" Kürtçede nedir?',
                    options: ['Şîn', 'Cejn', 'Rojbûn', 'Dawet'],
                    correctIndex: 3,
                    audioText: 'Dawet',
                    audioLang: 'tr'
                },
                {
                    id: 'k56q4',
                    type: 'multipleChoice',
                    prompt: '"Kabul etmek" Kürtçede nasıl denir?',
                    options: ['Red kirin', 'Dîtin', 'Qebûl kirin', 'Bihîstin'],
                    correctIndex: 2,
                    audioText: 'Qebûl kirin',
                    audioLang: 'tr'
                },
                {
                    id: 'k56q5',
                    type: 'multipleChoice',
                    prompt: '"Gelmek" Kürtçede nedir?',
                    options: ['Hatin', 'Çûn', 'Dîtin', 'Girtin'],
                    correctIndex: 0,
                    audioText: 'Hatin',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k57',
            title: 'Kutlamalar',
            description: 'Kutlamalar',
            icon: '🎉',
            xpReward: 10,
            questions: [
                {
                    id: 'k57q1',
                    type: 'multipleChoice',
                    prompt: '"Kutlama" Kürtçede nedir?',
                    options: ['Pîrozbahî', 'Şîn', 'Nîqaş', 'Şer'],
                    correctIndex: 0,
                    audioText: 'Pîrozbahî',
                    audioLang: 'tr'
                },
                {
                    id: 'k57q2',
                    type: 'multipleChoice',
                    prompt: '"Doğum günü" Kürtçede nasıl denir?',
                    options: ['Cejn', 'Rojbûn', 'Dawet', 'Pîroz'],
                    correctIndex: 1,
                    audioText: 'Rojbûn',
                    audioLang: 'tr'
                },
                {
                    id: 'k57q3',
                    type: 'multipleChoice',
                    prompt: '"Bayram" Kürtçede nedir?',
                    options: ['Rojbûn', 'Dawet', 'Şîn', 'Cejn'],
                    correctIndex: 3,
                    audioText: 'Cejn',
                    audioLang: 'tr'
                },
                {
                    id: 'k57q4',
                    type: 'multipleChoice',
                    prompt: '"Yeni yıl" Kürtçede nasıl denir?',
                    options: ['Sala kevn', 'Meha nû', 'Sala nû', 'Roja nû'],
                    correctIndex: 2,
                    audioText: 'Sala nû',
                    audioLang: 'tr'
                },
                {
                    id: 'k57q5',
                    type: 'multipleChoice',
                    prompt: '"Hediye" Kürtçede nedir?',
                    options: ['Pere', 'Diyarî', 'Cil', 'Pirtûk'],
                    correctIndex: 1,
                    audioText: 'Diyarî',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k58',
            title: 'Bağlaçlar',
            description: 'Bağlaçlar',
            icon: '🔗',
            xpReward: 10,
            questions: [
                {
                    id: 'k58q1',
                    type: 'multipleChoice',
                    prompt: '"Ve" Kürtçede nedir?',
                    options: ['An', 'Lê', 'Û', 'Ku'],
                    correctIndex: 2,
                    audioText: 'Û',
                    audioLang: 'tr'
                },
                {
                    id: 'k58q2',
                    type: 'multipleChoice',
                    prompt: '"Veya" Kürtçede nasıl denir?',
                    options: ['Û', 'An', 'Lê', 'Ku'],
                    correctIndex: 1,
                    audioText: 'An',
                    audioLang: 'tr'
                },
                {
                    id: 'k58q3',
                    type: 'multipleChoice',
                    prompt: '"Ama" Kürtçede nedir?',
                    options: ['An', 'Û', 'Lê', 'Ku'],
                    correctIndex: 2,
                    audioText: 'Lê',
                    audioLang: 'tr'
                },
                {
                    id: 'k58q4',
                    type: 'multipleChoice',
                    prompt: '"Çünkü" Kürtçede nasıl denir?',
                    options: ['An', 'Ji ber ku', 'Lê', 'Û'],
                    correctIndex: 1,
                    audioText: 'Ji ber ku',
                    audioLang: 'tr'
                },
                {
                    id: 'k58q5',
                    type: 'multipleChoice',
                    prompt: '"Eğer" Kürtçede nedir?',
                    options: ['Lê', 'Û', 'An', 'Eger'],
                    correctIndex: 3,
                    audioText: 'Eger',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k59',
            title: 'Soru Kelimeleri',
            description: 'Soru Kelimeleri',
            icon: '❓',
            xpReward: 10,
            questions: [
                {
                    id: 'k59q1',
                    type: 'multipleChoice',
                    prompt: '"Ne?" Kürtçede nedir?',
                    options: ['Kî?', 'Çi?', 'Li ku?', 'Kengî?'],
                    correctIndex: 1,
                    audioText: 'Çi?',
                    audioLang: 'tr'
                },
                {
                    id: 'k59q2',
                    type: 'multipleChoice',
                    prompt: '"Kim?" Kürtçede nasıl denir?',
                    options: ['Kî?', 'Çi?', 'Çima?', 'Çawa?'],
                    correctIndex: 0,
                    audioText: 'Kî?',
                    audioLang: 'tr'
                },
                {
                    id: 'k59q3',
                    type: 'multipleChoice',
                    prompt: '"Nerede?" Kürtçede nedir?',
                    options: ['Kî?', 'Çi?', 'Li ku?', 'Kengî?'],
                    correctIndex: 2,
                    audioText: 'Li ku?',
                    audioLang: 'tr'
                },
                {
                    id: 'k59q4',
                    type: 'multipleChoice',
                    prompt: '"Ne zaman?" Kürtçede nasıl denir?',
                    options: ['Li ku?', 'Kengî?', 'Çima?', 'Kî?'],
                    correctIndex: 1,
                    audioText: 'Kengî?',
                    audioLang: 'tr'
                },
                {
                    id: 'k59q5',
                    type: 'multipleChoice',
                    prompt: '"Neden?" Kürtçede nedir?',
                    options: ['Çi?', 'Kî?', 'Li ku?', 'Çima?'],
                    correctIndex: 3,
                    audioText: 'Çima?',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k60',
            title: 'Edatlar',
            description: 'Edatlar',
            icon: '➕',
            xpReward: 10,
            questions: [
                {
                    id: 'k60q1',
                    type: 'multipleChoice',
                    prompt: '"İle" Kürtçede nedir?',
                    options: ['Ji', 'Bi', 'Li', 'Di'],
                    correctIndex: 1,
                    audioText: 'Bi',
                    audioLang: 'tr'
                },
                {
                    id: 'k60q2',
                    type: 'multipleChoice',
                    prompt: '"İçin" Kürtçede nasıl denir?',
                    options: ['Ji bo', 'Bi', 'Li', 'Di'],
                    correctIndex: 0,
                    audioText: 'Ji bo',
                    audioLang: 'tr'
                },
                {
                    id: 'k60q3',
                    type: 'multipleChoice',
                    prompt: '"Üzerinde" Kürtçede nedir?',
                    options: ['Li bin', 'Di nav', 'Bi', 'Li ser'],
                    correctIndex: 3,
                    audioText: 'Li ser',
                    audioLang: 'tr'
                },
                {
                    id: 'k60q4',
                    type: 'multipleChoice',
                    prompt: '"Gibi" Kürtçede nasıl denir?',
                    options: ['Bi', 'Ji', 'Wek', 'Di'],
                    correctIndex: 2,
                    audioText: 'Wek',
                    audioLang: 'tr'
                },
                {
                    id: 'k60q5',
                    type: 'multipleChoice',
                    prompt: '"Kadar" Kürtçede nedir?',
                    options: ['Wek', 'Heta', 'Bi', 'Ji'],
                    correctIndex: 1,
                    audioText: 'Heta',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k61',
            title: 'Fikir Belirtme',
            description: 'Fikir Belirtme',
            icon: '💡',
            xpReward: 10,
            questions: [
                {
                    id: 'k61q1',
                    type: 'multipleChoice',
                    prompt: '"Fikir" Kürtçede nedir?',
                    options: ['Kar', 'Xew', 'Fikir', 'Lîstik'],
                    correctIndex: 2,
                    audioText: 'Fikir',
                    audioLang: 'tr'
                },
                {
                    id: 'k61q2',
                    type: 'multipleChoice',
                    prompt: '"Bence" Kürtçede nasıl denir?',
                    options: ['Wek', 'Heta', 'Bi dîtina min', 'Ji bo'],
                    correctIndex: 2,
                    audioText: 'Bi dîtina min',
                    audioLang: 'tr'
                },
                {
                    id: 'k61q3',
                    type: 'multipleChoice',
                    prompt: '"Haklısın" Kürtçede nedir?',
                    options: ['Tu mafdar î', 'Tu çewt î', 'Tu nizanî', 'Tu dixwazî'],
                    correctIndex: 0,
                    audioText: 'Tu mafdar î',
                    audioLang: 'tr'
                },
                {
                    id: 'k61q4',
                    type: 'multipleChoice',
                    prompt: '"Doğru" Kürtçede nasıl denir?',
                    options: ['Çewt', 'Rast', 'Xirab', 'Baş'],
                    correctIndex: 1,
                    audioText: 'Rast',
                    audioLang: 'tr'
                },
                {
                    id: 'k61q5',
                    type: 'multipleChoice',
                    prompt: '"Yanlış" Kürtçede nedir?',
                    options: ['Rast', 'Baş', 'Çewt', 'Xirab'],
                    correctIndex: 2,
                    audioText: 'Çewt',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k62',
            title: 'Tartışma',
            description: 'Tartışma',
            icon: '🗣️',
            xpReward: 10,
            questions: [
                {
                    id: 'k62q1',
                    type: 'multipleChoice',
                    prompt: '"Tartışma" Kürtçede nedir?',
                    options: ['Nîqaş', 'Şer', 'Aştî', 'Lîstik'],
                    correctIndex: 0,
                    audioText: 'Nîqaş',
                    audioLang: 'tr'
                },
                {
                    id: 'k62q2',
                    type: 'multipleChoice',
                    prompt: '"Sorun" Kürtçede nasıl denir?',
                    options: ['Çareserî', 'Bersiv', 'Pirsgirêk', 'Pirs'],
                    correctIndex: 2,
                    audioText: 'Pirsgirêk',
                    audioLang: 'tr'
                },
                {
                    id: 'k62q3',
                    type: 'multipleChoice',
                    prompt: '"Çözüm" Kürtçede nedir?',
                    options: ['Pirsgirêk', 'Çareserî', 'Pirs', 'Bersiv'],
                    correctIndex: 1,
                    audioText: 'Çareserî',
                    audioLang: 'tr'
                },
                {
                    id: 'k62q4',
                    type: 'multipleChoice',
                    prompt: '"Katılmıyorum" Kürtçede nasıl denir?',
                    options: ['Ez razî me', 'Ez nizanim', 'Ez dizanim', 'Ez ne razî me'],
                    correctIndex: 3,
                    audioText: 'Ez ne razî me',
                    audioLang: 'tr'
                },
                {
                    id: 'k62q5',
                    type: 'multipleChoice',
                    prompt: '"Kavga" Kürtçede nedir?',
                    options: ['Aştî', 'Şer', 'Nîqaş', 'Lîstik'],
                    correctIndex: 1,
                    audioText: 'Şer',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k63',
            title: 'Haberler',
            description: 'Haberler',
            icon: '📰',
            xpReward: 10,
            questions: [
                {
                    id: 'k63q1',
                    type: 'multipleChoice',
                    prompt: '"Haber" Kürtçede nedir?',
                    options: ['Pirtûk', 'Nûçe', 'Wêne', 'Deng'],
                    correctIndex: 1,
                    audioText: 'Nûçe',
                    audioLang: 'tr'
                },
                {
                    id: 'k63q2',
                    type: 'multipleChoice',
                    prompt: '"Gazete" Kürtçede nasıl denir?',
                    options: ['Rojname', 'Pirtûk', 'Defter', 'Kaxez'],
                    correctIndex: 0,
                    audioText: 'Rojname',
                    audioLang: 'tr'
                },
                {
                    id: 'k63q3',
                    type: 'multipleChoice',
                    prompt: '"Televizyon" Kürtçede nedir?',
                    options: ['Radyo', 'Telefon', 'Kompîtur', 'Televîzyon'],
                    correctIndex: 3,
                    audioText: 'Televîzyon',
                    audioLang: 'tr'
                },
                {
                    id: 'k63q4',
                    type: 'multipleChoice',
                    prompt: '"Gerçek" Kürtçede nasıl denir?',
                    options: ['Çewt', 'Rastî', 'Xewn', 'Xeyal'],
                    correctIndex: 1,
                    audioText: 'Rastî',
                    audioLang: 'tr'
                },
                {
                    id: 'k63q5',
                    type: 'multipleChoice',
                    prompt: '"Dinlemek" Kürtçede nedir?',
                    options: ['Dîtin', 'Axaftin', 'Guhdarî kirin', 'Xwendin'],
                    correctIndex: 2,
                    audioText: 'Guhdarî kirin',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k64',
            title: 'Atasözleri',
            description: 'Atasözleri',
            icon: '📜',
            xpReward: 10,
            questions: [
                {
                    id: 'k64q1',
                    type: 'multipleChoice',
                    prompt: '"Söz" Kürtçede nedir?',
                    options: ['Gotin', 'Xew', 'Kar', 'Lîstik'],
                    correctIndex: 0,
                    audioText: 'Gotin',
                    audioLang: 'tr'
                },
                {
                    id: 'k64q2',
                    type: 'multipleChoice',
                    prompt: '"Atasözü" Kürtçede nasıl denir?',
                    options: ['Çîrok', 'Helbest', 'Gotinên pêşiyan', 'Stran'],
                    correctIndex: 2,
                    audioText: 'Gotinên pêşiyan',
                    audioLang: 'tr'
                },
                {
                    id: 'k64q3',
                    type: 'multipleChoice',
                    prompt: '"Eski" Kürtçede nedir?',
                    options: ['Nû', 'Ciwan', 'Kevn', 'Kal'],
                    correctIndex: 2,
                    audioText: 'Kevn',
                    audioLang: 'tr'
                },
                {
                    id: 'k64q4',
                    type: 'multipleChoice',
                    prompt: '"Akıl" Kürtçede nasıl denir?',
                    options: ['Dil', 'Aqil', 'Dest', 'Çav'],
                    correctIndex: 1,
                    audioText: 'Aqil',
                    audioLang: 'tr'
                },
                {
                    id: 'k64q5',
                    type: 'multipleChoice',
                    prompt: '"Öğüt" Kürtçede nedir?',
                    options: ['Şîret', 'Pirs', 'Bersiv', 'Xebat'],
                    correctIndex: 0,
                    audioText: 'Şîret',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k65',
            title: 'Masallar',
            description: 'Masallar',
            icon: '🦄',
            xpReward: 10,
            questions: [
                {
                    id: 'k65q1',
                    type: 'multipleChoice',
                    prompt: '"Masal" Kürtçede nedir?',
                    options: ['Nûçe', 'Pirtûk', 'Çîrok', 'Wêne'],
                    correctIndex: 2,
                    audioText: 'Çîrok',
                    audioLang: 'tr'
                },
                {
                    id: 'k65q2',
                    type: 'multipleChoice',
                    prompt: '"Kral" Kürtçede nasıl denir?',
                    options: ['Leşker', 'Gundî', 'Karker', 'Padîşah'],
                    correctIndex: 3,
                    audioText: 'Padîşah',
                    audioLang: 'tr'
                },
                {
                    id: 'k65q3',
                    type: 'multipleChoice',
                    prompt: '"Prenses" Kürtçede nedir?',
                    options: ['Mamoste', 'Prenses', 'Bijîşk', 'Xwendekar'],
                    correctIndex: 1,
                    audioText: 'Prenses',
                    audioLang: 'tr'
                },
                {
                    id: 'k65q4',
                    type: 'multipleChoice',
                    prompt: '"Son" Kürtçede nasıl denir?',
                    options: ['Dawî', 'Destpêk', 'Navîn', 'Berî'],
                    correctIndex: 0,
                    audioText: 'Dawî',
                    audioLang: 'tr'
                },
                {
                    id: 'k65q5',
                    type: 'multipleChoice',
                    prompt: '"Hayal" Kürtçede nedir?',
                    options: ['Rastî', 'Xeyal', 'Xew', 'Şiyar'],
                    correctIndex: 1,
                    audioText: 'Xeyal',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 'k66',
            title: 'Gelenekler',
            description: 'Gelenekler',
            icon: '🎭',
            xpReward: 10,
            questions: [
                {
                    id: 'k66q1',
                    type: 'multipleChoice',
                    prompt: '"Gelenek" Kürtçede nedir?',
                    options: ['Kevneşopî', 'Nûçe', 'Çîrok', 'Wêne'],
                    correctIndex: 0,
                    audioText: 'Kevneşopî',
                    audioLang: 'tr'
                },
                {
                    id: 'k66q2',
                    type: 'multipleChoice',
                    prompt: '"Kültür" Kürtçede nasıl denir?',
                    options: ['Ziman', 'Dîrok', 'Çand', 'Erdnîgarî'],
                    correctIndex: 2,
                    audioText: 'Çand',
                    audioLang: 'tr'
                },
                {
                    id: 'k66q3',
                    type: 'multipleChoice',
                    prompt: '"Tarih" Kürtçede nedir?',
                    options: ['Çand', 'Dîrok', 'Ziman', 'Wêje'],
                    correctIndex: 1,
                    audioText: 'Dîrok',
                    audioLang: 'tr'
                },
                {
                    id: 'k66q4',
                    type: 'multipleChoice',
                    prompt: '"Kıyafet" Kürtçede nasıl denir?',
                    options: ['Xwarin', 'Cil û berg', 'Vexwarin', 'Pirtûk'],
                    correctIndex: 1,
                    audioText: 'Cil û berg',
                    audioLang: 'tr'
                },
                {
                    id: 'k66q5',
                    type: 'multipleChoice',
                    prompt: '"Oyun" Kürtçede nedir?',
                    options: ['Kar', 'Xew', 'Nîqaş', 'Lîstik'],
                    correctIndex: 3,
                    audioText: 'Lîstik',
                    audioLang: 'tr'
                }
            ]
        }
    ],
    // =====================================================
    // FRENCH — 66 lessons
    // =====================================================
    french: [
        {
            id: 'f1',
            title: 'Lesson 1',
            description: 'Description 1',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f1q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f1q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f1q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f1q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f1q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f2',
            title: 'Lesson 2',
            description: 'Description 2',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f2q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f2q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f2q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f2q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f2q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f3',
            title: 'Lesson 3',
            description: 'Description 3',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f3q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f3q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f3q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f3q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f3q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f4',
            title: 'Lesson 4',
            description: 'Description 4',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f4q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f4q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f4q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f4q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f4q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f5',
            title: 'Lesson 5',
            description: 'Description 5',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f5q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f5q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f5q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f5q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f5q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f6',
            title: 'Lesson 6',
            description: 'Description 6',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f6q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f6q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f6q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f6q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f6q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f7',
            title: 'Lesson 7',
            description: 'Description 7',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f7q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f7q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f7q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f7q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f7q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f8',
            title: 'Lesson 8',
            description: 'Description 8',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f8q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f8q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f8q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f8q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f8q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f9',
            title: 'Lesson 9',
            description: 'Description 9',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f9q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f9q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f9q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f9q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f9q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f10',
            title: 'Lesson 10',
            description: 'Description 10',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f10q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f10q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f10q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f10q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f10q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f11',
            title: 'Lesson 11',
            description: 'Description 11',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f11q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f11q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f11q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f11q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f11q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f12',
            title: 'Lesson 12',
            description: 'Description 12',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f12q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f12q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f12q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f12q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f12q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f13',
            title: 'Lesson 13',
            description: 'Description 13',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f13q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f13q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f13q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f13q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f13q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f14',
            title: 'Lesson 14',
            description: 'Description 14',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f14q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f14q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f14q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f14q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f14q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f15',
            title: 'Lesson 15',
            description: 'Description 15',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f15q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f15q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f15q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f15q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f15q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f16',
            title: 'Lesson 16',
            description: 'Description 16',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f16q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f16q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f16q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f16q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f16q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f17',
            title: 'Lesson 17',
            description: 'Description 17',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f17q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f17q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f17q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f17q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f17q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f18',
            title: 'Lesson 18',
            description: 'Description 18',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f18q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f18q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f18q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f18q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f18q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f19',
            title: 'Lesson 19',
            description: 'Description 19',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f19q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f19q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f19q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f19q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f19q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f20',
            title: 'Lesson 20',
            description: 'Description 20',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f20q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f20q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f20q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f20q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f20q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f21',
            title: 'Lesson 21',
            description: 'Description 21',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f21q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f21q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f21q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f21q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f21q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f22',
            title: 'Lesson 22',
            description: 'Description 22',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f22q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f22q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f22q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f22q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f22q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f23',
            title: 'Lesson 23',
            description: 'Description 23',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f23q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f23q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f23q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f23q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f23q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f24',
            title: 'Lesson 24',
            description: 'Description 24',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f24q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f24q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f24q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f24q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f24q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f25',
            title: 'Lesson 25',
            description: 'Description 25',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f25q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f25q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f25q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f25q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f25q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f26',
            title: 'Lesson 26',
            description: 'Description 26',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f26q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f26q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f26q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f26q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f26q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f27',
            title: 'Lesson 27',
            description: 'Description 27',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f27q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f27q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f27q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f27q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f27q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f28',
            title: 'Lesson 28',
            description: 'Description 28',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f28q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f28q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f28q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f28q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f28q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f29',
            title: 'Lesson 29',
            description: 'Description 29',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f29q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f29q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f29q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f29q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f29q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f30',
            title: 'Lesson 30',
            description: 'Description 30',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f30q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f30q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f30q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f30q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f30q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f31',
            title: 'Lesson 31',
            description: 'Description 31',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f31q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f31q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f31q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f31q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f31q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f32',
            title: 'Lesson 32',
            description: 'Description 32',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f32q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f32q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f32q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f32q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f32q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f33',
            title: 'Lesson 33',
            description: 'Description 33',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f33q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f33q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f33q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f33q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f33q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f34',
            title: 'Lesson 34',
            description: 'Description 34',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f34q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f34q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f34q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f34q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f34q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f35',
            title: 'Lesson 35',
            description: 'Description 35',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f35q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f35q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f35q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f35q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f35q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f36',
            title: 'Lesson 36',
            description: 'Description 36',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f36q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f36q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f36q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f36q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f36q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f37',
            title: 'Lesson 37',
            description: 'Description 37',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f37q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f37q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f37q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f37q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f37q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f38',
            title: 'Lesson 38',
            description: 'Description 38',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f38q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f38q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f38q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f38q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f38q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f39',
            title: 'Lesson 39',
            description: 'Description 39',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f39q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f39q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f39q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f39q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f39q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f40',
            title: 'Lesson 40',
            description: 'Description 40',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f40q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f40q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f40q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f40q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f40q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f41',
            title: 'Lesson 41',
            description: 'Description 41',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f41q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f41q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f41q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f41q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f41q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f42',
            title: 'Lesson 42',
            description: 'Description 42',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f42q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f42q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f42q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f42q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f42q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f43',
            title: 'Lesson 43',
            description: 'Description 43',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f43q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f43q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f43q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f43q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f43q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f44',
            title: 'Lesson 44',
            description: 'Description 44',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f44q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f44q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f44q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f44q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f44q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f45',
            title: 'Lesson 45',
            description: 'Description 45',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f45q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f45q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f45q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f45q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f45q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f46',
            title: 'Lesson 46',
            description: 'Description 46',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f46q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f46q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f46q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f46q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f46q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f47',
            title: 'Lesson 47',
            description: 'Description 47',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f47q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f47q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f47q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f47q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f47q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f48',
            title: 'Lesson 48',
            description: 'Description 48',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f48q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f48q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f48q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f48q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f48q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f49',
            title: 'Lesson 49',
            description: 'Description 49',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f49q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f49q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f49q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f49q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f49q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f50',
            title: 'Lesson 50',
            description: 'Description 50',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f50q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f50q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f50q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f50q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f50q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f51',
            title: 'Lesson 51',
            description: 'Description 51',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f51q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f51q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f51q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f51q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f51q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f52',
            title: 'Lesson 52',
            description: 'Description 52',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f52q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f52q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f52q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f52q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f52q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f53',
            title: 'Lesson 53',
            description: 'Description 53',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f53q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f53q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f53q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f53q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f53q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f54',
            title: 'Lesson 54',
            description: 'Description 54',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f54q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f54q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f54q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f54q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f54q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f55',
            title: 'Lesson 55',
            description: 'Description 55',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f55q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f55q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f55q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f55q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f55q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f56',
            title: 'Lesson 56',
            description: 'Description 56',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f56q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f56q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f56q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f56q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f56q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f57',
            title: 'Lesson 57',
            description: 'Description 57',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f57q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f57q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f57q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f57q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f57q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f58',
            title: 'Lesson 58',
            description: 'Description 58',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f58q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f58q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f58q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f58q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f58q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f59',
            title: 'Lesson 59',
            description: 'Description 59',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f59q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f59q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f59q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f59q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f59q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f60',
            title: 'Lesson 60',
            description: 'Description 60',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f60q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f60q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f60q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f60q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f60q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f61',
            title: 'Lesson 61',
            description: 'Description 61',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f61q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f61q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f61q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f61q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f61q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f62',
            title: 'Lesson 62',
            description: 'Description 62',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f62q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f62q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f62q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f62q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f62q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f63',
            title: 'Lesson 63',
            description: 'Description 63',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f63q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f63q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f63q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f63q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f63q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f64',
            title: 'Lesson 64',
            description: 'Description 64',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f64q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f64q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f64q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f64q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f64q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f65',
            title: 'Lesson 65',
            description: 'Description 65',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f65q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f65q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f65q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f65q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f65q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        },
        {
            id: 'f66',
            title: 'Lesson 66',
            description: 'Description 66',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 'f66q1',
                    type: 'translate',
                    prompt: '\'Pomme\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Pomme',
                    audioLang: 'fr'
                },
                {
                    id: 'f66q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Livre\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Livre',
                    audioLang: 'fr'
                },
                {
                    id: 'f66q3',
                    type: 'translate',
                    prompt: '\'Voiture\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Voiture',
                    audioLang: 'fr'
                },
                {
                    id: 'f66q4',
                    type: 'multipleChoice',
                    prompt: '\'Bonjour\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Bonjour',
                    audioLang: 'fr'
                },
                {
                    id: 'f66q5',
                    type: 'translate',
                    prompt: '\'Eau\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Eau',
                    audioLang: 'fr'
                }
            ]
        }
    ],
    // =====================================================
    // TURKISH — 66 lessons
    // =====================================================
    turkish: [
        {
            id: 't1',
            title: 'Lesson 1',
            description: 'Description 1',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't1q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't1q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't1q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't1q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't1q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't2',
            title: 'Lesson 2',
            description: 'Description 2',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't2q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't2q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't2q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't2q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't2q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't3',
            title: 'Lesson 3',
            description: 'Description 3',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't3q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't3q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't3q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't3q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't3q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't4',
            title: 'Lesson 4',
            description: 'Description 4',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't4q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't4q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't4q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't4q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't4q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't5',
            title: 'Lesson 5',
            description: 'Description 5',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't5q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't5q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't5q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't5q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't5q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't6',
            title: 'Lesson 6',
            description: 'Description 6',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't6q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't6q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't6q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't6q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't6q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't7',
            title: 'Lesson 7',
            description: 'Description 7',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't7q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't7q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't7q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't7q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't7q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't8',
            title: 'Lesson 8',
            description: 'Description 8',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't8q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't8q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't8q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't8q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't8q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't9',
            title: 'Lesson 9',
            description: 'Description 9',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't9q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't9q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't9q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't9q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't9q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't10',
            title: 'Lesson 10',
            description: 'Description 10',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't10q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't10q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't10q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't10q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't10q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't11',
            title: 'Lesson 11',
            description: 'Description 11',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't11q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't11q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't11q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't11q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't11q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't12',
            title: 'Lesson 12',
            description: 'Description 12',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't12q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't12q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't12q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't12q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't12q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't13',
            title: 'Lesson 13',
            description: 'Description 13',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't13q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't13q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't13q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't13q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't13q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't14',
            title: 'Lesson 14',
            description: 'Description 14',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't14q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't14q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't14q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't14q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't14q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't15',
            title: 'Lesson 15',
            description: 'Description 15',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't15q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't15q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't15q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't15q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't15q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't16',
            title: 'Lesson 16',
            description: 'Description 16',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't16q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't16q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't16q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't16q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't16q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't17',
            title: 'Lesson 17',
            description: 'Description 17',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't17q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't17q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't17q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't17q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't17q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't18',
            title: 'Lesson 18',
            description: 'Description 18',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't18q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't18q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't18q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't18q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't18q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't19',
            title: 'Lesson 19',
            description: 'Description 19',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't19q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't19q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't19q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't19q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't19q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't20',
            title: 'Lesson 20',
            description: 'Description 20',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't20q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't20q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't20q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't20q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't20q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't21',
            title: 'Lesson 21',
            description: 'Description 21',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't21q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't21q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't21q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't21q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't21q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't22',
            title: 'Lesson 22',
            description: 'Description 22',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't22q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't22q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't22q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't22q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't22q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't23',
            title: 'Lesson 23',
            description: 'Description 23',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't23q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't23q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't23q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't23q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't23q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't24',
            title: 'Lesson 24',
            description: 'Description 24',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't24q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't24q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't24q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't24q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't24q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't25',
            title: 'Lesson 25',
            description: 'Description 25',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't25q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't25q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't25q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't25q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't25q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't26',
            title: 'Lesson 26',
            description: 'Description 26',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't26q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't26q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't26q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't26q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't26q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't27',
            title: 'Lesson 27',
            description: 'Description 27',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't27q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't27q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't27q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't27q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't27q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't28',
            title: 'Lesson 28',
            description: 'Description 28',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't28q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't28q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't28q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't28q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't28q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't29',
            title: 'Lesson 29',
            description: 'Description 29',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't29q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't29q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't29q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't29q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't29q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't30',
            title: 'Lesson 30',
            description: 'Description 30',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't30q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't30q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't30q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't30q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't30q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't31',
            title: 'Lesson 31',
            description: 'Description 31',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't31q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't31q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't31q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't31q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't31q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't32',
            title: 'Lesson 32',
            description: 'Description 32',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't32q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't32q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't32q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't32q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't32q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't33',
            title: 'Lesson 33',
            description: 'Description 33',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't33q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't33q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't33q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't33q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't33q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't34',
            title: 'Lesson 34',
            description: 'Description 34',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't34q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't34q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't34q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't34q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't34q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't35',
            title: 'Lesson 35',
            description: 'Description 35',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't35q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't35q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't35q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't35q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't35q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't36',
            title: 'Lesson 36',
            description: 'Description 36',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't36q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't36q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't36q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't36q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't36q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't37',
            title: 'Lesson 37',
            description: 'Description 37',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't37q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't37q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't37q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't37q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't37q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't38',
            title: 'Lesson 38',
            description: 'Description 38',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't38q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't38q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't38q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't38q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't38q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't39',
            title: 'Lesson 39',
            description: 'Description 39',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't39q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't39q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't39q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't39q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't39q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't40',
            title: 'Lesson 40',
            description: 'Description 40',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't40q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't40q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't40q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't40q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't40q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't41',
            title: 'Lesson 41',
            description: 'Description 41',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't41q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't41q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't41q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't41q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't41q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't42',
            title: 'Lesson 42',
            description: 'Description 42',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't42q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't42q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't42q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't42q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't42q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't43',
            title: 'Lesson 43',
            description: 'Description 43',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't43q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't43q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't43q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't43q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't43q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't44',
            title: 'Lesson 44',
            description: 'Description 44',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't44q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't44q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't44q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't44q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't44q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't45',
            title: 'Lesson 45',
            description: 'Description 45',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't45q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't45q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't45q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't45q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't45q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't46',
            title: 'Lesson 46',
            description: 'Description 46',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't46q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't46q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't46q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't46q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't46q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't47',
            title: 'Lesson 47',
            description: 'Description 47',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't47q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't47q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't47q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't47q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't47q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't48',
            title: 'Lesson 48',
            description: 'Description 48',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't48q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't48q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't48q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't48q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't48q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't49',
            title: 'Lesson 49',
            description: 'Description 49',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't49q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't49q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't49q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't49q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't49q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't50',
            title: 'Lesson 50',
            description: 'Description 50',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't50q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't50q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't50q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't50q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't50q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't51',
            title: 'Lesson 51',
            description: 'Description 51',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't51q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't51q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't51q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't51q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't51q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't52',
            title: 'Lesson 52',
            description: 'Description 52',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't52q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't52q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't52q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't52q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't52q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't53',
            title: 'Lesson 53',
            description: 'Description 53',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't53q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't53q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't53q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't53q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't53q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't54',
            title: 'Lesson 54',
            description: 'Description 54',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't54q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't54q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't54q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't54q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't54q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't55',
            title: 'Lesson 55',
            description: 'Description 55',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't55q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't55q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't55q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't55q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't55q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't56',
            title: 'Lesson 56',
            description: 'Description 56',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't56q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't56q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't56q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't56q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't56q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't57',
            title: 'Lesson 57',
            description: 'Description 57',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't57q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't57q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't57q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't57q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't57q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't58',
            title: 'Lesson 58',
            description: 'Description 58',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't58q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't58q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't58q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't58q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't58q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't59',
            title: 'Lesson 59',
            description: 'Description 59',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't59q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't59q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't59q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't59q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't59q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't60',
            title: 'Lesson 60',
            description: 'Description 60',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't60q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't60q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't60q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't60q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't60q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't61',
            title: 'Lesson 61',
            description: 'Description 61',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't61q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't61q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't61q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't61q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't61q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't62',
            title: 'Lesson 62',
            description: 'Description 62',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't62q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't62q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't62q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't62q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't62q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't63',
            title: 'Lesson 63',
            description: 'Description 63',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't63q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't63q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't63q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't63q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't63q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't64',
            title: 'Lesson 64',
            description: 'Description 64',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't64q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't64q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't64q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't64q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't64q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't65',
            title: 'Lesson 65',
            description: 'Description 65',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't65q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't65q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't65q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't65q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't65q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        },
        {
            id: 't66',
            title: 'Lesson 66',
            description: 'Description 66',
            icon: '📚',
            xpReward: 20,
            questions: [
                {
                    id: 't66q1',
                    type: 'translate',
                    prompt: '\'Elma\' ne demektir?',
                    options: [
                        'Elma',
                        'Armut',
                        'Muz',
                        'Çilek'
                    ],
                    correctIndex: 0,
                    audioText: 'Elma',
                    audioLang: 'tr'
                },
                {
                    id: 't66q2',
                    type: 'multipleChoice',
                    prompt: 'Hangisi \'Kitap\' demektir?',
                    options: [
                        'Defter',
                        'Kitap',
                        'Kalem',
                        'Silgi'
                    ],
                    correctIndex: 1,
                    audioText: 'Kitap',
                    audioLang: 'tr'
                },
                {
                    id: 't66q3',
                    type: 'translate',
                    prompt: '\'Araba\' kelimesinin anlamı nedir?',
                    options: [
                        'Otobüs',
                        'Tren',
                        'Araba',
                        'Uçak'
                    ],
                    correctIndex: 2,
                    audioText: 'Araba',
                    audioLang: 'tr'
                },
                {
                    id: 't66q4',
                    type: 'multipleChoice',
                    prompt: '\'Merhaba\' ne demektir?',
                    options: [
                        'Nasılsın',
                        'Hoşçakal',
                        'Günaydın',
                        'Merhaba'
                    ],
                    correctIndex: 3,
                    audioText: 'Merhaba',
                    audioLang: 'tr'
                },
                {
                    id: 't66q5',
                    type: 'translate',
                    prompt: '\'Su\' nedir?',
                    options: [
                        'Su',
                        'Süt',
                        'Çay',
                        'Kahve'
                    ],
                    correctIndex: 0,
                    audioText: 'Su',
                    audioLang: 'tr'
                }
            ]
        }
    ]
};
