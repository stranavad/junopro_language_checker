export default {
  docsSpace: {
    action: {
      add: 'Přidat prostor',
      search: 'Hledat prostor',
    },
    entity: {},
    field: {},
    notification: {
      create: 'Nový prostor {name} byl úspěšně vytvořen.',
      remove: 'Prostor {name} byl úspěšně odstraněn.',
      revoke: 'Prostor {name} byl úspěšně odvolán.',
      update: 'Prostor byl úspěšně aktualizován.',
      updateOwner: 'Vlastník prostoru byl úspěšně aktualizován',
      updatePosition: 'Pozice prostoru byla úspěšně aktualizována.',
      updateTeams: 'Týmy prostoru byly úspěšně aktualizovány',
    },
    state: {
      loadingSpace: 'Načítání prostoru...',
      loadingSpaces: 'Načítání prostorů...',
      noSpacesFound: 'Žádné prostory nebyly nalezeny',
    },
    other: {
      permissionMissing: 'Chybí oprávnění k zobrazení <span class="text-juno-blue">docs spaces</span>',
    },
  },
  docsTopic: {
    action: {
      add: 'Přidat téma',
      collapse: 'Sbalit vše',
      expand: 'Rozbalit vše',
    },
    entity: {},
    field: {
      name: 'Název tématu',
      pages: 'stránky',
    },
    notification: {
      changeName: 'Název tématu byl úspěšně změněn!',
      createdInSpace: 'Téma {name} bylo úspěšně vytvořeno v prostoru {space}',
      delete: 'Téma {name} bylo úspěšně odstraněno.',
      revoke: 'Téma {name} bylo úspěšně odvoláno.',
      updatePosition: 'Pozice tématu byla úspěšně aktualizována.',
    },
    state: {
      loadingTopics: 'Načítání témat...',
      noTopicsFound: 'Nebyla nalezena žádná témata',
    },
    other: {
      permissionMissing: 'Chybí oprávnění k zobrazení <span class="text-juno-blue">docs témat</span>',
    },
  },
  docsPage: {
    action: {
      add: 'Přidat stránku',
      addContent: 'Přidat obsah',
    },
    entity: {},
    field: {
      content: 'Obsah',
      name: 'Název stránky',
      note: 'Poznámka',
    },
    notification: {
      createdInTopic: 'Stránka {name} byla úspěšně vytvořena v tématu {topic}',
      delete: 'Stránka {name} byla úspěšně odstraněna.',
      note: {
        delete: 'Poznámka byla úspěšně odstraněna.',
        restore: 'Poznámka byla úspěšně obnovena.',
        store: 'Poznámka byla úspěšně uložena.',
        update: 'Poznámka byla úspěšně aktualizována.',
      },
      revoke: 'Stránka {name} byla úspěšně zrušena.',
      updateCollaborators: 'Sdílení stránky bylo úspěšně aktualizováno!',
      updateLabels: 'Štítky stránky byly úspěšně aktualizovány!',
      updateOwner: 'Vlastník stránky byl úspěšně aktualizován!',
      updatePosition: 'Pozice stránky byla úspěšně aktualizována.',
    },
    state: {
      noContentAvailable: 'V tuto chvíli není k dispozici žádný obsah stránky.',
    },
    other: {
      doNotLeaveCommentEmpty: 'Nezanechávejte komentář prázdný...',
      permissionMissing: 'Chybí oprávnění k zobrazení <span class="text-juno-blue">docs stránky</span>',
    },
  },
};
