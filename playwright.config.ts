import { defineConfig, devices } from '@playwright/test';


export default defineConfig({

  webServer: {
  command: 'npm run start',
  url: 'http://localhost:3000',
  reuseExistingServer: !process.env.CI,
},


  testDir: './tests',
  fullyParallel: true,
  reporter: [["line"], ["allure-playwright"]],
  forbidOnly: !!process.env.CI,
 // retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  //reporter: 'html',
  use: {  
        launchOptions: {
     // slowMo: 5000,
      timeout : 50000,
      
    },
       headless :true,
       trace: 'retain-on-failure',
     // viewport: { width: 500, height: 500 },
      screenshot:'on',
      video : 'on',
      ignoreHTTPSErrors : true,
      permissions : ['geolocation' , 'notifications'],
     
      
  },  

  projects: [
    { name: 'chrome' ,
          use: { browserName: 'chromium' },
         retries: 2,

    },
  ],


  
});
