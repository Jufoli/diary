
Installation:
Hinweis: erst Emberserver Stoppen, falls er läuft
1. cmd im Diary Ordner starten
2. "npm install && bower install" eingeben
3. nachdem alles geladen ist ember server starten
4. Fehlermeldung siehe unten

Der Server wirft nach dem Aufrufen der Seite: localhost:4200 eine Fehlermeldung, dass er eine event-calender.js nicht unter dem Path findet.
Lösung:
Hinweis: erst Emberserver Stoppen, falls er läuft
1. Im Dateibrowser in den Ordner bower_components welchseln
2. Dort ist ein Ordner "jQueryEventCalendar", diesen Kopieren! und umbenennen in "jquery-eventcalendar"
3. Server wieder starten.