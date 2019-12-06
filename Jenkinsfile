pipeline {
  agent any
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/priyankak1212/chandrapratap.git'
      }
    }
 
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Start') {
      steps {
         sh 'npm start'
      }
    }  
   
    stage('Build docker image') {
      steps {
         sh 'docker build -t priyankak1212/devopswebsite .'
      }
    } 
     stage('Run docker image') {
      steps {
         sh 'docker run -p 4950:3000 -d priyankak1212/devopswebsite'
      }
    } 
  }
}
