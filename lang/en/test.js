// in this file are keywords or sentences which are specific for test case, test space, test plan or test step
// all should be sorted alphabetically

export default {
  export: {
    field: {
      severalMinutes: 'This action may take several minutes',
      exportedResults: 'The exported results will be <span class="t-body__bold">sent to your email</span>',
      checkEmail: 'If you don’t see anything in your inbox please check your spam folder as well.',
    },
  },
  testCase: {
    action: {
      addExpectedResult: 'Add expected result',
      addStatus: 'Add Status',
      addTestData: 'Add test data',
      addTesters: 'Add Testers',
      addOwner: 'Add Owner',
      addToPlan: 'Add Cases to Plans',
      assignTesters: 'Assign Testers',
      copy: 'Copy test cases to another project',
      copyAllFiltered: 'Copy All Filtered',
      copySelected: 'Copy selected',
      deleteConfirm: 'Are you sure you want to delete this test case?',
      reportToJira: 'Report to Jira',
      reportBug: 'Report a bug',
      searchOrFilter: 'Search or filter cases...',
      selectOrAdd: 'Select or Add Test Case',
      switchView: 'Switch test case view',
    },
    entity: {
      author: 'Author',
      testCase: 'Test Case',
      testCases: 'Test Cases',
      testData: 'Test data',
    },
    field: {
      count: 'test cases count',
      expectedResult: 'Expected result',
      notExecutedYet: 'Not executed yet',
      testParameters: 'Test parameters',
      relatedIssues: 'Related issues',
      testStatusTableView: 'Test Status {status}%',
      trackingParameters: 'Tracking parameters',
      reportedIn: 'Reported in',
      reportedInJira: 'Reported in Jira',
    },
    notification: {
      bulkClone: 'Test cases were copied successfully to project {name}',
      bulkCloneFiltered:
          'All filtered test cases were copied successfully to project {name}',
      changeAuthor: '{userName} was set as author of Test - {name}!',
      changeOwner: '{userName} was set as owner of Test - {name}!',
      multipleAdd: 'Test cases successfully added to Test plans!',
      updateTesters: '{name} testers have been successfully updated!',
    },
    state: {
      reporting: 'Reporting...',
    },
  },
  testExecution: {
    action: {
      executeTestPlan: 'Execute test plan',
      stopExecution: 'Stop execution',
      resume: 'Resume',
      resumeLastExecution: 'Resume last execution',
      startExecution: 'Start execution',

    },
    entity: {},
    field: {
      est: 'Est. Exec. Time',
      executedBy: 'Executed by',
      testResult: 'Test result',
      testStatusTableView: 'TEST STATUS {status}%',
      status: 'Execution status',
    },
    notification: {
      updateResult: 'Result was successfully updated',
      start: 'Execution of {name} started at {datetime}',
      stop: 'Execution of {name} stopped at {datetime}',
      cancel: 'Execution of {name} canceled at {datetime}',
      changeStatusAll:
            'Execution of {name} changed all to {statusName}',
      changePlan: '{name} plan changed to {testPlanName}',
    },
    other: {
      forExecution: 'Test plan selected for execution',
    },
    state: {
      executed: 'Executed',
      executedInTestPlan: 'Executed in test plan',
      loadingResult: 'Loading test result...',
      notExecuted: 'Not executed yet',
    },
  },
  testPlan: {
    action: {
      addFeaturesNotToBeTested: 'Add features not to be tested',
      addFeaturesToBeTested: 'Add features to be tested',
      choose: 'Choose test plan',
      chooseAndExecute: 'Choose test plan and execute',
      deleteConfirm: 'Are you sure you want to delete this test plan?',
      removeFromPlan: 'Remove from plan',
      searchOrFilter: 'Search or filter plans...',
    },
    entity: {
      plan: 'Plan',
      testPlans: 'Test Plans',
      testPlan: 'Test Plan',
    },
    field: {
      currentStatus: 'Current status',
      difference: 'Difference',
      featuresNotToBeTested: 'Features NOT to be tested',
      featuresToBeTested: 'Features to be tested',
      plannedStatus: 'Planned status',
      progress: 'Progress',
      statistics: 'Statistics',
      tcCountDifference: 'TC count difference',
      timeline: 'Timeline',

    },
    notification: {},
    state: {
      blocked: 'Blocked',
      failed: 'Failed',
      notAvailable: 'N/A',
      notCompleted: 'Not-completed',
      noRun: 'No Run',
      notRun: 'Not-run',
      passed: 'Passed',

    },
  },
  testRun: {
    action: {},
    entity: {
      jiraIssue: 'Jira issue',
    },
    field: {},
    other: {
      by: 'By {name}',
    },
    state: {
      noRunsFound: 'No runs found',
    },
  },
  testSpace: {
    action: {
      add: 'Add Test Spaces',
      create: 'Create New Space',
      searchOrFilter: 'Search or filter spaces...',
    },
    entity: {
      testSpaces: 'Test Spaces',
    },
    field: {
      testSpaceSettings: 'Test space settings',
    },
    notification: {
      store: 'Test Space has been successfully created',
      update: 'Test Space has been successfully updated',
      delete: 'Test Space has been successfully deleted',
      restore: 'Test Space has been successfully restored',
      updateTestSpaces: '{name} test spaces have been successfully updated!',
    },
    state: {
      storing: 'Storing...',
      storingSpace: 'Storing space...',
    },
  },
  testStep: {
    action: {
      addExpectation: 'Add expectation',
      addPrecondition: 'Add precondition',
      addResult: 'Add result',
      addStep: 'Add Test Step',
      searchOrFilter: 'Search or filter steps...',
    },
    entity: {},
    field: {
      expectation: 'Expectation',
      headers: {
        comments: 'Comments',
        runs: 'Runs',
        steps: 'Steps',
      },
      lastExecStatus: 'Last exec status',
      precondition: 'Precondition',
      result: 'Result',
    },
    notification: {
      delete: 'Step has been successfully deleted!',
      positionUpdated: 'Step position has been successfully updated.',
      restore: 'Step was successfully restored!',
      store: 'Step {stepNumber} has been successfully created!',
      updated: 'Step has been successfully updated!',
    },
    state: {
      loading: 'Loading steps...',
      noStepsDefined: 'No steps defined',
      noStepsFound: 'No test steps found.',
    },
  },
};
