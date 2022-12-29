// in this file are keywords which can be used in more places in app without any change
// like entities, state or action names
// all should be sorted alphabetically
export default {
  label: {
    action: {
      add: 'Add label',
      assign: 'Assign labels',
      create: 'Create label',
      createPageLabel: 'Create page label',
      createProjectLabel: 'Create project label',
      manage: 'Manage labels',
      managePageLabels: 'Manage page labels',
      manageProjectLabels: 'Manage project labels',
      name: 'Name new label',
    },
    notification: {
      create: 'Label has been successfully created!',
      delete: 'Label has been successfully deleted!',
      undelete: 'Label has been successfully undeleted!',
      update: 'Label has been successfully updated!',
    },
    other: {
      forLabel: 'for <span class="text-juno-blue">{name}</span>',
      inProject: 'in project <span class="text-juno-blue"> {name} </span>',
    },
    state: {
      noResultsChooseProject: 'No results found, choose project first and try again',
      noResultsFor: 'No results for "<span class="text-juno-blue">{name}</span>". Try something else or create',
      noResultsInProject: 'No results found in this project',
      notFound: 'Sorry, no labels were found.',
    },
  },
};
