export default {
  issue: {
    action: {
      flipCardSide: 'Převrátit stranu karty',
      createJiraBug: 'Vytvořit chybu Jira',
      changeToBug: 'Změnit na chybu',
      changeToTask: 'Změnit na úkol',
      selectOrAdd: 'Vybrat nebo přidat problémy (chyby nebo úkoly)',
    },
    entity: {
      mainIssue: 'Hlavní problém',
      noRelatedIssues: 'Žádné související problémy',
      relatedIssues: 'Související problémy',
    },
    field: {
      detail: 'Podrobnosti',
    },
    notification: {
      disableText: 'Počet stavů viditelných na ploše překročil limit. Maximální počet je 7.',
    },
    other: {
      more: '{count} dalších',
    },
    state: {
      opened: 'otevřeno',
    },
  },
  task: {
    notification: {
      change: 'Úkol - {name} byl úspěšně přeměněn na chybu!',
      changeAssignee: '{userName} byl nastaven jako projektový přiřazenec úkolu - {name}!',
      changeAuthor: '{userName} byl nastaven jako projektový autor úkolu - {name}!',
      store: 'Úkol - {name} byl úspěšně vytvořen!',
      storeCollaboratorsFailed: 'Spolupracovníci úkolu - {name} nebyli úspěšně vytvořeni!',
      storeLabelsAndCollaboratorsFailed: 'Úkol - {name}. Štítky a spolupracovníci nebyli úspěšně vytvořeni!',
      storeLabelsFailed: 'Štítky úkolu - {name} nebyly úspěšně vytvořeny!',
      update: 'Úkol - {name} byl úspěšně aktualizován!',
      updateCollaboratorsFailed: 'Spolupracovníci úkolu - {name} nebyli úspěšně aktualizováni!',
      updateLabelsAndCollaboratorsFailed: 'Úkol - {name}. Štítky a spolupracovníci nebyli úspěšně aktualizováni!',
      updateLabelsFailed: 'Úkol - {name} štítky nebyly úspěšně aktualizovány!',
      updateSpent: '{newSpent} bylo hlášeno v úkolu - {name}',
    },
  },
  bug: {
    notification: {
      change: 'Bug - {nme} has been successfully transformed to task!',
      changeAssignee: '{userName} was set as project assignee of Bug - {name}!',
      changeAuthor: '{userName} was set as project author of Bug - {name}!',
      report: 'Bug was successfully reported',
      store: 'Bug - {name} has been successfully created!',
      storeCollaboratorsFailed: 'Bug - {name} collaborators have not been successfully created!',
      storeLabelsAndCollaboratorsFailed: 'Bug - {name}. Labels and Collaborators have not been successfully created!',
      storeLabelsFailed: 'Bug - {name} labels have not been successfully created!',
      update: 'Bug - {name} has been successfully updated!',
      updateCollaborators: '{name} collaborators have been successfully updated!',
      updateCollaboratorsFailed: 'Bug - {name} collaborators have not been successfully updated!',
      updateLabelsAndCollaboratorsFailed: 'Bug - {name}. Labels and Collaborators have not been successfully updated!',
      updateLabelsFailed: 'Bug - {name} labels have not been successfully updated!',
      updateSpent: '{newSpent} was reported in Bug - {name}',
    },
  },
};
