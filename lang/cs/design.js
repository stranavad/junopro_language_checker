export default {
  design: {
    action: {
      changeTo: {
        epic: 'Změnit na epickou',
        story: 'Změnit na příběh',
      },
    },
    entity: {},
    field: {},
    state: {},
  },
  epic: {
    field: {
      name: 'Název epiky',
    },
    notification: {
      change: 'Epická - {name} byla úspěšně přeměněna na příběh!',
      changeAuthor: '{user} byl nastaven jako autor projektu Epická - {name}',
      changeOwner: '{user} byl nastaven jako vlastník projektu Epická - {name}',
      store: 'Epická - {name} byla úspěšně vytvořena!',
      update: 'Epická - {name} byla úspěšně aktualizována!',
      updateSpent: '{spent} bylo oznámeno v Epické - {name}',
    },
  },
  story: {
    field: {
      name: 'Název příběhu',
    },
    notification: {
      change: 'Příběh - {name} byl úspěšně přeměněn na epickou!',
      changeAuthor: '{user} byl nastaven jako autor projektu Příběh - {name}',
      changeOwner: '{user} byl nastaven jako vlastník projektu Příběh - {name}',
      store: 'Příběh - {name} byl úspěšně vytvořen!',
      update: 'Příběh - {name} byl úspěšně aktualizován!',
      updateSpent: '{spent} bylo oznámeno v Příběhu - {name}',
    },
  },
};
