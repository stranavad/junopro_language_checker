export default {
  integration: {
    action: {
      delete: 'Smazat integraci',
      edit: 'Upravit integraci',
    },
    detail: {
      gettingStarted: 'Začínáme',
      integrationSettings: 'Nastavení integrace',
    },
    gitlab: {
      detail: {
        gettingStarted: `<p>Sync with Gitlab will allow you to import your Gitlab projects to Juno. To successfully integrate Gitlab projects you will need to enter the details bellow.</p>`,
        gitlabSync: 'Gitlab sync',
        gitlabUrl: 'Gitlab domain',
      },
      faq: {
        answer1: `After successful integration you will be able to import and read all your projects & tickets from Gitlab in Juno.`,
        header: `GitLab is an open source end-to-end software development platform with built-in version control, issue tracking, code review, CI/CD, and more.`,
        question1: 'What functionality will I get after Integration?',
        subheader: 'Gitlab Integration FAQ',
        whatIsGitlab: 'What is Gitlab',
      },
      field: {
        insertGitlabDomain: 'Insert your Gitlab domain',
        gitlabDomain: 'Gitlab domain',
        accessToken: 'Access token',
        defaultUser: 'Default user',
        gitlabHttp: 'Gitlab HTTP',
        http: 'HTTP/HTTPS',
        typeProjectId: 'Type the project id',
        cardDescription: 'Sync your GitLab with juno.one to display and manage your tasks and their labels, attachments and comments.',
      },
      notification: {
        create: 'Gitlab integration created successfully',
        update: 'Gitlab integration updated successfully',
        delete: 'Gitlab integration deleted successfully',
      },
      validation: {
        defaultUser: 'Default user is required',
        accessToken: 'Access token is required',
        gitlabDomain: 'Gitlab domain is required',
      },
    },
    jira: {
      action: {
        addJira: 'Přidat Jira',
      },
      chooseIntegrationType: 'Vyberte typ integrace',
      detail: {
        gettingStarted: 'Chcete-li povolit integraci, potřebujete bezpečně vidět nástroje mezi sebou. To lze udělat vyplněním následujících údajů.',
        jiraSoftware: 'Jira software',
      },
      faq: {
        answer1: ` All you need is a Jira instance and a access token, you can
        find more
        <a
          class="j-link"
          href="https://help.juno.one/documentation/1.0/jira_integration/how_to_connect_jira_to_juno.one_onpremise"
          target="_blank"
          rel="noopener noreferrer"
        > here.
        </a>`,
        answer2: `When creating a project, you can choose whether to use Jira
        for the Issue tracking, or Juno, for more info, please refer
        to the
        <a
          class="j-link"
          href="https://help.juno.one/documentation/1.0/jira_integration/how_to_connect_jira_to_juno.one_onpremise"
          target="_blank"
          rel="noopener noreferrer"
        >help
        </a> page.`,
        answer3: `You can just click the entry in related Issues, for detailed
        tutorial, please refer to the                           <a
          class="j-link"
          href="https://help.juno.one/documentation/1.0/jira_integration/how_to_connect_jira_to_juno.one_onpremise"
          target="_blank"
          rel="noopener noreferrer"
        >help
        </a> page.`,
        answer4: `Please double check all the entered credentials, especially that you have created Test runs
        in your Jira. For successfull project integration it is necessary to create an empty paragraph
        field called <span class="t-body__bold">Test runs</span> in your Jira project.
        For a step by step tutorial please visit
        <a
          class="j-link"
          href="https://help.juno.one/documentation/1.0/jira_integration/how_to_connect_jira_to_juno.one_onpremise"
          target="_blank"
          rel="noopener noreferrer"
        >Juno documentation here.
        </a>`,
        header: `JIRA is an Project/Incident Management Tool used for Project
      Management, Bug Tracking, Issue Tracking and Workflow developed
      by Atlassian Inc. It is widely used as an issue-tracking tool
      for all types of testing.`,
        listItems: `<li class="t-body"> - Create Jira Issues from Juno </li><li class="t-body"> - Seeing Jira Issues from Juno </li>`,
        question1: 'How do I integrate with Jira?',
        question2: 'How do I setup Jira integration with one of my Juno projects?',
        question3: 'How do I view Jira Issues created from juno?',
        question4: 'I am having a problem connecting issue type test ID',
        subheader: 'Jira integration FAQ',
        subtitle: 'The integration allows you to:',
        whatIsJira: 'What is Jira',
      },
      field: {
        bugTypeId: 'ID typu chyby Jira',
        cardDescription: 'Synchronizujte své jira s juno.one, abyste mohli zobrazit a spravovat své problémy přímo z modulu pro testování.',
        contactPerson: 'Kontaktní osoba',
        integrationType: 'Typ integrace',
        integrationName: 'Název integrace',
        integrationSettings: 'Nastavení integrace',
        issueTypeTestId: 'ID typu problému Jira',
        jiraAccessToken: 'Token přístupu Jira',
        jiraPassword: 'Heslo Jira',
        jiraUrl: 'URL Jira',
        jiraName: 'Název Jira',
        newJiraIntegration: 'Nová integrace Jira',
      },
      notification: {
        create: 'Integrace Jira byla úspěšně vytvořena',
        update: 'Integrace Jira byla úspěšně aktualizována',
        delete: 'Integrace Jira byla úspěšně odstraněna',
      },
      selectBugTypeIdRequest: 'Zadejte ID typu chyby, aby Juno věděl, co vytvořit.',
      selectIssueTypeIdRequest: 'Zadejte ID typu problému, aby Juno věděl, co vytvořit.',
      selectProjectIdRequest: 'Vyberte ID projektu Jira.',
      validation: {
        integrationType: 'Typ integrace je povinný.',
        jiraUrl: 'Url Jira je povinné.',
        username: 'Uživatelské jméno je povinné.',
      },
    },
    other: {
      deleteIntegrationConfirmation: 'Opravdu chcete tuto integraci odstranit?',
      learnMore: 'Dozvědět se více',
      needHelp: 'Potřebujete pomoc?',
      noIntegrations: 'Žádné integrace',
      selectProjectId: 'Vyberte ID projektu',
    },
    notification: {
      create: 'Integrace byla úspěšně vytvořena',
      createError: 'Při vytváření integrace došlo k chybě',
      update: 'Integrace byla úspěšně aktualizována',
      updateError: 'Při aktualizaci integrace došlo k chybě',
      enabled: 'Integrace byla úspěšně povolena',
      disabled: 'Integrace byla úspěšně zakázána',
      delete: 'Integrace byla úspěšně odstraněna',
      deleteError: 'Při odstraňování integrace došlo k chybě',
    },
    state: {
      integrationDisabled: 'Tato integrace je momentálně zakázána',
      integrationEnabled: 'Tato integrace je momentálně povolena',
      successfullyIntegrated: 'Úspěšně integrováno',
    },
    zephyr: {
      field: {
        cardDescription: 'Můžeme synchronizovat vaše Juno s Zephyr. Pro více informací nás prosím kontaktujte.',
        mailSubject: 'Žádost o Juno vs Zephyr',
        mailBody: 'Ahoj, rádi bychom vyzkoušeli integraci s Zephyr. Můžete nám poskytnout více informací? Děkujeme.',
      },
    },
    microsoft: {
      field: {
        cardDescription: 'Můžeme synchronizovat vaše Juno s Microsoft. Pro více informací nás prosím kontaktujte.',
        mailSubject: 'Žádost o Juno vs Microsoft',
        mailBody: 'Ahoj, rádi bychom vyzkoušeli integraci s Microsoft. Můžete nám poskytnout více informací? Děkujeme.',
      },
    },
  },
};
