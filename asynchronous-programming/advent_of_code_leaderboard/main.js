const getAllParticipant = (prticipantsDetails) => {
  const allParcipants = prticipantsDetails.members;
  const allParticipantsId = Object.keys(allParcipants);

  return allParticipantsId.map((id) => {
    const participant = allParcipants[id];

    return {
      id,
      name: participant.name,
      stars: participant.stars,
      score: participant.local_score,
    };
  });
};

const main = async () => {
  const rawData = await Deno.readTextFile("advent_of_code.json");
  const jsonData = JSON.parse(rawData);
  const allParticipants = getAllParticipant(jsonData).sort((
    participant1,
    participant2,
  ) => participant2.stars - participant1.stars);

  console.table(allParticipants)
  
};

main();
