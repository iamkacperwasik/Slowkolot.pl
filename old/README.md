## Opis projektu

Słówkolot.pl to minimalistyczna strona internetowa, która zaprasza Cię do fascynującej przygody pośród ciekawostek słowniczych w języku polskim.

### Jak to działa?

- **Losowe Słowo**: Po wejściu na Słówkolot.pl przywitamy Cię losowo wybranym słowem. To słowo może być zupełnie nowe dla Ciebie i otworzyć przed Tobą drzwi do nieznanych znaczeń.
- **Słowo + Definicja**: Każde słowo jest prezentowane wraz z jego klarowną definicją. Dowiesz się, co oznacza to słowo i jakie ma znaczenie.
- **Rozszerzaj Horyzonty**: Słówkolot.pl to miejsce, gdzie możesz poszerzać swoje horyzonty słownicze w języku polskim, odkrywając unikalne słowa i zwroty.
- **Codzienna Dawka Wiedzy**: Wróć do nas codziennie, aby odkrywać nowe słowa i stopniowo wzbogacać swoją wiedzę o języku.

## Użytkowanie

1. Otwórz przeglądarkę internetową.
2. Przejdź pod adres https://www.slowkolot.pl.
3. Rozpocznij swoją przygodę z fascynującymi ciekawostkami słowniczymi.

## Instrukcje instalacji i uruchamiania

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

### Instalacja zależności

Upewnij się, że masz zainstalowane [Node.js](https://nodejs.org/) na swoim komputerze.

1. Sklonuj repozytorium do swojego lokalnego środowiska:

```bash
git clone https://github.com/iamkacperwasik/Slowkolot.pl
```

2. Przejdź do katalogu projektu:

```bash
cd Slowkolot.pl
```

3. Zainstaluj zależności przy użyciu menedżera pakietów npm:

```bash
npm install
```

4. Utwórz plik `.env.local` w głównym katalogu projektu i dodaj w nim następujące zmienne:

```txt
SUPABASE_URL = twój_adres_supabase_url
SUPABASE_SERVICE_ROLE = twój_service_role
```

**Uwaga**: Zastąp `twój_adres_supabase_url` i `twój_service_role` odpowiednimi danymi dostępowymi do Twojej bazy danych Supabase.

### Uruchamianie aplikacji

Po zainstalowaniu zależności i utworzeniu pliku .env.local, uruchom projekt za pomocą poniższej komendy:

```bash
npm run dev
```

To spowoduje uruchomienie aplikacji na lokalnym serwerze. Otwórz przeglądarkę internetową i przejdź pod adres http://localhost:3000, aby korzystać z Słówkolot.pl.

### Tworzenie wersji produkcyjnej

Jeśli chcesz zbudować wersję produkcyjną projektu, wykonaj następującą komendę:

```bash
npm run build
```

To spowoduje wygenerowanie zoptymalizowanego kodu i plików do wdrożenia.

## Użyte Technologie

Słówkolot.pl został zbudowany przy użyciu szeregu nowoczesnych technologii, które zapewniają wydajność, skalowalność i łatwość rozwoju. Poniżej przedstawiamy listę głównych technologii wykorzystanych w projekcie:

- `Supabase`: Supabase został użyty jako baza danych i platforma backendowa, co umożliwiło efektywne zarządzanie danymi i uwierzytelnianiem.

- `Jotai`: Jotai jest biblioteką do zarządzania stanem w aplikacji React. Umożliwia nam zarządzanie stanem w sposób deklaratywny i efektywny.

- `Next.js 13`: Framework Next.js został wykorzystany do budowy strony internetowej Słówkolot.pl. Dzięki temu zyskaliśmy możliwość generowania stron po stronie serwera (SSR) oraz statyczne generowanie (SSG), co wpłynęło na wydajność i SEO naszej aplikacji.

- `React`: React jest używany jako biblioteka do budowy interfejsu użytkownika, co umożliwia tworzenie dynamicznych komponentów i interaktywnych widoków.

- `Tailwind CSS`: Tailwind CSS jest frameworkiem CSS, który pozwolił nam na szybkie i spójne tworzenie interfejsu użytkownika. Używając klas CSS, zyskaliśmy elastyczność i czytelność stylizacji.

- `TypeScript`: TypeScript został użyty jako nadzbiór JavaScript, co pomogło w uniknięciu błędów i zapewnieniu typowania statycznego, co jest korzystne w dużych projektach.

- `ChatGPT`: ChatGPT, stworzony przez OpenAI, został użyty do wygenerowania bazy danych słówek, co pozwoliło na dostarczenie użytkownikom ciekawostek słowniczych i unikalnych słów do nauki.

## Rozwój projektu

Jeśli masz pomysły na rozwinięcie projektu Słówkolot.pl lub chcesz zgłosić błędy, zapraszam do kontaktu poprzez adres email: [kacper@wasik.me](mailto:kacper@wasik.me).
Czekam na Twoje sugestie i opinie!

## Licencja

Ten projekt jest dostępny na licencji [MIT](./LICENSE).
