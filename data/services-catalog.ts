export type ServiceItem = {
  name: string
  shortDescription: string
  price: string
}

export type ServiceCategory = {
  slug: string
  title: string
  description: string
  services: ServiceItem[]
}

export const featuredServices: ServiceItem[] = [
  {
    name: 'Wymiana oleju i filtrów',
    shortDescription: 'Szybki serwis eksploatacyjny z doborem części i płynów do konkretnego silnika.',
    price: 'od 100 do 180 zł',
  },
  {
    name: 'Geometria kół',
    shortDescription: 'Precyzyjne ustawienie zbieżności poprawiające prowadzenie i równomierne zużycie opon.',
    price: 'od 100 do 250 zł',
  },
  {
    name: 'Diagnostyka komputerowa',
    shortDescription: 'Odczyt błędów, analiza parametrów i wskazanie realnej przyczyny problemu bez zgadywania.',
    price: 'od 100 do 200 zł',
  },
  {
    name: 'Wymiana i wyważanie opon',
    shortDescription: 'Kompleksowa obsługa sezonowa z kontrolą stanu bieżnika, ciśnienia i ogólnego zużycia.',
    price: 'od 120 do 220 zł',
  },
  {
    name: 'Naprawy blacharsko-lakiernicze',
    shortDescription: 'Od drobnych poprawek po większe naprawy po kolizjach i uszkodzeniach karoserii.',
    price: 'wycena indywidualna',
  },
  {
    name: 'Serwis klimatyzacji',
    shortDescription: 'Odgrzybianie, kontrola szczelności i nabijanie czynnika dla komfortu jazdy przez cały sezon.',
    price: 'od 120 do 250 zł',
  },
]

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'eksploatacja',
    title: 'Serwis eksploatacyjny',
    description: 'Podstawowe prace serwisowe, które pomagają utrzymać auto w dobrej kondycji przez cały rok.',
    services: [
      { name: 'Wymiana oleju silnikowego + filtr oleju', shortDescription: 'Standardowy serwis olejowy dla większości aut osobowych.', price: '100–180 zł' },
      { name: 'Serwis olejowy z kompletem filtrów', shortDescription: 'Olej, filtr oleju, powietrza i kabinowy w jednej usłudze.', price: '180–320 zł' },
      { name: 'Wymiana filtra powietrza', shortDescription: 'Szybka usługa eksploatacyjna przy przeglądzie lub serwisie rocznym.', price: '30–70 zł' },
      { name: 'Wymiana filtra kabinowego', shortDescription: 'Poprawa jakości powietrza i sprawności nawiewu.', price: '30–80 zł' },
      { name: 'Wymiana filtra paliwa', shortDescription: 'Cena zależy od dostępu i typu układu zasilania.', price: '40–120 zł' },
      { name: 'Wymiana świec zapłonowych', shortDescription: 'Dla silników benzynowych i LPG, bez ceny części.', price: '80–180 zł' },
    ],
  },
  {
    slug: 'diagnostyka',
    title: 'Diagnostyka i elektryka',
    description: 'Precyzyjne sprawdzenie usterek oraz podstawowych układów elektrycznych i elektronicznych.',
    services: [
      { name: 'Diagnostyka komputerowa', shortDescription: 'Odczyt błędów, parametry bieżące, wstępna analiza przyczyny.', price: '100–200 zł' },
      { name: 'Test akumulatora i układu ładowania', shortDescription: 'Sprawdzenie akumulatora, rozruchu i alternatora.', price: '50–120 zł' },
      { name: 'Kasowanie błędów po naprawie', shortDescription: 'Usługa po wykonanej diagnostyce lub wymianie elementu.', price: '50–100 zł' },
      { name: 'Diagnostyka rozrusznika lub alternatora', shortDescription: 'Weryfikacja pracy układu rozruchowego i ładowania.', price: '100–180 zł' },
      { name: 'Wymiana akumulatora', shortDescription: 'Montaż z kontrolą ładowania i podstawową adaptacją.', price: '40–100 zł' },
    ],
  },
  {
    slug: 'hamulce-zawieszenie',
    title: 'Hamulce i zawieszenie',
    description: 'Prace wpływające bezpośrednio na bezpieczeństwo, stabilność auta i komfort prowadzenia.',
    services: [
      { name: 'Wymiana klocków hamulcowych przód', shortDescription: 'Robocizna za oś, bez ceny klocków.', price: '120–200 zł' },
      { name: 'Wymiana klocków hamulcowych tył', shortDescription: 'Cena zależna od rodzaju zacisku i hamulca postojowego.', price: '120–220 zł' },
      { name: 'Wymiana tarcz i klocków na osi', shortDescription: 'Kompletny serwis hamulców dla jednej osi.', price: '250–450 zł' },
      { name: 'Wymiana płynu hamulcowego', shortDescription: 'Z odpowietrzeniem i kontrolą układu.', price: '100–220 zł' },
      { name: 'Geometria kół / zbieżność', shortDescription: 'Ustawienie geometrii po naprawie zawieszenia lub wymianie opon.', price: '100–250 zł' },
      { name: 'Wymiana amortyzatorów przód', shortDescription: 'Cena za oś, bez elementów dodatkowych.', price: '180–350 zł' },
      { name: 'Wymiana łożyska koła', shortDescription: 'Cena zależna od konstrukcji piasty i modelu auta.', price: '150–300 zł' },
      { name: 'Wymiana wahacza lub sworznia', shortDescription: 'Usługa zawieszeniowa z późniejszą kontrolą geometrii.', price: '150–300 zł' },
    ],
  },
  {
    slug: 'klimatyzacja-opony',
    title: 'Klimatyzacja i opony',
    description: 'Usługi sezonowe i komfortowe, które kierowcy najczęściej wykonują wiosną i jesienią.',
    services: [
      { name: 'Serwis klimatyzacji R134a', shortDescription: 'Kontrola szczelności, odzysk, próżnia i napełnienie.', price: '120–250 zł' },
      { name: 'Serwis klimatyzacji R1234yf', shortDescription: 'Droższy czynnik i dłuższa procedura serwisowa.', price: '300–450 zł' },
      { name: 'Odgrzybianie lub ozonowanie klimatyzacji', shortDescription: 'Usunięcie nieprzyjemnych zapachów i odświeżenie układu.', price: '50–120 zł' },
      { name: 'Wymiana opon z wyważeniem komplet', shortDescription: 'Cena dla auta osobowego, zależna od średnicy felgi.', price: '120–220 zł' },
      { name: 'Wymiana kompletu kół', shortDescription: 'Szybsza usługa sezonowa przy gotowych kołach.', price: '80–160 zł' },
      { name: 'Depozyt opon / hotel opon', shortDescription: 'Przechowanie kompletu opon lub kół na sezon.', price: '80–200 zł' },
    ],
  },
  {
    slug: 'naprawy-mechaniczne',
    title: 'Naprawy mechaniczne',
    description: 'Bardziej złożone usługi, gdzie końcowa cena zależy od modelu auta, dostępu i zakresu prac.',
    services: [
      { name: 'Wymiana rozrządu', shortDescription: 'Cena zależna od silnika, napędu paska lub łańcucha i osprzętu.', price: '450–1500 zł' },
      { name: 'Wymiana sprzęgła', shortDescription: 'Robocizna bez ceny zestawu sprzęgła i koła dwumasowego.', price: '450–1200 zł' },
      { name: 'Wymiana oleju w automatycznej skrzyni biegów', shortDescription: 'Cena zależna od metody i ilości oleju.', price: '350–900 zł' },
      { name: 'Wymiana pompy wody', shortDescription: 'Najczęściej wykonywana razem z rozrządem lub naprawą chłodzenia.', price: '250–600 zł' },
      { name: 'Wymiana chłodnicy lub elementów układu chłodzenia', shortDescription: 'Usługa zależna od dostępu i konieczności demontażu frontu.', price: '250–700 zł' },
      { name: 'Przegląd przed zakupem samochodu', shortDescription: 'Kontrola mechaniczna, podwozia i podstawowej diagnostyki.', price: '150–350 zł' },
    ],
  },
]
