var app = angular.module('myResume', []);
app.controller('ResumeController', function () {
    this.name = 'Kittipat';
    this.lastName = 'Metachoochok';
    this.contact = {
        email: 'mac.kittipat@gmail.com',
        mobilePhone: '084-776-2700'
    };
    this.abilities = [
        {
            category: 'Programming Language',
            skills: [
                'Java',
                'JavaScript',
                'HTML',
                'CSS',
                'SQL'
            ]
        },
        {
            category: 'Framework',
            skills: [
                'Spring Framework',
                'Node.js',
                'Express.js',
                'jQuery',
                'Bootstrap'
            ]
        },
        {
            category: 'Database',
            skills: [
                'MySQL',
                'MongoDB',
                'Apache Hadoop',
                'Apache Cassandra'
            ]
        },
        {
            category: 'OS / Tools',
            skills: [
                'Ubuntu',
                'Windows',
                'Git',
                'Maven'
            ]
        }
    ];
    this.certificates = [
        {
            'name' : 'MongoDB for DBAs',
            'url' : 'https://s3.amazonaws.com/edu-cert.10gen.com/downloads/e7f71c444be848bcbd536136cf2f0318/Certificate.pdf'
        },
        {
            'name' : 'MongoDB for Java Developers',
            'url' : 'https://s3.amazonaws.com/edu-cert.10gen.com/downloads/e38c18b5a5a1464296c90bde690ea482/Certificate.pdf'
        },
        {
            'name' : 'MongoDB for Node.js Developers',
            'url' : 'https://s3.amazonaws.com/edu-cert.10gen.com/downloads/02f3615ecb0e4e8cb253c402b21455a5/Certificate.pdf'
        },
        {
            'name' : 'ScrumMaster',
            'url' : 'https://drive.google.com/a/abctech-thailand.com/file/d/0Bx9N7iLqX9WTb3RCMmdtVkZmNm8/view'
        }
    ];
});