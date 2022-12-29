// in this file are keywords or sentences which are specific for integrations(jira, gitlab, integration settings)
// all should be sorted alphabetically
export default {
  integration: {
    action: {
      delete: 'Delete integration',
      edit: 'Edit integration',
    },
    detail: {
      gettingStarted: 'Getting started',
      integrationSettings: 'Integration settings',
    },
    gitlab: {
      detail: {
        gettingStarted: `<p>Sync with Gitlab will allow you to import your Gitlab projects to Juno. To successfully integrate Gitlab projects you will need to enter the details bellow.</p>`,
        gitlabSync: 'Gitlab sync',
        gitlabUrl: 'Gitlab domain',
      },
      faq: {
        answer1: `After successful integration you will be able to import and read all your projects & tickets from Gitlab in Juno.`,
        header: `GitLab is an open source end-to-end software development
         platform with built-in version control, issue tracking, code review, CI/CD, and more.`,
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
        addJira: 'Add Jira',
      },
      chooseIntegrationType: 'Choose integration type',
      detail: {
        gettingStarted: 'To enable the integration you need secure visibility the tools between each other. This can be done by filling in the following details.',
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
        bugTypeId: 'Jira bug type ID',
        cardDescription: 'Sync your jira with juno.one to display and manage your issues directly from test module.',
        contactPerson: 'Contact person',
        integrationType: 'Integration type',
        integrationName: 'Integration name',
        integrationSettings: 'Integration settings',
        issueTypeTestId: 'Jira issue type test ID',
        jiraAccessToken: 'Jira access token',
        jiraPassword: 'Jira password',
        jiraUrl: 'Jira URL',
        jiraName: 'Jira name',
        newJiraIntegration: 'New Jira integration',
      },
      notification: {
        create: 'Jira integration created successfully',
        update: 'Jira integration updated successfully',
        delete: 'Jira integration deleted successfully',
      },
      selectBugTypeIdRequest: 'Please type the Bug type ID to let Juno know what to create.',
      selectIssueTypeIdRequest: 'Please type the Issue type ID to let Juno know what to create',
      selectProjectIdRequest: 'Please select the Jira project ID',
      validation: {
        integrationType: 'Integration type is required',
        jiraUrl: 'Jira url is required',
        username: 'User name is required',
      },
    },
    other: {
      deleteIntegrationConfirmation: 'Are you sure you want to delete this integration?',
      learnMore: 'Learn more',
      needHelp: 'Need help',
      noIntegrations: 'No integrations',
      selectProjectId: 'Select project ID',
    },
    notification: {
      create: 'Integration created successfully',
      createError: 'An error ocurred when creating the integration',
      update: 'Integration updated successfully',
      updateError: 'An error ocurred when updating the integration',
      enabled: 'Integration was successfully enabled',
      disabled: 'Integration was successfully disabled',
      delete: 'Integration deleted successfully',
      deleteError: 'An error ocurred when deleting the integration',
    },
    state: {
      integrationDisabled: 'This integration is currently disabled',
      integrationEnabled: 'This integration is currently enabled',
      successfullyIntegrated: 'Successfully integrated',
    },
    zephyr: {
      field: {
        cardDescription: 'We are able to sync your Juno with Zephyr. For more details please contact us.',
        mailSubject: 'Request for Juno vs Zephyr',
        mailBody: 'Hi, We would like to try an integration with Zephyr. Could you provide us with more information? Thanks.',
      },
    },
    microsoft: {
      field: {
        cardDescription: 'We are able to sync your Juno with Microsoft.For more details please contact us.',
        mailSubject: 'Request for Juno vs Microsoft',
        mailBody: 'Hi, We would like to try an integration with Microsoft. Could you provide us with more information? Thanks.',
      },
    },
  },

};
