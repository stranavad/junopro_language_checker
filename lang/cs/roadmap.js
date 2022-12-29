export default {
  gantt: {
    labels: {
      column_text: 'Název úkolu',
      column_start_date: 'Čas zahájení',
      column_duration: 'Trvání',
    },
  },
  roadmap: {
    action: {
      add: 'Přidat Roadmapu',
      addFrom: 'Přidat od',
      addTo: 'Přidat do',
      edit: 'Upravit roadmapu',
      editItem: 'Upravit položku',
    },
    field: {},
    notification: {
      item: {
        store: 'Roadmapa {name} byla úspěšně vytvořena!',
        update: 'Roadmapa {name} byla úspěšně aktualizována!',
        delete: 'Roadmapa {name} byla úspěšně smazána!',
        archive: '{name} byl úspěšně archivován!',
        restore: '{name} byl úspěšně obnoven!',
      },
      subItem: {
        store: '{name} byl úspěšně vytvořen!',
        update: '{name} byl úspěšně aktualizován!',
        changeOwner: '{owner} byl nastaven jako vlastník {name}!',
        updateTimelineFrom:
          '{date} byl nastaven jako od data v {name}!',
        updateTimelineTo:
          '{date} byl nastaven jako do data v {name}!',
        updateTimelineFromAndTo:
          '{from} byl nastaven jako od data v {name} a {to} byl nastaven jako do data v {name}!',
        updateLabels: 'Štítky {name} byly úspěšně aktualizovány!',
        updateCollaborators:
          'Spolupracovníci {name} byli úspěšně aktualizováni!',
        updateStatus:
          'Stav {name} byl úspěšně změněn na {status}!',
        note: {
          store: 'Poznámka byla úspěšně přidána do {name}!',
          update: 'Poznámka byla úspěšně aktualizována!',
          delete: 'Poznámka byla úspěšně smazána!',
          restore: 'Poznámka byla úspěšně obnovena!',
        },
        delete: '{name} byl úspěšně smazán!',
        archive: '{name} byl úspěšně archivován!',
        restore: '{name} byl úspěšně obnoven!',
        clone: '{name} byl úspěš',
      },
    },
    other: {
      environment: {
        swimline: 'Swimline',
        timeline: 'Časová osa',
      },
      scale: 'Měřítko',
    },
    state: {
      noRoadmaps: 'Žádné roadmapy nejsou k dispozici',
      progress: {
        workingOnIt: 'Na tom pracuji',
        finished: 'Dokončeno',
        notStarted: 'Nezačato',
      },
    },
  },
  roadmapActivity: {
    action: {
      add: 'Přidat činnost',
      addDesign: 'Vyberte nebo přidejte design',
    },
    entity: {
      activities: 'Činnosti',
    },
    field: {
      effortDeficit: 'Nedostatek úsilí',
      effortSpent: 'Strávené úsilí',
      name: 'Název činnosti',
      numberOfNotes: 'Počet poznámek',
      plannedEffort: 'Plánované úsilí',
      totalEffort: 'Celkové úsilí',
    },
    notification: {
      dragNotAllowed: 'Není povoleno přetáhnout činnost pod jinou roadmapu',
    },
    state: {},
  },
};
