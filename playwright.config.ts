import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [["line"], ["allure-playwright"]],
  forbidOnly: !!process.env.CI,
 // retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  globalTimeout: 60 * 60 * 1000,
  //reporter: 'html',
  use: {  
        launchOptions: {
     // slowMo: 5000,
      timeout : 50000,
      
      
    },
       headless :true,
       trace: 'on-first-retry',
     // viewport: { width: 500, height: 500 },
      screenshot:'on',
      video : 'on',
      ignoreHTTPSErrors : true,
      permissions : ['geolocation' , 'notifications'],
       baseURL: 'http://localhost:3000',

    // Collect trace when retrying the failed test.
    
     
      
  },  

  projects: [
    { name: 'chrome' ,
          use: { browserName: 'chromium' },
         retries: 2,

    },
  ],
webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },

  
});
