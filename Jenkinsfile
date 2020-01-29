node {
    def app

    stage('Clone repository') {

        checkout scm
    }

    stage('Build image') {

        app = docker.build("avaxia/jenkins-test")
    }

    stage('Run image') {
            sh 'docker run -p 3000:3000 -d avaxia/jenkins-test'
            input message: '(Click "Proceed" to continue)'
            sh 'docker rm $(docker stop $(docker ps -a -q --filter ancestor=avaxia/jenkins-test --format="{{.ID}}"))'
    }
}