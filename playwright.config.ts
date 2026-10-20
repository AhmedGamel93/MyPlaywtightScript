import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [["line"], ["allure-playwright"]],
  forbidOnly: !!process.env.CI,
 // retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  //reporter: 'html',
  globalTimeout :60*60*1000,
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
