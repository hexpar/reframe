import hydratePage from '@reframe/browser/hydratePage';
import CounterPage from './CounterPage.js';

console.log("before hydration");

(async () => {
    await hydratePage(CounterPage, __REFRAME__BROWSER_CONFIG);

    console.log("after hydration");
})();
