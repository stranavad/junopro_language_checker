// in this file are keywords or sentences which are specific for issue, task or bug
// all should be sorted alphabetically
export default {
  issue: {
    action: {
      flipCardSide: 'Flip card side',
      createJiraBug: 'Create Jira bug',
      changeToBug: 'Change to Bug',
      changeToTask: 'Change to Task',
      selectOrAdd: 'Select or Add Issues (Bug or Task)',
    },
    entity: {
      mainIssue: 'Main issue',
      noRelatedIssues: 'No related issues',
      relatedIssues: 'Related issues',
    },
    field: {
      detail: 'Detail',
    },
    notification: {
      disableText: 'Number of statuses viewable on board exceeded. Maximum is 7.',
    },
    other: {
      more: '{count} more',
    },
    state: {
      opened: 'opened',
    },
  },
  task: {
    notification: {
      change: 'Task - {name} has been successfully transformed to bug!',
      changeAssignee: '{userName} was set as project assignee of Task - {name}!',
      changeAuthor: '{userName} was set as project author of Task - {name}!',
      store: 'Task - {name} has been successfully created!',
      storeCollaboratorsFailed: 'Task - {name} collaborators have not been successfully created!',
      storeLabelsAndCollaboratorsFailed: 'Task - {name}. Labels and Collaborators have not been successfully created!',
      storeLabelsFailed: 'Task - {name} labels have not been successfully created!',
      update: 'Task - {name} has been successfully updated!',
      updateCollaboratorsFailed: 'Task - {name} collaborators have not been successfully updated!',
      updateLabelsAndCollaboratorsFailed: 'Task - {name}. Labels and Collaborators have not been successfully updated!',
      updateLabelsFailed: 'Task - {name} labels have not been successfully updated!',
      updateSpent: '{newSpent} was reported in Task - {name}',
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
