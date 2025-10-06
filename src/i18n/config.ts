import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      header: {
        catalog: 'Каталог',
        terms: 'Условия аренды',
        contact: 'Контакты',
      },
      hero: {
        title: 'Аренда фото и видео оборудования',
        description: 'Профессиональное оборудование для съёмки в Астане. Камеры, объективы, свет и аксессуары от ведущих производителей.',
      },
      equipment: {
        categories: {
          cameras: 'Камеры',
          lenses: 'Объективы',
          lighting: 'Свет',
          stabilization: 'Стабилизация',
          audio: 'Звук',
          tripods: 'Штативы',
        },
        items: {
          sony: {
            title: 'Sony A7 III',
            description: 'Полнокадровая беззеркальная камера 24.2 МП',
          },
          canon: {
            title: 'Canon EF 50mm f/1.8',
            description: 'Светосильный портретный объектив',
          },
          godox: {
            title: 'Godox SL-60W',
            description: 'LED постоянный свет 60W',
          },
          dji: {
            title: 'DJI Ronin SC',
            description: 'Трёхосевой стабилизатор для камер',
          },
          rode: {
            title: 'Rode VideoMic Pro',
            description: 'Направленный микрофон для видео',
          },
          manfrotto: {
            title: 'Manfrotto 190',
            description: 'Профессиональный штатив из алюминия',
          },
        },
        perDay: 'в сутки',
        bookButton: 'Забронировать',
      },
      terms: {
        title: 'Условия аренды',
        subtitle: 'Простые и прозрачные правила работы с нашим оборудованием',
        booking: {
          title: 'Бронирование',
          description: 'Минимальный срок аренды — 1 сутки. Бронирование через сайт или WhatsApp.',
        },
        deposit: {
          title: 'Залог',
          description: 'Требуется залог в размере 50% от стоимости оборудования.',
        },
        return: {
          title: 'Возврат',
          description: 'Оборудование принимается в том же состоянии. Проверка при получении и возврате.',
        },
        delivery: {
          title: 'Доставка',
          description: 'Доставка по Астане — 2000 ₸. Самовывоз бесплатно.',
        },
        additionalInfo: {
          title: 'Дополнительная информация',
          item1: 'Оборудование выдаётся только при наличии документа, удостоверяющего личность',
          item2: 'При повреждении оборудования ремонт оплачивается из залога',
          item3: 'Скидки при аренде на срок от 7 дней — уточняйте у менеджера',
        },
      },
      contact: {
        title: 'Контакты',
        subtitle: 'Свяжитесь с нами для бронирования оборудования',
        phone: 'Телефон',
        whatsapp: 'WhatsApp',
        address: 'Адрес',
        addressText: 'Астана, район Есиль,\nул. Кабанбай батыра 15',
        workingHours: 'Часы работы: Пн-Вс 10:00 — 20:00',
        writeWhatsapp: 'Написать в WhatsApp',
      },
      booking: {
        title: 'Бронирование оборудования',
        name: 'Ваше имя',
        namePlaceholder: 'Введите ваше имя',
        phone: 'Телефон',
        phonePlaceholder: '+7 700 123 45 67',
        startDate: 'Дата начала',
        endDate: 'Дата окончания',
        days: 'Количество дней:',
        pricePerDay: 'Цена за сутки:',
        total: 'Итого:',
        comment: 'Комментарий',
        commentPlaceholder: 'Дополнительные пожелания или вопросы',
        cancel: 'Отмена',
        submit: 'Отправить заявку',
        errorTitle: 'Ошибка',
        errorRequired: 'Пожалуйста, заполните все обязательные поля',
        errorDate: 'Дата окончания должна быть позже даты начала',
        successTitle: 'Заявка отправлена!',
        successDescription: 'Мы свяжемся с вами по номеру {{phone}} для подтверждения',
      },
      footer: {
        copyright: '© 2025 Аренда оборудования в Астане. Все права защищены.',
      },
    },
  },
  en: {
    translation: {
      header: {
        catalog: 'Catalog',
        terms: 'Rental Terms',
        contact: 'Contact',
      },
      hero: {
        title: 'Photo and Video Equipment Rental',
        description: 'Professional equipment for shooting in Astana. Cameras, lenses, lighting and accessories from leading manufacturers.',
      },
      equipment: {
        categories: {
          cameras: 'Cameras',
          lenses: 'Lenses',
          lighting: 'Lighting',
          stabilization: 'Stabilization',
          audio: 'Audio',
          tripods: 'Tripods',
        },
        items: {
          sony: {
            title: 'Sony A7 III',
            description: 'Full-frame mirrorless camera 24.2 MP',
          },
          canon: {
            title: 'Canon EF 50mm f/1.8',
            description: 'Fast portrait lens',
          },
          godox: {
            title: 'Godox SL-60W',
            description: 'LED continuous light 60W',
          },
          dji: {
            title: 'DJI Ronin SC',
            description: '3-axis camera stabilizer',
          },
          rode: {
            title: 'Rode VideoMic Pro',
            description: 'Directional video microphone',
          },
          manfrotto: {
            title: 'Manfrotto 190',
            description: 'Professional aluminum tripod',
          },
        },
        perDay: 'per day',
        bookButton: 'Book Now',
      },
      terms: {
        title: 'Rental Terms',
        subtitle: 'Simple and transparent rules for working with our equipment',
        booking: {
          title: 'Booking',
          description: 'Minimum rental period is 1 day. Booking via website or WhatsApp.',
        },
        deposit: {
          title: 'Deposit',
          description: 'A deposit of 50% of the equipment cost is required.',
        },
        return: {
          title: 'Return',
          description: 'Equipment is accepted in the same condition. Inspection upon receipt and return.',
        },
        delivery: {
          title: 'Delivery',
          description: 'Delivery in Astana — 2000 ₸. Free pickup.',
        },
        additionalInfo: {
          title: 'Additional Information',
          item1: 'Equipment is issued only with a valid ID document',
          item2: 'In case of equipment damage, repair is paid from the deposit',
          item3: 'Discounts for rentals of 7 days or more — check with the manager',
        },
      },
      contact: {
        title: 'Contact',
        subtitle: 'Contact us to book equipment',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        address: 'Address',
        addressText: 'Astana, Esil district,\nKabanbay Batyr st. 15',
        workingHours: 'Working hours: Mon-Sun 10:00 AM — 8:00 PM',
        writeWhatsapp: 'Write on WhatsApp',
      },
      booking: {
        title: 'Equipment Booking',
        name: 'Your name',
        namePlaceholder: 'Enter your name',
        phone: 'Phone',
        phonePlaceholder: '+7 700 123 45 67',
        startDate: 'Start date',
        endDate: 'End date',
        days: 'Number of days:',
        pricePerDay: 'Price per day:',
        total: 'Total:',
        comment: 'Comment',
        commentPlaceholder: 'Additional requests or questions',
        cancel: 'Cancel',
        submit: 'Submit request',
        errorTitle: 'Error',
        errorRequired: 'Please fill in all required fields',
        errorDate: 'End date must be after start date',
        successTitle: 'Request sent!',
        successDescription: 'We will contact you at {{phone}} for confirmation',
      },
      footer: {
        copyright: '© 2025 Equipment Rental in Astana. All rights reserved.',
      },
    },
  },
  kk: {
    translation: {
      header: {
        catalog: 'Каталог',
        terms: 'Жалға алу шарттары',
        contact: 'Байланыс',
      },
      hero: {
        title: 'Фото және бейне жабдықтарын жалға алу',
        description: 'Астанада түсірілім үшін кәсіби жабдық. Жетекші өндірушілердің камералары, линзалары, жарық және керек-жарақтары.',
      },
      equipment: {
        categories: {
          cameras: 'Камералар',
          lenses: 'Линзалар',
          lighting: 'Жарық',
          stabilization: 'Тұрақтандыру',
          audio: 'Дыбыс',
          tripods: 'Штативтер',
        },
        items: {
          sony: {
            title: 'Sony A7 III',
            description: 'Толық кадрлы айнасыз камера 24.2 МП',
          },
          canon: {
            title: 'Canon EF 50mm f/1.8',
            description: 'Жылдам портреттік объектив',
          },
          godox: {
            title: 'Godox SL-60W',
            description: 'LED тұрақты жарық 60W',
          },
          dji: {
            title: 'DJI Ronin SC',
            description: 'Камераларға арналған үш осьті тұрақтандырғыш',
          },
          rode: {
            title: 'Rode VideoMic Pro',
            description: 'Бейнеге арналған бағытталған микрофон',
          },
          manfrotto: {
            title: 'Manfrotto 190',
            description: 'Алюминийден жасалған кәсіби штатив',
          },
        },
        perDay: 'тәулігіне',
        bookButton: 'Брондау',
      },
      terms: {
        title: 'Жалға алу шарттары',
        subtitle: 'Біздің жабдықпен жұмыс істеудің қарапайым және ашық ережелері',
        booking: {
          title: 'Брондау',
          description: 'Ең аз жалға алу мерзімі — 1 тәулік. Сайт немесе WhatsApp арқылы брондау.',
        },
        deposit: {
          title: 'Кепілдік',
          description: 'Жабдық құнының 50% мөлшерінде кепілдік қажет.',
        },
        return: {
          title: 'Қайтару',
          description: 'Жабдық сол күйінде қабылданады. Алу және қайтару кезінде тексеру.',
        },
        delivery: {
          title: 'Жеткізу',
          description: 'Астана бойынша жеткізу — 2000 ₸. Өзіңіз алу тегін.',
        },
        additionalInfo: {
          title: 'Қосымша ақпарат',
          item1: 'Жабдық тек жеке куәлік бар жағдайда беріледі',
          item2: 'Жабдық зақымдалған жағдайда жөндеу кепілдіктен төленеді',
          item3: '7 күннен астам мерзімге жалдағанда жеңілдіктер — менеджерден білісіңіз',
        },
      },
      contact: {
        title: 'Байланыс',
        subtitle: 'Жабдықты брондау үшін бізбен байланысыңыз',
        phone: 'Телефон',
        whatsapp: 'WhatsApp',
        address: 'Мекенжай',
        addressText: 'Астана, Есіл ауданы,\nҚабанбай батыр көшесі 15',
        workingHours: 'Жұмыс уақыты: Дс-Жс 10:00 — 20:00',
        writeWhatsapp: 'WhatsApp-қа жазу',
      },
      booking: {
        title: 'Жабдықты брондау',
        name: 'Сіздің атыңыз',
        namePlaceholder: 'Атыңызды енгізіңіз',
        phone: 'Телефон',
        phonePlaceholder: '+7 700 123 45 67',
        startDate: 'Басталу күні',
        endDate: 'Аяқталу күні',
        days: 'Күндер саны:',
        pricePerDay: 'Тәуліктік бағасы:',
        total: 'Барлығы:',
        comment: 'Пікір',
        commentPlaceholder: 'Қосымша тілектер немесе сұрақтар',
        cancel: 'Болдырмау',
        submit: 'Өтінім жіберу',
        errorTitle: 'Қате',
        errorRequired: 'Барлық міндетті өрістерді толтырыңыз',
        errorDate: 'Аяқталу күні басталу күнінен кейін болуы керек',
        successTitle: 'Өтінім жіберілді!',
        successDescription: 'Біз сізбен {{phone}} нөмірі арқылы растау үшін хабарласамыз',
      },
      footer: {
        copyright: '© 2025 Астанада жабдық жалдау. Барлық құқықтар қорғалған.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
