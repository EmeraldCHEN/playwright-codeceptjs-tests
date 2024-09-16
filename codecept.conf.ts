import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://todomvc.com/examples/react/dist',
      show: true, // Set to false to run headless
      restart: false,
      waitForNavigation: 'domcontentloaded', // Wait for DOMContentLoaded event
      waitForAction: 500
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'playwright-codeceptjs-tests'
}