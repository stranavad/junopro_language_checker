export default {
  roles: {
    action: {},
    entity: {},
    field: {},
    notification: {
      deleted: 'Role {name} byla úspěšně smazána!',
      restored: 'Role {name} byla úspěšně obnovena!',
      store: 'Role {name} byla úspěšně vytvořena!',
      update: 'Role {name} byla úspěšně aktualizována!',
    },
    state: {},
    other: {
      description: {
        admin:
          'Super administrátor. Má přístup a plná oprávnění ke všem stránkám.',
        manager:
          'Manažer. Má přístup a oprávnění k většině stránek kromě stránky oprávnění.',
        editor:
          'Editor. Má přístup k většině stránek, plné oprávnění k článkům a souvisejícím zdrojům.',
        user: 'Normální uživatel. Má přístup k některým stránkám',
        visitor:
          'Návštěvník. Má přístup k statickým stránkám, neměl by mít žádné zapisovatelné oprávnění',
      },
    },
  },
};
