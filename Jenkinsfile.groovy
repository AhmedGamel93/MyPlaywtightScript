pipeline {
  agent { label 'windows' }

  environment {
    CI = 'true'
  }

  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install chromium'
      }
    }

    stage('Run Playwright tests') {
      steps {
        bat 'npx playwright test'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-results/**, test-results/**', allowEmptyArchive: true
    }
  }
}