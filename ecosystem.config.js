module.exports = {
    apps: [
        {
            name: 'microservice-users',
            cwd: './microservice-users',
            script: 'npm',
            args: 'run start:dev',
            autorestart: true
        },
        {
            name: 'api',
            cwd: './api',
            script: 'npm',
            args: 'run start:dev',
            autorestart: true
        }
    ]
}