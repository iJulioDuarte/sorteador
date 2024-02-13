"use client";
import { useRef, useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string | undefined>();
  const [players, setPlayers] = useState<string[]>([]);

  const [team1, setTeam1] = useState<string[]>([]);
  const [team2, setTeam2] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSufflePlayers = () => {
    const newPlayers = [...players];

    newPlayers.forEach((_, index) => {
      const randomIndex = Math.floor(Math.random() * (index + 1));

      [newPlayers[index], newPlayers[randomIndex]] = [
        newPlayers[randomIndex],
        newPlayers[index],
      ];
    });

    return newPlayers;
  };

  const handleResetTeams = () => {
    setTeam1([]);
    setTeam2([]);
  };

  const handleClickGenerateButton = () => {
    const sufllePlayers = handleSufflePlayers();

    handleResetTeams();

    sufllePlayers.forEach((player, index) => {
      if (index % 2 === 0) {
        setTeam1((v) => [...v, player]);
        return;
      }
      setTeam2((v) => [...v, player]);
      return;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form className="space-x-2" onSubmit={(e) => e.preventDefault()}>
          <label>Insira um jogador: </label>
          <input
            ref={inputRef}
            className="text-black pl-1"
            onChange={(value) => {
              setValue(value.currentTarget?.value);
            }}
          />
          <button
            className="bg-blue-600 p-1 rounded-md border-2 border-white"
            onClick={() => {
              if (!value) {
                window.alert("Coloca o nome do jogador, por favor?");
                return;
              }
              setPlayers((v) => [...v, value]);
              if (inputRef.current) inputRef.current.value = "";
            }}
          >
            Adicionar
          </button>
        </form>
        <div className="flex flex-col min-w-max gap-3 items-center mt-5">
          <div className="flex flex-col gap-2 border border-blue-500 p-3 max-w-fit">
            Jogadores:
            {players &&
              players.map((player, index) => (
                <span key={index}>-{player}</span>
              ))}
          </div>
          <button
            onClick={() => {
              handleClickGenerateButton();
            }}
            className="border border-white p-2 bg-blue-600 rounded-md"
          >
            Gerar times
          </button>
        </div>
      </div>
      <div className="flex min-w-max space-x-2 border-2 border-blue-600 p-4 divide-x-2 mt-5">
        <div className="flex flex-col gap-2">
          <span>TIME 1:</span>
          {team1.map((player, index) => (
            <span key={index}>-{player}</span>
          ))}
        </div>
        <div className="flex flex-col gap-2 pl-3">
          <span>TIME 2:</span>
          {team2.map((player, index) => (
            <span key={index}>-{player}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
