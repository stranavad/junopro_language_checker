// in this file are keywords or sentences which are specific for design, epic or story
// all should be sorted alphabetically
export default {
  design: {
    action: {
      changeTo: {
        epic: 'Change to epic',
        story: 'Change to story',
      },
    },
    entity: {},
    field: {},
    state: {},
  },
  epic: {
    field: {
      name: 'Epic name',
    },
    notification: {
      change: 'Epic - {name} has been successfully transformed to story!',
      changeAuthor: '{user} was set as project author of Epic - {name}',
      changeOwner: '{user} was set as project owner of Epic - {name}',
      store: 'Epic - {name} has been successfully created!',
      update: 'Epic - {name} has been successfully updated!',
      updateSpent: '{spent} was reported in Epic - {name}',
    },
  },
  story: {
    field: {
      name: 'Story name',
    },
    notification: {
      change: 'Story - {name} has been successfully transformed to epic!',
      changeAuthor: '{user} was set as project author of Story - {name}',
      changeOwner: '{user} was set as project owner of Story - {name}',
      store: 'Story - {name} has been successfully created!',
      update: 'Story - {name} has been successfully updated!',
      updateSpent: '{spent}  was reported in Story - {name}',
    },
  },
};
