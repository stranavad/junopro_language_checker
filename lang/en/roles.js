export default {
  roles: {
    action: {},
    entity: {},
    field: {},
    notification: {
      deleted: '{name} role has been successfully deleted!',
      restored: '{name} role has been successfully restored!',
      store: '{name} role has been successfully created!',
      update: '{name} role has been successfully updated!',
    },
    state: {},
    other: {
      description: {
        admin:
          'Super Administrator. Have access and full permission to all pages.',
        manager:
          'Manager. Have access and permission to most of pages except permission page.',
        editor:
          'Editor. Have access to most of pages, full permission with articles and related resources.',
        user: 'Normal user. Have access to some pages',
        visitor:
          'Visitor. Have access to static pages, should not have any writable permission',
      },
    },
  },
};
