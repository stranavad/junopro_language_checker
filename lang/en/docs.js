// in this file are keywords or sentences which are specific for navbar
// all should be sorted alphabetically
export default {
  docsSpace: {
    action: {
      add: 'Add Space',
      search: 'Search Space',
    },
    entity: {},
    field: {},
    notification: {
      create: 'New space {name} has been successfully created.',
      remove: 'Space {name} has been successfully removed.',
      revoke: 'Space {name} has been successfully revoked.',
      update: 'Space has been successfully updated.',
      updateOwner: 'Space owner has been successfully updated',
      updatePosition: 'Space position has been successfully updated.',
      updateTeams: 'Space teams have been successfully updated',
    },
    state: {
      loadingSpace: 'Loading space...',
      loadingSpaces: 'Loading spaces...',
      noSpacesFound: 'No spaces found',
    },
    other: {
      permissionMissing: 'Permission to see <span class="text-juno-blue">docs spaces</span> is missing',
    },
  },
  docsTopic: {
    action: {
      add: 'Add topic',
      collapse: 'Collapse all',
      expand: 'Expand all',
    },
    entity: {},
    field: {
      name: 'Topic name',
      pages: 'pages',
    },
    notification: {
      changeName: 'Topic name has been changed successfully!',
      createdInSpace: 'Topic {name} has been successfully created in space {space}',
      delete: 'Topic {name} has been successfully deleted.',
      revoke: 'Topic {name} has been successfully revoked.',
      updatePosition: 'Topic position has been successfully updated.',
    },
    state: {
      loadingTopics: 'Loading topics...',
      noTopicsFound: 'No topics found',
    },
    other: {
      permissionMissing: 'Permission to see <span class="text-juno-blue">docs topics</span> is missing',
    },
  },
  docsPage: {
    action: {
      add: 'Add page',
      addContent: 'Add content',
    },
    entity: {},
    field: {
      content: 'Content',
      name: 'Page name',
      note: 'Note',
    },
    notification: {
      createdInTopic: 'Page {name} has been successfully created in topic {topic}',
      delete: 'Page {name} has been successfully deleted.',
      note: {
        delete: 'Note has been successfully deleted.',
        restore: 'Note has been successfully restored.',
        store: 'Note has been successfully stored.',
        update: 'Note has been successfully updated.',
      },
      revoke: 'Page {name} has been successfully revoked.',
      updateCollaborators: 'Page collaborators have been successfully updated!',
      updateLabels: 'Page labels have been successfully updated!',
      updateOwner: 'Page owner has been successfully updated!',
      updatePosition: 'Page position has been successfully updated.',
    },
    state: {
      noContentAvailable: 'No page content available at the moment.',
    },
    other: {
      doNotLeaveCommentEmpty: 'Do not leave comment empty...',
      permissionMissing: 'Permission to see <span class="text-juno-blue">docs page</span> is missing',
    },
  },
};
