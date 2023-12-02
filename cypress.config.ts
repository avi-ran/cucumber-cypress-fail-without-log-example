import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as dotenv from 'dotenv';
dotenv.config()

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,

  if(process.env.CUCUMBER_ENABLED === 'true') {
    await addCucumberPreprocessorPlugin(on, config);

    on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
    );
  }
  

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://duckduckgo.com",
    specPattern: ['cypress/e2e/**/*.feature', 'cypress/**/no_gherkin/*.spec.ts'],
    setupNodeEvents,
  },
});
