// in this file are keywords or sentences which are specific for timesheet module
// all should be sorted alphabetically
export default {
  timesheet: {
    action: {
      add: 'Add activity',
      createActivity: 'Create activity',
      createType: 'Create type',
      changeToApproved: 'Change to approved',
      changeToDeclined: 'Change to declined',
      downloadXls: 'Download .xls',
      selectActivity: 'Select activity',
      selectPlace: 'Select place',
      showInCalendar: 'Show in calendar',
      showPdf: 'Show .pdf',
      updateActivity: 'Update activity',
      updateType: 'Update type',
    },
    entity: {
      activities: 'Activities',
      allSettings: 'All Settings',
      calendar: 'Calendar',
      generalSettings: 'General Settings',
      reports: 'Reports',
      requests: 'Requests',
      requestType: 'Request Type',
      requestTypes: 'Request Types',
      schedule: 'Schedule',
      timesheet: {
        activities: 'Timesheet - Activities',
        reports: 'Timesheet - Reports',
        requests: 'Timesheet - Requests',
        calendar: 'Timesheet - Calendar',
        settings: 'Timesheet - Settings',
      },
      timesheetSettings: {
        main: 'Timesheet - Settings Main',
        requests: 'Timesheet - Settings Requests',
        general: 'Timesheet - General settings',
      },
      type: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '5day': 'Five days',
      },
      work: 'Work',
      workStatistics: 'Work statistics',
    },
    field: {
      activity: 'Activity',
      approve: 'Approval is required for this activity',
      dayOff: 'Day off',
      doctor: 'Doctor',
      extraHours: 'Extra hours',
      holiday: 'Days for holidays used in this year',
      includeWeekends: 'Report hours for holidays & weekends',
      meetings: 'Meetings',
      place: 'Place',
      workingHours: 'Working hours',
    },
    notification: {
      cloneActivity: 'Activity was successfully cloned',
      approveActivity: 'Activity was successfully approved',
      createActivity: 'Activity was successfully created',
      createType: 'Request Type was successfully created',
      deleteActivity: 'Activity was successfully deleted',
      deleteRequestType: 'Request Type was successfully deleted',
      denyActivity: 'Activity was successfully denied',
      noRequest: 'You don’t have request type yet',
      noWorkingStatisticsFound: 'No work statistics found in selected period',
      specificReportExportFailed: 'Export of specific report failed',
      nonWorkingReportExportFailed: 'Export of non-working activities report failed',
      projectReportExportFailed: 'Export of project report failed',
      holidayReportExportFailed: 'Export of holidays report failed',
      restoreActivity: 'Activity was successfully restored',
      restoreRequestType: 'Request Type was successfully restored',
      updateActivity: 'Activity was successfully updated',
      updateType: 'Request Type was successfully updated',
    },
    other: {
      activityTypeRequired: 'Activity Type is required',
      approvableBy: 'Approvable by',
      working: 'Working',
      newRequestType: 'New request type',
      nonWorking: 'Non-Working',
      placeRequired: 'Place is required',
      timeToBeforeFromError: 'Time to can`t be before time from',
      settingsRequestNoDataSubtitle: 'Here you can add types like Working hours, Holidays, Doctor, Days off or other',
      settingsScheduleSubtitle: 'Change limits, meetings schedule...',
      settingsScheduleEventRequests: 'Edit categories, colors, notifications...',
    },
  },
};