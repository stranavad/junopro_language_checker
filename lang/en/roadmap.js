// in this file are keywords or sentences which are specific for issue, task or bug
// all should be sorted alphabetically
export default {
  gantt: {
    labels: {
      column_text: 'Task name',
      column_start_date: 'Start time',
      column_duration: 'Duration',
    },
  },
  roadmap: {
    action: {
      add: 'Add Roadmap',
      addFrom: 'Add From',
      addTo: 'Add To',
      edit: 'Edit roadmap',
      editItem: 'Edit Item',
    },
    field: {},
    notification: {
      item: {
        store: 'Roadmap {name} has been successfully created!',
        update: 'Roadmap {name} has been successfully updated!',
        delete: 'Roadmap {name} has been successfully deleted!',
        archive: '{name} was successfully archived!',
        restore: '{name} was successfully restored!',
      },
      subItem: {
        store: '{name} has been successfully created!',
        update: '{name} has been successfully updated!',
        changeOwner: '{owner} was set as owner of {name}!',
        updateTimelineFrom:
            '{date} was set as the from date in {name}!',
        updateTimelineTo:
            '{date} was set as the to date in {name}!',
        updateTimelineFromAndTo:
            '{from} was set as the from date in {name} and {to} was set as the to date in {name}!',
        updateLabels: '{name} labels have been successfully updated!',
        updateCollaborators:
            '{name} collaborators have been successfully updated!',
        updateStatus:
            'Status of {name} was successfully changed to {status}!',
        note: {
          store: 'Note was successfully added to {name}!',
          update: 'Note was successfully updated!',
          delete: 'Note was successfully deleted!',
          restore: 'Note was successfully restored!',
        },
        delete: '{name} has been successfully deleted!',
        archive: '{name} was successfully archived!',
        restore: '{name} was successfully restored!',
        clone: '{name} has been successfully cloned!',
      },
    },
    other: {
      environment: {
        swimline: 'Swimline',
        timeline: 'Timeline',
      },
      scale: 'Scale',
    },
    state: {

      noRoadmaps: 'No roadmaps available',
      progress: {
        workingOnIt: 'Working on it',
        finished: 'Finished',
        notStarted: 'Not started',
      },
    },
  },
  roadmapActivity: {
    action: {
      add: 'Add activity',
      addDesign: 'Select or Add Design',
    },
    entity: {
      activities: 'Activities',
    },
    field: {
      effortDeficit: 'Effort deficit',
      effortSpent: 'Effort spent',
      name: 'Activity name',
      numberOfNotes: 'Number of notes',
      plannedEffort: 'Planned effort',
      totalEffort: 'Total effort',
    },
    notification: {
      dragNotAllowed: 'It is not allowed to drag activity under another roadmap',
    },
    state: {},
  },
};
