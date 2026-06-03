# Zeiterfassungskonto

**Web‑Anwendung zur Erfassung und Verwaltung von Arbeitszeiten**  
*Projekt im Rahmen der Ausbildung zum Fachinformatiker für Anwendungsentwicklung*

---

## Überblick

Das Zeiterfassungskonto ist eine Web‑Applikation, die die Arbeitszeiten von Angestellten eines Unternehmens erfasst, verwaltet und übersichtlich darstellt.  
Zusätzlich werden Urlaubszeiten berücksichtigt und in die Berechnung integriert.

Das Projekt besteht aus einem React‑Frontend und einer Node.js‑basierten REST‑API, die als Schnittstelle zur MySQL-Datenbank dient.

---

## Tech‑Stack

### Frontend

- React
- JavaScript
- HTML / CSS
- Komponentenbasierte Architektur
- React Router (clientseitiges Routing)
- TanStack Table (Tabellenansichten)
- Axios (HTTP-Requests)

### Backend

- Node.js
- Express
- MySQL (mysql2 mit Connection Pool)
- REST‑API‑Struktur
- dotenv (Konfiguration über Umgebungsvariablen)
- Endpunkte für Arbeitszeiten, Urlaubstage und Mitarbeiterdaten

---

## Projektstruktur

```
/ZeiterfassungsApp   → React-Frontend (Vite)
/datenbankAPI        → Node.js REST-API für Datenbankzugriffe
```

---

## Features (bisher)

- Erfassung von Arbeitszeiten pro Mitarbeiter
- Monatsübersicht in Tabellenform
- Berechnung von Soll‑ und Ist‑Stunden (inkl. Feiertage über externe API)
- Urlaubsdaten pro Mitarbeiter (Lesezugriff)
- Mitarbeiterprofil bearbeiten
- API‑Endpunkte für CRUD‑Operationen

---

## Geplante Features

- Benutzerverwaltung / Rollen
- Authentifizierung (JWT)
- Export von Monatsübersichten
- Dashboard mit Statistiken
- Mobile‑optimierte Ansicht
- Vollständige Urlaubsverwaltung (Erstellen, Bearbeiten, Genehmigen)

---

## Status

Das Projekt befindet sich aktuell in Entwicklung.  
Authentifizierung und Zugriffskontrolle sind noch nicht implementiert – geplant via JWT.

---

## Lokales Setup

### Voraussetzungen
- Node.js (v18+)
- MySQL-Datenbank

### Backend starten

```bash
cd datenbankAPI
npm install
```

`.env` Datei anlegen:

```
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=dein_user
MYSQL_PASSWORD=dein_passwort
MYSQL_DATABASE_NAME=zeiterfassungdb
FRONTEND_URL=http://localhost:5173
```

```bash
npm run dev
```

### Frontend starten

```bash
cd ZeiterfassungsApp
npm install
```

`.env` Datei anlegen:

```
VITE_Api_Server=http://localhost:5000
```

```bash
npm run dev
```