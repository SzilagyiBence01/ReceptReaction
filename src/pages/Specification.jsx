import React from "react";

/*
    Ide kerül egyszerűen formázva a házifeladat első szakasához leadott specializáció
*/
export default function Specification() {
  return (
    <div className="text-formalization">
      <h1>Recept app specializáció</h1>
      <p>
        Jelen recept app specializáció egy React-alapú, frontend oldali
        receptkezelő alkalmazás, mely számos funkciójával képes a főzni
        vágyóknak egy összefogó, jól és könnyen kezelhető felületen az egyes
        recepteket kezelni.
      </p>
      <p>
        Az alkalmazás több lapnézetből áll, amelyek között a felső navigációs
        sáv segítségével válthatunk a főoldal, kedvencek, új recept és
        alkalmazásról lapok között. A Főoldalon jelenik meg minden felvett
        recept röviden, melyek között akár keresni tudunk név szerint és szűrni
        különböző féle tagek szerint, mint például reggeli, gluténmentes stb.
        feltételek szerint.
      </p>
      <p>
        Itt az adott receptre kattintva tudjuk részletesen megtekinteni a
        kártyát, ahol láthatjuk is a recept elkészítésének mentetét,
        hozzávalóit. A főoldalon lehetőségünk van arra, hogy a kis recept
        nézetnél felvegyük (vagy esetleg levegyük) egy kattintásra az adott
        receptet a kedvencekhez, és ekkor minden kedvenc recepted itt jelenik
        meg.
      </p>
      <p>
        Az új recept-re kattintva tudunk felvenni új recepteket, ahol csatolnunk
        kell egy képet, leírni a különböző hozzávalókat, megadni a különböző
        tageket az ételhez és leírást adni azt elkészítéshez. Az alkalmazásól
        fülön megtudjuk tekinteni az applikáció rövid bemutatását és egyéb
        információkat.
      </p>
    </div>
  );
}
