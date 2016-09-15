import 'angular-google-analytics';
import uiModules from 'ui/modules';
import chrome from 'ui/chrome';

uiModules.get('kibana', ['angular-google-analytics'])
  .config(function(AnalyticsProvider) {
    let config = chrome.getInjected('gaConfig', {});
    AnalyticsProvider.setAccount(config);
    AnalyticsProvider.readFromRoute(true);
  });
