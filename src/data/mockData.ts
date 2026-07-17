export interface LevelData {
  id: string;
  name: string;
  icon: string;
  type: 'lesson' | 'story' | 'alphabet';
  isLocked?: boolean;
}

export interface UnitData {
  id: string;
  title: string;
  description: string;
  color: string;
  levels: LevelData[];
}

export interface LanguageCourse {
  title: string;
  description: string;
  units: UnitData[];
}

export const languagesData: Record<string, LanguageCourse> = {
  kurdish: {
    title: 'Kürtçe (Kurmancî)',
    description: 'Mezopotamya\'nın kadim dili',
    units: [
    {
        id: 'ku-u1',
        title: 'Ünite 1',
        description: 'Temeller',
        color: '#58CC02',
        levels: [
            {
                id: 'k1',
                name: 'Temeller 1',
                icon: 'ğŸ¥š',
                type: 'lesson'
            },
            {
                id: 'k2',
                name: 'Temel Eylemler',
                icon: 'ğŸƒ',
                type: 'alphabet'
            },
            {
                id: 'k3',
                name: 'Temeller 2',
                icon: 'ğŸ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u2',
        title: 'Ünite 2',
        description: 'Günlük Konuşmalar',
        color: '#CE82FF',
        levels: [
            {
                id: 'k4',
                name: 'Selamlaşma',
                icon: 'ğŸ‘‹',
                type: 'lesson'
            },
            {
                id: 'k5',
                name: 'Aile',
                icon: 'ğŸ‘¨â€ğŸ‘©â€ğŸ‘§',
                type: 'lesson'
            },
            {
                id: 'k6',
                name: 'Renkler',
                icon: 'ğŸ¨',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u3',
        title: 'Ünite 3',
        description: 'Sayılar ve Zaman',
        color: '#FF9600',
        levels: [
            {
                id: 'k7',
                name: 'Sayılar',
                icon: '1ï¸âƒ£',
                type: 'lesson'
            },
            {
                id: 'k8',
                name: 'Günler ve Aylar',
                icon: 'ğŸ“…',
                type: 'lesson'
            },
            {
                id: 'k9',
                name: 'Saatler',
                icon: 'â°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u4',
        title: 'Ünite 4',
        description: 'Hayvanlar ve Doğa',
        color: '#1CB0F6',
        levels: [
            {
                id: 'k10',
                name: 'Evcil Hayvanlar',
                icon: 'ğŸ¶',
                type: 'lesson'
            },
            {
                id: 'k11',
                name: 'Vahşi Hayvanlar',
                icon: 'ğŸ¦',
                type: 'lesson'
            },
            {
                id: 'k12',
                name: 'Doğa',
                icon: 'ğŸŒ³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u5',
        title: 'Ünite 5',
        description: 'Yiyecek ve İçecek',
        color: '#FF4B4B',
        levels: [
            {
                id: 'k13',
                name: 'Meyveler',
                icon: 'ğŸ',
                type: 'lesson'
            },
            {
                id: 'k14',
                name: 'Sebzeler',
                icon: 'ğŸ¥•',
                type: 'lesson'
            },
            {
                id: 'k15',
                name: 'İçecekler',
                icon: 'â˜•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u6',
        title: 'Ünite 6',
        description: 'Ev ve Eşyalar',
        color: '#CE82FF',
        levels: [
            {
                id: 'k16',
                name: 'Odalar',
                icon: 'ğŸ ',
                type: 'lesson'
            },
            {
                id: 'k17',
                name: 'Mobilyalar',
                icon: 'ğŸ›‹ï¸',
                type: 'lesson'
            },
            {
                id: 'k18',
                name: 'Mutfak Eşyaları',
                icon: 'ğŸ½ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u7',
        title: 'Ünite 7',
        description: 'Vücudumuz ve Sağlık',
        color: '#58CC02',
        levels: [
            {
                id: 'k19',
                name: 'Vücut Bölümleri',
                icon: 'ğŸ’ª',
                type: 'lesson'
            },
            {
                id: 'k20',
                name: 'Hastalıklar',
                icon: 'ğŸ¤’',
                type: 'lesson'
            },
            {
                id: 'k21',
                name: 'Hastanede',
                icon: 'ğŸ¥',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u8',
        title: 'Ünite 8',
        description: 'Giysiler ve Alışveriş',
        color: '#FF9600',
        levels: [
            {
                id: 'k22',
                name: 'Kıyafetler',
                icon: 'ğŸ‘•',
                type: 'lesson'
            },
            {
                id: 'k23',
                name: 'Renklerle Giyim',
                icon: 'ğŸ‘—',
                type: 'lesson'
            },
            {
                id: 'k24',
                name: 'Pazarda',
                icon: 'ğŸ›ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u9',
        title: 'Ünite 9',
        description: 'Meslekler ve İş',
        color: '#1CB0F6',
        levels: [
            {
                id: 'k25',
                name: 'Meslekler 1',
                icon: 'ğŸ‘¨â€âš•ï¸',
                type: 'lesson'
            },
            {
                id: 'k26',
                name: 'Meslekler 2',
                icon: 'ğŸ‘©â€ğŸ«',
                type: 'lesson'
            },
            {
                id: 'k27',
                name: 'İş Yerinde',
                icon: 'ğŸ¢',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u10',
        title: 'Ünite 10',
        description: 'Åehir ve Ulaşım',
        color: '#FF4B4B',
        levels: [
            {
                id: 'k28',
                name: 'Mekanlar',
                icon: 'ğŸ™ï¸',
                type: 'lesson'
            },
            {
                id: 'k29',
                name: 'Taşıtlar',
                icon: 'ğŸš—',
                type: 'lesson'
            },
            {
                id: 'k30',
                name: 'Yön Sorma',
                icon: 'ğŸ—ºï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u11',
        title: 'Ünite 11',
        description: 'Günlük Rutinler',
        color: '#CE82FF',
        levels: [
            {
                id: 'k31',
                name: 'Sabah Rutini',
                icon: 'ğŸŒ…',
                type: 'lesson'
            },
            {
                id: 'k32',
                name: 'İş ve Okul',
                icon: 'ğŸ«',
                type: 'lesson'
            },
            {
                id: 'k33',
                name: 'Akşam Rutini',
                icon: 'ğŸŒƒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u12',
        title: 'Ünite 12',
        description: 'Duygular ve Kişilik',
        color: '#58CC02',
        levels: [
            {
                id: 'k34',
                name: 'Hisler',
                icon: 'ğŸ˜Š',
                type: 'lesson'
            },
            {
                id: 'k35',
                name: 'Karakter Özellikleri',
                icon: 'ğŸ§ ',
                type: 'lesson'
            },
            {
                id: 'k36',
                name: 'Tepkiler',
                icon: 'ğŸ˜²',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u13',
        title: 'Ünite 13',
        description: 'Fiiller 1',
        color: '#FF9600',
        levels: [
            {
                id: 'k37',
                name: 'Hareket Fiilleri',
                icon: 'ğŸƒâ€â™‚ï¸',
                type: 'lesson'
            },
            {
                id: 'k38',
                name: 'Durum Fiilleri',
                icon: 'ğŸ§˜',
                type: 'lesson'
            },
            {
                id: 'k39',
                name: 'Günlük Fiiller',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u14',
        title: 'Ünite 14',
        description: 'Fiiller 2',
        color: '#1CB0F6',
        levels: [
            {
                id: 'k40',
                name: 'Geçmiş Zaman',
                icon: 'âª',
                type: 'lesson'
            },
            {
                id: 'k41',
                name: 'Gelecek Zaman',
                icon: 'â©',
                type: 'lesson'
            },
            {
                id: 'k42',
                name: 'Emir Kipleri',
                icon: 'â—',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u15',
        title: 'Ünite 15',
        description: 'Eğitim ve Okul',
        color: '#FF4B4B',
        levels: [
            {
                id: 'k43',
                name: 'Okul Eşyaları',
                icon: 'ğŸ’',
                type: 'lesson'
            },
            {
                id: 'k44',
                name: 'Dersler',
                icon: 'ğŸ“š',
                type: 'lesson'
            },
            {
                id: 'k45',
                name: 'Sınıfta',
                icon: 'ğŸ‘©â€ğŸ“',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u16',
        title: 'Ünite 16',
        description: 'Tatil ve Seyahat',
        color: '#CE82FF',
        levels: [
            {
                id: 'k46',
                name: 'Tatil Yerleri',
                icon: 'ğŸ–ï¸',
                type: 'lesson'
            },
            {
                id: 'k47',
                name: 'Otelde',
                icon: 'ğŸ¨',
                type: 'lesson'
            },
            {
                id: 'k48',
                name: 'Seyahat Planı',
                icon: 'ğŸ§³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u17',
        title: 'Ünite 17',
        description: 'Hobiler ve Eğlence',
        color: '#58CC02',
        levels: [
            {
                id: 'k49',
                name: 'Spor',
                icon: 'âš½',
                type: 'lesson'
            },
            {
                id: 'k50',
                name: 'Müzik ve Sanat',
                icon: 'ğŸ¸',
                type: 'lesson'
            },
            {
                id: 'k51',
                name: 'Boş Zaman',
                icon: 'ğŸ®',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u18',
        title: 'Ünite 18',
        description: 'Doğa ve Çevre',
        color: '#FF9600',
        levels: [
            {
                id: 'k52',
                name: 'Mevsimler',
                icon: 'ğŸ‚',
                type: 'lesson'
            },
            {
                id: 'k53',
                name: 'Hava Durumu',
                icon: 'ğŸŒ¦ï¸',
                type: 'lesson'
            },
            {
                id: 'k54',
                name: 'Coğrafya',
                icon: 'ğŸŒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u19',
        title: 'Ünite 19',
        description: 'Sosyal Hayat',
        color: '#1CB0F6',
        levels: [
            {
                id: 'k55',
                name: 'Arkadaşlık',
                icon: 'ğŸ¤',
                type: 'lesson'
            },
            {
                id: 'k56',
                name: 'Davetler',
                icon: 'ğŸ’Œ',
                type: 'lesson'
            },
            {
                id: 'k57',
                name: 'Kutlamalar',
                icon: 'ğŸ‰',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u20',
        title: 'Ünite 20',
        description: 'İleri Seviye Gramer',
        color: '#FF4B4B',
        levels: [
            {
                id: 'k58',
                name: 'Bağlaçlar',
                icon: 'ğŸ”—',
                type: 'lesson'
            },
            {
                id: 'k59',
                name: 'Soru Kelimeleri',
                icon: 'â“',
                type: 'lesson'
            },
            {
                id: 'k60',
                name: 'Edatlar',
                icon: 'â•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u21',
        title: 'Ünite 21',
        description: 'İleri Seviye İletişim',
        color: '#CE82FF',
        levels: [
            {
                id: 'k61',
                name: 'Fikir Belirtme',
                icon: 'ğŸ’¡',
                type: 'lesson'
            },
            {
                id: 'k62',
                name: 'Tartışma',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            },
            {
                id: 'k63',
                name: 'Haberler',
                icon: 'ğŸ“°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'ku-u22',
        title: 'Ünite 22',
        description: 'Kültür ve Edebiyat',
        color: '#58CC02',
        levels: [
            {
                id: 'k64',
                name: 'Atasözleri',
                icon: 'ğŸ“œ',
                type: 'lesson'
            },
            {
                id: 'k65',
                name: 'Masallar',
                icon: 'ğŸ¦„',
                type: 'lesson'
            },
            {
                id: 'k66',
                name: 'Gelenekler',
                icon: 'ğŸ­',
                type: 'lesson'
            }
        ]
    }
]
  },
  turkish: {
    title: 'Türkçe',
    description: 'Türkçe pratiği yap',
    units: [
    {
        id: 'tr-u1',
        title: 'Ünite 1',
        description: 'Temeller',
        color: '#58CC02',
        levels: [
            {
                id: 't1',
                name: 'Temeller 1',
                icon: 'ğŸ¥š',
                type: 'lesson'
            },
            {
                id: 't2',
                name: 'Temel Eylemler',
                icon: 'ğŸƒ',
                type: 'alphabet'
            },
            {
                id: 't3',
                name: 'Temeller 2',
                icon: 'ğŸ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u2',
        title: 'Ünite 2',
        description: 'Günlük Konuşmalar',
        color: '#CE82FF',
        levels: [
            {
                id: 't4',
                name: 'Selamlaşma',
                icon: 'ğŸ‘‹',
                type: 'lesson'
            },
            {
                id: 't5',
                name: 'Aile',
                icon: 'ğŸ‘¨â€ğŸ‘©â€ğŸ‘§',
                type: 'lesson'
            },
            {
                id: 't6',
                name: 'Renkler',
                icon: 'ğŸ¨',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u3',
        title: 'Ünite 3',
        description: 'Sayılar ve Zaman',
        color: '#FF9600',
        levels: [
            {
                id: 't7',
                name: 'Sayılar',
                icon: '1ï¸âƒ£',
                type: 'lesson'
            },
            {
                id: 't8',
                name: 'Günler ve Aylar',
                icon: 'ğŸ“…',
                type: 'lesson'
            },
            {
                id: 't9',
                name: 'Saatler',
                icon: 'â°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u4',
        title: 'Ünite 4',
        description: 'Hayvanlar ve Doğa',
        color: '#1CB0F6',
        levels: [
            {
                id: 't10',
                name: 'Evcil Hayvanlar',
                icon: 'ğŸ¶',
                type: 'lesson'
            },
            {
                id: 't11',
                name: 'Vahşi Hayvanlar',
                icon: 'ğŸ¦',
                type: 'lesson'
            },
            {
                id: 't12',
                name: 'Doğa',
                icon: 'ğŸŒ³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u5',
        title: 'Ünite 5',
        description: 'Yiyecek ve İçecek',
        color: '#FF4B4B',
        levels: [
            {
                id: 't13',
                name: 'Meyveler',
                icon: 'ğŸ',
                type: 'lesson'
            },
            {
                id: 't14',
                name: 'Sebzeler',
                icon: 'ğŸ¥•',
                type: 'lesson'
            },
            {
                id: 't15',
                name: 'İçecekler',
                icon: 'â˜•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u6',
        title: 'Ünite 6',
        description: 'Ev ve Eşyalar',
        color: '#CE82FF',
        levels: [
            {
                id: 't16',
                name: 'Odalar',
                icon: 'ğŸ ',
                type: 'lesson'
            },
            {
                id: 't17',
                name: 'Mobilyalar',
                icon: 'ğŸ›‹ï¸',
                type: 'lesson'
            },
            {
                id: 't18',
                name: 'Mutfak Eşyaları',
                icon: 'ğŸ½ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u7',
        title: 'Ünite 7',
        description: 'Vücudumuz ve Sağlık',
        color: '#58CC02',
        levels: [
            {
                id: 't19',
                name: 'Vücut Bölümleri',
                icon: 'ğŸ’ª',
                type: 'lesson'
            },
            {
                id: 't20',
                name: 'Hastalıklar',
                icon: 'ğŸ¤’',
                type: 'lesson'
            },
            {
                id: 't21',
                name: 'Hastanede',
                icon: 'ğŸ¥',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u8',
        title: 'Ünite 8',
        description: 'Giysiler ve Alışveriş',
        color: '#FF9600',
        levels: [
            {
                id: 't22',
                name: 'Kıyafetler',
                icon: 'ğŸ‘•',
                type: 'lesson'
            },
            {
                id: 't23',
                name: 'Renklerle Giyim',
                icon: 'ğŸ‘—',
                type: 'lesson'
            },
            {
                id: 't24',
                name: 'Pazarda',
                icon: 'ğŸ›ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u9',
        title: 'Ünite 9',
        description: 'Meslekler ve İş',
        color: '#1CB0F6',
        levels: [
            {
                id: 't25',
                name: 'Meslekler 1',
                icon: 'ğŸ‘¨â€âš•ï¸',
                type: 'lesson'
            },
            {
                id: 't26',
                name: 'Meslekler 2',
                icon: 'ğŸ‘©â€ğŸ«',
                type: 'lesson'
            },
            {
                id: 't27',
                name: 'İş Yerinde',
                icon: 'ğŸ¢',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u10',
        title: 'Ünite 10',
        description: 'Åehir ve Ulaşım',
        color: '#FF4B4B',
        levels: [
            {
                id: 't28',
                name: 'Mekanlar',
                icon: 'ğŸ™ï¸',
                type: 'lesson'
            },
            {
                id: 't29',
                name: 'Taşıtlar',
                icon: 'ğŸš—',
                type: 'lesson'
            },
            {
                id: 't30',
                name: 'Yön Sorma',
                icon: 'ğŸ—ºï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u11',
        title: 'Ünite 11',
        description: 'Günlük Rutinler',
        color: '#CE82FF',
        levels: [
            {
                id: 't31',
                name: 'Sabah Rutini',
                icon: 'ğŸŒ…',
                type: 'lesson'
            },
            {
                id: 't32',
                name: 'İş ve Okul',
                icon: 'ğŸ«',
                type: 'lesson'
            },
            {
                id: 't33',
                name: 'Akşam Rutini',
                icon: 'ğŸŒƒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u12',
        title: 'Ünite 12',
        description: 'Duygular ve Kişilik',
        color: '#58CC02',
        levels: [
            {
                id: 't34',
                name: 'Hisler',
                icon: 'ğŸ˜Š',
                type: 'lesson'
            },
            {
                id: 't35',
                name: 'Karakter Özellikleri',
                icon: 'ğŸ§ ',
                type: 'lesson'
            },
            {
                id: 't36',
                name: 'Tepkiler',
                icon: 'ğŸ˜²',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u13',
        title: 'Ünite 13',
        description: 'Fiiller 1',
        color: '#FF9600',
        levels: [
            {
                id: 't37',
                name: 'Hareket Fiilleri',
                icon: 'ğŸƒâ€â™‚ï¸',
                type: 'lesson'
            },
            {
                id: 't38',
                name: 'Durum Fiilleri',
                icon: 'ğŸ§˜',
                type: 'lesson'
            },
            {
                id: 't39',
                name: 'Günlük Fiiller',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u14',
        title: 'Ünite 14',
        description: 'Fiiller 2',
        color: '#1CB0F6',
        levels: [
            {
                id: 't40',
                name: 'Geçmiş Zaman',
                icon: 'âª',
                type: 'lesson'
            },
            {
                id: 't41',
                name: 'Gelecek Zaman',
                icon: 'â©',
                type: 'lesson'
            },
            {
                id: 't42',
                name: 'Emir Kipleri',
                icon: 'â—',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u15',
        title: 'Ünite 15',
        description: 'Eğitim ve Okul',
        color: '#FF4B4B',
        levels: [
            {
                id: 't43',
                name: 'Okul Eşyaları',
                icon: 'ğŸ’',
                type: 'lesson'
            },
            {
                id: 't44',
                name: 'Dersler',
                icon: 'ğŸ“š',
                type: 'lesson'
            },
            {
                id: 't45',
                name: 'Sınıfta',
                icon: 'ğŸ‘©â€ğŸ“',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u16',
        title: 'Ünite 16',
        description: 'Tatil ve Seyahat',
        color: '#CE82FF',
        levels: [
            {
                id: 't46',
                name: 'Tatil Yerleri',
                icon: 'ğŸ–ï¸',
                type: 'lesson'
            },
            {
                id: 't47',
                name: 'Otelde',
                icon: 'ğŸ¨',
                type: 'lesson'
            },
            {
                id: 't48',
                name: 'Seyahat Planı',
                icon: 'ğŸ§³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u17',
        title: 'Ünite 17',
        description: 'Hobiler ve Eğlence',
        color: '#58CC02',
        levels: [
            {
                id: 't49',
                name: 'Spor',
                icon: 'âš½',
                type: 'lesson'
            },
            {
                id: 't50',
                name: 'Müzik ve Sanat',
                icon: 'ğŸ¸',
                type: 'lesson'
            },
            {
                id: 't51',
                name: 'Boş Zaman',
                icon: 'ğŸ®',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u18',
        title: 'Ünite 18',
        description: 'Doğa ve Çevre',
        color: '#FF9600',
        levels: [
            {
                id: 't52',
                name: 'Mevsimler',
                icon: 'ğŸ‚',
                type: 'lesson'
            },
            {
                id: 't53',
                name: 'Hava Durumu',
                icon: 'ğŸŒ¦ï¸',
                type: 'lesson'
            },
            {
                id: 't54',
                name: 'Coğrafya',
                icon: 'ğŸŒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u19',
        title: 'Ünite 19',
        description: 'Sosyal Hayat',
        color: '#1CB0F6',
        levels: [
            {
                id: 't55',
                name: 'Arkadaşlık',
                icon: 'ğŸ¤',
                type: 'lesson'
            },
            {
                id: 't56',
                name: 'Davetler',
                icon: 'ğŸ’Œ',
                type: 'lesson'
            },
            {
                id: 't57',
                name: 'Kutlamalar',
                icon: 'ğŸ‰',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u20',
        title: 'Ünite 20',
        description: 'İleri Seviye Gramer',
        color: '#FF4B4B',
        levels: [
            {
                id: 't58',
                name: 'Bağlaçlar',
                icon: 'ğŸ”—',
                type: 'lesson'
            },
            {
                id: 't59',
                name: 'Soru Kelimeleri',
                icon: 'â“',
                type: 'lesson'
            },
            {
                id: 't60',
                name: 'Edatlar',
                icon: 'â•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u21',
        title: 'Ünite 21',
        description: 'İleri Seviye İletişim',
        color: '#CE82FF',
        levels: [
            {
                id: 't61',
                name: 'Fikir Belirtme',
                icon: 'ğŸ’¡',
                type: 'lesson'
            },
            {
                id: 't62',
                name: 'Tartışma',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            },
            {
                id: 't63',
                name: 'Haberler',
                icon: 'ğŸ“°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'tr-u22',
        title: 'Ünite 22',
        description: 'Kültür ve Edebiyat',
        color: '#58CC02',
        levels: [
            {
                id: 't64',
                name: 'Atasözleri',
                icon: 'ğŸ“œ',
                type: 'lesson'
            },
            {
                id: 't65',
                name: 'Masallar',
                icon: 'ğŸ¦„',
                type: 'lesson'
            },
            {
                id: 't66',
                name: 'Gelenekler',
                icon: 'ğŸ­',
                type: 'lesson'
            }
        ]
    }
]
  },
  english: {
    title: 'İngilizce',
    description: 'Evrensel dil',
    units: [
    {
        id: 'en-u1',
        title: 'Ünite 1',
        description: 'Temeller',
        color: '#58CC02',
        levels: [
            {
                id: 'e1',
                name: 'Temeller 1',
                icon: 'ğŸ¥š',
                type: 'lesson'
            },
            {
                id: 'e2',
                name: 'Temel Eylemler',
                icon: 'ğŸƒ',
                type: 'alphabet'
            },
            {
                id: 'e3',
                name: 'Temeller 2',
                icon: 'ğŸ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u2',
        title: 'Ünite 2',
        description: 'Günlük Konuşmalar',
        color: '#CE82FF',
        levels: [
            {
                id: 'e4',
                name: 'Selamlaşma',
                icon: 'ğŸ‘‹',
                type: 'lesson'
            },
            {
                id: 'e5',
                name: 'Aile',
                icon: 'ğŸ‘¨â€ğŸ‘©â€ğŸ‘§',
                type: 'lesson'
            },
            {
                id: 'e6',
                name: 'Renkler',
                icon: 'ğŸ¨',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u3',
        title: 'Ünite 3',
        description: 'Sayılar ve Zaman',
        color: '#FF9600',
        levels: [
            {
                id: 'e7',
                name: 'Sayılar',
                icon: '1ï¸âƒ£',
                type: 'lesson'
            },
            {
                id: 'e8',
                name: 'Günler ve Aylar',
                icon: 'ğŸ“…',
                type: 'lesson'
            },
            {
                id: 'e9',
                name: 'Saatler',
                icon: 'â°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u4',
        title: 'Ünite 4',
        description: 'Hayvanlar ve Doğa',
        color: '#1CB0F6',
        levels: [
            {
                id: 'e10',
                name: 'Evcil Hayvanlar',
                icon: 'ğŸ¶',
                type: 'lesson'
            },
            {
                id: 'e11',
                name: 'Vahşi Hayvanlar',
                icon: 'ğŸ¦',
                type: 'lesson'
            },
            {
                id: 'e12',
                name: 'Doğa',
                icon: 'ğŸŒ³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u5',
        title: 'Ünite 5',
        description: 'Yiyecek ve İçecek',
        color: '#FF4B4B',
        levels: [
            {
                id: 'e13',
                name: 'Meyveler',
                icon: 'ğŸ',
                type: 'lesson'
            },
            {
                id: 'e14',
                name: 'Sebzeler',
                icon: 'ğŸ¥•',
                type: 'lesson'
            },
            {
                id: 'e15',
                name: 'İçecekler',
                icon: 'â˜•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u6',
        title: 'Ünite 6',
        description: 'Ev ve Eşyalar',
        color: '#CE82FF',
        levels: [
            {
                id: 'e16',
                name: 'Odalar',
                icon: 'ğŸ ',
                type: 'lesson'
            },
            {
                id: 'e17',
                name: 'Mobilyalar',
                icon: 'ğŸ›‹ï¸',
                type: 'lesson'
            },
            {
                id: 'e18',
                name: 'Mutfak Eşyaları',
                icon: 'ğŸ½ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u7',
        title: 'Ünite 7',
        description: 'Vücudumuz ve Sağlık',
        color: '#58CC02',
        levels: [
            {
                id: 'e19',
                name: 'Vücut Bölümleri',
                icon: 'ğŸ’ª',
                type: 'lesson'
            },
            {
                id: 'e20',
                name: 'Hastalıklar',
                icon: 'ğŸ¤’',
                type: 'lesson'
            },
            {
                id: 'e21',
                name: 'Hastanede',
                icon: 'ğŸ¥',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u8',
        title: 'Ünite 8',
        description: 'Giysiler ve Alışveriş',
        color: '#FF9600',
        levels: [
            {
                id: 'e22',
                name: 'Kıyafetler',
                icon: 'ğŸ‘•',
                type: 'lesson'
            },
            {
                id: 'e23',
                name: 'Renklerle Giyim',
                icon: 'ğŸ‘—',
                type: 'lesson'
            },
            {
                id: 'e24',
                name: 'Pazarda',
                icon: 'ğŸ›ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u9',
        title: 'Ünite 9',
        description: 'Meslekler ve İş',
        color: '#1CB0F6',
        levels: [
            {
                id: 'e25',
                name: 'Meslekler 1',
                icon: 'ğŸ‘¨â€âš•ï¸',
                type: 'lesson'
            },
            {
                id: 'e26',
                name: 'Meslekler 2',
                icon: 'ğŸ‘©â€ğŸ«',
                type: 'lesson'
            },
            {
                id: 'e27',
                name: 'İş Yerinde',
                icon: 'ğŸ¢',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u10',
        title: 'Ünite 10',
        description: 'Åehir ve Ulaşım',
        color: '#FF4B4B',
        levels: [
            {
                id: 'e28',
                name: 'Mekanlar',
                icon: 'ğŸ™ï¸',
                type: 'lesson'
            },
            {
                id: 'e29',
                name: 'Taşıtlar',
                icon: 'ğŸš—',
                type: 'lesson'
            },
            {
                id: 'e30',
                name: 'Yön Sorma',
                icon: 'ğŸ—ºï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u11',
        title: 'Ünite 11',
        description: 'Günlük Rutinler',
        color: '#CE82FF',
        levels: [
            {
                id: 'e31',
                name: 'Sabah Rutini',
                icon: 'ğŸŒ…',
                type: 'lesson'
            },
            {
                id: 'e32',
                name: 'İş ve Okul',
                icon: 'ğŸ«',
                type: 'lesson'
            },
            {
                id: 'e33',
                name: 'Akşam Rutini',
                icon: 'ğŸŒƒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u12',
        title: 'Ünite 12',
        description: 'Duygular ve Kişilik',
        color: '#58CC02',
        levels: [
            {
                id: 'e34',
                name: 'Hisler',
                icon: 'ğŸ˜Š',
                type: 'lesson'
            },
            {
                id: 'e35',
                name: 'Karakter Özellikleri',
                icon: 'ğŸ§ ',
                type: 'lesson'
            },
            {
                id: 'e36',
                name: 'Tepkiler',
                icon: 'ğŸ˜²',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u13',
        title: 'Ünite 13',
        description: 'Fiiller 1',
        color: '#FF9600',
        levels: [
            {
                id: 'e37',
                name: 'Hareket Fiilleri',
                icon: 'ğŸƒâ€â™‚ï¸',
                type: 'lesson'
            },
            {
                id: 'e38',
                name: 'Durum Fiilleri',
                icon: 'ğŸ§˜',
                type: 'lesson'
            },
            {
                id: 'e39',
                name: 'Günlük Fiiller',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u14',
        title: 'Ünite 14',
        description: 'Fiiller 2',
        color: '#1CB0F6',
        levels: [
            {
                id: 'e40',
                name: 'Geçmiş Zaman',
                icon: 'âª',
                type: 'lesson'
            },
            {
                id: 'e41',
                name: 'Gelecek Zaman',
                icon: 'â©',
                type: 'lesson'
            },
            {
                id: 'e42',
                name: 'Emir Kipleri',
                icon: 'â—',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u15',
        title: 'Ünite 15',
        description: 'Eğitim ve Okul',
        color: '#FF4B4B',
        levels: [
            {
                id: 'e43',
                name: 'Okul Eşyaları',
                icon: 'ğŸ’',
                type: 'lesson'
            },
            {
                id: 'e44',
                name: 'Dersler',
                icon: 'ğŸ“š',
                type: 'lesson'
            },
            {
                id: 'e45',
                name: 'Sınıfta',
                icon: 'ğŸ‘©â€ğŸ“',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u16',
        title: 'Ünite 16',
        description: 'Tatil ve Seyahat',
        color: '#CE82FF',
        levels: [
            {
                id: 'e46',
                name: 'Tatil Yerleri',
                icon: 'ğŸ–ï¸',
                type: 'lesson'
            },
            {
                id: 'e47',
                name: 'Otelde',
                icon: 'ğŸ¨',
                type: 'lesson'
            },
            {
                id: 'e48',
                name: 'Seyahat Planı',
                icon: 'ğŸ§³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u17',
        title: 'Ünite 17',
        description: 'Hobiler ve Eğlence',
        color: '#58CC02',
        levels: [
            {
                id: 'e49',
                name: 'Spor',
                icon: 'âš½',
                type: 'lesson'
            },
            {
                id: 'e50',
                name: 'Müzik ve Sanat',
                icon: 'ğŸ¸',
                type: 'lesson'
            },
            {
                id: 'e51',
                name: 'Boş Zaman',
                icon: 'ğŸ®',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u18',
        title: 'Ünite 18',
        description: 'Doğa ve Çevre',
        color: '#FF9600',
        levels: [
            {
                id: 'e52',
                name: 'Mevsimler',
                icon: 'ğŸ‚',
                type: 'lesson'
            },
            {
                id: 'e53',
                name: 'Hava Durumu',
                icon: 'ğŸŒ¦ï¸',
                type: 'lesson'
            },
            {
                id: 'e54',
                name: 'Coğrafya',
                icon: 'ğŸŒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u19',
        title: 'Ünite 19',
        description: 'Sosyal Hayat',
        color: '#1CB0F6',
        levels: [
            {
                id: 'e55',
                name: 'Arkadaşlık',
                icon: 'ğŸ¤',
                type: 'lesson'
            },
            {
                id: 'e56',
                name: 'Davetler',
                icon: 'ğŸ’Œ',
                type: 'lesson'
            },
            {
                id: 'e57',
                name: 'Kutlamalar',
                icon: 'ğŸ‰',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u20',
        title: 'Ünite 20',
        description: 'İleri Seviye Gramer',
        color: '#FF4B4B',
        levels: [
            {
                id: 'e58',
                name: 'Bağlaçlar',
                icon: 'ğŸ”—',
                type: 'lesson'
            },
            {
                id: 'e59',
                name: 'Soru Kelimeleri',
                icon: 'â“',
                type: 'lesson'
            },
            {
                id: 'e60',
                name: 'Edatlar',
                icon: 'â•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u21',
        title: 'Ünite 21',
        description: 'İleri Seviye İletişim',
        color: '#CE82FF',
        levels: [
            {
                id: 'e61',
                name: 'Fikir Belirtme',
                icon: 'ğŸ’¡',
                type: 'lesson'
            },
            {
                id: 'e62',
                name: 'Tartışma',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            },
            {
                id: 'e63',
                name: 'Haberler',
                icon: 'ğŸ“°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'en-u22',
        title: 'Ünite 22',
        description: 'Kültür ve Edebiyat',
        color: '#58CC02',
        levels: [
            {
                id: 'e64',
                name: 'Atasözleri',
                icon: 'ğŸ“œ',
                type: 'lesson'
            },
            {
                id: 'e65',
                name: 'Masallar',
                icon: 'ğŸ¦„',
                type: 'lesson'
            },
            {
                id: 'e66',
                name: 'Gelenekler',
                icon: 'ğŸ­',
                type: 'lesson'
            }
        ]
    }
]
  },
  french: {
    title: 'Fransızca',
    description: 'Fransızca dünyasına gir',
    units: [
    {
        id: 'fr-u1',
        title: 'Ünite 1',
        description: 'Temeller',
        color: '#58CC02',
        levels: [
            {
                id: 'f1',
                name: 'Temeller 1',
                icon: 'ğŸ¥š',
                type: 'lesson'
            },
            {
                id: 'f2',
                name: 'Temel Eylemler',
                icon: 'ğŸƒ',
                type: 'alphabet'
            },
            {
                id: 'f3',
                name: 'Temeller 2',
                icon: 'ğŸ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u2',
        title: 'Ünite 2',
        description: 'Günlük Konuşmalar',
        color: '#CE82FF',
        levels: [
            {
                id: 'f4',
                name: 'Selamlaşma',
                icon: 'ğŸ‘‹',
                type: 'lesson'
            },
            {
                id: 'f5',
                name: 'Aile',
                icon: 'ğŸ‘¨â€ğŸ‘©â€ğŸ‘§',
                type: 'lesson'
            },
            {
                id: 'f6',
                name: 'Renkler',
                icon: 'ğŸ¨',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u3',
        title: 'Ünite 3',
        description: 'Sayılar ve Zaman',
        color: '#FF9600',
        levels: [
            {
                id: 'f7',
                name: 'Sayılar',
                icon: '1ï¸âƒ£',
                type: 'lesson'
            },
            {
                id: 'f8',
                name: 'Günler ve Aylar',
                icon: 'ğŸ“…',
                type: 'lesson'
            },
            {
                id: 'f9',
                name: 'Saatler',
                icon: 'â°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u4',
        title: 'Ünite 4',
        description: 'Hayvanlar ve Doğa',
        color: '#1CB0F6',
        levels: [
            {
                id: 'f10',
                name: 'Evcil Hayvanlar',
                icon: 'ğŸ¶',
                type: 'lesson'
            },
            {
                id: 'f11',
                name: 'Vahşi Hayvanlar',
                icon: 'ğŸ¦',
                type: 'lesson'
            },
            {
                id: 'f12',
                name: 'Doğa',
                icon: 'ğŸŒ³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u5',
        title: 'Ünite 5',
        description: 'Yiyecek ve İçecek',
        color: '#FF4B4B',
        levels: [
            {
                id: 'f13',
                name: 'Meyveler',
                icon: 'ğŸ',
                type: 'lesson'
            },
            {
                id: 'f14',
                name: 'Sebzeler',
                icon: 'ğŸ¥•',
                type: 'lesson'
            },
            {
                id: 'f15',
                name: 'İçecekler',
                icon: 'â˜•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u6',
        title: 'Ünite 6',
        description: 'Ev ve Eşyalar',
        color: '#CE82FF',
        levels: [
            {
                id: 'f16',
                name: 'Odalar',
                icon: 'ğŸ ',
                type: 'lesson'
            },
            {
                id: 'f17',
                name: 'Mobilyalar',
                icon: 'ğŸ›‹ï¸',
                type: 'lesson'
            },
            {
                id: 'f18',
                name: 'Mutfak Eşyaları',
                icon: 'ğŸ½ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u7',
        title: 'Ünite 7',
        description: 'Vücudumuz ve Sağlık',
        color: '#58CC02',
        levels: [
            {
                id: 'f19',
                name: 'Vücut Bölümleri',
                icon: 'ğŸ’ª',
                type: 'lesson'
            },
            {
                id: 'f20',
                name: 'Hastalıklar',
                icon: 'ğŸ¤’',
                type: 'lesson'
            },
            {
                id: 'f21',
                name: 'Hastanede',
                icon: 'ğŸ¥',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u8',
        title: 'Ünite 8',
        description: 'Giysiler ve Alışveriş',
        color: '#FF9600',
        levels: [
            {
                id: 'f22',
                name: 'Kıyafetler',
                icon: 'ğŸ‘•',
                type: 'lesson'
            },
            {
                id: 'f23',
                name: 'Renklerle Giyim',
                icon: 'ğŸ‘—',
                type: 'lesson'
            },
            {
                id: 'f24',
                name: 'Pazarda',
                icon: 'ğŸ›ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u9',
        title: 'Ünite 9',
        description: 'Meslekler ve İş',
        color: '#1CB0F6',
        levels: [
            {
                id: 'f25',
                name: 'Meslekler 1',
                icon: 'ğŸ‘¨â€âš•ï¸',
                type: 'lesson'
            },
            {
                id: 'f26',
                name: 'Meslekler 2',
                icon: 'ğŸ‘©â€ğŸ«',
                type: 'lesson'
            },
            {
                id: 'f27',
                name: 'İş Yerinde',
                icon: 'ğŸ¢',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u10',
        title: 'Ünite 10',
        description: 'Åehir ve Ulaşım',
        color: '#FF4B4B',
        levels: [
            {
                id: 'f28',
                name: 'Mekanlar',
                icon: 'ğŸ™ï¸',
                type: 'lesson'
            },
            {
                id: 'f29',
                name: 'Taşıtlar',
                icon: 'ğŸš—',
                type: 'lesson'
            },
            {
                id: 'f30',
                name: 'Yön Sorma',
                icon: 'ğŸ—ºï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u11',
        title: 'Ünite 11',
        description: 'Günlük Rutinler',
        color: '#CE82FF',
        levels: [
            {
                id: 'f31',
                name: 'Sabah Rutini',
                icon: 'ğŸŒ…',
                type: 'lesson'
            },
            {
                id: 'f32',
                name: 'İş ve Okul',
                icon: 'ğŸ«',
                type: 'lesson'
            },
            {
                id: 'f33',
                name: 'Akşam Rutini',
                icon: 'ğŸŒƒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u12',
        title: 'Ünite 12',
        description: 'Duygular ve Kişilik',
        color: '#58CC02',
        levels: [
            {
                id: 'f34',
                name: 'Hisler',
                icon: 'ğŸ˜Š',
                type: 'lesson'
            },
            {
                id: 'f35',
                name: 'Karakter Özellikleri',
                icon: 'ğŸ§ ',
                type: 'lesson'
            },
            {
                id: 'f36',
                name: 'Tepkiler',
                icon: 'ğŸ˜²',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u13',
        title: 'Ünite 13',
        description: 'Fiiller 1',
        color: '#FF9600',
        levels: [
            {
                id: 'f37',
                name: 'Hareket Fiilleri',
                icon: 'ğŸƒâ€â™‚ï¸',
                type: 'lesson'
            },
            {
                id: 'f38',
                name: 'Durum Fiilleri',
                icon: 'ğŸ§˜',
                type: 'lesson'
            },
            {
                id: 'f39',
                name: 'Günlük Fiiller',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u14',
        title: 'Ünite 14',
        description: 'Fiiller 2',
        color: '#1CB0F6',
        levels: [
            {
                id: 'f40',
                name: 'Geçmiş Zaman',
                icon: 'âª',
                type: 'lesson'
            },
            {
                id: 'f41',
                name: 'Gelecek Zaman',
                icon: 'â©',
                type: 'lesson'
            },
            {
                id: 'f42',
                name: 'Emir Kipleri',
                icon: 'â—',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u15',
        title: 'Ünite 15',
        description: 'Eğitim ve Okul',
        color: '#FF4B4B',
        levels: [
            {
                id: 'f43',
                name: 'Okul Eşyaları',
                icon: 'ğŸ’',
                type: 'lesson'
            },
            {
                id: 'f44',
                name: 'Dersler',
                icon: 'ğŸ“š',
                type: 'lesson'
            },
            {
                id: 'f45',
                name: 'Sınıfta',
                icon: 'ğŸ‘©â€ğŸ“',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u16',
        title: 'Ünite 16',
        description: 'Tatil ve Seyahat',
        color: '#CE82FF',
        levels: [
            {
                id: 'f46',
                name: 'Tatil Yerleri',
                icon: 'ğŸ–ï¸',
                type: 'lesson'
            },
            {
                id: 'f47',
                name: 'Otelde',
                icon: 'ğŸ¨',
                type: 'lesson'
            },
            {
                id: 'f48',
                name: 'Seyahat Planı',
                icon: 'ğŸ§³',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u17',
        title: 'Ünite 17',
        description: 'Hobiler ve Eğlence',
        color: '#58CC02',
        levels: [
            {
                id: 'f49',
                name: 'Spor',
                icon: 'âš½',
                type: 'lesson'
            },
            {
                id: 'f50',
                name: 'Müzik ve Sanat',
                icon: 'ğŸ¸',
                type: 'lesson'
            },
            {
                id: 'f51',
                name: 'Boş Zaman',
                icon: 'ğŸ®',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u18',
        title: 'Ünite 18',
        description: 'Doğa ve Çevre',
        color: '#FF9600',
        levels: [
            {
                id: 'f52',
                name: 'Mevsimler',
                icon: 'ğŸ‚',
                type: 'lesson'
            },
            {
                id: 'f53',
                name: 'Hava Durumu',
                icon: 'ğŸŒ¦ï¸',
                type: 'lesson'
            },
            {
                id: 'f54',
                name: 'Coğrafya',
                icon: 'ğŸŒ',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u19',
        title: 'Ünite 19',
        description: 'Sosyal Hayat',
        color: '#1CB0F6',
        levels: [
            {
                id: 'f55',
                name: 'Arkadaşlık',
                icon: 'ğŸ¤',
                type: 'lesson'
            },
            {
                id: 'f56',
                name: 'Davetler',
                icon: 'ğŸ’Œ',
                type: 'lesson'
            },
            {
                id: 'f57',
                name: 'Kutlamalar',
                icon: 'ğŸ‰',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u20',
        title: 'Ünite 20',
        description: 'İleri Seviye Gramer',
        color: '#FF4B4B',
        levels: [
            {
                id: 'f58',
                name: 'Bağlaçlar',
                icon: 'ğŸ”—',
                type: 'lesson'
            },
            {
                id: 'f59',
                name: 'Soru Kelimeleri',
                icon: 'â“',
                type: 'lesson'
            },
            {
                id: 'f60',
                name: 'Edatlar',
                icon: 'â•',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u21',
        title: 'Ünite 21',
        description: 'İleri Seviye İletişim',
        color: '#CE82FF',
        levels: [
            {
                id: 'f61',
                name: 'Fikir Belirtme',
                icon: 'ğŸ’¡',
                type: 'lesson'
            },
            {
                id: 'f62',
                name: 'Tartışma',
                icon: 'ğŸ—£ï¸',
                type: 'lesson'
            },
            {
                id: 'f63',
                name: 'Haberler',
                icon: 'ğŸ“°',
                type: 'lesson'
            }
        ]
    },
    {
        id: 'fr-u22',
        title: 'Ünite 22',
        description: 'Kültür ve Edebiyat',
        color: '#58CC02',
        levels: [
            {
                id: 'f64',
                name: 'Atasözleri',
                icon: 'ğŸ“œ',
                type: 'lesson'
            },
            {
                id: 'f65',
                name: 'Masallar',
                icon: 'ğŸ¦„',
                type: 'lesson'
            },
            {
                id: 'f66',
                name: 'Gelenekler',
                icon: 'ğŸ­',
                type: 'lesson'
            }
        ]
    }
]
  }
,
  spanish: {
    title: 'İspanyolca',
    description: 'Dünyanın ikinci büyük dili',
    units: [
    {
        id: 'sp-u1',
        title: 'Ünite 1',
        description: 'Temeller',
        color: '#58CC02',
        levels: [
        {
            id: 's1',
            name: 'Temeller 1',
            icon: 'ğŸ¥š',
            type: 'lesson'
        },
        {
            id: 's2',
            name: 'Temel Eylemler',
            icon: 'ğŸƒ',
            type: 'alphabet'
        },
        {
            id: 's3',
            name: 'Temeller 2',
            icon: 'ğŸ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u2',
        title: 'Ünite 2',
        description: 'Günlük Konuşmalar',
        color: '#CE82FF',
        levels: [
        {
            id: 's4',
            name: 'Selamlaşma',
            icon: 'ğŸ‘‹',
            type: 'lesson'
        },
        {
            id: 's5',
            name: 'Aile',
            icon: 'ğŸ‘¨â€ğŸ‘©â€ğŸ‘§',
            type: 'lesson'
        },
        {
            id: 's6',
            name: 'Renkler',
            icon: 'ğŸ¨',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u3',
        title: 'Ünite 3',
        description: 'Sayılar ve Zaman',
        color: '#FF9600',
        levels: [
        {
            id: 's7',
            name: 'Sayılar',
            icon: '1ï¸âƒ£',
            type: 'lesson'
        },
        {
            id: 's8',
            name: 'Günler ve Aylar',
            icon: 'ğŸ“…',
            type: 'lesson'
        },
        {
            id: 's9',
            name: 'Saatler',
            icon: 'â°',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u4',
        title: 'Ünite 4',
        description: 'Hayvanlar ve Doğa',
        color: '#1CB0F6',
        levels: [
        {
            id: 's10',
            name: 'Evcil Hayvanlar',
            icon: 'ğŸ¶',
            type: 'lesson'
        },
        {
            id: 's11',
            name: 'Vahşi Hayvanlar',
            icon: 'ğŸ¦',
            type: 'lesson'
        },
        {
            id: 's12',
            name: 'Doğa',
            icon: 'ğŸŒ³',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u5',
        title: 'Ünite 5',
        description: 'Yiyecek ve İçecek',
        color: '#FF4B4B',
        levels: [
        {
            id: 's13',
            name: 'Meyveler',
            icon: 'ğŸ',
            type: 'lesson'
        },
        {
            id: 's14',
            name: 'Sebzeler',
            icon: 'ğŸ¥•',
            type: 'lesson'
        },
        {
            id: 's15',
            name: 'İçecekler',
            icon: 'â˜•',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u6',
        title: 'Ünite 6',
        description: 'Ev ve Eşyalar',
        color: '#58CC02',
        levels: [
        {
            id: 's16',
            name: 'Odalar',
            icon: 'ğŸ ',
            type: 'lesson'
        },
        {
            id: 's17',
            name: 'Mobilyalar',
            icon: 'ğŸ›‹ï¸',
            type: 'lesson'
        },
        {
            id: 's18',
            name: 'Mutfak Eşyaları',
            icon: 'ğŸ½ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u7',
        title: 'Ünite 7',
        description: 'Vücudumuz ve Sağlık',
        color: '#CE82FF',
        levels: [
        {
            id: 's19',
            name: 'Vücut Bölümleri',
            icon: 'ğŸ’ª',
            type: 'lesson'
        },
        {
            id: 's20',
            name: 'Hastalıklar',
            icon: 'ğŸ¤’',
            type: 'lesson'
        },
        {
            id: 's21',
            name: 'Hastanede',
            icon: 'ğŸ¥',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u8',
        title: 'Ünite 8',
        description: 'Giysiler ve Alışveriş',
        color: '#FF9600',
        levels: [
        {
            id: 's22',
            name: 'Kıyafetler',
            icon: 'ğŸ‘•',
            type: 'lesson'
        },
        {
            id: 's23',
            name: 'Renklerle Giyim',
            icon: 'ğŸ‘—',
            type: 'lesson'
        },
        {
            id: 's24',
            name: 'Pazarda',
            icon: 'ğŸ›ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u9',
        title: 'Ünite 9',
        description: 'Meslekler ve İş',
        color: '#1CB0F6',
        levels: [
        {
            id: 's25',
            name: 'Meslekler 1',
            icon: 'ğŸ‘¨â€âš•ï¸',
            type: 'lesson'
        },
        {
            id: 's26',
            name: 'Meslekler 2',
            icon: 'ğŸ‘©â€ğŸ«',
            type: 'lesson'
        },
        {
            id: 's27',
            name: 'İş Yerinde',
            icon: 'ğŸ¢',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u10',
        title: 'Ünite 10',
        description: 'Åehir ve Ulaşım',
        color: '#FF4B4B',
        levels: [
        {
            id: 's28',
            name: 'Mekanlar',
            icon: 'ğŸ™ï¸',
            type: 'lesson'
        },
        {
            id: 's29',
            name: 'Taşıtlar',
            icon: 'ğŸš—',
            type: 'lesson'
        },
        {
            id: 's30',
            name: 'Yön Sorma',
            icon: 'ğŸ—ºï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u11',
        title: 'Ünite 11',
        description: 'Günlük Rutinler',
        color: '#58CC02',
        levels: [
        {
            id: 's31',
            name: 'Sabah Rutini',
            icon: 'ğŸŒ…',
            type: 'lesson'
        },
        {
            id: 's32',
            name: 'İş ve Okul',
            icon: 'ğŸ«',
            type: 'lesson'
        },
        {
            id: 's33',
            name: 'Akşam Rutini',
            icon: 'ğŸŒƒ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u12',
        title: 'Ünite 12',
        description: 'Duygular ve Kişilik',
        color: '#CE82FF',
        levels: [
        {
            id: 's34',
            name: 'Hisler',
            icon: 'ğŸ˜Š',
            type: 'lesson'
        },
        {
            id: 's35',
            name: 'Karakter Özellikleri',
            icon: 'ğŸ§ ',
            type: 'lesson'
        },
        {
            id: 's36',
            name: 'Tepkiler',
            icon: 'ğŸ˜²',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u13',
        title: 'Ünite 13',
        description: 'Fiiller 1',
        color: '#FF9600',
        levels: [
        {
            id: 's37',
            name: 'Hareket Fiilleri',
            icon: 'ğŸƒâ€â™‚ï¸',
            type: 'lesson'
        },
        {
            id: 's38',
            name: 'Durum Fiilleri',
            icon: 'ğŸ§˜',
            type: 'lesson'
        },
        {
            id: 's39',
            name: 'Günlük Fiiller',
            icon: 'ğŸ—£ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u14',
        title: 'Ünite 14',
        description: 'Fiiller 2',
        color: '#1CB0F6',
        levels: [
        {
            id: 's40',
            name: 'Geçmiş Zaman',
            icon: 'âª',
            type: 'lesson'
        },
        {
            id: 's41',
            name: 'Gelecek Zaman',
            icon: 'â©',
            type: 'lesson'
        },
        {
            id: 's42',
            name: 'Emir Kipleri',
            icon: 'â—',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u15',
        title: 'Ünite 15',
        description: 'Eğitim ve Okul',
        color: '#FF4B4B',
        levels: [
        {
            id: 's43',
            name: 'Okul Eşyaları',
            icon: 'ğŸ’',
            type: 'lesson'
        },
        {
            id: 's44',
            name: 'Dersler',
            icon: 'ğŸ“š',
            type: 'lesson'
        },
        {
            id: 's45',
            name: 'Sınıfta',
            icon: 'ğŸ‘©â€ğŸ“',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u16',
        title: 'Ünite 16',
        description: 'Tatil ve Seyahat',
        color: '#58CC02',
        levels: [
        {
            id: 's46',
            name: 'Tatil Yerleri',
            icon: 'ğŸ–ï¸',
            type: 'lesson'
        },
        {
            id: 's47',
            name: 'Otelde',
            icon: 'ğŸ¨',
            type: 'lesson'
        },
        {
            id: 's48',
            name: 'Seyahat Planı',
            icon: 'ğŸ§³',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u17',
        title: 'Ünite 17',
        description: 'Hobiler ve Eğlence',
        color: '#CE82FF',
        levels: [
        {
            id: 's49',
            name: 'Spor',
            icon: 'âš½',
            type: 'lesson'
        },
        {
            id: 's50',
            name: 'Müzik ve Sanat',
            icon: 'ğŸ¸',
            type: 'lesson'
        },
        {
            id: 's51',
            name: 'Boş Zaman',
            icon: 'ğŸ®',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u18',
        title: 'Ünite 18',
        description: 'Doğa ve Çevre',
        color: '#FF9600',
        levels: [
        {
            id: 's52',
            name: 'Mevsimler',
            icon: 'ğŸ‚',
            type: 'lesson'
        },
        {
            id: 's53',
            name: 'Hava Durumu',
            icon: 'ğŸŒ¦ï¸',
            type: 'lesson'
        },
        {
            id: 's54',
            name: 'Coğrafya',
            icon: 'ğŸŒ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u19',
        title: 'Ünite 19',
        description: 'Sosyal Hayat',
        color: '#1CB0F6',
        levels: [
        {
            id: 's55',
            name: 'Arkadaşlık',
            icon: 'ğŸ¤',
            type: 'lesson'
        },
        {
            id: 's56',
            name: 'Davetler',
            icon: 'ğŸ’Œ',
            type: 'lesson'
        },
        {
            id: 's57',
            name: 'Kutlamalar',
            icon: 'ğŸ‰',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u20',
        title: 'Ünite 20',
        description: 'İleri Seviye Gramer',
        color: '#FF4B4B',
        levels: [
        {
            id: 's58',
            name: 'Bağlaçlar',
            icon: 'ğŸ”—',
            type: 'lesson'
        },
        {
            id: 's59',
            name: 'Soru Kelimeleri',
            icon: 'â“',
            type: 'lesson'
        },
        {
            id: 's60',
            name: 'Edatlar',
            icon: 'â•',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u21',
        title: 'Ünite 21',
        description: 'İleri Seviye İletişim',
        color: '#58CC02',
        levels: [
        {
            id: 's61',
            name: 'Fikir Belirtme',
            icon: 'ğŸ’¡',
            type: 'lesson'
        },
        {
            id: 's62',
            name: 'Tartışma',
            icon: 'ğŸ—£ï¸',
            type: 'lesson'
        },
        {
            id: 's63',
            name: 'Haberler',
            icon: 'ğŸ“°',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'sp-u22',
        title: 'Ünite 22',
        description: 'Kültür ve Edebiyat',
        color: '#CE82FF',
        levels: [
        {
            id: 's64',
            name: 'Atasözleri',
            icon: 'ğŸ“œ',
            type: 'lesson'
        },
        {
            id: 's65',
            name: 'Masallar',
            icon: 'ğŸ¦„',
            type: 'lesson'
        },
        {
            id: 's66',
            name: 'Gelenekler',
            icon: 'ğŸ­',
            type: 'lesson'
        }
        ]
    }
]
  },
  german: {
    title: 'Almanca',
    description: "Avrupa'nın güçlü dili",
    units: [
    {
        id: 'de-u1',
        title: 'Ünite 1',
        description: 'Temeller',
        color: '#58CC02',
        levels: [
        {
            id: 'g1',
            name: 'Temeller 1',
            icon: 'ğŸ¥š',
            type: 'lesson'
        },
        {
            id: 'g2',
            name: 'Temel Eylemler',
            icon: 'ğŸƒ',
            type: 'alphabet'
        },
        {
            id: 'g3',
            name: 'Temeller 2',
            icon: 'ğŸ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u2',
        title: 'Ünite 2',
        description: 'Günlük Konuşmalar',
        color: '#CE82FF',
        levels: [
        {
            id: 'g4',
            name: 'Selamlaşma',
            icon: 'ğŸ‘‹',
            type: 'lesson'
        },
        {
            id: 'g5',
            name: 'Aile',
            icon: 'ğŸ‘¨â€ğŸ‘©â€ğŸ‘§',
            type: 'lesson'
        },
        {
            id: 'g6',
            name: 'Renkler',
            icon: 'ğŸ¨',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u3',
        title: 'Ünite 3',
        description: 'Sayılar ve Zaman',
        color: '#FF9600',
        levels: [
        {
            id: 'g7',
            name: 'Sayılar',
            icon: '1ï¸âƒ£',
            type: 'lesson'
        },
        {
            id: 'g8',
            name: 'Günler ve Aylar',
            icon: 'ğŸ“…',
            type: 'lesson'
        },
        {
            id: 'g9',
            name: 'Saatler',
            icon: 'â°',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u4',
        title: 'Ünite 4',
        description: 'Hayvanlar ve Doğa',
        color: '#1CB0F6',
        levels: [
        {
            id: 'g10',
            name: 'Evcil Hayvanlar',
            icon: 'ğŸ¶',
            type: 'lesson'
        },
        {
            id: 'g11',
            name: 'Vahşi Hayvanlar',
            icon: 'ğŸ¦',
            type: 'lesson'
        },
        {
            id: 'g12',
            name: 'Doğa',
            icon: 'ğŸŒ³',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u5',
        title: 'Ünite 5',
        description: 'Yiyecek ve İçecek',
        color: '#FF4B4B',
        levels: [
        {
            id: 'g13',
            name: 'Meyveler',
            icon: 'ğŸ',
            type: 'lesson'
        },
        {
            id: 'g14',
            name: 'Sebzeler',
            icon: 'ğŸ¥•',
            type: 'lesson'
        },
        {
            id: 'g15',
            name: 'İçecekler',
            icon: 'â˜•',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u6',
        title: 'Ünite 6',
        description: 'Ev ve Eşyalar',
        color: '#58CC02',
        levels: [
        {
            id: 'g16',
            name: 'Odalar',
            icon: 'ğŸ ',
            type: 'lesson'
        },
        {
            id: 'g17',
            name: 'Mobilyalar',
            icon: 'ğŸ›‹ï¸',
            type: 'lesson'
        },
        {
            id: 'g18',
            name: 'Mutfak Eşyaları',
            icon: 'ğŸ½ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u7',
        title: 'Ünite 7',
        description: 'Vücudumuz ve Sağlık',
        color: '#CE82FF',
        levels: [
        {
            id: 'g19',
            name: 'Vücut Bölümleri',
            icon: 'ğŸ’ª',
            type: 'lesson'
        },
        {
            id: 'g20',
            name: 'Hastalıklar',
            icon: 'ğŸ¤’',
            type: 'lesson'
        },
        {
            id: 'g21',
            name: 'Hastanede',
            icon: 'ğŸ¥',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u8',
        title: 'Ünite 8',
        description: 'Giysiler ve Alışveriş',
        color: '#FF9600',
        levels: [
        {
            id: 'g22',
            name: 'Kıyafetler',
            icon: 'ğŸ‘•',
            type: 'lesson'
        },
        {
            id: 'g23',
            name: 'Renklerle Giyim',
            icon: 'ğŸ‘—',
            type: 'lesson'
        },
        {
            id: 'g24',
            name: 'Pazarda',
            icon: 'ğŸ›ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u9',
        title: 'Ünite 9',
        description: 'Meslekler ve İş',
        color: '#1CB0F6',
        levels: [
        {
            id: 'g25',
            name: 'Meslekler 1',
            icon: 'ğŸ‘¨â€âš•ï¸',
            type: 'lesson'
        },
        {
            id: 'g26',
            name: 'Meslekler 2',
            icon: 'ğŸ‘©â€ğŸ«',
            type: 'lesson'
        },
        {
            id: 'g27',
            name: 'İş Yerinde',
            icon: 'ğŸ¢',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u10',
        title: 'Ünite 10',
        description: 'Åehir ve Ulaşım',
        color: '#FF4B4B',
        levels: [
        {
            id: 'g28',
            name: 'Mekanlar',
            icon: 'ğŸ™ï¸',
            type: 'lesson'
        },
        {
            id: 'g29',
            name: 'Taşıtlar',
            icon: 'ğŸš—',
            type: 'lesson'
        },
        {
            id: 'g30',
            name: 'Yön Sorma',
            icon: 'ğŸ—ºï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u11',
        title: 'Ünite 11',
        description: 'Günlük Rutinler',
        color: '#58CC02',
        levels: [
        {
            id: 'g31',
            name: 'Sabah Rutini',
            icon: 'ğŸŒ…',
            type: 'lesson'
        },
        {
            id: 'g32',
            name: 'İş ve Okul',
            icon: 'ğŸ«',
            type: 'lesson'
        },
        {
            id: 'g33',
            name: 'Akşam Rutini',
            icon: 'ğŸŒƒ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u12',
        title: 'Ünite 12',
        description: 'Duygular ve Kişilik',
        color: '#CE82FF',
        levels: [
        {
            id: 'g34',
            name: 'Hisler',
            icon: 'ğŸ˜Š',
            type: 'lesson'
        },
        {
            id: 'g35',
            name: 'Karakter Özellikleri',
            icon: 'ğŸ§ ',
            type: 'lesson'
        },
        {
            id: 'g36',
            name: 'Tepkiler',
            icon: 'ğŸ˜²',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u13',
        title: 'Ünite 13',
        description: 'Fiiller 1',
        color: '#FF9600',
        levels: [
        {
            id: 'g37',
            name: 'Hareket Fiilleri',
            icon: 'ğŸƒâ€â™‚ï¸',
            type: 'lesson'
        },
        {
            id: 'g38',
            name: 'Durum Fiilleri',
            icon: 'ğŸ§˜',
            type: 'lesson'
        },
        {
            id: 'g39',
            name: 'Günlük Fiiller',
            icon: 'ğŸ—£ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u14',
        title: 'Ünite 14',
        description: 'Fiiller 2',
        color: '#1CB0F6',
        levels: [
        {
            id: 'g40',
            name: 'Geçmiş Zaman',
            icon: 'âª',
            type: 'lesson'
        },
        {
            id: 'g41',
            name: 'Gelecek Zaman',
            icon: 'â©',
            type: 'lesson'
        },
        {
            id: 'g42',
            name: 'Emir Kipleri',
            icon: 'â—',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u15',
        title: 'Ünite 15',
        description: 'Eğitim ve Okul',
        color: '#FF4B4B',
        levels: [
        {
            id: 'g43',
            name: 'Okul Eşyaları',
            icon: 'ğŸ’',
            type: 'lesson'
        },
        {
            id: 'g44',
            name: 'Dersler',
            icon: 'ğŸ“š',
            type: 'lesson'
        },
        {
            id: 'g45',
            name: 'Sınıfta',
            icon: 'ğŸ‘©â€ğŸ“',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u16',
        title: 'Ünite 16',
        description: 'Tatil ve Seyahat',
        color: '#58CC02',
        levels: [
        {
            id: 'g46',
            name: 'Tatil Yerleri',
            icon: 'ğŸ–ï¸',
            type: 'lesson'
        },
        {
            id: 'g47',
            name: 'Otelde',
            icon: 'ğŸ¨',
            type: 'lesson'
        },
        {
            id: 'g48',
            name: 'Seyahat Planı',
            icon: 'ğŸ§³',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u17',
        title: 'Ünite 17',
        description: 'Hobiler ve Eğlence',
        color: '#CE82FF',
        levels: [
        {
            id: 'g49',
            name: 'Spor',
            icon: 'âš½',
            type: 'lesson'
        },
        {
            id: 'g50',
            name: 'Müzik ve Sanat',
            icon: 'ğŸ¸',
            type: 'lesson'
        },
        {
            id: 'g51',
            name: 'Boş Zaman',
            icon: 'ğŸ®',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u18',
        title: 'Ünite 18',
        description: 'Doğa ve Çevre',
        color: '#FF9600',
        levels: [
        {
            id: 'g52',
            name: 'Mevsimler',
            icon: 'ğŸ‚',
            type: 'lesson'
        },
        {
            id: 'g53',
            name: 'Hava Durumu',
            icon: 'ğŸŒ¦ï¸',
            type: 'lesson'
        },
        {
            id: 'g54',
            name: 'Coğrafya',
            icon: 'ğŸŒ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u19',
        title: 'Ünite 19',
        description: 'Sosyal Hayat',
        color: '#1CB0F6',
        levels: [
        {
            id: 'g55',
            name: 'Arkadaşlık',
            icon: 'ğŸ¤',
            type: 'lesson'
        },
        {
            id: 'g56',
            name: 'Davetler',
            icon: 'ğŸ’Œ',
            type: 'lesson'
        },
        {
            id: 'g57',
            name: 'Kutlamalar',
            icon: 'ğŸ‰',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u20',
        title: 'Ünite 20',
        description: 'İleri Seviye Gramer',
        color: '#FF4B4B',
        levels: [
        {
            id: 'g58',
            name: 'Bağlaçlar',
            icon: 'ğŸ”—',
            type: 'lesson'
        },
        {
            id: 'g59',
            name: 'Soru Kelimeleri',
            icon: 'â“',
            type: 'lesson'
        },
        {
            id: 'g60',
            name: 'Edatlar',
            icon: 'â•',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u21',
        title: 'Ünite 21',
        description: 'İleri Seviye İletişim',
        color: '#58CC02',
        levels: [
        {
            id: 'g61',
            name: 'Fikir Belirtme',
            icon: 'ğŸ’¡',
            type: 'lesson'
        },
        {
            id: 'g62',
            name: 'Tartışma',
            icon: 'ğŸ—£ï¸',
            type: 'lesson'
        },
        {
            id: 'g63',
            name: 'Haberler',
            icon: 'ğŸ“°',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'de-u22',
        title: 'Ünite 22',
        description: 'Kültür ve Edebiyat',
        color: '#CE82FF',
        levels: [
        {
            id: 'g64',
            name: 'Atasözleri',
            icon: 'ğŸ“œ',
            type: 'lesson'
        },
        {
            id: 'g65',
            name: 'Masallar',
            icon: 'ğŸ¦„',
            type: 'lesson'
        },
        {
            id: 'g66',
            name: 'Gelenekler',
            icon: 'ğŸ­',
            type: 'lesson'
        }
        ]
    }
]
  },
  italian: {
    title: 'İtalyanca',
    description: 'Sanat ve kültürün dili',
    units: [
    {
        id: 'it-u1',
        title: 'Ünite 1',
        description: 'Temeller',
        color: '#58CC02',
        levels: [
        {
            id: 'i1',
            name: 'Temeller 1',
            icon: 'ğŸ¥š',
            type: 'lesson'
        },
        {
            id: 'i2',
            name: 'Temel Eylemler',
            icon: 'ğŸƒ',
            type: 'alphabet'
        },
        {
            id: 'i3',
            name: 'Temeller 2',
            icon: 'ğŸ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u2',
        title: 'Ünite 2',
        description: 'Günlük Konuşmalar',
        color: '#CE82FF',
        levels: [
        {
            id: 'i4',
            name: 'Selamlaşma',
            icon: 'ğŸ‘‹',
            type: 'lesson'
        },
        {
            id: 'i5',
            name: 'Aile',
            icon: 'ğŸ‘¨â€ğŸ‘©â€ğŸ‘§',
            type: 'lesson'
        },
        {
            id: 'i6',
            name: 'Renkler',
            icon: 'ğŸ¨',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u3',
        title: 'Ünite 3',
        description: 'Sayılar ve Zaman',
        color: '#FF9600',
        levels: [
        {
            id: 'i7',
            name: 'Sayılar',
            icon: '1ï¸âƒ£',
            type: 'lesson'
        },
        {
            id: 'i8',
            name: 'Günler ve Aylar',
            icon: 'ğŸ“…',
            type: 'lesson'
        },
        {
            id: 'i9',
            name: 'Saatler',
            icon: 'â°',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u4',
        title: 'Ünite 4',
        description: 'Hayvanlar ve Doğa',
        color: '#1CB0F6',
        levels: [
        {
            id: 'i10',
            name: 'Evcil Hayvanlar',
            icon: 'ğŸ¶',
            type: 'lesson'
        },
        {
            id: 'i11',
            name: 'Vahşi Hayvanlar',
            icon: 'ğŸ¦',
            type: 'lesson'
        },
        {
            id: 'i12',
            name: 'Doğa',
            icon: 'ğŸŒ³',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u5',
        title: 'Ünite 5',
        description: 'Yiyecek ve İçecek',
        color: '#FF4B4B',
        levels: [
        {
            id: 'i13',
            name: 'Meyveler',
            icon: 'ğŸ',
            type: 'lesson'
        },
        {
            id: 'i14',
            name: 'Sebzeler',
            icon: 'ğŸ¥•',
            type: 'lesson'
        },
        {
            id: 'i15',
            name: 'İçecekler',
            icon: 'â˜•',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u6',
        title: 'Ünite 6',
        description: 'Ev ve Eşyalar',
        color: '#58CC02',
        levels: [
        {
            id: 'i16',
            name: 'Odalar',
            icon: 'ğŸ ',
            type: 'lesson'
        },
        {
            id: 'i17',
            name: 'Mobilyalar',
            icon: 'ğŸ›‹ï¸',
            type: 'lesson'
        },
        {
            id: 'i18',
            name: 'Mutfak Eşyaları',
            icon: 'ğŸ½ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u7',
        title: 'Ünite 7',
        description: 'Vücudumuz ve Sağlık',
        color: '#CE82FF',
        levels: [
        {
            id: 'i19',
            name: 'Vücut Bölümleri',
            icon: 'ğŸ’ª',
            type: 'lesson'
        },
        {
            id: 'i20',
            name: 'Hastalıklar',
            icon: 'ğŸ¤’',
            type: 'lesson'
        },
        {
            id: 'i21',
            name: 'Hastanede',
            icon: 'ğŸ¥',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u8',
        title: 'Ünite 8',
        description: 'Giysiler ve Alışveriş',
        color: '#FF9600',
        levels: [
        {
            id: 'i22',
            name: 'Kıyafetler',
            icon: 'ğŸ‘•',
            type: 'lesson'
        },
        {
            id: 'i23',
            name: 'Renklerle Giyim',
            icon: 'ğŸ‘—',
            type: 'lesson'
        },
        {
            id: 'i24',
            name: 'Pazarda',
            icon: 'ğŸ›ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u9',
        title: 'Ünite 9',
        description: 'Meslekler ve İş',
        color: '#1CB0F6',
        levels: [
        {
            id: 'i25',
            name: 'Meslekler 1',
            icon: 'ğŸ‘¨â€âš•ï¸',
            type: 'lesson'
        },
        {
            id: 'i26',
            name: 'Meslekler 2',
            icon: 'ğŸ‘©â€ğŸ«',
            type: 'lesson'
        },
        {
            id: 'i27',
            name: 'İş Yerinde',
            icon: 'ğŸ¢',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u10',
        title: 'Ünite 10',
        description: 'Åehir ve Ulaşım',
        color: '#FF4B4B',
        levels: [
        {
            id: 'i28',
            name: 'Mekanlar',
            icon: 'ğŸ™ï¸',
            type: 'lesson'
        },
        {
            id: 'i29',
            name: 'Taşıtlar',
            icon: 'ğŸš—',
            type: 'lesson'
        },
        {
            id: 'i30',
            name: 'Yön Sorma',
            icon: 'ğŸ—ºï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u11',
        title: 'Ünite 11',
        description: 'Günlük Rutinler',
        color: '#58CC02',
        levels: [
        {
            id: 'i31',
            name: 'Sabah Rutini',
            icon: 'ğŸŒ…',
            type: 'lesson'
        },
        {
            id: 'i32',
            name: 'İş ve Okul',
            icon: 'ğŸ«',
            type: 'lesson'
        },
        {
            id: 'i33',
            name: 'Akşam Rutini',
            icon: 'ğŸŒƒ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u12',
        title: 'Ünite 12',
        description: 'Duygular ve Kişilik',
        color: '#CE82FF',
        levels: [
        {
            id: 'i34',
            name: 'Hisler',
            icon: 'ğŸ˜Š',
            type: 'lesson'
        },
        {
            id: 'i35',
            name: 'Karakter Özellikleri',
            icon: 'ğŸ§ ',
            type: 'lesson'
        },
        {
            id: 'i36',
            name: 'Tepkiler',
            icon: 'ğŸ˜²',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u13',
        title: 'Ünite 13',
        description: 'Fiiller 1',
        color: '#FF9600',
        levels: [
        {
            id: 'i37',
            name: 'Hareket Fiilleri',
            icon: 'ğŸƒâ€â™‚ï¸',
            type: 'lesson'
        },
        {
            id: 'i38',
            name: 'Durum Fiilleri',
            icon: 'ğŸ§˜',
            type: 'lesson'
        },
        {
            id: 'i39',
            name: 'Günlük Fiiller',
            icon: 'ğŸ—£ï¸',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u14',
        title: 'Ünite 14',
        description: 'Fiiller 2',
        color: '#1CB0F6',
        levels: [
        {
            id: 'i40',
            name: 'Geçmiş Zaman',
            icon: 'âª',
            type: 'lesson'
        },
        {
            id: 'i41',
            name: 'Gelecek Zaman',
            icon: 'â©',
            type: 'lesson'
        },
        {
            id: 'i42',
            name: 'Emir Kipleri',
            icon: 'â—',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u15',
        title: 'Ünite 15',
        description: 'Eğitim ve Okul',
        color: '#FF4B4B',
        levels: [
        {
            id: 'i43',
            name: 'Okul Eşyaları',
            icon: 'ğŸ’',
            type: 'lesson'
        },
        {
            id: 'i44',
            name: 'Dersler',
            icon: 'ğŸ“š',
            type: 'lesson'
        },
        {
            id: 'i45',
            name: 'Sınıfta',
            icon: 'ğŸ‘©â€ğŸ“',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u16',
        title: 'Ünite 16',
        description: 'Tatil ve Seyahat',
        color: '#58CC02',
        levels: [
        {
            id: 'i46',
            name: 'Tatil Yerleri',
            icon: 'ğŸ–ï¸',
            type: 'lesson'
        },
        {
            id: 'i47',
            name: 'Otelde',
            icon: 'ğŸ¨',
            type: 'lesson'
        },
        {
            id: 'i48',
            name: 'Seyahat Planı',
            icon: 'ğŸ§³',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u17',
        title: 'Ünite 17',
        description: 'Hobiler ve Eğlence',
        color: '#CE82FF',
        levels: [
        {
            id: 'i49',
            name: 'Spor',
            icon: 'âš½',
            type: 'lesson'
        },
        {
            id: 'i50',
            name: 'Müzik ve Sanat',
            icon: 'ğŸ¸',
            type: 'lesson'
        },
        {
            id: 'i51',
            name: 'Boş Zaman',
            icon: 'ğŸ®',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u18',
        title: 'Ünite 18',
        description: 'Doğa ve Çevre',
        color: '#FF9600',
        levels: [
        {
            id: 'i52',
            name: 'Mevsimler',
            icon: 'ğŸ‚',
            type: 'lesson'
        },
        {
            id: 'i53',
            name: 'Hava Durumu',
            icon: 'ğŸŒ¦ï¸',
            type: 'lesson'
        },
        {
            id: 'i54',
            name: 'Coğrafya',
            icon: 'ğŸŒ',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u19',
        title: 'Ünite 19',
        description: 'Sosyal Hayat',
        color: '#1CB0F6',
        levels: [
        {
            id: 'i55',
            name: 'Arkadaşlık',
            icon: 'ğŸ¤',
            type: 'lesson'
        },
        {
            id: 'i56',
            name: 'Davetler',
            icon: 'ğŸ’Œ',
            type: 'lesson'
        },
        {
            id: 'i57',
            name: 'Kutlamalar',
            icon: 'ğŸ‰',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u20',
        title: 'Ünite 20',
        description: 'İleri Seviye Gramer',
        color: '#FF4B4B',
        levels: [
        {
            id: 'i58',
            name: 'Bağlaçlar',
            icon: 'ğŸ”—',
            type: 'lesson'
        },
        {
            id: 'i59',
            name: 'Soru Kelimeleri',
            icon: 'â“',
            type: 'lesson'
        },
        {
            id: 'i60',
            name: 'Edatlar',
            icon: 'â•',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u21',
        title: 'Ünite 21',
        description: 'İleri Seviye İletişim',
        color: '#58CC02',
        levels: [
        {
            id: 'i61',
            name: 'Fikir Belirtme',
            icon: 'ğŸ’¡',
            type: 'lesson'
        },
        {
            id: 'i62',
            name: 'Tartışma',
            icon: 'ğŸ—£ï¸',
            type: 'lesson'
        },
        {
            id: 'i63',
            name: 'Haberler',
            icon: 'ğŸ“°',
            type: 'lesson'
        }
        ]
    },
    {
        id: 'it-u22',
        title: 'Ünite 22',
        description: 'Kültür ve Edebiyat',
        color: '#CE82FF',
        levels: [
        {
            id: 'i64',
            name: 'Atasözleri',
            icon: 'ğŸ“œ',
            type: 'lesson'
        },
        {
            id: 'i65',
            name: 'Masallar',
            icon: 'ğŸ¦„',
            type: 'lesson'
        },
        {
            id: 'i66',
            name: 'Gelenekler',
            icon: 'ğŸ­',
            type: 'lesson'
        }
        ]
    }
]
  },
  japanese: {
    title: 'Japonca',
    description: "Uzak Doğu'nun büyüleyici dili",
    units: [
    {
        id: 'ja-u1',
        title: 'Ünite 1',
        description: 'Yakında',
        color: '#FF4B4B',
        levels: [
        { id: 'ja1', name: 'Çok Yakında', icon: 'ğŸš§', type: 'lesson' }
        ]
    }
]
  },
  korean: {
    title: 'Korece',
    description: 'K-Pop ve teknolojinin dili',
    units: [
    {
        id: 'ko-u1',
        title: 'Ünite 1',
        description: 'Yakında',
        color: '#FF4B4B',
        levels: [
        { id: 'ko1', name: 'Çok Yakında', icon: 'ğŸš§', type: 'lesson' }
        ]
    }
]
  },
  russian: {
    title: 'Rusça',
    description: "Doğu Avrupa'nın güçlü dili",
    units: [
    {
        id: 'ru-u1',
        title: 'Ünite 1',
        description: 'Yakında',
        color: '#FF4B4B',
        levels: [
        { id: 'ru1', name: 'Çok Yakında', icon: 'ğŸš§', type: 'lesson' }
        ]
    }
]
  },
  chinese: {
    title: 'Çince',
    description: 'Dünyanın en çok konuşulan dili',
    units: [
    {
        id: 'zh-u1',
        title: 'Ünite 1',
        description: 'Yakında',
        color: '#FF4B4B',
        levels: [
        { id: 'zh1', name: 'Çok Yakında', icon: 'ğŸš§', type: 'lesson' }
        ]
    }
]
  },
  arabic: {
    title: 'Arapça',
    description: "Orta Doğu'nun köklü dili",
    units: [
    {
        id: 'ar-u1',
        title: 'Ünite 1',
        description: 'Yakında',
        color: '#FF4B4B',
        levels: [
        { id: 'ar1', name: 'Çok Yakında', icon: 'ğŸš§', type: 'lesson' }
        ]
    }
]
  },
  portuguese: {
    title: 'Portekizce',
    description: "Brezilya ve Portekiz'in dili",
    units: [
    {
        id: 'pt-u1',
        title: 'Ünite 1',
        description: 'Yakında',
        color: '#FF4B4B',
        levels: [
        { id: 'pt1', name: 'Çok Yakında', icon: 'ğŸš§', type: 'lesson' }
        ]
    }
]
  },
  dutch: {
    title: 'Felemenkçe',
    description: "Kuzey Avrupa'nın özgün dili",
    units: [
    {
        id: 'nl-u1',
        title: 'Ünite 1',
        description: 'Yakında',
        color: '#FF4B4B',
        levels: [
        { id: 'nl1', name: 'Çok Yakında', icon: 'ğŸš§', type: 'lesson' }
        ]
    }
]
  }
};

